import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/solid'
import TextareaAutosize from 'react-textarea-autosize'

interface Props {
  items: string[]
  setItems: (items: string[]) => void
  placeholder?: string
}

const SortableInputList = ({ items, setItems, placeholder }: Props) => {
  const addItem = () => {
    setItems([...items, ''])
  }

  const deleteItem = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const moveItemUp = (index: number) => {
    if (index === 0) {
      return
    }

    const newItems = [...items]
    const item = newItems[index]
    newItems.splice(index, 1)
    newItems.splice(index - 1, 0, item)
    setItems(newItems)
  }

  const moveItemDown = (index: number) => {
    if (index === items.length - 1) {
      return
    }

    const newItems = [...items]
    const item = newItems[index]
    newItems.splice(index, 1)
    newItems.splice(index + 1, 0, item)
    setItems(newItems)
  }

  return (
    <div className="flex flex-col space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => moveItemUp(index)}
            disabled={index === 0}
            className="inline-flex items-center justify-center rounded-md p-2 text-blue-500 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-500"
          >
            <span className="sr-only">Move Up</span>
            <ArrowUpCircleIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveItemDown(index)}
            disabled={index === items.length - 1}
            className="inline-flex items-center justify-center rounded-md p-2 text-blue-500 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-500"
          >
            <span className="sr-only">Move Down</span>
            <ArrowDownCircleIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <TextareaAutosize
            className="block w-full resize-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:placeholder-gray-300 dark:focus:ring-blue-500 sm:text-sm"
            placeholder={placeholder || 'Enter a value'}
            value={item}
            onChange={(e) => {
              const newItems = [...items]
              newItems[index] = e.target.value
              setItems(newItems)
            }}
          />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-red-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:hover:bg-red-700 dark:hover:text-red-500 dark:focus:ring-red-500"
            onClick={() => deleteItem(index)}
          >
            <span className="sr-only">Delete</span>
            <MinusCircleIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      ))}
      <div className="flex items-center justify-center space-x-2">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-green-500 hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 dark:hover:bg-green-700 dark:hover:text-green-500 dark:focus:ring-green-500"
          onClick={addItem}
        >
          <span className="sr-only">Add</span>
          <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
          <span className="ml-2">Add</span>
        </button>
      </div>
    </div>
  )
}

export default SortableInputList

import { useState } from 'react'

import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  function handleSearch(input) {
    console.log('searching for: ', input)
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:placeholder-gray-300 dark:focus:ring-blue-500 sm:text-sm"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(searchInput)
            setSearchInput('')
          }
        }}
      />
      {searchInput && (
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 dark:focus:ring-blue-500"
            onClick={() => setSearchInput('')}
          >
            <span className="sr-only">Clear</span>
            <XCircleIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchBar

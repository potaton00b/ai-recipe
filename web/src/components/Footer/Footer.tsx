const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-4 dark:bg-gray-800">
      <a
        className="flex items-center justify-center"
        href="https://redwoodjs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          Made with love and{' '}
          <span className="text-red-500 hover:underline">RedwoodJS</span>
        </span>
      </a>
    </footer>
  )
}

export default Footer

import { UserButton } from '@clerk/clerk-react'

import { useAuth } from '@redwoodjs/auth'
import { routes } from '@redwoodjs/router'

const UserDropdown = () => {
  const { isAuthenticated, logIn, signUp } = useAuth()

  if (isAuthenticated) {
    return <UserButton afterSignOutUrl={routes.home()} />
  }

  return (
    <div className="flex items-center">
      <button
        onClick={logIn}
        className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Log in
      </button>
      <button
        onClick={signUp}
        className="ml-4 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Sign up
      </button>
    </div>
  )
}

export default UserDropdown

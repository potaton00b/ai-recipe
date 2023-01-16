import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth } from '@redwoodjs/auth'
import { routes, Link, useLocation } from '@redwoodjs/router'

import UserDropdown from '../UserDropdown/UserDropdown'

const Brand = () => {
  return (
    <Link to={routes.home()}>
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        ai-recipe{' '}
        <span className="rounded-xl bg-blue-500 px-1 text-xs text-white">
          Beta
        </span>
      </h1>
    </Link>
  )
}

const Header = () => {
  const location = useLocation()
  const currentRoute = location.pathname
  const { isAuthenticated } = useAuth()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const navItems = [
    {
      name: 'My Recipes',
      route: routes.recipes(),
      isCurrent: currentRoute === routes.recipes(),
      isShown: isAuthenticated,
    },
    {
      name: 'Preferences',
      route: routes.preferences(),
      isCurrent: currentRoute === routes.preferences(),
      isShown: isAuthenticated,
    },
  ]

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-800">
      <Popover className="relative border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Brand />
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {navItems
                .filter((item) => item.isShown)
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    className={classNames(
                      item.isCurrent
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-500 dark:text-gray-400',
                      'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium'
                    )}
                    aria-current={item.isCurrent ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <UserDropdown />
            </div>
          </div>

          <Transition
            as={React.Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Brand />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navItems
                    .filter((item) => item.isShown)
                    .map((item) => (
                      <Link
                        key={item.name}
                        to={item.route}
                        className={classNames(
                          item.isCurrent
                            ? 'text-gray-900 dark:text-gray-100'
                            : 'text-gray-500 dark:text-gray-400',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.isCurrent ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
                {/* user dropdown on right side */}
                <div className="flex items-center justify-end px-5 py-4">
                  <UserDropdown />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </div>
  )
}

export default Header

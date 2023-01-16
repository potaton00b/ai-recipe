import { useAuth } from '@redwoodjs/auth'
import { routes, Link, Redirect } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { logIn, signUp, logOut, isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to={routes.recipes()} />
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to <span className="text-blue-500">ai-recipe</span>{' '}
        <span className="rounded-xl bg-blue-500 px-2 text-2xl text-white">
          Beta
        </span>
      </h1>

      <div className="mt-4 text-center text-xl text-gray-700 dark:text-gray-300">
        <p>
          ai-recipe is a web app that uses{' '}
          <a
            href="https://openai.com/blog/better-language-models/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            GPT
          </a>{' '}
          to generate never before seen recipes.
        </p>
        <p>
          No ads, no videos, no tracking. Just all the recipes you could ever
          want.
        </p>
        <p className="mt-4">
          Getting started is as easy as <span className="text-blue-500">1</span>
          , <span className="text-blue-500">2</span>,{' '}
          <span className="text-blue-500">3</span>
        </p>
      </div>

      {/* step 1 */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
          1
        </div>
        <h2 className="mt-2 text-2xl text-gray-900 dark:text-gray-100">
          Sign up
        </h2>
        <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
          Sign up for an account to save your recipes and access them from
          anywhere.
        </p>
      </div>

      {/* step 2 */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
          2
        </div>
        <h2 className="mt-2 text-2xl text-gray-900 dark:text-gray-100">
          Adjust your preferences
        </h2>
        <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
          Adjust your preferences to get the best recipes for you.
        </p>
      </div>

      {/* step 3 */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
          3
        </div>
        <h2 className="mt-2 text-2xl text-gray-900 dark:text-gray-100">
          Get your recipes
        </h2>
        <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
          Get your recipes delivered to your inbox every morning.
        </p>
      </div>

      {isAuthenticated ? (
        <div className="my-8 flex flex-col items-center">
          <h2 className="mt-2 text-2xl text-gray-900 dark:text-gray-100">
            Congrats! You're signed up.
          </h2>
          <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
            You can adjust your preferences at any time. We'll send you a
            confirmation email when we launch.
          </p>
          <div className="mt-4 flex flex-row">
            <Link
              to={routes.preferences()}
              className="rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Adjust preferences
            </Link>
            <button
              onClick={logOut}
              className="ml-4 rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <div className="my-8 flex flex-col items-center">
          <h2 className="mt-2 text-2xl text-gray-900 dark:text-gray-100">
            Sign up to get started
          </h2>
          <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
            You'll be first to know when we launch.
          </p>
          <div className="mt-4 flex flex-row">
            <button
              onClick={signUp}
              className="rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Sign up
            </button>
            <button
              onClick={logIn}
              className="ml-4 rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage

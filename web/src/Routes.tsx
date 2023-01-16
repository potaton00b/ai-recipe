// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'
import { Set } from '@redwoodjs/router'

import Loader from './components/Loader/Loader'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const WhileAuthLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <Loader />
  </div>
)

const Routes = () => {
  return (
    <Router pageLoadingDelay={100}>
      <Set wrap={DashboardLayout} whileLoadingAuth={WhileAuthLoader}>
        <Route path="/" page={HomePage} name="home" />
        <Private unauthenticated="home">
          <Route path="/recipes" page={RecipesPage} name="recipes" />
          <Route path="/recipe/{id:Int}" page={RecipePage} name="recipe" />
          <Route path="/new-recipe" page={NewRecipePage} name="newRecipe" />
          <Route path="/preferences" page={PreferencesPage} name="preferences" />
        </Private>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes

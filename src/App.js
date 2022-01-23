import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from './components'
import Spinner from 'react-bootstrap/Spinner'

const SearchView = React.lazy(() => import('./views/SearchView'))
const DetailView = React.lazy(() => import('./views/DetailView'))
const FavoritesView = React.lazy(() => import('./views/FavoritesView'))

export default function App () {
  return (
    <Layout>
      <Suspense fallback={<Spinner animation='grow' variant='primary' />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/search' />
          </Route>
          <Route path='/search'>
            <SearchView />
          </Route>
          <Route path='/favorites'>
            <FavoritesView />
          </Route>
          <Route path='/place/:placeId'>
            <DetailView />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

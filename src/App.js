import { Route, Switch, Redirect } from 'react-router-dom'

import { SearchView, DetailView, FavoritesView } from './views'
import { Layout } from './components'

export default function App () {
  return (
    <Layout>
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
    </Layout>
  )
}

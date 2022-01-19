import { Route, Switch, Redirect } from 'react-router-dom'

import { SearchView, DetailView } from './views'

export default function App () {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/search' />
      </Route>
      <Route path='/search'>
        <SearchView />
      </Route>
      <Route path='/place/:placeId'>
        <DetailView />
      </Route>
    </Switch>
  )
}

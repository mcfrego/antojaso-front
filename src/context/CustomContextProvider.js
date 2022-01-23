import { LocationProvider } from './location-context'
import { FavoritePlacesProvider } from './favorites-places-context'

export function CustomContextProvider ({ children }) {
  return (
    <LocationProvider>
      <FavoritePlacesProvider>{children}</FavoritePlacesProvider>
    </LocationProvider>
  )
}

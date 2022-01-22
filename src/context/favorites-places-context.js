import React from 'react'
import { useFavResults } from '../hooks'

export const FavoritePlacesContext = React.createContext({
  favorites: [],
  onAddFavorite: () => {},
  onDeleteFavorite: () => {}
})

export function FavoritePlacesProvider ({ children }) {
  const [favorites, onAddFavorite, onDeleteFavorite] = useFavResults({
    key: 'favoritePlaces',
    initialValue: []
  })
  return (
    <FavoritePlacesContext.Provider
      value={{
        favorites,
        onAddFavorite,
        onDeleteFavorite
      }}
    >
      {children}
    </FavoritePlacesContext.Provider>
  )
}

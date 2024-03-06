import React ,{ createContext , useState} from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoriteContextProvider ({children}) {

    const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

    function addFavorite(id) {
        setFavoriteFoodIds((current) => [...current,id])
    }

    function removeFavorite(id) {
        setFavoriteFoodIds((current) => current.filter((foodId) => foodId != id))
    }

    const value = {
        ids:favoriteFoodIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }

    return (
        <FavoriteContext.Provider
            value={value}
        >
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;
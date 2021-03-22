import { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';

import useCharacters from '../hooks/useCharacters';

// Crear un estado inicial.
const initialState = {
    favorites: [],
};

const API = `https://rickandmortyapi.com/api/character/`;

const favoriteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        default:
            return state;
    }
}

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleClick = favorite => dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, []);

    const filtederedUsers = useMemo(() => characters.filter(user => user.name.toLowerCase().includes(search.toLowerCase())), [characters, search]);

    return (
        <div className="characters">
            <ul>
                {
                    favorites.favorites.map(favorite => <li style={ { listStyle: 'none' } }key={ favorite.id }>{ favorite.name }</li>)
                }
            </ul>

            <Search
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}
            />

            {
                filtederedUsers.map(character => (
                    <div className="item" key={character.id}>
                        <h2>{character.name}</h2>
                        <button type="button" onClick={ () => handleClick(character)}>Add to favorites</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;
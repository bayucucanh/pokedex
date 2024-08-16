import axios from 'axios';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Pokemon} from './types';
import {YellowBox} from 'react-native';

const useHome = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [offset, setOffset] = useState(5);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPokemon = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${offset}`,
      );
      //   console.log(JSON.stringify(response.data, null, 2));
      const pokemonArray: Pokemon[] = [];

      for (const pokemon of response.data.results) {
        const pokemonDetailsResponse = await axios.get(pokemon.url);
        const pokemonDetails = pokemonDetailsResponse.data;

        pokemonArray.push({
          id: pokemonDetails.id,
          name:
            pokemonDetails.name.charAt(0).toUpperCase() +
            pokemonDetails.name.slice(1),
          type: pokemonDetails.types[0].type.name,
          types: pokemonDetails.types,
          imgUrl:
            pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }
      //   console.log(JSON.stringify(pokemonArray, null, 2));
      setPokemons(pokemonArray);
    } catch (error) {
      console.error('Failed to fetch Pokémon:', error);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchPokemon();
    YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
  }, [fetchPokemon]);

  const memoizedPokemons = useMemo(() => pokemons, [pokemons]);

  const loadMorePokemon = () => {
    if (offset < 100) {
      setOffset(prevOffset => prevOffset + 5);
    }
  };
  //   console.log(memoizedPokemons, '==================');

  return {
    memoizedPokemons,
    loadMorePokemon,
    loading,
  };
};

export default useHome;

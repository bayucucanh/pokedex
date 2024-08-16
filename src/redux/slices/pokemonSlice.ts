import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Pokemon} from '../../pages/HomeScreen/types';

interface PokemonState {
  list: any[];
  myPokemons: any[];
}

const initialState: PokemonState = {
  list: [],
  myPokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<any[]>) => {
      state.list = action.payload;
    },
    addPokemonToMyList: (state, action: PayloadAction<Pokemon>) => {
      state.myPokemons.push(action.payload);
    },
    removePokemonFromMyList: (state, action: PayloadAction<string>) => {
      state.myPokemons = state.myPokemons.filter(
        p => p.nickname !== action.payload,
      );
    },
  },
});

export const {setPokemonList, addPokemonToMyList, removePokemonFromMyList} =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PokemonState {
  list: any[];
  myPokemons: {nickname: string; pokemon: any}[];
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
    addPokemonToMyList: (
      state,
      action: PayloadAction<{nickname: string; pokemon: any}>,
    ) => {
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

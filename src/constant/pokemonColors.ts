export const pokemonColors: any = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#FA6C6C',
  water: '#6890F0',
  grass: '#48CFB2',
  electric: '#FFCE4B',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
};

export const getPokemonColor = (pokemonName: string): string => {
  const lowercaseName = pokemonName.toLowerCase();
  const colorKey = Object.keys(pokemonColors).find(key =>
    lowercaseName.includes(key),
  );
  return colorKey ? pokemonColors[colorKey] : '#A8A878';
};

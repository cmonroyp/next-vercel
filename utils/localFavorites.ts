//Local Storage Favorite
const toggleFavorite = (id: number) => {
	console.log('Toggle Favorite Llamdo');
	let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	if (favorites.includes(id)) {
		favorites = favorites.filter((pokeId) => pokeId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

//Capitalize
const wordCapitalize = (name: string): string => {
	return name[0].toUpperCase() + name.substring(1);
};

//valida si existe en favoritos
const existInFavorites = (id: number): boolean => {
	if (typeof window === 'undefined') return false;

	const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
	return favorites.includes(id);
};

//retorna los pokemons que esten en favoritos
const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const exportedFunctions = {
	toggleFavorite,
	wordCapitalize,
	existInFavorites,
	pokemons,
};
export default exportedFunctions;

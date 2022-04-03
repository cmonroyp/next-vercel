import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;
export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'PokemonApp'}</title>
				<meta name="author" content="Carlos Mario Monroy" />
				<meta name="description" content={`Informacion sobre el Pokémon ${title}`} />
				<meta name="keywords" content={`${title},pokemon, pokedex`} />
				<meta property="og:title" content={`informacion sobre ${title}`} />
				<meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};

import { useState } from 'react';

let initialArtists = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Louise Nevelson' },
];

export default function List() {
	const [artists, setArtists] = useState(
		initialArtists
	);

	//Delete function
	// const delBtn = (id) => {
	// 	const del = [...artists].filter((e) => e.id != id);
	// 	setArtists(del);
	// }
	return (
		<>
			<h1>Inspiring sculptors:</h1>
			<ul>
				{artists.map(artist => (
					<li key={artist.id}>
						{artist.name}{' '}
						<button onClick={() => {
							// delBtn(artist.id) Delete items using function

						//Removing item using filter method
							setArtists(
								artists.filter((e) => e.id != artist.id)
							)
						}}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

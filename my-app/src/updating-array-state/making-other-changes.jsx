import { useState } from 'react';

const initialList = [
	{ id: 0, title: 'Big Bellies' },
	{ id: 1, title: 'Lunar Landscape' },
	{ id: 2, title: 'Terracotta Army' },
];

export default function List() {
	const [list, setList] = useState(initialList);

	function handleClick() {
		let reverseList = [...list];
		let listId = 1
		// reverseList.reverse();
		// reverseList.sort((a , b) => a.title > b.title ? 1 : -1)
		// reverseList[1].title = 'Kenneth Lee Allen'
		// setList(reverseList)
		setList({
			...list,
				title: 'keen'
	})
	}

	return (
		<>
			<button onClick={handleClick}>
				Reverse
			</button>
			<ul>
				{list.map(artwork => (
					<li key={artwork.id}>{artwork.title}</li>
				))}
			</ul>
		</>
	);
}

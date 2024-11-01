import { useImmer} from 'use-immer';

// let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true },
];

export default function List() {
	const [myList, updateMyList] = useImmer(initialList);
	const [yourList, updateYourList] = useImmer(
		initialList
	);

	function handleToggleMyList(artworkId, nextSeen) {
		updateMyList(( draft) => {
			draft.map(list => {
				if(list.id === artworkId){
				return list.seen = nextSeen
				}else return list
			})
				
		})
	}

	function handleToggleYourList(artworkId, nextSeen) {
		updateYourList(draft => {
			const art = draft.find(e => e.id === artworkId)
			art.seen = nextSeen
		})
	}

	return (
		<>
			<h1>Art Bucket List</h1>
			<h2>My list of art to see:</h2>
			<ItemList
				artworks={myList}
				onToggle={handleToggleMyList} />
			<h2>Your list of art to see:</h2>
			<ItemList
				artworks={yourList}
				onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map(artwork => (
				<li key={artwork.id}>
					<label>
						<input
							type="checkbox"
							checked={artwork.seen}
							onChange={e => {
								onToggle(
									artwork.id,
									e.target.checked
								);
							}}
						/>
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

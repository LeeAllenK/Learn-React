import { useState } from 'react';
/* In a real chat app, you’d probably want to recover the input state when the user selects the previous recipient again. There are a few ways to keep the state “alive” for a component that’s no longer visible:

You could render all chats instead of just the current one, but hide all the others with CSS. The chats would not get removed from the tree, so their local state would be preserved. This solution works great for simple UIs. But it can get very slow if the hidden trees are large and contain a lot of DOM nodes.
You could lift the state up and hold the pending message for each recipient in the parent component. This way, when the child components get removed, it doesn’t matter, because it’s the parent that keeps the important information. This is the most common solution.
You might also use a different source in addition to React state. For example, you probably want a message draft to persist even if the user accidentally closes the page. To implement this, you could have the Chat component initialize its state by reading from the localStorage, and save the drafts there too.
No matter which strategy you pick, a chat with Alice is conceptually distinct from a chat with Bob, so it makes sense to give a key to the <Chat> tree based on the current recipient*/
export default function Scoreboard() {
	const [isPlayerA, setIsPlayerA] = useState(true);
	return (
		<div>
			{isPlayerA ? (
				<Counter
				key='Taylor'
				 person="Taylor" 
				/>
			) : (
				<Counter 
				key='Sarah'
				person='Sarah'
				/>
			)}
			<button onClick={() => {
				setIsPlayerA(!isPlayerA);
			}}>
				Next player!
			</button>
		</div>
	);
}

function Counter({ person }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = 'counter';
	if(hover) {
		className += ' hover';
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}
		>
			<h1>{person}'s score: {score}</h1>
			<button onClick={() => setScore(score + 1)}>
				Add one
			</button>
		</div>
	);
}

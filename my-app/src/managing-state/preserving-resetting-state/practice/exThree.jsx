import { useState } from 'react';
//Different components at the same position reset state

// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);
//   return (
//     <div>
//       {isPaused ? (
//         <p>See you later!</p>
//       ) : (
//         <Counter />
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isPaused}
//           onChange={e => {
//             setIsPaused(e.target.checked)
//           }}
//         />
//         Take a break
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

//Also, when you render a different component in the same position, it resets the state of its entire subtree. To see how this works, increment the counter and then tick the checkbox:

export default function App() {
	const [isFancy, setIsFancy] = useState(false);
	return (
		<div>
			{isFancy ? (
				<div>
					<Counter isFancy={true} />
				</div>
			) : (
				<section>
					<Counter isFancy={false} />
				</section>
			)}
			<label>
				<input
					type="checkbox"
					checked={isFancy}
					onChange={e => {
						setIsFancy(e.target.checked)
					}}
				/>
				Use fancy styling
			</label>
		</div>
	);
}

function Counter({ isFancy }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = 'counter';
	if(hover) {
		className += ' hover';
	}
	if(isFancy) {
		className += ' fancy';
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}
		>
			<h1>{score}</h1>
			<button onClick={() => setScore(score + 1)}>
				Add one
			</button>
		</div>
	);
}

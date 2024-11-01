import { useState } from 'react';

let initialCounters = [
	0, 0, 0
];

export default function CounterList() {
	const [counters, setCounters] = useState(
		initialCounters
	);

	function handleIncrementClick(index) {
		const incByOne = counters.map((counter , i) => {
			if(i === index){
				// Increment the clicked counter
				return counter + 1
			}else{
				// The rest haven't changed
				return counter
			}
		})
			setCounters(incByOne)
	}

	return (
		<ul>
			{counters.map((counter, i) => (
				<li key={i}>
					{counter}
					<button onClick={() => {
						handleIncrementClick(i);
					}}>+1</button>
				</li>
			))}
		</ul>
	);
}

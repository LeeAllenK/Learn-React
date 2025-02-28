/*This component uses a state variable and an Effect to display a number that increments every second. Extract this logic into a custom Hook called useCounter. Your goal is to make the Counter component implementation look exactly like this:*/ 

import {useCounter} from './useCounter.jsx'
export default function Counter() {
	//Custom hook implemented
	const count = useCounter();

	return <h1>Seconds passed: {count}</h1>;
}

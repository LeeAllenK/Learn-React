import { useRef,useState } from 'react';
/**/ 
export default function Toggle() {
	// const isOnRef = useRef(false);
	//useState instead isOnRef changes component {isOnRef.current ? 'on':'off'}
	const [isOn, setIsOn] = useState(false)
	return (
		<button onClick={() => {
			setIsOn(on=>!on)
		}}>
			{isOn? 'On' : 'Off'}
		</button>
	);
}

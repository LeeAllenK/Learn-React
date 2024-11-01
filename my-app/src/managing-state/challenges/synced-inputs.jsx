import { useState } from 'react';


function Input({ label ,value,  onShow}) {

	return (
		<label>
			{label}
			{' '}
			<input
				value={value}
				onChange={onShow}
			/>
		</label>
	);
}

export default function SyncedInputs() {
	const [text, setText] = useState('');

	return (
		<>
			<Input label="First input" onShow={e => setText(e.target.value)} value={text}/>
			<Input label="Second input" onShow={e => setText(e.target.value)} value={text}/>
		</>
	);
}

import { useState } from 'react';

export default function FeedbackForm() {
	const [text, setText] = useState('');
	const [status, setStatus] = useState('typing');


	async function handleSubmit(e) {
		e.preventDefault();
		setStatus('sending');
		await sendMessage(text);
		setStatus('sent');
	}

	if(status === 'sent') {
		return <h1>Thanks for feedback!</h1>
	}

	const sending = status === 'sending';

	return (
		<form onSubmit={handleSubmit}>
			<p>How was your stay at The Prancing Pony?</p>
			<textarea
				disabled={sending}
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<br />
			<button
				disabled={sending}
				type="submit"
			>
				Send
			</button>
			{sending && <p>Sending...</p>}
		</form>
	);
}

// Pretend to send a message.
function sendMessage(text) {
	return new Promise(resolve => {
		setTimeout(resolve, 2000);
	});
}

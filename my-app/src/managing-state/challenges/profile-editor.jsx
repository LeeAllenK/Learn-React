/* This form switches between two modes: in the editing mode, you see the inputs, and in the viewing mode, you only see the result. The button label changes between “Edit” and “Save” depending on the mode you’re in. When you change the inputs, the welcome message at the bottom updates in real time.

Your task is to reimplement it in React in the sandbox below. For your convenience, the markup was already converted to JSX, but you’ll need to make it show and hide the inputs like the original does.

Make sure that it updates the text at the bottom, too!


App.js*/

import {useState} from 'react';


export default function EditProfile() {

	const [fName , setFName] = useState('');
	const [lName , setLName] = useState('');
	const [isEditing , setIsEditing] = useState(false);
	
	let fullName = fName + ' ' + lName;


	return (
		<form
		onSubmit={(e) => {
			e.preventDefault();
			setIsEditing(!isEditing)
		}}	
		>
			<label>
				First name:{' '}
				{isEditing ? (
				<input 
				type='text'
				value={fName}
				onChange={e => setFName(e.target.value)}	
				/>
				) : (

				<b>{fName}</b>
				)}
			</label>
			<label>
				Last name:{' '}
				{isEditing ? (
				<input
				type='text'
				value={lName}	
				onChange={e => setLName(e.target.value)}
				/>
				) : (

				<b>{lName}</b>
				)}
			</label>
			<button type="submit">
				Edit Profile
			</button>
			<p><i>Hello, {fullName}!</i></p>
		</form>
	);
}

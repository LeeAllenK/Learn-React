import {sculptureList} from  '../data-arrays/gallery-data-inter'
import { useState } from 'react';


function Button({onNextClick}){


	return (
		<button onClick={onNextClick}>
			Next
		</button>
	)
}
export default function Gallery() {

	const [index , setIndex] = useState(0);
	const [showMore , setShowMore] = useState(false);
	const isNext = index < sculptureList.length;

	const handleShow = () => {
		
		setShowMore(!showMore)
	}

	const handleClick = () => {
		if(isNext){

		setIndex(index + 1)
		}
	}
	let sculpture = sculptureList[index];
	return(
		<>
			<Button onNextClick={handleClick} >
				Next
			</Button>
			<h1>{sculpture.name} by {sculpture.artist}</h1>
				<h2>({index + 1} of {sculptureList.length})</h2>
				<img
					src={sculpture.url}
					alt={sculpture.alt}
				/>
				<button onClick={handleShow} >
				{showMore ? "Hide" : 'Show'} details
				</button>

				{showMore && 
				<p>{sculpture.description}</p>
				}
		</>
	)
}

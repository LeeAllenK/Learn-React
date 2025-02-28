import { useState } from 'react';


/*Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number: */

const initialProducts = [{
	id: 0,
	name: 'Baklava',
	count: 1,
}, {
	id: 1,
	name: 'Cheese',
	count: 5,
}, {
	id: 2,
	name: 'Spaghetti',
	count: 2,
}];

export default function ShoppingCart() {
	const [
		products,
		setProducts
	] = useState(initialProducts)

	function handleIncreaseClick(productId) {
		const inc = products.map(e => {
			if(e.id === productId){
				return {...e , count: e.count +1}
			}else{
				return e;
			}
		})
		setProducts(inc)
	}

	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>
					{product.name}
					{' '}
					(<b>{product.count}</b>)
					<button onClick={() => {
						handleIncreaseClick(product.id);
					}}>
						+
					</button>
				</li>
			))}
		</ul>
	);
}

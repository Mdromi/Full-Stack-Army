import { useState } from 'react';
import Buttons from '../buttons/Buttons';
import DisplayCount from '../display-count/DisplayCount';
import Layout from '../layout/Layout';
import UpdateIncrementDecrement from '../update-incre-decre/UpdateIncrementDecrement';

const About = () => {
	const [count, setCount] = useState(0);
	const [incrementValue, setIncrementValue] = useState(10);
	const [decrementValue, setDecrementValue] = useState(5);

	function increment() {
		setCount(count + incrementValue);
	}

	function decrement() {
		setCount(count - decrementValue);
	}

	function handleIncrementChange(event) {
		setIncrementValue(parseInt(event.target.value));
	}

	function handleDecrementChange(event) {
		setDecrementValue(parseInt(event.target.value));
	}

	return (
		<Layout>
			<DisplayCount count={count} />
			<UpdateIncrementDecrement
				incrementValue={incrementValue}
				decrementValue={decrementValue}
				handleIncrementChange={handleIncrementChange}
				handleDecrementChange={handleDecrementChange}
			/>
			<Buttons increment={increment} decrement={decrement} />
		</Layout>
	);
};

export default About;
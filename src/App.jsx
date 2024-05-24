import { useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Header />
			<div>
				<p>{count}</p>
				<button onClick={() => setCount(c => c + 1)}>Increment</button>
			</div>
		</div>
	);
}

function Header() {
	console.log("Header rerendered", Math.random());
	return (
		<header>
			<h1>React Counter</h1>
		</header>
	);
}

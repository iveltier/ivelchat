// spinner for bot message
// returns a spinner with frames and interval from spinner.json
import { useEffect, useState } from "react";

function Spinner({ frames, interval }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % frames.length);
		}, interval);

		return () => clearInterval(id);
	}, [frames, interval]);

	return <span>{frames[index]}</span>;
}

export default Spinner;

import {useEffect, useRef} from 'react';

function UseInterval<F extends CallableFunction>(callback: F, delay: number | null): void {
	const savedCallback = useRef<F>();
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		function tick() {
			if (savedCallback.current) return savedCallback.current();
		}

		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default UseInterval;

import {zeroLeft} from './zeroLeft';

export const formatedTime = (remainingTime: number) => {
	const minutes = Math.floor(remainingTime / 60);
	const seconds = remainingTime % 60;
	return `${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
};

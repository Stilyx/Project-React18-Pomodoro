import {MouseEvent} from 'react';

export interface IAbout {
	isHidden: Boolean;
	setIsHidden: (e: MouseEvent<HTMLButtonElement>) => void;
	faQuestion: JSX.Element;
}

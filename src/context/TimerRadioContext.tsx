import React, {useState} from 'react';

import {createContext} from 'react';

// Interfaces
import {ITimerRadioContext} from '../interfaces/ITimerRadioContext';
interface TimerRadioContextProps {
	children: React.ReactNode;
}

export const TimerRadioContext = createContext({} as ITimerRadioContext);

function TimerRadioProvider({children}: TimerRadioContextProps) {
	const [pomodoroRadio, setPomodoroRadio] = useState<boolean>(true);
	const [shortRadio, setShortRadio] = useState<boolean>(false);
	const [longRadio, setLongRadio] = useState<boolean>(false);

	return (
		<TimerRadioContext.Provider
			value={{pomodoroRadio, setPomodoroRadio, shortRadio, setShortRadio, longRadio, setLongRadio}}
		>
			{children}
		</TimerRadioContext.Provider>
	);
}

export default TimerRadioProvider;

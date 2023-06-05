import React, {useState} from 'react';

import {createContext} from 'react';

// Interfaces
import {ITimerContext} from '../interfaces/ITimerContext';
interface TimerContextProps {
	children: React.ReactNode;
}

export const TimerContext = createContext({} as ITimerContext);

function TimerProvider({children}: TimerContextProps) {
	const [defaultPomodoro, setDefaultPomodoro] = useState<number>(1500);
	const [defaultRestTime, setDefaultRestTime] = useState<number>(300);
	const [defaultLongRestTime, setDefaultLongRestTime] = useState<number>(900);
	const [mainTime, setMainTime] = useState<number>(1500);
	const [maxValue, setMaxValue] = useState<number>(1500);
	const [timeCounting, setTimeCounting] = useState<boolean>(false);
	return (
		<TimerContext.Provider
			value={{
				defaultPomodoro,
				setDefaultPomodoro,
				defaultRestTime,
				mainTime,
				maxValue,
				setDefaultRestTime,
				defaultLongRestTime,
				setDefaultLongRestTime,
				setMainTime,
				setMaxValue,
				timeCounting,
				setTimeCounting
			}}
		>
			{children}
		</TimerContext.Provider>
	);
}

export default TimerProvider;

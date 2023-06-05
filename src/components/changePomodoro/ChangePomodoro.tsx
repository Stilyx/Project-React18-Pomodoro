import React, {FormEvent, useContext} from 'react';

// Styles
import './ChangePomodoro.css';

// Types
import {TChangePomorodo} from '../../types/TChangePomodoro';

// Context
import {TimerContext} from '../../context/TimerContext';
import {TimerRadioContext} from '../../context/TimerRadioContext';
import {WorkingContext} from '../../context/WorkingContext';

function ChangePomodoro(obj: TChangePomorodo): JSX.Element {
	const timerContext = useContext(TimerContext);
	const radioContext = useContext(TimerRadioContext);
	const workContext = useContext(WorkingContext);

	const changeRadios = (event: FormEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case 'pomodoro':
				radioContext.setPomodoroRadio(true);
				radioContext.setShortRadio(false);
				radioContext.setLongRadio(false);
				timerContext.setMainTime(timerContext.defaultPomodoro);
				timerContext.setMaxValue(timerContext.defaultPomodoro);
				timerContext.setTimeCounting(false);
				workContext.setWorking(true);
				break;
			case 'shortBreak':
				radioContext.setPomodoroRadio(false);
				radioContext.setShortRadio(true);
				radioContext.setLongRadio(false);
				timerContext.setMainTime(timerContext.defaultRestTime);
				timerContext.setMaxValue(timerContext.defaultRestTime);
				timerContext.setTimeCounting(false);
				workContext.setWorking(false);
				obj.restTime(false);
				break;
			case 'longBreak':
				radioContext.setPomodoroRadio(false);
				radioContext.setShortRadio(false);
				radioContext.setLongRadio(true);
				timerContext.setMainTime(timerContext.defaultLongRestTime);
				timerContext.setMaxValue(timerContext.defaultLongRestTime);
				timerContext.setTimeCounting(false);
				obj.restTime(true);
				break;
		}
	};

	return (
		<form action='#' className={obj.isAutomatic ? 'header-radios automaticRadio' : 'header-radios'}>
			<input
				type='radio'
				name='pomodorosTypes'
				id='pomodoro'
				checked={radioContext.pomodoroRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='pomodoro'>pomodoro</label>
			<input
				type='radio'
				name='pomodorosTypes'
				id='shortBreak'
				checked={radioContext.shortRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='shortBreak'>short break</label>
			<input
				type='radio'
				name='pomodorosTypes'
				id='longBreak'
				checked={radioContext.longRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='longBreak'>long break</label>
		</form>
	);
}

export default ChangePomodoro;

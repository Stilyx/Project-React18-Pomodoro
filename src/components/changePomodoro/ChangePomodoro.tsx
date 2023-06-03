import React, {FormEvent} from 'react';

// Styles
import './ChangePomodoro.css';

// Types
import {TChangePomorodo} from '../../types/TChangePomodoro';

function ChangePomodoro(obj: TChangePomorodo): JSX.Element {
	const changeRadios = (event: FormEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case 'pomodoro':
				obj.setPomodoroRadio(true);
				obj.setShortRadio(false);
				obj.setLongRadio(false);
				obj.setMainTime(obj.defaultPomodoro);
				obj.setMaxValue(obj.defaultPomodoro);
				obj.setTimeCounting(false);
				obj.setWorking(true);
				break;
			case 'shortBreak':
				obj.setPomodoroRadio(false);
				obj.setShortRadio(true);
				obj.setLongRadio(false);
				obj.setMainTime(obj.defaultRestTime);
				obj.setMaxValue(obj.defaultRestTime);
				obj.setTimeCounting(false);
				obj.setWorking(false);
				obj.restTime(false);
				break;
			case 'longBreak':
				obj.setPomodoroRadio(false);
				obj.setShortRadio(false);
				obj.setLongRadio(true);
				obj.setMainTime(obj.defaultLongRestTime);
				obj.setMaxValue(obj.defaultLongRestTime);
				obj.setTimeCounting(false);
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
				checked={obj.pomodoroRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='pomodoro'>pomodoro</label>
			<input
				type='radio'
				name='pomodorosTypes'
				id='shortBreak'
				checked={obj.shortRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='shortBreak'>short break</label>
			<input
				type='radio'
				name='pomodorosTypes'
				id='longBreak'
				checked={obj.longRadio}
				onChange={e => changeRadios(e)}
				disabled={obj.isAutomatic}
			/>
			<label htmlFor='longBreak'>long break</label>
		</form>
	);
}

export default ChangePomodoro;

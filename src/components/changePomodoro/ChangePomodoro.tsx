import React, {FormEvent} from 'react';

// Styles
import './ChangePomodoro.css';

// Types
import {TChangePomorodo} from '../../types/TChangePomodoro';

function ChangePomodoro(obj: TChangePomorodo): JSX.Element {
	const changeRadios = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof Element) {
			if (e.target.id === 'pomodoro') {
				obj.setPomodoroRadio(true);
				obj.setShortRadio(false);
				obj.setLongRadio(false);
				obj.setMainTime(obj.defaultPomodoro);
				obj.setMaxValue(obj.defaultPomodoro);
				obj.setTimeCounting(false);
				obj.setWorking(true);
			}
			if (e.target.id === 'shortBreak') {
				obj.setPomodoroRadio(false);
				obj.setShortRadio(true);
				obj.setLongRadio(false);
				obj.setMainTime(obj.defaultRestTime);
				obj.setMaxValue(obj.defaultRestTime);
				obj.setTimeCounting(false);
				obj.setWorking(false);
				obj.restTime(false);
			}

			if (e.target.id === 'longBreak') {
				obj.setPomodoroRadio(false);
				obj.setShortRadio(false);
				obj.setLongRadio(true);
				obj.setMainTime(obj.defaultLongRestTime);
				obj.setMaxValue(obj.defaultLongRestTime);
				obj.setTimeCounting(false);
				obj.restTime(true);
			}
		}
	};

	return (
		<form
			action='#'
			className='header-radios'
			onChange={e => (obj.isAutomatic ? '' : changeRadios(e))}
		>
			<input type='radio' name='pomodorosTypes' id='pomodoro' checked={obj.pomodoroRadio} />
			<label htmlFor='pomodoro'>pomodoro</label>
			<input type='radio' name='pomodorosTypes' id='shortBreak' checked={obj.shortRadio} />
			<label htmlFor='shortBreak'>short break</label>
			<input type='radio' name='pomodorosTypes' id='longBreak' checked={obj.longRadio} />
			<label htmlFor='longBreak'>long break</label>
		</form>
	);
}

export default ChangePomodoro;

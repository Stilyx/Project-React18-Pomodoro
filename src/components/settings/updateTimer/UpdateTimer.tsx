import React, {ChangeEvent} from 'react';

// Styles
import './UpdateTimer.css';

// Interfaces
import {IDefaultTimer} from '../../../interfaces/IDefaultTimer';
import {IUpdateTimer} from '../../../interfaces/IUpdateTimer';

function UpdateTimer({
	setDefaultPomodoroToUpdate,
	setShortPomodoroToUpdate,
	setLongPomodoroToUpdate,
	defaultPomodoro,
	defaultRestTime,
	defaultLongRestTime
}: IUpdateTimer & IDefaultTimer) {
	const handleChangePomodoroValue = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = Number(e.target.value);
		if (targetValue < 5 || targetValue >= 80) {
			e.target.classList.add('error');
			return;
		} else {
			e.target.classList.remove('error');
			setDefaultPomodoroToUpdate(targetValue * 60);
		}
	};

	const handleChangeShortRestValue = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = Number(e.target.value);
		if (targetValue < 5 || targetValue >= 80) {
			e.target.classList.add('error');
			return;
		} else {
			e.target.classList.remove('error');
			setShortPomodoroToUpdate(targetValue * 60);
		}
	};

	const handleChangeLongRestValue = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = Number(e.target.value);
		if (targetValue < 5 || targetValue >= 80) {
			e.target.classList.add('error');
			return;
		} else {
			e.target.classList.remove('error');
			setLongPomodoroToUpdate(targetValue * 60);
		}
	};

	return (
		<section className='pomodoro-timer-configuration'>
			<h3 className='time-settings-title'>TIME (MINUTES)</h3>
			<form action='#' className='settings-form'>
				<label htmlFor='pomodoroInput'>pomodoro</label>
				<input
					type='number'
					max={80}
					min={5}
					defaultValue={defaultPomodoro / 60}
					id='pomodoroInput'
					onChange={e => handleChangePomodoroValue(e)}
				/>
				<label htmlFor='restInput'>short break</label>
				<input
					type='number'
					max={100}
					min={5}
					defaultValue={defaultRestTime / 60}
					id='restInput'
					onChange={e => handleChangeShortRestValue(e)}
				/>
				<label htmlFor='longRestInput'>long break</label>
				<input
					type='number'
					max={100}
					min={5}
					defaultValue={defaultLongRestTime / 60}
					id='longRestInput'
					onChange={e => handleChangeLongRestValue(e)}
				/>
			</form>
		</section>
	);
}

export default UpdateTimer;

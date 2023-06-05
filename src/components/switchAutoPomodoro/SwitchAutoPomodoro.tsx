import {useEffect, useCallback, useContext} from 'react';

//Styles
import './SwitchAutoPomodoro.css';

// Context
import {TimerContext} from '../../context/TimerContext';
import {TimerRadioContext} from '../../context/TimerRadioContext';
import {WorkingContext} from '../../context/WorkingContext';

// Types
import {TSwitchAutoPomodoro} from '../../types/TSwitchAutoPomodoro';

function SwitchAutoPomodoro(obj: TSwitchAutoPomodoro): JSX.Element {
	const timerContext = useContext(TimerContext);
	const radioContext = useContext(TimerRadioContext);
	const workContext = useContext(WorkingContext);

	const changeAutomatic = () => {
		radioContext.setPomodoroRadio(true);
		radioContext.setShortRadio(false);
		radioContext.setLongRadio(false);
		workContext.setRest(false);
		timerContext.setMainTime(timerContext.defaultPomodoro);
		timerContext.setMaxValue(timerContext.defaultPomodoro);
		timerContext.setTimeCounting(false);
		obj.setIsAutomatic(!obj.isAutomatic);
		obj.setCompletedCycles(0);
	};

	const restartTimer = useCallback((): void => {
		if (radioContext.pomodoroRadio) {
			timerContext.setMainTime(timerContext.defaultPomodoro);
			timerContext.setMaxValue(timerContext.defaultPomodoro);
		}
		if (radioContext.shortRadio) {
			timerContext.setMainTime(timerContext.defaultRestTime);
			timerContext.setMaxValue(timerContext.defaultRestTime);
		}
		if (radioContext.longRadio) {
			timerContext.setMainTime(timerContext.defaultLongRestTime);
			timerContext.setMaxValue(timerContext.defaultLongRestTime);
		}
	}, [radioContext, timerContext]);

	useEffect(() => {
		if (timerContext.mainTime >= 0) return;
		if (!obj.isAutomatic) {
			timerContext.setTimeCounting(false);
			restartTimer();
		}
	}, [timerContext, restartTimer, obj]);

	return (
		<div className='switch-container'>
			<p className='auto-switch'>Auto</p>
			<input
				id='switch'
				type='checkbox'
				className='switch switch--shadow'
				defaultChecked={obj.isAutomatic ? true : false}
				onClick={e => changeAutomatic()}
			/>
			<label htmlFor='switch'></label>
		</div>
	);
}

export default SwitchAutoPomodoro;

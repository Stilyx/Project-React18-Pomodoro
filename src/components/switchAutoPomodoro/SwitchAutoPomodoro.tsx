import React from 'react';

//Styles
import './SwitchAutoPomodoro.css';

// Types
import {TSwitchAutoPomodoro} from '../../types/TSwitchAutoPomodoro';

function SwitchAutoPomodoro(obj: TSwitchAutoPomodoro): JSX.Element {
	const changeAutomatic = () => {
		obj.setPomodoroRadio(true);
		obj.setShortRadio(false);
		obj.setLongRadio(false);
		obj.setRest(false);
		obj.setMainTime(obj.defaultPomodoro);
		obj.setMaxValue(obj.defaultPomodoro);
		obj.setIsAutomatic(!obj.isAutomatic);
		obj.setTimeCounting(false);
		obj.setCompletedCycles(0);
	};

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

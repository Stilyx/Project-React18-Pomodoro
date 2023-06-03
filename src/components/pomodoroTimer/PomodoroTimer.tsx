import React, {useCallback, useEffect, useState} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

// Hooks
import UseInterval from '../../hooks/SetInterval';

// Styles
import './PomodoroTimer.css';

//Utils
import {formatedTime} from '../../utils/formatedTime';

// Types
import {TPomodoroTimer} from '../../types/TPomodoroTimer';

// Assets

const playSong = require('../../sounds/bell-start.mp3');
const audioStartWorking = new Audio(playSong);
const finishSong = require('../../sounds/bell-finish.mp3');
const audioFinishWork = new Audio(finishSong);

function PomodoroTimer(obj: TPomodoroTimer): JSX.Element {
	const [cyclesToLongRest, setCyclesToLongRest] = useState<boolean[]>(new Array(4).fill(true));
	UseInterval(
		() => {
			obj.setMainTime(obj.mainTime - 1);
		},
		obj.timeCounting ? 1000 : null
	);

	const stopOrWork = useCallback((): void => {
		obj.setTimeCounting(true);
		obj.setWorking(true);
		obj.setMainTime(obj.defaultPomodoro);
		obj.setMaxValue(obj.defaultPomodoro);
		obj.setPomodoroRadio(true);
		obj.setLongRadio(false);
		obj.setShortRadio(false);
		obj.setRest(false);
	}, [obj]);

	useEffect(() => {
		if (obj.mainTime > 0) return;
		audioFinishWork.play();

		if (!obj.isAutomatic) return;

		if (obj.working && cyclesToLongRest.length > 0) {
			obj.restTime(false);
			cyclesToLongRest.pop();
			obj.setCompletedCycles(obj.completedCycles + 1);
		}

		if (obj.working && cyclesToLongRest.length <= 0) {
			obj.restTime(true);
			setCyclesToLongRest(new Array(4).fill(true));
		}

		if (obj.rest) stopOrWork();
	}, [obj, cyclesToLongRest, stopOrWork]);

	const isWorking = () => {
		obj.setTimeCounting(!obj.timeCounting);
		audioStartWorking.play();
		if (!obj.working && !obj.rest) stopOrWork();
	};

	return (
		<div className='timer-container'>
			<div onClick={e => isWorking()} className='timer'>
				<CircularProgressbar
					value={obj.mainTime}
					text={formatedTime(obj.mainTime)}
					background={true}
					maxValue={obj.maxValue}
					strokeWidth={4}
					styles={buildStyles({
						pathTransitionDuration: 0.5,
						pathColor: 'var(--path-color)',
						textColor: 'white',
						textSize: '25',
						trailColor: 'none',
						backgroundColor: '#161932'
					})}
				/>
				<p className='cycle-text'>{obj.isAutomatic ? `CYCLES: ${obj.completedCycles}` : ''}</p>

				<p className='pauseRestart'>{obj.timeCounting ? 'PAUSE' : 'RESUME'}</p>
			</div>
		</div>
	);
}

export default PomodoroTimer;

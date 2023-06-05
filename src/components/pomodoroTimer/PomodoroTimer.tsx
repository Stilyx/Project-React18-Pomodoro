import {useCallback, useContext, useEffect, useState} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

// Hooks
import UseInterval from '../../hooks/SetInterval';

// Styles
import './PomodoroTimer.css';

//Utils
import {formatedTime} from '../../utils/formatedTime';

// Contexts
import {TimerContext} from '../../context/TimerContext';
import {TimerRadioContext} from '../../context/TimerRadioContext';
import {WorkingContext} from '../../context/WorkingContext';

// Types
import {TPomodoroTimer} from '../../types/TPomodoroTimer';

// Assets
const playSong = require('../../sounds/bell-start.mp3');
const audioStartWorking = new Audio(playSong);
const finishSong = require('../../sounds/bell-finish.mp3');
const audioFinishWork = new Audio(finishSong);

function PomodoroTimer(obj: TPomodoroTimer): JSX.Element {
	const timerContext = useContext(TimerContext);
	const workContext = useContext(WorkingContext);
	const {setLongRadio, setPomodoroRadio, setShortRadio} = useContext(TimerRadioContext);
	const [cyclesToLongRest, setCyclesToLongRest] = useState<boolean[]>(new Array(4).fill(true));

	UseInterval(
		() => {
			timerContext.setMainTime(timerContext.mainTime - 1);
			if (timerContext.mainTime === 0) audioFinishWork.play();
		},
		timerContext.timeCounting ? 1000 : null
	);

	const stopOrWork = useCallback((): void => {
		timerContext.setTimeCounting(true);
		workContext.setWorking(true);
		timerContext.setMainTime(timerContext.defaultPomodoro);
		timerContext.setMaxValue(timerContext.defaultPomodoro);
		setPomodoroRadio(true);
		setLongRadio(false);
		setShortRadio(false);
		workContext.setRest(false);
	}, [workContext, timerContext, setLongRadio, setPomodoroRadio, setShortRadio]);

	useEffect(() => {
		if (timerContext.mainTime >= 0) return;

		if (!obj.isAutomatic) return;

		if (workContext.working && cyclesToLongRest.length > 0) {
			obj.restTime(false);
			cyclesToLongRest.pop();
			obj.setCompletedCycles(obj.completedCycles + 1);
		}

		if (workContext.working && cyclesToLongRest.length <= 0) {
			obj.restTime(true);
			setCyclesToLongRest(new Array(4).fill(true));
		}

		if (workContext.rest) stopOrWork();
	}, [obj, cyclesToLongRest, stopOrWork, timerContext, workContext]);

	const isWorking = () => {
		timerContext.setTimeCounting(!timerContext.timeCounting);
		audioStartWorking.play();
		if (!workContext.working && !workContext.rest) stopOrWork();
	};

	return (
		<div className='timer-container'>
			<div onClick={e => isWorking()} className='timer'>
				<CircularProgressbar
					value={timerContext.mainTime}
					text={formatedTime(timerContext.mainTime)}
					background={true}
					maxValue={timerContext.maxValue}
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

				<p className='pauseRestart'>{timerContext.timeCounting ? 'PAUSE' : 'RESUME'}</p>
			</div>
		</div>
	);
}

export default PomodoroTimer;

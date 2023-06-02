import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

// Styles
import './PomodoroTimer.css';

//Utils
import {formatedTime} from '../../utils/formatedTime';

// Types
import {TPomodoroTimer} from '../../types/TPomodoroTimer';

function PomodoroTimer(obj: TPomodoroTimer): JSX.Element {
	return (
		<div className='timer-container'>
			<div onClick={e => obj.isWorking()} className='timer'>
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

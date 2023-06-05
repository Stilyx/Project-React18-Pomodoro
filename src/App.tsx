import React, {useState, useCallback, useContext} from 'react';
import 'react-circular-progressbar/dist/styles.css';

// Styles
import './App.css';

// Components
import ChangePomodoro from './components/changePomodoro/ChangePomodoro';
import SwitchAutoPomodoro from './components/switchAutoPomodoro/SwitchAutoPomodoro';
import PomodoroTimer from './components/pomodoroTimer/PomodoroTimer';
import AboutPomodoro from './components/aboutPomodoro/AboutPomodoro';
import PomodoroModal from './components/settings/pomodoroSettings/PomodoroModal';
import Modal from './components/modal/Modal';

import {TimerContext} from './context/TimerContext';
import {TimerRadioContext} from './context/TimerRadioContext';
import {WorkingContext} from './context/WorkingContext';

// Assets
const gear = require('./assets/gear.png');

function App() {
	const timerContext = useContext(TimerContext);
	const radioContext = useContext(TimerRadioContext);
	const workContext = useContext(WorkingContext);

	const [isAutomatic, setIsAutomatic] = useState<boolean>(false);
	const [completedCycles, setCompletedCycles] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const restTime = useCallback(
		(long: boolean): void => {
			workContext.setWorking(false);
			workContext.setRest(true);
			isAutomatic ? timerContext.setTimeCounting(true) : timerContext.setTimeCounting(false);
			if (long) {
				timerContext.setMainTime(timerContext.defaultLongRestTime);
				timerContext.setMaxValue(timerContext.defaultLongRestTime);
				radioContext.setPomodoroRadio(false);
				radioContext.setLongRadio(true);
				radioContext.setShortRadio(false);
			} else {
				timerContext.setMainTime(timerContext.defaultRestTime);
				timerContext.setMaxValue(timerContext.defaultRestTime);
				radioContext.setPomodoroRadio(false);
				radioContext.setLongRadio(false);
				radioContext.setShortRadio(true);
			}
		},
		[timerContext, isAutomatic, radioContext, workContext]
	);

	return (
		<div className='container'>
			<h1 className='title'>Pomodoro</h1>
			<AboutPomodoro />
			<SwitchAutoPomodoro
				isAutomatic={isAutomatic}
				setIsAutomatic={e => setIsAutomatic(e)}
				setCompletedCycles={setCompletedCycles}
			/>
			<ChangePomodoro restTime={e => restTime(e)} isAutomatic={isAutomatic} />

			<PomodoroTimer
				isAutomatic={isAutomatic}
				completedCycles={completedCycles}
				restTime={e => restTime(e)}
				setCompletedCycles={e => setCompletedCycles(e)}
			/>

			<Modal setIsModalOpen={e => setIsModalOpen(e)} isModalOpen={isModalOpen}>
				<PomodoroModal setIsModalOpen={e => setIsModalOpen(e)} isModalOpen={isModalOpen} />
			</Modal>

			<button onClick={() => setIsModalOpen(true)} className='gear-button'>
				<img src={gear} alt='gear-options' />
			</button>
		</div>
	);
}

export default App;

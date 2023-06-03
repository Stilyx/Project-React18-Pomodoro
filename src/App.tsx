import React, {useState, useCallback} from 'react';
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

// Assets
const gear = require('./assets/gear.png');

function App() {
	const [working, setWorking] = useState<boolean>(false);
	const [rest, setRest] = useState<boolean>(false);
	const [timeCounting, setTimeCounting] = useState<boolean>(false);
	const [defaultPomodoro, setDefaultPomodoro] = useState<number>(1500);
	const [defaultRestTime, setDefaultRestTime] = useState<number>(300);
	const [defaultLongRestTime, setDefaultLongRestTime] = useState<number>(900);
	const [mainTime, setMainTime] = useState<number>(defaultPomodoro);
	const [maxValue, setMaxValue] = useState<number>(0);
	const [pomodoroRadio, setPomodoroRadio] = useState<boolean>(true);
	const [shortRadio, setShortRadio] = useState<boolean>(false);
	const [longRadio, setLongRadio] = useState<boolean>(false);
	const [isAutomatic, setIsAutomatic] = useState<boolean>(false);
	const [completedCycles, setCompletedCycles] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const restTime = useCallback(
		(long: boolean): void => {
			setWorking(false);
			setRest(true);
			isAutomatic ? setTimeCounting(true) : setTimeCounting(false);
			if (long) {
				setMainTime(defaultLongRestTime);
				setMaxValue(defaultLongRestTime);
				setPomodoroRadio(false);
				setLongRadio(true);
				setShortRadio(false);
			} else {
				setMainTime(defaultRestTime);
				setMaxValue(defaultRestTime);
				setPomodoroRadio(false);
				setLongRadio(false);
				setShortRadio(true);
			}
		},
		[defaultLongRestTime, defaultRestTime, isAutomatic]
	);

	return (
		<div className='container'>
			<h1 className='title'>Pomodoro</h1>
			<AboutPomodoro />
			<SwitchAutoPomodoro
				isAutomatic={isAutomatic}
				setIsAutomatic={e => setIsAutomatic(e)}
				setShortRadio={e => setShortRadio(e)}
				setLongRadio={e => setLongRadio(e)}
				setMainTime={e => setMainTime(e)}
				setMaxValue={e => setMaxValue(e)}
				setTimeCounting={e => setTimeCounting(e)}
				defaultPomodoro={defaultPomodoro}
				setRest={setRest}
				setPomodoroRadio={e => setPomodoroRadio(e)}
				setCompletedCycles={setCompletedCycles}
				defaultRestTime={defaultRestTime}
				defaultLongRestTime={defaultLongRestTime}
				pomodoroRadio={pomodoroRadio}
				shortRadio={shortRadio}
				longRadio={longRadio}
				mainTime={mainTime}
			/>
			<ChangePomodoro
				pomodoroRadio={pomodoroRadio}
				shortRadio={shortRadio}
				longRadio={longRadio}
				setPomodoroRadio={e => setPomodoroRadio(e)}
				setShortRadio={e => setShortRadio(e)}
				setLongRadio={e => setLongRadio(e)}
				setWorking={e => setWorking(e)}
				restTime={e => restTime(e)}
				setMainTime={e => setMainTime(e)}
				setMaxValue={e => setMaxValue(e)}
				setTimeCounting={e => setTimeCounting(e)}
				defaultPomodoro={defaultPomodoro}
				defaultRestTime={defaultRestTime}
				defaultLongRestTime={defaultLongRestTime}
				isAutomatic={isAutomatic}
				mainTime={mainTime}
			/>

			<PomodoroTimer
				isAutomatic={isAutomatic}
				mainTime={mainTime}
				maxValue={maxValue}
				timeCounting={timeCounting}
				completedCycles={completedCycles}
				setMainTime={e => setMainTime(e)}
				defaultPomodoro={defaultPomodoro}
				rest={rest}
				restTime={e => restTime(e)}
				setTimeCounting={e => setTimeCounting(e)}
				setCompletedCycles={e => setCompletedCycles(e)}
				setMaxValue={e => setMaxValue(e)}
				setLongRadio={e => setLongRadio(e)}
				setPomodoroRadio={e => setPomodoroRadio(e)}
				setShortRadio={e => setShortRadio(e)}
				setRest={e => setRest(e)}
				setWorking={e => setWorking(e)}
				working={working}
			/>

			<Modal
				isModalOpen={isModalOpen ? 'modal-overlay' : 'hidden'}
				setIsModalOpen={e => setIsModalOpen(e)}
			>
				<PomodoroModal
					defaultPomodoro={defaultPomodoro}
					defaultRestTime={defaultRestTime}
					defaultLongRestTime={defaultLongRestTime}
					setIsModalOpen={e => setIsModalOpen(e)}
					setDefaultLongRestTime={e => setDefaultLongRestTime(e)}
					setDefaultPomodoro={e => setDefaultPomodoro(e)}
					setDefaultRestTime={e => setDefaultRestTime(e)}
					setMainTime={e => setMainTime(e)}
					setMaxValue={e => setMaxValue(e)}
					pomodoroRadio={pomodoroRadio}
					shortRadio={shortRadio}
					longRadio={longRadio}
				/>
			</Modal>

			<button onClick={() => setIsModalOpen(true)} className='gear-button'>
				<img src={gear} alt='gear-options' />
			</button>
		</div>
	);
}

export default App;

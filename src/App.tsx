import React, {useEffect, useState, useCallback} from 'react';
import 'react-circular-progressbar/dist/styles.css';

// Styles
import './App.css';

// Hooks
import UseInterval from './hooks/SetInterval';

// icons
import {FaQuestion} from 'react-icons/fa';

// Components
import ChangePomodoro from './components/changePomodoro/ChangePomodoro';
import SwitchAutoPomodoro from './components/switchAutoPomodoro/SwitchAutoPomodoro';
import PomodoroTimer from './components/pomodoroTimer/PomodoroTimer';
import AboutPomodoro from './components/aboutPomodoro/AboutPomodoro';
import PomodoroModal from './components/settings/pomodoroSettings/PomodoroModal';
import Modal from './components/modal/Modal';

const logo = require('./assets/gear.png');
const playSong = require('./sounds/bell-start.mp3');
const audioStartWorking = new Audio(playSong);
const finishSong = require('./sounds/bell-finish.mp3');
const audioFinishWork = new Audio(finishSong);

function App() {
	const [working, setWorking] = useState<boolean>(false);
	const [rest, setRest] = useState<boolean>(false);
	const [timeCounting, setTimeCounting] = useState<boolean>(false);
	const [defaultPomodoro, setDefaultPomodoro] = useState<number>(1500);
	const [defaultRestTime, setDefaultRestTime] = useState<number>(300);
	const [defaultLongRestTime, setDefaultLongRestTime] = useState<number>(900);
	const [mainTime, setMainTime] = useState<number>(defaultPomodoro);
	const [cyclesToLongRest, setCyclesToLongRest] = useState<boolean[]>(new Array(4).fill(true));
	const [maxValue, setMaxValue] = useState<number>(0);
	const [pomodoroRadio, setPomodoroRadio] = useState<boolean>(true);
	const [shortRadio, setShortRadio] = useState<boolean>(false);
	const [longRadio, setLongRadio] = useState<boolean>(false);
	const [isAutomatic, setIsAutomatic] = useState<boolean>(false);
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const [completedCycles, setCompletedCycles] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	UseInterval(
		() => {
			setMainTime(mainTime - 1);
		},
		timeCounting ? 1000 : null
	);

	const stopOrWork = useCallback((): void => {
		setTimeCounting(true);
		setWorking(true);
		setMainTime(defaultPomodoro);
		setMaxValue(defaultPomodoro);
		setPomodoroRadio(true);
		setLongRadio(false);
		setShortRadio(false);
		setRest(false);
	}, [defaultPomodoro]);

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

	const automaticRadiosChange = useCallback((): void => {
		if (pomodoroRadio) {
			setMainTime(defaultPomodoro);
			setMaxValue(defaultPomodoro);
		}
		if (shortRadio) {
			setMainTime(defaultRestTime);
			setMaxValue(defaultRestTime);
		}
		if (longRadio) {
			setMainTime(defaultLongRestTime);
			setMaxValue(defaultLongRestTime);
		}
	}, [defaultLongRestTime, defaultRestTime, defaultPomodoro, pomodoroRadio, shortRadio, longRadio]);

	useEffect(() => {
		if (mainTime > 0) return;
		audioFinishWork.play();

		if (!isAutomatic) {
			setTimeCounting(false);
			automaticRadiosChange();
			return;
		}

		if (working && cyclesToLongRest.length > 0) {
			restTime(false);
			cyclesToLongRest.pop();
			setCompletedCycles(completedCycles + 1);
		}

		if (working && cyclesToLongRest.length <= 0) {
			restTime(true);
			setCyclesToLongRest(new Array(4).fill(true));
		}

		if (rest) stopOrWork();
	}, [
		mainTime,
		rest,
		restTime,
		stopOrWork,
		working,
		cyclesToLongRest,
		isAutomatic,
		automaticRadiosChange,
		completedCycles
	]);

	const isWorking = () => {
		setTimeCounting(!timeCounting);
		audioStartWorking.play();
		if (!working && !rest) stopOrWork();
	};

	return (
		<div className='container'>
			<h1 className='title'>Pomodoro</h1>
			<AboutPomodoro
				isHidden={isHidden}
				setIsHidden={e => setIsHidden(!isHidden)}
				faQuestion={<FaQuestion />}
			/>
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
			/>

			<PomodoroTimer
				isAutomatic={isAutomatic}
				isWorking={() => isWorking()}
				mainTime={mainTime}
				maxValue={maxValue}
				timeCounting={timeCounting}
				completedCycles={completedCycles}
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
				<img src={logo} alt='gear-options' />
			</button>
		</div>
	);
}

export default App;

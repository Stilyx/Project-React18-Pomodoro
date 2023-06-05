import {useEffect, useState, useCallback, useContext} from 'react';

// Styles
import './PomodoroModal.css';

// Components
import HeaderSettings from '../headerSettings/HeaderSettings';
import UpdateTimer from '../updateTimer/UpdateTimer';
import UpdateFont from '../updateFont/UpdateFont';
import UpdateColor from '../updateColor/UpdateColor';

// Types
import {TimerContext} from '../../../context/TimerContext';
import {TimerRadioContext} from '../../../context/TimerRadioContext';

// Interfaces
import {IOpenModal} from '../../../interfaces/IOpenModal';

const fontData = localStorage.getItem('font')?.replace(' ', '-');
const colorData = localStorage.getItem('color');

function PomodoroModal({setIsModalOpen, isModalOpen}: IOpenModal) {
	const timerContext = useContext(TimerContext);
	const {longRadio, pomodoroRadio, shortRadio} = useContext(TimerRadioContext);

	const [font, setFont] = useState<string>(fontData || 'Kumbh-Sans');
	const [color, setColor] = useState<string>(colorData || 'red');
	const [PomodoroToUpdate, setPomodoroToUpdate] = useState<number | null>(null);
	const [shortPomodoroToUpdate, setShortPomodoroToUpdate] = useState<number | null>(null);
	const [longPomodoroToUpdate, setLongPomodoroToUpdate] = useState<number | null>(null);

	const applyChanges = useCallback(() => {
		localStorage.setItem('font', font);
		localStorage.setItem('color', color);
		document.body.setAttribute('class', `theme-${color}`);
		document.body.style.fontFamily = font;

		if (pomodoroRadio && PomodoroToUpdate) {
			timerContext.setMainTime(PomodoroToUpdate);
			timerContext.setMaxValue(PomodoroToUpdate);
		}
		if (shortRadio && shortPomodoroToUpdate) {
			timerContext.setMainTime(shortPomodoroToUpdate);
			timerContext.setMaxValue(shortPomodoroToUpdate);
		}
		if (longRadio && longPomodoroToUpdate) {
			timerContext.setMainTime(longPomodoroToUpdate);
			timerContext.setMaxValue(longPomodoroToUpdate);
		}

		setIsModalOpen(false);
	}, [
		color,
		font,
		PomodoroToUpdate,
		longPomodoroToUpdate,
		shortPomodoroToUpdate,
		timerContext,
		longRadio,
		shortRadio,
		pomodoroRadio,
		setIsModalOpen
	]);

	useEffect(() => {
		const fontData = localStorage.getItem('font');
		const colorData = localStorage.getItem('color');

		if (fontData) {
			document.body.style.fontFamily = fontData;
			setFont(fontData.replace(' ', '-'));
		}
		if (colorData) {
			document.body.setAttribute('class', `theme-${colorData}`);
			setColor(colorData);
		}

		if (PomodoroToUpdate) timerContext.setDefaultPomodoro(PomodoroToUpdate);
		if (shortPomodoroToUpdate) timerContext.setDefaultRestTime(shortPomodoroToUpdate);
		if (longPomodoroToUpdate) timerContext.setDefaultLongRestTime(longPomodoroToUpdate);
	}, [
		setColor,
		setFont,
		PomodoroToUpdate,
		longPomodoroToUpdate,
		shortPomodoroToUpdate,
		timerContext
	]);

	return (
		<div className='pomodoro-modal'>
			<HeaderSettings setIsModalOpen={e => setIsModalOpen(e)} isModalOpen={isModalOpen} />
			<UpdateTimer
				setPomodoroToUpdate={e => setPomodoroToUpdate(e)}
				setShortPomodoroToUpdate={e => setShortPomodoroToUpdate(e)}
				setLongPomodoroToUpdate={e => setLongPomodoroToUpdate(e)}
			/>
			<UpdateFont font={font} setFont={e => setFont(e)} />
			<UpdateColor color={color} setColor={e => setColor(e)} />

			<button className='apply-settings' onClick={() => applyChanges()}>
				Apply
			</button>
		</div>
	);
}

export default PomodoroModal;

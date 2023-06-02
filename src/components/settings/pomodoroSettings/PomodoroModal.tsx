import React, {useEffect, useState, useCallback} from 'react';

// Styles
import './PomodoroModal.css';

// Components
import HeaderSettings from '../headerSettings/HeaderSettings';
import UpdateTimer from '../updateTimer/UpdateTimer';
import UpdateFont from '../updateFont/UpdateFont';
import UpdateColor from '../updateColor/UpdateColor';

// Types
import {TPomodoroModal} from '../../../types/TPomodoroModal';

const fontData = localStorage.getItem('font')?.replace(' ', '-');
const colorData = localStorage.getItem('color');

function PomodoroModal(obj: TPomodoroModal) {
	const [font, setFont] = useState<string>(fontData || 'Kumbh-Sans');
	const [color, setColor] = useState<string>(colorData || 'red');
	const [fontToUpdate, setFontToUpdate] = useState<string | null>(null);
	const [colorToUpdate, setColorToUpdate] = useState<string | null>(null);
	const [defaultPomodoroToUpdate, setDefaultPomodoroToUpdate] = useState<number | null>(null);
	const [shortPomodoroToUpdate, setShortPomodoroToUpdate] = useState<number | null>(null);
	const [longPomodoroToUpdate, setLongPomodoroToUpdate] = useState<number | null>(null);

	const applyChanges = useCallback(() => {
		localStorage.setItem('font', font);
		localStorage.setItem('color', color);
		document.body.setAttribute('class', `theme-${color}`);
		document.body.style.fontFamily = font;

		if (obj.pomodoroRadio && defaultPomodoroToUpdate) {
			obj.setMainTime(defaultPomodoroToUpdate);
			obj.setMaxValue(defaultPomodoroToUpdate);
		}
		if (obj.shortRadio && shortPomodoroToUpdate) {
			obj.setMainTime(shortPomodoroToUpdate);
			obj.setMaxValue(shortPomodoroToUpdate);
		}
		if (obj.longRadio && longPomodoroToUpdate) {
			obj.setMainTime(longPomodoroToUpdate);
			obj.setMaxValue(longPomodoroToUpdate);
		}

		obj.setIsModalOpen(false);
	}, [color, font, defaultPomodoroToUpdate, longPomodoroToUpdate, shortPomodoroToUpdate, obj]);

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

		if (fontToUpdate) setFont(fontToUpdate);
		if (colorToUpdate) setColor(colorToUpdate);

		if (defaultPomodoroToUpdate) obj.setDefaultPomodoro(defaultPomodoroToUpdate);
		if (shortPomodoroToUpdate) obj.setDefaultRestTime(shortPomodoroToUpdate);
		if (longPomodoroToUpdate) obj.setDefaultLongRestTime(longPomodoroToUpdate);
	}, [
		setColor,
		setFont,
		fontToUpdate,
		colorToUpdate,
		defaultPomodoroToUpdate,
		longPomodoroToUpdate,
		shortPomodoroToUpdate,
		obj
	]);

	return (
		<div className='pomodoro-modal'>
			<HeaderSettings setIsModalOpen={e => obj.setIsModalOpen(e)} />
			<UpdateTimer
				setDefaultPomodoroToUpdate={e => setDefaultPomodoroToUpdate(e)}
				setShortPomodoroToUpdate={e => setShortPomodoroToUpdate(e)}
				setLongPomodoroToUpdate={e => setLongPomodoroToUpdate(e)}
				defaultPomodoro={obj.defaultPomodoro}
				defaultRestTime={obj.defaultRestTime}
				defaultLongRestTime={obj.defaultLongRestTime}
			/>
			<UpdateFont font={font} setFontToUpdate={e => setFontToUpdate(e)} />
			<UpdateColor setColorToUpdate={e => setColorToUpdate(e)} color={color} />

			<button className='apply-settings' onClick={() => applyChanges()}>
				Apply
			</button>
		</div>
	);
}

export default PomodoroModal;

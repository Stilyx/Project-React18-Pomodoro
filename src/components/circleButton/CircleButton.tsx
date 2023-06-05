import React from 'react';

// Styles
import './CircleButton.css';

// Interfaces
import {ICircleButton} from '../../interfaces/ICircleButton';

function CircleButton({
	inputId,
	labelClass,
	labelText,
	inputName,
	isChecked,
	value,
	handleClick
}: ICircleButton) {
	return (
		<>
			<input
				type='radio'
				name={inputName}
				id={inputId}
				defaultChecked={isChecked}
				value={value}
				onClick={handleClick}
			/>
			<label htmlFor={inputId} className={`circle-button ${labelClass}`}>
				{labelText}
			</label>
		</>
	);
}

export default CircleButton;

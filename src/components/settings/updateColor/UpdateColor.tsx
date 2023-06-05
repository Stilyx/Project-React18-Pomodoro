import React, {FormEvent} from 'react';

// Styles
import './UpdateColor.css';

// Components
import CircleButton from '../../circleButton/CircleButton';

// Interfaces
import {IUpdateColor} from '../../../interfaces/IUpdateColor';

function UpdateColor({setColor, color}: IUpdateColor) {
	const handleChangeColor = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof Element) setColor(e.target.id);
	};

	return (
		<section className='settins-color'>
			<h3>COLOR</h3>
			<form action='#' className='colorFormChange' onChange={e => handleChangeColor(e)}>
				<CircleButton
					inputId='red'
					labelClass='red'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'red' ? true : false}
				/>
				<CircleButton
					inputId='blue'
					labelClass='blue'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'blue' ? true : false}
				/>
				<CircleButton
					inputId='purple'
					labelClass='purple'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'purple' ? true : false}
				/>
			</form>
		</section>
	);
}

export default UpdateColor;

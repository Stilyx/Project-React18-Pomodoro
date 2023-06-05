import React from 'react';

// Styles
import './UpdateColor.css';

// Components
import CircleButton from '../../circleButton/CircleButton';

// Interfaces
import {IUpdateColor} from '../../../interfaces/IUpdateColor';

function UpdateColor({setColor, color}: IUpdateColor) {
	const handleChangeColor = (e: React.MouseEvent<HTMLInputElement>) => {
		setColor(e.currentTarget.id);
	};

	return (
		<section className='settins-color'>
			<h3>COLOR</h3>
			<form action='#' className='colorFormChange'>
				<CircleButton
					inputId='red'
					labelClass='red'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'red' ? true : false}
					handleClick={e => handleChangeColor(e)}
				/>
				<CircleButton
					inputId='blue'
					labelClass='blue'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'blue' ? true : false}
					handleClick={e => handleChangeColor(e)}
				/>
				<CircleButton
					inputId='purple'
					labelClass='purple'
					labelText=''
					inputName='ColorForm'
					isChecked={color === 'purple' ? true : false}
					handleClick={e => handleChangeColor(e)}
				/>
			</form>
		</section>
	);
}

export default UpdateColor;

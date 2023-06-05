import React from 'react';

// Styles
import './UpdateFont.css';

// Components
import CircleButton from '../../circleButton/CircleButton';

// Interfaces
import {IUpdateFont} from '../../../interfaces/IUpdateFont';

function UpdateFont({font, setFont}: IUpdateFont) {
	const handleChangeFont = (e: React.MouseEvent<HTMLInputElement>) => {
		setFont(e.currentTarget.value);
	};
	return (
		<section className='settins-font'>
			<h3>FONT</h3>
			<form action='#' className='fontFormChange'>
				<CircleButton
					inputId='Kumbh-Sans'
					labelClass='kumbSans'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Kumbh Sans' ? true : false}
					value='Kumbh Sans'
					handleClick={e => handleChangeFont(e)}
				/>
				<CircleButton
					inputId='Roboto-Slab'
					labelClass='robotoSlab'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Roboto Slab' ? true : false}
					value='Roboto Slab'
					handleClick={e => handleChangeFont(e)}
				/>
				<CircleButton
					inputId='Space-Mono'
					labelClass='spaceMono'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Space Mono' ? true : false}
					value='Space Mono'
					handleClick={e => handleChangeFont(e)}
				/>
			</form>
		</section>
	);
}

export default UpdateFont;

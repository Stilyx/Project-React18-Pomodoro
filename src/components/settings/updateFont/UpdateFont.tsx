import React, {FormEvent} from 'react';

// Styles
import './UpdateFont.css';

// Components
import CircleButton from '../../circleButton/CircleButton';

// Interfaces
import {IUpdateFont} from '../../../interfaces/IUpdateFont';

function UpdateFont({font, setFontToUpdate}: IUpdateFont) {
	const handleChangeFont = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof Element) {
			setFontToUpdate(e.target.id.replace('-', ' '));
		}
	};
	return (
		<section className='settins-font'>
			<h3>FONT</h3>
			<form action='#' className='fontFormChange' onChange={e => handleChangeFont(e)}>
				<CircleButton
					inputId='Kumbh-Sans'
					labelClass='kumbSans'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Kumbh-Sans' ? true : false}
				/>
				<CircleButton
					inputId='Roboto-Slab'
					labelClass='robotoSlab'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Roboto-Slab' ? true : false}
				/>
				<CircleButton
					inputId='Space-Mono'
					labelClass='spaceMono'
					labelText='Aa'
					inputName='fontForm'
					isChecked={font === 'Space-Mono' ? true : false}
				/>
			</form>
		</section>
	);
}

export default UpdateFont;

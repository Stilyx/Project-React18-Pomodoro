import React from 'react';

// Icons
import {GrFormClose} from 'react-icons/gr';

// Styles
import './HeaderSettings.css';

// Interfaces
import {IHeaderSettings} from '../../../interfaces/IHeaderSettings';

function HeaderSettings({setIsModalOpen}: IHeaderSettings) {
	return (
		<section className='header-modal'>
			<h2 className='modal-title'>Settings</h2>
			<button className='close-button' onClick={() => setIsModalOpen(false)}>
				<GrFormClose />
			</button>
		</section>
	);
}

export default HeaderSettings;

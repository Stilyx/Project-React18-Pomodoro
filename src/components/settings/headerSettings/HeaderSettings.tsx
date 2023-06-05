// Icons
import {GrFormClose} from 'react-icons/gr';

// Styles
import './HeaderSettings.css';

// Interfaces
import {IOpenModal} from '../../../interfaces/IOpenModal';

function HeaderSettings({setIsModalOpen}: IOpenModal): JSX.Element {
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

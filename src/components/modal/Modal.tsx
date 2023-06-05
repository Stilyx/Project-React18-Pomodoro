import React from 'react';

// Styles
import './Modal.css';

// Interfaces
import {IModal} from '../../interfaces/IModal';
import {IOpenModal} from '../../interfaces/IOpenModal';

function Modal({children, isModalOpen, setIsModalOpen}: IModal & IOpenModal) {
	const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target instanceof Element) {
			if (e.target.classList.value === 'modal-overlay') setIsModalOpen(false);
		}
	};

	return (
		<div className={isModalOpen ? 'modal-overlay' : 'hidden'} onClick={e => handleCloseModal(e)}>
			{children}
		</div>
	);
}

export default Modal;

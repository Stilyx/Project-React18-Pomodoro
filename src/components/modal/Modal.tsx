import React from 'react';

// Styles
import './Modal.css';

// Interfaces
import {IModal} from '../../interfaces/IModal';

function Modal({children, isModalOpen, setIsModalOpen}: IModal) {
	const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target instanceof Element) {
			if (e.target.classList.value === 'modal-overlay') setIsModalOpen(false);
		}
	};

	return (
		<div className={isModalOpen} onClick={e => handleCloseModal(e)}>
			{children}
		</div>
	);
}

export default Modal;

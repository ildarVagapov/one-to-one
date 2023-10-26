import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";


export const InterviewsModal = () => {

	const [isOpen, setIsOpen] = useState(true)

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="modal">
				<Dialog.Panel className='modal__body'>
					<div className="modal__item">
						<Dialog.Title className='modal__title'>Создание собеседования</Dialog.Title>
						<button onClick={() => setIsOpen(false)}> <FiX className='modal__close' /> </button>
					</div>
					<form className="form">
						<div className="form__items"></div>
					</form>
					<button className="modal__save">Сохранить</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
};

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import style from "./InterviewsModal.module.scss";
import { Stack } from "./components/Stack/Stack";
import { Level } from "./components/Level/Level";
import { DatePick } from "./components/Date/Date";
import { Time } from "./components/Time/Time";

export const InterviewsModal = () => {

	const [isOpen, setIsOpen] = useState(true)

	return (
		<div>
			<button onClick={() => setIsOpen(true)}> open</button>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
				<div className={style.modal}>
					<Dialog.Panel className={style.modal__body}>
						<div className={style.modal__item}>
							<Dialog.Title className={style.modal__title}>Создание собеседования</Dialog.Title>
							<button className={style.modal__close} onClick={() => setIsOpen(false)}> <FiX /> </button>
						</div>
						<form className={style.form}>
							<div className={style.form__items}>
								{/* <DatePick /> */}
								{/* <Level /> */}
								{/* <Time /> */}
								<Stack />
							</div>
						</form>
						<button className={style.modal__save}>Сохранить</button>
					</Dialog.Panel>
				</div>
			</Dialog >
		</div >
	)
};

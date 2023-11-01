import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import style from "./InterviewsModal.module.scss";
import { Stack } from "./components/Stack/Stack";
import { Level } from "./components/Level/Level";
import { Date } from "./components/Date/Date";
import { Time } from "./components/Time/Time";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export const InterviewsModal = () => {
	const { handleSubmit, control, reset, formState: { errors } } = useForm()
	const [isOpen, setIsOpen] = useState(true)

	const onSubmit: SubmitHandler<any> = (data) => {
		reset()
		alert(JSON.stringify(data))
	}

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
						<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
							<div className={style.form__items}>
								{/* <Controller
									control={control}
									name={'date'}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (

										< Date
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/> */}
								<Controller
									control={control}
									name={'stack'}
									render={({ field: { onChange, value, name }, }) => (

										< Stack
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/>
								{/* <Level /> */}
								{/* <Time /> */}
							</div>
							<button className={style.modal__save} >Сохранить</button>
						</form>
					</Dialog.Panel>
				</div>
			</Dialog >
		</div >
	)
};

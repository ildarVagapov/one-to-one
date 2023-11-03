import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import style from "./InterviewsModal.module.scss";
import { Stack } from "./components/Stack/Stack";
import { Level } from "./components/Level/Level";
import { Datep } from "./components/Date/Date";
import { Time } from "./components/Time/Time";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Error } from "shared/components";
import { useCreateInterviewMutation } from "./api/interviewsModalApi";
import { FormData } from "./model/types";


export const InterviewsModal = () => {
	const { handleSubmit, control, reset, formState: { isValid } } = useForm<FormData>()
	const [isOpen, setIsOpen] = useState(true)
	const [createInterview, { isError, isLoading }] = useCreateInterviewMutation()

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		reset()
		const userData = {
			initiatorId: 1,
			comment: '',
			technologyId: data.technology.id,
			// dateTime: `${data.date}' '${data.time}`,
			dateTime: "2022-09-22T11:00:00",
			levelId: data.level.id,
		}
		createInterview(userData)
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
								<Controller
									control={control}
									name={'date'}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (

										< Datep
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/>
								<Controller
									control={control}
									name={'technology'}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (

										< Stack
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/>
								<Controller
									control={control}
									name={'time'}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (

										< Time
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/>
								<Controller
									control={control}
									name={'level'}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (

										< Level
											value={value}
											onChange={onChange}
											name={name}
										/>
									)}
								/>
							</div>
							<Button loading={isLoading} disabled={!isValid} text='Сохранить' />
							{isError && <Error />}
						</form>
					</Dialog.Panel>
				</div>
			</Dialog >
		</div >
	)
};

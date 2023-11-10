import { Dialog } from "@headlessui/react";
import { FiPlusCircle, FiX } from "react-icons/fi";
import { Button, Error } from "shared/components";
import { useDispatch, useSelector } from "react-redux";
import { openCloseModal2 } from "shared/api/baseSlice";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import style from './QuestionModal.module.scss'
import { Stack } from "./components/Stack/Stack";
import { QuestionInput } from "./components/Question/QuestionInput";
import { Answer } from "./components/Answer/Answer";

export const QuestionModal = () => {
	const { handleSubmit, control, reset, formState: { isValid } } = useForm()
	const modalState = useSelector((state: any) => state.baseSlice.modalState2)

	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		reset()
		alert(JSON.stringify(data))
	}

	return (
		<Dialog open={modalState} onClose={() => dispatch(openCloseModal2(false))}>
			<div className={style.modal}>
				<Dialog.Panel className={style.modal__body}>
					<div className={style.modal__item}>
						<FiPlusCircle className={style.modal__add} />
						<button className={style.modal__close} onClick={() => dispatch(openCloseModal2(false))}> <FiX /> </button>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
						<div className={style.form__items}>
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
								name={'answer'}
								rules={{ required: true }}
								render={({ field: { onChange, value, name }, }) => (

									<Answer
										value={value}
										onChange={onChange}
										name={name}
									/>
								)}
							/>
							<Controller
								control={control}
								name={'question'}
								rules={{ required: true }}
								render={({ field: { onChange, value, name }, }) => (

									<QuestionInput
										value={value}
										onChange={onChange}
										name={name}
									/>
								)}
							/>
						</div>
						<Button text="Сохранить" disabled={!isValid} />
					</form>
				</Dialog.Panel >
			</div >
		</Dialog >
	)
};

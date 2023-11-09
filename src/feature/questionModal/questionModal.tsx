import { Dialog } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { Button, Error } from "shared/components";
import { useDispatch, useSelector } from "react-redux";
import { openCloseModal1, openCloseModal2 } from "shared/api/baseSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


export const InterviewsModal = () => {
	const { handleSubmit, control, reset, formState: { isValid } } = useForm()

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		reset()
	}

	const modalState = useSelector((state: any) => state.baseSlice.modalState2)
	const dispatch = useDispatch()

	return (
		<div>
			<Dialog open={modalState} onClose={() => dispatch(openCloseModal2(false))}>
				<div >
					<Dialog.Panel >
						<div >
							<Dialog.Title>Создание собеседования</Dialog.Title>
							<button onClick={() => dispatch(openCloseModal2(false))}> <FiX /> </button>
						</div>
						<form >
						</form>
					</Dialog.Panel >
				</div >
			</Dialog >
		</div >
	)
};

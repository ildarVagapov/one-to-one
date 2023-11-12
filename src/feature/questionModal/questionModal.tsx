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
import { useEffect, useState } from "react";
import { useAddQuestionMutation } from "./api/questionModalApi";
import { FormDataQuestion, IQuestion } from "./model/types";

export const QuestionModal = () => {
	const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);
	const { handleSubmit, control, reset, formState: { isValid }, getValues } = useForm()
	const modalState = useSelector((state: any) => state.baseSlice.modalState2)
	const [addQuestion, { isError, isLoading, isSuccess }] = useAddQuestionMutation()

	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formDataQuestion: FormDataQuestion = data as FormDataQuestion;

		// const bodyQuestion = {
		// 	userId: 1,
		// 	questions: questionsList.concat([
		// 		{
		// 			question: formDataQuestion.question,
		// 			answer: formDataQuestion.answer,
		// 			technologyId: formDataQuestion.technology.id,
		// 			userId: 1
		// 		}
		// 	])
		// }

		// setQuestionsList((prevList) => [
		// 	...prevList,
		// 	{
		// 		question: formDataQuestion.question,
		// 		answer: formDataQuestion.answer,
		// 		technologyId: formDataQuestion.technology.id,
		// 		userId: 1
		// 	}
		// ])

		// addQuestion({
		// 	userId: 1,
		// 	questions: [
		// 		...questionsList,
		// 		{
		// 			question: formDataQuestion.question,
		// 			answer: formDataQuestion.answer,
		// 			technologyId: formDataQuestion.technology.id,
		// 			userId: 1
		// 		}
		// 	]
		// });
		console.log({
			userId: 1,
			questions: [
				...questionsList,
				{
					question: formDataQuestion.question,
					answer: formDataQuestion.answer,
					technologyId: formDataQuestion.technology.id,
					userId: 1
				}
			]
		})
		reset()
	};

	const addOneMoreQuestionHandler = () => {
		const technologyId = getValues("technology").id
		const answer = getValues("answer")
		const question = getValues("question")

		if (technologyId && answer && question === undefined) {
			console.error("data undefined");
			return;
		}

		setQuestionsList((prevList) => [
			...prevList,
			{
				question: question,
				answer: answer,
				technologyId: technologyId,
				userId: 1
			}
		]);

		reset();
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(openCloseModal2(false));
			setQuestionsList([])
		}
	}, [isSuccess])


	return (
		<Dialog open={modalState} onClose={() => dispatch(openCloseModal2(false))}>
			<div className={style.modal}>
				<Dialog.Panel className={style.modal__body}>
					<div className={style.modal__item}>
						<FiPlusCircle className={style.modal__add} onClick={addOneMoreQuestionHandler} />
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
						<Button loading={isLoading} text="Сохранить" disabled={!isValid} />
						{isError && <Error />}
					</form>
				</Dialog.Panel >
			</div >
		</Dialog >
	)
};

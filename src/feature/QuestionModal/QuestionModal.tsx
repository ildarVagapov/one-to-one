import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FiPlusCircle, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Button, Error } from "shared/components";
import style from './QuestionModal.module.scss';
import { useAddQuestionMutation } from "./api/questionModalApi";
import { Answer } from "./components/Answer/Answer";
import { QuestionInput } from "./components/Question/QuestionInput";
import { Stack } from "./components/Stack/Stack";
import { FormDataQuestion, } from "./model/types";
import { modalState2, openCloseModal2 } from "shared/api/modalSlice";
import { userId } from "shared/api/userIdSlice";
import { IQuestion } from "shared/types/IQuestions";

export const QuestionModal = () => {
	const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);
	const { handleSubmit, control, reset, formState: { isValid }, getValues, trigger } = useForm()
	const [addQuestion, { isError, isLoading, isSuccess }] = useAddQuestionMutation()
	const stateModa2 = useSelector(modalState2)
	const dispatch = useDispatch()
	const id = useSelector(userId)

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {

		const formDataQuestion: FormDataQuestion = data as FormDataQuestion;

		if (questionsList.length === 0 && isValid) {
			await addQuestion({
				userId: id,
				questions: [
					...questionsList,
					{
						question: formDataQuestion.question,
						answer: formDataQuestion.answer,
						technologyId: formDataQuestion.technology?.id,
						userId: id
					}
				]
			});
		} else if (questionsList.length > 0 && !isValid) {
			await addQuestion({
				userId: id,
				questions: questionsList
			});
		}

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
				userId: id
			}
		]);

		reset();
	};

	useEffect(() => {
		if (isSuccess) {
			reset();
			setQuestionsList([]);
			dispatch(openCloseModal2(false));
		}
	}, [isSuccess])



	return (
		<Dialog open={stateModa2} onClose={() => dispatch(openCloseModal2(false))}>
			<div className={style.modal}>
				<Dialog.Panel className={style.modal__body}>
					<div className={style.modal__item}>
						<button disabled={!isValid} className={style.modal__added}>
							<FiPlusCircle className={style.modal__add} onClick={addOneMoreQuestionHandler} />
							<span className={style.modal__tooltip}>{questionsList.length}</span>
						</button>
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
						</div>
						<Button onClick={async () => { await trigger(); await onSubmit(getValues()); }} loading={isLoading} text="Сохранить" disabled={!isValid && questionsList.length === 0} />
						{isError && <Error />}
					</form>
				</Dialog.Panel >
			</div >
		</Dialog >
	)
};

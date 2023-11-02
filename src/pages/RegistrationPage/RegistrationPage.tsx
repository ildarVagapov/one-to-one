import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Button, Input, Logo } from "shared/components"
import { useRegistrationMutation } from "./api/registrationApi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { arrReg } from "./consts/constRegistration";
import { UserRegistrationData } from "./model/types";
import { useState } from "react";


export const RegistrationPage = () => {
	const [registration, { isError, isLoading, isSuccess }] = useRegistrationMutation();
	const { handleSubmit, control, reset, formState: { errors } } = useForm<UserRegistrationData>()
	const [testSuccess, setTestSuccess] = useState(false)

	const onSubmit: SubmitHandler<UserRegistrationData> = (data) => {
		// registration(data);
		reset()
		alert(JSON.stringify(data))
		data && setTestSuccess(true)
	};

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
				{testSuccess ?
					<>
						<p className={style.success}>Регистрация прошла успешно!</p>
						<p className={style.registration__info}><Link to='/auth'>Войти</Link></p>
					</>
					:
					<>
						<form onSubmit={handleSubmit(onSubmit)} className={style.registration__form}>
							{arrReg.map((input, i) => (
								<Controller
									key={i}
									name={input.name as "username" | "password" | "surname" | "email"}
									control={control}
									rules={{ required: true }}
									render={({ field: { onChange, value, name }, }) => (
										<Input
											label={input.label}
											value={value}
											onChange={onChange}
											name={name}
											errors={errors}
											type={input.type}
										/>)}
								/>
							))}
							<Button loading={isLoading} text="Войти" btn='auth' />
						</form>
						<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link></p>
						{isError && <p className={style.error}>Ошибка регистрации!</p>}
					</>
				}
			</div>
		</section>
	)
}
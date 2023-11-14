import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Button, Error, Input, Logo } from "shared/components"
import { useRegistrationMutation } from "./api/registrationApi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { arrReg } from "./consts/constRegistration";
import { UserRegistrationData } from "./model/types";
import { useEffect } from "react";


export const RegistrationPage = () => {
	const [registration, { isError, isLoading, isSuccess }] = useRegistrationMutation();
	const { handleSubmit, control, reset, formState: { errors, isValid } } = useForm<UserRegistrationData>()

	const onSubmit: SubmitHandler<UserRegistrationData> = ({ email, password, name, surName }) => {
		const registrationData = { email, password, name, surName, }

		registration(registrationData);
	};

	useEffect(() => {
		isSuccess && reset()
	}, [isSuccess])

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
				{isSuccess ?
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
									name={input.name as "name" | "password" | "surName" | "email"}
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
							<Button disabled={!isValid} type='fill' loading={isLoading} text="Зарегистрироваться" />
						</form>
						<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link></p>
						{isError && <Error />}
					</>
				}
			</div>
		</section>
	)
}
import { Link, useNavigate } from "react-router-dom"
import style from './AuthPage.module.scss'
import { Button, Error, Input, Logo } from "shared/components"
import { useAuthMutation } from "./api/authApi";
import { UserAuthData } from "./model/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { arrAuth } from "./consts/constAuth";
import { useEffect } from "react";


export const AuthPage = () => {
	const [auth, { isError, isLoading, isSuccess }] = useAuthMutation();
	const { handleSubmit, control, formState: { errors, isValid } } = useForm<UserAuthData>()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<UserAuthData> = (authData) => {
		auth(authData);
		console.log(authData)
	};

	useEffect(() => {
		if (isSuccess) {
			const timeoutId = setTimeout(() => {
				navigate('/')
			}, 2000)
			return () => clearTimeout(timeoutId)
		}
	}, [isSuccess])

	return (
		<section className={style.auth}>
			<div className={style.auth__container}>
				<Logo />
				{isSuccess ?
					<>
						<p className={style.success}>Автортзация прошла успешно!</p>
					</>
					:
					<>
						<form onSubmit={handleSubmit(onSubmit)} className={style.auth__form}>
							{arrAuth.map((input, i) => (
								<Controller
									key={i}
									name={input.name as "password" | "email"}
									control={control}
									rules={{ required: true }}
									render={({ field: { onChange, value, name } }) => (
										<Input
											label={input.label}
											value={value}
											onChange={onChange}
											name={name}
											errors={errors}
											type={input.type}
										/>
									)}
								/>
							))}
							<Button type='fill' disabled={!isValid} loading={isLoading} text="Войти" />
						</form>
						<p className={style.auth__info}>Нет аккаунта ? <Link to='/registration'>Зарегистрироваться</Link> </p>
						{isError && <Error />}
					</>
				}
			</div>
		</section>
	)
}
import { Link } from "react-router-dom"
import style from './AuthPage.module.scss'
import { Input, Logo } from "shared/components"
import { useAuthMutation } from "./api/authApi";
import { UserAuthData } from "./model/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { arrAuth } from "./consts/constAuth";



export const AuthPage = () => {
	const [auth, { isLoading }] = useAuthMutation();
	const { handleSubmit, control, reset, formState: { errors } } = useForm<UserAuthData>()

	const onSubmit: SubmitHandler<UserAuthData> = (data) => {
		// auth(data);
		reset()
		alert(JSON.stringify(data))
	};

	return (
		<section className={style.auth}>
			<div className={style.auth__container}>
				<Logo />
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
					{!isLoading ? <button className={style.auth__btn} type="submit">Войти</button>
						: <button className={style.auth__btn2} type="submit">Вход...</button>
					}
				</form>
				<p className={style.auth__info}>Нет аккаунта ? <Link to='/registration'>Зарегистрироваться</Link> </p>
			</div>
		</section>
	)
}
import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Input, Logo } from "shared/components"
import { useRegistrationMutation } from "./api/registrationApi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { arrReg } from "./consts/constRegistration";
import { UserRegistrationData } from "./model/types";



export const RegistrationPage = () => {
	const [registration, { isError, isLoading }] = useRegistrationMutation();
	const { handleSubmit, control, reset, formState: { errors } } = useForm<UserRegistrationData>()

	const onSubmit: SubmitHandler<UserRegistrationData> = (data) => {
		// registration(data);
		reset()
		alert(JSON.stringify(data))
	};

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
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
					{!isLoading ? <button className={style.registration__btn} type="submit"  >Зарегистрироваться</button>
						: <button className={style.registration__btn2} type="submit" >Регистрируем</button>
					}
				</form>
				<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link> </p>
				{isError && <p>Ошибка</p>}
			</div>
		</section>
	)
}
import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Input, Logo } from "shared/components"
import { useRegistrationMutation } from "./api/registrationApi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";


interface UserRegistrationData {
	username: string;
	password: string;
	surname: string;
	email: string;
}
interface Input {
	name: string, label: string
}

export const RegistrationPage = () => {
	const [registration, { isError, isLoading }] = useRegistrationMutation();
	const { handleSubmit, control, formState: { errors }, reset } = useForm<UserRegistrationData>()

	const onSubmit: SubmitHandler<UserRegistrationData> = (data) => {
		// register(data);
		reset()
		console.log(data)
	};

	const inputArr = [
		{ name: 'email', label: 'E-mail', type: 'text' },
		{ name: 'password', label: 'Пароль', type: 'password' },
		{ name: 'username', label: 'Имя', type: 'text' },
		{ name: 'surname', label: 'Фамилия', type: 'text' },
	]

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
				<form onSubmit={handleSubmit(onSubmit)} className={style.registration__form}>
					{inputArr.map((input, i) => (
						<Controller
							key={i}
							name={input.name as "username" | "password" | "surname" | "email"}
							control={control}
							rules={{ required: `${input.label} обязательно для заполнения` }}
							render={({ field: { onChange, value, name } }) => (
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
					<button className={style.registration__btn} type="submit" disabled={isLoading} >Зарегистрироваться</button>
				</form>
				<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link> </p>
				{isError && <p>Ошибка</p>}
			</div>
		</section>
	)
}
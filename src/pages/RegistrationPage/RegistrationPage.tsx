import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Input, Logo } from "shared/components"
import { useState } from "react";
import { useRegisterMutation } from "./api/registrationApi";


export const RegistrationPage = () => {

	const [formData, setFormData] = useState({ username: '', password: '', email: '', lastname: '' });
	const [register, { isError, isLoading }] = useRegisterMutation();

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		register(formData);
		e.preventDefault();
	};

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
				<form className={style.registration__form}>
					<Input label='E-mail' name='email' onChange={handleFormChange} value={formData.email} />
					<Input label='Пароль' name='password' type='password' onChange={handleFormChange} value={formData.password} />
					<Input label='Имя' name='username' onChange={handleFormChange} value={formData.username} />
					<Input label='Фамиля' name='lastname' onChange={handleFormChange} value={formData.lastname} />
				</form>
				<button className={style.registration__btn} onClick={handleSubmit} disabled={isLoading} >Зарегистрироваться</button>
				<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link> </p>
				{isError && <p>ошибка</p>}
			</div>
		</section>
	)
}
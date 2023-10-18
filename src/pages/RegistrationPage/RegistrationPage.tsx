import { Link } from "react-router-dom"
import style from './RegistrtionPage.module.scss'
import { Input, Logo } from "shared/components"



export const RegistrationPage = () => {

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<Logo />
				<form action="" className={style.registration__form}>
					<Input label={'E-mail'} placeholder={'Email'} />
					<Input label={'Пароль'} placeholder={'Пароль'} type={'password'} />
					<Input label={'Имя'} placeholder={'Имя'} />
					<Input label={'Фамиля'} placeholder={'Фамиля'} />
				</form>
				<button className={style.registration__btn}>Зарегистрироваться</button>
				<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link> </p>
			</div>
		</section>
	)
}
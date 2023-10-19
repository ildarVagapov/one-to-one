import { Link } from "react-router-dom"
import style from './AuthPage.module.scss'
import { Input, Logo } from "shared/components"



export const AuthPage = () => {

	return (
		<section className={style.auth}>
			<div className={style.auth__container}>
				<Logo />
				<form action="" className={style.auth__form}>
					<Input label={'E-mail'} placeholder={'Email'} />
					{/* <Input label={'Пароль'} placeholder={'Пароль'} type={'password'} /> */}
				</form>
				<button className={style.auth__btn}>Войти</button>
				<p className={style.auth__info}>Нет аккаунта ? <Link to='/registration'>Зарегистрироваться</Link> </p>
			</div>
		</section>
	)
}
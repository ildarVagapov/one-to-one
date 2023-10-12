import { Link } from "react-router-dom"
import style from './Auth.module.scss'



export const Auth = () => {

	return (
		<section className={style.auth}>
			<div className={style.auth__container}>
				<div className={style.auth__logo}>
					<img src="/public/assets/ЛогоAuth.svg" alt="" />
				</div>
				<form action="" className={style.auth__form}>
					<div className={style.auth__formItem}>
						<label >E-mail</label>
						<input type="text" placeholder="email" />
					</div>
					<div className={style.auth__formItem}>
						<label>Пароль</label>
						<input type="password" placeholder="password" />
					</div>
				</form>
				<button className={style.auth__Btn}>Войти</button>
				<p className={style.auth__info}>Нет аккаунта ? <Link to='/registration'>Зарегистрироваться</Link> </p>
			</div>
		</section>
	)
}
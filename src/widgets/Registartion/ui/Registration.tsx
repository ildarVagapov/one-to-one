import { Link } from "react-router-dom"
import style from './Registrtion.module.scss'



export const Registration = () => {

	return (
		<section className={style.registration}>
			<div className={style.registration__container}>
				<div className={style.registration__logo}>
					<img src="/public/assets/ЛогоAuth.svg" alt="" />
				</div>
				<form action="" className={style.registration__form}>
					<div className={style.registration__formItem}>
						<label >E-mail</label>
						<input type="text" placeholder="email" />
					</div>
					<div className={style.registration__formItem}>
						<label>Пароль</label>
						<input type="password" placeholder="password" />
					</div>
					<div className={style.registration__formItem}>
						<label>Имя</label>
						<input type="text" placeholder="name" />
					</div>
					<div className={style.registration__formItem}>
						<label>Фамилия</label>
						<input type="text" placeholder="surname" />
					</div>
				</form>
				<button className={style.registration__Btn}>Зарегистрироваться</button>
				<p className={style.registration__info}>Есть аккаунт ? <Link to='/auth'>Войти</Link> </p>
			</div>
		</section>
	)
}
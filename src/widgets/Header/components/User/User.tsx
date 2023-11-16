import { useNavigate } from "react-router-dom";
import style from "./User.module.scss";
import { FiLogOut } from "react-icons/fi"

export const User = () => {
	const navigate = useNavigate()

	const user = [
		{
			name: 'Ильдар',
			surname: 'Вагапов',
			email: 'ildar.vag@gmail.com'
		}
	]

	const outClick = () => {
		localStorage.removeItem('id')
		localStorage.removeItem('access')
		navigate('/auth')
	}

	return (
		<div className={style.user}>
			{user.map((user, i) => (
				<div key={i} className={style.user__info}>
					<span className={style.user__name}>{user.name} {user.surname}</span>
					<span className={style.user__mail}>{user.email}</span>
				</div>
			))}
			<button className={style.user__out} onClick={outClick}>
				<FiLogOut />
			</button>
		</div>
	)
}
import style from "./User.module.scss";
import { FiLogOut } from "react-icons/fi"

export const User = () => {

	const user = [
		{
			name: 'Ильдар',
			surname: 'Вагапов',
			email: 'ildar.vag@gmail.com'
		}
	]

	return (
		<div className={style.user}>
			{user.map(user => (
				<div className={style.user__info}>
					<span className={style.user__name}>{user.name} {user.surname}</span>
					<span className={style.user__mail}>{user.email}</span>
				</div>
			))}
			<div className={style.user__img}></div>
			<FiLogOut className={style.user__out} />
		</div>
	)
}
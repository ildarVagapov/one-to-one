import { useNavigate } from "react-router-dom";
import style from "./User.module.scss";
import { FiLogOut } from "react-icons/fi"
import { useGetUserIdQuery } from "./api/userApi";

export const User = () => {
	const navigate = useNavigate()

	const { data } = useGetUserIdQuery(localStorage.getItem('id'))

	const outClick = () => {
		localStorage.removeItem('id')
		localStorage.removeItem('access')
		navigate('/auth')
	}

	return (
		<div className={style.user}>
			<div className={style.user__info}>
				<span className={style.user__name}>{data?.name} {data?.surName}</span>
				<span className={style.user__mail}>{data?.email}</span>
			</div>
			<button className={style.user__out} onClick={outClick}>
				<FiLogOut />
			</button>
		</div>
	)
}
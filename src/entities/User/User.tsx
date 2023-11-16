import { useNavigate } from "react-router-dom";
import style from "./User.module.scss";
import { FiLogOut } from "react-icons/fi"
import { useGetUserIdQuery } from "entities/User/api/userApi";
import { useEffect } from 'react'
import { setUserId } from "shared/api/userIdSlice";
import { useDispatch } from "react-redux";
import { SkeletonUser } from "./components/SkeletonUser";


export const User = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { data, isLoading, isError } = useGetUserIdQuery(localStorage.getItem('id'))

	const outClick = () => {
		localStorage.removeItem('id')
		localStorage.removeItem('access')
		navigate('/auth')
	}

	useEffect(() => {
		if (data) {
			dispatch(setUserId(data.id))
		} else {
			console.error(isError)
		}
	}, [data])

	return (
		<div className={style.user}>
			<div className={style.user__info}>
				{
					isLoading ? <SkeletonUser />
						:
						<>
							<span className={style.user__name}>{data?.name} {data?.surName}</span>
							<span className={style.user__mail}>{data?.email}</span>
						</>
				}
			</div>
			<button className={style.user__out} onClick={outClick}>
				<FiLogOut />
			</button>
		</div>
	)
}
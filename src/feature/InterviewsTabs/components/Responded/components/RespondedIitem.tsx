import { useGetUserIdQuery } from "shared/api/userApi";
import { IItem } from "shared/types/IItems";
import style from './RespondedIitem.module.scss'
import { Button } from "shared/components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInitiator } from "shared/api/initiatorIdSlice";

interface IResItemProps {
	item: IItem
}

export const RespondedIitem = (props: IResItemProps) => {
	const navigate = useNavigate()

	const { item } = props
	const { data } = useGetUserIdQuery(item.initiatorId)
	const dispatch = useDispatch()

	const handleClick = () => {
		try {
			dispatch(setInitiator({ initiatorId: item.initiatorId, date: item.dateTime, name: data?.name, surName: data?.surName }))
			navigate('/interviews-window')
		} catch (error) {
			'ошибка при добавлении в стэйт айди инициатора'
		}
	}

	return (
		<ul className={style.items}>
			<li>{item.dateTime}</li>
			<li>{item.technology.name}</li>
			<li>{data?.name} {data?.surName}</li>
			<li>{item.level}</li>
			<li>{item.status}</li>
			<Button type="border" text="Провести собеседование" onClick={() => handleClick()} />
		</ul >
	)
}

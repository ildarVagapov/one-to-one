import { useGetUserIdQuery } from "shared/api/userApi";
import { IItem } from "shared/types/IItems";
import style from './RespondedIitem.module.scss'
import { Button } from "shared/components";
import { useNavigate } from "react-router-dom";

interface IResItemProps {
	item: IItem
}

export const RespondedIitem = (props: IResItemProps) => {
	const navigate = useNavigate()

	const { item } = props
	const { data } = useGetUserIdQuery(item.initiatorId)

	return (
		<ul className={style.items}>
			<li>{item.dateTime}</li>
			<li>{item.technology.name}</li>
			<li>{data?.name} {data?.surName}</li>
			<li>{item.level}</li>
			<Button type="border" text="Провести собеседование" onClick={() => navigate('/interviews-window')} />
		</ul >
	)
}

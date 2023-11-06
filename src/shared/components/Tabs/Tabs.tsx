import { useState } from "react"
import style from "./Tabs.module.scss"
import { FiPlusCircle } from "react-icons/fi"
import { TabsProps } from "./model/types"


export const Tabs = (props: TabsProps) => {
	const { tabs } = props
	const [idTabs, setIdTabs] = useState(1)

	return (
		<div className={style.tabs}>
			<div className={style.tabs__btn}>
				{tabs.map(tab => (
					<button className={idTabs === tab.id ? `${style.active}` : ''} onClick={() => setIdTabs(tab.id)}>
						{tab.title}
						{tab.popap && <FiPlusCircle className={style.icon} />}
					</button>
				))}
			</div >
			<div className={style.tabs__container}>
				{tabs.map(tab => (
					<>
						{idTabs === tab.id && tab.component}
					</>
				))}
			</div >
		</div >
	)
}
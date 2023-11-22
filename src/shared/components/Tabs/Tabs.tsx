import { useState } from "react"
import style from "./Tabs.module.scss"
import { FiPlusCircle } from "react-icons/fi"
import { TabsProps } from "./model/types"
import { useDispatch } from "react-redux"
import { openCloseModal1, openCloseModal2 } from "shared/api/modalSlice"


export const Tabs = (props: TabsProps) => {
	const { tabs } = props
	const [idTabs, setIdTabs] = useState(1)

	const dispatch = useDispatch()

	const handleModal = (popapId: number) => {
		if (popapId === 1) {
			dispatch(openCloseModal1(true))
		} else if (popapId === 2) {
			dispatch(openCloseModal2(true))
		}
	}

	return (
		<div className={style.tabs}>
			<div className={style.tabs__btn}>
				{tabs.map((tab, i) => (
					<button key={i} className={idTabs === tab.id ? `${style.active}` : ''} onClick={() => setIdTabs(tab.id)}>
						{tab.title}
						{tab.popap && <FiPlusCircle onClick={() => handleModal(tab.id)} className={style.icon} />}
					</button>
				))}
			</div >
			<div className={style.tabs__container}>
				{tabs.map((tab, i) => (
					<div key={i} >
						{idTabs === tab.id && tab.component}
					</div>
				))}
			</div >
		</div >
	)
}
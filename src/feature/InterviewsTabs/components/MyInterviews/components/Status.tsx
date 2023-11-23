import { FiClock, FiCheckCircle } from "react-icons/fi";
import style from './Status.module.scss'

interface StatusProps {
	status: string
}

export const Status = (props: StatusProps) => {
	const { status } = props

	return (
		<>
			{status === 'OPEN' && <p className={style.open} ><FiClock />  Ожидание </p >}
			{status === 'close' && <p className={style.close} ><FiCheckCircle />  Завершено </p >}
		</>
	)
}
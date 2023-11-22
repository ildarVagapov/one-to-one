import { FiClock, FiCheckCircle, FiMessageCircle } from "react-icons/fi";
interface StatusProps {
	status: string
}

export const Status = (props: StatusProps) => {
	const { status } = props

	return (
		<>
			{status === 'OPEN' && <p className="open" ><FiClock />  Ожидание </p >}
			{status === 'close' && <p className="close" ><FiCheckCircle />  Завершено </p >}
			{status === 'mass' && <p className="message" ><FiMessageCircle />  Подключиться </p >}
		</>
	)
}
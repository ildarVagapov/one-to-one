import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
	text: string,
	disabled?: boolean,
	btn: string,
	loading?: boolean
}

export const Button = (props: ButtonProps) => {
	const { text, disabled, loading, btn } = props

	const btnClass = classNames(
		styles.button, // Общий класс из модуля
		{
			[styles.auth]: btn === 'auth',
			[styles.loading]: loading,
			[styles.disabled]: disabled, // Условный класс для состояния "disabled"
		}
	);

	return (
		<>
			{btn === 'green' && <button disabled={disabled} className={btnClass}>{text}</button >}
			{btn === 'auth' && <button disabled={disabled} className={btnClass}>{loading ? '...' : `${text}`}</button >}
		</>
	)
}
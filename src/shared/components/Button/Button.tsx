import classNames from 'classnames'
import styles from './Button.module.scss'
import { Loader } from '..'

interface ButtonProps {
	text: string,
	disabled?: boolean,
	btn: string,
	loading?: boolean
}

export const Button = (props: ButtonProps) => {
	const { text, disabled, loading, btn } = props

	const btnClass = classNames(
		styles.button,
		{
			[styles.auth]: btn === 'auth',
			[styles.blue]: btn === 'blue',
			[styles.loading]: loading,
			[styles.disabled]: disabled,
		}
	);

	return (
		<>
			<button disabled={disabled} className={btnClass}>{loading ? <Loader /> : `${text}`}</button >
		</>
	)
}
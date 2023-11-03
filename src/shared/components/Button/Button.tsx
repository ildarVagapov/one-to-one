import classNames from 'classnames'
import styles from './Button.module.scss'
import { Loader } from '..'

interface ButtonProps {
	text: string,
	disabled?: boolean,
	btn?: string,
	loading?: boolean,
	type?: string
}

export const Button = (props: ButtonProps) => {
	const { text, disabled, loading, btn, type } = props

	const btnClass = classNames(
		styles.button,
		{
			[styles.blue]: btn === 'blue',
			[styles.fill]: type === 'fill',
			[styles.loading]: loading,
			[styles.disabled]: disabled,
		}
	);

	return (
		<>
			<button disabled={disabled || loading} className={btnClass}>{loading ? <Loader /> : `${text}`}</button >
		</>
	)
}
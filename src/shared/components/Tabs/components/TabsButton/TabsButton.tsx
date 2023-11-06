import classNames from 'classnames'
import styles from './TabsButton.module.scss'
import { Loader } from 'shared/components';

interface TabsButtonProps {
	text: string,
	disabled?: boolean,
	color?: string,
	loading?: boolean,
}

export const TabsButton = (props: TabsButtonProps) => {
	const { text, disabled, loading, color } = props

	const btnClass = classNames(
		styles.button,
		{
			[styles.blue]: color === 'blue',
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
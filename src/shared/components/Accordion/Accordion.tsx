import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'


export const Accordion = ({ children }: any) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('accordion')}>
			{children}
		</div >
	)
}



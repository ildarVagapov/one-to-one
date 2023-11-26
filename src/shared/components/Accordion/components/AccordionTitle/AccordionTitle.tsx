import { FiChevronUp } from "react-icons/fi"
import styles from './AccordionTitle.module.scss'
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { accordionState, setOpenAccordion } from "shared/api/accordionSlice";


export const AccordionTitle = ({ children }: any) => {
	const cx = classNames.bind(styles);
	const dispatch = useDispatch()
	const open = useSelector(accordionState)

	return (
		<div className={cx('title')} onClick={() => dispatch(setOpenAccordion(!open))}>
			{children}
			< FiChevronUp className={cx('icon', open && 'icon__open')} />
		</div>
	)
}
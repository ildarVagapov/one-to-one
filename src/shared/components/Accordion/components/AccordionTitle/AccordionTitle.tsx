import { FiChevronUp } from "react-icons/fi"
import styles from './AccordionTitle.module.scss'
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { accordionState, setOpenAccordion } from "shared/api/accordionSlice";
import { RootState } from "app/store/store";


export const AccordionTitle = ({ children, id }: any) => {
	const cx = classNames.bind(styles);
	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => accordionState(state, id));


	return (
		<div className={cx('title')} >
			{children}
			< FiChevronUp className={cx('icon', open && 'icon__open')} onClick={() => dispatch(setOpenAccordion({ accordionId: id, isOpen: !open }))} />
		</div >
	)
}
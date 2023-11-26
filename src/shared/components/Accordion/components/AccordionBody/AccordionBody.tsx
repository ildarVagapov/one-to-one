import classNames from "classnames/bind"
import style from './AccordionBody.module.scss'
import { useSelector } from "react-redux";
import { accordionState } from "shared/api/accordionSlice";

export const AccordionBody = ({ children }: any) => {
	const cx = classNames.bind(style);
	const open = useSelector(accordionState)


	return (
		<div className={cx('content', open && 'content_open')} >
			{children}
		</div>
	)
}
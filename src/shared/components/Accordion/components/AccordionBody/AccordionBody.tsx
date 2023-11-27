import classNames from "classnames/bind"
import style from './AccordionBody.module.scss'
import { useSelector } from "react-redux";
import { accordionState } from "shared/api/accordionSlice";
import { RootState } from "app/store/store";

export const AccordionBody = ({ children, id }: any) => {
	const cx = classNames.bind(style);
	const open = useSelector((state: RootState) => accordionState(state, id));



	return (
		<div className={cx('content', open && 'content_open')} >
			{children}
		</div>
	)
}
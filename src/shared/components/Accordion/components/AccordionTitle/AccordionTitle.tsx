import { FiChevronUp } from "react-icons/fi"

export const AccordionTitle = ({ children }) => {

	return (
		<div className={cx('accordion__title')} onClick={() => setOpen(!open)}>
			{children}
			< FiChevronUp className={cx('icon', open && 'icon__open')} />
		</div>
	)
}
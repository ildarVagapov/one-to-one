
interface TabsBtnProps {
	label: string,
	active: string,
	onClick: () => void
}

export const TabsBtn = (props: TabsBtnProps) => {
	const { label, active, onClick } = props

	return (
		<div className={`tab ${active ? 'active' : ''}`} onClick={() => onClick(label)}>
			{label}
		</div>
	);
};
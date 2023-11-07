import { ReactNode } from "react"

interface IItems {
	id: 1,
	title: string
}

interface TabsItemProps {
	items: IItems[]
	children: ReactNode
}

export const TabsItem = (props: TabsItemProps) => {
	const { children, items } = props

	return (
		<div className="tabs">
			<>
				{items.map((item, i) => (
					<div>{item.title}</div>
				))}
			</>
			{children}
		</div>
	)
}
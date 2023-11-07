import { ReactNode } from "react"



interface IData {
	id: number,
	title: string
}

interface TabsItemProps {
	data: IData[]
	children: ReactNode
}

export const TabsItem = (props: TabsItemProps) => {
	const { children, data } = props

	return (
		<div className="tabs">
			<>
				{data.map((item, i) => (
					<div key={i}>{item.title}</div>
				))}
			</>
			{children}
		</div>
	)
}
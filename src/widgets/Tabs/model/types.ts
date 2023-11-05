export interface ITabs {
	id: number,
	title: string,
	popap?: boolean,
	component: any
}

export interface TabsProps {
	tabs: ITabs[]
}
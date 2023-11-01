import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi"
import style from './Stack.module.scss'
import { ITechnology } from './model/types'
import { useStackQuery } from './api/stackApi'

export interface DateProps {
	value?: ITechnology[], // Обратите внимание, что тип value изменен на ITechnology[]
	name: string,
	onChange: (value: ITechnology[]) => void // Изменен тип аргумента на массив ITechnology[]
}

export const Stack = (props: DateProps) => {
	const { name, value, onChange } = props;
	const [query, setQuery] = useState('')

	const { data } = useStackQuery()

	const filteredStack = data ? query === '' ? data.items : data.items.filter((stack) => stack.name
		.toLowerCase()
		.replace(/\s+/g, '')
		.includes(query.toLowerCase().replace(/\s+/g, ''))
	)
		: [];
	const [selected, setSelected] = useState(filteredStack)


	return (
		<>
			<div className={style.stack}>
				<h3 className={style.stack__title}>Стэк</h3>
				<div className={style.stack__items}>
					<Combobox value={selected} onChange={onChange}>
						<div className={style.stack__item}>
							<Combobox.Input
								className={style.stack__input}
								placeholder='выбрать'
								displayValue={(stack: ITechnology) => stack.name}
								onChange={(event) => setQuery(event.target.value)}
								name={name}
							/>
							<Combobox.Button>
								<FiChevronDown className={style.stack__btn} />
							</Combobox.Button>
						</div>
						<Combobox.Options className={style.stack__options}>
							{filteredStack.map((stack) => (
								<Combobox.Option className={style.stack__option} key={stack.id} value={stack}>
									{stack.name}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Combobox >
				</div >
			</div >
		</>
	)
}

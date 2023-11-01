import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi"
import style from './Stack.module.scss'
import { ITechnology } from './model/types'
import { useStackQuery } from './api/stackApi'

export const Stack = () => {
	const [selected, setSelected] = useState('')
	const [query, setQuery] = useState('')

	// const data = [
	// 	{
	// 		"id": 26,
	// 		"name": "Не выбрано"
	// 	},
	// 	{
	// 		"id": 25,
	// 		"name": "SPARK"
	// 	},
	// 	{
	// 		"id": 24,
	// 		"name": "AngularJS"
	// 	},
	// 	{
	// 		"id": 23,
	// 		"name": "NoSQL"
	// 	},
	// 	{
	// 		"id": 22,
	// 		"name": "Maven"
	// 	},
	// 	{
	// 		"id": 21,
	// 		"name": "Kubernetes"
	// 	},
	// 	{
	// 		"id": 20,
	// 		"name": "Gradle"
	// 	},
	// 	{
	// 		"id": 19,
	// 		"name": "Git"
	// 	},
	// 	{
	// 		"id": 18,
	// 		"name": "Docker"
	// 	},
	// 	{
	// 		"id": 17,
	// 		"name": ".NET"
	// 	},
	// 	{
	// 		"id": 16,
	// 		"name": "Swift"
	// 	},
	// 	{
	// 		"id": 15,
	// 		"name": "SQL"
	// 	},
	// 	{
	// 		"id": 14,
	// 		"name": "Spring"
	// 	},
	// 	{
	// 		"id": 13,
	// 		"name": "Rust"
	// 	},
	// 	{
	// 		"id": 12,
	// 		"name": "Ruby"
	// 	},
	// 	{
	// 		"id": 11,
	// 		"name": "React"
	// 	},
	// 	{
	// 		"id": 10,
	// 		"name": "Python"
	// 	},
	// 	{
	// 		"id": 9,
	// 		"name": "PHP"
	// 	},
	// 	{
	// 		"id": 8,
	// 		"name": "Kotlin"
	// 	},
	// 	{
	// 		"id": 7,
	// 		"name": "Java"
	// 	},
	// 	{
	// 		"id": 6,
	// 		"name": "Go"
	// 	},
	// 	{
	// 		"id": 5,
	// 		"name": "C++"
	// 	},
	// 	{
	// 		"id": 4,
	// 		"name": "C#"
	// 	},
	// 	{
	// 		"id": 3,
	// 		"name": "C"
	// 	},
	// 	{
	// 		"id": 2,
	// 		"name": ".NET Core"
	// 	},
	// 	{
	// 		"id": 1,
	// 		"name": "JavaScript"
	// 	}
	// ]

	const { data } = useStackQuery()

	const filteredStack =
		data
			? query === ''
				? data.items
				: data.items.filter((stack) =>
					stack.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
				)
			: [];

	return (
		<>
			<div className={style.stack}>
				<h3 className={style.stack__title}>Стэк</h3>
				<div className={style.stack__items}>
					<Combobox value={selected} onChange={setSelected}>
						<div className={style.stack__item}>
							<Combobox.Input
								className={style.stack__input}
								placeholder='выбрать'
								displayValue={(stack: ITechnology) => stack.name}
								onChange={(event) => setQuery(event.target.value)}
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

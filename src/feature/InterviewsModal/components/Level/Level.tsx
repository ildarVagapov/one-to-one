import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi"
import style from './Level.module.scss'
import { ILevel } from 'feature/InterviewsModal/model/types'

interface LevelProps {
	value?: ILevel[],
	name: string,
	onChange: (value: ILevel[]) => void
}

export const Level = (props: LevelProps) => {
	const { value, onChange, name } = props
	const [query, setQuery] = useState('')

	const data = [
		{ id: 1, level: "Junior" },
		{ id: 2, level: "Middle" },
		{ id: 3, level: "Senior" }
	]

	const filteredlevel =
		data
			? query === ''
				? data
				: data.filter((level) =>
					level.level
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
				)
			: [];

	return (
		<>
			<div className={style.level}>
				<h3 className={style.level__title}>Уровень</h3>
				<div className={style.level__items}>
					<Combobox value={value || ''} onChange={onChange}>
						<div className={style.level__item}>
							<Combobox.Input
								className={style.level__input}
								placeholder='выбрать'
								displayValue={(level: ILevel) => level.level}
								onChange={(event) => setQuery(event.target.value)}
								name={name}
							/>
							<Combobox.Button>
								<FiChevronDown className={style.level__btn} />
							</Combobox.Button>
						</div>
						<Combobox.Options className={style.level__options}>
							{filteredlevel.map((level, i) => (
								<Combobox.Option
									className={style.level__option}
									key={i}
									value={level}
								>
									{level.level}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Combobox >
				</div >
			</div >
		</>
	)
}

import { Disclosure } from "@headlessui/react"
import { useSelector } from "react-redux"
import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import { userId } from "shared/api/userIdSlice"
import { FiChevronUp } from "react-icons/fi"
import style from './InterviewsWindowPage.module.scss'


export const InterviewsWindowPage = () => {
	const { data } = useGetMyQuestionTabInfoQuery(useSelector(userId))

	return (
		<section className={style.interview}>
			<div>
				поиск вопросов
			</div>
			<div>
				<header>header</header>
				<div className={style.items}>
					{data?.items.map((item, i) => (
						<>
							<Disclosure >
								<div className={style.accordeon}>
									<Disclosure.Button >
										{item.technology?.name}
										{item.question}
										<FiChevronUp />
									</Disclosure.Button>
									<Disclosure.Panel >
										{item.answer}
									</Disclosure.Panel>
								</div>
							</Disclosure>
						</>
					))}
				</div>
			</div>
		</section>
	)
}
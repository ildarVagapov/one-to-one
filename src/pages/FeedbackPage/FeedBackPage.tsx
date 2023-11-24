import style from './FeedBack.module.scss'
import { useState } from "react"
import { HeaderFeedback } from './components/HeaderFeedback/HeaderFeedback'

export const FeedbackPage = () => {
	const [open, setOpen] = useState(!false)

	return (
		<div className={style.feedback}>
			<HeaderFeedback />
			<div className={style.items}>
				<div className={style.item__block}>
					<div onClick={() => setOpen(!open)} className={style.item__open}>
						<div className={style.item__openElem}>
							<div className={style.item__stack}>Python</div>
							<p className={style.item__title}>Что по вашему значит «Поддерживать и обновлять программу»?</p>
						</div>
						<div className={style.item__rating}>
							*****
						</div>
						<div className={style.item__arrow}>
							<img src="/public/assets/открыть.svg" alt="arrow" />
						</div>
					</div>
					{open &&
						<div className={style.item__textElem}>
							<p className={style.item__text}>Поддержка программы – это процесс регулярного обновления программы для удовлетворения новых требований к оборудованию или программному обеспечению. Это процесс улучшения и обновления программы после ее установки.</p>
							<div className={style.item__feedback}>Ответил замечательно, вопросов нет.</div>
						</div>
					}
				</div>
			</div>
			<div className={style.footer}>
				<div className={style.footer__subtitle}>Общий комментарий к собеседованию</div>
				<p className={style.footer__feedback}>Общий комментарий к собеседованию</p>
			</div>
		</div >
	)
}
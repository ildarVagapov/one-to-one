import styles from './Accordion.module.scss'
import { useState } from 'react'
import classNames from 'classnames/bind'
import { FiChevronUp } from "react-icons/fi"

export const Accordion = () => {
	const [open, setOpen] = useState(false);
	const cx = classNames.bind(styles);


	return (
		<div className={cx('accordion')}>

			<div className={cx('accordion__content', open && 'accordion__content_open')} >
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vel quibusdam non amet quo aliquid laudantium libero explicabo sed. Perferendis libero praesentium, reprehenderit dignissimos molestiae magni blanditiis magnam eligendi sunt?
				Odio error officia placeat magni atque neque deleniti voluptate inventore totam necessitatibus! Veritatis modi distinctio quae quaerat iure quod voluptate voluptas delectus molestiae, tenetur sint quos dolore. Nesciunt, quo nostrum!
				Accusamus amet id minima laudantium debitis deleniti aperiam nulla necessitatibus non! At obcaecati debitis nemo, illum iste perferendis quisquam mollitia eos ullam laboriosam, cupiditate hic amet saepe autem ex aut.
				Adipisci possimus, excepturi corporis consequatur veniam nobis magni sapiente dicta fugiat nisi porro provident suscipit reiciendis voluptate ullam sit, accusantium voluptas totam! Dolore exercitationem magnam illum ducimus. Autem, enim laudantium?
				Odio error officia placeat magni atque neque deleniti voluptate inventore totam necessitatibus! Veritatis modi distinctio quae quaerat iure quod voluptate voluptas delectus molestiae, tenetur sint quos dolore. Nesciunt, quo nostrum!
				Accusamus amet id minima laudantium debitis deleniti aperiam nulla necessitatibus non! At obcaecati debitis nemo, illum iste perferendis quisquam mollitia eos ullam laboriosam, cupiditate hic amet saepe autem ex aut.
				Adipisci possimus, excepturi corporis consequatur veniam nobis magni sapiente dicta fugiat nisi porro provident suscipit reiciendis voluptate ullam sit, accusantium voluptas totam! Dolore exercitationem magnam illum ducimus. Autem, enim laudantium?
				Odio error officia placeat magni atque neque deleniti voluptate inventore totam necessitatibus! Veritatis modi distinctio quae quaerat iure quod voluptate voluptas delectus molestiae, tenetur sint quos dolore. Nesciunt, quo nostrum!
				Accusamus amet id minima laudantium debitis deleniti aperiam nulla necessitatibus non! At obcaecati debitis nemo, illum iste perferendis quisquam mollitia eos ullam laboriosam, cupiditate hic amet saepe autem ex aut.
				Adipisci possimus, excepturi corporis consequatur veniam nobis magni sapiente dicta fugiat nisi porro provident suscipit reiciendis voluptate ullam sit, accusantium voluptas totam! Dolore exercitationem magnam illum ducimus. Autem, enim laudantium?
				Laboriosam soluta at alias natus. Maxime, ex? Facilis veniam maxime non obcaecati soluta? Recusandae quos soluta, laudantium autem doloribus rerum distinctio quae possimus neque cum sunt ab nemo nostrum id.
			</div>
		</div >
	)
}



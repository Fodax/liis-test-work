import RaitingStar from '../raitingStar/RaitingStar';

import './raitingStars.scss';

const RaitingStars = ({className, raiting}) => {
	const stars = [];

	for (let i = 0; i < 5; i++) {
		let active = false;

		if (i < raiting) active = true;

		stars.push(<RaitingStar key={i} active={active} className='raiting-stars__item'/>);
	}

	return (
		<div className={`raiting-stars${className ? ' ' + className : ''}`}>
			{stars}
		</div>
	);
};

export default RaitingStars;
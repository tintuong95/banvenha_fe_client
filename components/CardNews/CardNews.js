import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardNews = ({image,title, description}) => {
	return (
		<div className="flex   gap-3">
			<div className="w-1/3">
				<BaseImage height={100} width={100} src={image} name={title} />
			</div>
			<div className="w-2/3 flex flex-col">
				<h3>{title}</h3>
				<h4>{description}</h4>
				<div className='flex justify-between'>
					<small>10/10/2002</small>
					<small>by Admin</small>
				</div>
			</div>
		</div>
	);
};


/**@validate props*/
CardNews.propTypes = {
	image: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
};
export default CardNews;
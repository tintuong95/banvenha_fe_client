import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardNewsSub = ({image,title, description}) => {
	return (
		<div className="flex flex-col ">
			<div className="">
				<BaseImage height={100} width={100} src={image} name={title} />
			</div>
			<div className=" flex flex-col">
				<h3 className='font-semibold'>{title}</h3>
				<h4>{description}</h4>
			</div>
			<div className=" flex justify-between">
				<small className='text-rose-600'>Read more</small>
				<small>By Admin</small>
			</div>
		</div>
	);
};


/**@validate props*/
CardNewsSub.propTypes = {
	image: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
};
export default CardNewsSub;
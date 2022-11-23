import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardNewsSub = ({image, title, description, footer}) => {
	return (
		<div className="flex flex-col  ">
			<div className="border border-green-400">
				<BaseImage height={100} width={100} src={image} name={title} />
			</div>
			<div className=" flex flex-col">
				<h3 className=" my-2">{title}</h3>
				<h4>{description}</h4>
			</div>
			{footer ? (<div className=" flex justify-between my-2">
				<small className="text-green-600 underline">Read more</small>
				<small className="text-gray-300 underline">By Admin</small>
			</div>) :null}
			
		</div>
	);
};

/**@default props*/
CardNewsSub.defaultProps = {
	footer:true,
};

/**@validate props*/
CardNewsSub.propTypes = {
	image: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
	footer: PropTypes.bool,
};
export default CardNewsSub;
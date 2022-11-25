/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardNewsThird = ({image, title, description, footer}) => {
	return (
		<div className="flex flex-col relative  border rounded-lg">
			<div className="border ">
				<BaseImage height={100} width={100} src={image} name={title} />
				<h3 className="font-semibold m-3 p-1 absolute bottom-0  text-white bg-slate-600">{title}</h3>
			</div>
			
		</div>
	);
};

/**@default props*/
CardNewsThird.defaultProps = {
	footer: true,
};

/**@validate props*/
CardNewsThird.propTypes = {
	image: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
	footer: PropTypes.bool,
};
export default CardNewsThird;

/** @format */

import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const BaseImage = ({src, name, width, height}) => {
	return (
		<Image
			className=" object-cover h-full w-full"
			src={src}
			alt={name}
			width={width}
			height={height}
		/>
	);
};

/**@validate props*/
BaseImage.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default BaseImage;

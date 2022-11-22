/** @format */

import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const BaseIcon = ({src, name, width, height}) => {
	return <Image src={src} alt={name} width={width} height={height} />;
};

/**@validate props*/
BaseIcon.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default BaseIcon;

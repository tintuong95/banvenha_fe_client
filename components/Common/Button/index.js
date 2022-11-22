/** @format */

import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = ({name, icon}) => {
	return (
		<button className=" flex item-center gap-2 bg-gray-400  px-3 text-white rounded border border-teal-500">
			{icon}
			{name}
		</button>
	);
};

/**@validate props*/
BaseButton.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default BaseButton;

/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardProductSub = ({title, description, image, price}) => {
	return (
		<div>
			<div className=" border border-dashed rounded-sm shadow border-gray-300 overflow-hidden grid grid-cols-3 ">
				<div className="col-span-1 ">
					<BaseImage height={100} width={100} src={image} name={title} />
				</div>

				<div className="col-span-2 ml-1">
					<h1 className="font-semibold p-2 pb-0">{title}</h1>
					<h3 className="text-slate-400 m-2 mt-0 text-sm">By KTS.Tu Tin</h3>
					<div className="flex justify-between items-center m-2">
						<p className="font-semibold text-lg text-teal-500">
							{price.toLocaleString('vi-VN')} <small>VND</small>
						</p>
						<button className="bg-rose-600p-1 px-3  text-white rounded-sm  ">
							Chi tiết
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**@validate props*/
CardProductSub.propTypes = {
	image: PropTypes.element,
	src: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	title: PropTypes.string,
};

export default CardProductSub;

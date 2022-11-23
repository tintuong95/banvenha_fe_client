import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';

const CardCategory = ({title, image}) => {
	return (
		<div className=" shadow-xl p-4 rounded-lg hover:shadow-2xl">
			<h1 className="text-xl text-center font-semibold text-gray-700">
				{title}
			</h1>
			<div className="flex justify-center gap-5">
				<button className="text-green-800">Mới nhất</button>
				<button className="text-green-800">Best Seller</button>
			</div>
			<div className="mt-5">
				<BaseImage
					src={image}
					width={320}
					height={180}
					name={'banner_category'}
				/>
			</div>
			<div className="text-center mt-4">
				<button className="btn-animation-reverse p-2 px-3 rounded ">
					<a
						href="#"
						className="border border-green-500 p-2 px-3 text-white shadow w-full">
						<span>Xem thêm</span>
					</a>
				</button>
			</div>
		</div>
	);
};
/**@validate props*/
CardCategory.propTypes = {
	image: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
};
export default CardCategory;
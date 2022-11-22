import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';
import CardSlider from '../Slider';


const CardProduct = ({title,description,image,price}) => {
    return (
			<div>
				<div className="   overflow-hidden shadow-lg border border-dashed">
					<CardSlider>
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
					</CardSlider>
					<h1 className="font-semibold p-2 pb-0">{title}</h1>
					<small className="text-slate-400 mx-2 text-sm">By KTS.Tu Tin</small>
					<div className="flex justify-between items-center m-2">
						<p className="font-semibold text-lg text-teal-500">
							{price.toLocaleString('vi-VN')}{' '}
							<small className="text-sm">VND</small>
						</p>
						<div className=" flex gap-1">
							<button className="bg-gray-300 p-1 px-3  text-white rounded-sm  ">
								Lưu
							</button>
							<button className="bg-rose-600 p-1 px-3  text-white rounded-sm  ">
								Chi tiết
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

/**@validate props*/
CardProduct.propTypes = {
	image: PropTypes.element,
	src: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
};

export default CardProduct;
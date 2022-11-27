import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';
import CardSlider from '../Slider';


const CardProduct = ({title,description,image,price}) => {
    return (
			<div>
				<div className=" border  bg-white border-gray-800  overflow-hidden    ">
					<CardSlider>
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
					</CardSlider>
					<h1 className="font-semibold text-slate-600 p-2 pb-0">{title}</h1>
					<small className="text-slate-400 mx-2 text-sm">By KTS.Tu Tin</small>

					<div className=" flex gap-3 p-3">
						<a className="  w-1/2  text-blue-900 text-xl  font-semibold   p-1 px-3 pl-0  rounded-sm  ">
							10.000 đ
						</a>
						<button className=" border w-1/2 border-green-500  bg-blue-500 text-white p-1 px-3   rounded-sm  ">
							Chi tiết
						</button>
					
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
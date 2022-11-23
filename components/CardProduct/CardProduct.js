import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '../Common/Image';
import CardSlider from '../Slider';


const CardProduct = ({title,description,image,price}) => {
    return (
			<div>
				<div className=" border  border-green-300  overflow-hidden  shadow-xl p-3  ">
					<CardSlider>
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
						<BaseImage height={100} width={300} src={image} name={title} />
					</CardSlider>
					<h1 className="font-semibold text-slate-600 p-2 pb-0">{title}</h1>
					<small className="text-slate-400 mx-2 text-sm">By KTS.Tu Tin</small>
					<div className="flex justify-between items-center m-2">
						<p className="font-semibold text-lg text-green-500">
							{price.toLocaleString('vi-VN')}
							<small className="text-sm">VND</small>
						</p>
						<div className=" flex gap-1">
							<button className=" border border-rose-500  p-2 px-3   rounded-sm  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#f43f5e"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
								</svg>
							</button>
							<button className="btn-animation     ">
								<a
									href="#"
									className="border border-green-500 p-2 px-3 text-green-600">
									<span>Chi tiết</span>
								</a>
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
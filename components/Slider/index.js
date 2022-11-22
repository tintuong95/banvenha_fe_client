/** @format */

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';
const CardSlider = ({children}) => {

	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Pagination]}
			className="mySwiper">
			{children.map((item, index) => (
				<SwiperSlide key={index}>{item}</SwiperSlide>
			))}

		</Swiper>
	);
};

export default CardSlider;

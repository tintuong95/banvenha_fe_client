import React from 'react'
import BaseImage from '../Common/Image';

const CardService = ({title,image,description}) => {
	return (
		<div className=" shadow p-4 text-white ">
			
			<div>
                <h1 className='text-5xl text-center font-extrabold '>{1000}</h1>
				<h1 className="text-center font-semibold my-2 ">{title}</h1>
				<h3 className="">{description}</h3>
			</div>
		</div>
	);
};

export default CardService;
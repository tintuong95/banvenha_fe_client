/** @format */

import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import PropTypes from 'prop-types';
import CardProduct from '../../components/CardProduct/CardProduct';
import { card_poster } from '../../constant/image';
import Breadcrumb from '../../components/Breadcrumb';

const Product = () => {

	const [visibleFilter, setVisibleFilter] = useState(false)

	return (
		<div className="w-4/6 m-auto mt-24">
			<div className="mb-5">
				<Breadcrumb />
			</div>
			<div className="flex justify-between gap-2 items-center">
				<div className="flex items-center gap-2" onClick={() => { setVisibleFilter(!visibleFilter) }}>
					Bộ lọc
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
				</div>
				<div className="flex  gap-3 items-center">
					<h3>Lựa chọn :</h3>
					<button className="border border-black border-dashed p-1 px-2 rounded flex items-center">
						Thời gian 
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
					</button>
					<button className="border border-black border-dashed p-1 px-2 rounded flex items-center">
						Giá 
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
					</button>
					<button className="border border-black border-dashed p-1 px-2 rounded">
						Xem nhiều nhất
					</button>
				</div>
			</div>

			{
				visibleFilter ? (<div className="grid grid-cols-5 bg-slate-200 py-5 rounded  p-3 my-4">
					<div className="col-span-1 flex items-center gap-4 ">
						<h3
							for="first_name"
							className="  text-sm font-medium text-gray-900 dark:text-white">
							First name
						</h3>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1"
							placeholder="John"
							required
						/>
					</div>
					<div className="col-span-1 flex items-center gap-4 ">
						<h3
							for="first_name"
							className="  text-sm font-medium text-gray-900 dark:text-white">
							First name
						</h3>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1"
							placeholder="John"
							required
						/>
					</div>
					<div className="col-span-1 flex items-center gap-4 ">
						<h3
							for="first_name"
							className="  text-sm font-medium text-gray-900 dark:text-white">
							First name
						</h3>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1"
							placeholder="John"
							required
						/>
					</div>
					<div className="col-span-1 flex items-center gap-4 ">
						<h3
							for="first_name"
							className="  text-sm font-medium text-gray-900 dark:text-white">
							First name
						</h3>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1"
							placeholder="John"
							required
						/>
					</div>
					<div className="col-span-1 flex items-center gap-4 ">
						<h3
							for="first_name"
							className="  text-sm font-medium text-gray-900 dark:text-white">
							First name
						</h3>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1"
							placeholder="John"
							required
						/>
					</div>
				</div>) : null
			}


			<div className="section ">
				
				<div className="col-span-4">
				
					<div className="grid grid-cols-4 my-4 gap-y-10 gap-x-5">
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
					</div>
					<div className="flex justify-center ">
						<button className="w-full text-lg flex items-center justify-center gap-3 font-semibold border mt-4 p-4 border-dashed border-blue-600 text-blue-600">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> 
							Xem thêm
						</button>
					</div>
					<div className='mt-5'>
						<h1 className='text-xl font-semibold'>Gợi ý</h1>
						<div className="grid grid-cols-4 my-4 gap-y-5 gap-x-5 bg-slate-300 p-4">
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/**@validate props*/
Product.propTypes = {
	name: PropTypes.string,
};

/**@layout */
Product.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Product;

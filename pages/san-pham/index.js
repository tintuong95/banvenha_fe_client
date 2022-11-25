/** @format */

import React from 'react';
import Layout from '../../layout/Layout';
import PropTypes from 'prop-types';
import CardProduct from '../../components/CardProduct/CardProduct';
import {card_poster} from '../../constant/image';
import CardProductSub from '../../components/CardProduct/CardProductSub';
import Breadcrumb from '../../components/Breadcrumb';

const Product = () => {
	return (
		<div className="w-4/6 m-auto mt-10">
			<div className="mb-5">
				<Breadcrumb />
			</div>
			<div className="flex justify-between gap-2 items-center">
				<div className="">Bộ lọc</div>
				<div className="flex  gap-3 items-center">
					<h3>Lua chon :</h3>
					<button className="border border-black border-dashed p-1 px-2 rounded">
						Best
					</button>
					<button className="border border-black border-dashed p-1 px-2 rounded">
						sellers
					</button>

					<button className="border border-black border-dashed p-1 px-2 rounded">
						Newest
					</button>
					<button className="border border-black border-dashed p-1 px-2 rounded">
						Best
					</button>
				</div>
			</div>
			<div className="grid grid-cols-5 bg-slate-300 py-5">
				<div className="col-span-1 flex items-center gap-4 mb-3">
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
				<div className="col-span-1 flex items-center gap-4 mb-3">
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
				<div className="col-span-1 flex items-center gap-4 mb-3">
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
				<div className="col-span-1 flex items-center gap-4 mb-3">
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
				<div className="col-span-1 flex items-center gap-4 mb-3">
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
			</div>
			<div className="section ">
				{/* <div className="col-span-1">
					<div className="filter p-5 pl-0 pb-0">
						<h3 className="font-semibold text-slate-700 mb-4">Tìm kiếm </h3>
						<div className="flex flex-col ">
							<input
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
								placeholder="John"
								required
							/>
						</div>

						<div className="flex flex-col mb-3">
							<button className="bg-green-500 p-1 rounded text-white shadow-inner mt-3">
								Tìm kiếm
							</button>
						</div>
					</div>

					<div className="filter p-5 pl-0 pb-0 pt-3">
						<hr className="mb-3" />
						<h3 className="font-semibold text-slate-700 mb-4">Bộ lọc : </h3>
						<div className="flex flex-col mb-3">
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								First name
							</label>
							<input
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
								placeholder="John"
								required
							/>
						</div>
						<div className="flex flex-col mb-3">
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								First name
							</label>
							<input
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
								placeholder="John"
								required
							/>
						</div>
						<div className="flex flex-col mb-3">
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								First name
							</label>
							<input
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
								placeholder="John"
								required
							/>
						</div>
						<div className="flex flex-col mb-3">
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								First name
							</label>
							<input
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
								placeholder="John"
								required
							/>
						</div>
						<div className="flex flex-col mb-3">
							<button className="bg-green-500 p-1 rounded text-white shadow-inner mt-3">
								Lọc
							</button>
						</div>
					</div>
				</div> */}
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
					<div className="flex justify-center">
						<button className="w-full border p-4 border-dashed border-green-600 text-green-600">
							Xem them
						</button>
					</div>
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

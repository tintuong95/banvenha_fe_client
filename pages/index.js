/** @format */

import PropTypes from 'prop-types';
import CardProduct from '../components/CardProduct/CardProduct';
import AnimateNumber from '../components/Common/Animation/AnimateNumber';
import { card_poster } from '../constant/image';
import Layout from '../layout/Layout';

const Home = () => {
	return (
		<div>

			<div className="section   bg-gradient-to-bl from-cyan-500 to-blue-800   ">
				<div className=" text-center w-4/6 m-auto py-28">
					<h1 className="text-6xl w-2/3 m-auto text-gray-700 font-extrabold text-gradient ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</h1>

					<div className="my-5 w-2/3 m-auto flex">
						<input
							className="border w-4/5  p-3 px-6 text-xl rounded-sm shadow-md focus:outline-none"
							type="text"
						/>
						<button className="text-xl w-1/5 p-3 px-6 border bg-green-500 text-white  rounded-sm shadow-md">
							Tìm kiếm
						</button>
					</div>
					<p className="text-slate-400 mt-3">Ví du : Mẫu nhà cấp 4 5x20 </p>
				</div>
			
			</div>


			<div className="section  pt-14">
				<div className="section w-4/6 m-auto ">
					<div className="flex justify-between">
						<h1 className="text-xl my-2 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
							Nhà cấp 4</h1>
						<div className="flex gap-2">
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-5 ">
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
					</div>

				</div>
			</div>
			<div className="section  pt-14">
				<div className="section w-4/6 m-auto ">
					<div className="flex justify-between">
						<h1 className="text-xl my-2 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
							Nhà cấp 4</h1>
						<div className="flex gap-2">
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-5 ">
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
					</div>
				</div>
			</div>
			<div className="section  pt-14">
				<div className="section w-4/6 m-auto ">
					<div className="flex justify-between">
						<h1 className="text-xl my-2 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
							Nhà cấp 4</h1>
						<div className="flex gap-2">
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-5 ">
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
					</div>
				</div>
			</div>
			<div className="section  pt-14">
				<div className="section w-4/6 m-auto ">
					<div className="flex justify-between">
						<h1 className="text-xl my-2 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#321919" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
							Nhà cấp 4</h1>
						<div className="flex gap-2">
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="23"
									height="23"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#393939"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-5 ">
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
						<CardProduct
							title={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
							}
							price={100000}
							image={card_poster}
						/>
					</div>
				</div>
			</div>

			<div className="section p-20 my-20  bg-slate-200">
				<div className='w-4/6 m-auto flex justify-center gap-20'>
					<div className="">
						<h1 className="text-5xl font-extrabold text-blue-500">
							<AnimateNumber>4000</AnimateNumber>
						</h1>
						<h3 className="text-xl  text-slate-400">Lorem ipsum dolor sit ipsum dolor sit </h3>
					</div>
					<div className="">
						<h1 className="text-5xl font-extrabold text-blue-500">
							<AnimateNumber>4000</AnimateNumber>
						</h1>
						<h3 className="text-xl  text-slate-400">Lorem ipsum dolor sit ipsum dolor sit </h3>
					</div>
					<div className="">
						<h1 className="text-5xl font-extrabold text-blue-500">
							<AnimateNumber>4000</AnimateNumber>
						</h1>
						<h3 className="text-xl  text-slate-400">Lorem ipsum dolor sit ipsum dolor sit</h3>
					</div>
					<div className="">
						<h1 className="text-5xl font-extrabold text-blue-500">
							<AnimateNumber>4000</AnimateNumber>
						</h1>
						<h3 className="text-xl  text-slate-400">Lorem ipsum dolor sit ipsum dolor sit</h3>
					</div>
				</div>

			</div>
		</div>
	);
};

/**@validate props*/
Home.propTypes = {
	name: PropTypes.string,
};

/**@layout */
Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Home;

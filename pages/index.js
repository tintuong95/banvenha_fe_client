/** @format */

import PropTypes from 'prop-types';
import CardCategory from '../components/CardCategory/CardCategory';
import CardNews from '../components/CardNews/CardNews';
import CardNewsSub from '../components/CardNews/CardNewsSub';
import CardService from '../components/CardOther/CardService';
import CardProduct from '../components/CardProduct/CardProduct';
import CardNewsThird from '../components/CardProduct/CardProductThird';
import BaseImage from '../components/Common/Image';
import Navbar from '../components/Navbar';
import {
	BANNER,
	BANNER_CATEGORY_ONE,
	BANNER_CATEGORY_THREE,
	BANNER_CATEGORY_TWO,
	card_poster,
} from '../constant/image';
import Layout from '../layout/Layout';

const Home = () => {
	return (
		<div>

			<div className="section w-4/6 m-auto my-28 grid grid-cols-2">
				<div className="col-span-1 flex flex-col gap-4">
					<h1 className="text-4xl text-gray-300 font-bold ">
						Tìm kiếm sản phẩm
					</h1>
					<p>Ví du : Mẫu nhà cấp 4 5x20 </p>
					<div className="flex">
						<input
							className="border w-2/3 p-3 px-6 text-xl rounded-sm shadow-md focus:outline-none"
							type="text"
						/>
						<button className="text-xl p-3 px-6 border bg-green-500 text-white  rounded-sm shadow-md">
							Tìm kiếm
						</button>
					</div>
				</div>
				<div className="col-span-1">
					<BaseImage src={BANNER} height={300} width={600} name={'Banner '} />
				</div>
			</div>
			<div className='section bg-slate-50 p-24'>
				<div className="section w-4/6 m-auto ">
					<div className="grid grid-cols-3 ">
						<div className="w-3/4 m-auto">
							<CardCategory title={'Nhà cấp 4 '} image={BANNER_CATEGORY_ONE} />
						</div>
						<div className="w-3/4 m-auto">
							<CardCategory
								title={'Nhà nhà phố '}
								image={BANNER_CATEGORY_TWO}
							/>
						</div>
						<div className="w-3/4 m-auto">
							<CardCategory title={'Biệt thự '} image={BANNER_CATEGORY_THREE} />
						</div>
					</div>
				</div>
			</div>
			<div className="section w-4/6 m-auto ">
				<div className="grid grid-cols-2 py-20">
					<div className="col-span-1 flex flex-col justify-center items-center">
						<h1 className="text-4xl text-gray-300 font-bold  ">
							Top mẫu nhà yêu thích nhất
						</h1>
						<p>Ví du : Mẫu nhà cấp 4 5x20 </p>
					</div>
					<div className="col-span-1 ">
						<div className='grid grid-cols-2 gap-4 p-4'>
							<CardNewsThird
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardNewsThird
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardNewsThird
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
							<CardNewsThird
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={card_poster}
							/>
						</div>
						<div className='text-center'>
							<button className="btn-animation-reverse p-2 px-3 rounded mt-5 ">
								<a
									href="#"
									className="border border-green-500 p-2 px-3 text-white shadow w-full">
									<span>Xem thêm</span>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='section bg-slate-700 '>
				<div className=" w-4/6 m-auto py-20 relative">
					<h1 className='text-6xl font-extrabold text-gray-600 text-center absolute bottom-12 right-1.5'>BANVENHA.COM</h1>
					<div className="grid grid-cols-3 gap-20 px-10 ">
						
						<div className='glass-effect h-64 flex flex-col items-center  p-4'>
							<svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
							<h1 className='text-white text-xl my-3'>Title content</h1>
							<h3 className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos adipisci similique laudantium repellendus debitis numqua</h3>
						</div>
						<div className='glass-effect h-64 flex flex-col items-center  p-4'>
							<svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
							<h1 className='text-white text-xl my-3'>Title content</h1>
							<h3 className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos adipisci similique laudantium repellendus debitis numqua</h3>
						</div>
						<div className='glass-effect h-64 flex flex-col items-center  p-4'>
							<svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
							<h1 className='text-white text-xl my-3'>Title content</h1>
							<h3 className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos adipisci similique laudantium repellendus debitis numqua</h3>
						</div>
						
					</div>
				</div>
			</div>

			<div className="section w-4/6 m-auto ">
				<div className="grid grid-cols-5 ">

					<div className="col-span-3 p-10">
						<div className='grid grid-cols-2 gap-8 p-4'>
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
					<div className="col-span-2 flex flex-col justify-center items-center">
						<h1 className="text-4xl text-gray-300 font-bold  ">
							Top mẫu nhà yêu thích nhất
						</h1>
						<p>Ví du : Mẫu nhà cấp 4 5x20 </p>
						<div className='text-center'>
							<button className="btn-animation-reverse p-2 px-3 rounded mt-5 ">
								<a
									href="#"
									className="border border-green-500 p-2 px-3 text-white shadow w-full">
									<span>Xem thêm</span>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>



			{/* <h1 className="text-4xl text-gray-300 font-bold relative text-end p-10 pr-0 pb-5 ">
				SERVICE OF COMPANY
			</h1> */}
			<div className="section  relative bg-home  " style={{ height: 600 }}>
				<div className="bg-home-overlay"></div>
				<div className="absolute flex justify-center items-center h-full w-full">
					<div className="flex justify-center gap-10">
						<CardService
							image={card_poster}
							description={'description server of company'}
							title={'title service company'}
						/>
						<CardService
							image={card_poster}
							description={'description server of company'}
							title={'title service company'}
						/>
						<CardService
							image={card_poster}
							description={'description server of company'}
							title={'title service company'}
						/>
					</div>
				</div>
			</div>

			<div className="section mb-20 bg-gray-100 p-4">
				<div className="flex justify-center gap-4">
					<h1 className="text-4xl font-bold text-gray-300 ">CC1 GROUP</h1>
					<h1 className="text-4xl font-bold text-gray-300 ">NEWTECONS</h1>
					<h1 className="text-4xl font-bold text-gray-300 ">VIET NGUYEN </h1>
					<h1 className="text-4xl font-bold text-gray-300 ">HAI THACH </h1>
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

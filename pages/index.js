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
			{/* <div className="bg-slate-200 ">
				<div className="w-4/6 m-auto p-2">
					<Navbar />
				</div>
			</div> */}
			<div className="w-4/6 m-auto mb-40">
				<div className="section my-28 grid grid-cols-2">
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
				<div className="section mb-40">
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
				<div className="section  mb-40">
					<div className="grid grid-cols-2 ">
						<div className="col-span-1 flex flex-col justify-center items-center">
							<h1 className="text-4xl text-gray-300 font-bold  ">
								Top mẫu nhà yêu thích nhất
							</h1>
							<p>Ví du : Mẫu nhà cấp 4 5x20 </p>
						</div>
						<div className="col-span-1 grid grid-cols-2 gap-4 p-4">
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
					</div>
				</div>
				<div className="section mb-20">
					<h1 className="text-xl  font-semibold text-gray-700">Tin tức</h1>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-5 my-4 gap-4">
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
					</div>
				</div>
				<div className="section mb-20">
					<h1 className="text-xl  font-semibold text-gray-700">Tin tức</h1>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-5 my-4 gap-4">
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
					</div>
				</div>

				<div className="section mb-20">
					<h1 className="text-xl  font-semibold text-gray-700">Tin tức</h1>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-5 my-4 gap-4">
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
					</div>
				</div>

				<div className="section mb-20">
					<h1 className="text-xl  font-semibold text-gray-700">Tin tức</h1>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-5 my-4 gap-4">
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={card_poster}
						/>
					</div>
				</div>
				<h1 className="text-4xl text-gray-300 font-bold relative text-end p-10 pr-0 pb-5 ">
					SERVICE OF COMPANY
				</h1>
				<div className="section  relative bg-home h-96 mb-24 mt-5">
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
				<div className="section mb-20">
					<h1 className="text-xl  font-semibold text-gray-700">Tin tức</h1>
					<div className="grid grid-cols-5 gap-x-5 gap-y-3 mt-5">
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
						<CardNewsSub
							description={
								'description description description description description description'
							}
							title={'Title card news 1'}
							image={card_poster}
						/>
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

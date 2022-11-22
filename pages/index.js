/** @format */

import PropTypes from 'prop-types';
import CardNews from '../components/CardNews/CardNews';
import CardNewsSub from '../components/CardNews/CardNewsSub';
import CardProduct from '../components/CardProduct/CardProduct';
import Navbar from '../components/Navbar';
import {CARD_DEFAULT} from '../constant/image';
import Layout from '../layout/Layout';

const Home = () => {
	return (
		<div>
			{/* <div className="bg-slate-200 ">
				<div className="w-4/6 m-auto p-2">
					<Navbar />
				</div>
			</div> */}
			<div className="w-4/6 m-auto mt-10">
				<div className='section'>
					<div>
						<h1 className='text-4xl text-slate-600 font-bold'>TÌM KIẾM SẢN PHẨM</h1>
						<input className='border' type="text" />
					</div>
				</div>
				<div className="section">
					<label className="text-xl font-semibold">NHÀ CẤP 4</label>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-4 my-4 gap-y-7 gap-x-5">
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						
					</div>
				</div>
				<div className="section">
					<label className="text-xl font-semibold">NHÀ CẤP 4</label>
					<div className="grid  md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-4 my-4 gap-y-7 gap-x-5">
						
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProduct
							title={'[House Level Four] Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
					</div>
				</div>
				<div className="section my-10 bg-red-100 p-4">

					<div className="flex justify-center gap-4">
						<h1 className="text-4xl font-bold text-white ">CC1 GROUP</h1>
						<h1 className="text-4xl font-bold text-white ">NEWTECONS</h1>
						<h1 className="text-4xl font-bold text-white ">VIET NGUYEN </h1>
						<h1 className="text-4xl font-bold text-white ">HAI THACH </h1>
					</div>
				</div>
				<div className="section">
					<label>Tin Tuc</label>
					<div className="grid grid-cols-6 gap-x-5 gap-y-3">
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNewsSub
							description={
								'description description  description description  description description description description description description 1'
							}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
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

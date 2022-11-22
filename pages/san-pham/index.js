import React from 'react'
import Layout from '../../layout/Layout';
import PropTypes from 'prop-types';
import CardProduct from '../../components/CardProduct/CardProduct';
import { CARD_DEFAULT } from '../../constant/image';
import CardProductSub from '../../components/CardProduct/CardProductSub';

const Product = () => {
    return (
			<div className="w-4/6 m-auto mt-10">
				<div className="flex justify-end gap-2">
					<h3>Lua chon :</h3>
					<button className="bg-slate-400 p-1 px-2 rounded">Best</button>
					<button className="bg-slate-400 p-1 px-2 rounded">sellers</button>

					<button className="bg-slate-400 p-1 px-2 rounded">Newest</button>
					<button className="bg-slate-400 p-1 px-2 rounded">Best</button>
				</div>
				<div className="section grid grid-cols-5">
					<div className="col-span-1">
						<div className="filter p-3">
							<h3>BO LOC</h3>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
							<div className="flex flex-col">
								<label htmlFor="">Dien tich</label>
								<input type="text" className="border p-1" />
							</div>
						</div>
					</div>
					<div className="col-span-4">
						<div className="grid grid-cols-4 my-4 gap-y-10 gap-x-5">
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
							<CardProduct
								title={'Home design 1 10x10 1 floor area 90m2'}
								price={3000}
								description={'description description'}
								image={CARD_DEFAULT}
							/>
						</div>
						<div className="flex justify-center">
							<button>Xem them</button>
						</div>
					</div>
				</div>

				<div>
					<h3>GOI Y</h3>
					<div className="grid grid-cols-4 gap-5">
						<CardProductSub
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProductSub
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProductSub
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
						<CardProductSub
							title={'Home design 1 10x10 1 floor area 90m2'}
							price={3000}
							description={'description description'}
							image={CARD_DEFAULT}
						/>
					</div>
				</div>
			</div>
		);
}


/**@validate props*/
Product.propTypes = {
	name: PropTypes.string,
};

/**@layout */
Product.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};


export default Product;
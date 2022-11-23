/** @format */

import React from 'react';
import Layout from '../../layout/Layout';
import PropTypes from 'prop-types';
import CardNews from '../../components/CardNews/CardNews';
import {card_poster} from '../../constant/image';
import CardNewsSub from '../../components/CardNews/CardNewsSub';
import CardNewsThird from '../../components/CardNews/CardNewsThird';

const News = () => {
	return (
		<div className="w-4/6 m-auto grid grid-cols-4 ">
			<div className="section mb-10 mt-10 col-span-3 grid grid-cols-2 gap-5">
			
					<CardNewsThird
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
					/>
				
			
					<CardNewsThird
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
					/>
			
			</div>
			<div className="section mb-10 col-span-3">
				<label className="text-xl   text-gray-700">Mới nhất</label>
				<div className="grid grid-cols-4 gap-x-5 gap-y-3 mt-5">
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
					<CardNewsSub
						title={
							'Title card news Title card news Title card news Title card news Title card news Title card '
						}
						image={card_poster}
						footer={false}
					/>
				</div>
			</div>

			<div className="section mb-20  col-span-3 grid grid-cols-2 gap-5">
				<div className="col-span-1">
					<label className="text-xl   text-gray-700">Mới nhất</label>

					<div className="card-child flex flex-col gap-5 p-5 pl-0">
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<CardNews
							title={
								'Title card news Title card news Title card news Title card news Title card news Title card '
							}
							image={card_poster}
						/>
						<button>Xem them</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**@validate props*/
News.propTypes = {
	name: PropTypes.string,
};

/**@layout */
News.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default News;

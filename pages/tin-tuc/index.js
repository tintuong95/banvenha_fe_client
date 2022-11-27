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
		<div className="w-4/6 m-auto ">
			<div className="section mb-10 mt-10 grid grid-cols-2 gap-5">
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
			<div className="section mb-10 ">
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
				<div className="grid grid-cols-4 auto-rows-max gap-5 mt-5">
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					
				</div>
			</div>
			<div className="section mb-10 ">
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
				<div className="grid grid-cols-4 auto-rows-max gap-5 mt-5">
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>

				</div>
			</div>
			<div className="section mb-10 ">
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
				<div className="grid grid-cols-4 auto-rows-max gap-5 mt-5">
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>
					<CardNewsSub
						title={'Title card news Title card news Title card news  '}
						description={'Title card news Title card news Title card news Title card news Title card news Title card news  '}
						image={card_poster}
					/>

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

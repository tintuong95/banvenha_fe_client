import React from 'react'
import Layout from '../../layout/Layout';
import PropTypes from 'prop-types';
import CardNews from '../../components/CardNews/CardNews';
import { CARD_DEFAULT } from '../../constant/image';

const News = () => {
    return (
			<div className="w-4/6 m-auto grid grid-cols-4">
				<div className="col-span-2">
					<div className=" flex flex-col gap-3">
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
						<CardNews
							description={'description description 1'}
							title={'Title card news 1'}
							image={CARD_DEFAULT}
						/>
					</div>
					<div className="flex justify-center mt-5">
						<button className="bg-rose-600 p-1 px-2">xem them</button>
					</div>
				</div>
				<div className="col-span-1">a</div>
			</div>
		);
}



/**@validate props*/
News.propTypes = {
	name: PropTypes.string,
};

/**@layout */
News.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default News;
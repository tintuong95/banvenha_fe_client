/** @format */

import React from 'react';
import {ICON_DEFAULT, IMAGE_LOGO} from '../../constant/image';
import {LOGO_NAME} from '../../constant/title';
import BaseButton from '../Common/Button';
import BaseIcon from '../Common/Icon';
import BaseImage from '../Common/Image';

const Header = () => {
	return (
		<div className="border-b shadow-lg">
			<div className="w-4/6 m-auto flex justify-between">
				<div className="flex items-center">
					<BaseImage
						src={IMAGE_LOGO}
						width={180}
						height={30}
						name={LOGO_NAME}
					/>
				</div>
				<div className="flex items-center gap-2 my-3">
					<button className="p-1 px-3   font-semibold">
						Sản phẩm
					</button>
					<button className="p-1 px-3   font-semibold">
						Sản phẩm
					</button>
					<button  className="p-1 px-3   font-semibold">Sản phẩm </button>
					<button  className="p-1 px-3   font-semibold">Sản phẩm </button>
					<button  className="p-1 px-3   font-semibold">Sản phẩm </button>
				</div>
			</div>
		</div>
	);
};

export default Header;

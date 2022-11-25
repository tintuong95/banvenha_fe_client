/** @format */
import Link from 'next/link';
import React from 'react';


const Header = () => {
	return (
		<div className="border-b bg-green-600 shadow-lg">
			<div className="w-4/6 m-auto flex justify-between">
				<div className="flex items-center">
					{/* <BaseImage
						src={IMAGE_LOGO}
						width={180}
						height={30}
						name={LOGO_NAME}
					/> */}
					<Link href={'/'}>
						<h1 className="font-extrabold text-2xl text-white">BANVENHA.COM</h1>
					</Link>
				</div>
				<div className="flex items-center gap-2 my-3">
					<Link
						href={'/san-pham'}
						className="p-1 px-3  btn-head-hover cursor-pointer text-white  ">
						Sản phẩm
					</Link>
					<Link
						href={'/tin-tuc'}
						className="p-1 px-3   btn-head-hover cursor-pointer text-white">
						Tin tức
					</Link>

					<a className="p-1 px-3  btn-head-hover cursor-pointer text-white">
						<span>Yêu thích</span>
					</a>
					<a className="p-1 px-3  btn-head-hover cursor-pointer text-white ">
						{' '}
						Liên hệ{' '}
					</a>
					<a className="p-1 px-3   btn-head-hover cursor-pointer text-white">
						Tư vấn{' '}
					</a>
					<a className="p-1 px-3 cursor-pointer border shadow-inner bg-white hover:bg-green-600 transition-all text-green-800 rounded flex items-center gap-2 ">
						Đối tác
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#393939"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;

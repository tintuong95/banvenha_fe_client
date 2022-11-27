/** @format */
import Link from 'next/link';
import React from 'react';


const Header = () => {
	return (
		<div className="border-b   shadow-lg    w-full bg-white  ">
			<div className='relative '>
				<div className="w-4/6 m-auto flex justify-between">
					<div className="flex items-center">

						<Link href={'/'}>
							<h1 className="font-extrabold text-blue-900 text-2xl ">banvenha.com</h1>
						</Link>
					</div>
					<div className="flex items-center gap-2 my-3">
						<div className='btn-navbar'>
							<Link
								href={'/san-pham'}
								className="p-1 px-3  btn-head-hover cursor-pointer   ">
								Sản phẩm
							</Link>
							
						</div>
						<div className='btn-navbar'>
							<Link
								href={'/san-pham'}
								className="p-1 px-3  btn-head-hover cursor-pointer   ">
								Tin Tức
							</Link>
							
						</div>

						<a className="p-1 px-3  btn-head-hover cursor-pointer ">
							<span>Yêu thích</span>
						</a>
						<a className="p-1 px-3  btn-head-hover cursor-pointer  ">

							Liên hệ
						</a>
						<a className="p-1 px-3   btn-head-hover cursor-pointer ">
							Tư vấn
						</a>
						<a className="p-1 px-3 cursor-pointer text-white border shadow-inner bg-blue-500 hover:bg-blue-600 transition-all  rounded flex items-center gap-2 ">
							Đối tác
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#ffff"
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
		</div>
	);
};

export default Header;

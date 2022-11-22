/** @format */

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
	return (
		<div>
			<Header />
			<main >{children}</main>
			<Footer />
		</div>
	);
};

/**@validate props*/
Layout.propTypes = {
	name: PropTypes.element,
};

export default Layout;

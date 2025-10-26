import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AppLayout({ children }) {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#E5E2FF] to-white flex flex-col">
			<Navbar />
			<main className="pt-16 flex-1">{children}</main>
			<Footer />
		</div>
	);
}

export default AppLayout;



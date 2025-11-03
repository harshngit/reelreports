import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AppLayout({ children }) {
	return (
		<div className="min-h-screen bg-gradient-to-b flex flex-col" style={{
			backgroundImage: 'linear-gradient(180deg, #D4E4FF 0%, #F3E8FF 50%, #FFFFFF 100%)'
		}}>
			<Navbar />
			<main className="pt-[6rem] flex-1">{children}</main>
			<Footer />
		</div>
	);
}

export default AppLayout;



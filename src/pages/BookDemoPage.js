import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import BookDemo from '../components/demo/BookDemo';

const BookDemoPage = () => {
	return (
		<AppLayout>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<BookDemo />
			</motion.div>
		</AppLayout>
	);
};

export default BookDemoPage;


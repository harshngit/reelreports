import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import GetStarted from '../components/onboarding/GetStarted';

const GetStartedPage = () => {
	return (
		<AppLayout>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<GetStarted />
			</motion.div>
		</AppLayout>
	);
};

export default GetStartedPage;


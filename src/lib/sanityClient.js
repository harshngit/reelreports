import {createClient} from '@sanity/client';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET;
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2025-01-01';
const token = process.env.REACT_APP_SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
	throw new Error('Missing Sanity project configuration. Ensure projectId and dataset env vars are set.');
}

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	token,
});

const ensureWriteToken = () => {
	if (!token) {
		throw new Error('Sanity token is required to write data. Set REACT_APP_SANITY_WRITE_TOKEN.');
	}
};

export const submitContactMessage = async (formData) => {
	ensureWriteToken();

	return client.create({
		_type: 'contactMessage',
		name: formData.name.trim(),
		email: formData.email.trim(),
		phone: formData.phone?.trim() || '',
		company: formData.company?.trim() || '',
		subject: formData.subject,
		message: formData.message,
		submittedAt: new Date().toISOString(),
	});
};

export const submitBookDemoRequest = async (formData) => {
	ensureWriteToken();

	return client.create({
		_type: 'bookDemoRequest',
		name: formData.name.trim(),
		email: formData.email.trim(),
		phone: formData.phone?.trim() || '',
		company: formData.company?.trim() || '',
		teamSize: formData.teamSize || '',
		message: formData.message || '',
		submittedAt: new Date().toISOString(),
	});
};

export default client;


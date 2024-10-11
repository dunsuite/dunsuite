// merge classes with clsx
export function clsx(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}

// converts 2024-09-15 14:52:44.366Z to 9 Sep, 12:30 PM
export function formatDate(timestamp: string): string {
	const date = new Date(timestamp);
	return date.toLocaleString('en-US', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
}

// converts 2024-09-15 14:52:44.366Z to 9 Sep, 2024
export function convertTimestampToDateString(timestamp: string): string {
	const date = new Date(timestamp);
	return `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}, ${date.getFullYear()}`;
}

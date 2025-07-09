export const SITE_TITLE = 'Dun';
export const SITE_SUBTITLE = 'The Simple and Focused Business Tool Suite';
export const SITE_DESCRIPTION =
	'Simplify your workflow with Dun. Our focused tools help you work smarter, not harder. No distractions, no clutter. Just get things done efficiently.';

export const SITE_OG_IMAGE = '/ogimage.png';
export const SITE_URL = 'https://dun.software';

export interface MenuItem {
	label: string;
	url: string;
}

// Menu items
export const menuItems: MenuItem[] = [
	{
		label: 'Tools',
		url: '/tools'
	},
	{
		label: 'Story',
		url: '/story'
	}
];

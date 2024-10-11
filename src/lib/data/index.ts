export const SITE_TITLE = 'Dun';
export const SITE_SUBTITLE = 'The Simple, Open-Source Business Tool Suite';
export const SITE_DESCRIPTION =
	'Simplify your workflow with Dun. Our focused, open-source tools help you work smarter, not harder. No distractions, no clutter. Just get things done efficiently.';

export const SITE_OG_IMAGE = '/ogimage.png';
export const SITE_URL = 'https://dun.software';

export interface MenuItem {
	label: string;
	url: string;
}

// Menu items
export const menuItems: MenuItem[] = [
	{
		label: 'About',
		url: '/about'
	},
	{
		label: 'Blog',
		url: '/blog'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/dunsuite'
	}
];

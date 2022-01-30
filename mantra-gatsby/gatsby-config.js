module.exports = {
	siteMetadata: {
		title: `mantra percussion`,
		description: `NYC-based percussion organization committed to honoring the past and expanding the future of percussion music`,
		author: `Mark Sauer-Utley`,
		navLinks: [
			{
				id: 1,
				display: `home`,
				href: `/`,
				partial: false,
				isHash: false,
			},
			{
				id: 2,
				display: `about`,
				href: `/about`,
				partial: true,
				isHash: false,
			},
			{
				id: 3,
				display: `media`,
				href: `/media`,
				partial: false,
				isHash: false,
			},
			{
				id: 4,
				display: `schedule`,
				href: `/schedule`,
				partial: false,
				isHash: false,
			},
			{
				id: 5,
				display: `press`,
				href: `/press`,
				partial: false,
				isHash: false,
			},
			{
				id: 6,
				display: `programs`,
				href: `/programs`,
				partial: false,
				isHash: false,
			},
			{
				id: 7,
				display: `contact`,
				href: `/contact`,
				partial: false,
				isHash: false,
			},
			{
				id: 8,
				display: `support`,
				href: `/support`,
				partial: false,
				isHash: false,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaultQuality: 100,
				stripMetadata: true,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/mantra-icon.png`, // This path is relative to the root of the site.
			},
		},
	],
}

/* eslint-disable */
import HomePage from '@/pages/HomePage'
import Pageproject from '@/pages/Pageproject'
import Hackathon from '@/pages/Hackathon'
import Hyperplanning from '@/pages/Hyperplanning'
import Projectlist from '@/pages/Projectlist'
import About from '@/pages/About'

export default [
	
	{ 
		path: '/',
		name: 'HomePage',
		component: HomePage,
		meta: { transition: 'slide-left' },
	},


	{ 
		path: '/kult', 
		name: 'kult',
		component: Hackathon,
		meta: { transition: 'slide-left' },
	},

	{ 
		path: '/hyperplanning', 
		name: 'hyperplanning',
		component: Hyperplanning,
		meta: { transition: 'slide-left' },
	},

	{ 
		path: '/projets', 
		name: 'projets',
		component: Projectlist,
		meta: { transition: 'slide-left' },
	},

	{ 
		path: '/about', 
		name: 'about',
		component: About,
		meta: { transition: 'slide-left' },
	},

	
]
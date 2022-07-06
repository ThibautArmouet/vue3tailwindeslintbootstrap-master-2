/* eslint-disable */
import HomePage from '@/pages/HomePage'
import Pageproject from '@/pages/Pageproject'
import Hackathon from '@/pages/Hackathon'
import Hyperplanning from '@/pages/Hyperplanning'
import Projectlist from '@/pages/Projectlist'
import About from '@/pages/About'
import Gridphoto from '@/pages/Gridphoto'
import Waikiki from '@/pages/Waikiki'
import Pegase from '@/pages/Pegase'

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

	{ 
	path: '/phototheque', 
	name: 'phototheque',
	component: Gridphoto,
	meta: { transition: 'slide-left' },
},

{ 
	path: '/waikiki', 
	name: 'waikiki',
	component: Waikiki,
	meta: { transition: 'slide-left' },
},

{ 
	path: '/pegase', 
	name: 'pegase',
	component: Pegase,
	meta: { transition: 'slide-left' },
},


	
]
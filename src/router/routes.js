/* eslint-disable */
import HomePage from '@/pages/HomePage'
import Pageproject from '@/pages/Pageproject'

export default [
	
	{ 
		path: '/',
		name: 'HomePage',
		component: HomePage,
		meta: { transition: 'slide-left' },
	},

	{ 
		path: '/projet', 
		name: 'projet',
		component: Pageproject,
		meta: { transition: 'slide-left' },
	}
	
]
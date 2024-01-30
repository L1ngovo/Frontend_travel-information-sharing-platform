import { createRouter, createWebHistory } from 'vue-router'
import home_page from '../../sub_router/general/'


export const home_page_route = {
    home_page: {
        path: '/home_page',
        name: 'home_page',
        component: home_page
    }
} 
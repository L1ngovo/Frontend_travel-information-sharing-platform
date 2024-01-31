import { createRouter, createWebHistory } from 'vue-router'
import home_page from '@/components/custom/home_page.vue'


export const home_page_route = {
    home_page_index: {
        path: '/',
        name: 'home',
        component: home_page
    }
} 
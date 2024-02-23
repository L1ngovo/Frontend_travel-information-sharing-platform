import { createRouter, createWebHistory } from 'vue-router'
import home_page from '@/components/custom/home_page.vue'
import row_upon_content_detail from '@/components/custom/row_upon_content_detail.vue'

export const home_page_route = {
    home_page_index: {
        path: '/',
        name: 'home',
        component: home_page
    },
    content_details: {
        path: '/row_upon_content_detail',
        name: 'content_details',
        component: row_upon_content_detail
    }
} 
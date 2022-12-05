import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/components/Home'
import AddStudent from '@/components/AddStudent'
import ListStudent from '@/components/ListStudent'
import EditStudent from '@/components/EditStudent'

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/addstudent', name: 'AddStudent', component: AddStudent},
        {path: '/editstudent/:id', name: 'EditStudent', component: EditStudent},
        {path: '/liststudent', name: 'ListStudent', component: ListStudent}

    ]

})

createApp(App).use(router).mount('#app')
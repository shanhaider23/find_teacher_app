import {createRouter, createWebHistory} from 'vue-router'
import CoachDeatil from './pages/coaches/CoachDetail.vue'
import CoachList from './pages/coaches/CoachesList.vue'
import CoachRegistrtion from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceiver from './pages/requests/RequestsReceived.vue'
import NotFound from'./pages/NotFound.vue'

const router =createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},
         {path:'/coaches', component:CoachList},
        {path:'/coaches/:id', component:CoachDeatil, children:[
            {path:'contact', component:ContactCoach},
        ]},
        {path:'/register', component:CoachRegistrtion, },
        {path:'/requests', component:RequestsReceiver, },
        {path:'/:notFound(.*)', component:NotFound}
    ]
})
export default router
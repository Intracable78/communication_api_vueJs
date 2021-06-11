import {createRouter, createWebHistory} from 'vue-router'
import Astraunotes from '../components/Astronautes.vue'
import Events from '../components/Events.vue'
import Ships from '../components/Ships.vue'
import AstronauteDetails from '../components/AstronauteDetails.vue'
import ShipsDetails from '../components/ShipsDetails.vue'
import EventsDetails from '../components/EventsDetails.vue'

const routes = [
    {
        path: '/', 
        name: 'Astronautes', 
        component : Astraunotes
    }, 
    {
        path: '/Ships',
        name: 'Ships',
        component: Ships
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events
    },
    {
        path: '/Astronaute/:id',
        name: 'AstronautesDetails',
        component: AstronauteDetails
        },
    
    {
        path: '/Ships/:id',
        name:'ShipsDetails',
        component: ShipsDetails,
    },
    {
        path: '/Events/:id',
        name:'EventsDetails',
        component: EventsDetails,
    }



]


const router = createRouter({
    routes,
    history : createWebHistory(),
})

export default router;
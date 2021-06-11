<template>
  <router-link to="/">Astronautes | </router-link> 
  <router-link to="/Ships">Vaisseaux | </router-link> 
  <router-link to="/Events">Evenements</router-link>
  <router-view></router-view>
</template>

<script>

import Astraunotes from  './components/Astronautes.vue'
import Ships from './components/Ships.vue'
import Events from './components/Events.vue'


export default {
  name: 'App',
  components: {
    Astraunotes,
    Ships,
    Events
  }
}
</script>

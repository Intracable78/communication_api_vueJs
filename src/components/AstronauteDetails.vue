<template>
<div id="infos">
    <img :src="infos.profile_image_thumbnail"><br>
    <h3>{{infos.name}}</h3>
    <p>Nationalité : {{infos.nationality}}</p>
    <div v-if="infos.agency != null">
   <p>Agence : {{infos.agency.name}}</p>
    </div>
    <p>Date de naissance : {{infos.date_of_birth}}</p>
    <div v-if="infos.date_of_death == null">
        <p>Date de décès :  indéfinie</p>
    </div>
    <div v-else-if="infos.date_of_death" != null>
    <p>Date de décès : {{infos.date_of_death}}</p>
    </div>
    <p>Satus : {{infos.status?.name}}</p>
    <p>Vols : indéfinie</p>
    <p>Biographie : {{infos.bio}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'AstronauteDetails',

data(){
         let infos = []
        return{
            infos,
        }
    },
    mounted(){
        axios.get('https://spacelaunchnow.me/api/3.3.0/astronaut/' + this.$route.params.id).then(reponse => this.infos = reponse.data)
    },
}
</script>

<style>

</style>
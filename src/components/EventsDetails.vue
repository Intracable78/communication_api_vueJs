<template>
<div id="test">

    <h3>{{infos.name}}</h3>
    <img :src="infos.feature_image" height="128" width="128">
    <p><strong>Date :</strong> {{infos.date}}</p>
   <p><strong>Type :</strong> {{infos.type?.name}}</p>
   <p><strong>Lieu : </strong> {{infos.location}}</p>
   <p><strong>Description : </strong> {{infos.description}}</p>

  </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'EventsDetails',
  
    data(){
         let infos = []
         
        return{
            infos,
           
        }
    },
    mounted(){
        axios.get('https://spacelaunchnow.me/api/3.3.0/event/' + this.$route.params.id).then(reponse => this.infos = reponse.data)
        
    },
}
</script>
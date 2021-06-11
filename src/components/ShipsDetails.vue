<template>
<div id="test">

    <!--<div v-if="info.image_url != null">-->
    <h3>{{infos.name}}</h3>
    <img :src="infos.spacecraft_config?.image_url" height="128" width="128">
    <p><strong>Dimensions :</strong> Hauteur : {{infos.spacecraft_config?.height}} Diamètre : {{infos.spacecraft_config?.diameter}}</p>
    <p><strong>Utilisation :</strong>  {{infos.spacecraft_config?.capability}}</p>
<p><strong>Vol :</strong> pas trouvé</p>
<p><strong>Description :</strong> {{infos.description}}</p>
<p><strong>Histoire :</strong> {{infos.spacecraft_config?.history}}</p>

    
    <!--</div>-->
  </div>

</template>

<script>

import axios from 'axios'

export default {
    name: 'ShipsDetails',
  
    data(){
         let infos = []
        return{
            infos
        }
    },
    mounted(){
        axios.get('https://spacelaunchnow.me/api/3.3.0/spacecraft/' + this.$route.params.id).then(reponse => this.infos = reponse.data)  
    },
}
</script>
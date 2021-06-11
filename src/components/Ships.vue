<template>
<div id="test">
<div id="infos" v-for="info in infos" v-bind:key="info.id">
    <!--<div v-if="info.image_url != null">-->
    <h3>{{info.name}}</h3>
    <img :src="info.configuration.image_url" height="128" width="128">
    <p>{{info.image_url}}</p>
    <router-link v-bind:to="/Ships/+info.id">Détails</router-link>
    <!--</div>-->
</div>
  </div>
  <div v-if="url.previous != null">
<button v-on:click="PaginationPrevious(url.previous), page--">Previous</button>
</div>
<div v-if="url.next != null">
 <button v-on:click="PaginationNext(url.next), page++">Next</button>
 </div>
 <p>Pages totales : {{Math.round(url.count / 30)}}</p>
 <p>Page actuelle : {{page}}</p>
  

</template>

<script>

import axios from 'axios'

export default {
    name: 'Ships',
  
    data(){
         let infos = []
         let url = []
         let page = 1
         
         
        return{
            infos,
            url, 
            page 
        }
    },
    created(){
        this.axios();
        this.axios1();  
    },
    methods:{
        axios(url){
            if(url == undefined){
                 url = "https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30"
             }
       axios.get(url).then(reponse => this.infos = reponse.data.results)
        },
        axios1(url){
            if(url == undefined){
                 url = "https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30"
             }
       axios.get(url).then(reponse => this.url = reponse.data)
        },

        PaginationNext(url){
             if(url == undefined){
                 url = "https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30"
             }
            
            else if(url!= null || url != undefined){
            const parts = url.split('http');
            url = "https" + parts[1];
            axios.get(url).then(reponse => this.infos = reponse.data.results)
            axios.get(url).then(reponse => this.url = reponse.data)
            window.scroll(0, 0)
            } 
            return url
         },
         PaginationPrevious(url){
            if(url == undefined){
                 url = "https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30"
             }
            else if(url!= null || url != undefined){
            const parts = url.split('http');
            url = "https" + parts[1];
            axios.get(url).then(reponse => this.infos = reponse.data.results)
            axios.get(url).then(reponse => this.url = reponse.data)
            window.scroll(0, 0)
            } 
            return url
         }
    }
}
</script>
<template>
  <div class="container">
    <div class="header">
      <div class="search-title">
        <span>
          {{season+" "+year}}
        </span>
      </div> 
    </div>
    <div class="con-list" >
      <div v-for="list in animList" :key="list[0].type">
        <span class="title-type" v-if="list[0].type == 'TV'" style="color: white;">{{list[0].type}}</span>
        <span class="title-type" v-else>{{list[0].type}}</span>
        <div class="list">
          <a-row style="top: 50px;">
            <a-col :xs="12" :md="8" :xl="4" v-for="anim in list" :key="anim.mal_id" style="padding:10px">
              <a-card hoverable @click="goToAnimDetail(anim)">
                <img
                  alt="example"
                  :src="anim.image_url"
                  slot="cover"
                  class="img-cov"/>
                <a-card-meta
                  :title="anim.title">
                  <template slot="description" >{{anim.source}}</template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    
  let self;
  import config from '../services'
  import { async } from 'q';
  import {_} from 'vue-underscore';

  export default {
    name: 'Homepage',
    created(){
      self = this;  
    },
    mounted(){
      self.year = self.$route.params.year
      self.season = self.$route.params.season
      self.getListAnim()
    },
    data:()=>({
      year : 0,
      season : "",
      animList : []
    }),
    computed: {
     
    },
    methods:{
      getListAnim: async() => {
          try{
            let response = await config.HTTP.get(config.getSeason+self.year+'/'+self.season.toLowerCase())
            console.log(response)
            self.animList = response.data.anime
            self.animList = _.groupBy(self.animList, anime => anime.type);
            console.log(Object.keys(self.animList))
            delete self.animList.OVA;
            console.log(self.animList)
          }catch(error){
            console.log(error.response);
          }
      },
      goToAnimDetail: function(anim){
        console.log(anim)
        var urlTitle = self.convertToUrlTitle(anim.title)
        this.$router.push('/anime/'+anim.mal_id+'/'+urlTitle)
      },
      convertToUrlTitle: function(title){
        return title.toLowerCase().split(' ').join('-')
      }
    }
  }

</script>

<style scoped>
  .container{
    height:100vh;
  }
  .header{
    height: 40%;
    width: 100%;
    line-height: 5;
    background-image: url("../assets/background.jpg");
    background-position: center;
    background-size: cover;
  }
  .search{
    width: 70%;
  }
  .search-title{
    text-align: center;
    font-size: 50px;
    color:white;
  }
  .con-list{
    margin-top: -110px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 70px;
  }
  .list{
    margin-bottom: 50px;
  }
  .title-type{
    color: #0e122f;;
    font-size: 30px;
    position: absolute;
    padding: 10px;
  }
  .ant-card >>> .ant-card-body{
    padding: 15px;
  }
  @media (max-width: 600px) {
    .img-cov{
      height: 30vh;
    }
  }

  @media (max-width: 1024px) and (min-width: 601px) {
    .img-cov{
      height: 35vh;
    }
  }

  @media (min-width: 1025px) {
    .img-cov{
      height: 45vh;
    }
  }
</style>
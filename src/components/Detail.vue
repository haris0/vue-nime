<template>
  <div class="container">
    <div class="header"></div>
    <div>
      <a-card style="background: #f5f5f5;">
        <div class="cov-img"
          slot="cover">
          <img style=""
          :src="animeDetail.image_url"
          class="img-cov"/>
          
        </div> 
        <a-card-meta
          :title="animeDetail.title">
          <template slot="description">{{animeDetail.synopsis}}</template>
        </a-card-meta>
        <div style="margin-top: 10px;">
          <span style="font-weight: bold;margin-bottom:5px;">Genres :</span>
          <br>
          <a-tag v-for="genre in animeDetail.genres" :key="genre.mal_id">{{genre.name}}</a-tag>
        </div>
      </a-card>
    </div> 
    <div class="char-cont">
      <span class="sub-title">Characters</span>
        <div>
          <a-row :gutter="24">
            <a-col :xs="24" :xl="12" v-for="char in characters" :key="char.mal_id">
              <a-card style="margin: 20px 0px 0px;display: flex;background: #f5f5f5;">
                <img
                  alt="example"
                  :src="char.image_url"
                  slot="cover"
                  class="img-char"/>
                <div style="margin: -15px">
                  <span style=";font-size: 18px;font-weight: bold;">{{char.name}}</span>
                  <br>
                  <span v-for="cast in char.voice_actors.slice(0,1)" :key="cast.mal_id" >{{cast.name}}</span>
                  <br>
                  <span>{{char.role}}</span>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
    </div>
    <div class="char-cont">
      <span class="sub-title">Trailer</span>
      <div style="margin: 20px 0px 0px;">
        <a-row>
          <a-col :xs="24" :xl="12">
            <youtube :fitParent="fitPer" :video-id="ytId" @playing="playing"></youtube>
          </a-col>
        </a-row>
      </div>        
    </div>
  </div>
</template>

<script>
    
  let self;
  import config from '../services'
  import { async } from 'q';

  export default {
    name: 'Homepage',
    created(){
      self = this;  
    },
    mounted(){
      self.id = self.$route.params.id;
      self.getDetail();
      self.getCast();
    },
    data:()=>({
      id:0,
      animeDetail : {},
      characters : [],
      fitPer : true,
      ytId : ""
    }),
    computed: {     
    },
    methods:{
      getDetail: async() => {
          try{
            let response = await config.HTTP.get(config.getDetail+self.id)
            console.log(response)
            self.animeDetail = response.data;
            self.ytId = self.getYtId(self.animeDetail.trailer_url)
          }catch(error){
            console.log(error.response);
          }
      },
      getCast: async() => {
        try{
          let response = await config.HTTP.get(config.getDetail+self.id+config.getCast)
          console.log(response)
          self.characters = response.data.characters
          console.log(self.characters)
        }catch(error){
          console.log(error.response);
        }
      },
      playing:function() {
        console.log('\o/ we are watching!!!')
      },
      getYtId: function (url) {
        return self.$youtube.getIdFromUrl(url)
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
  .ant-card >>> .ant-card-meta-title{
    font-size: 1.8rem;
    font-weight: 500;
  }
  .sub-title{
    font-size: 20px;
    font-weight: bold;
  }
  .img-char{
    width: 60px;
  }
  @media (max-width: 600px) {
    .cov-img{
      margin-top: -110px;
      padding-left: 30px;
      padding-right:30px;
    }
    .ant-card >>> .ant-card-body{
      padding: 25px 30px;
    }
    .img-cov{      
      width: 150px;
    }
    .char-cont{
      margin: 25px;
    }
  }

  @media (max-width: 1024px) and (min-width: 601px) {
    .cov-img{
      margin-top: -120px;
      padding-left: 50px;
      padding-right:50px;
    }
    .ant-card >>> .ant-card-body{
      padding: 25px 50px;
    }
    .char-cont{
      margin: 25px 50px;
    }
  }

  @media (min-width: 1025px) {
    .cov-img{
      margin-top: -160px;
      padding-left: 70px;
      padding-right:70px;
    }
    .ant-card >>> .ant-card-body{
      padding: 25px 70px;
    }
    .char-cont{
      margin: 25px 70px;
    }
  }
</style>
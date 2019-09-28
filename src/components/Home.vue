<template>
  <div class="container">
    <div class="header">
      <div class="search-title">
        <span>
          Nusanime
        </span>
      </div> 
    </div>
    <div class="con-search">
      <div class="search">
        <a-input-search
          size="large"
          placeholder="input search text"
          @search="onSearch"
        />
      </div>
    </div>
    <div class="sesion">
      <a-row style="top: 50px;">
        <a-col :xs="12" :xl="6" style="padding:10px" v-for="sea in season" v-bind:key="sea.sea">
          <a-card 
            hoverable 
            class="card-sea" 
            @click="goToSeason(sea)">
            <div slot="cover" :style="'height :100px;background:'+sea.color"></div>
            <a-card-meta
              :title="sea.sea">
              <template slot="description">{{sea.year}}</template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>

  let self;

  export default {
    name: 'Homepage',
    created(){
      self = this;  
    },
    mounted(){
    },
    data:()=>({
      season : [
        {
          sea : "Winter",
          year: 2019,
          color : "#535c68"
        },
        {
          sea : "Spring",
          year: 2019,
          color : "#22a6b3"
        },
        {
          sea : "Summer",
          year: 2019,
          color : "#eb4d4b"
        },
        {
          sea : "Fall",
          year: 2019,
          color : "#f9ca24"
        }
      ]
    }),
    computed: {
     
    },
    methods:{
      onSearch: function(){

      },
      goToSeason: function(season){
        console.log(season)
        this.$router.push('/'+season.year+'/'+season.sea)
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
    line-height: 4.5;
    background-image: url("../assets/background.jpg");
    background-position: center;
    background-size: cover;
  }
  .con-search{
    margin-top: -20px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .search{
    width: 70%;
  }
  .search-title{
    text-align: center;
    font-size: 50px;
    color:white;
  }
  .sesion{
    text-align: center;
    margin: 0 20px;
    margin-bottom: 70px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
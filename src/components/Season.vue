<template>
  <div class="container">
    <div class="header">
      <div class="search-title">
        <span>
          {{season+" "+year}}
        </span>
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
          }catch(error){
            console.log(error.response);
          }
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
  .search{
    width: 70%;
  }
  .search-title{
    text-align: center;
    font-size: 50px;
    color:white;
  }
</style>
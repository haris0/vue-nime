<template>
  <div class="container">
    <div class="header">
      <div class="search-title">
        <span>
          Zeronime
        </span>
      </div> 
    </div>
    <div class="con-search">
      <div class="search">
        <a-input-group size="large" compact>
          <a-select size="large" style="width: 100%" :defaultValue="years[0]" v-model="year">
            <a-select-option v-for="tahun in years" :key="tahun" :value="tahun">{{tahun}}</a-select-option>
          </a-select>
        </a-input-group>
      </div>
    </div>
    <div class="sesion">
      <a-row style="top: 50px;">
        <a-col :xs="12" :xl="6" style="padding:10px" v-for="sea in season" v-bind:key="sea.sea">
          <a-card 
            hoverable
            class="card-sea" 
            @click="goToSeason(sea)">
            <div slot="cover" :style="'height :100px;background:'+sea.color">
              <span class="ses-title">{{sea.sea}}</span>
            </div>
            <a-card-meta
              :title="year">
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
      self.year = self.getYears();
      self.generateYear()
    },
    data:()=>({
      season : [
        {
          sea : "Winter",
          color : "#535c68"
        },
        {
          sea : "Spring",
          color : "#22a6b3"
        },
        {
          sea : "Summer",
          color : "#eb4d4b"
        },
        {
          sea : "Fall",
          color : "#f9ca24"
        }
      ],
      year : 0,
      years : [],
    }),
    computed: {
     
    },
    methods:{
      onSearch: function(){

      },
      goToSeason: function(season){
        console.log(season)
        this.$router.push('/'+self.year+'/'+season.sea)
      },
      getYears: function(){
        var today = new Date();
        var year = today.getFullYear();
        return year;
      },
      generateYear: function(){
        let year = self.getYears()
        for(var i = 0; i<5; i++){
          self.years.push(year)
          year--
        }
        console.log(self.years)
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
  .ses-title{
    font-size: 20px;
    font-weight: bold;
    color: white; 
    line-height: 4.5;  
  }
</style>
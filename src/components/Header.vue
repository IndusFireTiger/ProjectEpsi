<template>
  <div class="app-header" @updateUserName="usernameUpdate">
    <b-container fluid class="bv-example-row">
      <b-row align-v="center">
        <b-col class="logo">
          <a href="#"><img src="../assets/logo.png"></a>
        </b-col>
        <b-col class="comp" cols="8">   
          Toggle Company
        </b-col>
        <b-col> 
          {{user}}          
        </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:['user'],
  data () {
    return {
      msg: 'Header'
    }
  },
  methods:{
    usernameUpdate: function($event) {
      console.log('$event 2', $event)
      this.user = $event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
    background-color: rgb(29, 203, 170); 
    color: white;
    font-weight: bold;
}
img {
    max-width: 100px;
}
.comp {
  text-align: left;
}
</style>

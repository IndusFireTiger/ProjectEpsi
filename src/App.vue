<template>
  <div id="app">
    <Header :user="username"></Header>
    <b-container fluid class="page-heading">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <router-view :user="username" @userLoggedIn="updateUser"></router-view>         
        </b-col>
        <b-col></b-col>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{Header},
  data() {
    return{
      username: 'Guest'
    }
  },
  methods:{
    updateUser: function($event) {
      console.log('changedUseru', $event )
      this.$emit('updateUserName', $event)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

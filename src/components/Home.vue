<template>
    <div>   
        <b-container fluid>
            <b-row>              
              <b-col class="page-heading">Home</b-col>
            </b-row>
            <b-row>              
            </b-row>
            <b-row>
              <b-col class="header-comp" cols="12">
                <a href="#/login"><img src="../assets/login.png"></a> Login
              </b-col>
            </b-row>
        </b-container>  
    </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
img {
  max-width: 20px;
}
.page-heading {
  padding: 10px;
  text-align: left;
}
</style>

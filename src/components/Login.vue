<template>
  <div>   
          <b-container fluid>
            <b-row>              
              <b-col class="page-heading">Login</b-col>
              <hr>
            </b-row>
            <b-row class="login-form">
              <b-col cols="12">
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group id="group1"
                                    label="Email address:"
                                    label-for="input1">
                        <b-form-input id="input1"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="group2"
                                    label="Password"
                                    label-for="input2">
                        <b-form-input id="input2"
                                    type="password"
                                    v-model="form.pwd"
                                    required
                                    placeholder="password">
                        </b-form-input>
                    </b-form-group>                    
                    <b-button type="submit" variant="primary">Login</b-button>
                  </b-form>
                  <hr>
                  <p>Note: Login status available in console log and when successful the url 
                    route compenent it set, but doesnt load. Need to fix it. Browser refresh 
                    at this stage will display the Company details.</p>
              </b-col>
            </b-row>
          </b-container>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  props: ['user'],
  data () {
    return {
      form: {
        email: '',
        pwd: ''
      },
      status: 'Yet to Submit'
    }
  },
  methods: {
    onSubmit (evt) {
      let self = this;
      evt.preventDefault()
      axios
      .post('http://localhost:3000/login', this.form)
      .then( res => {
        const status = res.data.status

        console.log('redirected ', status)
        //redirect logic
        if (status == '200') {
          let email = self.form.email
          let username = email.substring(0, email.indexOf('@'))
          self.$emit('userLoggedIn', username)
          self.$router.push({
            name: 'CompanyList',
            params: { id: username}
          })       
        } else {
          console.log('login failed')
        }
      })
    }
  }
}
</script>

<style>
img {
  max-width: 30px;
}
.page-heading {
  padding: 10px;
  text-align: left;
}
.login-form {
  max-width: 400px;
}
</style>

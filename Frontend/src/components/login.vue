<template>
<div>
  <form @submit.prevent="handleSubmit" class="front" v-if="login">
    <input type="text" placeholder="Användarnamn.." v-model="accountName">
    <input type="password" placeholder="Lösenord.." v-model="password">
    <b-button type="submit" variant="primary">Logga in</b-button>
  </form>
  <form v-else>
    <front @clicked="logout"/>
  </form>
</div>
</template>

<script>
  import front from './front.vue';
  export default {
    name: 'login',
    components: {
      front
    },
    props: {
    },
    data() {
      return {
        accountName: '',
        password: '',
        login: false
      }
    },
    methods: {
      handleSubmit() {
        if(this.accountName === 'Frida' && this.password === 'fritz89') {
          this.login = !this.login;
        } else {
          alert('Fel användarnamn eller lösenord, försök igen.');
        }
      },
      logout(value) {
        this.login = value;
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: lightsalmon;
  }
  input {
    padding: 10px;
    width: 100vw;
    text-align: center;
    margin-bottom: 20px;
    outline-color: green;
  }
  button {
    padding: 10px;
    border-radius: 3px;
    width: 100vw;
  }
  label {
    margin-top: 10px;
    width: 80vw;
    text-align: center;
    font-weight: bold;
  }
</style>

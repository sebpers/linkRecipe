<template>
    <form @submit.prevent="handleSubmit" class="front">
      <label class="url-info">Klistra in ditt recepts URL från addressfältet och klistra in i fältet nedan..</label>
      <input type="text" placeholder="Klistra in receptets url.." v-model="urlRecipe">
      <input type="text" placeholder="Namnge recept.." v-model="urlTitle">
      <b-button type="submit" variant="success">Spara recept</b-button>
      <label> {{ savedRecipe }} </label>
      <b-button class="logoutButton" type="button" variant="danger" @click="logout">Logga ut</b-button>
    </form>
</template>

<script>
  export default {
    name: 'front',
    props: {

},
    data() {
      return {
        url: [{
          link: '',
          title: ''
        }],
        urlRecipe: '',
        urlTitle: '',
        savedRecipe: ''
      }
    },
    methods: {
      handleSubmit() {
        const newThis = this;
        this.url = [{
          link: this.urlRecipe,
          title: this.urlTitle
        }];

        setTimeout(function(){
          newThis.savedRecipe = '';
          newThis.urlRecipe = '';
          newThis.urlTitle = '';
        }, 3000);

        return this.savedRecipe = 'Ditt recept är nu sparat!';
      },
      logout(event) {
        this.logout = true;
        this.$emit('clicked', this.logout);
      }
    },
  }
</script>

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
  .url-info {
    margin-bottom: 50px;
  }
  label {
    margin-top: 10px;
    width: 80vw;
    text-align: center;
    font-weight: bold;
  }

  .logoutButton {
    margin-top: 50px;
  }
</style>

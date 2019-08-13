<template>
<div class="front">

    <form @submit.prevent="handleSubmit">
      <label class="url-info">Klistra in ditt recepts URL från addressfältet och klistra in i fältet nedan..</label>
      <input type="text" placeholder="Klistra in receptets url.." v-model="urlRecipe">
      <input type="text" placeholder="Namnge recept.." v-model="urlTitle">
      <b-button type="submit" variant="success">Spara recept</b-button>
      <label> {{ savedRecipe }} </label>
      <b-button class="logoutButton" type="button" variant="danger" @click="logout">Logga ut</b-button>
      <b-button class="logoutButton" type="button" variant="danger" @click="getLink">get</b-button>
      
    </form>
    <ul>
      <li v-for="url in getLinks" :key="url.id">{{ url.card.title }} - {{ url.card.link }}</li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'front',
    props: {

    },
    data() {
      return {
        urlRecipe: '',
        urlTitle: '',
        savedRecipe: '',
        getLinks: []
      }
    },
    mounted() {
        this.getLink();
      },
    methods: {
       async getLink() {
        try {
          const response = await fetch("http://localhost:3000/recs");
          const data = await response.json();
          this.getLinks = Object.values(data);

          console.log(this.getLinks);

        } catch (error) {
          console.error(error);
        }
      },
      handleSubmit() {

        const newThis = this;
        // Reset inputfield
        setTimeout(function(){
          newThis.savedRecipe = '';
          newThis.urlRecipe = '';
          newThis.urlTitle = '';
        }, 3000);

      axios.post('http://localhost:3000/recs', {
          card: {
            title: this.urlTitle,
            link: this.urlRecipe
          }
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

        return this.savedRecipe = 'Ditt recept är nu sparat!';
      },
      logout(event) {
        this.logout = true;
        this.$emit('clicked', this.logout);
      }
    },
  //   async postLink(link) {
  //     console.log('This is link: ', link);
  //     try {
  //       const response = await fetch('http://localhost:3000/links', {
  //         method: 'POST',
  //         body: JSON.stringify(link),
  //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //       })
  //       const data = await response.json();
  //       console.log(data);
  //       this.links = [...this.links, data]
  //     } catch (error) {
  //       console.error(error)
  //   }
  // },
  }
</script>

<style scoped>
li {
  color: black;
}
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

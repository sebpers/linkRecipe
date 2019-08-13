<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from './components/login.vue';
export default {
  name: 'app',
  components: {
    login
  },
  data() {
    return {
      getLinks: []
    }
  },
  mounted() {
    // this.getLink();
  },
  methods: {
    // async getLink() {
    //   try {
    //     const response = await fetch("http://localhost:3000/links");
    //     this.getLinks = await response.json();
    //     console.log(this.getLinks);

    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }
}
</script>

<style>

</style>

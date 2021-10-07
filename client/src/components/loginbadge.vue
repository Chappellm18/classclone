<template>
  <div class="buttons" v-if="!Session.user">
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click="login"> Log in </a>
  </div>
  <div v-else>Hello {{ name }}</div>
</template>

<script>
import Session from "../services/session";
export default {
  data() {
    return {
      Session,
    };
  },
  methods: {
    login() {
      //this.Session.Login();
        this.$router.push('/login')
    },
  },
};
</script>

<style>
</style>
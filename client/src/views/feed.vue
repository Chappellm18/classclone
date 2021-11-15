<template>
  <div class="section">
    <h1 class="title">Feed Page</h1>

    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="post" v-for="(p, i) in posts" :key="p.src">
          <post :post="p" @remove="remove(p, i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import session from "../services/session";
import { Delete, GetWall } from "../services/posts";
export default {
  components: {
    Post,
  },
  data: () => ({
    posts: [],
  }),
  async mounted() {
    this.posts = await GetWall(session.user.handle);
  },
  methods: {
    async remove(pst, i) {
      const response = await Delete(pst._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="section">
    <h1 class="title">Feed Page</h1>

    <div class="columns"></div>

    <div class="column is-half is-offset-one-quater">
      <post-edit :newPost="newPost" @submit="add()" />

      <div class="post" v-for="(p, i) in posts" :key="p.src">
        <post :post="p" @remove="remove(p, i)" />
      </div>

      <div class="column">
        <post :post="newPost" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import PostEdit from "../components/Post-edit.vue";
import session from "../services/session";
import { Add, Delete, GetWall } from "../services/posts";
export default {
  components: {
    Post,
    PostEdit,
  },
  data() {
    return {
      posts: [],
      newPost: { user: session.user, user_handle: session.user.handle },
    };
  },
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
    async add() {
      const response = await Add(this.newPost);
      if (response) {
        this.posts.unshift(this.newPost);
      }
    },
  },
};
</script>

<style>
</style>
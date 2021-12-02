<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="url of image"
              v-model="post.src"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Alt</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="alt for image"
              v-model="post.alt"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Caption</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              v-model="post.Caption"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="true"
              />
              Public
            </label>
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="false"
              />
              Private
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control"></div>
          <div class="control"></div>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <button class="button is-link">Submit</button>
      <button class="button is-link is-light">Cancel</button>
    </footer>
  </form>
</template>

<script>
export default {
  props: { newPost: Object },
  data() {
    return {
      post: this.newPost,
    };
  },
};
</script>

<style>
.card {
  margin: 0 auto;
}
.card-footer {
  margin: 0 auto;
}
</style>
<template>
  <div>
    <h1>게시판</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['posts'])
  },
  created() {
    this.$store.dispatch('fetchPosts');
  }
};
</script>

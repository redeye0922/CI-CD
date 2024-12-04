<template>
  <div>
    <h1>게시판</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <button @click="goToCreatePost">새 게시물 작성</button>
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
  },
  methods: {
    goToCreatePost() {
      this.$router.push('/create');
    }
  }
};
</script>

<style scoped>
li {
  background: #f0f0f0;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

button {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #45a049;
}
</style>

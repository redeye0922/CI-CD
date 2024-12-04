<template>
  <div>
    <h1>게시판</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="confirmDelete(post.id)">삭제</button>
      </li>
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
    confirmDelete(postId) {
      if (confirm('삭제하시겠습니까?')) {
        this.deletePost(postId);
      }
    },
    async deletePost(postId) {
      try {
        await this.$store.dispatch('deletePost', postId);
        alert('게시물이 삭제되었습니다.');
      } catch (error) {
        console.error("게시물 삭제 중 오류가 발생했습니다:", error);
        alert('게시물 삭제에 실패했습니다.');
      }
    },
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
  padding: 5px 10px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background: #ff1a1a;
}
</style>

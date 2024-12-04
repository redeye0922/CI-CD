<template>
  <div>
    <h1>게시판</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-title">
          <strong>제목:</strong> {{ post.title }}
        </div>
        <div class="post-content">
          <strong>내용:</strong> {{ post.content }}
        </div>
        <button @click="confirmDelete(post.id)" class="delete-button">삭제</button>
      </li>
    </ul>
    <button @click="goToCreatePost" class="create-button">새 게시물 작성</button>
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
ul {
  list-style-type: none;
  padding: 0;
}

.post-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f0f0;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.post-title, .post-content {
  flex: 1;
  margin-right: 20px;
}

.post-content {
  flex: 2;
}

.delete-button {
  padding: 5px 10px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background: #ff1a1a;
}

.create-button {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.create-button:hover {
  background: #45a049;
}
</style>

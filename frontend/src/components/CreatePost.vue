<template>
  <div>
    <h2>새 게시물 작성</h2>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="제목" />
      <textarea v-model="content" placeholder="내용"></textarea>
      <button type="submit">작성</button>
      <button type="button" @click="goBack">돌아가기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async submitPost() {
      const post = {
        title: this.title,
        content: this.content
      };

      try {
        await this.$store.dispatch('createPost', post);
        this.title = '';
        this.content = '';
        this.$router.push('/');
      } catch (error) {
        console.error("게시물 생성 중 오류가 발생했습니다:", error);
      }
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input, textarea {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button[type="button"] {
  background: #f0f0f0;
  color: #000;
}

button:hover {
  background: #45a049;
}

button[type="button"]:hover {
  background: #ccc;
}
</style>

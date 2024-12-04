<template>
  <div>
    <h2>새 게시물 작성</h2>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="제목" />
      <textarea v-model="content" placeholder="내용"></textarea>
      <button type="submit">작성</button>
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

      // 게시물 생성 후 라우터를 사용하여 PostList로 이동
      try {
        await this.$store.dispatch('createPost', post);
        this.title = '';
        this.content = '';
        this.$router.push('/');
      } catch (error) {
        console.error("게시물 생성 중 오류가 발생했습니다:", error);
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

button {
  align-self: flex-end;
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}
</style>

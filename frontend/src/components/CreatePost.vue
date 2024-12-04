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
    submitPost() {
      const post = {
        title: this.title,
        content: this.content
      };
      this.$store.dispatch('createPost', post);
      this.title = '';
      this.content = '';
    }
  }
};
</script>

<style scoped> form { display: flex; flex-direction: column; } button { align-self: flex-end; } </style>

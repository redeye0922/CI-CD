import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch('http://localhost:9090/api/posts');
      const data = await response.json();
      commit('setPosts', data);
    },
    async createPost({ commit }, post) {
      const response = await fetch('http://localhost:9090/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      const data = await response.json();
      commit('addPost', data);
    },
    async deletePost({ commit }, postId) {
      await fetch(`http://localhost:9090/api/posts/${postId}`, {
        method: 'DELETE'
      });
      commit('removePost', postId);
    }
  },
  modules: {}
});

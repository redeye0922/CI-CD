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
      try {
        const baseURL = process.env.VUE_APP_BACKEND_URL;
        const response = await fetch(`${baseURL}/api/posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        commit('setPosts', data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    },
    async createPost({ commit }, post) {
      try {
        const baseURL = process.env.VUE_APP_BACKEND_URL;
        const response = await fetch(`${baseURL}/api/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        commit('addPost', data);
      } catch (error) {
        console.error('Failed to create post:', error);
      }
    },
    async deletePost({ commit }, postId) {
      try {
        const baseURL = process.env.VUE_APP_BACKEND_URL;
        const response = await fetch(`${baseURL}/api/posts/${postId}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        commit('removePost', postId);
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    }
  },
  modules: {}
});

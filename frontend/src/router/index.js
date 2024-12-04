import {
    createRouter,
    createWebHistory
} from 'vue-router';
import PostList from '../components/PostList.vue';
import CreatePost from '../components/CreatePost.vue';

const routes = [{
        path: '/',
        component: PostList
    },
    {
        path: '/create',
        component: CreatePost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

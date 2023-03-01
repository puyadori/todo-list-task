import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/Home.vue'
import TemplateUser from './pages/users/template.vue'
import indexUser from './pages/users/index.vue'
import showUser from './pages/users/showUser.vue'
import PostPage from './pages/Post.vue'
import TaskPage from './pages/Task.vue'
import TaskExample from './pages/TaskExample.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/User',
    name: 'User',
    component: TemplateUser,
    children: [
      { path:'', name: 'userId', component: indexUser },
      { path: ':id', name: 'userId', component: showUser },
    ],
  },
  { path: '/Post', name: 'Post', component: PostPage },
  { path: '/Task', name: 'Task', component: TaskPage },
  { path: '/TaskExample', name: 'TaskExample', component: TaskExample },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

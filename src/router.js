import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'AboutMe',
            component: () => import('./components/AboutMe'),
            meta: { layout: 'simple' }
        },
        {
            path: '/filesort',
            name: 'FileSort',
            component: () => import('./components/FileSort'),
            meta: { layout: 'simple' }
        },
    ]
});

export default router;

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// Auth
import Login from '@/components/Login'
import Signup from '@/components/Signup'
// Movies
import Movies from '@/components/Movies'
import MovieDetails from '@/components/MovieDetails'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/movies',
            name: 'Movies',
            component: Movies
        },
        {
            path: '/movies/:movieId',
            name: 'MovieDetails',
            component: MovieDetails,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: Signup
        }
    ]
})

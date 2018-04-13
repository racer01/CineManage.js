<template lang="pug">
    div.hello
        h1 {{ msg }}
        h2 Essential Links
        ul
            li
                a(target='_blank', href='https://vuejs.org') Core Docs
            li
                a(target='_blank', href='https://forum.vuejs.org') Forum
            li
                a(target='_blank', href='https://chat.vuejs.org') Community Chat
            li
                a(target='_blank', href='https://twitter.com/vuejs') Twitter
            br
            li
                a(target='_blank', href='http://vuejs-templates.github.io/webpack/') Docs for This Template
        h2 Ecosystem
        ul
            li
                a(target='_blank', href='http://router.vuejs.org/') vue-router
            li
                a(target='_blank', href='http://vuex.vuejs.org/') vuex
            li
                a(target='_blank', href='http://vue-loader.vuejs.org/') vue-loader
            li
                a(target='_blank', href='https://github.com/vuejs/awesome-vue') awesome-vue
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

<template lang="pug">
    .row.justify-content-center
        .col.col-md-6
            form
                .form-group
                    label(for='user-login') Email
                    input.form-control#user-login(type='text')
                .form-group
                    label(for='user-pass') Password
                    input.form-control#user-pass(type='password')
                .form-group
                    button.btn.btn-block.btn-primary(type='submit') Login
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped>
</style>

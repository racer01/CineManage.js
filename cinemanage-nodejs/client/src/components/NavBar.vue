<template lang="pug">
    div#navbar
        b-navbar(toggleable='md', type='dark', variant='primary')
            b-container
                b-navbar-toggle(target='nav_collapse')
                b-navbar-brand(to='/')#branding CM.js
                b-collapse(is-nav, id='nav_collapse')
                    b-navbar-nav
                        b-nav-item(to='/movies') Movies
</template>

<script>
export default {
    name: 'HelloWorld'
}
</script>

<style scoped>
#navbar {
    margin-bottom: 1em;
}

#branding {
    font-weight: 400;
    border: 1px solid white;
    border-radius: 6px;
    padding-left: 0.5em;
    padding-right: 0.5em;
}

.active {
    font-weight: bold;
}
</style>

<template lang="pug">
    div
        .movie-item(v-for="movie in movies")
            .poster
                img(:src='"/api/movies/" + movie.Id + "/poster"' :alt='"Poster of " + movie.Title', height='445', width='300')
            .movie-data
                h1
                    router-link(:to='"/movies/" + movie.Id') {{ movie.Title }}
                    sh1 {{ movie.OriginalTitle }}
                    sh2 i.fa.fa-film {{ movie.Genre }}
                    sh2 i.fa.fa-child {{ movie.AgeRestriction }}+ i.fa.fa-clock-o {{ movie.Length }} minutes
                p {{ truncate(movie.Description) }}
</template>

<script>
import axios from 'axios';

export default {
    name: 'Movies',
    data () {
        return {
            movies: []
        }
    },
    methods: {
        getMovies () {
            axios.get('/api/movies')
                .then((response) => {
                    this.movies = response.data;
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        truncate (description) {
                let maxLength = 150;
                let ellipsis = '...';
                return description.length > maxLength - ellipsis.length
                        ? `${description.substr(0, maxLength - 1)}...` 
                        : description;
        }
    },
    beforeMount (){
        this.getMovies();
 }
}
</script>

<style scoped>
.movie-item {
    display: grid;
    grid-template: "poster data"
                   / 300px 1fr;
    grid-gap: 0.5em;
    margin: 0.5em 0 0.5em 0;
    background-color: #F5F5F5;
    height: 445px;
}

.poster {
    grid-area: poster;
}

.movie-data {
    grid-area: data;
    padding: 0.5em;
}
</style>
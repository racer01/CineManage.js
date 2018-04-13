<template lang="pug">
    .movie-container
        .poster
            img(:src='posterUrl', :alt='posterAlt', height='445', width='300')
        .movie-data
            h1 {{ title }}
                sh1 {{ originalTitle }}
                sh2 i.fa.fa-film {{ genre }}
                sh2 i.fa.fa-child {{ ageRestriction }}+ i.fa.fa-clock-o {{ length }} minutes
            p {{ description }}
</template>

<script>
import axios from 'axios';

export default {
    name: 'MovieDetails',
    data () {
        return {
            title: '',
            originalTitle: '',
            length: -1,
            description: '',
            ageRestriction: -1,
            genre: '',
            cast: ''
        }
    },
    computed: {
        posterUrl: function() {
            return `/api/movies/${this.movieId}/poster`;
        },
        posterAlt: function() {
            return `Poster of ${this.title}`;
        }
    },
    props: ['movieId'],
    methods: {
        getMovie () {
            axios.get(`/api/movies/${this.movieId}`)
                .then((response) => {
                    ({
                        Title: this.title,
                        OriginalTitle: this.originalTitle,
                        Length: this.length,
                        Description: this.description,
                        AgeRestriction: this.ageRestriction,
                        Genre: this.genre,
                        Cast: this.cast
                    } = response.data);
                    console.log(response.data.Id);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    beforeMount (){
        this.getMovie();
 }
}
</script>

<style scoped>
.movie-container {
    display: grid;
    grid-template: 'poster data'
                   / 300px 1fr;
    grid-gap: 0.5em;
    margin: 0.5em;
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
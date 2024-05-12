

const express=require('express');
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/anubhav')
.then(() => console.log('Connected to MongoDB...'))
const movieSchema = new mongoose.Schema({
    movie_name: String,
    booking_date: Date,
    booking_time: String,
});
const Movie = mongoose.model('Movie', movieSchema);
const movie = new Movie({
    movie_name: 'Avengers: Endgame',
    booking_date: new Date('2020-05-08'),
    booking_time: '18:00',
});
movie.save();
async function updateMovie() {
    const movie = await Movie.find({ booking_date: new Date('2020-05-08') });
    if (!movie) return;
    movie.movie_name = 'Avengers: Infinity War';
  
}

updateMovie();
app.listen(3000, () => console.log('Server running on port 3000'));
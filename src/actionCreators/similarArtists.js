import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

const fetchSimilarArtists = createAsyncThunk(
  'artists/fetchSimilarArtists',
  async () => {
    const options = {
      method: 'GET',
      url: `http://ws.audioscrobbler.com//2.0/?method=artist.getsimilar&artist=cher&api_key=${apiKey}&format=json`,
    };
    const response = await axios(options);
    console.log(response.data.similarartists.artist.slice(0, 9));
    return response.data.similarartists.artist.slice(0, 9);
  },
);

export default { fetchSimilarArtists };

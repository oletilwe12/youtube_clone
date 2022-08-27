import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '8c866e57e8msh2f396bc5fa3ced4p1f2807jsnab7457a3f717',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
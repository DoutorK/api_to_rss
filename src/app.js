import express from 'express';
import rssRoute from './routes/rssRoutes';

const app = express();

app.use(express.json());

app.use('/api/rss', rssRoute);

module.exports = app;
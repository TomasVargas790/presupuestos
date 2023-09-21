import express from 'express';
import { config } from './config.js';

const app = express();

app.use(express.json());

app.listen(config.api.port, (req, res) => {
  console.log(`[SERVIDOR INICIADO EN ${config.api.port}]`);
});

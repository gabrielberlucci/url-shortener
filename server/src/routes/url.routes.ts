import { Router } from 'express';
import { createShortUrl, getShortUrl } from 'src/controllers/url.controller.js';

export const urlRouter: Router = Router();

urlRouter.get('/:shortUrl', getShortUrl);
urlRouter.post('/api/url', createShortUrl);

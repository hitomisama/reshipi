// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: 'receipt-ocr-app',
    slug: 'receipt-ocr-app',
    version: '1.0.0',
    extra: {
      apiKey: process.env.GOOGLE_VISION_API_KEY,
    },
  },
};
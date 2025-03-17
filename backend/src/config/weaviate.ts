import weaviate from 'weaviate-ts-client';
import dotenv from 'dotenv';

dotenv.config();

const weaviateUrl = process.env.WEAVIATE_URL;
const weaviateApiKey = process.env.WEAVIATE_API_KEY;

if (!weaviateUrl) {
  throw new Error('Missing Weaviate environment variables');
}

let client;

if (weaviateApiKey) {
  client = weaviate.client({
    scheme: 'https',
    host: weaviateUrl,
    apiKey: new weaviate.ApiKey(weaviateApiKey),
  });
} else {
  client = weaviate.client({
    scheme: 'https',
    host: weaviateUrl,
  });
}

export const weaviateClient = client; 
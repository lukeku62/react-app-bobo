import cors from '@fastify/cors';
import Fastify from 'fastify';
import { products, type TypeProduct } from '../../src/data/products.ts';

const app = Fastify({ logger: true });
const PORT = Number(process.env.PORT ?? 3001);

await app.register(cors);

// Simulated network latency: random delay between MIN and MAX ms (env-configurable)
const MIN_DELAY_MS = Number(process.env.MIN_DELAY_MS ?? 500);
const MAX_DELAY_MS = Number(process.env.MAX_DELAY_MS ?? 1500);

app.addHook('onRequest', async (req) => {
  if (req.url === '/api/health') return;
  const delay =
    MIN_DELAY_MS + Math.random() * Math.max(0, MAX_DELAY_MS - MIN_DELAY_MS);
  await new Promise((resolve) => setTimeout(resolve, delay));
});

app.get('/api/health', async () => ({ status: 'ok' }));

// GET /api/products?category=Trail&sort=price|rating&order=asc|desc
app.get<{
  Querystring: {
    category?: string;
    sort?: 'price' | 'rating';
    order?: 'asc' | 'desc';
  };
}>(
  '/api/products',
  {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          category: { type: 'string' },
          sort: { type: 'string', enum: ['price', 'rating'] },
          order: { type: 'string', enum: ['asc', 'desc'] },
        },
      },
    },
  },
  async (req) => {
    const { category, sort, order } = req.query;
    let result = [...products];

    if (category) {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (sort) {
      const dir = order === 'desc' ? -1 : 1;
      const key = (p: TypeProduct) =>
        sort === 'price' ? Math.min(...p.prices) : p.rating;
      result.sort((a, b) => (key(a) - key(b)) * dir);
    }

    return result;
  },
);

app.get<{ Params: { id: string } }>('/api/products/:id', async (req, reply) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return reply.code(404).send({ error: 'Product not found' });
  }
  return product;
});

await app.listen({ port: PORT });

import { VercelRequest, VercelResponse } from '@vercel/node';
import { TodoService } from '../services/TodoService';

async function postGist(request: VercelRequest, response: VercelResponse) {
  if (!request.body) {
    return response.status(401).end('Empty body');
  }
  await new TodoService().save(request.body);
  response.status(200).end();
}

async function getGist(request: VercelRequest, response: VercelResponse) {
  const content = await new TodoService().get();
  response.status(200).json(content);
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  switch (request.method) {
    case 'POST':
      await postGist(request, response);
      break;
    case 'GET':
      await getGist(request, response);
      break;
    case 'OPTIONS':
      return response.status(200).end();
    default:
      response.status(401).end();
      break;
  }
};

export default handler;

import { VercelRequest, VercelResponse } from '@vercel/node';

function saveArtifact(request: VercelRequest, response: VercelResponse) {
  try {
    console.log('Saved');

    response.status(200).end();
  } catch (error) {
    console.error(error);
    response.status(500).end(error.message);
  }
}

function getArtifact(request: VercelRequest, response: VercelResponse) {
  try {
    console.log('get');

    response.status(200).json([]);
  } catch (error) {
    console.error(error);
    response.status(500).end(error.message);
  }
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  switch (request.method) {
    case 'OPTIONS':
      return response.status(200).end();
    case 'POST':
      return saveArtifact(request, response);
    case 'GET':
      getArtifact(request, response);
      break;
    default:
      response.status(401).end();
      break;
  }
};

export default handler;

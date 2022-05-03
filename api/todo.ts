import { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const GIST_FILE_NAME = 'webevent-github-actions-demo__todo_list.json';

async function saveArtifact(request: VercelRequest, response: VercelResponse) {
  if (!request.body) {
    return response.status(401).end('Empty body');
  }

  await octokit.rest.gists.update({
    gist_id: process.env.GITHUB_GIST_ID,
    files: { [GIST_FILE_NAME]: { content: JSON.stringify(request.body) } },
  });

  response.status(200).end();
}

async function getArtifact(request: VercelRequest, response: VercelResponse) {
  const { data } = await octokit.rest.gists.get({
    gist_id: process.env.GITHUB_GIST_ID,
  });
  const { content } = data.files[GIST_FILE_NAME];

  console.log(content);
  response.status(200).json(JSON.parse(content));
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  switch (request.method) {
    case 'POST':
      await saveArtifact(request, response);
      break;
    case 'GET':
      await getArtifact(request, response);
      break;
    case 'OPTIONS':
      return response.status(200).end();
    default:
      response.status(401).end();
      break;
  }
};

export default handler;

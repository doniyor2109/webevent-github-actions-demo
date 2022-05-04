import { Octokit } from '@octokit/rest';

export class GithubGistService {
  private readonly octokit: Octokit;
  private readonly gistID: string;

  constructor(gistID: string) {
    if (!process.env.GHP_TOKEN) {
      throw new Error('GHP_TOKEN env not found');
    }

    this.gistID = gistID;
    this.octokit = new Octokit({
      auth: process.env.GHP_TOKEN,
    });
  }

  save(filename: string, content: string) {
    return this.octokit.rest.gists.update({
      gist_id: this.gistID,
      files: { [filename]: { content } },
    });
  }

  async get(filename: string): Promise<string> {
    const { data } = await this.octokit.rest.gists.get({
      gist_id: this.gistID,
    });
    const { content } = data.files[filename];

    return content;
  }
}

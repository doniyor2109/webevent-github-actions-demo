import { GithubGistService } from './GithubGistService';

const GIST_FILE_NAME = 'webevent-github-actions-demo__todo_list.json';

interface TodoItemDTO {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoService {
  gistService: GithubGistService;

  constructor() {
    this.gistService = new GithubGistService(process.env.GH_GIST_ID);
  }

  save(data: TodoItemDTO[]) {
    return this.gistService.save(GIST_FILE_NAME, JSON.stringify(data));
  }

  async get(): Promise<TodoItemDTO[]> {
    const content = await this.gistService.get(GIST_FILE_NAME);
    return JSON.parse(content);
  }
}

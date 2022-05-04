import { config } from 'dotenv';
import { TodoService } from '../services/TodoService';

config();

async function main() {
  const todos = await new TodoService().get();
  process.stdout.write(JSON.stringify(todos), 'utf8');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

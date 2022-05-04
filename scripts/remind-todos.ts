import { Telegram } from 'telegraf';
import { config } from 'dotenv';
import { TodoService } from '../services/TodoService';

config();

async function main() {
  const chatId = parseInt(process.env.TELEGRAM_CHAT_ID);
  const telegram = new Telegram(process.env.TELEGRAM_BOT_TOKEN);

  if (!chatId) {
    throw new Error('TELEGRAM_CHAT_ID is not provided');
  }

  const todos = await new TodoService().get();
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  if (uncompletedTodos.length) {
    await telegram.sendMessage(
      chatId,
      `You have ${uncompletedTodos.length} uncompleted todo items.
Try finishing them by visiting https://webevent-github-actions.vercel.app/`
    );
  } else {
    await telegram.sendMessage(
      chatId,
      'Yay, you have completed all todo items'
    );
  }

  console.log('Todos reminded successfully');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

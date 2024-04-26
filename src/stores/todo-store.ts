import { defineStore } from 'pinia';
import { Method, Todo } from 'src/components/models';

const findId = (todos: Todo[], id: number) =>
  todos.findIndex((todo: Todo) => todo.id === id);

const initialForm: Todo = {
  title: '',
  description: '',
  status: false,
};

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    todo: {
      title: '',
      description: '',
      status: false,
    } as unknown as Todo,
    method: Method.create,
  }),

  actions: {
    addTodo() {
      const id = this.todos.length ? this.todos.length + 1 : 1;
      this.todos.push({ ...this.todo, id });
      this.resetTodo();
    },
    removeTodo(id: number) {
      const todo = findId(this.todos, id);
      this.todos.splice(todo, 1);
    },
    updateTodo(id: number) {
      const todo = findId(this.todos, id);
      this.todos.splice(todo, 1, this.todo);
      this.resetTodo();
    },
    changeStatus(id: number) {
      const todo = findId(this.todos, id);
      this.todos[todo].status = !this.todos[todo].status;
    },
    resetTodo() {
      this.todo = { ...initialForm };
    },
  },
  persist: true,
});

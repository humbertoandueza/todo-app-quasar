import { storeToRefs } from 'pinia';
import { Method, Todo } from 'src/components/models';
import { useTodoStore } from 'src/stores/todo-store';

export const useTodo = () => {
  const todoStore = useTodoStore();
  const { todo, todos, method } = storeToRefs(todoStore);
  const { addTodo, removeTodo, updateTodo, changeStatus, resetTodo } =
    todoStore;

  const handleAddTodo = () => {
    addTodo();
  };

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
  };

  const handleUpdateTodo = (id: number) => {
    updateTodo(id);
  };

  const handleChangeStatus = (id: number) => {
    changeStatus(id);
  };

  const handleResetForm = () => {
    method.value = Method.create;
    resetTodo();
  };

  const handleSetUpdate = (todoUpdate: Todo) => {
    method.value = Method.update;
    todo.value = todoUpdate;
  };

  return {
    todo,
    todos,
    method,
    handleAddTodo,
    handleRemoveTodo,
    handleUpdateTodo,
    handleChangeStatus,
    handleResetForm,
    handleSetUpdate,
  };
};

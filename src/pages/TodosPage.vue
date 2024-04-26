<template>
  <q-page class="row q-pa-lg">
    <div class="col-12">
      <TodoForm />
    </div>
    <div class="col-12">
      <TodoList />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TodoForm from 'src/components/todos/TodoForm.vue';
import TodoList from 'src/components/todos/TodoList.vue';
</script>

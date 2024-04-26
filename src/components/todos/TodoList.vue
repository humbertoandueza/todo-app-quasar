<template>
  <q-card class="q-my-lg">
    <q-card-section>
      <div class="text-h6">Tareas</div>
    </q-card-section>

    <q-separator dark inset />
    <q-card-section class="q-py-xl">
      <q-list bordered separator v-if="todos.length">
        <q-item
          clickable
          v-ripple
          v-for="{ title, description, status, id } of todos"
          :key="id"
        >
          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>{{ description }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              color="blue"
              :model-value="status"
              @click="handleChangeStatus(id || 1)"
            />
          </q-item-section>
          <q-item-section side>
            <q-btn
              fab-mini
              icon="edit"
              color="green"
              @click="handleSetUpdate({ title, description, status, id })"
            ></q-btn>
          </q-item-section>
          <q-item-section side>
            <q-btn
              fab-mini
              icon="delete"
              color="red"
              @click="handleRemoveTodo(id || 1)"
            ></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-subtitle text-center" v-else>No hay registros...</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useTodo } from 'src/composables/useTodo';
const { todos, handleChangeStatus, handleRemoveTodo, handleSetUpdate } =
  useTodo();
</script>

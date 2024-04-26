<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ titleTask }}</div>
    </q-card-section>
    <q-card-section>
      <q-form
        @submit="handleSubmit"
        @reset="handleResetForm"
        class="q-gutter-md"
      >
        <q-input
          label="Titulo"
          stack-label
          lazy-rules
          v-model="todo.title"
          :rules="[(val) => minLength(val, 3)]"
        />
        <q-input
          type="textarea"
          label="Descripción"
          rows="1"
          stack-label
          lazy-rules
          v-model="todo.description"
          :rules="[(val) => minLength(val, 10)]"
        />
        <q-toggle color="blue" v-model="todo.status" label="Status" />
        <div class="flex justify-between">
          <div style="width: 45%">
            <q-btn
              unelevated
              :label="buttonTask"
              type="submit"
              color="primary"
              class="full-width"
            />
          </div>
          <div style="width: 45%">
            <q-btn
              unelevated
              label="Limpiar"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm full-width"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { useTodo } from 'src/composables/useTodo';
import { Method } from '../models';
import { computed } from 'vue';
const { todo, handleAddTodo, handleUpdateTodo, handleResetForm, method } =
  useTodo();

const minLength = (val: string, min: number) =>
  (val && val.length > min) || `Mínimo ${min} caracteres`;

const handleSubmit = () => {
  if (method.value === Method.create) {
    handleAddTodo();
  } else {
    handleUpdateTodo(todo.value?.id || 1);
  }
};

const titleTask = computed(() =>
  method.value === Method.create ? 'Crear Tarea' : 'Actualizar Tarea'
);

const buttonTask = computed(() =>
  method.value === Method.create ? 'Guardar' : 'Actualizar'
);
</script>

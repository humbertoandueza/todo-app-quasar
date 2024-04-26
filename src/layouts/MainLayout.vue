<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Todo-APP</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Links</q-item-label>
        <Link v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Link, { LinkProps } from 'components/Links.vue';

defineOptions({
  name: 'LayoutComponent',
});

const linksList: LinkProps[] = [
  {
    title: 'Todos',
    caption: 'Todos crud',
    icon: 'task',
    link: '/todo',
  },
  {
    title: 'Post',
    caption: 'Post api',
    icon: 'api',
    link: '/dummy-post',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

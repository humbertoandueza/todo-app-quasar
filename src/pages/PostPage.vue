<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page class="row q-pa-lg">
    <div class="col-12">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Posts</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row">
          <div
            class="col-4 q-pa-sm"
            v-for="(post, index) of posts"
            :key="index"
          >
            <q-card style="height: 400px">
              <q-img :src="post?.image" height="200px" />

              <q-card-section>
                <div class="text-h6">{{ post?.text }}</div>
                <div class="text-subtitle2">{{ post?.owner?.lastName }}</div>
              </q-card-section>

              <q-card-section class="q-pt-none"> </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = ref<any[]>();

const getPosts = async () => {
  const { data } = await api.get('/post');
  posts.value = data.data;
};

onMounted(() => {
  getPosts();
});
</script>

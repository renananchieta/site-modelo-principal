<template>

<div class="image-container">
  <v-img
  :src="imagemAtual"
  height="850"
  cover
  class="image-with-gradient"
  ></v-img>
</div>

</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';


/**
 * Data
 */
const imagemAtual = ref('');
const imagens = ref([
  'src/assets/crunchy.jpg',
  'src/assets/starplus.jpeg',
  'src/assets/netflix.jpg',
  'src/assets/hbomax.jpg',
]);

/**
 * Methods
 */
 const mudarImagem = () => {
  const indiceAleatorio = Math.floor(Math.random() * imagens.value.length);
  imagemAtual.value = imagens.value[indiceAleatorio];
};

/**
 * Hooks
 */
onMounted(() => {
  mudarImagem();
})
</script>

<style scoped>
.image-container {
  position: relative;
}

.image-with-gradient {
  width: 100%;
  height: auto;
}

.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  z-index: 1;
}
</style>
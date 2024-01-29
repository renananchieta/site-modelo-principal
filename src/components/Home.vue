<template>

<div class="image-container">
  <v-fade-transition hide-on-leave>
    <v-img
    :src="imagemAtual"
    :key="imagemAtual"
    height="850"
    cover
    class="image-with-gradient"
    ></v-img>
  </v-fade-transition>
</div>

</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
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

const intervalId = setInterval(mudarImagem, 7000);

/**
 * Hooks
 */
onMounted(() => {
  mudarImagem();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
})
</script>

<style scoped>

/* Transição de fade in e fade out */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Degradê da imagem de fundo*/
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
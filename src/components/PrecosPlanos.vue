<template>
 <div class="d-flex align-center flex-column mt-2">
    <div class="text-h2">Escolha seu plano</div>
 </div>

   <v-row align="center" justify="center" class="ma-4">
    <v-col cols="auto">
      <v-card
        class="d-flex align-center flex-column"
        max-width="344"
        variant="text"
      >
        <v-card-text class="text-h5">Padrão</v-card-text>
        <v-card-title class="text-h4 mb-1">R$ 40,90</v-card-title>
        <v-card-text
        class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        
        <v-card-actions>
            <v-btn
            variant="elevated"
            color="red-accent-4">ASSINE AGORA</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="d-flex align-center flex-column"
        max-width="344"
        variant="text"
      >
        <v-card-text class="text-h5">Especial</v-card-text>
        <v-card-title class="text-h4 mb-1">R$ 55,90</v-card-title>
        <v-card-text
        class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        
        <v-card-actions>
            <v-btn
            variant="elevated"
            color="red-accent-4">ASSINE AGORA</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="d-flex align-center flex-column"
        max-width="344"
        variant="flat"
        color="deep-purple-darken-4"
        rounded="0"
      >
        <v-card-text class="text-h5">PLUS MASTER</v-card-text>
        <v-card-title class="text-h4 mb-1">R$ 329,90</v-card-title>
        <v-card-text
        class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        
        <v-card-actions>
            <v-btn
            variant="elevated"
            color="red-accent-4">ASSINE AGORA</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <div class="d-flex align-center flex-column mb-10">
    <div class="text-caption">*Verifique as condições de disponibilidade</div>
 </div>
</template>

<script setup>
//
</script>
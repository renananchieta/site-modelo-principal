<template>
  <v-app-bar 
  app 
  class="border-b" 
  flat 
  color="grey-darken-4"
  density="comfortable">
    <div 
    class="ml-10">
      <v-app-bar-title 
      class="ml-10 pl-10" @click="navegarParaPaginaPrincipal()">
        {{systemName}}
      </v-app-bar-title>
    </div>
    <template v-slot:append>
      <div 
      class="mr-10">
        <v-btn 
        class="mr-2"
        color="#000000" 
        variant="flat"
        rounded="0"
        to="/login">Login</v-btn>
        
        <v-btn 
        class="mr-10 "
        variant="outlined"
        rounded="0">Explorar</v-btn>
      </div>
    </template>
  </v-app-bar>
    
  <!-- <div>
    <navbar id="navbar">
        <div class="navbar-container">
            <img src="@/assets/logo.png" alt="" class="logo">
            <ul class="navbar-items">
                <li class="navbar-item">Premium</li>
                <li class="navbar-item">Ajuda</li>
                <li class="navbar-item">Baixar</li>
                <li class="navbar-item">Increver-se</li>
                <li class="navbar-item">Entrar</li>
            </ul>
        </div>
    </navbar>
  </div> -->
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

  /**
   * Data
   */
  const systemName = ref('Nome do Site'); 

  /**
   * Methods
   */
  const navegarParaPaginaPrincipal = () => {
    router.push('/');
  }

</script>

<style>
#navbar {
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
}

#navbar .navbar-container{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}

#navbar .navbar-container ul{
    display: flex;
    list-style: none;
    font-weight: bold;
}

#navbar .navbar-container ul li{
    padding: 0 20px;
    transition: all 300ms ease;
}

#navbar .navbar-container ul li:hover{
    color: #1DB954;
    cursor: pointer;
}

#navbar .navbar-container ul li:nth-child(3){
    border-right: 1px solid white;
}

.logo{
    height: 40px;
    width: auto;
}
</style>
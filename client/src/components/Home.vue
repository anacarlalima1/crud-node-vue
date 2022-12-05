<template>
 <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Página Inicial</router-link>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link to="/liststudent" class="nav-link">Lista de Alunos</router-link>
            <router-link to="/addstudent" class="nav-link">Adicionar novo aluno</router-link>
          </div>
        </div>
      </div>
    </nav>
 </div>

</template>

<script>
export default {
};
</script>

<style scoped>
</style>
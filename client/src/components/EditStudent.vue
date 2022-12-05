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
    <br/>
    <br/>
  <div class="container"> 
          <form @submit.prevent="salvar">
          <div class="form-group row" v-for="s of student" :key="s.id">
          <label>Nome do aluno:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Nome" v-model="s.nome">
           <label>Primeira Nota:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Primeira Nota" v-model="s.nota1">
           <label>Segunda Nota:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Segunda Nota" v-model="s.nota2">
          <button class="btn btn-info btn-default">Salvar alterações</button>
          </div>
        </form>
 </div>
 </div>
</template>

<script>
import api from '@/services/api.js';
export default {
    data(){
    return {
      student: {
        id:'',
        nome:'',
        nota1:'',
        nota2:''
      },
      id: this.$route.params.id
    }
  },
  mounted(){
    this.get(this.$route.params.id)
  },
  methods: {
    get(id){
        api.get('/students/' + id).then(response => {
        this.student = response.data;
        console.log(this.student[0])
    });
    },
    salvar(){
        api.put('/students/' + this.student[0].id, this.student[0]).then(response => {
        this.students = response.data
        alert("Informações atualizadas com sucesso!")
    });
    }
  
}
}
   
</script>

<style>
</style>
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
          <div class="form-group row">
          <label>Nome do aluno:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Nome" v-model="student.name">
          </div>
          <div class="form-group row">
          <label>Primeira Nota:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Primeira Nota" v-model="student.nota1">
          </div>
          <div class="form-group row">
          <label>Segunda Nota:</label>
          <input class="input-group input-group-sm mb-3" style="margin-bottom: 30px;" type="text" placeholder="Segunda Nota" v-model="student.nota2">
          <div class="d-grid gap-2 col-2 mx-auto">
          <button class="btn btn-info btn-default">Cadastrar aluno</button>
          </div>
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
      students: []
    }
  },
  mounted() {
    this.salvar()
  },
  methods: {
    salvar(){
        api.post('/students', this.student).then(response => {
        this.students = response.data
        alert("Aluno cadastrado com sucesso!")
    });
}
}
}
</script>

<style>
</style>
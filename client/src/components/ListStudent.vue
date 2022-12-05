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
<table class="table">
    <thead class="thead-dark">
      <tr>
        <th></th>
        <th>Nome</th>
        <th>Primeira Nota</th>
        <th>Segunda Nota</th>
        <th>Situação</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student of students" :key="student.id">

        <td>{{student.id}}</td>
        <td>{{student.nome}}</td>
        <td>{{student.nota1}}</td>
        <td>{{student.nota2}}</td>
        <td>{{media}}</td>
         <td>
              <router-link :to="{ path: '/editstudent/'+student.id}"><button  class="btn rounded-circle btn-success btn-sm"><i class="fas fa-pen"></i></button></router-link>
              <button v-on:click="deletar(student.id)" class="btn rounded-circle btn-danger btn-sm"><i class="fas fa-trash"></i></button>
            </td>
      </tr>
    </tbody>
  </table>
</div> 
</div>
</template>

<script>
import api from '@/services/api.js';
import axios from 'axios';
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
    this.listar()
  },
  methods: {
    listar(){
        api.get('/students').then(response => {
        this.students = response.data;
    });
    },
    editar(id, data){
        api.put('/students/' + id, data).then(response => {
        this.students = response.data;
        this.listar()
    });
    },
    deletar(id){
        api.delete('/students/' + id).then(response => {
        this.students = response.data;
        alert("Aluno deletado com sucesso!")
        this.listar()
    });
    },
    media(){
    let media=((student.nota1 + student.nota2)/2);
    let situacao = media >= 7 ? " Aprovado" : media < 7 && media >= 4 ? "Recuperação" : "Reprovado";
    }
  }
}

</script>

<style>
</style>
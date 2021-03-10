<template>
  <div class="menu w-100">
    <input
      class="form-control"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
    />
    <button v-on:click="testing">TEST</button>
  </div>
</template>

<script src="../js/MenuFilter.js"/>

<style>
  @import "../css/MenuFilter.css";
</style>

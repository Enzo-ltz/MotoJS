<template>
  <div class="col-10 offset-1">
    <div class="row">
      <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />

    </div>
    <div class="row border p-3">
      <div
        class="col-lg-4 col-sm-6 my-5 "
        align="center"
        v-for="moto in resultQuery"
        :key="moto.id"
      >
        <div class="col-10 shadow p-2 moto-card" data-toggle="modal" data-target="#exampleModal" v-on:click="currentMoto=moto">
          <div>
            {{ moto.model }}
          </div>
          <div>
            {{ moto.bodyType }}
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <ModalDetails v-bind:moto="currentMoto"/>
    </div>
  </div>
</template>

<style scoped>
.moto-card{
  transition: 0.3s;
  background-color: rgba(248, 132, 0, 1);
}

.moto-card:hover{
  opacity: 0.7; 
  cursor: pointer;
}
</style>

<script>
import Data from "../data.json";
import ModalDetails from "./ModalDetails";

export default {
  name: "DataDisplayer",
  components: {
    ModalDetails
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
        console.log(this.searchQuery)
      return this.motos.filter((moto)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => moto.model.toLowerCase().includes(v))
      })
      }else{
        return this.motos;
      }
    }
  },
  data() {
    return {
      
      searchQuery: null,
      motos: Data,
      currentMoto: {},
    };
  },
  
};
</script>
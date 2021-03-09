<template>
  <div class="col-10 offset-1">
    <div class="row">
      <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
    </div>
    <div class="row border p-3">
      <div
        class="col-lg-4 col-sm-6 my-5"
        align="center"
        v-for="moto in resultQuery"
        :key="moto.id"
      >
        <div class="col-10 shadow p-2">
          <div>
            {{ moto.model }}
          </div>
          <div>
            {{ moto.bodyType }}
          </div>
          <button type="button" class="btn btn-secondary">Détails</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../data.json";

export default {
  name: "DataDisplayer",
  data() {
    
    return {
      searchQuery: null,
      motos: Data,
    };
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
  }
};
</script>
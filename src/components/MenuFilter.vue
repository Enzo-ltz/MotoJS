<template>
    <div class="menu w-100 px-3">
        <div class="row">
            <input class="form-control" type="text" v-model="searchQuery" placeholder="Search"/>
            {{searchQuery}}
        </div>
        <div class="row">
            <button @click="test">Voir motos filtrée</button>
        </div>
    </div>
</template>

<script>
import Data from '../data.json'
export default {
    name: "MenuFilter",
    data() {
        return {
            motos: Data,
            searchQuery: "",
            filteredMotos: null
        }
    },
    watch: {
        searchQuery: function() {
            this.resultQuery()
        }
    },
    mounted(){
        this.resultQuery()
    },
    methods: {
        test(){
            console.log(this.filteredMotos)
        },
        resultQuery() {
            if (this.searchQuery) {
                this.$emit("filteredData", this.motos.filter((moto) => {
                    return(this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => moto.model.toLowerCase().includes(v)));
                }) )
                
            } else {
                this.$emit("filteredData",this.motos) ;
            }
        
        },
    }
};
</script>

<style>
    @import "../css/MenuFilter.css";
</style>

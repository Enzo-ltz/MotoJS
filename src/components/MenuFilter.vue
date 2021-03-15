<template>

    <div class="col-10 offset-1 text-center py-3">  
        <div class="row">
            <div class="col-6">
                <input class="form-control" type="text" v-model="searchQuery" placeholder="Search"/>
            </div>
            <div class="col-6">
                <button class="btn-primary btn" data-toggle="dropdown">Filtres</button>
                <div class="dropdown-menu multi-column">
                    <div class="container-fluid">
                        <form class="dropdown-menu">
                            <div v-for="filter in existingFilters" :key="filter" @click="stopPropagation">
                                <label :for="filter">
                                <input type="checkbox" :id="filter" :value="filter" v-model="filters">
                                {{filter}}</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
            filters: [
                "Adventure",
                "Sports",
                "Off-road",
                "Scooter",
                "Naked",
                "Cruiser",
                "Chopper",
                "Commuter",
                "Scrambler",
                "Tourer",
                "Moped",
                "Superbike",
                "Cafe Racer",
                "Electric"
            ],
            existingFilters: [
                "Adventure",
                "Sports",
                "Off-road",
                "Scooter",
                "Naked",
                "Cruiser",
                "Chopper",
                "Commuter",
                "Scrambler",
                "Tourer",
                "Moped",
                "Superbike",
                "Cafe Racer",
                "Electric"
            ]
        }
    },
    watch: {
        searchQuery: function() {
            this.resultQuery()
        },
        filters: function() {
            this.resultQuery()
        },
    },
    mounted(){
        this.resultQuery()
    },
    methods: {
        stopPropagation(element){
            element.stopPropagation()
        },
        test(){
            console.log(this.filteredMotos)
        },
        resultQuery() {
            let motoFiltered = this.motos
            if (this.searchQuery) {
                motoFiltered = this.motos.filter((moto) => {
                    return(this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => moto.model.toLowerCase().includes(v)));
                }) 
            
            }
            else {
                motoFiltered= this.motos ;
            }
                
            motoFiltered = motoFiltered.filter((moto) => {
                return(this.checkBodyType(moto))
            })

            this.$emit("filteredData", motoFiltered)
        
        },
        checkBodyType(moto){
            for (let type of this.filters) {
                if (moto.bodyType.includes(type)){
                    return true
                } 
            }
            return false
        }
    }
};
</script>

<style>
    @import "../css/MenuFilter.css";
</style>

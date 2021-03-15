<template>
    <div class="col-10 offset-1 py-3">  
        <div class="row border text-center">
            <div class="col-6">
                <input class="form-control" type="text" v-model="searchQuery" placeholder="Search"/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked v-model="orderDisplacement" value="crescent">
                <label class="form-check-label" for="flexRadioDefault1">
                    Croissant
                </label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="orderDisplacement" value="decrescent">
                <label class="form-check-label" for="flexRadioDefault2">
                    Décroissant
                </label>
            </div>
            <div class="col-2">
                <input class="form-control" type="text" v-model="minDisplacement" placeholder="Cylindrée"/>
                <input type="checkbox" id="noDisplacement" value="true" v-model="noDisplacement">Aucune info
            </div>
            <div class="col-2">
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
            ],
            minDisplacement: null,
            noDisplacement: false,
            orderDisplacement: "crescent",
        }
    },
    watch: {
        searchQuery: function() {
            this.resultQuery()
        },
        filters: function() {
            this.resultQuery()
        },
        minDisplacement: function() {
            this.resultQuery()
        },
        noDisplacement: function() {
            this.resultQuery()
        },
        orderDisplacement: function() {
            this.resultQuery()
        }
    },
    mounted(){
        this.resultQuery()
    },
    methods: {
        stopPropagation(element){
            element.stopPropagation()
        },
        test(){
            var items = [
            { name: "Edward", value: 21 },
            { name: "Sharpe", value: 37 },
            { name: "And", value: 45 },
            { name: "The", value: -12 },
            { name: "Magnetic", value: 13 },
            { name: "Zeros", value: 37 }
            ];
            console.log(items.sort(function (a, b) {
            return a.value - b.value;
            }))
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

            motoFiltered = motoFiltered.filter((moto) => {
                return(this.checkDisplacement(moto))
            })
            
            this.sortData(motoFiltered)

            this.$emit("filteredData", motoFiltered)
        
        },
        checkBodyType(moto){
            for (let type of this.filters) {
                if (moto.bodyType.includes(type)){
                    return true
                } 
            }
            return false
        },
        checkDisplacement(moto){
            if ((parseFloat(moto.Displacement) > this.minDisplacement) || ((isNaN(parseFloat(moto.Displacement))) && (this.noDisplacement==true)) ){
                return true
            }
            return false
        },
        sortData(motoFiltered){
            if(this.orderDisplacement=="crescent") {
                motoFiltered.sort((a,b) => {
                    return parseFloat(a.Displacement)-parseFloat(b.Displacement)
                })
            }
            else {
                motoFiltered.sort((a,b) => {
                    return parseFloat(b.Displacement)-parseFloat(a.Displacement)
                })
            }
            return motoFiltered
        }
    }
};
</script>

<style>
    @import "../css/MenuFilter.css";
</style>

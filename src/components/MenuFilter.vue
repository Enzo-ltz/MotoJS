<template>
    <div class="col-10 offset-1 py-3">  
        <div class="row text-center">
            <div>
                <button @click="test">TEST</button>
            </div>
            <div class="col-6">
                <input class="form-control" type="text" v-model="searchQuery" placeholder="Search"/>
            </div>
            <div class="form-check col-1 border px-0">
                <div class="px-0">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked v-model="orderDisplacement" value="crescent">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Croissant
                    </label>

                </div>
                <div class="px-0">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="orderDisplacement" value="decrescent">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Décroissant
                    </label>
                </div>
            </div>
            <div class="col-2">
                <input type="checkbox" id="noDisplacement" value="true" v-model="noDisplacement">Aucune info
            </div>


            <div class="col-2">
                <button class="btn-primary btn" data-toggle="dropdown">Filtres</button>
                <div class="dropdown-menu multi-column">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6 border-right">
                                <h6 class="dropdown-header">Types de moto</h6>
                                <ul class="dropdown-menu">
                                    <li v-for="filter in existingFilters" :key="filter" @click="stopPropagation">
                                        <label :for="filter">
                                        <input type="checkbox" :id="filter" :value="filter" v-model="filters">
                                        {{filter}}</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-6 text-center">
                                <h6 class="dropdown-header pb-3">Cylindrées</h6>
                                <div class="row">
                                    <div class="col-3 pr-0 pl-2 align-self-center">Min :</div>
                                    <div class="col-9">
                                        <input class="form-control " type="text" v-model="minDisplacement" placeholder="Cylindrée"/>
                                    </div>
                                    <div class="col-3 pr-0 pl-2 align-self-center">Max : </div>
                                    <div class="col-9">
                                        <input class="form-control" type="text" v-model="maxDisplacement" placeholder="Cylindrée"/>
                                    </div>
                                </div>
                                <div class="row pt-3">
                                    <div class="col-12 pl-2">
                                        Afficher les 2 roues sans cylindrée renseignée : <input type="checkbox" id="noDisplacement" value="true" v-model="noDisplacement">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Data from '../data.json'
import axios from 'axios'

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
            maxDisplacement: null,
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
        maxDisplacement: function() {
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
        this.setImages()
        this.resultQuery()
    },
    methods: {
        stopPropagation(element){
            element.stopPropagation()
        },
        setImages(){
            let promises = [];
            let key = null
            for (let moto of this.motos) {
                promises.push(
                    axios.get("https://pixabay.com/api/?key="+key+"&q=" + moto.model.replaceAll(" ","+") + "&image_type=photo").then(response => {
                       if (response.data.total > 0){
                           moto.image=response.data.hits[0].webformatURL
                           console.log(moto)
                       }
                       else {
                           console.log("Pas d'image")
                       }
                    })
                )
            }

            Promise.all(promises).then(() => this.test);
        },
        test(){

            console.log(this.motos)
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
            let maxDisplacement = this.maxDisplacement
            if (maxDisplacement == undefined || maxDisplacement=="" ) {
                maxDisplacement=5000
            }
            if (((parseFloat(moto.Displacement) > this.minDisplacement) && parseFloat(moto.Displacement) < maxDisplacement) 
                || ((isNaN(parseFloat(moto.Displacement))) && (this.noDisplacement==true)) ){
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

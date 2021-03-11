<template>
    <div class="col-10 offset-1 border">  
        <div class="row w-50">
            <input class="form-control" type="text" v-model="searchQuery" placeholder="Search"/>
            {{searchQuery}}
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
                // if (this.filterType==true) {
            //     return this.motos.filter((moto) => {
            //         return moto.bodyType.includes("Adventure")
            //     });
            // }
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

<template>
    <div class="col-10 offset-1">
        <div class="row p-3">
            <div class="col-lg-4 col-sm-6 my-5" align="center" v-for="moto in dataFiltered" :key="moto.id">
                <div class="col-10 shadow p-2 moto-card" data-toggle="modal" data-target="#exampleModal" v-on:click="currentMoto = moto" >
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
            <MotoDetails v-bind:moto="currentMoto" />
        </div>
    </div>
</template>

<script>
import MotoDetails from "../components/MotoDetails.vue";

export default {
    name: "DataDisplayer",
    components: {
        MotoDetails,
    },
    props: {
        dataFiltered : Array
    },
    data() {
        return {
            currentMoto: {},
        };
    },
};
</script>

<style scoped>
@import "../css/DataDisplayer.css";
</style>

<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <MenuHeader />
            </div>
            <div class="row stickyMenu">
                <MenuFilter @filteredData="childing"/>
            </div>

            <div class="row">
                <DataDisplayer :dataFiltered="motosFiltered" />
            </div>
        </div>
    </div>
</template>

<script>
import MenuHeader from "./components/Header.vue";
import DataDisplayer from "./components/DataDisplayer.vue";
import MenuFilter from "./components/MenuFilter.vue";

export default {
    name: "App",
    components: {
        MenuHeader,
        DataDisplayer,
        MenuFilter,
    },
    data(){
        return {
            motosFiltered: null
        }
    },
    methods: {
        childing(value) {
            this.motosFiltered=value;
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.stickyMenu {
    position: sticky;
    background-color: rgba(226, 81, 13,0.85);
    top: 0px;
    z-index: 1000;
}
</style>
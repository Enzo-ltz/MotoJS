<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <MenuHeader />
      </div>
      <div class="row stickyMenu">
        <MenuFilter @clicked="childing"/>
      </div>

      <div class="row">
        <DataDisplayer />
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
   methods: {
    childing(value){
      console.log(value)
    }
  }
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
  top: 0px;
}
</style>
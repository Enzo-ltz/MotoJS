<template>
  <div id="app">

    <div class="container-fluid">
      <div class="row">
        <MenuHeader />
      </div>
      <div class="row stickyMenu">
        <MenuFilter />
      </div>

      <div class="row">       
        <DataDisplayer />
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeader from "./components/MenuHeader";
import DataDisplayer from "./components/DataDisplayer";
import MenuFilter from "./components/MenuFilter";

export default {
  name: "App",
  components: {
    MenuHeader,
    DataDisplayer,
    MenuFilter
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
  top: 0px;
}
</style>
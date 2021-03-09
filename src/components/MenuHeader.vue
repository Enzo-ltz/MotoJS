<template>
    <div id="menu">
        <div class="header row position-relative d-flex">
            <div class="header-filter top-0 start-0 h-100 w-100 position-absolute"></div>
            <div class="d-flex flex-column text-center align-items-center justify-content-center">
                <h1 class="menuText text-center mt-4 position-relative h-auto">La Pistonnerie</h1>
                <p style="color:red">Le premier moteur de recherche qui trouve ce que vous voulez</p>
            </div>
        </div>
    </div>
</template>

<style>

.header {
    height: 50vh;
    background-image: url('../images/menuHeader.jpg');
    background-size: 100%;
}

.header-filter{
    background-color: rgba(255, 255, 255, 0.2);
}

.menuText {
    font-size: 150px;
    color: rgb(226, 81, 13);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>
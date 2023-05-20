<template>
<nav 

>
    <li v-for="window in windows" :key="window.key">
        <button v-if="window.showInNavbar !=false" class="icon" @touchstart="openWindow(window.windowId)" @dblclick="openWindow(window.windowId)">
            <img class="icon-image" :src="require('../assets/win95Icons/' + window.iconImage)" :alt="window.altText" />
            <div class="border">
            <p class="icon-text">
                {{window.displayName}}
            </p>
            </div>
        </button>
    </li>
    <li>
        <!-- <button class="icon" @touchstart="openGithub()" @click="openGithub()">
            <img class="icon-image" :src="require('../assets/win95Icons/' + 'Github.webp')" alt="GitHub" />
            <div class="border">
            <p class="icon-text">
                GitHub
            </p>
            </div>
        </button> -->
    </li>
</nav>
</template>

<style scoped>
.icon-text {
    font-size: 12px;
    font-weight: 300;
}

.icon:hover {
    cursor: pointer;
}
</style>

<script>
export default {
    name: 'AppGrid',
    data: function () {
        return {
            windows: this.$store.getters.getWindows,
            gridHeight: ''
        }
    },
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },
        openGithub() {
            window.open("https://github.com/DonChiaQE"); 
        }
    },
    mounted() {
       
    },
}
</script>

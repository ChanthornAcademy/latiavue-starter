<template>
    <div class="flex h-screen bg-gray-200 font-roboto">
        <Sidebar :is-open="isOpen" @closeSideBar="isOpen = false" />

        <div class="flex flex-col flex-1 overflow-hidden">
            <Header @openSideBar="isOpen = true" />

            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container px-6 py-8 mx-auto">
                    <slot />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Sidebar from "@/Components/Sidebar.vue";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
// import { useSidebar } from "@/Composables/Sidebar";
const isOpen = ref(false)
</script>

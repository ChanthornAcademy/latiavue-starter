import { ref } from "vue"
export function useSidebar() {
    const isOpen = ref(false)

    return { isOpen }
}
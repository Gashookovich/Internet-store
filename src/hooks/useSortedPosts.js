import {ref, computed} from "vue";

export default function useSortedPosts(products) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {
        return [...products.value].sort((product1, product2) => product1[selectedSort.value]?.localeCompare(product2[selectedSort.value]))
    })

    return {
        selectedSort, sortedPosts
    }
}
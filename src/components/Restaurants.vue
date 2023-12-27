<template>
    <div class="wrapper flex flex-wrap z-5">
        <Card v-for="item in 10"/>
    </div>
</template>


<script>
import Card from './Card.vue'
export default {
    components: {
        Card
    }
}

</script>
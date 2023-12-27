<template>
<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">{{ alert.message }}</span>
</div>
</template>

<script>

export default{
    props: {
        alert: {
            type: Object,
        }
    }
}
</script>
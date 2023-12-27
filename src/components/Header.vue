<template>
    <div class="py-10 bg-[#283046] flex justify-between items-center">
        <div @click="$router.push({name: 'home'})"   class="cursor-pointer font-medium text-3xl pl-10 text-white tracking-[7px]">MELP</div>
        <button @click="$router.push({name: 'nereast-restaurant'})" class="mr-10 rounded-md text-white bg-[#7367F0] text-center py-2 px-5 uppercase">search for recommendations</button>
    </div>
</template>
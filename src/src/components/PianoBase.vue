<script setup lang="ts">

import { pianoSharpOrFlatArray } from '@/data/pianoKeys'

import { yueQinPingDiaoBaseFixedArray } from '../data/yueqin'

</script>
<template>
    <div>钢琴</div>
    <div>
        <li v-for="(item, i) in pianoSharpOrFlatArray" :key="i"> {{ item }}</li>
        <li v-for="(item, i) in yueQinPingDiaoBaseFixedArray" :key="i"> {{ item }}</li>
    </div>
</template>

<style lang="scss">

ul {
    display: flex;
}

li {
    list-style-type: none;
}

</style>
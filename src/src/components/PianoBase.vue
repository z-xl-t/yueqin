<script setup lang="ts">

import { pianoSharpOrFlatArray } from '@/data/pianoKeys'

import { cequalTemperament } from '../data/yueqin'

const jianPus = cequalTemperament.jianPus
const pianoKeys = cequalTemperament.pianoKeys
</script>
<template>
    <div>钢琴</div>
    <div>
        <li v-for="(item, i) in jianPus" :key="i"> {{ item }}</li>
        <li v-for="(item, i) in pianoKeys" :key="i"> {{ item }}</li>
        <li v-for="(item, i) in pianoSharpOrFlatArray" :key="i"> {{ item }}</li>
    </div>
</template>
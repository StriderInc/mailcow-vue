<script setup lang="ts">
import {watch} from "vue";

import {AccountModel} from 'src/entities/status';

const {checkPingStatus} = AccountModel.usePing();
const pingStatus = checkPingStatus();
watch(pingStatus, (newValue) => {
    console.log(newValue);
  },
  {immediate: true}
);
</script>

<template>
  <div>TASK LIST</div>
</template>

<style scoped>

</style>

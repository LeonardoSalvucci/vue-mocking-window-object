<script setup lang="ts">
import { ETHERSCAN_URL } from "../constants";
type Props = {
  address: string;
};

const props = defineProps<Props>();

const handleEtherscan = () => {
  window.open(`${ETHERSCAN_URL}${props.address}`, "_blank");
};
</script>

<template>
  <div
    class="ethereum-address"
    @click="handleEtherscan"
    data-testid="ethereumAddress"
  >
    {{ address }}
  </div>
</template>

<style>
.ethereum-address {
  font-family: "Courier New";
  cursor: pointer;
}
</style>

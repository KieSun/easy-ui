<template>
  <div id="app">
    <div class="box">
      <e-input placeholder="1"></e-input>
    </div>
    <div class="box">
      <e-input placeholder="1" disabled></e-input>
    </div>
  </div>
</template>

<script>
import EInput from "../package/input/input";
export default {
  components: { EInput }
};
</script>

<style>
.box {
  margin: 20px;
}
</style>

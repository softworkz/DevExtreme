<template>
  <div id="app">
      <Button
        text="Click Me!"
        @on-click="click"
        icon="download"
      >
      </Button>
  </div>
</template>

<script>

import Button from "./artifacts/vue/renovation/button";

export default {
  name: 'App',
  components: {
      Button
  },

  methods: {
      click(){
          alert("Clicked")
      }
  }
}
</script>


<style lang="scss">
@import url(./artifacts/css/dx.common.css);
@import url(./artifacts/css/dx.light.css);
</style>


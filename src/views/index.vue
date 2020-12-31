<template>
  <div class="index c-dark">
    123
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "index",
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index {
  min-width: 1200px;
  // background: white;
}
.content {
  height: calc(100vh - 210px);
  margin: 0 auto;
  padding: 10px;
}
</style>

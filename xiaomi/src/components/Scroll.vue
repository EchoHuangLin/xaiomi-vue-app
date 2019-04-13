<template>
  <div class="scroll-warp" ref="scroll">
    <div class="scroll">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "app-scroll",
  mounted() {
    let scroll = new BScroll(this.$refs.scroll, {
      click: true,
      tap: true
    });

    scroll.on("scrollStart", () => {
      scroll.refresh();
    });
  }
};
</script>

<style>
.scroll-warp {
  overflow: hidden;
}
</style>

<template>
  <div>
    <header-partitial></header-partitial>
    <slot></slot>
    <footer-partitial></footer-partitial>
  </div>
</template>
<script>
const HeaderPartitial = () => ({
  component: import(
    /*  webpackChunkName:"header"*/ "../partitial/HeaderPartitial.vue"
  ),
  delay: 0,
  timeout: 3000
});
const FooterPartitial = () => ({
  component: import(
    /*  webpackChunkName:"footer"*/ "../partitial/FooterPartitial.vue"
  ),
  delay: 300,
  timeout: 3000
});

export default {
  name: "DefaultLayout",
  components: {
    HeaderPartitial,
    FooterPartitial
  }
};
</script>

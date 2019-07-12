<template>
  <div class="me-wrapper">
    <page-header class="me__head">
      <div slot="page-header__left"></div>
      <div slot="page-header__right">
        <div>
          <i class="icon ion-ios-camera"></i>
        </div>
      </div>
    </page-header>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
  methods: {},
  computed: {},
  components: { PageHeader }
};
</script>
<style lang="stylus">
.me-wrapper
  .me__head
    background-color $container-background-color
</style>
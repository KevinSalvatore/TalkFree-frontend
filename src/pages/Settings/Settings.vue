<template>
  <div class="settings-wrapper">
    <page-header class="me__head">
      <div slot="page-header__left" class="vertical-middle">
        <div @click="$router.go(-1)">
          <i class="icon ion-ios-arrow-back"></i>
        </div>
        <p class="page-header-title">Settings</p>
      </div>
      <div slot="page-header__right"></div>
    </page-header>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
  components: { PageHeader }
};
</script>

<style lang="stylus">
.settings-wrapper
  .page-header-title
    margin-left $big-font-size
</style>

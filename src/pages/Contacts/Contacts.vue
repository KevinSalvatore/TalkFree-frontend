<template>
  <div class="contacts-wrapper">
    <page-header class="contacts__head retina-border-bottom">
      <div slot="page-header__left">
        <p>Contacts</p>
      </div>
      <div slot="page-header__right">
        <div class="vertical-middle">
          <div class="header__icon">
            <i class="icon ion-ios-search"></i>
          </div>
          <plus-btn />
        </div>
      </div>
    </page-header>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import PlusBtn from "@/components/PlusBtn/PlusBtn";

export default {
  methods: {},
  computed: {},
  components: { PageHeader, PlusBtn }
};
</script>
<style lang="stylus">
.contacts-wrapper
  .contacts__head
    background-color $gap-background-color
    .header__icon
      margin-left $big-font-size
</style>
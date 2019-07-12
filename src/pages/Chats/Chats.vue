<template>
  <div class="chats-wrapper">
    <page-header class="chats__head">
      <div slot="page-header__left">
        <p>Chats({{newMsgAccount}})</p>
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
  data() {
    return { newMsgAccount: 10 };
  },
  methods: {},
  computed: {},
  components: { PageHeader, PlusBtn }
};
</script>
<style lang="stylus">
.chats-wrapper
  .chats__head
    background-color $gap-background-color
    .header__icon
      margin-left $big-font-size
</style>
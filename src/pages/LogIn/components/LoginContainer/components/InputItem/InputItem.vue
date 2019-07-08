<template>
  <div class="input-item-wrapper vertical-middle around-padding item-big-margin">
    <i class="icon" :class="'ion-ios-'+iconName" :style="{fontSize: fontSize, color: color}" />
    <input :type="inputType" :style="{fontSize: fontSize, color: color}" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#ccc"
    },
    fontSize: {
      type: String,
      default: ".6rem"
    },
    iconName: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.input-item-wrapper
  border-bottom 1px solid rgba(222, 222, 222, .5)
  i
    line-height 1
  input
    font-weight lighter
    margin-left .5rem
    background-color transparent
    border 0
    outline-style none
    width 6rem
    &::-webkit-input-placeholder
      color rgba(222, 222, 222, .25)
</style>

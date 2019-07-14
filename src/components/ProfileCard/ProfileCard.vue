<template>
  <div class="profile-card-wrapper vertical-middle">
    <div class="profile-card__avatar">
      <img :src="avatar" />
    </div>
    <div class="profile-card__details">
      <p class="profile-card__details__name">{{username}}</p>
      <div class="profile-card__details__container vertical-middle">
        <p class="profile-card__details__region">Region: {{region}}</p>
        <div class="profile-card__details__icons vertical-middle">
          <div>
            <i class="icon ion-ios-barcode"></i>
          </div>
          <div>
            <i class="icon ion-ios-arrow-forward"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.profile-card-wrapper
  padding-bottom $big-gap
  width 100%
  background-color $container-background-color
  .profile-card__avatar
    padding $big-gap
    width 1.5rem
    height 1.5rem
    flex-shrink 0
    flex-grow 0
    img
      width 100%
      object-fit cover
      object-position center center
  .profile-card__details
    width 0
    flex-grow 1
    height 1.5rem
    line-height 1
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start
    .profile-card__details__name
      font-weight bold
      font-size $big-font-size
    .profile-card__details__container
      width 100%
      justify-content space-between
      .profile-card__details__region
        font-weight lighter
        font-size $small-font-size
      .profile-card__details__icons
        font-size $middle-font-size
        div
          padding-right $gap
</style>

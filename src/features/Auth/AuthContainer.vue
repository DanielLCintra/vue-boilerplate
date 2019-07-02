<template>
  <div>
    <div class="shadow"/>
    <div class="login-page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthContainer'
}
</script>

<style>
.login-page
{
  background-image: url('../../assets/wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
  background-size: cover;
}
.shadow {
  background-color: #ffffffa8;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>

<template>
  <h1>Vibrator</h1>
  <button @click="hapticsVibrate">
    Vibrar
  </button>
</template>

<script>
export default{
  name: 'Geolocaton',
  data () {
    return{
      loc: null
    }
  },
  methods:{

    hapticsVibrate() {
      window.navigator.vibrate(200);
    }

  }
}
</script>
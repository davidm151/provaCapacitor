<template>
  <h1>Vibrator</h1>
  <button @click="hapticsVibrate">
    Vibrar
  </button>
</template>

<script>
import {
  Plugins
} from '@capacitor/core';
const { Haptics } = Plugins;
export default{
  name: 'Geolocaton',
  data () {
    return{
      loc: null
    }
  },
  methods:{

    hapticsVibrate() {
     Haptics.vibrate(200);
    }

  }
}
</script>
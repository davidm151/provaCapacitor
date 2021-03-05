<template>
  <h1>Vibrator</h1>
  <button @click="hapticsVibrate">
    Vibrar
  </button>
</template>

<script>
import {Plugins} from "@capacitor/core";
import { Vibration } from '@ionic-native/vibration/ngx';
const { Vibrate} = Vibration;
export default{
  name: 'Geolocaton',
  data () {
    return{
      loc: null
    }
  },
  methods:{
    hapticsVibrate() {
      Vibrate.vibrate;
    }
  }
}
</script>
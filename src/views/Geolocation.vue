<template>
  <h1>Geolocation</h1>
  <p>Your location is:</p>
  <p>Latitude: {{loc?.coords.latitude}}</p>
  <p>Longitude: {{loc?.coords.longitude}}</p>

  <button @click="getCurrentPosition">
    Get Current Location
  </button>
</template>

<script>
import {Plugins} from "@capacitor/core";
const { Geolocation: geo } = Plugins;
export default{
  name: 'Geolocaton',
  data () {
    return{
      loc: null
    }
  },
  methods:{
    async getCurrentPosition(){
      this.loc = await geo.getCurrentPosition()
    }
  }
}
</script>
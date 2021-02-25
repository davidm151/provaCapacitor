<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Network Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Network Info</ion-title>
        </ion-toolbar>
      </ion-header>
      <h1>Network Info</h1>
      <p>Connected: {{status?.connected}}</p>
      <p>Connection Type: {{status?.connectionType}}</p>

      <button @click="networkInfo">
        Network Info
      </button>
    </ion-content>
  </ion-page>
</template>
<script>
import {Plugins} from "@capacitor/core";
const { Network } = Plugins;
export default{
  name: 'Geolocaton',
  data () {
    return{
      status: null
    }
  },
  methods:{
    async networkInfo() {
      this.status = await Network.getStatus();
    },
  }
}
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>
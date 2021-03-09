<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Geolocation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {{loc?.coords.latitude}}</p>
      <p>Longitude: {{loc?.coords.longitude}}</p>
      <button @click="getCurrentPosition">
        Get Current Location
      </button>
    </ion-content>
  </ion-page>
</template>
<script >
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {Plugins} from "@capacitor/core";
const { Geolocation: geo } = Plugins;
export default {
  name: 'Geolocaton',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
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
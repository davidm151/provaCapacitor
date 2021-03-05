<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Device Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Device Info</ion-title>
        </ion-toolbar>
      </ion-header>
      <div @click="DeviceInfo">
      <h1>Device Info</h1>
        <p>Battery: {{battery}}</p>
        <p> Is charging: {{ isCharging }}</p>
        <p>Disk Free: {{ diskFree}}</p>
        <p>Disk Total:  {{ diskTotal}}</p>
        <p>Mem Used: {{ memUsed}}</p>
        <p>Operating System: {{ operatingSystem}}</p>
      </div>
      <div @click="networkInfo">
        <h1>Network Info</h1>
        <p>Connected: {{ connected }}</p>
        <p>Connection Type: {{ connectionType }}</p>
      </div>
      <button @click="DeviceInfo">
        Network Info2
      </button>
    </ion-content>
  </ion-page>
</template>
<script>
import {Plugins} from "@capacitor/core";
const { Device } = Plugins;
const { Network } = Plugins;
export default{
  name: 'Geolocaton',
  data () {
    return{
      status: null,
      diskFree: null,
      diskTotal: null,
      memUsed: null,
      operatingSystem: null,
      battery: null,
      isCharging: null,
      connected: null,
      connectionType: null
    }
  },
  methods:{
    async DeviceInfo() {
      const info = await Device.getInfo();
      const info2 = await Device.getBatteryInfo();
      this.diskFree=info.diskFree;
      this.diskTotal=info.diskTotal;
      this.memUsed=info.memUsed;
      this.operatingSystem=info.operatingSystem;
      this.battery=info2.batteryLevel;
      this.isCharging=info2.isCharging;
      console.log(info);
    },
    async networkInfo() {
      this.status = await Network.getStatus();
      this.connected=this.status.connected;
      this.connectionType=this.status.connectionType;
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
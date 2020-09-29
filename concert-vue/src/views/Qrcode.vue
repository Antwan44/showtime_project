<template>
 <div class="qrcode">
<Navbar />
 
<div>
 <qrcode-vue class="text-center" :value="value" :size="size" level="H"></qrcode-vue>
 </div>

 </div>
</template>
 
<script>
 import QrcodeVue from 'qrcode.vue';
 import Navbar from '../components/Navbar';
 export default {
 name:"Qrcode",
 data() {
 return {
 value: `http://localhost:8080/tickets/${this.$route.params.id}`,
 size: 300,
 }
 },
 components:{
 Navbar,
 QrcodeVue,
 }
 }
</script>
 
<style scoped>
 
.qrcode{
 min-height: 100vh;
}
 
</style>
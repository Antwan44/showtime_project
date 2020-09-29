<template>
    <div>
            <Navbar />
        <Eventpage/>
    </div>
</template>

<script>
import Eventpage from '../components/Eventpage';
  import Navbar from '../components/Navbar';
export default {
    name:'Event',
    components:{ Eventpage,Navbar }
}
</script>

<style  scoped>

</style>
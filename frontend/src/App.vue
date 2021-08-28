<template>
  <div>
    <p class="font-body">Hi, I'm {{ name }}</p>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "FrontendApplicaion",
  components: {
    Navigation,
  },
  data() {
    return {
      name: "Nazmus Saqib",
    };
  },
};
</script>

<style>
</style>
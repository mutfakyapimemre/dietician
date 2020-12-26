<template>
  <v-app> </v-app>
</template>

<script>
export default {
  name: "index",
  layout: "dietician",
  middleware: ["session-control", "dietician"],
};
</script>
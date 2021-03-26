<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Forecast",
  mounted() {
    this.$http
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=hourly,minutely,current&units=metric&appid=f8e7c83b8d24e6bbafac702ccd3e2b64"
      )
      .then(
        (response) => {
          // get body data

          for (let day of response.body.daily) {
            console.log(this.date.parseDay(day.dt * 1000).split(" ")[0]);
          }
        },
        (response) => {
          console.log(response);
          // error callback
        }
      );
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #333;
}
</style>

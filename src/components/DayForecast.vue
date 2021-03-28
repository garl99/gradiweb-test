<template>
  <div class="component">
    <div class="component-icon">
      <div style="margin-left: 10px">
        <img
          style="width: 110%; height: auto"
          :src="urlIcon"
          alt="weather-icon"
        />
      </div>
    </div>
    <div class="component-info">
      <p class="day">
        <strong>{{ day }}</strong>
      </p>
      <p class="condition">{{ condition }}</p>
    </div>
    <div class="component-temp">
      <p class="temp">
        <strong>{{ max }}°C / {{ min }}°C</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    max() {
      return Math.round(this.data.temp.max);
    },
    min() {
      return Math.round(this.data.temp.min);
    },
    day() {
      return this.date.parseDay(this.data.dt * 1000).split(" ")[0];
    },
    condition() {
      return this.data.weather[0].description;
    },
  },
  data() {
    return {
      urlIcon:
        "http://openweathermap.org/img/w/" + this.data.weather[0].icon + ".png",
    };
  },
};
</script>

<style></style>

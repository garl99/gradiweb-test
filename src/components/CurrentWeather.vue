<template>
  <div class="card">
    <div class="header-card">
      <div class="icon-container">
        <div class="weather-icon">
          <img
            class="responsive-image-half"
            :src="urlIcon"
            alt="weather time"
            style="width: 60% !important; margin-top: 10px"
          />
        </div>
      </div>
      <div class="weather-container">
        <div class="temp-container">
          <p class="celsius">{{ temp }}°C</p>
        </div>

        <div class="city-container">
          <p class="city">
            <strong>{{ nameCity }}</strong>
          </p>
          <p class="country">France</p>
        </div>
      </div>
    </div>
    <div class="footer-card">
      <div style="width: 40%; height: 100%">
        <p style="font-size: 12px; color: grey; font-weight: bold">
          Humidity: {{ humidity }}%
        </p>
      </div>
      <div style="width: 30%; height: 100%">
        <p style="font-size: 12px; color: grey; font-weight: bold">
          {{ deg }}
        </p>
      </div>
      <div style="width: 30%; height: 100%">
        <p style="font-size: 12px; color: grey; font-weight: bold">
          {{ windSpeed }} m/s
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    temp() {
      return Math.round(this.data.main.temp);
    },
    humidity() {
      return this.data.main.humidity;
    },
    windSpeed() {
      return this.data.wind.speed;
    },
    nameCity() {
      return this.data.name;
    },
    deg() {
      if (this.data.wind.deg > 337.5) return "Northerly";
      if (this.data.wind.deg > 292.5) return "North Westerly";
      if (this.data.wind.deg > 247.5) return "Westerly";
      if (this.data.wind.deg > 202.5) return "South Westerly";
      if (this.data.wind.deg > 157.5) return "Southerly";
      if (this.data.wind.deg > 122.5) return "South Easterly";
      if (this.data.wind.deg > 67.5) return "Easterly";
      if (this.data.wind.deg > 22.5) {
        return "North Easterly";
      }
      return "Northerly";
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

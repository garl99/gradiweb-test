<template>
  <div class="home">
    <section class="wrap-section">
      <div class="header-section">
        <div class="location">
          <p class="location-name">
            <span class="material-icons" style="font-size: 32px"
              >location_on</span
            >Bogotá
          </p>
          <img
            class="responsive-image-half"
            src="../assets/bogota-map.png"
            alt="background-bogota"
          />
        </div>
        <div class="weather">
          <img
            class="responsive-image-full"
            src="../assets/bogota-city.jpg"
            alt="background-bogota"
          />
          <div class="bogota-weather" v-if="currentWeatherBog.main">
            <div class="weather-icon">
              <img
                class="responsive-image-half"
                :src="urlIcon"
                alt="weather icon"
              />
            </div>
            <div class="weather-temp">
              <p style="margin: 0; font-size: 28px; color: #fff">
                <strong>{{ currentTemp }}°C</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main class="main-section">
        <div class="days-forecast">
          <p class="title"><strong>3 Days</strong> Forecast</p>
          <div class="forecast-container" v-if="daysForecast.length !== 0">
            <day-forecast
              v-for="(day, index) of daysForecast"
              :key="index"
              :data="day"
            ></day-forecast>
          </div>
          <div v-else class="lds-dual-ring"></div>
        </div>
        <div class="places-visit">
          <p class="title"><strong>Place to</strong> Visit</p>
          <div class="places-container">
            <div class="shape">
              <div class="shape-info">
                <p class="shape-title">
                  <span class="material-icons" style="font-size: 14px"
                    >location_on</span
                  ><strong>Arab Street Singapur</strong>
                </p>
              </div>
              <img
                style="width: 100%; height: auto"
                src="../assets/prueba.jpg"
                alt="background-bogota"
              />
              <div class="background-over"></div>
            </div>
          </div>
        </div>
        <div class="other-info">
          <div class="first-container">
            <div class="title-container">
              <p class="title-o">
                <span class="material-icons" style="font-size: 14px"
                  >star_rate</span
                >
                <strong>Top</strong> Reviews
              </p>
            </div>
            <div class="profiles-container">
              <div class="profile">
                <img
                  style="width: 100%; height: auto"
                  src="../assets/perfil-1.jpg"
                  alt="background-bogota"
                />
              </div>
              <div class="profile">
                <img
                  style="width: 100%; height: auto"
                  src="../assets/perfil-4.jpg"
                  alt="background-bogota"
                />
              </div>
              <div class="profile">
                <img
                  style="width: 100%; height: auto"
                  src="../assets/perfil-3.jpg"
                  alt="background-bogota"
                />
              </div>
              <div class="more-profiles">
                <strong style="font-size: 12px; margin-top: 3px">8+</strong>
              </div>
            </div>
          </div>
          <div class="second-container">
            <div class="other-shape-a">
              <div class="shape-info">
                <p class="shape-title">
                  <span class="material-icons" style="font-size: 14px"
                    >location_on</span
                  ><strong>Artscience Museum</strong>
                </p>
              </div>
              <img
                style="width: 100%; height: auto"
                src="../assets/prueba2.jpg"
                alt="background-bogota"
              />
              <div class="background-over"></div>
            </div>
            <div class="other-shape-b">
              <div class="shape-info">
                <p class="shape-title">
                  <span class="material-icons" style="font-size: 14px"
                    >location_on</span
                  ><strong>Fountain of Health</strong>
                </p>
              </div>
              <div class="more">
                <span
                  class="material-icons"
                  style="font-size: 32px; color: #fff"
                  >add</span
                >
              </div>
              <img
                style="width: 100%; height: auto"
                src="../assets/prueba3.jpg"
                alt="background-bogota"
              />
              <div class="background-over"></div>
            </div>
          </div>
        </div>
        <section class="france-section" v-if="display">
          <p class="title"><strong>Weather in</strong> France</p>
          <current-weather
            v-for="(city, index) of currentWeatherFr"
            :key="index"
            :style="city.styleCard"
            :data="city"
          ></current-weather>
          <div
            class="card"
            style="
              top: -75px;
              height: 190px;
              border: dashed 2px rgba(128, 128, 128, 0.2);
              box-shadow: none;
            "
          >
            <button class="add-buttom">
              <strong>Add Locations</strong>
            </button>
            <div class="city-icon">
              <img
                style="width: 100%; height: auto"
                src="../assets/city.png"
                alt="background-bogota"
              />
            </div>
          </div>
        </section>
        <section v-else class="france-section">
          <div class="lds-dual-ring"></div>
        </section>
      </main>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import DayForecast from "@/components/DayForecast.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";

export default {
  name: "Forecast",
  components: {
    DayForecast,
    CurrentWeather,
  },
  computed: {
    currentTemp() {
      return Math.round(this.currentWeatherBog.main.temp);
    },
  },
  data() {
    return {
      daysForecast: [],
      currentWeatherBog: [],
      currentWeatherFr: [],
      urlIcon: "http://openweathermap.org/img/w/",
      baseForecastUrl:
        "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,minutely,current&units=metric&appid=f8e7c83b8d24e6bbafac702ccd3e2b64",
      baseCurrentUrl:
        "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=f8e7c83b8d24e6bbafac702ccd3e2b64",
      display: false,
      cities: {
        bogota: {
          lat: 4.6097,
          lon: -74.0817,
        },
        lyon: {
          lat: 45.7485,
          lon: 4.8467,
        },
        paris: {
          lat: 48.8534,
          lon: 2.3488,
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getCurrentWeatherBog();
      this.getCurrentWeatherFr();
      this.getDaysForecast();
    },
    getCurrentWeatherBog() {
      this.$http.get(this.getUrl(true, this.cities.bogota)).then(
        (response) => {
          // get body data
          this.currentWeatherBog = response.body;
          this.urlIcon += this.currentWeatherBog.weather[0].icon + ".png";
        },
        (response) => {
          // error callback
          console.log(response);
        }
      );
    },
    getCurrentWeatherFr() {
      this.$http.get(this.getUrl(true, this.cities.lyon)).then(
        (response) => {
          // get body data
          this.currentWeatherFr[0] = response.body;
          this.currentWeatherFr[0].styleCard = { top: "-115px" };

          this.$http.get(this.getUrl(true, this.cities.paris)).then(
            (response) => {
              // get body data
              this.currentWeatherFr[1] = response.body;
              this.currentWeatherFr[1].styleCard = { top: "-95px" };
              this.display = true;
            },
            (response) => {
              console.log(response);
              // error callback
            }
          );
        },
        (response) => {
          // error callback
          console.log(response);
        }
      );
    },
    getDaysForecast() {
      this.$http.get(this.getUrl(false, this.cities.bogota)).then(
        (response) => {
          // get body data
          let daily = response.body.daily;
          daily.shift(); //delete current day

          for (let day = 1; day <= 3; day++) {
            this.daysForecast.push(daily.shift());
          }
        },
        (response) => {
          // error callback
          console.log(response);
        }
      );
    },
    getUrl(path, params) {
      var route = "";
      if (path) {
        route = this.baseCurrentUrl;
      } else {
        route = this.baseForecastUrl;
      }
      for (var key in params) {
        route = route.replace("{" + key + "}", params[key]);
      }
      return route;
    },
  },
};
</script>

<style lang="scss">
//SASS With SCSS Notation
@import "src/assets/styles/styles.scss";
</style>

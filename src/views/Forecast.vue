<template>
  <div class="home">
    <section class="wrap-section">
      <div class="bogota-section">
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
          <div class="bogota-weather">
            <div class="weather-icon">
              <img
                class="responsive-image-half"
                src="../assets/clear.png"
                alt="weather icon"
              />
            </div>
            <div class="weather-temp">
              <p style="margin: 0; font-size: 32px; color: #fff">
                <strong>31°</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main class="main-section">
        <div class="days-forecast">
          <p class="title"><strong>3 Days</strong> Forecast</p>
          <div class="forecast-container">
            <div class="component">
              <div class="component-icon">
                <div style="margin-left: 10px">
                  <img
                    style="width: 100%; height: auto"
                    src="../assets/clear.png"
                    alt="background-bogota"
                  />
                </div>
              </div>
              <div class="component-info">
                <p class="day">
                  <strong>Friday</strong>
                </p>
                <p class="condition">Clear</p>
              </div>
              <div class="component-temp">
                <p class="temp">
                  <strong>32° / 20°</strong>
                </p>
              </div>
            </div>

            <div class="component">
              <div class="component-icon">
                <div style="margin-left: 10px">
                  <img
                    style="width: 100%; height: auto"
                    src="../assets/rain.png"
                    alt="background-bogota"
                  />
                </div>
              </div>
              <div class="component-info">
                <p class="day">
                  <strong>Friday</strong>
                </p>
                <p class="condition">Rain</p>
              </div>
              <div class="component-temp background-light">
                <p class="temp font-black">
                  <strong>32° / 20°</strong>
                </p>
              </div>
            </div>
            <div class="component">
              <div class="component-icon">
                <div style="margin-left: 10px">
                  <img
                    style="width: 100%; height: auto"
                    src="../assets/clear.png"
                    alt="background-bogota"
                  />
                </div>
              </div>
              <div class="component-info">
                <p class="day">
                  <strong>Friday</strong>
                </p>
                <p class="condition">Clear</p>
              </div>
              <div class="component-temp background-light">
                <p class="temp font-black">
                  <strong>32° / 20°</strong>
                </p>
              </div>
            </div>
          </div>
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
              <img
                style="width: 100%; height: auto"
                src="../assets/prueba3.jpg"
                alt="background-bogota"
              />
              <div class="background-over"></div>
            </div>
          </div>
        </div>
        <section class="france-section">
          <div class="card" style="top: -115px">
            <div class="header-card">
              <div class="icon-container">
                <div class="weather-icon">
                  <img
                    class="responsive-image-half"
                    src="../assets/clear.png"
                    alt="clear time"
                  />
                </div>
              </div>
              <div class="weather-container">
                <div class="temp-container">
                  <p class="celsius">32°</p>
                </div>

                <div class="city-container">
                  <p class="city">
                    <strong>Lyon</strong>
                  </p>
                  <p class="country">France</p>
                </div>
              </div>
            </div>
            <div class="footer-card">
              <div style="width: 40%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  Humedity: 64%
                </p>
              </div>
              <div style="width: 30%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  Northwest
                </p>
              </div>
              <div style="width: 30%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  8.3 km/h
                </p>
              </div>
            </div>
          </div>
          <div class="card" style="top: -95px">
            <div class="header-card">
              <div class="icon-container">
                <div class="weather-icon">
                  <img
                    class="responsive-image-half"
                    src="../assets/rain.png"
                    alt="rainy time"
                  />
                </div>
              </div>
              <div class="weather-container">
                <div class="temp-container">
                  <p class="celsius">32°</p>
                </div>

                <div class="city-container">
                  <p class="city">
                    <strong>Paris</strong>
                  </p>
                  <p class="country">France</p>
                </div>
              </div>
            </div>
            <div class="footer-card">
              <div style="width: 40%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  Humedity: 64%
                </p>
              </div>
              <div style="width: 30%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  Northwest
                </p>
              </div>
              <div style="width: 30%; height: 100%">
                <p style="font-size: 12px; color: grey; font-weight: bold">
                  8.3 km/h
                </p>
              </div>
            </div>
          </div>
          <div
            class="card"
            style="
              top: -75px;
              height: 188px;
              border: dashed 2px rgba(128, 128, 128, 0.2);
              box-shadow: none;
            "
          >
            <button class="add-buttom">
              <strong>Add Locations</strong>
            </button>
            <div class="weather-icon">
              <img
                style="width: 100%; height: auto"
                src="../assets/city.png"
                alt="background-bogota"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  </div>
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

<style lang="scss">
//SASS With SCSS Notation
@import "src/assets/styles/styles.scss";
</style>

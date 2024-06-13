<template>
    <div class="map_container">
      <div class="input_wrapper">
        <!-- {{ $cookies.get('client_location') }} -->
        <input
          class="map_search_input"
          ref="searchTextField2"
          type="text"
          :value="formatted_address"
          @input="getAddress"
        />
      </div>
  
      <div class="page_map_wrapper">
        <!-- End  Select  Delivery Method -->
        <GmapMap
          style="height: 300px"
          ref="gMap"
          v-if="center"
          :center="center"
          :zoom="12"
          :options="options"
          @click="getMarker"
        >
          <div v-if="markers.length">
            <GmapMarker
              v-for="(marker, index) in markers"
              :key="index"
              :position="marker"
              :clickable="true"
              :draggable="false"
              :icon="icon"
              @drag="getMarker"
            />
          </div>
          <!-- <gmap-polyline
            v-if="test"
            :path.sync="test"
            v-bind:options="{ strokeColor: '#4C3A86', strokeWeight: 2 }"
          >
          </gmap-polyline> -->
        </GmapMap>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      location: {
        required: false,
        type: Object,
      },
      locations: {
        type: Array,
      },
      icon: {
        required: false,
        default:'@/assets/media/icons/ui_icons/marker.svg',
      },
      options: {
        required: false,
      },
      path: {
        required: false,
      },
      center: {
        required: false,
      },
    },
  
    data() {
      return {
        // Start:: G-map Data
  
        // End:: G-map Data
        // center: null,
        formatted_address: null,
        markers: [],
        // End:: Request Data
      }
    },
    watch: {
      locations(newVal) {
        if (newVal) {
          this.markers = newVal
        }
      },
    },
    methods: {
      getAddress() {
        var self = this
        var input = this.$refs.searchTextField2 // var searchBox = new google.maps.places.Autocomplete(input)
        var searchBox = new google.maps.places.SearchBox(input)
        searchBox.addListener('places_changed', function () {
          var places = searchBox.getPlaces()
          if (places.length == 0) {
            return
          }
          var bounds = new google.maps.LatLngBounds()
          places.forEach(function (place) {
            bounds.extend(place.geometry.location)
            self.formatted_address = place.formatted_address
            self.center = {
              lng: place.geometry.location.lng(),
              lat: place.geometry.location.lat(),
            }
            self.markers = [
              {
                lng: place.geometry.location.lng(),
                lat: place.geometry.location.lat(),
              },
            ]
  
            let locationData = {
              address: place.formatted_address,
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }
            self.$emit('getLoaction', locationData)
          })
        })
      },
      getMarker(e) {
        this.center = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        }
        this.getFormattedAddress(this.center)
      },
      getLocation() {
        if (navigator.geolocation && !this.location) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            this.getFormattedAddress(this.center)
          })
        //   if (!this.center) {
        //     this.center = {
        //       lat: 31,
        //       lng: 31,
        //     }
        //   }
        }
      },
      getFormattedAddress(event) {
        const myAPIKey = 'AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA'
  
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.lat},${event.lng}&sensor=false&key=${myAPIKey}&&language=${this.$i18n.locale}`
        )
          .then((res) => res.json())
          .then((data) => {
            // this.formatted_address = data.results[0].formatted_address
            let locationData = {
              // address: this.formatted_address,
              lat: event.lat,
              lng: event.lng,
            }
            this.$emit('getLoaction', locationData)
          })
      },
    },
    mounted() {
      if (this.location) {
        this.center = this.location
      } else {
        this.getLocation()
      }
      if (this.locations) {
        this.markers = this.locations
      }
    },
    created() {},
  }
  </script>
  <style lang="scss" scoped>
  // Start Map  Styling
  .map_container {
    margin-bottom: 1rem;
  }
  .map_search_input {
    width: 35%;
    margin: 0;
    outline: none;
    border-radius: 4px 20px 20px 4px;
    background: #fff;
    font-size: 14px;
    margin-block-end: 8px;
    // font-family: $semi_bold_font;
    // border: 1px solid var(--deactive_button_bg);
    line-height: 40px;
    padding-inline-start: 15px !important;
    padding-inline-end: 15px !important;
  }
  .page_map_wrapper {
    border-radius: 10px;
    overflow: hidden;
    height: 300px;
  }
  // Start Map  Styling
  </style>
  <style lang="scss">
  .page_map_wrapper {
    .GMap__Wrapper {
      height: 300px !important;
    }
  }
  </style>
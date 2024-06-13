<template>
    <div class="flex items-center justify-center py-11 bg-white">
        <div class="image_loader">
      <img
        width="400"
        height="400"
        class="max-w-full h-auto"
        src="~/assets/images/logo/loader.png"
        alt="loader"
      />
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  @keyframes loder {
    from {
      transform: scale(0.4);
    }
    to {
      transform: scale(0.9);
    }
  }
  
  .image_loader {
    height: 600px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeInAnimation ease-in-out alternate infinite 3s;
    img {
      // animation: loder 3s ease-in-out alternate infinite;
      width: auto !important;
    }
  }
  
  @keyframes fadeInAnimation {
      30% {
          opacity: 0.3;
      }
      100% {
          opacity: 1;
       }
  }
  </style>
  
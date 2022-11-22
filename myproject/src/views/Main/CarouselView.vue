<template>
    <div class="container mx-auto relative">
        <div class="flex items-center justify-between absolute inset-0 w-full h-full">
            <button @click="showPrev" role="button" aria-label="slide forward" class=" z-30  ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width='24px' height='24px' viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="white" stroke-width='2' stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button @click="showNext" role="button" aria-label="slide forward" class=" z-30  mr-16 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width='24px' height='24px' viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="white" stroke-width='2' stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            <div class="slider">
                <div class="slide-ana">
                    <VueSlickCarousel v-bind="settings" ref="carousel">
                        <CarouselItemVue v-for="movie in genreMovies" :key="movie.mid" :movie="movie" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import CarouselItemVue from "./CarouselItem.vue";
export default {
    name: "CarouselView",
    components: { 
        VueSlickCarousel,
        CarouselItemVue, 
    },
    props: {
        genreMovies: Array,
    },

    data() {
        return {
            settings: {
                dots: false,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 0,
                slidesToScroll: 1,
                touchThreshold: 5
            },
            windowWidth: window.innerWidth,
        }
    },
    methods: {
        showNext() {
            this.$refs.carousel.next();
        },
        showPrev() {
            this.$refs.carousel.prev();
        },
    },
    mounted(){
        if(this.windowWidth>1339){
            this.settings.slidesToShow = 4.5
        }else if(this.windowWidth>1079){
            this.settings.slidesToShow = 3.1
        }else if(this.windowWidth>767){
            this.settings.slidesToShow = 2.2
        }else{
            this.settings.slidesToShow = 1
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap');
@import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
.slider {
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
}
.slide-ana {
    height: 600px;
}
.slide-ana>div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}
@media (min-width: 300px) and (max-width: 884px) {
    .slider {
        height: 550px;
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .slider {
        height: 581px;
    }
}
@media (min-width: 1024px) and (max-width: 1280px) {
    .slider {
        height: 379px;
    }
}
.slider2 {
    width: 100%;
    height: 395px;
    position: relative;
    overflow: hidden;
}
.slide-ana2 {
    height: 100%;
}
.slide-ana2>div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}
@media (min-width: 300px) and (max-width: 1023px) {
    .slider2 {
        height: 378px;
    }
}
</style>
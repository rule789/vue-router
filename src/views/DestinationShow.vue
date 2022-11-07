<template>
    <div>
        <section class="destination" v-if="destination">
            <h2>{{destination.name}}</h2>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" alt="destination.name">
                <p>{{destination.description}}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experience in {{destination.name}}</h2>
            <div class="cards">
                <router-link 
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{
                        name: 'experience.show',
                        params: {
                            experienceSlug: experience.slug
                        }
                    }"
                >
                    <ExperienceCard  :experience="experience" />
                </router-link>
            </div>
            <router-view></router-view>
        </section>
        
    </div>
</template>

<script>
// import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

// 用 api 取資料
export default {
    components: {ExperienceCard, GoBack},
    data(){
        return {
            destination: {
                name: ''
            }
        }
    },
    async created(){
        // api 非同步
        await this.getInitData();
    },
    methods: {
        // 裡面有打 api 非同步的步驟
        async getInitData(){
            const reponse = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`);
            this.destination = await reponse.json();
        }
    },
    // 用 data.json 撈資料
    // computed: {
    //     destinationId(){
    //         console.log(this.$route.params);
    //         return parseInt(this.$route.params.id)
    //     },
    //     destination(){
    //         return sourceData.destinations.find((destination) => destination.id === this.destinationId)
    //     }
    // }

}
</script>
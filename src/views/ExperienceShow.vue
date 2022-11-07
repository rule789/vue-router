<template>
    <section>
        <h1>{{experience.name}}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{experience.description}}</p>
    </section>
</template>

<script>
import sourceData from '@/data.json'

export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
        experienceSlug: {
            type: String,
            required: true,
        }
    },
    computed: {
        // 給下面 experience 用的
        destination(){
            return sourceData.destinations.find((destination) => {
                return destination.id === this.id
            });
        },
        experience(){
            return this.destination.experiences.find((experience) => experience.slug === this.experienceSlug);
        }
    }
}
</script>
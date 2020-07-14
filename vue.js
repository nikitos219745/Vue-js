Первая секция(куда нужно импортировать )
/* eslint-disable */
<template>
    <section class="info-section">
        <div class="info-section__container">
            <h2 class="h2">{{dataSkills.section_title}}</h2>
            <p class="text-white">{{dataSkills.section_description}}</p>
            <div class="info-section__features">
                <div v-for="(skillsCard, index) in skillsCards" :key="index" class="info-section__item">
                    <info-card :card="skillsCard"></info-card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>


    import InfoCard from '~/components/InfoCard.vue'
    import EcommerceSection from './EcommerceSection' ***** ВОТ ЭТА ЗАЛУПА!!!!****
    /*Our company experienced with the insurance industry and e-commerce
    Ecommerce*/

    export default {
        components: {
            InfoCard,

        },

        props: {
            // eslint-disable-next-line vue/require-default-prop,vue/require-prop-types
            dataSkills: {
                title: {
                    type: String,
                    required: true,
                    default: ''
                },

                shortDescription: {
                    type: String,
                    required: true,
                    default: ''
                },
            },

            skillsCards: {
                type: Array,
                required: true
            }

        },

        data() {
            return {

            }
        }
    }


</script>

<style lang="scss">
    .info-section {
        position: relative;
        max-width: 100%;
        width: 100%;
        min-width: 320px;

        .info-section__container {
            width: 100%;
            height: 100%;
            transition: all 0.2s ease;
        }

        &__features {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            border: solid 1px rgba(255,255,255,0.15);
            border-radius: 0.25em;
            background: rgba(255,255,255,0.05);
        }

        &__item {
            position: relative;
            width: 100%;
            padding: 1.5em 1em 0.1em 1.5em;
            border-top: solid 1px rgba(255,255,255,0.15);
            border-left-width: 0;

            &:first-child {
                border-top-width: 0;
            }

        }
    }

    @media (min-width: 768px) {
        .info-section__item {
            padding: 2em 1.5em 0.1em 2.5em;
        }
    }

    @media (min-width: 992px) {
        .info-section__item {
            padding: 3em 2.5em 1em 3em;
            width: 50%;

            &:nth-child(-n + 2) {
                border-top-width: 0;
            }

            &:nth-child(2n) {
                border-left: solid 1px rgba(255,255,255,0.15);
            }
        }
    }
</style>










Вторая секция (ее нужно импортнуть)
<template>
    <styled-container>
        <styled-title>{{ ecommerce.title }}</styled-title>
        <styled-discription>{{ ecommerce.shortDescription }}</styled-discription>
        <styled-img
            :src="ecommerce.photoUrl"
        />
    </styled-container>
</template>
<script>
    import styled from 'vue-styled-components'
    import breakpoints from './elements/Breakpoints'

    const StyledContainer = styled.div`
    padding: 20px 25px 0px 25px;
    margin: 0 auto;
    border: 3px solid  #e881ad;
    display: block;
    width: 470px;
    height: 230px;
    background-color: rgb(203,20,142);

    @media (min-width: ${breakpoints.sm}px) {
            padding: 20px 20px 0px;
            max-width: 320px;
            height: 200px;
            border: 3px solid  #e881ad;
            border-radius: 0.25em;
    }
    @media  (min-width: ${breakpoints.md}px) {
            padding: 20px 30px 0px 25px;
            max-width: 400px;
            height: 230px;
            border: 3px solid  #e881ad;
            border-radius: 0.25em;
    }
    @media (min-width: ${breakpoints.lg}px) {
            padding: 20px 30px 0px 25px;
            margin: 0 auto;
            border: 3px solid  #e881ad;
            display: block;
            max-width: 440px;
            max-height: 230px;
            background-color:rgb(203,20,142);
            border-radius: 0.25em;
    }
    @media  (min-width: ${breakpoints.xl}px) {
            padding: 20px 25px 0px 25px;
            margin: 0 auto;
            border: 3px solid  #e881ad;
            display: block;
            max-width: 470px;
            max-height: 250px;
            height: 250px;
            background-color:rgb(203,20,142);
            border-radius: 0.25em;
    }


    `
    const StyledTitle = styled.h1`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: white;
    font-weight: 500;
    font-family: Arial;
    position: relative;
    font-size: 38px;
    text-transform: uppercase;

    @media  (min-width: ${breakpoints.sm}px) {
            font-size: 25px;
    }
    @media (min-width: ${breakpoints.md}px) {
            font-size: 33px;
    }
    @media (min-width: ${breakpoints.lg}px) {
            color: white;
            font-weight: 500;
            font-family: Arial;
            position: relative;
            font-size: 33px;
            text-transform: uppercase;
    }
    @media (min-width: ${breakpoints.xl}px) {
            color: white;
            font-weight: 500;
            font-family: Arial;
            position: relative;
            font-size: 38px;
            text-transform: uppercase;
    }
    `

    const StyledDiscription = styled.div`
    padding-top: 20px;
    line-height: 1.4;
    position: absolute;
    width: 260px;
    color: white;
    font-weight: 500;
    font-family: Arial;
    font-size: 18px;
    text-transform: uppercase;

    @media  (min-width: ${breakpoints.sm}px) {
            font-size: 14px;
            width: 150px;
            padding-top: 15px;
            line-height: 1.4;
    }
    @media (min-width: ${breakpoints.md}px) {
            line-height: 1.2;
            font-size: 17.5px;
            width: 200px;
            padding-top: 25px;
    }
    @media (min-width: ${breakpoints.lg}px) {
            padding-top: 20px;
            line-height: 1.4;
            position: absolute;
            max-width: 250px;
            color: white;
            font-weight: 500;
            font-family: Arial;
            font-size: 16px;
            text-transform: uppercase;
    }
    @media (min-width: ${breakpoints.xl}px) {
            padding-top: 20px;
            line-height: 1.4;
            position: absolute;
            width: 260px;
            color: white;
            font-weight: 500;
            font-family: Arial;
            font-size: 18px;
            text-transform: uppercase;
    }
    `
    const StyledPhoto = styled.img`
    height: 190px;
    margin-left: 250px;
    margin-top: -50px;

    @media  (min-width: ${breakpoints.sm}px) {
            height: 120px;
            margin: 20px 0px 0px 173px;
    }
    @media (min-width: ${breakpoints.md}px) {
            height: 180px;
            margin: -25px 0px 0px 186px;
    }
    @media (min-width: ${breakpoints.lg}px) {
            height: 190px;
            margin-left: 220px;
            margin-top: -40px;
    }
    @media (min-width: ${breakpoints.xl}px) {
            height: 190px;
            margin-left: 250px;
            margin-top: -30px;
    }
    `
    export default {
        components: {
            'styled-title': StyledTitle,
            'styled-container': StyledContainer,
            'styled-discription': StyledDiscription,
            'styled-img': StyledPhoto

        },
        props: {
            ecommerce: {
                type: Object,
                required: true,

                title: {
                    type: String,
                    required: true,
                    default: ''

                },
                shortDescription: {
                    type: String,
                    required: true,
                    default: ''
                },
                photoUrl: {
                    type: String,
                    required: true,
                    default: ''
                }
            }
        },

        data() {
            return {
                StyledContainer,
                StyledTitle,
                StyledDiscription,
                StyledPhoto
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>

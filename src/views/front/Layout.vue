<template>
    <div>
        <loading :active.sync="isLoading" :is-full-page="true">
            <CandleLoading/>
        </loading>
        <Alert/>
        <Nav/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Alert from '@/components/AlertMessage';

import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        Nav,
        Footer,
        Alert
    },
    computed: {
        ...mapGetters(['isLoading'])
    }
}
</script>
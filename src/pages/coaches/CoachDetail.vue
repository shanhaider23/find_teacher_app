<template>
    <section><base-card>
        <h2> {{ fullName }}</h2>
        <h3> {{ rate }}/hour</h3>
       </base-card>
    </section>
    
    <section>
        <base-card>
    <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink"> Contact</base-button>
    </header>
    </base-card>
    </section>
    <section>
    <base-card>
    
    
    <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    <p>{{ description }}</p>
    </base-card>
    </section>
    
    <router-link to="/coaches/c1/contact"></router-link>
</template>
<script>
export default {
    props:['id']
}
</script>
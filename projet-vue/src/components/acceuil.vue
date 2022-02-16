<template>
    <div>
        <h1>AWA</h1>
        <p @click="increment"> vous avez cliquez {{total}} fois.</p>
    </div>
</template> 

<script>
export default {
    name:'acceuil',
    data(){
        return{
            total:0 
            }
        },
        methods: {
            increment(){
                this.total+=1;
            }

        }
    }
</script>

<style scoped>

</style>

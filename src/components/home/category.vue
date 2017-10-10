<template>
    <div>
        <h3>产品类别: </h3><span>{{type}}</span> 
    </div>
</template>
<script>
    export default {
        data (){
            return {
                type: this.$route.query['type'],
            }
        }
    }
</script>
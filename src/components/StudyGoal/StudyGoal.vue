<template>
  <p>{{studyGoal}}</p>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data (){
          return{
          }
        },
        computed :{
          ...mapState(['studyGoal']),
          studyGoal : function (){
            return this.$store.state.class.classGoal
          }
         }
}
</script>

<style scoped>

</style>

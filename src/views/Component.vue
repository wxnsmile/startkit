<template>
  <div class="home">组件</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  created() {
    console.log(this)
    this.$api.userinfo
      .userList({ a: 1, b: 2 })
      .then((data: any) => {})
      .catch((err: any) => {
        console.log(err)
      })
  }
}
</script>

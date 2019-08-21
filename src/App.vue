<template>
  <div id="app">
    <div id="nav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <template v-for="(tab, index) in tabs">
          <el-tab-pane :key="index" :label="tab.label" :name="tab.name">
            <router-view />
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'component',
      tabs: [
        { label: '组件', name: 'component' },
        { label: '文档', name: 'document' },
        { label: '区块', name: 'block' },
        { label: '模版', name: 'template' }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push(this.tabs[tab.index].name)
    }
  }
}
</script>

<style lang="scss"></style>

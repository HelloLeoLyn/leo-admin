<template>
  <div class="app-container">
    <el-table :data="data" border stripe>
      <el-table-column v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width">
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  name: 'LeoImageUpload',
  data() {
    return {
      data:[]
    };
  },
};
</script>
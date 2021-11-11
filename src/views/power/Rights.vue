<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片的视图 -->
    <el-card>
      <el-table
        :data="rightsList"
        border
        stripe
        row-key="id"
        :tree-props="{ children: 'children' }"
      >
        <!-- <el-table-column type="index" label="#"></el-table-column> -->
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template v-slot="scope">
            <el-tag v-if="scope.row.pid.toString().length === 1">一级</el-tag>
            <el-tag v-else-if="scope.row.pid.toString().length === 3" type="success"
              >二级</el-tag
            >
            <el-tag v-else type="warning">三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRightsList } from "@/api/index.js";

export default {
  name: "Rights",
  components: {},
  data() {
    return {
      // 权限列表
      rightsList: [],
    };
  },
  methods: {
    // 获取权限列表
    async getRightsList() {
      const { data: res } = await getRightsList("tree");
      if (res.meta.status !== 200) {
        return this.$error("获取权限列表失败！");
      } else {
        console.log(res.data);
        this.rightsList = res.data;
        // this.$success(res.meta.msg);
      }
    },
  },
  created() {
    this.getRightsList();
  },
};
</script>

<style lang="less" scoped>
</style>
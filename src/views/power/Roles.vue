<template>
  <div>
     <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片的视图 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="rolesList" border stripe>
        <el-table-column type="expand">
          
        </el-table-column>
       <el-table-column type="index"></el-table-column>
       <el-table-column label="角色名称" prop="roleName"></el-table-column>
       <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
       <el-table-column label="操作" width="260px">
         <template v-slot="">
           <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
           <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
           <el-button size="mini" type="warning" icon="el-icon-setting">分配</el-button>

         </template>
       </el-table-column>
       
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRolesList } from '@/api/index.js'
export default {  
  data() {
    return {
      // 角色列表
      rolesList: [],
    }
  },
  methods: {
    async getRolesList() {
      const { data: res } = await getRolesList();
      console.log(res);
      if (res.meta.status !== 200) {
        return this.$error('获取角色列表失败！');
      } else {
        this.rolesList = res.data;
        // this.$success(res.meta.msg);
      }
    }
  },
  created() {
    this.getRolesList();
  }
}
</script>

<style lang="less" scoped>

</style>
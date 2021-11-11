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
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="rolesList" border stripe>
        <el-table-column type="expand">
          <template v-slot="scope">
            <el-row
              class="first-private flex"
              v-for="item1 in scope.row.children"
              :key="item1.id"
            >
              <!-- 渲染一级权限 -->
              <el-col :span="5">
                <el-tag
                  closable
                  @close="removeRightById(scope.row, item1.id)"
                  >{{ item1.authName }}</el-tag
                >
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二三级权限 -->
              <el-col :span="19">
                <!-- 渲染二级权限 -->
                <el-row
                  class="second-private flex"
                  v-for="item2 in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="removeRightById(scope.row, item2.id)"
                      >{{ item2.authName }}</el-tag
                    >
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      type="warning"
                      closable
                      @close="removeRightById(scope.row, item3.id)"
                      >{{ item3.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="260px">
          <template v-slot="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" icon="el-icon-delete"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="showRightDialog(scope.row)"
              >分配</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <right-setting-dialog
      :showDialog="isRightSettingShow"
      :defKeys="defKeys"
      :role="role"
      @closeRightSettingDialog="closeRightSettingDialog"
      @getRolesList="getRolesList"
    ></right-setting-dialog>
  </div>
</template>

<script>
import { getRolesList, delRolesById } from "@/api/index.js";

import RightSettingDialog from "./RightSettingDialog.vue";
export default {
  name: "Roles",
  components: {
    RightSettingDialog,
  },
  data() {
    return {
      // 角色列表
      rolesList: [],
      isRightSettingShow: false,
      defKeys: [],
      role: {},
    };
  },
  methods: {
    showRightDialog(role) {
      this.getLeafKeys(role, this.defKeys);
      this.isRightSettingShow = true;
      this.role = role;
    },
    closeRightSettingDialog() {
      this.isRightSettingShow = false;
      this.defKeys = [];
    },
    async getRolesList() {
      const { data: res } = await getRolesList();
      console.log(res);
      if (res.meta.status !== 200) {
        return this.$error("获取角色列表失败！");
      } else {
        this.rolesList = res.data;
      }
    },
    // 根据ID删除对应权限
    async removeRightById(role, rightId) {
      const confirmRes = await this.$confirm("确认删除吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).catch(() => {
        this.$info("删除取消！");
      });
      if (confirmRes === "confirm") {
        const { data: res } = await delRolesById(role.id, rightId);
        console.log(res);
        if (res.meta.status !== 200) {
          return this.$error("删除权限失败！");
        }
        this.$success("删除成功");
        role.children = res.data;
      }
    },

    // 通过递归调用，获取三级权限的id并保存在defKeys中
    getLeafKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id);
      }

      node.children.forEach((item) => this.getLeafKeys(item, arr));
    },
  },
  created() {
    this.getRolesList();
  },
};
</script>

<style lang="less" scoped>
.first-private,
.second-private {
  border-bottom: 1px solid #eee;
}
.first-private:first-child {
  border-top: 1px solid #eee;
}
.second-private:last-child {
  border-bottom: none;
}
.el-tag {
  margin: 7px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
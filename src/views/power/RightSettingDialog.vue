<template>
  <div>
    <el-dialog
      title="分配权限"
      :visible.sync="showDialog"
      width="50%"
      :before-close="setRightDialogVisible"
      :close-on-click-modal="false"
    >
      <el-tree
        :data="rightList"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        default-expand-all
        ref="tree"
        :default-checked-keys="defKeys"
        highlight-current
        :check-on-click-node="true"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="setRightDialogVisible">取 消</el-button>
        <el-button size="small" type="primary" @click="setAllRights"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRightsList, setRoleRights } from "@/api/index.js";

export default {
  name: "RightSettingDialog",
  components: {},
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
    defKeys: {
      type: Array,
      default: () => [],
    },
    role: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      rightList: [],
      defaultProps: {
        children: "children",
        label: "authName",
      },
    };
  },
  watch: {
    showDialog(val) {
      if (val) {
        this.$nextTick(() => {
          this.setCheckedKeys();
        })
      }
    },
  },
  methods: {
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys(this.defKeys);
    },
    setRightDialogVisible() {
      this.$emit("closeRightSettingDialog");
    },
    // 获取权限列表
    async getRightList() {
      const { data: res } = await getRightsList("tree");
      console.log("right", res);
      if (res.meta.status !== 200) {
        this.$error(res.meta.msg);
      }
      this.rightList = res.data;
    },

    // 分配权限
    async setAllRights() {
      const keys = [
        ...this.$refs.tree.getCheckedKeys(),
        ...this.$refs.tree.getHalfCheckedKeys(),
      ];
      const keysStr = keys.join(',');
      const { data: res } = await setRoleRights(this.role.id, keysStr);
      this.$success(res.meta.msg)
      this.$emit('getRolesList');
      this.setRightDialogVisible();
    },
  },
  created() {
    this.getRightList();
  },
};
</script>

<style lang="less" scoped>
</style>
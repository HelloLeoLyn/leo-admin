<template>
  <div class="leo-quote-history">
    <el-drawer title="我嵌套了表格!" :visible.sync="show" :direction="direction" size="60%"
      :with-header="false">
      <el-tabs style="padding-left:20px;" v-model="activeName" type="card" tabPosition="top">
        <el-button @click="doSearch()" class="el-icon-search" type="primary">Search</el-button>
        <el-tab-pane name="in" label="入库记录">
          <pagination v-show="inTable.total>0" :total="inTable.total" :page.sync="inTable.current"
            :limit.sync="inTable.size" @pagination="doSearch()" />
          <el-table border :data="inbound" style="width: 100%" height="400">
            <el-table-column label="类型" prop="type" align="center" :formatter="typeFormatter"
              fixed="left" />
            <el-table-column label="进价" prop="purchasePrice" align="center" fixed="left" />
            <el-table-column label="数量" prop="amount" align="center" fixed="left" />
            <el-table-column label="单位" prop="unit" align="center" />
            <el-table-column label="出库时间" prop="createTime" align="center" width="200px" />
            <el-table-column label="售价" prop="sellingPrice" align="center" />
            <el-table-column label="订单号" prop="orderId" align="center" width="200px" />
            <el-table-column label="供应方" prop="customer" align="center" />
            <el-table-column label="备注" prop="remark" align="center" />
            <el-table-column label="结款方式" prop="purchaseType" align="center" />
            <el-table-column label="送货方式" prop="shipping" align="center" />
            <el-table-column label="nno" prop="nno" align="center" />
          </el-table>

        </el-tab-pane>
        <el-tab-pane label="出库记录" name="out">
          <pagination v-show="outTable.total>0" :total="outTable.total"
            :page.sync="outTable.current" :limit.sync="outTable.size" @pagination="doSearch()" />
          <el-table border :data="outbound" style="width: 100%;" height="400"
            @row-dblclick="handleOutDbclick">
            <!-- <el-table-column label="id" prop="id" align="center" /> -->
            <el-table-column label="类型" prop="type" align="center" :formatter="typeFormatter"
              fixed="left" />
            <el-table-column label="售价" prop="sellingPrice" align="center" fixed="left" />
            <el-table-column label="数量" prop="amount" align="center" fixed="left" />
            <el-table-column label="单位" prop="unit" align="center" />
            <el-table-column label="出库时间" prop="createTime" align="center" width="200px" />
            <el-table-column label="进价" prop="purchasePrice" align="center" />
            <el-table-column label="订单号" prop="orderId" align="center" width="200px" />
            <el-table-column label="客户" prop="customer" align="center" />
            <el-table-column label="备注" prop="remark" align="center" />
            <el-table-column label="oe" prop="nno" align="center" />
            <el-table-column label="操作" align="center" v-if="rowAction">
              <template slot-scope="{row}">
                <el-button @click="handleRowConfirmClick(row)">确认</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane name="quote" label="报价记录">
          <pagination v-show="quoteTable.total>0" :total="quoteTable.total"
            :page.sync="quoteTable.current" :limit.sync="quoteTable.size"
            @pagination="doSearch()" />
          <el-table border :data="quoteList" style="width: 100%;" height="400"
            @row-dblclick="handleOutDbclick">
            <el-table-column label="类型" prop="type" align="center" :formatter="typeFormatter" />
            <el-table-column label="售价" prop="unitPrice" align="center" />
            <el-table-column label="数量" prop="quantity" align="center" />
            <el-table-column label="单位" prop="unit" align="center" />
            <el-table-column label="报价时间" prop="createTime" align="center" />
            <el-table-column label="报价单号" prop="quoteId" align="center" />
            <el-table-column label="客户/厂家" prop="customer" align="center" />
            <el-table-column label="备注" prop="remark" align="center" />
            <el-table-column label="oe" prop="code" align="center" />
            <el-table-column label="操作" align="center" v-if="rowAction">
              <template slot-scope="{row}">
                <el-button @click="handleRowConfirmClick(row)">确认</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>

</template>
<script>
import { api_warehouse_page } from '@/api/leo-warehouse'
import { api_quote_items_page } from '@/api/leo-quote-items'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  props: {
    productId: {
      type: Number,
      required: true
    },
    quoteId: {
      type: [Number, String],
      required: true
    },
    rowAction: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: () => 'dialog' // dialog drawer window
    },
    direction: {
      type: String,
      default: () => 'rtl' // bottom top left right
    }
  },
  data() {
    return {
      activeName: 'in',
      outbound: [],
      inbound: [],
      quoteList: [],
      show: false,
      inTable: {
        total: 0,
        size: 10,
        current: 0
      },
      outTable: {
        total: 0,
        size: 10,
        current: 0
      },
      quoteTable: {
        total: 0,
        size: 10,
        current: 0
      }
    }
  },
  mounted() {
    if (!this.productId || this.productId < 0) {
      return
    }
    this.show = true
    this.doSearchIn()
    this.doSearchOut()
    this.doSearchQuote()
  },
  methods: {
    typeFormatter(row) {
      if (row.type === '1') {
        return '出库'
      } else {
        return '入库'
      }
    },
    doSearchIn() {
      const param = {
        productId: this.productId,
        size: this.inTable.size,
        current: this.inTable.current,
        type: 0
      }
      api_warehouse_page(param).then((res) => {
        this.inbound = res.data.records
        this.inTable.total = res.data.total
      })
    },
    doSearchOut() {
      const param = {
        productId: this.productId,
        size: this.inTable.size,
        current: this.inTable.current,
        type: 1
      }
      api_warehouse_page(param).then((res) => {
        this.outbound = res.data.records
        this.outTable.total = res.data.total
      })
    },
    doSearchQuote() {
      const param = {
        productId: this.productId,
        size: this.inTable.size,
        current: this.inTable.current,
        type: 1,
        ne: {
          status: 0,
          quoteId: this.quoteId
        }
      }
      api_quote_items_page(param).then((res) => {
        this.quoteList = res.data.records
        this.quoteTable.total = res.data.total
      })
    },
    doSearch() {
      if (this.activeName == 'in') {
        this.doSearch()
      } else if (this.activeName == 'out') {
        this.doSearchOut()
      } else if (this.activeName == 'quote') {
        this.doSearchQuote()
      }
    },

    handleOutDbclick(row, column) {
      this.$emit('onOutRowDbclick', row, column)
    },
    handleRowConfirmClick(row) {
      this.$emit('onConfirmClick', row)
    },
    handleConfirmClick() {
      const data = {}
      this.$emit('onConfirmClick', data)
    }
  }
}
</script>
<style lang="scss">
.leo-quote-history {
  .el-drawer__body {
    overflow: unset;
  }
}
</style>
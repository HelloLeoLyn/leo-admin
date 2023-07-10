// Just a mock data

const asyncRoutes = [
  {
    path: '/leo-system',
    component: 'layout/Layout',
    meta: { title: '系统管理', icon: 'icon' },
    name: 'LeoSystem',
    children: [
      {
        path: 'user',
        component: '/leo-system/user',
        name: 'LeoSystemUser',
        meta: { title: '用户管理', icon: 'peoples' }
      },
      {
        path: 'detail/:id',
        component: '/leo-system/user-detail',
        name: 'LeoSystemUserDetail',
        hidden: true,
        meta: { title: '用户详情', icon: 'peoples' }
      },
      {
        path: 'role',
        component: '/leo-system/role',
        name: 'LeoSystemRole',
        meta: { title: '角色管理', icon: 'peoples' }
      },
      {
        path: 'menu',
        component: '/leo-system/menu',
        name: 'LeoSystemMenu',
        meta: { title: '菜单管理', icon: 'peoples' }
      },
      {
        path: 'setting',
        component: '/leo-system-setting/index',
        name: 'LeoSystemSetting',
        meta: { title: '系统设置', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    path: '/leo-work',
    component: 'layout/Layout',
    meta: { title: '工作管理', icon: 'icon' },
    name: 'LeoWork',
    children: [
      {
        path: 'index',
        component: '/leo-work/index',
        name: 'LeoWorkIndex',
        meta: { title: '工作管理', icon: 'icon' }
      },
      {
        path: 'current',
        component: '/leo-work/current',
        name: 'LeoWorkCurrent',
        meta: { title: '今日任务', icon: 'icon' }
      },
    ]
  },
  {
    path: '/leo-product',
    component: 'layout/Layout',
    meta: { title: '产品管理', icon: 'icon' },
    name: 'LeoProduct',
    children: [
      {
        path: 'index',
        component: '/leo-product/index',
        name: 'LeoProductIndex',
        meta: { title: '产品', icon: 'icon' }
      },
      {
        path: 'detail/:id',
        component: '/leo-product/detail',
        name: 'LeoProductDetail',
        hidden: true,
        meta: { title: '详情', icon: 'detial' }
      },
      {
        path: 'collection',
        component: '/leo-product/collection',
        name: 'LeoProductCollection',
        meta: { title: '采集管理', icon: 'icon' }
      },
      {
        path: 'history',
        component: '/leo-product/history',
        name: 'LeoProductHistory',
        meta: { title: '出入库记录', icon: 'icon' }
      },
    ]
  },
  {
    path: '/leo-quote',
    component: 'layout/Layout',
    meta: { title: '报价管理', icon: 'icon' },
    name: 'LeoQuote',
    children: [
      {
        path: 'quote',
        component: '/leo-quote/index',
        name: 'LeoQuoteIndex',
        meta: { title: '报价管理', icon: 'icon' }
      },
      {
        path: 'do-quote/:id',
        component: '/leo-quote/do-quote',
        name: 'LeoQuoteDoQuote', hidden: true,
        meta: { title: '报价处理', icon: 'icon' }
      }
    ]
  },
  {
    path: '/leo-warehouse',
    component: 'layout/Layout',
    meta: { title: '仓库管理', icon: 'icon' },
    name: 'LeoWarehouse',
    children: [
      {
        path: 'stock',
        component: '/leo-stock/index',
        name: 'LeoWarehouseStock',
        meta: { title: '库存', icon: 'icon' }
      },
      {
        path: 'history',
        component: '/leo-warehouse/history',
        name: 'LeoWarehouseHistory',
        meta: { title: '出入库记录', icon: 'icon' }
      },
      {
        path: 'in',
        component: '/leo-warehouse/in',
        name: 'LeoWarehouseIn',
        meta: { title: '入库', icon: 'icon' }
      },
      {
        path: 'image',
        component: '/leo-warehouse/image',
        name: 'LeoWarehouseImage',
        meta: { title: '图片扫描', icon: 'icon' }
      },
      {
        path: 'history/:productId',
        component: '/leo-warehouse/components/LeoHistory',
        name: 'LeoWarehouseIndexHistory',
        hidden: true,
        meta: { title: '出入库记录', icon: 'detial' }
      },
    ]
  },
  {
    path: '/leo-image',
    component: 'layout/Layout',
    meta: { title: '图片管理', icon: 'icon' },
    name: 'leoImage',
    children: [
      {
        path: 'upload',
        component: '/leo-image/upload',
        name: 'LeoImageUpload',
        meta: { title: '图片上传', icon: 'icon' }
      },
      {
        path: 'autoPs',
        component: '/leo-image/autoPs',
        name: 'LeoImageAutoPs',
        meta: { title: '智能修图', icon: 'icon' }
      },
    ]
  },
  {
    path: '/leo-dev-tools',
    component: 'layout/Layout',
    meta: { title: '开发工具', icon: 'icon' },
    name: 'LeoDevTools',
    children: [
      {
        path: 'cropper',
        component: '/leo-dev-tools/cropper/index',
        name: 'Cropper',
        meta: { title: 'cropper', icon: 'icon' }
      },
      {
        path: 'auto-code',
        component: '/leo-dev-tools/auto-code/index',
        name: 'AutoCode',
        meta: { title: 'auto-code', icon: 'icon' }
      },
      {
        path: 'formatter',
        component: '/leo-dev-tools/formatter',
        name: 'LeoFormatter',
        meta: { title: 'formatter', icon: 'icon' }
      },
      {
        path: 'module-component',
        component: '/leo-dev-tools/module-component',
        name: 'ModuleComponent',
        meta: { title: 'ModuleComponent', icon: 'icon' }
      },
      {
        path: 'sql',
        component: '/leo-dev-tools/sql',
        name: 'sql',
        meta: { title: 'Sql', icon: 'icon' }
      },
      {
        path: 'env-setting',
        component: '/leo-dev-tools/env-setting',
        name: 'env-setting',
        meta: { title: 'env-setting', icon: 'icon' }
      },
      {
        path: 'postman',
        component: '/leo-dev-tools/postman',
        name: 'postman',
        meta: { title: 'postman', icon: 'icon' }
      },
      {
        path: 'vue-generator',
        component: '/leo-dev-tools/vue-generator',
        name: 'vue generator',
        meta: { title: 'vue generator', icon: 'icon' }
      },
      {
        path: 'table-info',
        component: '/leo-dev-tools/table-info',
        name: 'TableInfo',
        meta: { title: 'Table Info', icon: 'icon' }
      },
    ]
  },
  {
    path: '/table',
    component: 'layout/Layout',
    redirect: '/table/complex-table',
    name: 'Table',
    hidden: true,
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'dynamic-table',
        component: '/table/dynamic-table/index',
        name: 'DynamicTable',
        meta: { title: 'Dynamic Table' }
      },
      {
        path: 'drag-table',
        component: '/table/drag-table',
        name: 'DragTable',
        meta: { title: 'Drag Table' }
      },
      {
        path: 'inline-edit-table',
        component: '/table/inline-edit-table',
        name: 'InlineEditTable',
        meta: { title: 'Inline Edit' }
      },
      {
        path: 'complex-table',
        component: '/table/complex-table',
        name: 'ComplexTable',
        meta: { title: 'Complex Table' }
      }
    ]
  },
  {
    path: '/permission',
    component: 'layout/Layout',
    redirect: '/permission/index',
    // alwaysShow: true,
    hidden: true,
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: '/permission/page',
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: '/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
        }
      },
      {
        path: 'role',
        component: '/permission/role',
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: 'layout/Layout',
    name: 'Icon',
    meta: { title: 'Icons', icon: 'icon', noCache: true },
    hidden: true,
    children: [
      {
        path: 'index',
        component: '/icons/index',
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  {
    path: '/components',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    hidden: true,
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'tinymce',
        component: '/components-demo/tinymce',
        name: 'TinymceDemo',
        meta: { title: 'Tinymce' }
      },
      {
        path: 'markdown',
        component: '/components-demo/markdown',
        name: 'MarkdownDemo',
        meta: { title: 'Markdown' }
      },
      {
        path: 'json-editor',
        component: '/components-demo/json-editor',
        name: 'JsonEditorDemo',
        meta: { title: 'Json Editor' }
      },
      {
        path: 'split-pane',
        component: '/components-demo/split-pane',
        name: 'SplitpaneDemo',
        meta: { title: 'SplitPane' }
      },
      {
        path: 'avatar-upload',
        component: '/components-demo/avatar-upload',
        name: 'AvatarUploadDemo',
        meta: { title: 'Avatar Upload' }
      },
      {
        path: 'dropzone',
        component: '/components-demo/dropzone',
        name: 'DropzoneDemo',
        meta: { title: 'Dropzone' }
      },
      {
        path: 'sticky',
        component: '/components-demo/sticky',
        name: 'StickyDemo',
        meta: { title: 'Sticky' }
      },
      {
        path: 'count-to',
        component: '/components-demo/count-to',
        name: 'CountToDemo',
        meta: { title: 'Count To' }
      },
      {
        path: 'mixin',
        component: '/components-demo/mixin',
        name: 'ComponentMixinDemo',
        meta: { title: 'componentMixin' }
      },
      {
        path: 'back-to-top',
        component: '/components-demo/back-to-top',
        name: 'BackToTopDemo',
        meta: { title: 'Back To Top' }
      },
      {
        path: 'drag-dialog',
        component: '/components-demo/drag-dialog',
        name: 'DragDialogDemo',
        meta: { title: 'Drag Dialog' }
      },
      {
        path: 'drag-select',
        component: '/components-demo/drag-select',
        name: 'DragSelectDemo',
        meta: { title: 'Drag Select' }
      },
      {
        path: 'dnd-list',
        component: '/components-demo/dnd-list',
        name: 'DndListDemo',
        meta: { title: 'Dnd List' }
      },
      {
        path: 'drag-kanban',
        component: '/components-demo/drag-kanban',
        name: 'DragKanbanDemo',
        meta: { title: 'Drag Kanban' }
      }
    ]
  },
  {
    path: '/charts',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Charts',
    hidden: true,
    meta: {
      title: 'Charts',
      icon: 'chart'
    },
    children: [
      {
        path: 'keyboard',
        component: '/charts/keyboard',
        name: 'KeyboardChart',
        meta: { title: 'Keyboard Chart', noCache: true }
      },
      {
        path: 'line',
        component: '/charts/line',
        name: 'LineChart',
        meta: { title: 'Line Chart', noCache: true }
      },
      {
        path: 'mixchart',
        component: '/charts/mixChart',
        name: 'MixChart',
        meta: { title: 'Mix Chart', noCache: true }
      }
    ]
  },
  {
    path: '/nested',
    component: 'layout/Layout',
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    hidden: true,
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: '/nested/menu1/index',
        name: 'Menu1',
        meta: { title: 'Menu1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: '/nested/menu1/menu1-1',
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: '/nested/menu1/menu1-2',
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: '/nested/menu1/menu1-2/menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: '/nested/menu1/menu1-2/menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: '/nested/menu1/menu1-3',
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: '/nested/menu2/index',
        meta: { title: 'Menu2' }
      }
    ]
  },

  {
    path: '/example',
    component: 'layout/Layout',
    redirect: '/example/list',
    name: 'Example',
    hidden: true,
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: '/example/create',
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: '/example/edit',
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: '/example/list',
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: 'layout/Layout',
    name: 'Tab',
    hidden: true,
    meta: { title: 'Tab', icon: 'tab' },
    children: [
      {
        path: 'index',
        component: '/tab/index',
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    hidden: true,
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: '/error-page/401',
        name: 'Page401',
        meta: { title: 'Page 401', noCache: true }
      },
      {
        path: '404',
        component: '/error-page/404',
        name: 'Page404',
        meta: { title: 'Page 404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: 'layout/Layout',
    name: 'ErrorLog',
    meta: { title: 'Error Log', icon: 'bug' },
    redirect: 'noRedirect',
    hidden: true,
    children: [
      {
        path: 'log',
        component: '/error-log/index',
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: 'layout/Layout',
    redirect: '/excel/export-excel',
    name: 'Excel',
    hidden: true,
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: '/excel/export-excel',
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: '/excel/select-excel',
        name: 'SelectExcel',
        meta: { title: 'Select Excel' }
      },
      {
        path: 'export-merge-header',
        component: '/excel/merge-header',
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: '/excel/upload-excel',
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: 'layout/Layout',
    redirect: '/zip/download',
    alwaysShow: true,
    hidden: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: '/zip/index',
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: 'layout/Layout',
    redirect: '/pdf/index',
    hidden: true,
    name: 'PDF',
    meta: { title: 'PDF', icon: 'pdf' },
    children: [
      {
        path: 'index',
        component: '/pdf/index',
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      },
      {
        path: 'download',
        component: '/pdf/download',
        name: 'PDFDownload',
        meta: { title: 'PDFDownload', icon: '' },
        hidden: true
      },
    ]
  },

  {
    path: '/theme',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Theme',
    hidden: true,
    meta: { title: 'Theme', icon: 'theme' },
    children: [
      {
        path: 'index',
        component: '/theme/index',
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },
  {
    path: '/clipboard',
    hidden: true,
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Clipboard',
    meta: { title: 'Clipboard Demo', icon: 'clipboard' },
    children: [
      {
        path: 'index',
        component: '/clipboard/index',
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard Demo', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/i18n',
    hidden: true,
    component: 'layout/Layout',
    name: 'I18n',
    meta: { title: 'I18n', icon: 'international' },
    children: [
      {
        path: 'index',
        component: '/i18n-demo/index',
        name: 'I18n',
        meta: { title: 'I18n', icon: 'international' }
      }
    ]
  },

  {
    path: 'external-link',
    hidden: true,
    component: 'layout/Layout',
    meta: { title: 'External Link', icon: 'link' },
    name: 'ExternLink',
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' },
        name: 'ExternLink'
      }
    ]
  },
]
const constantRoutes = [
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: '/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: '/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: '/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: '/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: '/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: '/dashboard/index',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: 'index',
        component: '/documentation/index',
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: 'layout/Layout',
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: '/guide/index',
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  }
]
module.exports = {
  constantRoutes,
  asyncRoutes
}

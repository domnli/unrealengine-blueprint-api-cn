const { path } = require('@vuepress/utils')

module.exports = {
    themeConfig:{
        sidebarDepth:0,
        sidebar:[{
            text:'蓝图 API 索引',
            children:[{text:'工具集',link:'/utilities'},{text:'数学',link:'/math'}]
        }]
    },
    plugins: [
        [
          '@vuepress/register-components',
          {
            componentsDir: path.resolve(__dirname, './components'),
          },
        ],
        [{extendsMarkdown: (md) => {
            md.use(require('markdown-it-imsize'))
          },},true]
      ]
}
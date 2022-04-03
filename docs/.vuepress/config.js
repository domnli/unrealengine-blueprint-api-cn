const { path } = require('@vuepress/utils')

module.exports = {
    themeConfig:{
        sidebar:[{
            text:'蓝图 API 索引'
        }]
    },
    plugins: [
        [
          '@vuepress/register-components',
          {
            componentsDir: path.resolve(__dirname, './components'),
          },
        ],
      ]
}
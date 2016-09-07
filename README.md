src                                // 业务代码目录
 |--actions                        // 定义 Redux 的各个 action
 |--components                     // 定义项目中的各个组件，里面可能有很多个子文件夹
 |--config                         // 项目配置，无具体规定，自由发挥
 |--constants                      // 定义 Redux 中用到的各个常量
 |--container                      // 定义项目中的所有的页面
 |--fetch                          // 定义项目中所有数据获取、提交的方法
 |--reducers                       // 定义 Redux 的 reducer 规则
 |--router                         // 定义项目中的 router 规则
 |--store                          // 定义 Redux 的全局 store 对象
 |--util                           // 工具函数，例如时间格式的处理等
 `--index.jsx                      // 入口，被 ../index.html 引用
asset                              // 静态资源目录
mocha                              // 测试用例
.gitignore
index.html
package.json
README.md
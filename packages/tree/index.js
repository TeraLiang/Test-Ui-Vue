import Tree from './main'

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree

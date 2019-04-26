import Header from './header/index'
import AmountBox from './amount-box/index'
import Tree from './tree/index'

const components = [
  Header,
  AmountBox,
  Tree
]

export default {
  install: function (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

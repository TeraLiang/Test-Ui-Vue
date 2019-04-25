import Header from './header/index'
import AmountBox from './amount-box/index'

const components = [
  Header,
  AmountBox
]

export default {
  install: function (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

import Header from './main'

Header.install = function (Vue) {
  Vue.component(Header.name, Header)
}

export default Header

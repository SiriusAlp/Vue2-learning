export default {
  // 在slot部分为其设置name属性,使其成为具名插槽
  // 未指定name的插槽 等价于name="default"
  // 关于插槽作用域,在模板的slop声明中,通过属性绑定的形式将子组件的数据暴露出去
  template: `
  <div class="container">
    <header>
      <slot name="header" :private="privateName"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer >
      <slot name="footer"></slot>
    </footer>
  </div>`,
  data(){
    return {
      privateName: "Wang"
    }
  }
};

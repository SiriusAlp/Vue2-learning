export default {
  template: `
  <ul>
    <li>{{name}}</li>
    <li v-if="age">{{age}}</li>
    <li>{{id}}</li>
    <ul v-if="favs.length">
      <li v-for="item in favs">{{item}}</li>
    </ul>
  </ul>
  `,
  data() {
    return {
      post: {},
    };
  },
  props: {
    name: {
      //指定prop数据类型
      type: String,
      //指定默认值
      default: "luke",
    },
    age: {
      type: Number,
      //自定义验证函数
      validator(value) {
        return value > 0 && value < 150;
      },
    },
    id: {
      type: String,
      required: true,
    },
    favs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};

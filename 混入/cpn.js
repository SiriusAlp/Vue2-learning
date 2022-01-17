import mixina from "./mixina.js";
export default {
  template: `
    <div>
      <h1>cpn test</h1>
      <button @click="conflicting">测试mixin重复方法</button>
      <span>测试重复属性 {{name}}</span>
    </div>
    `,
  mixins: [mixina],
  data() {
    return {
      name: "cpn",
    };
  },
  created() {
    console.log("created of cpn");
  },
  methods: {
    conflicting() {
      alert("confliction from cpn");
    },
  },
};

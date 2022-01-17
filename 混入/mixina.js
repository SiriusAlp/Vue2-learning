export default {
  data(){
    return {
      name: 'mixina'
    }
  },
  methods: {
    foo(){
      console.log('foo from mixin-a');
    },
    conflicting(){
      alert('confliction from mixina');
    }
  },
  created(){
    console.log('created of mixina');
  },
  
}
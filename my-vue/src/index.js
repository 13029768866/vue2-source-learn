import Vue from 'vue'

let vm = new Vue({
  el:'#app',
  data(){
    return {
      msg: 'hello',
      info: {
        name: 'wzj',
        age: 18
      },
      arr: [1,2,3]
    }
  }
})
console.log(vm.arr.push(123),vm.arr)
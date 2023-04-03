class Test {
    fun1(a){
        console.log(a)
    }
  static  async  fun2(b){
        console.log('this is fine 7')
        await console.log(b)
        console.log('this is fine 9')
    }
   static fun3 (){
        console.log('this is fine 12')
        this.fun2(5)
        console.log('this is fine 14')
    }

}
// let inst= new Test()
// inst.fun3() 
Test.fun3()
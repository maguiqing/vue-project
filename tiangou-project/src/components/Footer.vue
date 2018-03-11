<template>
   <footer>
           <ul class="footerul">
              <li>
                 <i class="iconfont icon-chuanzhongshangdian"></i>
                 <span>逛商场</span>
              </li>
              <li>
                 <i class="iconfont icon-icon-"></i>
                 <span>发现</span>
              </li>
              <li>
                 <i class="iconfont icon-gouwu"></i>
                 <span>购物</span>
              </li>
              <li>
                 <i class="iconfont icon-daohanghaiwaigou"></i>
                 <span>海外购</span>
              </li>
              <li>
                 <i class="iconfont icon-wode"></i>
                 <span>我的</span>
              </li>
           </ul>
     </footer>
</template> 
<script >
   export default{
       name:'Footer',
       data(){
         return{

         }
       }
   }
</script>
<style >
 footer{
   position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: .49rem;
    border-top: .01rem solid #ccc;
    font-size: .14rem;
}
.footerul{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
}
.footerul li{
  display: flex;
  flex-direction: column;
  justify-content: center;
 align-items: center;
}
.footerul .iconfont{
  font-size: .24rem;
}
.footerul span{
  display: block;
}
</style>
    
(function(){"use strict";var t={2482:function(t,e,o){var r=o(9242),n=o(3396);const i={class:"corpo mt-5"};function s(t,e,o,r,s,a){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(c)])}var a=(0,n.aZ)({name:"App",components:{},data(){return{}}}),c=o(89);const l=(0,c.Z)(a,[["render",s]]);var d=l,u=o(2483),p=o(7139);const h={class:"titulo"},v={class:"table table-striped"},m=(0,n._)("th",null,"Nome",-1),y={class:"text-end"},_={class:"text-end"};function b(t,e,o,r,i,s){const a=(0,n.up)("BotaoComponent");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",h,(0,p.zw)(t.titulo),1),(0,n._)("table",v,[(0,n._)("thead",null,[(0,n._)("tr",null,[m,(0,n._)("th",y,[(0,n.Wm)(a,{tipo:"button",estilo:"btn-success",icone:"bi bi-plus",rotulo:"a",link:"cadastrarLista"})])])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.invenctorysComFiltro,((e,o)=>((0,n.wg)(),(0,n.iD)("tr",{key:o},[(0,n._)("td",null,(0,p.zw)(e.title),1),(0,n._)("td",_,[(0,n.Wm)(a,{tipo:"button",estilo:"btn-primary",icone:"bi bi-eye",rotulo:"visualizar",link:"list",id:e.id,invenctory:e},null,8,["id","invenctory"]),(0,n.Wm)(a,{tipo:"button",onMetodoBotao:o=>t.atualizar(o,e),estilo:"btn-warning",icone:"bi bi-pencil-square",rotulo:"atualizar",link:"edit",id:e.id,invenctory:e},null,8,["onMetodoBotao","id","invenctory"]),(0,n.Wm)(a,{tipo:"button",onMetodoBotao:o=>t.deletar(o,e),estilo:"btn-danger",icone:"bi bi-trash",rotulo:"deletar",id:e.id,invenctory:e},null,8,["onMetodoBotao","id","invenctory"])])])))),128))])])])}function f(t,e,o,r,i,s){return(0,n.wg)(),(0,n.iD)("a",{onClick:e[0]||(e[0]=(...e)=>t.metodoBotao&&t.metodoBotao(...e)),class:(0,p.C_)(["btn ms-1",t.estiloDoBotao])},[(0,n._)("i",{class:(0,p.C_)(t.icone)},null,2)],2)}var g=(0,n.aZ)({name:"BotaoComponent",props:{tipo:{type:String,required:!0},rotulo:{type:String,required:!0},confirmacao:Boolean,estilo:String,icone:String,id:Number,invenctory:{type:Object,required:!1},link:String},methods:{metodoBotao(){this.link?this.$router.push({name:this.link,params:{id:this.id,title:this.invenctory?.title}}):this.$emit("metodoBotao",this.invenctory)}},computed:{estiloDoBotao(){return this.estilo?this.estilo:"btn-primary"}}});const w=(0,c.Z)(g,[["render",f]]);var k=w,S=o(3891),C=o(6265),D=o.n(C);class x{constructor(){(0,S.Z)(this,"_resource",void 0),this._resource="https://markethistoric.herokuapp.com"}get(t){return D().get(this._resource+`/v1/invenctory/${t}`)}lista(){return D().get(this._resource+"/v1/invenctory")}add(t,e){return D().post(this._resource+"/v1/invenctory",{name:t,products:e})}update(t,e){return D().put(this._resource+`/v1/invenctory/${t}`,{name:e.name,products:e.products})}delete(t){return D()["delete"](this._resource+`/v1/invenctory/${t}`)}details(t){return D().get(this._resource+`/v1/invenctory/${t}/list`)}}var N=(0,n.aZ)({name:"HomeComponent",props:{recarregar:Boolean},components:{BotaoComponent:k},data(){return{titulo:"Marcket Lists",invenctorys:[],filtro:"",inventoryService:new x}},computed:{invenctorysComFiltro(){return this.invenctorys}},methods:{loadListas(){this.inventoryService.lista().then((t=>this.invenctorys=t.data))},deletar(t,e){this.inventoryService.delete(e.id).then((()=>{this.invenctorys.splice(this.invenctorys.indexOf(e),1)}))}},created(){this.loadListas()}});const B=(0,c.Z)(N,[["render",b]]);var O=B;const z=t=>((0,n.dD)("data-v-2a76fa8f"),t=t(),(0,n.Cn)(),t),Z=z((()=>(0,n._)("div",{id:"modal"},null,-1))),$={key:0,class:"centralizado"},j={class:"table table-striped table-hover"},H=z((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-start"},"Nome"),(0,n._)("th",{class:"text-end"},"No carrinho")])],-1))),P={class:"text-start"},M={class:"text-end"},L=["onClick"];function I(t,e,o,r,i,s){const a=(0,n.up)("History"),c=(0,n.up)("b-overlay"),l=(0,n.Q2)("b-modal");return(0,n.wg)(),(0,n.iD)("div",null,[Z,t.invenctory_title?((0,n.wg)(),(0,n.iD)("h1",$,(0,p.zw)(t.invenctory_title),1)):(0,n.kq)("",!0),(0,n._)("table",j,[H,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.invenctory_product,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",P,[(0,n.wy)(((0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(e.product_name)+" ",1),(0,n.Wm)(a,{id:"button_"+e.product_id,product_name:e.product_name,product_id:parseInt(e.product_id)},null,8,["id","product_name","product_id"])])),_:2},1024)),[[l,"button_"+e.product_id]])]),(0,n._)("td",M,[(0,n._)("button",{onClick:o=>t.addRemoveCart(e),class:(0,p.C_)(["btn",t.noCarrinhoBotao(e.checked)])},[(0,n._)("i",{class:(0,p.C_)(["bi",t.noCarrinho(e.checked)])},null,2)],10,L)])])))),128))])])])}class q{constructor(){(0,S.Z)(this,"_resource",void 0),this._resource="https://markethistoric.herokuapp.com"}put(t){return D().put(this._resource+`/v1/invenctory/cart/${t}`)}remove(t){return D()["delete"](this._resource+`/v1/invenctory/cart/${t}`)}}const U={class:"d-flex justify-content-end mb-3"},E={class:"input-group"},W=(0,n._)("i",{class:"bi bi-plus"},null,-1),R=[W];function V(t,e,o,i,s,a){const c=(0,n.up)("b-accordion-item"),l=(0,n.up)("b-accordion"),d=(0,n.up)("b-modal");return(0,n.wg)(),(0,n.j4)(d,{title:t.product_name},{default:(0,n.w5)((()=>[(0,n._)("div",U,[(0,n._)("div",E,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.historyDescription=e),class:"form-control",type:"text",placeholder:"description"},null,512),[[r.nr,t.historyDescription]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.historyPrice=e),class:"form-control",type:"number",placeholder:"R$ 99,99"},null,512),[[r.nr,t.historyPrice]]),(0,n._)("button",{onClick:e[2]||(e[2]=(...e)=>t.add&&t.add(...e)),class:"btn btn-primary"},R)])]),(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.product_history,((t,e)=>((0,n.wg)(),(0,n.j4)(c,{title:t.data+" - "+this.toMonney(t.price),key:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(t.description),1)])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["title"])}class K{constructor(){(0,S.Z)(this,"_resource",void 0),this._resource="https://markethistoric.herokuapp.com"}lista(){return D().get(this._resource+"/v1/product")}history(t){return D().get(this._resource+`/v1/product/${t}/history`)}addHistory(t,e){return D().post(this._resource+`/v1/product/${t}/history`,{price:e.price,description:e.description})}}var Y=o(936),F=(0,n.aZ)({name:"HistoryComponent",components:{BModal:Y.Nk},props:{product_id:{type:Number,required:!0},product_name:String,product:{price:Number,description:String,date:Date}},data(){return{product_history:[],historyDescription:"",historyPrice:"",productService:new K}},computed:{estiloDoBotao(){return this.estilo?this.estilo:"btn-primary"}},methods:{toMonney(t){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t)},loadHistory(t){this.productService.history(t).then((t=>{this.product_history=t.data}))},add(){const t=this.historyDescription,e=this.historyPrice,o={description:t,price:e};this.productService.addHistory(this.product_id,o).then((()=>{this.product_history.unshift({product_id:this.product_id,price:o.price,description:o.description,data:(new Date).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),product_name:this.product_name}),this.historyPrice="",this.historyDescription=""}))}},created(){this.loadHistory(this.product_id)}});const T=(0,c.Z)(F,[["render",V]]);var A=T,Q=(0,n.aZ)({name:"ListComponent",components:{History:A},props:{id:{type:String,required:!1},title:{type:String,required:!1}},data(){return{invenctory_product:[],inventoryService:new x,cartService:new q,invenctory_id:this.id||"0",invenctory_title:this.title||""}},methods:{noCarrinho(t){return parseInt(t)?"bi-cart-check-fill":"bi-cart"},noCarrinhoBotao(t){return parseInt(t)?"btn-secondary":"btn-light"},addRemoveCart(t){const e=this.invenctory_product.indexOf(t);let o=this.invenctory_product[e];const r=o.checked;1!==parseInt(r)?this.cartService.put(t.id).then((()=>this.list())):this.cartService.remove(t.id).then((()=>this.list())),this.$router.replace("/list")},list(){const t=parseInt(this.invenctory_id);this.inventoryService.details(t).then((t=>this.invenctory_product=t.data))}},created(){this.list()}});const G=(0,c.Z)(Q,[["render",I],["__scopeId","data-v-2a76fa8f"]]);var J=G;const X=t=>((0,n.dD)("data-v-59c54e9c"),t=t(),(0,n.Cn)(),t),tt={class:"form-label centralizado"},et={class:"input-group"},ot=X((()=>(0,n._)("hr",null,null,-1))),rt={class:"table table-striped table-hover"},nt=X((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-start"},"Produto"),(0,n._)("th",{class:"text-end"},"Selecione o produto")])],-1))),it={class:"text-start"},st={class:"text-end"},at=["value"],ct={class:"d-grid gap-2 mb-5"};function lt(t,e,o,i,s,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",tt,(0,p.zw)(s.listName||"Digite o nome da lista..."),1),(0,n._)("div",et,[(0,n.wy)((0,n._)("input",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>s.listName=t),id:"nomelista",type:"text",placeholder:"Nome da Lista"},null,512),[[r.nr,s.listName]])]),ot,(0,n._)("table",rt,[nt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.product_list,((t,o)=>((0,n.wg)(),(0,n.iD)("tr",{key:o},[(0,n._)("td",it,(0,p.zw)(t.name),1),(0,n._)("td",st,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",value:t.id,name:"list[]","onUpdate:modelValue":e[1]||(e[1]=t=>s.selecionados=t)},null,8,at),[[r.e8,s.selecionados]])])])))),128))])]),(0,n._)("div",ct,[(0,n._)("button",{onClick:e[2]||(e[2]=e=>t.$router.push("/")),type:"button",class:"btn btn-warning"},"Cancelar"),(0,n._)("button",{onClick:e[3]||(e[3]=(...t)=>a.salvar&&a.salvar(...t)),type:"button",class:"btn btn-primary"},"Salvar")])])}var dt={props:{id:Number},name:"AddComponent",data(){return{listName:"",product_list:[],selecionados:[],inventoryService:new x,productService:new K}},methods:{salvar(){const t=this.listName,e=this.selecionados;this.inventoryService.add(t,e).then((()=>this.$router.replace("/")))},listar(){this.productService.lista().then((t=>this.product_list=t.data))}},created(){this.listar()}};const ut=(0,c.Z)(dt,[["render",lt],["__scopeId","data-v-59c54e9c"]]);var pt=ut;const ht=t=>((0,n.dD)("data-v-0c463974"),t=t(),(0,n.Cn)(),t),vt={class:"form-label centralizado"},mt={class:"input-group"},yt=ht((()=>(0,n._)("hr",null,null,-1))),_t={class:"table table-striped table-hover"},bt=ht((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Produto"),(0,n._)("th",{class:"text-end"},"Selecione o produto")])],-1))),ft={class:"text-end"},gt=["value"],wt={class:"d-grid gap-2 mb-5"};function kt(t,e,o,i,s,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",vt,(0,p.zw)(t.listName||"Digite o nome da lista..."),1),(0,n._)("div",mt,[(0,n.wy)((0,n._)("input",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.listName=e),id:"nomelista",type:"text",placeholder:"Nome da Lista"},null,512),[[r.nr,t.listName]])]),yt,(0,n._)("table",_t,[bt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.product_list,(o=>((0,n.wg)(),(0,n.iD)("tr",{key:o.id},[(0,n._)("td",null,(0,p.zw)(o.name),1),(0,n._)("td",ft,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",value:o.id,name:"list[]","onUpdate:modelValue":e[1]||(e[1]=e=>t.selecionados=e)},null,8,gt),[[r.e8,t.selecionados]])])])))),128))])]),(0,n._)("div",wt,[(0,n._)("button",{onClick:e[2]||(e[2]=e=>t.$router.push("/")),type:"button",class:"btn btn-warning"},"Cancelar"),(0,n._)("button",{onClick:e[3]||(e[3]=(...e)=>t.atualizar&&t.atualizar(...e)),type:"button",class:"btn btn-primary"},"Salvar")])])}var St=(0,n.aZ)({name:"EditComponent",props:{id:{type:Number,required:!0}},data(){return{listName:"",product_list:[],invenctory_products:[],invenctory_id:this.id,selecionados:[],inventoryService:new x,productService:new K}},methods:{atualizar(){const t=this.listName,e=this.selecionados;this.inventoryService.update(this.id,{name:t,products:e}).then((()=>this.$router.replace("/")))}},created(){const t=this.invenctory_id;this.inventoryService.get(t).then((t=>this.listName=t.data.title)),this.inventoryService.details(t).then((t=>{this.invenctory_products=t.data,this.invenctory_products.forEach((t=>{this.selecionados.push(parseInt(t.product_id))}),this)})),this.productService.lista().then((t=>this.product_list=t.data))}});const Ct=(0,c.Z)(St,[["render",kt],["__scopeId","data-v-0c463974"]]);var Dt=Ct;const xt=[{path:"/",name:"home",component:O,titulo:"Home"},{path:"/list",name:"list",component:J,titulo:"List",props:!0},{path:"/cadastrarLista",name:"cadastrarLista",component:pt,titulo:"Add",props:!0},{path:"/edit",name:"edit",component:Dt,titulo:"EditComponent",props:!0}],Nt=(0,u.p7)({history:(0,u.PO)(),routes:xt});var Bt=Nt,Ot=o(6423);const zt=(0,r.ri)(d);zt.use(Y.ZP),zt.use(Bt),zt.use(Ot.Z,D()),zt.mount("#app")}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,function(){o.amdO={}}(),function(){var t=[];o.O=function(e,r,n,i){if(!r){var s=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],i=t[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var d=c(o)}for(e&&e(r);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},r=self["webpackChunkhello"]=self["webpackChunkhello"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2482)}));r=o.O(r)})();
//# sourceMappingURL=app.f061ecd6.js.map
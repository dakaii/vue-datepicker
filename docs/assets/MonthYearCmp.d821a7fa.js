import f from"./ChevronLeftIcon.36e39d4f.js";import _ from"./ChevronRightIcon.87153d3c.js";import{g as C,r as i,o as r,c as l,a as s,F as m,y as c,b as d,z as p}from"./app.11732b8b.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const I=C({components:{ChevronLeftIcon:f,ChevronRightIcon:_},emits:["update:month","update:year"],props:{months:{type:Array,default:()=>[]},years:{type:Array,default:()=>[]},filters:{type:Object,default:null},monthPicker:{type:Boolean,default:!1},month:{type:Number,default:0},year:{type:Number,default:0}},setup(e,{emit:o}){const u=(n,a)=>{o("update:month",n),o("update:year",a)};return{onNext:()=>{let n=e.month,a=e.year;e.month===11?(n=0,a=e.year+1):n+=1,u(n,a)},onPrev:()=>{let n=e.month,a=e.year;e.month===0?(n=11,a=e.year-1):n-=1,u(n,a)}}}}),N={class:"month-year-wrapper"},k={class:"custom-month-year-component"},b=["value"],$=["value"],j=["value"],L=["value"],P={class:"icons"};function B(e,o,u,v,h,n){const a=i("ChevronLeftIcon"),y=i("ChevronRightIcon");return r(),l("div",N,[s("div",k,[s("select",{class:"select-input",value:e.month,onChange:o[0]||(o[0]=t=>e.$emit("update:month",+t.target.value))},[(r(!0),l(m,null,c(e.months,t=>(r(),l("option",{key:t.value,value:t.value},p(t.text),9,$))),128))],40,b),s("select",{class:"select-input",value:e.year,onChange:o[1]||(o[1]=t=>e.$emit("update:year",+t.target.value))},[(r(!0),l(m,null,c(e.years,t=>(r(),l("option",{key:t.value,value:t.value},p(t.text),9,L))),128))],40,j)]),s("div",P,[s("span",{class:"custom-icon",onClick:o[2]||(o[2]=(...t)=>e.onPrev&&e.onPrev(...t))},[d(a)]),s("span",{class:"custom-icon",onClick:o[3]||(o[3]=(...t)=>e.onNext&&e.onNext(...t))},[d(y)])])])}var F=g(I,[["render",B]]);export{F as default};
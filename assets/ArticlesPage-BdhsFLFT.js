import{j as s,P as o,r as l,u as m,a as d,b as x,N as n,d as _,f as h,e as j}from"./index-B5TcMwld.js";const g=t=>{const{id:a,name:r,size:c,year:e}=t;return s.jsxs("div",{className:"articles-item",children:[s.jsx("div",{className:"articles-item__picbox",children:s.jsx("img",{className:"articles-item__picbox__pic",src:`/pictures/bigl_${a}.jpg`,alt:""})||s.jsx(o,{})}),s.jsxs("div",{children:[s.jsx("h3",{className:"colorLight",children:r}),s.jsx("h4",{className:"colorLight",children:e}),s.jsx("h4",{className:"colorLight",children:c})]})]})},N=l.memo(()=>{const{leng:t}=m(),a=d(t,_,j,h),[r,c]=l.useState(0),{id:e}=x();return console.log(e),l.useEffect(()=>{e==="micro"&&c(0),e==="macro"&&c(1)},[e]),s.jsxs("article",{className:"articles",children:[s.jsxs("div",{className:"articles__text",children:[s.jsx(n,{className:"sidebar__linkbox__link",to:"/art/micro",children:a[0].title}),s.jsx(n,{className:"sidebar__linkbox__link",to:"/art/macro",children:a[1].title})]}),s.jsx("div",{className:"articles__itembox",children:a[r].img.map(i=>s.jsx(g,{id:i.id,size:i.size,year:i.year,name:i.name},i.id))})]})});export{N as ArticlesPage,N as default};

import{b as n,j as s,L as m,r,u as d,a as x,N as o,d as h,f as _,e as g}from"./index-DwJkKGEL.js";const j=l=>{const{id:a,name:t,size:c,year:i}=l,{section:e}=n();return console.log(e),s.jsxs("div",{className:"articles-item",children:[s.jsx("div",{className:"articles-item__picbox",children:s.jsx(m,{to:`/big/${a}`,children:s.jsx("img",{className:"articles-item__picbox__pic",src:`/pictures/bigl_${a}.jpg`,alt:""})})}),s.jsxs("div",{children:[s.jsx("h3",{className:"colorLight",children:t}),s.jsx("h4",{className:"colorLight",children:i}),s.jsx("h4",{className:"colorLight",children:c})]})]})},N=r.memo(()=>{const{leng:l}=d(),a=x(l,h,g,_),[t,c]=r.useState(0),{section:i}=n();return console.log(i),r.useEffect(()=>{i==="micro"&&c(0),i==="macro"&&c(1)},[i]),s.jsxs("article",{className:"articles",children:[s.jsxs("div",{className:"articles__text",children:[s.jsx(o,{className:"sidebar__linkbox__link cyrillicbold",to:"/art/micro",children:a[0].title}),s.jsx(o,{className:"sidebar__linkbox__link cyrillicbold",to:"/art/macro",children:a[1].title})]}),s.jsx("div",{className:"articles__itembox",children:a[t].img.map(e=>s.jsx(j,{id:e.id,size:e.size,year:e.year,name:e.name},e.id))})]})});export{N as ArticlesPage,N as default};
import{b as o,j as s,L as m,r,u as d,a as x,N as n,d as h,f as _,e as g}from"./index-ClFNpD6u.js";const j=t=>{const{id:a,name:l,size:c,year:i}=t,{section:e}=o();return console.log(e),s.jsxs("div",{className:"articles-item",children:[s.jsx("div",{className:"articles-item__picbox",children:s.jsx(m,{to:`/big/${a}`,children:s.jsx("img",{className:"articles-item__picbox__pic",src:`/pictures/bigl_${a}.jpg`,alt:""})})}),s.jsxs("div",{children:[s.jsx("h3",{className:"colorLight",children:l}),s.jsx("h4",{className:"colorLight",children:i}),s.jsx("h4",{className:"colorLight",children:c})]})]})},N=r.memo(()=>{const{leng:t}=d(),a=x(t,h,g,_),[l,c]=r.useState(0),{section:i}=o();return console.log(i),r.useEffect(()=>{i==="micro"&&c(0),i==="macro"&&c(1)},[i]),s.jsxs("article",{className:"articles",children:[s.jsxs("div",{className:"articles__text",children:[s.jsx(n,{className:"sidebar__linkbox__link",to:"/art/micro",children:a[0].title}),s.jsx(n,{className:"sidebar__linkbox__link",to:"/art/macro",children:a[1].title})]}),s.jsx("div",{className:"articles__itembox",children:a[l].img.map(e=>s.jsx(j,{id:e.id,size:e.size,year:e.year,name:e.name},e.id))})]})});export{N as ArticlesPage,N as default};

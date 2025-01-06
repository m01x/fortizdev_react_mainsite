"use strict";(self.webpackChunkinbio_gatsby=self.webpackChunkinbio_gatsby||[]).push([[4674],{9152:function(e,a,t){var l=t(7294),n=(t(9311),t(7250));const s=e=>{let{image:a,name:t,path:s,...c}=e;return l.createElement("div",Object.assign({className:"main-content"},c),l.createElement("div",{className:"inner text-center"},(null==a?void 0:a.src)&&l.createElement("div",{className:"thumbnail"},l.createElement("a",{href:s},l.createElement(n.Z,{src:a.src,alt:(null==a?void 0:a.alt)||t}))),l.createElement("div",{className:"seperator"}),l.createElement("div",{className:"client-name"},l.createElement("span",null,l.createElement("a",{href:s},t)))))};s.defaultProps={path:"#!"},a.Z=s},4945:function(e,a,t){var l=t(7294),n=t(7250),s=t(93),c=t(4095),i=t(6010);t(9311);a.Z=e=>{let{className:a,image:t,title:o,subtitle:r,desc:m,phone:d,email:v,socials:u}=e;return l.createElement("div",{className:(0,i.Z)("contact-about-area",a)},(null==t?void 0:t.src)&&l.createElement("div",{className:"thumbnail"},l.createElement(n.Z,{src:t.src,alt:"contact-img"})),l.createElement("div",{className:"title-area"},o&&l.createElement("h4",{className:"title"},o),r&&l.createElement("span",null,r)),l.createElement("div",{className:"description"},m&&l.createElement("p",null,m),d&&l.createElement("span",{className:"phone"},"Phone: ",l.createElement("a",{href:"tel:"+d},"+",d)),v&&l.createElement("span",{className:"mail"},"Email: ",l.createElement("a",{href:"mailto:"+v},v))),u&&l.createElement("div",{className:"social-area"},l.createElement("div",{className:"name"},"SIGUEME EN "),l.createElement(s.Z,{className:"social-icone"},u.map((e=>l.createElement(s.I,{key:e.id,path:e.path},l.createElement(c.Z,{name:e.icon})))))))}},2753:function(e,a,t){var l=t(7294),n=t(6502),s=t(9152);t(9311);const c=e=>{var a;let{data:t,id:c}=e;return l.createElement("div",{id:c,className:"rn-client-area rn-client-style-2 rn-section-gap section-separator"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},(null==t?void 0:t.section_title)&&l.createElement(n.Z,Object.assign({"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",align:"center"},t.section_title)),l.createElement("div",{className:"skill-style-1"},l.createElement("div",{className:"client-card"},null==t||null===(a=t.items)||void 0===a?void 0:a.map((e=>{var a;return l.createElement(s.Z,{key:e.id,image:null==e||null===(a=e.images)||void 0===a?void 0:a[0],name:e.title,"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true"})}))))))))};c.defaultProps={id:"client"},a.Z=c},5570:function(e,a,t){var l=t(7294),n=t(6502),s=(t(7798),t(4945));t(9311);const c=e=>{var a,t,c,i;let{data:o,id:r}=e;return l.createElement("div",{className:"rn-contact-area rn-section-gap section-separator",id:r},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},(null==o?void 0:o.section_title)&&l.createElement(n.Z,Object.assign({},o.section_title,{align:"center"})))),l.createElement("div",{className:"row mt--50 mt_md--40 mt_sm--40 mt-contact-sm"},l.createElement("div",{className:"col-lg-8 mx-auto"},l.createElement(s.Z,{image:null==o||null===(a=o.images)||void 0===a?void 0:a[0],title:null==o||null===(t=o.headings)||void 0===t?void 0:t[0].content,subtitle:null==o||null===(c=o.headings)||void 0===c?void 0:c[1].content,desc:null==o||null===(i=o.texts)||void 0===i?void 0:i[0].content,phone:null==o?void 0:o.phone,email:null==o?void 0:o.email,socials:null==o?void 0:o.socials})))))};c.defaultProps={id:"contacts"},a.Z=c},5922:function(e,a,t){var l=t(7294),n=t(4095),s=t(7250),c=t(93);t(9311);const i=e=>{var a,t,i,o,r,m;let{data:d,id:v}=e;return l.createElement("div",{id:v,className:"rn-slider-area"},l.createElement("div",{className:"slide slider-style-4"},(null==d||null===(a=d.images)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.src)&&l.createElement("div",{className:"hero-img"},l.createElement(s.Z,{src:d.images[0].src,alt:(null===(i=d.images[0])||void 0===i?void 0:i.alt)||"Hero Bg"})),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"order-2 order-lg-1 col-lg-9 col-xl-7"},l.createElement("div",{className:"content"},l.createElement("div",{className:"inner mb_sm--80"},(null==d||null===(o=d.headings)||void 0===o?void 0:o[0])&&l.createElement("h1",{className:"title slide-title",dangerouslySetInnerHTML:{__html:null===(r=d.headings[0])||void 0===r?void 0:r.content}}),(null==d||null===(m=d.texts)||void 0===m?void 0:m[0])&&l.createElement("div",null,l.createElement("p",{className:"description"},d.texts[0].content))),l.createElement("div",{className:"row "},l.createElement("div",{className:"col-lg-12 col-xl-6 col-md-12 col-sm-12 col-12"},(null==d?void 0:d.socials)&&l.createElement("div",{className:"social-share-inner-left"},l.createElement("span",{className:"title"},"find with me"),l.createElement(c.Z,null,d.socials.map((e=>l.createElement(c.I,{key:e.id,path:e.path},l.createElement(n.Z,{name:e.icon}))))))))))))))};i.defaultProps={id:"home"},a.Z=i},5057:function(e,a,t){var l=t(7294),n=t(7250),s=t(6502);t(9311);const c=e=>{var a;let{data:t,id:c}=e;return l.createElement("div",{id:c,className:"rn-skill-area rn-section-gap section-separator"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},(null==t?void 0:t.section_title)&&l.createElement(s.Z,Object.assign({"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",className:"text-center"},t.section_title)),l.createElement("div",{className:"mt_md--40 mt_sm--40"},l.createElement("ul",{className:"skill-style-1"},null==t||null===(a=t.items)||void 0===a?void 0:a.map((e=>{var a,t,s;return l.createElement("li",{key:e.id,"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",title:e.title},(null==e||null===(a=e.images)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.src)&&l.createElement(n.Z,{src:e.images[0].src,alt:(null===(s=e.images[0])||void 0===s?void 0:s.alt)||e.title}))}))))))))};c.defaultProps={id:"skill"},a.Z=c},4275:function(e,a,t){var l=t(7294),n=t(6010),s=t(2456),c=t(608),i=t(763),o=t(8402),r=t(9775),m=t(6212);t(9311);a.Z=e=>{var a,t,d,v,u,E,N,g;let{className:p,data:h}=e;const Z=(0,m.Ax)(),{offcanvas:f,offcanvasHandler:b}=(0,m.vI)();return l.createElement(l.Fragment,null,l.createElement("header",{className:(0,n.Z)("rn-header haeder-default black-logo-version header--fixed header--sticky",Z&&"sticky",p)},l.createElement("div",{className:"header-wrapper rn-popup-mobile-menu m--0"},l.createElement("div",{className:"row align-items-center"},l.createElement("div",{className:"col-lg-2 col-6"},l.createElement("div",{className:"header-left"},(null==h||null===(a=h.logo)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.src)&&l.createElement(s.Z,{image:h.logo[0],className:"light-logo"}),(null==h||null===(d=h.logo)||void 0===d||null===(v=d[1])||void 0===v?void 0:v.src)&&l.createElement(s.Z,{image:h.logo[1],className:"dark-logo"}))),l.createElement("div",{className:"col-lg-10 col-6"},l.createElement("div",{className:"header-center"},(null==h?void 0:h.menu)&&l.createElement(c.Z,{className:"d-none d-xl-block",menus:h.menu}),l.createElement("div",{className:"header-right"},(null==h?void 0:h.button)&&l.createElement(r.Z,{path:null===(u=h.button)||void 0===u?void 0:u.path,className:null===(E=h.button)||void 0===E?void 0:E.className},l.createElement("span",null,null===(N=h.button)||void 0===N?void 0:N.content)),l.createElement(o.Z,{className:"d-block d-xl-none",onClick:b}))))))),l.createElement(i.Z,{isOpen:f,onClick:b,menus:null==h?void 0:h.menu,socials:null==h?void 0:h.socials,slogan:null==h?void 0:h.slogan,logo:null==h||null===(g=h.logo)||void 0===g?void 0:g[1]}))}},1497:function(e,a,t){t.r(a);var l=t(7294),n=t(8439),s=t(8427),c=t(4275),i=t(3067),o=t(5922),r=t(5151),m=t(5057),d=t(6952),v=t(98),u=t(2753),E=t(9278),N=t(2850),g=t(8196),p=t(5570);a.default=e=>{var a,t,h,Z,f,b,k;let{data:y}=e;const _=(0,n.normalizedData)((null==y||null===(a=y.homePage)||void 0===a?void 0:a.content)||[]);return l.createElement(s.Z,{pageTitle:"Home Photographer",className:"white-version home-classic"},l.createElement(c.Z,{data:{...y.header,...y.navigation,socials:y.site.siteMetadata.socials}}),l.createElement("main",{className:"main-page-wrapper"},l.createElement(o.Z,{data:{..._["hero-section"],socials:y.site.siteMetadata.socials}}),l.createElement(r.Z,{data:_["about-section"]}),l.createElement(m.Z,{data:_["skill-section"]}),l.createElement(d.Z,{data:_["service-section"]}),l.createElement(v.Z,{data:_["portfolio-section"]}),l.createElement(u.Z,{data:_["client-section"]}),l.createElement(E.Z,{data:_["testimonial-section"]}),l.createElement(N.Z,{data:_["pricing-section"]}),l.createElement(g.Z,{data:{..._["blog-section"],blogs:null==y||null===(t=y.allArticle)||void 0===t?void 0:t.nodes}}),l.createElement(p.Z,{data:{..._["contact-section"],socials:y.site.siteMetadata.socials,phone:null===(h=y.site.siteMetadata)||void 0===h||null===(Z=h.contact)||void 0===Z?void 0:Z.phone,email:null===(f=y.site.siteMetadata)||void 0===f||null===(b=f.contact)||void 0===b?void 0:b.email,getform_url:null===(k=y.site.siteMetadata)||void 0===k?void 0:k.getform_url}})),l.createElement(i.Z,{data:{...y.footer,socials:y.site.siteMetadata.socials},className:"section-separator"}))}}}]);
//# sourceMappingURL=component---src-pages-index-photographer-white-version-jsx-c396bd45ca616b7483e8.js.map
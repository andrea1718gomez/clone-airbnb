__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({primaryPreviewThumbnailUrl:P,primaryCtaAction:T,primaryCtaButton:j,secondaryCtaAction:H,secondaryCtaButton:_,rawTitle:C}){var R;const q=(0,u.useCx)(),D=(0,l.useIsExploreFadeIn)(),w=(0,l.default)(),{href:A,runAction:U,loading:E,loggingData:M}=(0,o.default)(T),{href:B,runAction:W,loading:k,loggingData:L}=(0,o.default)(H),[z]=(0,h.useUIState)(s.AnnouncementCurtainViewedOnClientKey,void 0),[F,$]=(0,t.useState)(!1);let G;if(P){const t=new URL(P);G=`${t.origin}${t.pathname}?im_q=highq&im_w=240`}(0,t.useEffect)(()=>{if(z)$(!0);else if(void 0===z){const t=setTimeout(()=>{F||$(!0)},4e3);return()=>clearTimeout(t)}},[z,F]);const K=f.default.getBootstrap('enable_upfront_pricing_microphone_styles')||'homepage.header.betaProgramAnnouncement_open_megaphone'===(null==T||null===(R=T.loggingData)||void 0===R?void 0:R.loggingId),V=(0,p.shouldShowUpfrontPricingBanner)(),J=(0,t.useMemo)(()=>O(j,K),[K,j]),Q=(0,t.useMemo)(()=>O(_),[_]);if(w&&K&&(V||(0,p.isExcludedGeos)()))return null;return(0,b.jsx)("div",{className:q(D&&v,x),children:(0,b.jsxs)("div",{className:q(y,K&&'price-toggle'),children:[(0,b.jsx)(l.ShimmerIfSkeleton,{children:(0,b.jsx)(n.default,{children:(0,b.jsx)("span",{className:q(N),children:C})})}),(0,b.jsxs)("span",{className:q(I),children:[j&&(0,b.jsx)(c.default,{...J,...M,href:A,loading:E,onPress:U,previewThumbnailUrl:G,shouldLogImpression:F,underlineOnHover:!0}),_&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:q(S)}),(0,b.jsx)(c.default,{...Q,...L,href:B,loading:k,onPress:W,shouldLogImpression:F,underlineOnHover:!0})]})]})]})})};var t=babelHelpers.interopRequireWildcard(r(d[0])),l=(r(d[1]),babelHelpers.interopRequireWildcard(r(d[2]))),n=babelHelpers.interopRequireDefault(r(d[3])),o=babelHelpers.interopRequireDefault(r(d[4])),s=r(d[5]),u=(r(d[6]),r(d[7])),p=(babelHelpers.interopRequireDefault(r(d[8])),r(d[9]),r(d[10])),c=babelHelpers.interopRequireDefault(r(d[11])),f=babelHelpers.interopRequireDefault(r(d[12])),h=r(d[13]),b=r(d[14]);const v="f13odiba",x="s16gufdo",y="c6uors2",I="b34v4vt",S="dh6pwax",N="t1r4m0sf";function O(t,l=!1){return{...l?{backgroundColor:{defaultColor:{hex:'#f7f7f7',alpha:1}},border:{cornerRadius:8},padding:{bottom:{type:'POINTS',value:8},leading:{type:'POINTS',value:8},top:{type:'POINTS',value:8},trailing:{type:'POINTS',value:8}},textStyle:{size:16,letterSpacing:0,lineHeight:20,dlsWeight:'MEDIUM',color:{hex:'#222222',alpha:1},underline:!0}}:{backgroundColor:{defaultColor:{hex:'#f7f7f7',alpha:1}},border:{cornerRadius:8},margin:{leading:{type:'POINTS',value:8},trailing:{type:'POINTS',value:8}},padding:{bottom:{type:'POINTS',value:8},leading:{type:'POINTS',value:8},top:{type:'POINTS',value:8},trailing:{type:'POINTS',value:8}},textStyle:{size:14,letterSpacing:0,lineHeight:18,dlsWeight:'THIN',color:{hex:'#222222',alpha:1}}},...Object.fromEntries(Object.entries(t||{}).filter(([t,l])=>null!=l))}}}),"a97c71",["d7ed8e","f03cc4","658726","4628ac","335598","083ab2","d9d8ee","5f1f1f","a2ecf6","90390a","0733c4","f82c63","6b945b","9e67c0","721ed1"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/homepage-sections/sections/client/AnnouncementCurtainMicrophoneBanner/AnnouncementCurtainMicrophoneBanner.d1f64d30a0.js.map
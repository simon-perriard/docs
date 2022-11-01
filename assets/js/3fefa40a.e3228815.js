"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2768:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={},l="Verifying address ownership for Lido DAO ops",u={unversionedId:"guides/address-ownership-guide",id:"guides/address-ownership-guide",title:"Verifying address ownership for Lido DAO ops",description:'Using EOA across Lido DAO ops or protocol contracts requires providing a public "proof of ownership". Main use-cases here are using address as a signer in Lido DAO ops multisigs or using EOAs for offchain tooling where specific rights might be required.',source:"@site/docs/guides/address-ownership-guide.md",sourceDirName:"guides",slug:"/guides/address-ownership-guide",permalink:"/guides/address-ownership-guide",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/address-ownership-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guide to Easy Track",permalink:"/guides/easy-track-guide"},next:{title:"Guide to being a signer at any Lido DAO multisigs",permalink:"/guides/multisig-signer-manual"}},p=[{value:"Preparing and sharing address &amp; signature",id:"preparing-and-sharing-address--signature",children:[],level:2},{value:"Ethereum signature verification",id:"ethereum-signature-verification",children:[{value:"Etherscan UI",id:"etherscan-ui",children:[],level:3},{value:"MyEtherWallet",id:"myetherwallet",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifying-address-ownership-for-lido-dao-ops"},"Verifying address ownership for Lido DAO ops"),(0,a.kt)("p",null,'Using EOA across Lido DAO ops or protocol contracts requires providing a public "proof of ownership". Main use-cases here are using address as a signer in Lido DAO ops multisigs or using EOAs for offchain tooling where specific rights might be required.'),(0,a.kt)("h2",{id:"preparing-and-sharing-address--signature"},"Preparing and sharing address & signature"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign the message along the lines of ",(0,a.kt)("inlineCode",{parentName:"li"},"@my_social_handle is looking to join X Lido DAO multisig with address 0x...")," with the private key you're looking to use as signing key. One of the options is going using MyEtherWallet web UI:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Connect your wallet to ",(0,a.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/wallet/access"},"https://www.myetherwallet.com/wallet/access"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/wallet/sign"},"https://www.myetherwallet.com/wallet/sign"),' (UI link is under "Message" dropdown on the left).'),(0,a.kt)("li",{parentName:"ol"},'Enter the message, click "sign" and sign the message on the wallet.'),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"sig")," field in the result json is the signature hash."))),(0,a.kt)("li",{parentName:"ol"},"Publish the message along with the signature hash on twitter or other easily accessible social media."),(0,a.kt)("li",{parentName:"ol"},"Share the link to the post as a comment at the relevant ",(0,a.kt)("a",{parentName:"li",href:"https://research.lido.fi"},"Lido DAO forum")," post."),(0,a.kt)("li",{parentName:"ol"},"Make sure to follow the ",(0,a.kt)("a",{parentName:"li",href:"./multisig-signer-manual"},"general rules of thumb")," for being a signer in Lido DAO ops multisigs.")),(0,a.kt)("h2",{id:"ethereum-signature-verification"},"Ethereum signature verification"),(0,a.kt)("p",null,"To verify the shared signature one can use Etherscan or MyEtherWallet UIs"),(0,a.kt)("h3",{id:"etherscan-ui"},"Etherscan UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/verifiedSignatures"},"https://etherscan.io/verifiedSignatures")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Verify Signature")," button"),(0,a.kt)("li",{parentName:"ol"},"Input address, message & signature hash data & click ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue")),(0,a.kt)("li",{parentName:"ol"},"See whether the signature provided is valid")),(0,a.kt)("h3",{id:"myetherwallet"},"MyEtherWallet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/tools?tool=verify"},"https://www.myetherwallet.com/tools?tool=verify")),(0,a.kt)("li",{parentName:"ol"},"Encode the message text as hex string (use the tool like ",(0,a.kt)("a",{parentName:"li",href:"https://appdevtools.com/text-hex-converter"},"https://appdevtools.com/text-hex-converter"),")"),(0,a.kt)("li",{parentName:"ol"},"Enter json & click ",(0,a.kt)("inlineCode",{parentName:"li"},"Verify"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-{"},'  "address": "0x...",\n  "msg": "0x...",\n  "sig": "signature_hash"\n}```\nNote that "msg" is hex text starting with `0x` (add `0x` before the hex encoded string if necessary)\n'))),(0,a.kt)("li",{parentName:"ol"},"See whether the signature provided is valid")))}d.isMDXComponent=!0}}]);
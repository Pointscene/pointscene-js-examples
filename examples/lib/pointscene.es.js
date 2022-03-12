var Fc=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Gg=Fc((Xo,rr)=>{const cr="138",dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ac=0,Ao=1,Dc=2,Do=1,Yc=2,Ei=3,Ri=0,ce=1,Dn=2,Yo=1,$e=0,Yn=1,ss=2,No=3,ko=4,Nc=5,Nn=100,kc=101,Kc=102,Ko=103,Bo=104,Bc=200,Jc=201,zc=202,Oc=203,Jo=204,zo=205,Qc=206,jc=207,qc=208,$c=209,td=210,ed=0,nd=1,id=2,Vi=3,sd=4,rd=5,od=6,ad=7,rs=0,ld=1,cd=2,cn=0,dd=1,hd=2,ud=3,pd=4,fd=5,Oo=300,kn=301,Kn=302,hr=303,ur=304,os=306,pr=307,fr=1e3,Ue=1001,mr=1002,$t=1003,Qo=1004,jo=1005,de=1006,md=1007,as=1008,Ln=1009,gd=1010,yd=1011,Gi=1012,xd=1013,ls=1014,Zn=1015,Bn=1016,bd=1017,Sd=1018,Jn=1020,vd=1021,_d=1022,be=1023,Td=1024,Md=1025,In=1026,zn=1027,wd=1028,Ld=1029,Zd=1030,Id=1031,Ed=1033,gr=33776,yr=33777,xr=33778,br=33779,qo=35840,$o=35841,ta=35842,ea=35843,Rd=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,da=37814,ha=37815,ua=37816,pa=37817,fa=37818,ma=37819,ga=37820,ya=37821,xa=36492,Vd=2200,Gd=2201,Pd=2202,cs=2300,ds=2301,Sr=2302,On=2400,Qn=2401,hs=2402,vr=2500,ba=2501,Wd=0,dn=3e3,te=3001,Cd=3200,Xd=3201,jn=0,Hd=1,_r=7680,Ud=519,Pi=35044,us=35048,Sa="300 es",Tr=1035;class Be{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ge=[];for(let s=0;s<256;s++)ge[s]=(s<16?"0":"")+s.toString(16);const Mr=Math.PI/180,wr=180/Math.PI;function Je(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[s&255]+ge[s>>8&255]+ge[s>>16&255]+ge[s>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toUpperCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Fd(s,t){return(s%t+t)%t}function Lr(s,t,e){return(1-e)*s+e*t}function va(s){return(s&s-1)===0&&s!==0}function Zr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class q{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}q.prototype.isVector2=!0;class ye{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],y=i[0],S=i[3],m=i[6],f=i[1],L=i[4],w=i[7],v=i[2],G=i[5],P=i[8];return r[0]=o*y+a*f+l*v,r[3]=o*S+a*L+l*G,r[6]=o*m+a*w+l*P,r[1]=c*y+d*f+h*v,r[4]=c*S+d*L+h*G,r[7]=c*m+d*w+h*P,r[2]=u*y+p*f+g*v,r[5]=u*S+p*L+g*G,r[8]=u*m+p*w+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,g=e*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(i*c-d*n)*y,t[2]=(a*n-i*o)*y,t[3]=u*y,t[4]=(d*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],d=i[7];return i[0]=e*r+n*l,i[3]=e*o+n*c,i[6]=e*a+n*d,i[1]=-n*r+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*d,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}ye.prototype.isMatrix3=!0;function _a(s){for(let t=s.length-1;t>=0;--t)if(s[t]>65535)return!0;return!1}function Wi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Ta={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fe={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ir(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class E{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=Fd(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Ir(r,i,t+1/3),this.g=Ir(r,i,t),this.b=Ir(r,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=Ta[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),o=Math.min(e,n,i);let a,l;const c=(o+r)/2;if(o===r)a=0,l=0;else{const d=r-o;switch(l=c<=.5?d/(r+o):d/(2-r-o),r){case e:a=(n-i)/d+(n<i?6:0);break;case n:a=(i-e)/d+2;break;case i:a=(e-n)/d+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Fe),Fe.h+=t,Fe.s+=e,Fe.l+=n,this.setHSL(Fe.h,Fe.s,Fe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fe),t.getHSL(ps);const n=Lr(Fe.h,ps.h,e),i=Lr(Fe.s,ps.s,e),r=Lr(Fe.l,ps.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}E.NAMES=Ta,E.prototype.isColor=!0,E.prototype.r=1,E.prototype.g=1,E.prototype.b=1;let $n;class En{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Wi("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ma{constructor(t=null){this.uuid=Je(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rr(i[o].image)):r.push(Rr(i[o]))}else r=Rr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?En.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Ma.prototype.isSource=!0;let Ad=0;class ie extends Be{constructor(t=ie.DEFAULT_IMAGE,e=ie.DEFAULT_MAPPING,n=Ue,i=Ue,r=de,o=as,a=be,l=Ln,c=1,d=dn){super();Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Je(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ie.DEFAULT_IMAGE=null,ie.DEFAULT_MAPPING=Oo,ie.prototype.isTexture=!0;class rt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],y=l[2],S=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-S)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+S)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(c+1)/2,w=(p+1)/2,v=(m+1)/2,G=(d+u)/4,P=(h+y)/4,Q=(g+S)/4;return L>w&&L>v?L<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(L),i=G/n,r=P/n):w>v?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=G/i,r=Q/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=P/r,i=Q/r),this.set(n,i,r,e),this}let f=Math.sqrt((S-g)*(S-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(f)<.001&&(f=1),this.x=(S-g)/f,this.y=(h-y)/f,this.z=(u-d)/f,this.w=Math.acos((c+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}rt.prototype.isVector4=!0;class Le extends Be{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new rt(0,0,t,e),this.scissorTest=!1,this.viewport=new rt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:de,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.prototype.isWebGLRenderTarget=!0;class fs extends ie{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}fs.prototype.isDataArrayTexture=!0;class Dd extends Le{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new fs(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Dd.prototype.isWebGLArrayRenderTarget=!0;class Vr extends ie{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Vr.prototype.isData3DTexture=!0;class Yd extends Le{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new Vr(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Yd.prototype.isWebGL3DRenderTarget=!0;class Nd extends Le{constructor(t,e,n,i={}){super(t,e,i);const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Nd.prototype.isWebGLMultipleRenderTargets=!0;class Se{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(h!==y||l!==u||c!==p||d!==g){let S=1-a;const m=l*u+c*p+d*g+h*y,f=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const v=Math.sqrt(L),G=Math.atan2(v,m*f);S=Math.sin(S*G)/v,a=Math.sin(a*G)/v}const w=a*f;if(l=l*S+u*w,c=c*S+p*w,d=d*S+g*w,h=h*S+y*w,S===1-a){const v=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=v,c*=v,d*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+d*h+l*p-c*u,t[e+1]=l*g+d*u+c*h-a*p,t[e+2]=c*g+d*p+a*u-l*h,t[e+3]=d*g-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Se.prototype.isQuaternion=!0;class M{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,d=l*n+a*e-r*i,h=l*i+r*n-o*e,u=-r*e-o*n-a*i;return this.x=c*l+u*-r+d*-a-h*-o,this.y=d*l+u*-o+h*-r-c*-a,this.z=h*l+u*-a+c*-o-d*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}M.prototype.isVector3=!0;const Gr=new M,wa=new Se;class Ge{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const d=t[l],h=t[l+1],u=t[l+2];d<e&&(e=d),h<n&&(n=h),u<i&&(i=u),d>r&&(r=d),h>o&&(o=h),u>a&&(a=u)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const d=t.getX(l),h=t.getY(l),u=t.getZ(l);d<e&&(e=d),h<n&&(n=h),u<i&&(i=u),d>r&&(r=d),h>o&&(o=h),u>a&&(a=u)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Rn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Rn)}else n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox),Pr.applyMatrix4(t.matrixWorld),this.union(Pr);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),ms.subVectors(this.max,Ci),ti.subVectors(t.a,Ci),ei.subVectors(t.b,Ci),ni.subVectors(t.c,Ci),hn.subVectors(ei,ti),un.subVectors(ni,ei),Vn.subVectors(ti,ni);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Vn.z,Vn.y,hn.z,0,-hn.x,un.z,0,-un.x,Vn.z,0,-Vn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Vn.y,Vn.x,0];return!Wr(e,ti,ei,ni,ms)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,ti,ei,ni,ms))?!1:(gs.crossVectors(hn,un),e=[gs.x,gs.y,gs.z],Wr(e,ti,ei,ni,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Rn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Ge.prototype.isBox3=!0;const tn=[new M,new M,new M,new M,new M,new M,new M,new M],Rn=new M,Pr=new Ge,ti=new M,ei=new M,ni=new M,hn=new M,un=new M,Vn=new M,Ci=new M,ms=new M,gs=new M,Gn=new M;function Wr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gn.fromArray(s,r);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),d=n.dot(Gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const kd=new Ge,La=new M,ys=new M,Cr=new M;class pn{constructor(t=new M,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Cr.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?ys.set(0,0,1).multiplyScalar(t.radius):ys.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(La.copy(t.center).add(ys)),this.expandByPoint(La.copy(t.center).sub(ys)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new M,Xr=new M,xs=new M,fn=new M,Hr=new M,bs=new M,Ur=new M;class ii{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.direction).multiplyScalar(e).add(this.origin),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xs),a=fn.dot(this.direction),l=-fn.dot(xs),c=fn.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const y=1/d;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(xs).multiplyScalar(u).add(Xr),p}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,i,r){Hr.subVectors(e,t),bs.subVectors(n,t),Ur.crossVectors(Hr,bs);let o=this.direction.dot(Ur),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(fn,bs));if(l<0)return null;const c=a*this.direction.dot(Hr.cross(fn));if(c<0||l+c>o)return null;const d=-a*fn.dot(Ur);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,l,c,d,h,u,p,g,y,S){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=p,m[7]=g,m[11]=y,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*d,p=o*h,g=a*d,y=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,g=c*d,y=c*h;e[0]=u+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=p*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,g=c*d,y=c*h;e[0]=u-y*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*d,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,p=o*h,g=a*d,y=a*h;e[0]=l*d,e[4]=g*c-p,e[8]=u*c+y,e[1]=l*h,e[5]=y*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*d,e[4]=y-u*h,e[8]=g*h+p,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=p*h+g,e[10]=u-y*h}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+y,e[5]=o*d,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*d,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Bd)}lookAt(t,e,n){const i=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),mn.crossVectors(n,Ee),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),mn.crossVectors(n,Ee)),mn.normalize(),Ss.crossVectors(Ee,mn),i[0]=mn.x,i[4]=Ss.x,i[8]=Ee.x,i[1]=mn.y,i[5]=Ss.y,i[9]=Ee.y,i[2]=mn.z,i[6]=Ss.z,i[10]=Ee.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],y=n[6],S=n[10],m=n[14],f=n[3],L=n[7],w=n[11],v=n[15],G=i[0],P=i[4],Q=i[8],ct=i[12],k=i[1],b=i[5],I=i[9],V=i[13],C=i[2],D=i[6],H=i[10],N=i[14],W=i[3],K=i[7],nt=i[11],j=i[15];return r[0]=o*G+a*k+l*C+c*W,r[4]=o*P+a*b+l*D+c*K,r[8]=o*Q+a*I+l*H+c*nt,r[12]=o*ct+a*V+l*N+c*j,r[1]=d*G+h*k+u*C+p*W,r[5]=d*P+h*b+u*D+p*K,r[9]=d*Q+h*I+u*H+p*nt,r[13]=d*ct+h*V+u*N+p*j,r[2]=g*G+y*k+S*C+m*W,r[6]=g*P+y*b+S*D+m*K,r[10]=g*Q+y*I+S*H+m*nt,r[14]=g*ct+y*V+S*N+m*j,r[3]=f*G+L*k+w*C+v*W,r[7]=f*P+L*b+w*D+v*K,r[11]=f*Q+L*I+w*H+v*nt,r[15]=f*ct+L*V+w*N+v*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],g=t[3],y=t[7],S=t[11],m=t[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*p-n*l*p)+y*(+e*l*p-e*c*u+r*o*u-i*o*p+i*c*d-r*l*d)+S*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*d-n*c*d)+m*(-i*a*d-e*l*h+e*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],g=t[12],y=t[13],S=t[14],m=t[15],f=h*S*c-y*u*c+y*l*p-a*S*p-h*l*m+a*u*m,L=g*u*c-d*S*c-g*l*p+o*S*p+d*l*m-o*u*m,w=d*y*c-g*h*c+g*a*p-o*y*p-d*a*m+o*h*m,v=g*h*l-d*y*l-g*a*u+o*y*u+d*a*S-o*h*S,G=e*f+n*L+i*w+r*v;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=f*P,t[1]=(y*u*r-h*S*r-y*i*p+n*S*p+h*i*m-n*u*m)*P,t[2]=(a*S*r-y*l*r+y*i*c-n*S*c-a*i*m+n*l*m)*P,t[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*p-n*l*p)*P,t[4]=L*P,t[5]=(d*S*r-g*u*r+g*i*p-e*S*p-d*i*m+e*u*m)*P,t[6]=(g*l*r-o*S*r-g*i*c+e*S*c+o*i*m-e*l*m)*P,t[7]=(o*u*r-d*l*r+d*i*c-e*u*c-o*i*p+e*l*p)*P,t[8]=w*P,t[9]=(g*h*r-d*y*r-g*n*p+e*y*p+d*n*m-e*h*m)*P,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*m+e*a*m)*P,t[11]=(d*a*r-o*h*r-d*n*c+e*h*c+o*n*p-e*a*p)*P,t[12]=v*P,t[13]=(d*y*i-g*h*i+g*n*u-e*y*u-d*n*S+e*h*S)*P,t[14]=(g*a*i-o*y*i-g*n*l+e*y*l+o*n*S-e*a*S)*P,t[15]=(o*h*i-d*a*i+d*n*l-e*h*l-o*n*u+e*a*u)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,g=r*h,y=o*d,S=o*h,m=a*h,f=l*c,L=l*d,w=l*h,v=n.x,G=n.y,P=n.z;return i[0]=(1-(y+m))*v,i[1]=(p+w)*v,i[2]=(g-L)*v,i[3]=0,i[4]=(p-w)*G,i[5]=(1-(u+m))*G,i[6]=(S+f)*G,i[7]=0,i[8]=(g+L)*P,i[9]=(S-f)*P,i[10]=(1-(u+y))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const o=si.set(i[4],i[5],i[6]).length(),a=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ae.copy(this);const c=1/r,d=1/o,h=1/a;return Ae.elements[0]*=c,Ae.elements[1]*=c,Ae.elements[2]*=c,Ae.elements[4]*=d,Ae.elements[5]*=d,Ae.elements[6]*=d,Ae.elements[8]*=h,Ae.elements[9]*=h,Ae.elements[10]*=h,e.setFromRotationMatrix(Ae),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i),u=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,l=1/(e-t),c=1/(n-i),d=1/(o-r),h=(e+t)*l,u=(n+i)*c,p=(o+r)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}vt.prototype.isMatrix4=!0;const si=new M,Ae=new vt,Kd=new M(0,0,0),Bd=new M(1,1,1),mn=new M,Ss=new M,Ee=new M,Za=new vt,Ia=new Se;class Hn{constructor(t=0,e=0,n=0,i=Hn.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Hn.prototype.isEuler=!0,Hn.DefaultOrder="XYZ",Hn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const Ra=new M,ri=new Se,nn=new vt,vs=new M,Xi=new M,zd=new M,Od=new Se,Va=new M(1,0,0),Ga=new M(0,1,0),Pa=new M(0,0,1),Qd={type:"added"},Wa={type:"removed"};class Kt extends Be{constructor(){super();Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DefaultUp.clone();const t=new M,e=new Hn,n=new Se,i=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Kt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Pa,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Pa,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Xi,vs,this.up):nn.lookAt(vs,Xi,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(nn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Wa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Kt.DefaultUp=new M(0,1,0),Kt.DefaultMatrixAutoUpdate=!0,Kt.prototype.isObject3D=!0;const De=new M,sn=new M,Fr=new M,rn=new M,oi=new M,ai=new M,Ca=new M,Ar=new M,Dr=new M,Yr=new M;class le{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),De.subVectors(t,e),i.cross(De);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){De.subVectors(i,e),sn.subVectors(n,e),Fr.subVectors(t,e);const o=De.dot(De),a=De.dot(sn),l=De.dot(Fr),c=sn.dot(sn),d=sn.dot(Fr),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,rn),l.set(0,0),l.addScaledVector(r,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(a,rn.z),l}static isFrontFacing(t,e,n,i){return De.subVectors(n,e),sn.subVectors(t,e),De.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),De.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return le.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(r,n),Ar.subVectors(t,n);const l=oi.dot(Ar),c=ai.dot(Ar);if(l<=0&&c<=0)return e.copy(n);Dr.subVectors(t,i);const d=oi.dot(Dr),h=ai.dot(Dr);if(d>=0&&h<=d)return e.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(oi,o);Yr.subVectors(t,r);const p=oi.dot(Yr),g=ai.dot(Yr);if(g>=0&&p<=g)return e.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ai,a);const S=d*g-p*h;if(S<=0&&h-d>=0&&p-g>=0)return Ca.subVectors(r,i),a=(h-d)/(h-d+(p-g)),e.copy(i).addScaledVector(Ca,a);const m=1/(S+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let jd=0;class he extends Be{constructor(){super();Object.defineProperty(this,"id",{value:jd++}),this.uuid=Je(),this.name="",this.type="Material",this.fog=!0,this.blending=Yn,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jo,this.blendDst=zo,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Yo;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}he.prototype.isMaterial=!0,he.fromType=function(){return null};class _s extends he{constructor(t){super();this.type="MeshBasicMaterial",this.color=new E(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}_s.prototype.isMeshBasicMaterial=!0;const qt=new M,Ts=new q;class re{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new E),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new q),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new M),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new rt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix3(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qt.x=this.getX(e),qt.y=this.getY(e),qt.z=this.getZ(e),qt.applyMatrix4(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qt.x=this.getX(e),qt.y=this.getY(e),qt.z=this.getZ(e),qt.applyNormalMatrix(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qt.x=this.getX(e),qt.y=this.getY(e),qt.z=this.getZ(e),qt.transformDirection(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pi&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}re.prototype.isBufferAttribute=!0;class Xa extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ha extends re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qd extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}qd.prototype.isFloat16BufferAttribute=!0;class pe extends re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $d=0;const Pe=new vt,Nr=new Kt,li=new M,Re=new Ge,Hi=new Ge,fe=new M;class Qt extends Be{constructor(){super();Object.defineProperty(this,"id",{value:$d++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_a(t)?Ha:Xa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Re.min,Hi.min),Re.expandByPoint(fe),fe.addVectors(Re.max,Hi.max),Re.expandByPoint(fe)):(Re.expandByPoint(Hi.min),Re.expandByPoint(Hi.max))}Re.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)fe.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(t,c),fe.add(li)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let k=0;k<a;k++)c[k]=new M,d[k]=new M;const h=new M,u=new M,p=new M,g=new q,y=new q,S=new q,m=new M,f=new M;function L(k,b,I){h.fromArray(i,k*3),u.fromArray(i,b*3),p.fromArray(i,I*3),g.fromArray(o,k*2),y.fromArray(o,b*2),S.fromArray(o,I*2),u.sub(h),p.sub(h),y.sub(g),S.sub(g);const V=1/(y.x*S.y-S.x*y.y);!isFinite(V)||(m.copy(u).multiplyScalar(S.y).addScaledVector(p,-y.y).multiplyScalar(V),f.copy(p).multiplyScalar(y.x).addScaledVector(u,-S.x).multiplyScalar(V),c[k].add(m),c[b].add(m),c[I].add(m),d[k].add(f),d[b].add(f),d[I].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let k=0,b=w.length;k<b;++k){const I=w[k],V=I.start,C=I.count;for(let D=V,H=V+C;D<H;D+=3)L(n[D+0],n[D+1],n[D+2])}const v=new M,G=new M,P=new M,Q=new M;function ct(k){P.fromArray(r,k*3),Q.copy(P);const b=c[k];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),G.crossVectors(Q,b);const V=G.dot(d[k])<0?-1:1;l[k*4]=v.x,l[k*4+1]=v.y,l[k*4+2]=v.z,l[k*4+3]=V}for(let k=0,b=w.length;k<b;++k){const I=w[k],V=I.start,C=I.count;for(let D=V,H=V+C;D<H;D+=3)ct(n[D+0]),ct(n[D+1]),ct(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new M,r=new M,o=new M,a=new M,l=new M,c=new M,d=new M,h=new M;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),y=t.getX(u+1),S=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,S),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(S,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,d=Math.min(l.length,o.length-c);for(let h=0,u=c;h<d;h++,u++)o[u]=l[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let y=0,S=l.length;y<S;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let m=0;m<d;m++)u[g++]=c[p++]}return new re(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.prototype.isBufferGeometry=!0;const Ua=new vt,ci=new ii,kr=new pn,gn=new M,yn=new M,xn=new M,Kr=new M,Br=new M,Jr=new M,Ms=new M,ws=new M,Ls=new M,Zs=new q,Is=new q,Es=new q,zr=new M,Rs=new M;class Ze extends Kt{constructor(t=new Qt,e=new _s){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),t.ray.intersectsSphere(kr)===!1)||(Ua.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Ua),n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,d=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let y=0,S=p.length;y<S;y++){const m=p[y],f=i[m.materialIndex],L=Math.max(m.start,g.start),w=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let v=L,G=w;v<G;v+=3){const P=a.getX(v),Q=a.getX(v+1),ct=a.getX(v+2);o=Vs(this,f,t,ci,l,c,d,h,u,P,Q,ct),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const y=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=y,f=S;m<f;m+=3){const L=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);o=Vs(this,i,t,ci,l,c,d,h,u,L,w,v),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let y=0,S=p.length;y<S;y++){const m=p[y],f=i[m.materialIndex],L=Math.max(m.start,g.start),w=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let v=L,G=w;v<G;v+=3){const P=v,Q=v+1,ct=v+2;o=Vs(this,f,t,ci,l,c,d,h,u,P,Q,ct),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const y=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=y,f=S;m<f;m+=3){const L=m,w=m+1,v=m+2;o=Vs(this,i,t,ci,l,c,d,h,u,L,w,v),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ze.prototype.isMesh=!0;function th(s,t,e,n,i,r,o,a){let l;if(t.side===ce?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side!==Dn,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:s}}function Vs(s,t,e,n,i,r,o,a,l,c,d,h){gn.fromBufferAttribute(i,c),yn.fromBufferAttribute(i,d),xn.fromBufferAttribute(i,h);const u=s.morphTargetInfluences;if(r&&u){Ms.set(0,0,0),ws.set(0,0,0),Ls.set(0,0,0);for(let g=0,y=r.length;g<y;g++){const S=u[g],m=r[g];S!==0&&(Kr.fromBufferAttribute(m,c),Br.fromBufferAttribute(m,d),Jr.fromBufferAttribute(m,h),o?(Ms.addScaledVector(Kr,S),ws.addScaledVector(Br,S),Ls.addScaledVector(Jr,S)):(Ms.addScaledVector(Kr.sub(gn),S),ws.addScaledVector(Br.sub(yn),S),Ls.addScaledVector(Jr.sub(xn),S)))}gn.add(Ms),yn.add(ws),xn.add(Ls)}s.isSkinnedMesh&&(s.boneTransform(c,gn),s.boneTransform(d,yn),s.boneTransform(h,xn));const p=th(s,t,e,n,gn,yn,xn,zr);if(p){a&&(Zs.fromBufferAttribute(a,c),Is.fromBufferAttribute(a,d),Es.fromBufferAttribute(a,h),p.uv=le.getUV(zr,gn,yn,xn,Zs,Is,Es,new q)),l&&(Zs.fromBufferAttribute(l,c),Is.fromBufferAttribute(l,d),Es.fromBufferAttribute(l,h),p.uv2=le.getUV(zr,gn,yn,xn,Zs,Is,Es,new q));const g={a:c,b:d,c:h,normal:new M,materialIndex:0};le.getNormal(gn,yn,xn,g.normal),p.face=g}return p}class es extends Qt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(h,2));function g(y,S,m,f,L,w,v,G,P,Q,ct){const k=w/P,b=v/Q,I=w/2,V=v/2,C=G/2,D=P+1,H=Q+1;let N=0,W=0;const K=new M;for(let nt=0;nt<H;nt++){const j=nt*b-V;for(let it=0;it<D;it++){const ut=it*k-I;K[y]=ut*f,K[S]=j*L,K[m]=C,c.push(K.x,K.y,K.z),K[y]=0,K[S]=0,K[m]=G>0?1:-1,d.push(K.x,K.y,K.z),h.push(it/P),h.push(1-nt/Q),N+=1}}for(let nt=0;nt<Q;nt++)for(let j=0;j<P;j++){const it=u+j+D*nt,ut=u+j+D*(nt+1),At=u+(j+1)+D*(nt+1),wt=u+(j+1)+D*nt;l.push(it,ut,wt),l.push(ut,At,wt),W+=6}a.addGroup(p,W,ct),p+=W,u+=N}}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ve(s){const t={};for(let e=0;e<s.length;e++){const n=di(s[e]);for(const i in n)t[i]=n[i]}return t}const eh={clone:di,merge:ve};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends he{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Ve.prototype.isShaderMaterial=!0;class Or extends Kt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Or.prototype.isCamera=!0;class Ie extends Or{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Ie.prototype.isPerspectiveCamera=!0;const hi=90,ui=1;class Qr extends Kt{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ie(hi,ui,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const r=new Ie(hi,ui,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);const o=new Ie(hi,ui,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new M(0,1,0)),this.add(o);const a=new Ie(hi,ui,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new M(0,-1,0)),this.add(a);const l=new Ie(hi,ui,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new M(0,0,1)),this.add(l);const c=new Ie(hi,ui,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,d=t.xr.enabled,h=t.getRenderTarget();t.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=u,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Gs extends ie{constructor(t,e,n,i,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:kn;super(t,e,n,i,r,o,a,l,c,d);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}Gs.prototype.isCubeTexture=!0;class Fa extends Le{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:de}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=be,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new es(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ce,blending:$e});r.uniforms.tEquirect.value=e;const o=new Ze(i,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=de),new Qr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}Fa.prototype.isWebGLCubeRenderTarget=!0;const jr=new M,sh=new M,rh=new ye;class on{constructor(t=new M(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rh.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}on.prototype.isPlane=!0;const pi=new pn,Ps=new M;class Ws{constructor(t=new on,e=new on,n=new on,i=new on,r=new on,o=new on){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],h=n[7],u=n[8],p=n[9],g=n[10],y=n[11],S=n[12],m=n[13],f=n[14],L=n[15];return e[0].setComponents(a-i,h-l,y-u,L-S).normalize(),e[1].setComponents(a+i,h+l,y+u,L+S).normalize(),e[2].setComponents(a+r,h+c,y+p,L+m).normalize(),e[3].setComponents(a-r,h-c,y-p,L-m).normalize(),e[4].setComponents(a-o,h-d,y-g,L-f).normalize(),e[5].setComponents(a+o,h+d,y+g,L+f).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ps.x=i.normal.x>0?t.max.x:t.min.x,Ps.y=i.normal.y>0?t.max.y:t.min.y,Ps.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Aa(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function oh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,p=s.createBuffer();s.bindBuffer(d,p),s.bufferData(d,h,u),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,d,h){const u=d.array,p=d.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,u):(e?s.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):s.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,d)):h.version<c.version&&(r(h.buffer,c,d),h.version=c.version)}return{get:o,remove:a,update:l}}class Ho extends Qt{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=t/a,u=e/l,p=[],g=[],y=[],S=[];for(let m=0;m<d;m++){const f=m*u-o;for(let L=0;L<c;L++){const w=L*h-r;g.push(w,-f,0),y.push(0,0,1),S.push(L/a),S.push(1-m/l)}}for(let m=0;m<l;m++)for(let f=0;f<a;f++){const L=f+c*m,w=f+c*(m+1),v=f+1+c*(m+1),G=f+1+c*m;p.push(L,w,G),p.push(w,v,G)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(S,2))}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph="vec3 transformed = vec3( position );",fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,kh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zh=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,mu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Uu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ju=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,zu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ou=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Qu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ju=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$u=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,op=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ut={alphamap_fragment:ah,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:dh,aomap_fragment:hh,aomap_pars_fragment:uh,begin_vertex:ph,beginnormal_vertex:fh,bsdfs:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Sh,color_fragment:vh,color_pars_fragment:_h,color_pars_vertex:Th,color_vertex:Mh,common:wh,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Eh,emissivemap_fragment:Rh,emissivemap_pars_fragment:Vh,encodings_fragment:Gh,encodings_pars_fragment:Ph,envmap_fragment:Wh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Xh,envmap_pars_vertex:Hh,envmap_physical_pars_fragment:zh,envmap_vertex:Uh,fog_vertex:Fh,fog_pars_vertex:Ah,fog_fragment:Dh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Nh,lightmap_fragment:kh,lightmap_pars_fragment:Kh,lights_lambert_vertex:Bh,lights_pars_begin:Jh,lights_toon_fragment:Oh,lights_toon_pars_fragment:Qh,lights_phong_fragment:jh,lights_phong_pars_fragment:qh,lights_physical_fragment:$h,lights_physical_pars_fragment:tu,lights_fragment_begin:eu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:au,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:du,map_particle_pars_fragment:hu,metalnessmap_fragment:uu,metalnessmap_pars_fragment:pu,morphcolor_vertex:fu,morphnormal_vertex:mu,morphtarget_pars_vertex:gu,morphtarget_vertex:yu,normal_fragment_begin:xu,normal_fragment_maps:bu,normal_pars_fragment:Su,normal_pars_vertex:vu,normal_vertex:_u,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:Mu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Lu,output_fragment:Zu,packing:Iu,premultiplied_alpha_fragment:Eu,project_vertex:Ru,dithering_fragment:Vu,dithering_pars_fragment:Gu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Xu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Uu,skinbase_vertex:Fu,skinning_pars_vertex:Au,skinning_vertex:Du,skinnormal_vertex:Yu,specularmap_fragment:Nu,specularmap_pars_fragment:ku,tonemapping_fragment:Ku,tonemapping_pars_fragment:Bu,transmission_fragment:Ju,transmission_pars_fragment:zu,uv_pars_fragment:Ou,uv_pars_vertex:Qu,uv_vertex:ju,uv2_pars_fragment:qu,uv2_pars_vertex:$u,uv2_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:op,depth_frag:ap,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:dp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:pp,meshbasic_vert:fp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:yp,meshmatcap_vert:xp,meshmatcap_frag:bp,meshnormal_vert:Sp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:Tp,meshphysical_vert:Mp,meshphysical_frag:wp,meshtoon_vert:Lp,meshtoon_frag:Zp,points_vert:Ip,points_frag:Ep,shadow_vert:Rp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Pp},ot={common:{diffuse:{value:new E(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ye},uv2Transform:{value:new ye},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new E(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new E(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new E(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}}},ze={basic:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.fog,ot.lights,{emissive:{value:new E(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new E(0)},specular:{value:new E(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ve([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new E(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ve([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new E(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ve([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ve([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ve([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ve([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},cube:{uniforms:ve([ot.envmap,{opacity:{value:1}}]),vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ve([ot.common,ot.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ve([ot.lights,ot.fog,{color:{value:new E(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};ze.physical={uniforms:ve([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new E(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new E(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new E(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};function Wp(s,t,e,n,i,r){const o=new E(0);let a=i===!0?0:1,l,c,d=null,h=0,u=null;function p(y,S){let m=!1,f=S.isScene===!0?S.background:null;f&&f.isTexture&&(f=t.get(f));const L=s.xr,w=L.getSession&&L.getSession();w&&w.environmentBlendMode==="additive"&&(f=null),f===null?g(o,a):f&&f.isColor&&(g(f,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),f&&(f.isCubeTexture||f.mapping===os)?(c===void 0&&(c=new Ze(new es(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:di(ze.cube.uniforms),vertexShader:ze.cube.vertexShader,fragmentShader:ze.cube.fragmentShader,side:ce,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,G,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(d!==f||h!==f.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=f,h=f.version,u=s.toneMapping),y.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(l===void 0&&(l=new Ze(new Ho(2,2),new Ve({name:"BackgroundMaterial",uniforms:di(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),l.material.uniforms.uvTransform.value.copy(f.matrix),(d!==f||h!==f.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,d=f,h=f.version,u=s.toneMapping),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){e.buffers.color.setClear(y.r,y.g,y.b,S,r)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p}}function Cp(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=y(null);let c=l;function d(V,C,D,H,N){let W=!1;if(o){const K=g(H,D,C);c!==K&&(c=K,u(c.object)),W=S(H,N),W&&m(H,N)}else{const K=C.wireframe===!0;(c.geometry!==H.id||c.program!==D.id||c.wireframe!==K)&&(c.geometry=H.id,c.program=D.id,c.wireframe=K,W=!0)}V.isInstancedMesh===!0&&(W=!0),N!==null&&e.update(N,34963),W&&(P(V,C,D,H),N!==null&&s.bindBuffer(34963,e.get(N).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(V){return n.isWebGL2?s.bindVertexArray(V):r.bindVertexArrayOES(V)}function p(V){return n.isWebGL2?s.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function g(V,C,D){const H=D.wireframe===!0;let N=a[V.id];N===void 0&&(N={},a[V.id]=N);let W=N[C.id];W===void 0&&(W={},N[C.id]=W);let K=W[H];return K===void 0&&(K=y(h()),W[H]=K),K}function y(V){const C=[],D=[],H=[];for(let N=0;N<i;N++)C[N]=0,D[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:H,object:V,attributes:{},index:null}}function S(V,C){const D=c.attributes,H=V.attributes;let N=0;for(const W in H){const K=D[W],nt=H[W];if(K===void 0||K.attribute!==nt||K.data!==nt.data)return!0;N++}return c.attributesNum!==N||c.index!==C}function m(V,C){const D={},H=V.attributes;let N=0;for(const W in H){const K=H[W],nt={};nt.attribute=K,K.data&&(nt.data=K.data),D[W]=nt,N++}c.attributes=D,c.attributesNum=N,c.index=C}function f(){const V=c.newAttributes;for(let C=0,D=V.length;C<D;C++)V[C]=0}function L(V){w(V,0)}function w(V,C){const D=c.newAttributes,H=c.enabledAttributes,N=c.attributeDivisors;D[V]=1,H[V]===0&&(s.enableVertexAttribArray(V),H[V]=1),N[V]!==C&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,C),N[V]=C)}function v(){const V=c.newAttributes,C=c.enabledAttributes;for(let D=0,H=C.length;D<H;D++)C[D]!==V[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function G(V,C,D,H,N,W){n.isWebGL2===!0&&(D===5124||D===5125)?s.vertexAttribIPointer(V,C,D,N,W):s.vertexAttribPointer(V,C,D,H,N,W)}function P(V,C,D,H){if(n.isWebGL2===!1&&(V.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;f();const N=H.attributes,W=D.getAttributes(),K=C.defaultAttributeValues;for(const nt in W){const j=W[nt];if(j.location>=0){let it=N[nt];if(it===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(it=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(it=V.instanceColor)),it!==void 0){const ut=it.normalized,At=it.itemSize,wt=e.get(it);if(wt===void 0)continue;const z=wt.buffer,Dt=wt.type,Vt=wt.bytesPerElement;if(it.isInterleavedBufferAttribute){const mt=it.data,gt=mt.stride,Xt=it.offset;if(mt.isInstancedInterleavedBuffer){for(let U=0;U<j.locationSize;U++)w(j.location+U,mt.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let U=0;U<j.locationSize;U++)L(j.location+U);s.bindBuffer(34962,z);for(let U=0;U<j.locationSize;U++)G(j.location+U,At/j.locationSize,Dt,ut,gt*Vt,(Xt+At/j.locationSize*U)*Vt)}else{if(it.isInstancedBufferAttribute){for(let mt=0;mt<j.locationSize;mt++)w(j.location+mt,it.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<j.locationSize;mt++)L(j.location+mt);s.bindBuffer(34962,z);for(let mt=0;mt<j.locationSize;mt++)G(j.location+mt,At/j.locationSize,Dt,ut,At*Vt,At/j.locationSize*mt*Vt)}}else if(K!==void 0){const ut=K[nt];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(j.location,ut);break;case 3:s.vertexAttrib3fv(j.location,ut);break;case 4:s.vertexAttrib4fv(j.location,ut);break;default:s.vertexAttrib1fv(j.location,ut)}}}}v()}function Q(){b();for(const V in a){const C=a[V];for(const D in C){const H=C[D];for(const N in H)p(H[N].object),delete H[N];delete C[D]}delete a[V]}}function ct(V){if(a[V.id]===void 0)return;const C=a[V.id];for(const D in C){const H=C[D];for(const N in H)p(H[N].object),delete H[N];delete C[D]}delete a[V.id]}function k(V){for(const C in a){const D=a[C];if(D[V.id]===void 0)continue;const H=D[V.id];for(const N in H)p(H[N].object),delete H[N];delete D[V.id]}}function b(){I(),c!==l&&(c=l,u(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:b,resetDefaultState:I,dispose:Q,releaseStatesOfGeometry:ct,releaseStatesOfProgram:k,initAttributes:f,enableAttribute:L,disableUnusedAttributes:v}}function Xp(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,d){s.drawArrays(r,c,d),e.update(d,r,1)}function l(c,d,h){if(h===0)return;let u,p;if(i)u=s,p="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](r,c,d,h),e.update(d,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Hp(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),y=s.getParameter(34921),S=s.getParameter(36347),m=s.getParameter(36348),f=s.getParameter(36349),L=u>0,w=o||t.has("OES_texture_float"),v=L&&w,G=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:S,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:L,floatFragmentTextures:w,floatVertexTextures:v,maxSamples:G}}function Up(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new on,a=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,p){const g=h.length!==0||u||n!==0||i;return i=u,e=d(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,u,p){const g=h.clippingPlanes,y=h.clipIntersection,S=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!S)r?d(null):c();else{const f=r?0:n,L=f*4;let w=m.clippingState||null;l.value=w,w=d(g,u,L,p);for(let v=0;v!==L;++v)w[v]=e[v];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=f}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,p,g){const y=h!==null?h.length:0;let S=null;if(y!==0){if(S=l.value,g!==!0||S===null){const m=p+y*4,f=u.matrixWorldInverse;a.getNormalMatrix(f),(S===null||S.length<m)&&(S=new Float32Array(m));for(let L=0,w=p;L!==y;++L,w+=4)o.copy(h[L]).applyMatrix4(f,a),o.normal.toArray(S,w),S[w+3]=o.constant}l.value=S,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,S}}function Fp(s){let t=new WeakMap;function e(o,a){return a===hr?o.mapping=kn:a===ur&&(o.mapping=Kn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hr||a===ur)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fa(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qr extends Or{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}qr.prototype.isOrthographicCamera=!0;const fi=4,Da=[.125,.215,.35,.446,.526,.582],Pn=20,$r=new qr,Ya=new E;let to=null;const Wn=(1+Math.sqrt(5))/2,mi=1/Wn,Na=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Wn,mi),new M(0,Wn,-mi),new M(mi,0,Wn),new M(-mi,0,Wn),new M(Wn,mi,0),new M(-Wn,mi,0)];class ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){to=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to),t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===kn||t.mapping===Kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:de,minFilter:de,generateMipmaps:!1,type:Bn,format:be,encoding:dn,depthBuffer:!1},i=Ka(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=Dp(r,t,e)}return i}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,i){const a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ya),d.toneMapping=cn,d.autoClear=!1;const p=new _s({name:"PMREM.Background",side:ce,depthWrite:!1,depthTest:!1}),g=new Ze(new es,p);let y=!1;const S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,y=!0):(p.color.copy(Ya),y=!0);for(let m=0;m<6;m++){const f=m%3;f===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):f===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const L=this._cubeSize;Cs(i,f*L,m>2?L:0,L,L),d.setRenderTarget(i),y&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===kn||t.mapping===Kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Na[(i-1)%Na.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ze(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pn-1),y=r/g,S=isFinite(r)?1+Math.floor(d*y):Pn;S>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Pn}`);const m=[];let f=0;for(let P=0;P<Pn;++P){const Q=P/y,ct=Math.exp(-Q*Q/2);m.push(ct),P===0?f+=ct:P<S&&(f+=2*ct)}for(let P=0;P<m.length;P++)m[P]=m[P]/f;u.envMap.value=t.texture,u.samples.value=S,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:L}=this;u.dTheta.value=g,u.mipInt.value=L-n;const w=this._sizeLods[i],v=3*w*(i>L-fi?i-L+fi:0),G=4*(this._cubeSize-w);Cs(e,v,G,3*w,2*w),l.setRenderTarget(e),l.render(h,$r)}}function Ap(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-fi?l=Da[o-s+fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),d=-c/2,h=1+c/2,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,y=3,S=2,m=1,f=new Float32Array(y*g*p),L=new Float32Array(S*g*p),w=new Float32Array(m*g*p);for(let G=0;G<p;G++){const P=G%3*2/3-1,Q=G>2?0:-1,ct=[P,Q,0,P+2/3,Q,0,P+2/3,Q+1,0,P,Q,0,P+2/3,Q+1,0,P,Q+1,0];f.set(ct,y*g*G),L.set(u,S*g*G);const k=[G,G,G,G,G,G];w.set(k,m*g*G)}const v=new Qt;v.setAttribute("position",new re(f,y)),v.setAttribute("uv",new re(L,S)),v.setAttribute("faceIndex",new re(w,m)),t.push(v),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ka(s,t,e){const n=new Le(s,t,e);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dp(s,t,e){const n=new Float32Array(Pn),i=new M(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Ba(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Ja(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hr||l===ur,d=l===kn||l===Kn;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ka(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){e===null&&(e=new ka(s));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Np(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kp(s,t,e,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],34962);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let S=0,m=y.length;S<m;S++)t.update(y[S],34962)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const f=p.array;y=p.version;for(let L=0,w=f.length;L<w;L+=3){const v=f[L+0],G=f[L+1],P=f[L+2];u.push(v,G,G,P,P,v)}}else{const f=g.array;y=g.version;for(let L=0,w=f.length/3-1;L<w;L+=3){const v=L+0,G=L+1,P=L+2;u.push(v,G,G,P,P,v)}}const S=new(_a(u)?Ha:Xa)(u,1);S.version=y;const m=r.get(h);m&&t.remove(m),r.set(h,S)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Kp(s,t,e,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function d(u,p){s.drawElements(r,p,a,u*l),e.update(p,r,1)}function h(u,p,g){if(g===0)return;let y,S;if(i)y=s,S="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[S](r,p,a,u*l,g),e.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h}function Bp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jp(s,t){return s[0]-t[0]}function zp(s,t){return Math.abs(t[1])-Math.abs(s[1])}function no(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function Op(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h,u){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=y!==void 0?y.length:0;let m=r.get(d);if(m===void 0||m.count!==S){let H=function(){C.dispose(),r.delete(d),d.removeEventListener("dispose",H)};var g=H;m!==void 0&&m.texture.dispose();const w=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,G=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],Q=d.morphAttributes.normal||[],ct=d.morphAttributes.color||[];let k=0;w===!0&&(k=1),v===!0&&(k=2),G===!0&&(k=3);let b=d.attributes.position.count*k,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const V=new Float32Array(b*I*4*S),C=new fs(V,b,I,S);C.format=be,C.type=Zn,C.needsUpdate=!0;const D=k*4;for(let N=0;N<S;N++){const W=P[N],K=Q[N],nt=ct[N],j=b*I*4*N;for(let it=0;it<W.count;it++){const ut=it*D;w===!0&&(o.fromBufferAttribute(W,it),W.normalized===!0&&no(o,W),V[j+ut+0]=o.x,V[j+ut+1]=o.y,V[j+ut+2]=o.z,V[j+ut+3]=0),v===!0&&(o.fromBufferAttribute(K,it),K.normalized===!0&&no(o,K),V[j+ut+4]=o.x,V[j+ut+5]=o.y,V[j+ut+6]=o.z,V[j+ut+7]=0),G===!0&&(o.fromBufferAttribute(nt,it),nt.normalized===!0&&no(o,K),V[j+ut+8]=o.x,V[j+ut+9]=o.y,V[j+ut+10]=o.z,V[j+ut+11]=nt.itemSize===4?o.w:1)}}m={count:S,texture:C,size:new q(b,I)},r.set(d,m),d.addEventListener("dispose",H)}let f=0;for(let w=0;w<p.length;w++)f+=p[w];const L=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",L),u.getUniforms().setValue(s,"morphTargetInfluences",p),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const y=p===void 0?0:p.length;let S=n[d.id];if(S===void 0||S.length!==y){S=[];for(let v=0;v<y;v++)S[v]=[v,0];n[d.id]=S}for(let v=0;v<y;v++){const G=S[v];G[0]=v,G[1]=p[v]}S.sort(zp);for(let v=0;v<8;v++)v<y&&S[v][1]?(a[v][0]=S[v][0],a[v][1]=S[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Jp);const m=d.morphAttributes.position,f=d.morphAttributes.normal;let L=0;for(let v=0;v<8;v++){const G=a[v],P=G[0],Q=G[1];P!==Number.MAX_SAFE_INTEGER&&Q?(m&&d.getAttribute("morphTarget"+v)!==m[P]&&d.setAttribute("morphTarget"+v,m[P]),f&&d.getAttribute("morphNormal"+v)!==f[P]&&d.setAttribute("morphNormal"+v,f[P]),i[v]=Q,L+=Q):(m&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),f&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),i[v]=0)}const w=d.morphTargetsRelative?1:1-L;u.getUniforms().setValue(s,"morphTargetBaseInfluence",w),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Qp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const za=new ie,Oa=new fs,Qa=new Vr,ja=new Gs,qa=[],$a=[],tl=new Float32Array(16),el=new Float32Array(9),nl=new Float32Array(4);function gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=qa[i];if(r===void 0&&(r=new Float32Array(i),qa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xs(s,t){let e=$a[t];e===void 0&&(e=new Int32Array(t),$a[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function $p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function ef(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;nl.set(n),s.uniformMatrix2fv(this.addr,!1,nl),_e(e,n)}}function nf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;el.set(n),s.uniformMatrix3fv(this.addr,!1,el),_e(e,n)}}function sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;tl.set(n),s.uniformMatrix4fv(this.addr,!1,tl),_e(e,n)}}function rf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;Me(e,t)||(s.uniform2iv(this.addr,t),_e(e,t))}function af(s,t){const e=this.cache;Me(e,t)||(s.uniform3iv(this.addr,t),_e(e,t))}function lf(s,t){const e=this.cache;Me(e,t)||(s.uniform4iv(this.addr,t),_e(e,t))}function cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;Me(e,t)||(s.uniform2uiv(this.addr,t),_e(e,t))}function hf(s,t){const e=this.cache;Me(e,t)||(s.uniform3uiv(this.addr,t),_e(e,t))}function uf(s,t){const e=this.cache;Me(e,t)||(s.uniform4uiv(this.addr,t),_e(e,t))}function pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||za,i)}function ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qa,i)}function mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ja,i)}function gf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oa,i)}function yf(s){switch(s){case 5126:return jp;case 35664:return qp;case 35665:return $p;case 35666:return tf;case 35674:return ef;case 35675:return nf;case 35676:return sf;case 5124:case 35670:return rf;case 35667:case 35671:return of;case 35668:case 35672:return af;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return df;case 36295:return hf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return gf}}function xf(s,t){s.uniform1fv(this.addr,t)}function bf(s,t){const e=gi(t,this.size,2);s.uniform2fv(this.addr,e)}function Sf(s,t){const e=gi(t,this.size,3);s.uniform3fv(this.addr,e)}function vf(s,t){const e=gi(t,this.size,4);s.uniform4fv(this.addr,e)}function _f(s,t){const e=gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tf(s,t){const e=gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mf(s,t){const e=gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wf(s,t){s.uniform1iv(this.addr,t)}function Lf(s,t){s.uniform2iv(this.addr,t)}function Zf(s,t){s.uniform3iv(this.addr,t)}function If(s,t){s.uniform4iv(this.addr,t)}function Ef(s,t){s.uniform1uiv(this.addr,t)}function Rf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Pf(s,t,e){const n=t.length,i=Xs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||za,i[r])}function Wf(s,t,e){const n=t.length,i=Xs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Qa,i[r])}function Cf(s,t,e){const n=t.length,i=Xs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ja,i[r])}function Xf(s,t,e){const n=t.length,i=Xs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Oa,i[r])}function Hf(s){switch(s){case 5126:return xf;case 35664:return bf;case 35665:return Sf;case 35666:return vf;case 35674:return _f;case 35675:return Tf;case 35676:return Mf;case 5124:case 35670:return wf;case 35667:case 35671:return Lf;case 35668:case 35672:return Zf;case 35669:case 35673:return If;case 5125:return Ef;case 36294:return Rf;case 36295:return Vf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Uf(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=yf(t.type)}function il(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Hf(t.type)}il.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),_e(t,s)};function sl(s){this.id=s,this.seq=[],this.map={}}sl.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,t[o.id],e)}};const io=/(\w+)(\])?(\[|\.)?/g;function rl(s,t){s.seq.push(t),s.map[t.id]=t}function Ff(s,t,e){const n=s.name,i=n.length;for(io.lastIndex=0;;){const r=io.exec(n),o=io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rl(e,c===void 0?new Uf(a,s,t):new il(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new sl(a),rl(e,h)),e=h}}}function bn(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);Ff(i,r,this)}}bn.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)},bn.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)},bn.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}},bn.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function ol(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Af=0;function Df(s){const t=s.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Yf(s){switch(s){case dn:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function al(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+Df(s.getShaderSource(t))}function Nf(s,t){const e=Yf(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function kf(s,t){let e;switch(t){case dd:e="Linear";break;case hd:e="Reinhard";break;case ud:e="OptimizedCineon";break;case pd:e="ACESFilmic";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kf(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Bf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jf(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ui(s){return s!==""}function ll(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(zf,Of)}function Of(s,t){const e=Ut[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return so(e)}const Qf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(s){return s.replace(jf,hl).replace(Qf,qf)}function qf(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hl(s,t,e,n)}function hl(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ul(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $f(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function tm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case kn:case Kn:t="ENVMAP_TYPE_CUBE";break;case os:case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function em(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Kn:case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function nm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rs:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function im(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t/32+1)+3,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$f(e),c=tm(e),d=em(e),h=nm(e),u=im(e),p=e.isWebGL2?"":Kf(e),g=Bf(r),y=i.createProgram();let S,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=[g].filter(Ui).join(`
`),S.length>0&&(S+=`
`),m=[p,g].filter(Ui).join(`
`),m.length>0&&(m+=`
`)):(S=[ul(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),m=[p,ul(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==cn?kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.encodings_pars_fragment,Nf("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),o=so(o),o=ll(o,e),o=cl(o,e),a=so(a),a=ll(a,e),a=cl(a,e),o=dl(o),a=dl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=f+S+o,w=f+m+a,v=ol(i,35633,L),G=ol(i,35632,w);if(i.attachShader(y,v),i.attachShader(y,G),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),s.debug.checkShaderErrors){const ct=i.getProgramInfoLog(y).trim(),k=i.getShaderInfoLog(v).trim(),b=i.getShaderInfoLog(G).trim();let I=!0,V=!0;if(i.getProgramParameter(y,35714)===!1){I=!1;const C=al(i,v,"vertex"),D=al(i,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,35715)+`

Program Info Log: `+ct+`
`+C+`
`+D)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(k===""||b==="")&&(V=!1);V&&(this.diagnostics={runnable:I,programLog:ct,vertexShader:{log:k,prefix:S},fragmentShader:{log:b,prefix:m}})}i.deleteShader(v),i.deleteShader(G);let P;this.getUniforms=function(){return P===void 0&&(P=new bn(i,y)),P};let Q;return this.getAttributes=function(){return Q===void 0&&(Q=Jf(i,y)),Q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.name=e.shaderName,this.id=Af++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=G,this}let rm=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new am;e.set(t,n)}return e.get(t)}}class am{constructor(){this.id=rm++,this.usedTimes=0}}function lm(s,t,e,n,i,r,o){const a=new Ea,l=new om,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures;let y=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){const V=b.skeleton.bones;if(u)return 1024;{const D=Math.floor((p-20)/4),H=Math.min(D,V.length);return H<V.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+V.length+" bones. This GPU supports "+H+"."),0):H}}function f(b,I,V,C,D){const H=C.fog,N=D.geometry,W=b.isMeshStandardMaterial?C.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),nt=!!K&&(K.mapping===os||K.mapping===pr)?K.image.height:null,j=S[b.type],it=D.isSkinnedMesh?m(D):0;b.precision!==null&&(y=i.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const ut=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,At=ut!==void 0?ut.length:0;let wt=0;N.morphAttributes.position!==void 0&&(wt=1),N.morphAttributes.normal!==void 0&&(wt=2),N.morphAttributes.color!==void 0&&(wt=3);let z,Dt,Vt,mt;if(j){const tt=ze[j];z=tt.vertexShader,Dt=tt.fragmentShader}else z=b.vertexShader,Dt=b.fragmentShader,l.update(b),Vt=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);const gt=s.getRenderTarget(),Xt=b.alphaTest>0,U=b.clearcoat>0;return{isWebGL2:d,shaderID:j,shaderName:b.type,vertexShader:z,fragmentShader:Dt,defines:b.defines,customVertexShaderID:Vt,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:g,outputEncoding:gt===null?s.outputEncoding:gt.isXRRenderTarget===!0?gt.texture.encoding:dn,map:!!b.map,matcap:!!b.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:nt,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Hd,tangentSpaceNormalMap:b.normalMapType===jn,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===te,clearcoat:U,clearcoatMap:U&&!!b.clearcoatMap,clearcoatRoughnessMap:U&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:U&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Yn,alphaMap:!!b.alphaMap,alphaTest:Xt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0&&it>0,maxBones:it,useVertexTexture:u,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:wt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:cn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===ce,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function L(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)I.push(V),I.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(w(I,b),v(I,b),I.push(s.outputEncoding)),I.push(b.customProgramCacheKey),I.join()}function w(b,I){b.push(I.precision),b.push(I.outputEncoding),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.combine),b.push(I.vertexUvs),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.maxBones),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection)}function v(b,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.map&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.lightMap&&a.enable(7),I.aoMap&&a.enable(8),I.emissiveMap&&a.enable(9),I.bumpMap&&a.enable(10),I.normalMap&&a.enable(11),I.objectSpaceNormalMap&&a.enable(12),I.tangentSpaceNormalMap&&a.enable(13),I.clearcoat&&a.enable(14),I.clearcoatMap&&a.enable(15),I.clearcoatRoughnessMap&&a.enable(16),I.clearcoatNormalMap&&a.enable(17),I.displacementMap&&a.enable(18),I.specularMap&&a.enable(19),I.roughnessMap&&a.enable(20),I.metalnessMap&&a.enable(21),I.gradientMap&&a.enable(22),I.alphaMap&&a.enable(23),I.alphaTest&&a.enable(24),I.vertexColors&&a.enable(25),I.vertexAlphas&&a.enable(26),I.vertexUvs&&a.enable(27),I.vertexTangents&&a.enable(28),I.uvsVertexOnly&&a.enable(29),I.fog&&a.enable(30),b.push(a.mask),a.disableAll(),I.useFog&&a.enable(0),I.flatShading&&a.enable(1),I.logarithmicDepthBuffer&&a.enable(2),I.skinning&&a.enable(3),I.useVertexTexture&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.physicallyCorrectLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.depthPacking&&a.enable(13),I.dithering&&a.enable(14),I.specularIntensityMap&&a.enable(15),I.specularColorMap&&a.enable(16),I.transmission&&a.enable(17),I.transmissionMap&&a.enable(18),I.thicknessMap&&a.enable(19),I.sheen&&a.enable(20),I.sheenColorMap&&a.enable(21),I.sheenRoughnessMap&&a.enable(22),I.decodeVideoTexture&&a.enable(23),I.opaque&&a.enable(24),b.push(a.mask)}function G(b){const I=S[b.type];let V;if(I){const C=ze[I];V=eh.clone(C.uniforms)}else V=b.uniforms;return V}function P(b,I){let V;for(let C=0,D=c.length;C<D;C++){const H=c[C];if(H.cacheKey===I){V=H,++V.usedTimes;break}}return V===void 0&&(V=new sm(s,I,b,r),c.push(V)),V}function Q(b){if(--b.usedTimes===0){const I=c.indexOf(b);c[I]=c[c.length-1],c.pop(),b.destroy()}}function ct(b){l.remove(b)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:L,getUniforms:G,acquireProgram:P,releaseProgram:Q,releaseShaderCache:ct,programs:c,dispose:k}}function cm(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function dm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,u,p,g,y,S){let m=s[t];return m===void 0?(m={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:S},s[t]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=y,m.group=S),t++,m}function a(h,u,p,g,y,S){const m=o(h,u,p,g,y,S);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(h,u,p,g,y,S){const m=o(h,u,p,g,y,S);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,u){e.length>1&&e.sort(h||dm),n.length>1&&n.sort(u||pl),i.length>1&&i.sort(u||pl)}function d(){for(let h=t,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function hm(){let s=new WeakMap;function t(n,i){let r;return s.has(n)===!1?(r=new fl,s.set(n,[r])):i>=s.get(n).length?(r=new fl,s.get(n).push(r)):r=s.get(n)[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function um(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new E};break;case"SpotLight":e={position:new M,direction:new M,color:new E,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new E,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new E,groundColor:new E};break;case"RectAreaLight":e={color:new E,position:new M,halfWidth:new M,halfHeight:new M};break}return s[t.id]=e,e}}}function pm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fm=0;function mm(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function gm(s,t){const e=new um,n=pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)i.probe.push(new M);const r=new M,o=new vt,a=new vt;function l(d,h){let u=0,p=0,g=0;for(let ct=0;ct<9;ct++)i.probe[ct].set(0,0,0);let y=0,S=0,m=0,f=0,L=0,w=0,v=0,G=0;d.sort(mm);const P=h!==!0?Math.PI:1;for(let ct=0,k=d.length;ct<k;ct++){const b=d[ct],I=b.color,V=b.intensity,C=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=I.r*V*P,p+=I.g*V*P,g+=I.b*V*P;else if(b.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],V);else if(b.isDirectionalLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity*P),b.castShadow){const N=b.shadow,W=n.get(b);W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=D,i.directionalShadowMatrix[y]=b.shadow.matrix,w++}i.directional[y]=H,y++}else if(b.isSpotLight){const H=e.get(b);if(H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(I).multiplyScalar(V*P),H.distance=C,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,b.castShadow){const N=b.shadow,W=n.get(b);W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.spotShadow[m]=W,i.spotShadowMap[m]=D,i.spotShadowMatrix[m]=b.shadow.matrix,G++}i.spot[m]=H,m++}else if(b.isRectAreaLight){const H=e.get(b);H.color.copy(I).multiplyScalar(V),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=H,f++}else if(b.isPointLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity*P),H.distance=b.distance,H.decay=b.decay,b.castShadow){const N=b.shadow,W=n.get(b);W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,W.shadowCameraNear=N.camera.near,W.shadowCameraFar=N.camera.far,i.pointShadow[S]=W,i.pointShadowMap[S]=D,i.pointShadowMatrix[S]=b.shadow.matrix,v++}i.point[S]=H,S++}else if(b.isHemisphereLight){const H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(V*P),H.groundColor.copy(b.groundColor).multiplyScalar(V*P),i.hemi[L]=H,L++}}f>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const Q=i.hash;(Q.directionalLength!==y||Q.pointLength!==S||Q.spotLength!==m||Q.rectAreaLength!==f||Q.hemiLength!==L||Q.numDirectionalShadows!==w||Q.numPointShadows!==v||Q.numSpotShadows!==G)&&(i.directional.length=y,i.spot.length=m,i.rectArea.length=f,i.point.length=S,i.hemi.length=L,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=G,i.spotShadowMap.length=G,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=G,Q.directionalLength=y,Q.pointLength=S,Q.spotLength=m,Q.rectAreaLength=f,Q.hemiLength=L,Q.numDirectionalShadows=w,Q.numPointShadows=v,Q.numSpotShadows=G,i.version=fm++)}function c(d,h){let u=0,p=0,g=0,y=0,S=0;const m=h.matrixWorldInverse;for(let f=0,L=d.length;f<L;f++){const w=d[f];if(w.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(w.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),g++}else if(w.isRectAreaLight){const v=i.rectArea[y];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),v.direction.normalize(),S++}}}return{setup:l,setupView:c,state:i}}function ml(s,t){const e=new gm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ym(s,t){let e=new WeakMap;function n(r,o=0){let a;return e.has(r)===!1?(a=new ml(s,t),e.set(r,[a])):o>=e.get(r).length?(a=new ml(s,t),e.get(r).push(a)):a=e.get(r)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ro extends he{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}ro.prototype.isMeshDepthMaterial=!0;class oo extends he{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}oo.prototype.isMeshDistanceMaterial=!0;const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gl(s,t,e){let n=new Ws;const i=new q,r=new q,o=new rt,a=new ro({depthPacking:Xd}),l=new oo,c={},d=e.maxTextureSize,h={0:ce,1:Ri,2:Dn},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:xm,fragmentShader:bm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ze(g,u),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do,this.render=function(w,v,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;const P=s.getRenderTarget(),Q=s.getActiveCubeFace(),ct=s.getActiveMipmapLevel(),k=s.state;k.setBlending($e),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let b=0,I=w.length;b<I;b++){const V=w[b],C=V.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const D=C.getFrameExtents();if(i.multiply(D),r.copy(C.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/D.x),i.x=r.x*D.x,C.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/D.y),i.y=r.y*D.y,C.mapSize.y=r.y)),C.map===null&&!C.isPointLightShadow&&this.type===Ei){const N={minFilter:de,magFilter:de,format:be};C.map=new Le(i.x,i.y,N),C.map.texture.name=V.name+".shadowMap",C.mapPass=new Le(i.x,i.y,N),C.camera.updateProjectionMatrix()}if(C.map===null){const N={minFilter:$t,magFilter:$t,format:be};C.map=new Le(i.x,i.y,N),C.map.texture.name=V.name+".shadowMap",C.camera.updateProjectionMatrix()}s.setRenderTarget(C.map),s.clear();const H=C.getViewportCount();for(let N=0;N<H;N++){const W=C.getViewport(N);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),k.viewport(o),C.updateMatrices(V,N),n=C.getFrustum(),L(v,G,C.camera,V,this.type)}!C.isPointLightShadow&&this.type===Ei&&m(C,G),C.needsUpdate=!1}S.needsUpdate=!1,s.setRenderTarget(P,Q,ct)};function m(w,v){const G=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(v,null,G,u,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(v,null,G,p,y,null)}function f(w,v,G,P,Q,ct){let k=null;const b=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0?k=b:k=G.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const I=k.uuid,V=v.uuid;let C=c[I];C===void 0&&(C={},c[I]=C);let D=C[V];D===void 0&&(D=k.clone(),C[V]=D),k=D}return k.visible=v.visible,k.wireframe=v.wireframe,ct===Ei?k.side=v.shadowSide!==null?v.shadowSide:v.side:k.side=v.shadowSide!==null?v.shadowSide:h[v.side],k.alphaMap=v.alphaMap,k.alphaTest=v.alphaTest,k.clipShadows=v.clipShadows,k.clippingPlanes=v.clippingPlanes,k.clipIntersection=v.clipIntersection,k.displacementMap=v.displacementMap,k.displacementScale=v.displacementScale,k.displacementBias=v.displacementBias,k.wireframeLinewidth=v.wireframeLinewidth,k.linewidth=v.linewidth,G.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(G.matrixWorld),k.nearDistance=P,k.farDistance=Q),k}function L(w,v,G,P,Q){if(w.visible===!1)return;if(w.layers.test(v.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&Q===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);const b=t.update(w),I=w.material;if(Array.isArray(I)){const V=b.groups;for(let C=0,D=V.length;C<D;C++){const H=V[C],N=I[H.materialIndex];if(N&&N.visible){const W=f(w,N,P,G.near,G.far,Q);s.renderBufferDirect(G,null,b,W,w,H)}}}else if(I.visible){const V=f(w,I,P,G.near,G.far,Q);s.renderBufferDirect(G,null,b,V,w,null)}}const k=w.children;for(let b=0,I=k.length;b<I;b++)L(k[b],v,G,P,Q)}}function Sm(s,t,e){const n=e.isWebGL2;function i(){let Z=!1;const pt=new rt;let dt=null;const Pt=new rt(0,0,0,0);return{setMask:function(ht){dt!==ht&&!Z&&(s.colorMask(ht,ht,ht,ht),dt=ht)},setLocked:function(ht){Z=ht},setClear:function(ht,et,Rt,Yt,Te){Te===!0&&(ht*=Yt,et*=Yt,Rt*=Yt),pt.set(ht,et,Rt,Yt),Pt.equals(pt)===!1&&(s.clearColor(ht,et,Rt,Yt),Pt.copy(pt))},reset:function(){Z=!1,dt=null,Pt.set(-1,0,0,0)}}}function r(){let Z=!1,pt=null,dt=null,Pt=null;return{setTest:function(ht){ht?wt(2929):z(2929)},setMask:function(ht){pt!==ht&&!Z&&(s.depthMask(ht),pt=ht)},setFunc:function(ht){if(dt!==ht){if(ht)switch(ht){case ed:s.depthFunc(512);break;case nd:s.depthFunc(519);break;case id:s.depthFunc(513);break;case Vi:s.depthFunc(515);break;case sd:s.depthFunc(514);break;case rd:s.depthFunc(518);break;case od:s.depthFunc(516);break;case ad:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);dt=ht}},setLocked:function(ht){Z=ht},setClear:function(ht){Pt!==ht&&(s.clearDepth(ht),Pt=ht)},reset:function(){Z=!1,pt=null,dt=null,Pt=null}}}function o(){let Z=!1,pt=null,dt=null,Pt=null,ht=null,et=null,Rt=null,Yt=null,Te=null;return{setTest:function(jt){Z||(jt?wt(2960):z(2960))},setMask:function(jt){pt!==jt&&!Z&&(s.stencilMask(jt),pt=jt)},setFunc:function(jt,Ye,Ne){(dt!==jt||Pt!==Ye||ht!==Ne)&&(s.stencilFunc(jt,Ye,Ne),dt=jt,Pt=Ye,ht=Ne)},setOp:function(jt,Ye,Ne){(et!==jt||Rt!==Ye||Yt!==Ne)&&(s.stencilOp(jt,Ye,Ne),et=jt,Rt=Ye,Yt=Ne)},setLocked:function(jt){Z=jt},setClear:function(jt){Te!==jt&&(s.clearStencil(jt),Te=jt)},reset:function(){Z=!1,pt=null,dt=null,Pt=null,ht=null,et=null,Rt=null,Yt=null,Te=null}}}const a=new i,l=new r,c=new o;let d={},h={},u=new WeakMap,p=[],g=null,y=!1,S=null,m=null,f=null,L=null,w=null,v=null,G=null,P=!1,Q=null,ct=null,k=null,b=null,I=null;const V=s.getParameter(35661);let C=!1,D=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(H)[1]),C=D>=1):H.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),C=D>=2);let N=null,W={};const K=s.getParameter(3088),nt=s.getParameter(2978),j=new rt().fromArray(K),it=new rt().fromArray(nt);function ut(Z,pt,dt){const Pt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(Z,ht),s.texParameteri(Z,10241,9728),s.texParameteri(Z,10240,9728);for(let et=0;et<dt;et++)s.texImage2D(pt+et,0,6408,1,1,0,6408,5121,Pt);return ht}const At={};At[3553]=ut(3553,3553,1),At[34067]=ut(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(2929),l.setFunc(Vi),tt(!1),ft(Ao),wt(2884),U($e);function wt(Z){d[Z]!==!0&&(s.enable(Z),d[Z]=!0)}function z(Z){d[Z]!==!1&&(s.disable(Z),d[Z]=!1)}function Dt(Z,pt){return h[Z]!==pt?(s.bindFramebuffer(Z,pt),h[Z]=pt,n&&(Z===36009&&(h[36160]=pt),Z===36160&&(h[36009]=pt)),!0):!1}function Vt(Z,pt){let dt=p,Pt=!1;if(Z)if(dt=u.get(pt),dt===void 0&&(dt=[],u.set(pt,dt)),Z.isWebGLMultipleRenderTargets){const ht=Z.texture;if(dt.length!==ht.length||dt[0]!==36064){for(let et=0,Rt=ht.length;et<Rt;et++)dt[et]=36064+et;dt.length=ht.length,Pt=!0}}else dt[0]!==36064&&(dt[0]=36064,Pt=!0);else dt[0]!==1029&&(dt[0]=1029,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function mt(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}const gt={[Nn]:32774,[kc]:32778,[Kc]:32779};if(n)gt[Ko]=32775,gt[Bo]=32776;else{const Z=t.get("EXT_blend_minmax");Z!==null&&(gt[Ko]=Z.MIN_EXT,gt[Bo]=Z.MAX_EXT)}const Xt={[Bc]:0,[Jc]:1,[zc]:768,[Jo]:770,[td]:776,[qc]:774,[Qc]:772,[Oc]:769,[zo]:771,[$c]:775,[jc]:773};function U(Z,pt,dt,Pt,ht,et,Rt,Yt){if(Z===$e){y===!0&&(z(3042),y=!1);return}if(y===!1&&(wt(3042),y=!0),Z!==Nc){if(Z!==S||Yt!==P){if((m!==Nn||w!==Nn)&&(s.blendEquation(32774),m=Nn,w=Nn),Yt)switch(Z){case Yn:s.blendFuncSeparate(1,771,1,771);break;case ss:s.blendFunc(1,1);break;case No:s.blendFuncSeparate(0,769,0,1);break;case ko:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Yn:s.blendFuncSeparate(770,771,1,771);break;case ss:s.blendFunc(770,1);break;case No:s.blendFuncSeparate(0,769,0,1);break;case ko:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}f=null,L=null,v=null,G=null,S=Z,P=Yt}return}ht=ht||pt,et=et||dt,Rt=Rt||Pt,(pt!==m||ht!==w)&&(s.blendEquationSeparate(gt[pt],gt[ht]),m=pt,w=ht),(dt!==f||Pt!==L||et!==v||Rt!==G)&&(s.blendFuncSeparate(Xt[dt],Xt[Pt],Xt[et],Xt[Rt]),f=dt,L=Pt,v=et,G=Rt),S=Z,P=null}function $(Z,pt){Z.side===Dn?z(2884):wt(2884);let dt=Z.side===ce;pt&&(dt=!dt),tt(dt),Z.blending===Yn&&Z.transparent===!1?U($e):U(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),a.setMask(Z.colorWrite);const Pt=Z.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(Z.stencilWriteMask),c.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),c.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),_t(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?wt(32926):z(32926)}function tt(Z){Q!==Z&&(Z?s.frontFace(2304):s.frontFace(2305),Q=Z)}function ft(Z){Z!==Ac?(wt(2884),Z!==ct&&(Z===Ao?s.cullFace(1029):Z===Dc?s.cullFace(1028):s.cullFace(1032))):z(2884),ct=Z}function at(Z){Z!==k&&(C&&s.lineWidth(Z),k=Z)}function _t(Z,pt,dt){Z?(wt(32823),(b!==pt||I!==dt)&&(s.polygonOffset(pt,dt),b=pt,I=dt)):z(32823)}function xt(Z){Z?wt(3089):z(3089)}function Gt(Z){Z===void 0&&(Z=33984+V-1),N!==Z&&(s.activeTexture(Z),N=Z)}function F(Z,pt){N===null&&Gt();let dt=W[N];dt===void 0&&(dt={type:void 0,texture:void 0},W[N]=dt),(dt.type!==Z||dt.texture!==pt)&&(s.bindTexture(Z,pt||At[Z]),dt.type=Z,dt.texture=pt)}function _(){const Z=W[N];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function x(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function A(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function B(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Tt(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function J(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(Z){j.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),j.copy(Z))}function bt(Z){it.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),it.copy(Z))}function yt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},N=null,W={},h={},u=new WeakMap,p=[],g=null,y=!1,S=null,m=null,f=null,L=null,w=null,v=null,G=null,P=!1,Q=null,ct=null,k=null,b=null,I=null,j.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:wt,disable:z,bindFramebuffer:Dt,drawBuffers:Vt,useProgram:mt,setBlending:U,setMaterial:$,setFlipSided:tt,setCullFace:ft,setLineWidth:at,setPolygonOffset:_t,setScissorTest:xt,activeTexture:Gt,bindTexture:F,unbindTexture:_,compressedTexImage2D:x,texImage2D:J,texImage3D:It,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:A,texSubImage3D:B,compressedTexSubImage2D:st,scissor:Et,viewport:bt,reset:yt}}function vm(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,d=i.maxTextureSize,h=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,x){return S?new OffscreenCanvas(_,x):Wi("canvas")}function f(_,x,A,B){let st=1;if((_.width>B||_.height>B)&&(st=B/Math.max(_.width,_.height)),st<1||x===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const lt=x?Zr:Math.floor,Tt=lt(st*_.width),J=lt(st*_.height);g===void 0&&(g=m(Tt,J));const It=A?m(Tt,J):g;return It.width=Tt,It.height=J,It.getContext("2d").drawImage(_,0,0,Tt,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+Tt+"x"+J+")."),It}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function L(_){return va(_.width)&&va(_.height)}function w(_){return a?!1:_.wrapS!==Ue||_.wrapT!==Ue||_.minFilter!==$t&&_.minFilter!==de}function v(_,x){return _.generateMipmaps&&x&&_.minFilter!==$t&&_.minFilter!==de}function G(_){s.generateMipmap(_)}function P(_,x,A,B,st=!1){if(a===!1)return x;if(_!==null){if(s[_]!==void 0)return s[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let lt=x;return x===6403&&(A===5126&&(lt=33326),A===5131&&(lt=33325),A===5121&&(lt=33321)),x===33319&&(A===5126&&(lt=33328),A===5131&&(lt=33327),A===5121&&(lt=33323)),x===6408&&(A===5126&&(lt=34836),A===5131&&(lt=34842),A===5121&&(lt=B===te&&st===!1?35907:32856),A===32819&&(lt=32854),A===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function Q(_,x,A){return v(_,A)===!0||_.isFramebufferTexture&&_.minFilter!==$t&&_.minFilter!==de?Math.log2(Math.max(x.width,x.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?x.mipmaps.length:1}function ct(_){return _===$t||_===Qo||_===jo?9728:9729}function k(_){const x=_.target;x.removeEventListener("dispose",k),I(x),x.isVideoTexture&&p.delete(x)}function b(_){const x=_.target;x.removeEventListener("dispose",b),C(x)}function I(_){const x=n.get(_);if(x.__webglInit===void 0)return;const A=_.source,B=y.get(A);if(B){const st=B[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&V(_),Object.keys(B).length===0&&y.delete(A)}n.remove(_)}function V(_){const x=n.get(_);s.deleteTexture(x.__webglTexture);const A=_.source,B=y.get(A);delete B[x.__cacheKey],o.memory.textures--}function C(_){const x=_.texture,A=n.get(_),B=n.get(x);if(B.__webglTexture!==void 0&&(s.deleteTexture(B.__webglTexture),o.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)s.deleteFramebuffer(A.__webglFramebuffer[st]),A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[st]);else s.deleteFramebuffer(A.__webglFramebuffer),A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer&&s.deleteRenderbuffer(A.__webglColorRenderbuffer),A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer);if(_.isWebGLMultipleRenderTargets)for(let st=0,lt=x.length;st<lt;st++){const Tt=n.get(x[st]);Tt.__webglTexture&&(s.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(x[st])}n.remove(x),n.remove(_)}let D=0;function H(){D=0}function N(){const _=D;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),D+=1,_}function W(_){const x=[];return x.push(_.wrapS),x.push(_.wrapT),x.push(_.magFilter),x.push(_.minFilter),x.push(_.anisotropy),x.push(_.internalFormat),x.push(_.format),x.push(_.type),x.push(_.generateMipmaps),x.push(_.premultiplyAlpha),x.push(_.flipY),x.push(_.unpackAlignment),x.push(_.encoding),x.join()}function K(_,x){const A=n.get(_);if(_.isVideoTexture&&Gt(_),_.version>0&&A.__version!==_.version){const B=_.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(A,_,x);return}}e.activeTexture(33984+x),e.bindTexture(3553,A.__webglTexture)}function nt(_,x){const A=n.get(_);if(_.version>0&&A.__version!==_.version){Dt(A,_,x);return}e.activeTexture(33984+x),e.bindTexture(35866,A.__webglTexture)}function j(_,x){const A=n.get(_);if(_.version>0&&A.__version!==_.version){Dt(A,_,x);return}e.activeTexture(33984+x),e.bindTexture(32879,A.__webglTexture)}function it(_,x){const A=n.get(_);if(_.version>0&&A.__version!==_.version){Vt(A,_,x);return}e.activeTexture(33984+x),e.bindTexture(34067,A.__webglTexture)}const ut={[fr]:10497,[Ue]:33071,[mr]:33648},At={[$t]:9728,[Qo]:9984,[jo]:9986,[de]:9729,[md]:9985,[as]:9987};function wt(_,x,A){if(A?(s.texParameteri(_,10242,ut[x.wrapS]),s.texParameteri(_,10243,ut[x.wrapT]),(_===32879||_===35866)&&s.texParameteri(_,32882,ut[x.wrapR]),s.texParameteri(_,10240,At[x.magFilter]),s.texParameteri(_,10241,At[x.minFilter])):(s.texParameteri(_,10242,33071),s.texParameteri(_,10243,33071),(_===32879||_===35866)&&s.texParameteri(_,32882,33071),(x.wrapS!==Ue||x.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(_,10240,ct(x.magFilter)),s.texParameteri(_,10241,ct(x.minFilter)),x.minFilter!==$t&&x.minFilter!==de&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");if(x.type===Zn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Bn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(_,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function z(_,x){let A=!1;_.__webglInit===void 0&&(_.__webglInit=!0,x.addEventListener("dispose",k));const B=x.source;let st=y.get(B);st===void 0&&(st={},y.set(B,st));const lt=W(x);if(lt!==_.__cacheKey){st[lt]===void 0&&(st[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,A=!0),st[lt].usedTimes++;const Tt=st[_.__cacheKey];Tt!==void 0&&(st[_.__cacheKey].usedTimes--,Tt.usedTimes===0&&V(x)),_.__cacheKey=lt,_.__webglTexture=st[lt].texture}return A}function Dt(_,x,A){let B=3553;x.isDataArrayTexture&&(B=35866),x.isData3DTexture&&(B=32879);const st=z(_,x),lt=x.source;if(e.activeTexture(33984+A),e.bindTexture(B,_.__webglTexture),lt.version!==lt.__currentVersion||st===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const Tt=w(x)&&L(x.image)===!1;let J=f(x.image,Tt,!1,d);J=F(x,J);const It=L(J)||a,Et=r.convert(x.format,x.encoding);let bt=r.convert(x.type),yt=P(x.internalFormat,Et,bt,x.encoding,x.isVideoTexture);wt(B,x,It);let Z;const pt=x.mipmaps,dt=a&&x.isVideoTexture!==!0,Pt=_.__version===void 0,ht=Q(x,J,It);if(x.isDepthTexture)yt=6402,a?x.type===Zn?yt=36012:x.type===ls?yt=33190:x.type===Jn?yt=35056:yt=33189:x.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===In&&yt===6402&&x.type!==Gi&&x.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Gi,bt=r.convert(x.type)),x.format===zn&&yt===6402&&(yt=34041,x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Jn,bt=r.convert(x.type))),dt&&Pt?e.texStorage2D(3553,1,yt,J.width,J.height):e.texImage2D(3553,0,yt,J.width,J.height,0,Et,bt,null);else if(x.isDataTexture)if(pt.length>0&&It){dt&&Pt&&e.texStorage2D(3553,ht,yt,pt[0].width,pt[0].height);for(let et=0,Rt=pt.length;et<Rt;et++)Z=pt[et],dt?e.texSubImage2D(3553,et,0,0,Z.width,Z.height,Et,bt,Z.data):e.texImage2D(3553,et,yt,Z.width,Z.height,0,Et,bt,Z.data);x.generateMipmaps=!1}else dt?(Pt&&e.texStorage2D(3553,ht,yt,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,Et,bt,J.data)):e.texImage2D(3553,0,yt,J.width,J.height,0,Et,bt,J.data);else if(x.isCompressedTexture){dt&&Pt&&e.texStorage2D(3553,ht,yt,pt[0].width,pt[0].height);for(let et=0,Rt=pt.length;et<Rt;et++)Z=pt[et],x.format!==be?Et!==null?dt?e.compressedTexSubImage2D(3553,et,0,0,Z.width,Z.height,Et,Z.data):e.compressedTexImage2D(3553,et,yt,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(3553,et,0,0,Z.width,Z.height,Et,bt,Z.data):e.texImage2D(3553,et,yt,Z.width,Z.height,0,Et,bt,Z.data)}else if(x.isDataArrayTexture)dt?(Pt&&e.texStorage3D(35866,ht,yt,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Et,bt,J.data)):e.texImage3D(35866,0,yt,J.width,J.height,J.depth,0,Et,bt,J.data);else if(x.isData3DTexture)dt?(Pt&&e.texStorage3D(32879,ht,yt,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Et,bt,J.data)):e.texImage3D(32879,0,yt,J.width,J.height,J.depth,0,Et,bt,J.data);else if(x.isFramebufferTexture)dt&&Pt?e.texStorage2D(3553,ht,yt,J.width,J.height):e.texImage2D(3553,0,yt,J.width,J.height,0,Et,bt,null);else if(pt.length>0&&It){dt&&Pt&&e.texStorage2D(3553,ht,yt,pt[0].width,pt[0].height);for(let et=0,Rt=pt.length;et<Rt;et++)Z=pt[et],dt?e.texSubImage2D(3553,et,0,0,Et,bt,Z):e.texImage2D(3553,et,yt,Et,bt,Z);x.generateMipmaps=!1}else dt?(Pt&&e.texStorage2D(3553,ht,yt,J.width,J.height),e.texSubImage2D(3553,0,0,0,Et,bt,J)):e.texImage2D(3553,0,yt,Et,bt,J);v(x,It)&&G(B),lt.__currentVersion=lt.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function Vt(_,x,A){if(x.image.length!==6)return;const B=z(_,x),st=x.source;if(e.activeTexture(33984+A),e.bindTexture(34067,_.__webglTexture),st.version!==st.__currentVersion||B===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Tt=x.image[0]&&x.image[0].isDataTexture,J=[];for(let et=0;et<6;et++)!lt&&!Tt?J[et]=f(x.image[et],!1,!0,c):J[et]=Tt?x.image[et].image:x.image[et],J[et]=F(x,J[et]);const It=J[0],Et=L(It)||a,bt=r.convert(x.format,x.encoding),yt=r.convert(x.type),Z=P(x.internalFormat,bt,yt,x.encoding),pt=a&&x.isVideoTexture!==!0,dt=_.__version===void 0;let Pt=Q(x,It,Et);wt(34067,x,Et);let ht;if(lt){pt&&dt&&e.texStorage2D(34067,Pt,Z,It.width,It.height);for(let et=0;et<6;et++){ht=J[et].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const Yt=ht[Rt];x.format!==be?bt!==null?pt?e.compressedTexSubImage2D(34069+et,Rt,0,0,Yt.width,Yt.height,bt,Yt.data):e.compressedTexImage2D(34069+et,Rt,Z,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?e.texSubImage2D(34069+et,Rt,0,0,Yt.width,Yt.height,bt,yt,Yt.data):e.texImage2D(34069+et,Rt,Z,Yt.width,Yt.height,0,bt,yt,Yt.data)}}}else{ht=x.mipmaps,pt&&dt&&(ht.length>0&&Pt++,e.texStorage2D(34067,Pt,Z,J[0].width,J[0].height));for(let et=0;et<6;et++)if(Tt){pt?e.texSubImage2D(34069+et,0,0,0,J[et].width,J[et].height,bt,yt,J[et].data):e.texImage2D(34069+et,0,Z,J[et].width,J[et].height,0,bt,yt,J[et].data);for(let Rt=0;Rt<ht.length;Rt++){const Te=ht[Rt].image[et].image;pt?e.texSubImage2D(34069+et,Rt+1,0,0,Te.width,Te.height,bt,yt,Te.data):e.texImage2D(34069+et,Rt+1,Z,Te.width,Te.height,0,bt,yt,Te.data)}}else{pt?e.texSubImage2D(34069+et,0,0,0,bt,yt,J[et]):e.texImage2D(34069+et,0,Z,bt,yt,J[et]);for(let Rt=0;Rt<ht.length;Rt++){const Yt=ht[Rt];pt?e.texSubImage2D(34069+et,Rt+1,0,0,bt,yt,Yt.image[et]):e.texImage2D(34069+et,Rt+1,Z,bt,yt,Yt.image[et])}}}v(x,Et)&&G(34067),st.__currentVersion=st.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function mt(_,x,A,B,st){const lt=r.convert(A.format,A.encoding),Tt=r.convert(A.type),J=P(A.internalFormat,lt,Tt,A.encoding);n.get(x).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,J,x.width,x.height,x.depth,0,lt,Tt,null):e.texImage2D(st,0,J,x.width,x.height,0,lt,Tt,null)),e.bindFramebuffer(36160,_),xt(x)?u.framebufferTexture2DMultisampleEXT(36160,B,st,n.get(A).__webglTexture,0,_t(x)):s.framebufferTexture2D(36160,B,st,n.get(A).__webglTexture,0),e.bindFramebuffer(36160,null)}function gt(_,x,A){if(s.bindRenderbuffer(36161,_),x.depthBuffer&&!x.stencilBuffer){let B=33189;if(A||xt(x)){const st=x.depthTexture;st&&st.isDepthTexture&&(st.type===Zn?B=36012:st.type===ls&&(B=33190));const lt=_t(x);xt(x)?u.renderbufferStorageMultisampleEXT(36161,lt,B,x.width,x.height):s.renderbufferStorageMultisample(36161,lt,B,x.width,x.height)}else s.renderbufferStorage(36161,B,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,_)}else if(x.depthBuffer&&x.stencilBuffer){const B=_t(x);A&&xt(x)===!1?s.renderbufferStorageMultisample(36161,B,35056,x.width,x.height):xt(x)?u.renderbufferStorageMultisampleEXT(36161,B,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,_)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture[0]:x.texture,st=r.convert(B.format,B.encoding),lt=r.convert(B.type),Tt=P(B.internalFormat,st,lt,B.encoding),J=_t(x);A&&xt(x)===!1?s.renderbufferStorageMultisample(36161,J,Tt,x.width,x.height):xt(x)?u.renderbufferStorageMultisampleEXT(36161,J,Tt,x.width,x.height):s.renderbufferStorage(36161,Tt,x.width,x.height)}s.bindRenderbuffer(36161,null)}function Xt(_,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,_),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const B=n.get(x.depthTexture).__webglTexture,st=_t(x);if(x.depthTexture.format===In)xt(x)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,st):s.framebufferTexture2D(36160,36096,3553,B,0);else if(x.depthTexture.format===zn)xt(x)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,st):s.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function U(_){const x=n.get(_),A=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");Xt(x.__webglFramebuffer,_)}else if(A){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)e.bindFramebuffer(36160,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=s.createRenderbuffer(),gt(x.__webglDepthbuffer[B],_,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),gt(x.__webglDepthbuffer,_,!1);e.bindFramebuffer(36160,null)}function $(_,x,A){const B=n.get(_);x!==void 0&&mt(B.__webglFramebuffer,_,_.texture,36064,3553),A!==void 0&&U(_)}function tt(_){const x=_.texture,A=n.get(_),B=n.get(x);_.addEventListener("dispose",b),_.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=x.version,o.memory.textures++);const st=_.isWebGLCubeRenderTarget===!0,lt=_.isWebGLMultipleRenderTargets===!0,Tt=L(_)||a;if(st){A.__webglFramebuffer=[];for(let J=0;J<6;J++)A.__webglFramebuffer[J]=s.createFramebuffer()}else if(A.__webglFramebuffer=s.createFramebuffer(),lt)if(i.drawBuffers){const J=_.texture;for(let It=0,Et=J.length;It<Et;It++){const bt=n.get(J[It]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&_.samples>0&&xt(_)===!1){A.__webglMultisampledFramebuffer=s.createFramebuffer(),A.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,A.__webglColorRenderbuffer);const J=r.convert(x.format,x.encoding),It=r.convert(x.type),Et=P(x.internalFormat,J,It,x.encoding),bt=_t(_);s.renderbufferStorageMultisample(36161,bt,Et,_.width,_.height),e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,A.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),_.depthBuffer&&(A.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(A.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(36160,null)}if(st){e.bindTexture(34067,B.__webglTexture),wt(34067,x,Tt);for(let J=0;J<6;J++)mt(A.__webglFramebuffer[J],_,x,36064,34069+J);v(x,Tt)&&G(34067),e.unbindTexture()}else if(lt){const J=_.texture;for(let It=0,Et=J.length;It<Et;It++){const bt=J[It],yt=n.get(bt);e.bindTexture(3553,yt.__webglTexture),wt(3553,bt,Tt),mt(A.__webglFramebuffer,_,bt,36064+It,3553),v(bt,Tt)&&G(3553)}e.unbindTexture()}else{let J=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(a?J=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(J,B.__webglTexture),wt(J,x,Tt),mt(A.__webglFramebuffer,_,x,36064,J),v(x,Tt)&&G(J),e.unbindTexture()}_.depthBuffer&&U(_)}function ft(_){const x=L(_)||a,A=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let B=0,st=A.length;B<st;B++){const lt=A[B];if(v(lt,x)){const Tt=_.isWebGLCubeRenderTarget?34067:3553,J=n.get(lt).__webglTexture;e.bindTexture(Tt,J),G(Tt),e.unbindTexture()}}}function at(_){if(a&&_.samples>0&&xt(_)===!1){const x=_.width,A=_.height;let B=16384;const st=[36064],lt=_.stencilBuffer?33306:36096;_.depthBuffer&&st.push(lt);const Tt=n.get(_),J=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;J===!1&&(_.depthBuffer&&(B|=256),_.stencilBuffer&&(B|=1024)),e.bindFramebuffer(36008,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,Tt.__webglFramebuffer),J===!0&&(s.invalidateFramebuffer(36008,[lt]),s.invalidateFramebuffer(36009,[lt])),s.blitFramebuffer(0,0,x,A,0,0,x,A,B,9728),s.invalidateFramebuffer(36008,st),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,Tt.__webglMultisampledFramebuffer)}}function _t(_){return Math.min(h,_.samples)}function xt(_){const x=n.get(_);return a&&_.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Gt(_){const x=o.render.frame;p.get(_)!==x&&(p.set(_,x),_.update())}function F(_,x){const A=_.encoding,B=_.format,st=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Tr||A!==dn&&(A===te?a===!1?t.has("EXT_sRGB")===!0&&B===be?(_.format=Tr,_.minFilter=de,_.generateMipmaps=!1):x=En.sRGBToLinear(x):(B!==be||st!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",A)),x}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=nt,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=$,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xt}function _m(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===Ln)return 5121;if(r===bd)return 32819;if(r===Sd)return 32820;if(r===gd)return 5120;if(r===yd)return 5122;if(r===Gi)return 5123;if(r===xd)return 5124;if(r===ls)return 5125;if(r===Zn)return 5126;if(r===Bn)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vd)return 6406;if(r===be)return 6408;if(r===Td)return 6409;if(r===Md)return 6410;if(r===In)return 6402;if(r===zn)return 34041;if(r===wd)return 6403;if(r===_d)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Tr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ld)return 36244;if(r===Zd)return 33319;if(r===Id)return 33320;if(r===Ed)return 36249;if(r===gr||r===yr||r===xr||r===br)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qo||r===$o||r===ta||r===ea)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ta)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===na||r===ia)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===na)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ia)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sa||r===ra||r===oa||r===aa||r===la||r===ca||r===da||r===ha||r===ua||r===pa||r===fa||r===ma||r===ga||r===ya)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===sa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ra)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===aa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===la)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ca)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===da)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ha)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ua)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ma)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ga)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ya)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===xa)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Jn)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class yl extends Ie{constructor(t=[]){super();this.cameras=t}}yl.prototype.isArrayCamera=!0;class Fi extends Kt{constructor(){super();this.type="Group"}}Fi.prototype.isGroup=!0;const Tm={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm))),c&&t.hand){o=!0;for(const y of t.hand.values()){const S=e.getJointPose(y,n);if(c.joints[y.jointName]===void 0){const f=new Fi;f.matrixAutoUpdate=!1,f.visible=!1,c.joints[y.jointName]=f,c.add(f)}const m=c.joints[y.jointName];S!==null&&(m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=S.radius),m.visible=S!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class xl extends ie{constructor(t,e,n,i,r,o,a,l,c,d){if(d=d!==void 0?d:In,d!==In&&d!==zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===In&&(n=Gi),n===void 0&&d===zn&&(n=Jn);super(null,i,r,o,a,l,d,n,c);this.image={width:t,height:e},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}xl.prototype.isDepthTexture=!0;class Mm extends Be{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,d=null,h=null,u=null;const p=e.getContextAttributes();let g=null,y=null;const S=[],m=new Map,f=new Ie;f.layers.enable(1),f.viewport=new rt;const L=new Ie;L.layers.enable(2),L.viewport=new rt;const w=[f,L],v=new yl;v.layers.enable(1),v.layers.enable(2);let G=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=S[W];return K===void 0&&(K=new ao,S[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=S[W];return K===void 0&&(K=new ao,S[W]=K),K.getGripSpace()},this.getHand=function(W){let K=S[W];return K===void 0&&(K=new ao,S[W]=K),K.getHandSpace()};function Q(W){const K=m.get(W.inputSource);K&&K.dispatchEvent({type:W.type,data:W.inputSource})}function ct(){m.forEach(function(W,K){W.disconnect(K)}),m.clear(),G=null,P=null,t.setRenderTarget(g),h=null,d=null,c=null,i=null,y=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return c},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",ct),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:h}),y=new Le(h.framebufferWidth,h.framebufferHeight,{format:be,type:Ln,encoding:t.outputEncoding})}else{let K=null,nt=null,j=null;p.depth&&(j=p.stencil?35056:33190,K=p.stencil?zn:In,nt=p.stencil?Jn:Gi);const it={colorFormat:t.outputEncoding===te?35907:32856,depthFormat:j,scaleFactor:r};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(it),i.updateRenderState({layers:[d]}),y=new Le(d.textureWidth,d.textureHeight,{format:be,type:Ln,depthTexture:new xl(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const ut=t.properties.get(y);ut.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(W){const K=i.inputSources;for(let nt=0;nt<S.length;nt++)m.set(K[nt],S[nt]);for(let nt=0;nt<W.removed.length;nt++){const j=W.removed[nt],it=m.get(j);it&&(it.dispatchEvent({type:"disconnected",data:j}),m.delete(j))}for(let nt=0;nt<W.added.length;nt++){const j=W.added[nt],it=m.get(j);it&&it.dispatchEvent({type:"connected",data:j})}}const b=new M,I=new M;function V(W,K,nt){b.setFromMatrixPosition(K.matrixWorld),I.setFromMatrixPosition(nt.matrixWorld);const j=b.distanceTo(I),it=K.projectionMatrix.elements,ut=nt.projectionMatrix.elements,At=it[14]/(it[10]-1),wt=it[14]/(it[10]+1),z=(it[9]+1)/it[5],Dt=(it[9]-1)/it[5],Vt=(it[8]-1)/it[0],mt=(ut[8]+1)/ut[0],gt=At*Vt,Xt=At*mt,U=j/(-Vt+mt),$=U*-Vt;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($),W.translateZ(U),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const tt=At+U,ft=wt+U,at=gt-$,_t=Xt+(j-$),xt=z*wt/ft*tt,Gt=Dt*wt/ft*tt;W.projectionMatrix.makePerspective(at,_t,xt,Gt,tt,ft)}function C(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=L.near=f.near=W.near,v.far=L.far=f.far=W.far,(G!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),G=v.near,P=v.far);const K=W.parent,nt=v.cameras;C(v,K);for(let it=0;it<nt.length;it++)C(nt[it],K);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),W.position.copy(v.position),W.quaternion.copy(v.quaternion),W.scale.copy(v.scale),W.matrix.copy(v.matrix),W.matrixWorld.copy(v.matrixWorld);const j=W.children;for(let it=0,ut=j.length;it<ut;it++)j[it].updateMatrixWorld(!0);nt.length===2?V(v,f,L):v.projectionMatrix.copy(f.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){d!==null&&(d.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)};let D=null;function H(W,K){if(l=K.getViewerPose(o),u=K,l!==null){const j=l.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let it=!1;j.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let ut=0;ut<j.length;ut++){const At=j[ut];let wt=null;if(h!==null)wt=h.getViewport(At);else{const Dt=c.getViewSubImage(d,At);wt=Dt.viewport,ut===0&&(t.setRenderTargetTextures(y,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(y))}const z=w[ut];z.matrix.fromArray(At.transform.matrix),z.projectionMatrix.fromArray(At.projectionMatrix),z.viewport.set(wt.x,wt.y,wt.width,wt.height),ut===0&&v.matrix.copy(z.matrix),it===!0&&v.cameras.push(z)}}const nt=i.inputSources;for(let j=0;j<S.length;j++){const it=S[j],ut=nt[j];it.update(ut,K,o)}D&&D(W,K),u=null}const N=new Aa;N.setAnimationLoop(H),this.setAnimationLoop=function(W){D=W},this.dispose=function(){}}}function wm(s){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function e(m,f,L,w,v){f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),l(m,f)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),f.isMeshPhysicalMaterial?u(m,f,v):h(m,f)):f.isMeshMatcapMaterial?(n(m,f),p(m,f)):f.isMeshDepthMaterial?(n(m,f),g(m,f)):f.isMeshDistanceMaterial?(n(m,f),y(m,f)):f.isMeshNormalMaterial?(n(m,f),S(m,f)):f.isLineBasicMaterial?(i(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,L,w):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const L=s.get(f).envMap;L&&(m.envMap.value=L,m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function i(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,L,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*L,m.scale.value=w*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let L;f.map?L=f.map:f.alphaMap&&(L=f.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),m.uvTransform.value.copy(L.matrix))}function l(m,f){f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function h(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),s.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,L){h(m,f),m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===ce&&m.clearcoatNormalScale.value.negate())),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function g(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function y(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}function S(m,f){f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function Lm(){const s=Wi("canvas");return s.style.display="block",s}function Ot(s={}){const t=s.canvas!==void 0?s.canvas:Lm(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let d;s.context!==void 0?d=e.getContextAttributes().alpha:d=s.alpha!==void 0?s.alpha:!1;let h=null,u=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=dn,this.physicallyCorrectLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;const y=this;let S=!1,m=0,f=0,L=null,w=-1,v=null;const G=new rt,P=new rt;let Q=null,ct=t.width,k=t.height,b=1,I=null,V=null;const C=new rt(0,0,ct,k),D=new rt(0,0,ct,k);let H=!1;const N=new Ws;let W=!1,K=!1,nt=null;const j=new vt,it=new q,ut=new M,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return L===null?b:1}let z=e;function Dt(T,R){for(let Y=0;Y<T.length;Y++){const X=T[Y],O=t.getContext(X,R);if(O!==null)return O}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cr}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",pt,!1),z===null){const R=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&R.shift(),z=Dt(R,T),z===null)throw Dt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Vt,mt,gt,Xt,U,$,tt,ft,at,_t,xt,Gt,F,_,x,A,B,st,lt,Tt,J,It,Et;function bt(){Vt=new Np(z),mt=new Hp(z,Vt,s),Vt.init(mt),It=new _m(z,Vt,mt),gt=new Sm(z,Vt,mt),Xt=new Bp(z),U=new cm,$=new vm(z,Vt,gt,U,mt,It,Xt),tt=new Fp(y),ft=new Yp(y),at=new oh(z,mt),Et=new Cp(z,Vt,at,mt),_t=new kp(z,at,Xt,Et),xt=new Qp(z,_t,at,Xt),lt=new Op(z,mt,$),A=new Up(U),Gt=new lm(y,tt,ft,Vt,mt,Et,A),F=new wm(U),_=new hm,x=new ym(Vt,mt),st=new Wp(y,tt,gt,xt,d,o),B=new gl(y,xt,mt),Tt=new Xp(z,Vt,Xt,mt),J=new Kp(z,Vt,Xt,mt),Xt.programs=Gt.programs,y.capabilities=mt,y.extensions=Vt,y.properties=U,y.renderLists=_,y.shadowMap=B,y.state=gt,y.info=Xt}bt();const yt=new Mm(y,z);this.xr=yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(T){T!==void 0&&(b=T,this.setSize(ct,k,!1))},this.getSize=function(T){return T.set(ct,k)},this.setSize=function(T,R,Y){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=T,k=R,t.width=Math.floor(T*b),t.height=Math.floor(R*b),Y!==!1&&(t.style.width=T+"px",t.style.height=R+"px"),this.setViewport(0,0,T,R)},this.getDrawingBufferSize=function(T){return T.set(ct*b,k*b).floor()},this.setDrawingBufferSize=function(T,R,Y){ct=T,k=R,b=Y,t.width=Math.floor(T*Y),t.height=Math.floor(R*Y),this.setViewport(0,0,T,R)},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,R,Y,X){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,R,Y,X),gt.viewport(G.copy(C).multiplyScalar(b).floor())},this.getScissor=function(T){return T.copy(D)},this.setScissor=function(T,R,Y,X){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,R,Y,X),gt.scissor(P.copy(D).multiplyScalar(b).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){gt.setScissorTest(H=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(T=!0,R=!0,Y=!0){let X=0;T&&(X|=16384),R&&(X|=256),Y&&(X|=1024),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",pt,!1),_.dispose(),x.dispose(),U.dispose(),tt.dispose(),ft.dispose(),xt.dispose(),Et.dispose(),Gt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Yt),yt.removeEventListener("sessionend",Te),nt&&(nt.dispose(),nt=null),jt.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Xt.autoReset,R=B.enabled,Y=B.autoUpdate,X=B.needsUpdate,O=B.type;bt(),Xt.autoReset=T,B.enabled=R,B.autoUpdate=Y,B.needsUpdate=X,B.type=O}function dt(T){const R=T.target;R.removeEventListener("dispose",dt),Pt(R)}function Pt(T){ht(T),U.remove(T)}function ht(T){const R=U.get(T).programs;R!==void 0&&(R.forEach(function(Y){Gt.releaseProgram(Y)}),T.isShaderMaterial&&Gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,R,Y,X,O,Zt){R===null&&(R=At);const Wt=O.isMesh&&O.matrixWorld.determinant()<0,Ht=Xc(T,R,Y,X,O);gt.setMaterial(X,Wt);let Ct=Y.index;const Jt=Y.attributes.position;if(Ct===null){if(Jt===void 0||Jt.count===0)return}else if(Ct.count===0)return;let Nt=1;X.wireframe===!0&&(Ct=_t.getWireframeAttribute(Y),Nt=2),Et.setup(O,X,Ht,Y,Ct);let kt,se=Tt;Ct!==null&&(kt=at.get(Ct),se=J,se.setIndex(kt));const wn=Ct!==null?Ct.count:Jt.count,Un=Y.drawRange.start*Nt,Fn=Y.drawRange.count*Nt,ke=Zt!==null?Zt.start*Nt:0,Bt=Zt!==null?Zt.count*Nt:1/0,An=Math.max(Un,ke),ae=Math.min(wn,Un+Fn,ke+Bt)-1,Ke=Math.max(0,ae-An+1);if(Ke!==0){if(O.isMesh)X.wireframe===!0?(gt.setLineWidth(X.wireframeLinewidth*wt()),se.setMode(1)):se.setMode(4);else if(O.isLine){let ln=X.linewidth;ln===void 0&&(ln=1),gt.setLineWidth(ln*wt()),O.isLineSegments?se.setMode(1):O.isLineLoop?se.setMode(2):se.setMode(3)}else O.isPoints?se.setMode(0):O.isSprite&&se.setMode(4);if(O.isInstancedMesh)se.renderInstances(An,Ke,O.count);else if(Y.isInstancedBufferGeometry){const ln=Math.min(Y.instanceCount,Y._maxInstanceCount);se.renderInstances(An,Ke,ln)}else se.render(An,Ke)}},this.compile=function(T,R){u=x.get(T),u.init(),g.push(u),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(R.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),u.setupLights(y.physicallyCorrectLights),T.traverse(function(Y){const X=Y.material;if(X)if(Array.isArray(X))for(let O=0;O<X.length;O++){const Zt=X[O];or(Zt,T,Y)}else or(X,T,Y)}),g.pop(),u=null};let et=null;function Rt(T){et&&et(T)}function Yt(){jt.stop()}function Te(){jt.start()}const jt=new Aa;jt.setAnimationLoop(Rt),typeof window<"u"&&jt.setContext(window),this.setAnimationLoop=function(T){et=T,yt.setAnimationLoop(T),T===null?jt.stop():jt.start()},yt.addEventListener("sessionstart",Yt),yt.addEventListener("sessionend",Te),this.render=function(T,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(R),R=yt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,R,L),u=x.get(T,g.length),u.init(),g.push(u),j.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),N.setFromProjectionMatrix(j),K=this.localClippingEnabled,W=A.init(this.clippingPlanes,K,R),h=_.get(T,p.length),h.init(),p.push(h),Ye(T,R,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(I,V),W===!0&&A.beginShadows();const Y=u.state.shadowsArray;if(B.render(Y,T,R),W===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(h,T),u.setupLights(y.physicallyCorrectLights),R.isArrayCamera){const X=R.cameras;for(let O=0,Zt=X.length;O<Zt;O++){const Wt=X[O];Ne(h,T,Wt,Wt.viewport)}}else Ne(h,T,R);L!==null&&($.updateMultisampleRenderTarget(L),$.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,R),Et.resetDefaultState(),w=-1,v=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Ye(T,R,Y,X){if(T.visible===!1)return;if(T.layers.test(R.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(R);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||N.intersectsSprite(T)){X&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Wt=xt.update(T),Ht=T.material;Ht.visible&&h.push(T,Wt,Ht,Y,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Xt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Xt.render.frame),!T.frustumCulled||N.intersectsObject(T))){X&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Wt=xt.update(T),Ht=T.material;if(Array.isArray(Ht)){const Ct=Wt.groups;for(let Jt=0,Nt=Ct.length;Jt<Nt;Jt++){const kt=Ct[Jt],se=Ht[kt.materialIndex];se&&se.visible&&h.push(T,Wt,se,Y,ut.z,kt)}}else Ht.visible&&h.push(T,Wt,Ht,Y,ut.z,null)}}const Zt=T.children;for(let Wt=0,Ht=Zt.length;Wt<Ht;Wt++)Ye(Zt[Wt],R,Y,X)}function Ne(T,R,Y,X){const O=T.opaque,Zt=T.transmissive,Wt=T.transparent;u.setupLightsView(Y),Zt.length>0&&Wc(O,R,Y),X&&gt.viewport(G.copy(X)),O.length>0&&is(O,R,Y),Zt.length>0&&is(Zt,R,Y),Wt.length>0&&is(Wt,R,Y),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Wc(T,R,Y){const X=mt.isWebGL2;nt===null&&(nt=new Le(1,1,{generateMipmaps:!0,type:It.convert(Bn)!==null?Bn:Ln,minFilter:as,samples:X&&r===!0?4:0})),y.getDrawingBufferSize(it),X?nt.setSize(it.x,it.y):nt.setSize(Zr(it.x),Zr(it.y));const O=y.getRenderTarget();y.setRenderTarget(nt),y.clear();const Zt=y.toneMapping;y.toneMapping=cn,is(T,R,Y),y.toneMapping=Zt,$.updateMultisampleRenderTarget(nt),$.updateRenderTargetMipmap(nt),y.setRenderTarget(O)}function is(T,R,Y){const X=R.isScene===!0?R.overrideMaterial:null;for(let O=0,Zt=T.length;O<Zt;O++){const Wt=T[O],Ht=Wt.object,Ct=Wt.geometry,Jt=X===null?Wt.material:X,Nt=Wt.group;Ht.layers.test(Y.layers)&&Cc(Ht,R,Y,Ct,Jt,Nt)}}function Cc(T,R,Y,X,O,Zt){T.onBeforeRender(y,R,Y,X,O,Zt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,R,Y,X,T,Zt),O.transparent===!0&&O.side===Dn?(O.side=ce,O.needsUpdate=!0,y.renderBufferDirect(Y,R,X,O,T,Zt),O.side=Ri,O.needsUpdate=!0,y.renderBufferDirect(Y,R,X,O,T,Zt),O.side=Dn):y.renderBufferDirect(Y,R,X,O,T,Zt),T.onAfterRender(y,R,Y,X,O,Zt)}function or(T,R,Y){R.isScene!==!0&&(R=At);const X=U.get(T),O=u.state.lights,Zt=u.state.shadowsArray,Wt=O.state.version,Ht=Gt.getParameters(T,O.state,Zt,R,Y),Ct=Gt.getProgramCacheKey(Ht);let Jt=X.programs;X.environment=T.isMeshStandardMaterial?R.environment:null,X.fog=R.fog,X.envMap=(T.isMeshStandardMaterial?ft:tt).get(T.envMap||X.environment),Jt===void 0&&(T.addEventListener("dispose",dt),Jt=new Map,X.programs=Jt);let Nt=Jt.get(Ct);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===Wt)return Fo(T,Ht),Nt}else Ht.uniforms=Gt.getUniforms(T),T.onBuild(Y,Ht,y),T.onBeforeCompile(Ht,y),Nt=Gt.acquireProgram(Ht,Ct),Jt.set(Ct,Nt),X.uniforms=Ht.uniforms;const kt=X.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=A.uniform),Fo(T,Ht),X.needsLights=Uc(T),X.lightsStateVersion=Wt,X.needsLights&&(kt.ambientLightColor.value=O.state.ambient,kt.lightProbe.value=O.state.probe,kt.directionalLights.value=O.state.directional,kt.directionalLightShadows.value=O.state.directionalShadow,kt.spotLights.value=O.state.spot,kt.spotLightShadows.value=O.state.spotShadow,kt.rectAreaLights.value=O.state.rectArea,kt.ltc_1.value=O.state.rectAreaLTC1,kt.ltc_2.value=O.state.rectAreaLTC2,kt.pointLights.value=O.state.point,kt.pointLightShadows.value=O.state.pointShadow,kt.hemisphereLights.value=O.state.hemi,kt.directionalShadowMap.value=O.state.directionalShadowMap,kt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,kt.spotShadowMap.value=O.state.spotShadowMap,kt.spotShadowMatrix.value=O.state.spotShadowMatrix,kt.pointShadowMap.value=O.state.pointShadowMap,kt.pointShadowMatrix.value=O.state.pointShadowMatrix);const se=Nt.getUniforms(),wn=bn.seqWithValue(se.seq,kt);return X.currentProgram=Nt,X.uniformsList=wn,Nt}function Fo(T,R){const Y=U.get(T);Y.outputEncoding=R.outputEncoding,Y.instancing=R.instancing,Y.skinning=R.skinning,Y.morphTargets=R.morphTargets,Y.morphNormals=R.morphNormals,Y.morphColors=R.morphColors,Y.morphTargetsCount=R.morphTargetsCount,Y.numClippingPlanes=R.numClippingPlanes,Y.numIntersection=R.numClipIntersection,Y.vertexAlphas=R.vertexAlphas,Y.vertexTangents=R.vertexTangents,Y.toneMapping=R.toneMapping}function Xc(T,R,Y,X,O){R.isScene!==!0&&(R=At),$.resetTextureUnits();const Zt=R.fog,Wt=X.isMeshStandardMaterial?R.environment:null,Ht=L===null?y.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:dn,Ct=(X.isMeshStandardMaterial?ft:tt).get(X.envMap||Wt),Jt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Nt=!!X.normalMap&&!!Y.attributes.tangent,kt=!!Y.morphAttributes.position,se=!!Y.morphAttributes.normal,wn=!!Y.morphAttributes.color,Un=X.toneMapped?y.toneMapping:cn,Fn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ke=Fn!==void 0?Fn.length:0,Bt=U.get(X),An=u.state.lights;if(W===!0&&(K===!0||T!==v)){const He=T===v&&X.id===w;A.setState(X,T,He)}let ae=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==An.state.version||Bt.outputEncoding!==Ht||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==Ct||X.fog&&Bt.fog!==Zt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==A.numPlanes||Bt.numIntersection!==A.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==Nt||Bt.morphTargets!==kt||Bt.morphNormals!==se||Bt.morphColors!==wn||Bt.toneMapping!==Un||mt.isWebGL2===!0&&Bt.morphTargetsCount!==ke)&&(ae=!0):(ae=!0,Bt.__version=X.version);let Ke=Bt.currentProgram;ae===!0&&(Ke=or(X,R,O));let ln=!1,Zi=!1,ar=!1;const xe=Ke.getUniforms(),Ii=Bt.uniforms;if(gt.useProgram(Ke.program)&&(ln=!0,Zi=!0,ar=!0),X.id!==w&&(w=X.id,Zi=!0),ln||v!==T){if(xe.setValue(z,"projectionMatrix",T.projectionMatrix),mt.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,Zi=!0,ar=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const He=xe.map.cameraPosition;He!==void 0&&He.setValue(z,ut.setFromMatrixPosition(T.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||O.isSkinnedMesh)&&xe.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(O.isSkinnedMesh){xe.setOptional(z,O,"bindMatrix"),xe.setOptional(z,O,"bindMatrixInverse");const He=O.skeleton;He&&(mt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),xe.setValue(z,"boneTexture",He.boneTexture,$),xe.setValue(z,"boneTextureSize",He.boneTextureSize)):xe.setOptional(z,He,"boneMatrices"))}const lr=Y.morphAttributes;return(lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&mt.isWebGL2===!0)&&lt.update(O,Y,X,Ke),(Zi||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,xe.setValue(z,"receiveShadow",O.receiveShadow)),Zi&&(xe.setValue(z,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&Hc(Ii,ar),Zt&&X.fog&&F.refreshFogUniforms(Ii,Zt),F.refreshMaterialUniforms(Ii,X,b,k,nt),bn.upload(z,Bt.uniformsList,Ii,$)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bn.upload(z,Bt.uniformsList,Ii,$),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(z,"center",O.center),xe.setValue(z,"modelViewMatrix",O.modelViewMatrix),xe.setValue(z,"normalMatrix",O.normalMatrix),xe.setValue(z,"modelMatrix",O.matrixWorld),Ke}function Hc(T,R){T.ambientLightColor.needsUpdate=R,T.lightProbe.needsUpdate=R,T.directionalLights.needsUpdate=R,T.directionalLightShadows.needsUpdate=R,T.pointLights.needsUpdate=R,T.pointLightShadows.needsUpdate=R,T.spotLights.needsUpdate=R,T.spotLightShadows.needsUpdate=R,T.rectAreaLights.needsUpdate=R,T.hemisphereLights.needsUpdate=R,T.directionalShadowMap.needsUpdate=R,T.directionalShadowMatrix.needsUpdate=R,T.spotShadowMap.needsUpdate=R,T.spotShadowMatrix.needsUpdate=R,T.pointShadowMap.needsUpdate=R,T.pointShadowMatrix.needsUpdate=R}function Uc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,R,Y){U.get(T.texture).__webglTexture=R,U.get(T.depthTexture).__webglTexture=Y;const X=U.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,R){const Y=U.get(T);Y.__webglFramebuffer=R,Y.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(T,R=0,Y=0){L=T,m=R,f=Y;let X=!0;if(T){const Ct=U.get(T);Ct.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(36160,null),X=!1):Ct.__webglFramebuffer===void 0?$.setupRenderTarget(T):Ct.__hasExternalTextures&&$.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture)}let O=null,Zt=!1,Wt=!1;if(T){const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture)&&(Wt=!0);const Jt=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(O=Jt[R],Zt=!0):mt.isWebGL2&&T.samples>0&&$.useMultisampledRTT(T)===!1?O=U.get(T).__webglMultisampledFramebuffer:O=Jt,G.copy(T.viewport),P.copy(T.scissor),Q=T.scissorTest}else G.copy(C).multiplyScalar(b).floor(),P.copy(D).multiplyScalar(b).floor(),Q=H;if(gt.bindFramebuffer(36160,O)&&mt.drawBuffers&&X&&gt.drawBuffers(T,O),gt.viewport(G),gt.scissor(P),gt.setScissorTest(Q),Zt){const Ct=U.get(T.texture);z.framebufferTexture2D(36160,36064,34069+R,Ct.__webglTexture,Y)}else if(Wt){const Ct=U.get(T.texture),Jt=R||0;z.framebufferTextureLayer(36160,36064,Ct.__webglTexture,Y||0,Jt)}w=-1},this.readRenderTargetPixels=function(T,R,Y,X,O,Zt,Wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(Ht=Ht[Wt]),Ht){gt.bindFramebuffer(36160,Ht);try{const Ct=T.texture,Jt=Ct.format,Nt=Ct.type;if(Jt!==be&&It.convert(Jt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Nt===Bn&&(Vt.has("EXT_color_buffer_half_float")||mt.isWebGL2&&Vt.has("EXT_color_buffer_float"));if(Nt!==Ln&&It.convert(Nt)!==z.getParameter(35738)&&!(Nt===Zn&&(mt.isWebGL2||Vt.has("OES_texture_float")||Vt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z.checkFramebufferStatus(36160)===36053?R>=0&&R<=T.width-X&&Y>=0&&Y<=T.height-O&&z.readPixels(R,Y,X,O,It.convert(Jt),It.convert(Nt),Zt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ct=L!==null?U.get(L).__webglFramebuffer:null;gt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(T,R,Y=0){if(R.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const X=Math.pow(2,-Y),O=Math.floor(R.image.width*X),Zt=Math.floor(R.image.height*X);$.setTexture2D(R,0),z.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,O,Zt),gt.unbindTexture()},this.copyTextureToTexture=function(T,R,Y,X=0){const O=R.image.width,Zt=R.image.height,Wt=It.convert(Y.format),Ht=It.convert(Y.type);$.setTexture2D(Y,0),z.pixelStorei(37440,Y.flipY),z.pixelStorei(37441,Y.premultiplyAlpha),z.pixelStorei(3317,Y.unpackAlignment),R.isDataTexture?z.texSubImage2D(3553,X,T.x,T.y,O,Zt,Wt,Ht,R.image.data):R.isCompressedTexture?z.compressedTexSubImage2D(3553,X,T.x,T.y,R.mipmaps[0].width,R.mipmaps[0].height,Wt,R.mipmaps[0].data):z.texSubImage2D(3553,X,T.x,T.y,Wt,Ht,R.image),X===0&&Y.generateMipmaps&&z.generateMipmap(3553),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,R,Y,X,O=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Zt=T.max.x-T.min.x+1,Wt=T.max.y-T.min.y+1,Ht=T.max.z-T.min.z+1,Ct=It.convert(X.format),Jt=It.convert(X.type);let Nt;if(X.isData3DTexture)$.setTexture3D(X,0),Nt=32879;else if(X.isDataArrayTexture)$.setTexture2DArray(X,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,X.flipY),z.pixelStorei(37441,X.premultiplyAlpha),z.pixelStorei(3317,X.unpackAlignment);const kt=z.getParameter(3314),se=z.getParameter(32878),wn=z.getParameter(3316),Un=z.getParameter(3315),Fn=z.getParameter(32877),ke=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;z.pixelStorei(3314,ke.width),z.pixelStorei(32878,ke.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Nt,O,R.x,R.y,R.z,Zt,Wt,Ht,Ct,Jt,ke.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Nt,O,R.x,R.y,R.z,Zt,Wt,Ht,Ct,ke.data)):z.texSubImage3D(Nt,O,R.x,R.y,R.z,Zt,Wt,Ht,Ct,Jt,ke),z.pixelStorei(3314,kt),z.pixelStorei(32878,se),z.pixelStorei(3316,wn),z.pixelStorei(3315,Un),z.pixelStorei(32877,Fn),O===0&&X.generateMipmaps&&z.generateMipmap(Nt),gt.unbindTexture()},this.initTexture=function(T){$.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){m=0,f=0,L=null,gt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ot.prototype.isWebGLRenderer=!0;class Zm extends Ot{}Zm.prototype.isWebGL1Renderer=!0;class bl extends Kt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}bl.prototype.isScene=!0;class Ai{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ai.prototype.isInterleavedBuffer=!0;const oe=new M;class ns{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ns(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ns.prototype.isInterleavedBufferAttribute=!0;class Hs extends he{constructor(t){super();this.type="SpriteMaterial",this.color=new E(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Hs.prototype.isSpriteMaterial=!0;let yi;const Di=new M,xi=new M,bi=new M,Si=new q,Yi=new q,Sl=new vt,Us=new M,Ni=new M,Fs=new M,vl=new q,lo=new q,_l=new q;class Tl extends Kt{constructor(t){super();if(this.type="Sprite",yi===void 0){yi=new Qt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ai(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new ns(n,3,0,!1)),yi.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=yi,this.material=t!==void 0?t:new Hs,this.center=new q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),Sl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-bi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;As(Us.set(-.5,-.5,0),bi,o,xi,i,r),As(Ni.set(.5,-.5,0),bi,o,xi,i,r),As(Fs.set(.5,.5,0),bi,o,xi,i,r),vl.set(0,0),lo.set(1,0),_l.set(1,1);let a=t.ray.intersectTriangle(Us,Ni,Fs,!1,Di);if(a===null&&(As(Ni.set(-.5,.5,0),bi,o,xi,i,r),lo.set(0,1),a=t.ray.intersectTriangle(Us,Fs,Ni,!1,Di),a===null))return;const l=t.ray.origin.distanceTo(Di);l<t.near||l>t.far||e.push({distance:l,point:Di.clone(),uv:le.getUV(Di,Us,Ni,Fs,vl,lo,_l,new q),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Tl.prototype.isSprite=!0;function As(s,t,e,n,i,r){Si.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Yi.x=r*Si.x-i*Si.y,Yi.y=i*Si.x+r*Si.y):Yi.copy(Si),s.copy(t),s.x+=Yi.x,s.y+=Yi.y,s.applyMatrix4(Sl)}const Ml=new M,wl=new rt,Ll=new rt,Im=new M,Zl=new vt;class Il extends Ze{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new vt,this.bindMatrixInverse=new vt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new rt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;wl.fromBufferAttribute(i.attributes.skinIndex,t),Ll.fromBufferAttribute(i.attributes.skinWeight,t),Ml.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Ll.getComponent(r);if(o!==0){const a=wl.getComponent(r);Zl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Im.copy(Ml).applyMatrix4(Zl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}Il.prototype.isSkinnedMesh=!0;class Em extends Kt{constructor(){super();this.type="Bone"}}Em.prototype.isBone=!0;class co extends ie{constructor(t=null,e=1,n=1,i,r,o,a,l,c=$t,d=$t,h,u){super(null,o,a,l,c,d,i,r,h,u);this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}co.prototype.isDataTexture=!0;class ho extends re{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}ho.prototype.isInstancedBufferAttribute=!0;const El=new vt,Rl=new vt,Ds=[],ki=new Ze;class Rm extends Ze{constructor(t,e,n){super(t,e);this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,El),Rl.multiplyMatrices(n,El),ki.matrixWorld=Rl,ki.raycast(t,Ds);for(let o=0,a=Ds.length;o<a;o++){const l=Ds[o];l.instanceId=r,l.object=this,e.push(l)}Ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Rm.prototype.isInstancedMesh=!0;class Cn extends he{constructor(t){super();this.type="LineBasicMaterial",this.color=new E(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Cn.prototype.isLineBasicMaterial=!0;const Vl=new M,Gl=new M,Pl=new vt,uo=new ii,Ys=new pn;class po extends Kt{constructor(t=new Qt,e=new Cn){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vl.fromBufferAttribute(e,i-1),Gl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vl.distanceTo(Gl);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;Pl.copy(i).invert(),uo.copy(t.ray).applyMatrix4(Pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new M,d=new M,h=new M,u=new M,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,S=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),f=Math.min(g.count,o.start+o.count);for(let L=m,w=f-1;L<w;L+=p){const v=g.getX(L),G=g.getX(L+1);if(c.fromBufferAttribute(S,v),d.fromBufferAttribute(S,G),uo.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const Q=t.ray.origin.distanceTo(u);Q<t.near||Q>t.far||e.push({distance:Q,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),f=Math.min(S.count,o.start+o.count);for(let L=m,w=f-1;L<w;L+=p){if(c.fromBufferAttribute(S,L),d.fromBufferAttribute(S,L+1),uo.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const G=t.ray.origin.distanceTo(u);G<t.near||G>t.far||e.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}po.prototype.isLine=!0;const Wl=new M,Cl=new M;class Ns extends po{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Wl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wl.distanceTo(Cl);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ns.prototype.isLineSegments=!0;class Vm extends po{constructor(t,e){super(t,e);this.type="LineLoop"}}Vm.prototype.isLineLoop=!0;class fo extends he{constructor(t){super();this.type="PointsMaterial",this.color=new E(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}fo.prototype.isPointsMaterial=!0;const Xl=new vt,mo=new ii,ks=new pn,Ks=new M;class Gm extends Kt{constructor(t=new Qt,e=new fo){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Xl.copy(i).invert(),mo.copy(t.ray).applyMatrix4(Xl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,y=p;g<y;g++){const S=c.getX(g);Ks.fromBufferAttribute(h,S),Hl(Ks,S,l,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,y=p;g<y;g++)Ks.fromBufferAttribute(h,g),Hl(Ks,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Gm.prototype.isPoints=!0;function Hl(s,t,e,n,i,r,o){const a=mo.distanceSqToPoint(s);if(a<e){const l=new M;mo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Pm extends ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c);this.minFilter=o!==void 0?o:de,this.magFilter=r!==void 0?r:de,this.generateMipmaps=!1;const d=this;function h(){d.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Pm.prototype.isVideoTexture=!0;class Wm extends ie{constructor(t,e,n){super({width:t,height:e});this.format=n,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}}Wm.prototype.isFramebufferTexture=!0;class Cm extends ie{constructor(t,e,n,i,r,o,a,l,c,d,h,u){super(null,o,a,l,c,d,i,r,h,u);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Cm.prototype.isCompressedTexture=!0;class Ul extends ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c);this.needsUpdate=!0}}Ul.prototype.isCanvasTexture=!0,new M,new M,new M,new le;class We{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],u=n[i+1]-d,p=(o-d)/u;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new q:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new M,i=[],r=[],o=[],a=new M,l=new vt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bs extends We{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new q,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*h+this.aX,c=u*h+p*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Bs.prototype.isEllipseCurve=!0;class Fl extends Bs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o);this.type="ArcCurve"}}Fl.prototype.isArcCurve=!0;function go(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let u=(o-r)/c-(a-r)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+h)+(l-a)/h;u*=d,p*=d,i(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Js=new M,yo=new go,xo=new go,bo=new go;class Al extends We{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new M){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=i[(a-1)%r]:(Js.subVectors(i[0],i[1]).add(i[0]),c=Js);const h=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?d=i[(a+2)%r]:(Js.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(d),p);y<1e-4&&(y=1),g<1e-4&&(g=y),S<1e-4&&(S=y),yo.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,g,y,S),xo.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,g,y,S),bo.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,g,y,S)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),xo.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),bo.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return n.set(yo.calc(l),xo.calc(l),bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new M().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Al.prototype.isCatmullRomCurve3=!0;function Dl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Xm(s,t){const e=1-s;return e*e*t}function Hm(s,t){return 2*(1-s)*s*t}function Um(s,t){return s*s*t}function Ki(s,t,e,n){return Xm(s,t)+Hm(s,e)+Um(s,n)}function Fm(s,t){const e=1-s;return e*e*e*t}function Am(s,t){const e=1-s;return 3*e*e*s*t}function Dm(s,t){return 3*(1-s)*s*s*t}function Ym(s,t){return s*s*s*t}function Bi(s,t,e,n,i){return Fm(s,t)+Am(s,e)+Dm(s,n)+Ym(s,i)}class So extends We{constructor(t=new q,e=new q,n=new q,i=new q){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new q){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}So.prototype.isCubicBezierCurve=!0;class Yl extends We{constructor(t=new M,e=new M,n=new M,i=new M){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new M){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y),Bi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Yl.prototype.isCubicBezierCurve3=!0;class zs extends We{constructor(t=new q,e=new q){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}zs.prototype.isLineCurve=!0;class Nm extends We{constructor(t=new M,e=new M){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new M){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vo extends We{constructor(t=new q,e=new q,n=new q){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,i.x,r.x,o.x),Ki(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}vo.prototype.isQuadraticBezierCurve=!0;class Nl extends We{constructor(t=new M,e=new M,n=new M){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new M){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,i.x,r.x,o.x),Ki(t,i.y,r.y,o.y),Ki(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Nl.prototype.isQuadraticBezierCurve3=!0;class _o extends We{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new q){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],d=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Dl(a,l.x,c.x,d.x,h.x),Dl(a,l.y,c.y,d.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new q().fromArray(i))}return this}}_o.prototype.isSplineCurve=!0;var kl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Al,CubicBezierCurve:So,CubicBezierCurve3:Yl,EllipseCurve:Bs,LineCurve:zs,LineCurve3:Nm,QuadraticBezierCurve:vo,QuadraticBezierCurve3:Nl,SplineCurve:_o});class km extends We{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new zs(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new kl[i.type]().fromJSON(i))}return this}}class To extends km{constructor(t){super();this.type="Path",this.currentPoint=new q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zs(this.currentPoint.clone(),new q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new vo(this.currentPoint.clone(),new q(t,e),new q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new So(this.currentPoint.clone(),new q(t,e),new q(n,i),new q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Bs(t,e,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ji extends To{constructor(t){super(t);this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new To().fromJSON(i))}return this}}const Km={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Kl(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,d,h,u,p;if(n&&(r=Qm(s,t,r,e)),s.length>80*e){a=c=s[0],l=d=s[1];for(let g=e;g<i;g+=e)h=s[g],u=s[g+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>d&&(d=u);p=Math.max(c-a,d-l),p=p!==0?1/p:0}return zi(r,o,e,a,l,p),o}};function Kl(s,t,e,n,i){let r,o;if(i===a0(s,t,e,n)>0)for(r=t;r<e;r+=n)o=zl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=zl(r,s[r],s[r+1],o);return o&&Os(o,o.next)&&(Qi(o),o=o.next),o}function Sn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||ne(e.prev,e,e.next)===0)){if(Qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&e0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Jm(s,n,i,r):Bm(s)){t.push(l.i/e),t.push(s.i/e),t.push(c.i/e),Qi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=zm(Sn(s),t,e),zi(s,t,e,n,i,r,2)):o===2&&Om(s,t,e,n,i,r):zi(Sn(s),t,e,n,i,r,1);break}}}function Bm(s){const t=s.prev,e=s,n=s.next;if(ne(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(vi(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&ne(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Jm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ne(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,d=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,h=Mo(a,l,t,e,n),u=Mo(c,d,t,e,n);let p=s.prevZ,g=s.nextZ;for(;p&&p.z>=h&&g&&g.z<=u;){if(p!==s.prev&&p!==s.next&&vi(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&ne(p.prev,p,p.next)>=0||(p=p.prevZ,g!==s.prev&&g!==s.next&&vi(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ne(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==s.prev&&p!==s.next&&vi(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&ne(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=u;){if(g!==s.prev&&g!==s.next&&vi(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ne(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function zm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Os(i,r)&&Bl(i,n,n.next,r)&&Oi(i,r)&&Oi(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),Qi(n),Qi(n.next),n=s=r),n=n.next}while(n!==s);return Sn(n)}function Om(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s0(o,a)){let l=Jl(o,a);o=Sn(o,o.next),l=Sn(l,l.next),zi(o,t,e,n,i,r),zi(l,t,e,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function Qm(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Kl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(i0(c));for(i.sort(jm),r=0;r<i.length;r++)qm(i[r],e),e=Sn(e,e.next);return e}function jm(s,t){return s.x-t.x}function qm(s,t){if(t=$m(s,t),t){const e=Jl(t,s);Sn(t,t.next),Sn(e,e.next)}}function $m(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r){if(r=u,u===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let d=1/0,h;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&vi(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)&&(h=Math.abs(i-e.y)/(n-e.x),Oi(e,s)&&(h<d||h===d&&(e.x>o.x||e.x===o.x&&t0(o,e)))&&(o=e,d=h)),e=e.next;while(e!==a);return o}function t0(s,t){return ne(s.prev,s,t.prev)<0&&ne(t.next,s,s.next)<0}function e0(s,t,e,n){let i=s;do i.z===null&&(i.z=Mo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,n0(i)}function n0(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Mo(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function i0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function vi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(r-a)-(i-o)*(n-a)>=0}function s0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!r0(s,t)&&(Oi(s,t)&&Oi(t,s)&&o0(s,t)&&(ne(s.prev,s,t.prev)||ne(s,t.prev,t))||Os(s,t)&&ne(s.prev,s,s.next)>0&&ne(t.prev,t,t.next)>0)}function ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function Bl(s,t,e,n){const i=js(ne(s,t,e)),r=js(ne(s,t,n)),o=js(ne(e,n,s)),a=js(ne(e,n,t));return!!(i!==r&&o!==a||i===0&&Qs(s,e,t)||r===0&&Qs(s,n,t)||o===0&&Qs(e,s,n)||a===0&&Qs(e,t,n))}function Qs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function js(s){return s>0?1:s<0?-1:0}function r0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Bl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Oi(s,t){return ne(s.prev,s,s.next)<0?ne(s,t,s.next)>=0&&ne(s,s.prev,t)>=0:ne(s,t,s.prev)<0||ne(s,s.next,t)<0}function o0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Jl(s,t){const e=new wo(s.i,s.x,s.y),n=new wo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zl(s,t,e,n){const i=new wo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Mn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Mn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ol(t),Ql(n,t);let o=t.length;e.forEach(Ol);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ql(n,e[l]);const a=Km.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ol(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ql(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Li extends Qt{constructor(t=new Ji([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1;let h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,f=e.UVGenerator!==void 0?e.UVGenerator:l0;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=e.amount);let L,w=!1,v,G,P,Q;m&&(L=m.getSpacedPoints(d),w=!0,u=!1,v=m.computeFrenetFrames(d,!1),G=new M,P=new M,Q=new M),u||(S=0,p=0,g=0,y=0);const ct=a.extractPoints(c);let k=ct.shape;const b=ct.holes;if(!Mn.isClockWise(k)){k=k.reverse();for(let U=0,$=b.length;U<$;U++){const tt=b[U];Mn.isClockWise(tt)&&(b[U]=tt.reverse())}}const V=Mn.triangulateShape(k,b),C=k;for(let U=0,$=b.length;U<$;U++){const tt=b[U];k=k.concat(tt)}function D(U,$,tt){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(tt).add(U)}const H=k.length,N=V.length;function W(U,$,tt){let ft,at,_t;const xt=U.x-$.x,Gt=U.y-$.y,F=tt.x-U.x,_=tt.y-U.y,x=xt*xt+Gt*Gt,A=xt*_-Gt*F;if(Math.abs(A)>Number.EPSILON){const B=Math.sqrt(x),st=Math.sqrt(F*F+_*_),lt=$.x-Gt/B,Tt=$.y+xt/B,J=tt.x-_/st,It=tt.y+F/st,Et=((J-lt)*_-(It-Tt)*F)/(xt*_-Gt*F);ft=lt+xt*Et-U.x,at=Tt+Gt*Et-U.y;const bt=ft*ft+at*at;if(bt<=2)return new q(ft,at);_t=Math.sqrt(bt/2)}else{let B=!1;xt>Number.EPSILON?F>Number.EPSILON&&(B=!0):xt<-Number.EPSILON?F<-Number.EPSILON&&(B=!0):Math.sign(Gt)===Math.sign(_)&&(B=!0),B?(ft=-Gt,at=xt,_t=Math.sqrt(x)):(ft=xt,at=Gt,_t=Math.sqrt(x/2))}return new q(ft/_t,at/_t)}const K=[];for(let U=0,$=C.length,tt=$-1,ft=U+1;U<$;U++,tt++,ft++)tt===$&&(tt=0),ft===$&&(ft=0),K[U]=W(C[U],C[tt],C[ft]);const nt=[];let j,it=K.concat();for(let U=0,$=b.length;U<$;U++){const tt=b[U];j=[];for(let ft=0,at=tt.length,_t=at-1,xt=ft+1;ft<at;ft++,_t++,xt++)_t===at&&(_t=0),xt===at&&(xt=0),j[ft]=W(tt[ft],tt[_t],tt[xt]);nt.push(j),it=it.concat(j)}for(let U=0;U<S;U++){const $=U/S,tt=p*Math.cos($*Math.PI/2),ft=g*Math.sin($*Math.PI/2)+y;for(let at=0,_t=C.length;at<_t;at++){const xt=D(C[at],K[at],ft);Dt(xt.x,xt.y,-tt)}for(let at=0,_t=b.length;at<_t;at++){const xt=b[at];j=nt[at];for(let Gt=0,F=xt.length;Gt<F;Gt++){const _=D(xt[Gt],j[Gt],ft);Dt(_.x,_.y,-tt)}}}const ut=g+y;for(let U=0;U<H;U++){const $=u?D(k[U],it[U],ut):k[U];w?(P.copy(v.normals[0]).multiplyScalar($.x),G.copy(v.binormals[0]).multiplyScalar($.y),Q.copy(L[0]).add(P).add(G),Dt(Q.x,Q.y,Q.z)):Dt($.x,$.y,0)}for(let U=1;U<=d;U++)for(let $=0;$<H;$++){const tt=u?D(k[$],it[$],ut):k[$];w?(P.copy(v.normals[U]).multiplyScalar(tt.x),G.copy(v.binormals[U]).multiplyScalar(tt.y),Q.copy(L[U]).add(P).add(G),Dt(Q.x,Q.y,Q.z)):Dt(tt.x,tt.y,h/d*U)}for(let U=S-1;U>=0;U--){const $=U/S,tt=p*Math.cos($*Math.PI/2),ft=g*Math.sin($*Math.PI/2)+y;for(let at=0,_t=C.length;at<_t;at++){const xt=D(C[at],K[at],ft);Dt(xt.x,xt.y,h+tt)}for(let at=0,_t=b.length;at<_t;at++){const xt=b[at];j=nt[at];for(let Gt=0,F=xt.length;Gt<F;Gt++){const _=D(xt[Gt],j[Gt],ft);w?Dt(_.x,_.y+L[d-1].y,L[d-1].x+tt):Dt(_.x,_.y,h+tt)}}}At(),wt();function At(){const U=i.length/3;if(u){let $=0,tt=H*$;for(let ft=0;ft<N;ft++){const at=V[ft];Vt(at[2]+tt,at[1]+tt,at[0]+tt)}$=d+S*2,tt=H*$;for(let ft=0;ft<N;ft++){const at=V[ft];Vt(at[0]+tt,at[1]+tt,at[2]+tt)}}else{for(let $=0;$<N;$++){const tt=V[$];Vt(tt[2],tt[1],tt[0])}for(let $=0;$<N;$++){const tt=V[$];Vt(tt[0]+H*d,tt[1]+H*d,tt[2]+H*d)}}n.addGroup(U,i.length/3-U,0)}function wt(){const U=i.length/3;let $=0;z(C,$),$+=C.length;for(let tt=0,ft=b.length;tt<ft;tt++){const at=b[tt];z(at,$),$+=at.length}n.addGroup(U,i.length/3-U,1)}function z(U,$){let tt=U.length;for(;--tt>=0;){const ft=tt;let at=tt-1;at<0&&(at=U.length-1);for(let _t=0,xt=d+S*2;_t<xt;_t++){const Gt=H*_t,F=H*(_t+1),_=$+ft+Gt,x=$+at+Gt,A=$+at+F,B=$+ft+F;mt(_,x,A,B)}}}function Dt(U,$,tt){l.push(U),l.push($),l.push(tt)}function Vt(U,$,tt){gt(U),gt($),gt(tt);const ft=i.length/3,at=f.generateTopUV(n,i,ft-3,ft-2,ft-1);Xt(at[0]),Xt(at[1]),Xt(at[2])}function mt(U,$,tt,ft){gt(U),gt($),gt(ft),gt($),gt(tt),gt(ft);const at=i.length/3,_t=f.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);Xt(_t[0]),Xt(_t[1]),Xt(_t[3]),Xt(_t[1]),Xt(_t[2]),Xt(_t[3])}function gt(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function Xt(U){r.push(U.x),r.push(U.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return c0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new kl[i.type]().fromJSON(i)),new Li(n,t.options)}}const l0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],d=t[i*3+1];return[new q(r,o),new q(a,l),new q(c,d)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],d=t[n*3+1],h=t[n*3+2],u=t[i*3],p=t[i*3+1],g=t[i*3+2],y=t[r*3],S=t[r*3+1],m=t[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new q(o,1-l),new q(c,1-h),new q(u,1-g),new q(y,1-m)]:[new q(a,1-l),new q(d,1-h),new q(p,1-g),new q(S,1-m)]}};function c0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Uo extends Qt{constructor(t=new Ji([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let d=0;d<t.length;d++)c(t[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new pe(i,3)),this.setAttribute("normal",new pe(r,3)),this.setAttribute("uv",new pe(o,2));function c(d){const h=i.length/3,u=d.extractPoints(e);let p=u.shape;const g=u.holes;Mn.isClockWise(p)===!1&&(p=p.reverse());for(let S=0,m=g.length;S<m;S++){const f=g[S];Mn.isClockWise(f)===!0&&(g[S]=f.reverse())}const y=Mn.triangulateShape(p,g);for(let S=0,m=g.length;S<m;S++){const f=g[S];p=p.concat(f)}for(let S=0,m=p.length;S<m;S++){const f=p[S];i.push(f.x,f.y,0),r.push(0,0,1),o.push(f.x,f.y)}for(let S=0,m=y.length;S<m;S++){const f=y[S],L=f[0]+h,w=f[1]+h,v=f[2]+h;n.push(L,w,v),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return d0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Uo(n,t.curveSegments)}}function d0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class jl extends he{constructor(t){super();this.type="ShadowMaterial",this.color=new E(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}jl.prototype.isShadowMaterial=!0;class Lo extends Ve{constructor(t){super(t);this.type="RawShaderMaterial"}}Lo.prototype.isRawShaderMaterial=!0;class Zo extends he{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new E(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new E(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Zo.prototype.isMeshStandardMaterial=!0;class ql extends Zo{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new E(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new E(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new E(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}ql.prototype.isMeshPhysicalMaterial=!0;class $l extends he{constructor(t){super();this.type="MeshPhongMaterial",this.color=new E(16777215),this.specular=new E(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new E(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}$l.prototype.isMeshPhongMaterial=!0;class tc extends he{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new E(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new E(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}tc.prototype.isMeshToonMaterial=!0;class ec extends he{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}ec.prototype.isMeshNormalMaterial=!0;class nc extends he{constructor(t){super();this.type="MeshLambertMaterial",this.color=new E(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new E(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}nc.prototype.isMeshLambertMaterial=!0;class ic extends he{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new E(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}ic.prototype.isMeshMatcapMaterial=!0;class sc extends Cn{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}sc.prototype.isLineDashedMaterial=!0;const h0={ShadowMaterial:jl,SpriteMaterial:Hs,RawShaderMaterial:Lo,ShaderMaterial:Ve,PointsMaterial:fo,MeshPhysicalMaterial:ql,MeshStandardMaterial:Zo,MeshPhongMaterial:$l,MeshToonMaterial:tc,MeshNormalMaterial:ec,MeshLambertMaterial:nc,MeshDepthMaterial:ro,MeshDistanceMaterial:oo,MeshBasicMaterial:_s,MeshMatcapMaterial:ic,LineDashedMaterial:sc,LineBasicMaterial:Cn,Material:he};he.fromType=function(s){return new h0[s]};const ee={arraySlice:function(s,t,e){return ee.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],d=c.getValueSize(),h=[],u=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<e||g>=n)){h.push(c.times[p]);for(let y=0;y<d;++y)u.push(c.values[p*d+y])}}h.length!==0&&(c.times=ee.convertArray(h,c.times.constructor),c.values=ee.convertArray(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let d=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=h/3);let u=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const g=a.times.length-1;let y;if(r<=a.times[0]){const m=d,f=h-d;y=ee.arraySlice(a.values,m,f)}else if(r>=a.times[g]){const m=g*h+d,f=m+h-d;y=ee.arraySlice(a.values,m,f)}else{const m=a.createInterpolant(),f=d,L=h-d;m.evaluate(r),y=ee.arraySlice(m.resultBuffer,f,L)}l==="quaternion"&&new Se().fromArray(y).normalize().conjugate().toArray(y);const S=c.times.length;for(let m=0;m<S;++m){const f=m*p+u;if(l==="quaternion")Se.multiplyQuaternionsFlat(c.values,f,y,0,c.values,f);else{const L=p-u*2;for(let w=0;w<L;++w)c.values[f+w]-=y[w]}}}return s.blendMode=ba,s}};class vn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}vn.prototype.beforeStart_=vn.prototype.copySampleValue_,vn.prototype.afterEnd_=vn.prototype.copySampleValue_;class u0 extends vn{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:On,endingEnd:On}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qn:r=t,a=2*e-n;break;case hs:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:o=t,l=2*n-e;break;case hs:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),y=g*g,S=y*g,m=-u*S+2*u*y-u*g,f=(1+u)*S+(-1.5-2*u)*y+(-.5+u)*g+1,L=(-1-p)*S+(1.5+p)*y+.5*g,w=p*S-p*y;for(let v=0;v!==a;++v)r[v]=m*o[d+v]+f*o[c+v]+L*o[l+v]+w*o[h+v];return r}}class rc extends vn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}}class p0 extends vn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Oe{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ee.convertArray(e,this.TimeBufferType),this.values=ee.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ee.convertArray(t.times,Array),values:ee.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new p0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new u0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cs:e=this.InterpolantFactoryMethodDiscrete;break;case ds:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ee.arraySlice(n,r,o),this.values=ee.arraySlice(this.values,r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ee.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=ee.arraySlice(this.times),e=ee.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Sr,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const y=e[h+g];if(y!==e[u+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=ee.arraySlice(t,0,o),this.values=ee.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=ee.arraySlice(this.times,0),e=ee.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Oe.prototype.TimeBufferType=Float32Array,Oe.prototype.ValueBufferType=Float32Array,Oe.prototype.DefaultInterpolation=ds;class _i extends Oe{}_i.prototype.ValueTypeName="bool",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=cs,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;class oc extends Oe{}oc.prototype.ValueTypeName="color";class qs extends Oe{}qs.prototype.ValueTypeName="number";class f0 extends vn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let d=c+a;c!==d;c+=4)Se.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ji extends Oe{InterpolantFactoryMethodLinear(t){return new f0(this.times,this.values,this.getValueSize(),t)}}ji.prototype.ValueTypeName="quaternion",ji.prototype.DefaultInterpolation=ds,ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Ti extends Oe{}Ti.prototype.ValueTypeName="string",Ti.prototype.ValueBufferType=Array,Ti.prototype.DefaultInterpolation=cs,Ti.prototype.InterpolantFactoryMethodLinear=void 0,Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Oe{}$s.prototype.ValueTypeName="vector";class ac{constructor(t,e=-1,n,i=vr){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(g0(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Oe.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=ee.getKeyframeOrder(l);l=ee.sortedArray(l,1,d),c=ee.sortedArray(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,y){if(p.length!==0){const S=[],m=[];ee.flattenJSON(p,S,m,g),S.length!==0&&y.push(new h(u,S,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let y=0;y<u[g].morphTargets.length;y++)p[u[g].morphTargets[y]]=-1;for(const y in p){const S=[],m=[];for(let f=0;f!==u[g].morphTargets.length;++f){const L=u[g];S.push(L.time),m.push(L.morphTarget===y?1:0)}i.push(new qs(".morphTargetInfluence["+y+"]",S,m))}l=p.length*o}else{const p=".bones["+e[h].name+"]";n($s,p+".position",u,"pos",i),n(ji,p+".quaternion",u,"rot",i),n($s,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function m0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return oc;case"quaternion":return ji;case"bool":case"boolean":return _i;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function g0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=m0(s.type);if(s.times===void 0){const e=[],n=[];ee.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Mi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class y0{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const x0=new y0;class _n{constructor(t){this.manager=t!==void 0?t:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const an={};class b0 extends _n{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Mi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(an[t]!==void 0){an[t].push({onLoad:e,onProgress:n,onError:i});return}an[t]=[],an[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=an[t],h=c.body.getReader(),u=c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let y=0;const S=new ReadableStream({start(m){f();function f(){h.read().then(({done:L,value:w})=>{if(L)m.close();else{y+=w.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let G=0,P=d.length;G<P;G++){const Q=d[G];Q.onProgress&&Q.onProgress(v)}m.enqueue(w),f()}})}}});return new Response(S)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Mi.add(t,c);const d=an[t];delete an[t];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=an[t];if(d===void 0)throw this.manager.itemError(t),c;delete an[t];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lc extends _n{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Wi("img");function l(){d(),Mi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){d(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class S0 extends _n{constructor(t){super(t)}load(t,e,n,i){const r=new Gs,o=new lc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(d){r.images[c]=d,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class v0 extends _n{constructor(t){super(t)}load(t,e,n,i){const r=new ie,o=new lc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Qe extends Kt{constructor(t,e=1){super();this.type="Light",this.color=new E(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}Qe.prototype.isLight=!0;class _0 extends Qe{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(Kt.DefaultUp),this.updateMatrix(),this.groundColor=new E(e)}copy(t){return Qe.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}_0.prototype.isHemisphereLight=!0;const cc=new vt,dc=new M,hc=new M;class Io{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uc extends Io{constructor(){super(new Ie(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}uc.prototype.isSpotLightShadow=!0;class T0 extends Qe{constructor(t,e,n=0,i=Math.PI/3,r=0,o=1){super(t,e);this.type="SpotLight",this.position.copy(Kt.DefaultUp),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new uc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}T0.prototype.isSpotLight=!0;const pc=new vt,qi=new M,Eo=new M;class fc extends Io{constructor(){super(new Ie(90,1,.5,500));this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-qi.x,-qi.y,-qi.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}fc.prototype.isPointLightShadow=!0;class M0 extends Qe{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}M0.prototype.isPointLight=!0;class mc extends Io{constructor(){super(new qr(-5,5,5,-5,.5,500))}}mc.prototype.isDirectionalLightShadow=!0;class w0 extends Qe{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(Kt.DefaultUp),this.updateMatrix(),this.target=new Kt,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}w0.prototype.isDirectionalLight=!0;class L0 extends Qe{constructor(t,e){super(t,e);this.type="AmbientLight"}}L0.prototype.isAmbientLight=!0;class Z0 extends Qe{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Z0.prototype.isRectAreaLight=!0;class gc{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new M)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}gc.prototype.isSphericalHarmonics3=!0;class Ro extends Qe{constructor(t=new gc,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Ro.prototype.isLightProbe=!0;class I0{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class E0 extends Qt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}E0.prototype.isInstancedBufferGeometry=!0;class R0 extends _n{constructor(t){super(t);typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mi.add(t,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}R0.prototype.isImageBitmapLoader=!0;let tr;const V0={getContext:function(){return tr===void 0&&(tr=new(window.AudioContext||window.webkitAudioContext)),tr},setContext:function(s){tr=s}};class G0 extends _n{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new b0(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);V0.getContext().decodeAudioData(l,function(d){e(d)})}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}}class P0 extends Ro{constructor(t,e,n=1){super(void 0,n);const i=new E().set(t),r=new E().set(e),o=new M(i.r,i.g,i.b),a=new M(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}P0.prototype.isHemisphereLightProbe=!0;class W0 extends Ro{constructor(t,e=1){super(void 0,e);const n=new E().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}W0.prototype.isAmbientLightProbe=!0;class C0 extends Kt{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class X0{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Se.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Se.multiplyQuaternionsFlat(t,o,t,e,t,n),Se.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Vo="\\[\\]\\.:\\/",H0=new RegExp("["+Vo+"]","g"),Go="[^"+Vo+"]",U0="[^"+Vo.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",Go),A0=/(WCOD+)?/.source.replace("WCOD",U0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Go),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Go),N0=new RegExp("^"+F0+A0+D0+Y0+"$"),k0=["material","materials","bones"];class K0{constructor(t,e,n){const i=n||zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class zt{constructor(t,e,n){this.path=e,this.parsedPath=n||zt.parseTrackName(e),this.node=zt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new zt.Composite(t,e,n):new zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(t){const e=N0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);k0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=zt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=K0,zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray],zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class B0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:On,endingEnd:On};for(let c=0;c!==o;++c){const d=r[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ba:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case vr:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Pd;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Vd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Qn,i.endingEnd=Qn):(t?i.endingStart=this.zeroSlopeAtStart?Qn:On:i.endingStart=hs,e?i.endingEnd=this.zeroSlopeAtEnd?Qn:On:i.endingEnd=hs)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}class J0 extends Be{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],p=u.name;let g=d[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const y=e&&e._propertyBindings[h].binding.parsedPath;g=new X0(zt.create(n,p,y),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],d=t._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete h[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new rc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?ac.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vr),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new B0(this,o,e,n);return this._bindAction(d,c),this._addInactiveAction(d,a,r),d}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?ac.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,e[d]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}J0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class z0 extends Ai{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}z0.prototype.isInstancedInterleavedBuffer=!0;class yc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tn=new M,er=new vt,Po=new vt;class O0 extends Ns{constructor(t){const e=xc(t),n=new Qt,i=[],r=[],o=new E(0,0,1),a=new E(0,1,0);for(let c=0;c<e.length;c++){const d=e[c];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new pe(i,3)),n.setAttribute("color",new pe(r,3));const l=new Cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Po.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(er.multiplyMatrices(Po,a.matrixWorld),Tn.setFromMatrixPosition(er),i.setXYZ(o,Tn.x,Tn.y,Tn.z),er.multiplyMatrices(Po,a.parent.matrixWorld),Tn.setFromMatrixPosition(er),i.setXYZ(o+1,Tn.x,Tn.y,Tn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function xc(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,xc(s.children[e]));return t}class Q0 extends Ns{constructor(t=10,e=10,n=4473924,i=8947848){n=new E(n),i=new E(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,p=0,g=-a;u<=e;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=u===r?n:i;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const d=new Qt;d.setAttribute("position",new pe(l,3)),d.setAttribute("color",new pe(c,3));const h=new Cn({vertexColors:!0,toneMapped:!1});super(d,h);this.type="GridHelper"}}const j0=new Float32Array(1);new Int32Array(j0.buffer),We.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(We.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s},To.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)},Q0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},O0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},_n.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),I0.extractUrlBase(s)},_n.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Ge.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)},Ge.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Ge.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},Ge.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},Ge.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)},Hn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")},pn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Ws.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)},ye.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)},ye.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},ye.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},ye.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},vt.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)},vt.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)},vt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},vt.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)},vt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},vt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},vt.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},vt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},vt.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)},vt.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},vt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},vt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},vt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},vt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},vt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},vt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},vt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},vt.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)},vt.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},on.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)},Se.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)},Se.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},ii.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},ii.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)},ii.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},le.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},le.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)},le.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)},le.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)},le.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)},le.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),le.getBarycoord(s,t,e,n,i)},le.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),le.getNormal(s,t,e,n)},Ji.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)},Ji.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Li(this,s)},Ji.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Uo(this,s)},q.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)},q.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},M.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},M.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},M.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)},M.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)},M.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)},M.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)},M.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)},M.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},M.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},rt.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)},rt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Kt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)},Kt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Kt.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)},Kt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Kt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Kt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Ze.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Ze.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Wd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Il.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Ie.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)},Object.defineProperties(Qe.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}}),Object.defineProperties(re.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===us},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(us)}}}),re.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?us:Pi),this},re.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},re.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Qt.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)},Qt.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new re(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)},Qt.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)},Qt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},Qt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},Qt.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)},Qt.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Qt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Ai.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?us:Pi),this},Ai.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Li.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Li.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Li.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},bl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(he.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new E}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Yo}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(Ve.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}}),Ot.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)},Ot.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)},Ot.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ot.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ot.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ot.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ot.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ot.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ot.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ot.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ot.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ot.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ot.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ot.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ot.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)},Ot.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ot.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ot.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ot.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ot.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ot.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ot.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ot.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ot.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ot.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ot.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?te:dn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),Object.defineProperties(gl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Le.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}}),C0.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new G0().load(s,function(n){t.setBuffer(n)}),this},Qr.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)},Qr.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)},En.crossOrigin=void 0,En.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new v0;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r},En.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new S0;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r},En.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},En.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cr);var q0=`precision highp float;
precision highp int;

uniform mat4 projectionMatrix;

uniform float screenWidth;
uniform float screenHeight;
uniform float near;
uniform float far;

uniform sampler2D map;

varying vec2 vUv;

void main() {

	float dx = 1.0 / screenWidth;
	float dy = 1.0 / screenHeight;

	vec3 color = vec3(0.0, 0.0, 0.0);
	color += texture2D(map, vUv + vec2(-dx, -dy)).rgb;
	color += texture2D(map, vUv + vec2(  0, -dy)).rgb;
	color += texture2D(map, vUv + vec2(+dx, -dy)).rgb;
	color += texture2D(map, vUv + vec2(-dx,   0)).rgb;
	color += texture2D(map, vUv + vec2(  0,   0)).rgb;
	color += texture2D(map, vUv + vec2(+dx,   0)).rgb;
	color += texture2D(map, vUv + vec2(-dx,  dy)).rgb;
	color += texture2D(map, vUv + vec2(  0,  dy)).rgb;
	color += texture2D(map, vUv + vec2(+dx,  dy)).rgb;
    
	color = color / 9.0;
	
	gl_FragColor = vec4(color, 1.0);
	
	
}`,$0=Object.freeze({__proto__:null,default:q0}),tg=`precision highp float;
precision highp int;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position =   projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,eg=Object.freeze({__proto__:null,default:tg});class Wg extends Ve{constructor(){super(...arguments);this.vertexShader=eg,this.fragmentShader=$0,this.uniforms={near:{type:"f",value:0},far:{type:"f",value:0},screenWidth:{type:"f",value:0},screenHeight:{type:"f",value:0},map:{type:"t",value:null}}}}var $i=(s=>(s[s.DISABLED=0]="DISABLED",s[s.CLIP_OUTSIDE=1]="CLIP_OUTSIDE",s[s.HIGHLIGHT_INSIDE=2]="HIGHLIGHT_INSIDE",s))($i||{}),Xn=(s=>(s[s.FIXED=0]="FIXED",s[s.ATTENUATED=1]="ATTENUATED",s[s.ADAPTIVE=2]="ADAPTIVE",s))(Xn||{}),wi=(s=>(s[s.SQUARE=0]="SQUARE",s[s.CIRCLE=1]="CIRCLE",s[s.PARABOLOID=2]="PARABOLOID",s))(wi||{}),ts=(s=>(s[s.OCTREE=0]="OCTREE",s[s.KDTREE=1]="KDTREE",s))(ts||{}),nr=(s=>(s[s.FIXED=0]="FIXED",s[s.ATTENUATED=1]="ATTENUATED",s))(nr||{}),ue=(s=>(s[s.RGB=0]="RGB",s[s.COLOR=1]="COLOR",s[s.DEPTH=2]="DEPTH",s[s.HEIGHT=3]="HEIGHT",s[s.ELEVATION=3]="ELEVATION",s[s.INTENSITY=4]="INTENSITY",s[s.INTENSITY_GRADIENT=5]="INTENSITY_GRADIENT",s[s.LOD=6]="LOD",s[s.LEVEL_OF_DETAIL=6]="LEVEL_OF_DETAIL",s[s.POINT_INDEX=7]="POINT_INDEX",s[s.CLASSIFICATION=8]="CLASSIFICATION",s[s.RETURN_NUMBER=9]="RETURN_NUMBER",s[s.SOURCE=10]="SOURCE",s[s.NORMAL=11]="NORMAL",s[s.PHONG=12]="PHONG",s[s.RGB_HEIGHT=13]="RGB_HEIGHT",s[s.COMPOSITE=50]="COMPOSITE",s))(ue||{});const bc=0,Sc=0,vc=1,ng=50,ig=2,sg="PerspectiveCamera";new E(0,0,0);const rg=new rt(1,0,0,1);function _c(s){return parseInt(s.charAt(s.length-1),10)}function og(s,t){const e=s.name,n=t.name;return e.length!==n.length?e.length-n.length:e<n?-1:e>n?1:0}const Tc={0:new rt(.5,.5,.5,1),1:new rt(.5,.5,.5,1),2:new rt(.63,.32,.18,1),3:new rt(0,1,0,1),4:new rt(0,.8,0,1),5:new rt(0,.6,0,1),6:new rt(1,.66,0,1),7:new rt(1,0,1,1),8:new rt(1,0,0,1),9:new rt(0,0,1,1),12:new rt(1,1,0,1),DEFAULT:new rt(.3,.6,.6,.5)};new E(0,0,0),new E(1,1,1),new E(.077,.042,.206),new E(.225,.036,.388),new E(.373,.074,.432),new E(.522,.128,.42),new E(.665,.182,.37),new E(.797,.255,.287),new E(.902,.364,.184),new E(.969,.516,.063),new E(.988,.683,.072),new E(.961,.859,.298),new E(.988,.998,.645),new E(.241,.015,.61),new E(.387,.001,.654),new E(.524,.025,.653),new E(.651,.125,.596),new E(.752,.227,.513),new E(.837,.329,.431),new E(.907,.435,.353),new E(.963,.554,.272),new E(.992,.681,.195),new E(.987,.822,.144),new E(.94,.975,.131),new E(.278,0,.714),1/6,new E(0,0,1),2/6,new E(0,1,1),3/6,new E(0,1,0),4/6,new E(1,1,0),5/6,new E(1,.64,0),new E(1,0,0);const ag=[[0,new E(.3686,.3098,.6353)],[.1,new E(.1961,.5333,.7412)],[.2,new E(.4,.7608,.6471)],[.3,new E(.6706,.8667,.6431)],[.4,new E(.902,.9608,.5961)],[.5,new E(1,1,.749)],[.6,new E(.9961,.8784,.5451)],[.7,new E(.9922,.6824,.3804)],[.8,new E(.9569,.4275,.2627)],[.9,new E(.8353,.2431,.3098)],[1,new E(.6196,.0039,.2588)]];new E(.267,.005,.329),new E(.283,.141,.458),new E(.254,.265,.53),new E(.207,.372,.553),new E(.164,.471,.558),new E(.128,.567,.551),new E(.135,.659,.518),new E(.267,.749,.441),new E(.478,.821,.318),new E(.741,.873,.15),new E(.993,.906,.144),new E(.1647,.2824,.3451),new E(.1338,.3555,.4227),new E(.061,.4319,.4864),new E(0,.5099,.5319),new E(0,.5881,.5569),new E(.137,.665,.5614),new E(.2906,.7395,.5477),new E(.4453,.8099,.5201),new E(.6102,.8748,.485),new E(.7883,.9323,.4514),new E(.9804,.9804,.4314);function lg(s,t,e){const n=s*t,i=new Uint8Array(4*n),r=Math.floor(e.r*255),o=Math.floor(e.g*255),a=Math.floor(e.b*255);for(let c=0;c<n;c++)i[c*3]=r,i[c*3+1]=o,i[c*3+2]=a;const l=new co(i,s,t,be);return l.needsUpdate=!0,l.magFilter=$t,l}function Mc(s){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.rect(0,0,64,64);const i=n.createLinearGradient(0,0,64,64);for(let o=0;o<s.length;o++){const a=s[o];i.addColorStop(a[0],`#${a[1].getHexString()}`)}n.fillStyle=i,n.fill();const r=new Ul(e);return r.needsUpdate=!0,r.minFilter=de,r}function wc(s){const i=new Uint8Array(262144);for(let o=0;o<256;o++)for(let a=0;a<256;a++){const l=o+256*a;let c;s[o]?c=s[o]:s[o%32]?c=s[o%32]:c=s.DEFAULT,i[4*l+0]=255*c.x,i[4*l+1]=255*c.y,i[4*l+2]=255*c.z,i[4*l+3]=255*c.w}const r=new co(i,256,256,be);return r.magFilter=$t,r.needsUpdate=!0,r}var cg=`precision highp float;
precision highp int;

#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
#endif

#if defined paraboloid_point_shape
	#extension GL_EXT_frag_depth : enable
#endif

uniform mat4 viewMatrix;
uniform vec3 cameraPosition;

uniform mat4 projectionMatrix;
uniform float opacity;

uniform float blendHardness;
uniform float blendDepthSupplement;
uniform float fov;
uniform float spacing;
uniform float pcIndex;
uniform float screenWidth;
uniform float screenHeight;

uniform sampler2D depthMap;

#ifdef highlight_point
	uniform vec4 highlightedPointColor;
#endif

varying vec3 vColor;

#if !defined(color_type_point_index)
	varying float vOpacity;
#endif

#if defined(weighted_splats)
	varying float vLinearDepth;
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)
	varying float vLogDepth;
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)
	varying vec3 vViewPosition;
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)
	varying float vRadius;
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)
	varying vec3 vNormal;
#endif

#ifdef highlight_point
	varying float vHighlight;
#endif

float specularStrength = 1.0;

void main() {
	vec3 color = vColor;
	float depth = gl_FragCoord.z;

	#if NUM_CLIPPING_PLANES > 0
		vec4 plane;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif

	
	#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined (weighted_splats)
		float u = 2.0 * gl_PointCoord.x - 1.0;
		float v = 2.0 * gl_PointCoord.y - 1.0;
	#endif
	
	#if defined(circle_point_shape) || defined (weighted_splats)
		float cc = u*u + v*v;
		if(cc > 1.0){
			discard;
		}
	#endif
	
	#if defined weighted_splats
		vec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);
		float sDepth = texture2D(depthMap, uv).r;
		if(vLinearDepth > sDepth + vRadius + blendDepthSupplement){
			discard;
		}
	#endif
		
	#if defined color_type_point_index
		gl_FragColor = vec4(color, pcIndex / 255.0);
	#else
		gl_FragColor = vec4(color, vOpacity);
	#endif

	#if defined(color_type_phong)
		#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0
			vec3 normal = normalize( vNormal );
			normal.z = abs(normal.z);

			vec3 viewPosition = normalize( vViewPosition );
		#endif

		// code taken from three.js phong light fragment shader
	
		#if MAX_POINT_LIGHTS > 0

			vec3 pointDiffuse = vec3( 0.0 );
			vec3 pointSpecular = vec3( 0.0 );

			for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {

				vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );
				vec3 lVector = lPosition.xyz + vViewPosition.xyz;

				float lDistance = 1.0;
				if ( pointLightDistance[ i ] > 0.0 )
					lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );

				lVector = normalize( lVector );

						// diffuse

				float dotProduct = dot( normal, lVector );

				#ifdef WRAP_AROUND

					float pointDiffuseWeightFull = max( dotProduct, 0.0 );
					float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );

				#else

					float pointDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				pointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;

				// specular

				vec3 pointHalfVector = normalize( lVector + viewPosition );
				float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );
				float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );
				pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;
				pointSpecular = vec3(0.0, 0.0, 0.0);
			}
		
		#endif
		
		#if MAX_DIR_LIGHTS > 0

			vec3 dirDiffuse = vec3( 0.0 );
			vec3 dirSpecular = vec3( 0.0 );

			for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {

				vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );
				vec3 dirVector = normalize( lDirection.xyz );

						// diffuse

				float dotProduct = dot( normal, dirVector );

				#ifdef WRAP_AROUND

					float dirDiffuseWeightFull = max( dotProduct, 0.0 );
					float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );

				#else

					float dirDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;

				// specular

				vec3 dirHalfVector = normalize( dirVector + viewPosition );
				float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );
				float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );
				dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;
			}

		#endif
		
		vec3 totalDiffuse = vec3( 0.0 );
		vec3 totalSpecular = vec3( 0.0 );
		
		#if MAX_POINT_LIGHTS > 0

			totalDiffuse += pointDiffuse;
			totalSpecular += pointSpecular;

		#endif
		
		#if MAX_DIR_LIGHTS > 0

			totalDiffuse += dirDiffuse;
			totalSpecular += dirSpecular;

		#endif
		
		gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;

	#endif
	
	#if defined weighted_splats
	    //float w = pow(1.0 - (u*u + v*v), blendHardness);
		
		float wx = 2.0 * length(2.0 * gl_PointCoord - 1.0);
		float w = exp(-wx * wx * 0.5);
		
		//float distance = length(2.0 * gl_PointCoord - 1.0);
		//float w = exp( -(distance * distance) / blendHardness);
		
		gl_FragColor.rgb = gl_FragColor.rgb * w;
		gl_FragColor.a = w;
	#endif
	
	#if defined paraboloid_point_shape
		float wi = 0.0 - ( u*u + v*v);
		vec4 pos = vec4(vViewPosition, 1.0);
		pos.z += wi * vRadius;
		float linearDepth = -pos.z;
		pos = projectionMatrix * pos;
		pos = pos / pos.w;
		float expDepth = pos.z;
		depth = (pos.z + 1.0) / 2.0;
		gl_FragDepthEXT = depth;
		
		#if defined(color_type_depth)
			gl_FragColor.r = linearDepth;
			gl_FragColor.g = expDepth;
		#endif
		
		#if defined(use_edl)
			gl_FragColor.a = log2(linearDepth);
		#endif
		
	#else
		#if defined(use_edl)
			gl_FragColor.a = vLogDepth;
		#endif
	#endif

	#ifdef highlight_point
		if (vHighlight > 0.0) {
			gl_FragColor = highlightedPointColor;
		}
	#endif
}
`,dg=`precision highp float;
precision highp int;

#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
#endif

#define max_clip_boxes 30

attribute vec3 position;
attribute vec3 color;
attribute vec3 normal;
attribute float intensity;
attribute float classification;
attribute float returnNumber;
attribute float numberOfReturns;
attribute float pointSourceID;
attribute vec4 indices;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;

uniform float pcIndex;

uniform float screenWidth;
uniform float screenHeight;
uniform float fov;
uniform float spacing;

#if defined use_clip_box
	uniform mat4 clipBoxes[max_clip_boxes];
#endif

uniform float heightMin;
uniform float heightMax;
uniform float size; // pixel size factor
uniform float minSize; // minimum pixel size
uniform float maxSize; // maximum pixel size
uniform float octreeSize;
uniform vec3 bbSize;
uniform vec3 uColor;
uniform float opacity;
uniform float clipBoxCount;
uniform float level;
uniform float vnStart;
uniform bool isLeafNode;
uniform bool useUnscaledElevation; // Use unscaled z for elevation coloring

uniform float filterByNormalThreshold;
uniform vec2 intensityRange;
uniform float opacityAttenuation;
uniform float intensityGamma;
uniform float intensityContrast;
uniform float intensityBrightness;
uniform float rgbGamma;
uniform float rgbContrast;
uniform float rgbBrightness;
uniform float transition;
uniform float wRGB;
uniform float wIntensity;
uniform float wElevation;
uniform float wClassification;
uniform float wReturnNumber;
uniform float wSourceID;

uniform sampler2D visibleNodes;
uniform sampler2D gradient;
uniform sampler2D classificationLUT;
uniform sampler2D depthMap;

#ifdef highlight_point
	uniform vec3 highlightedPointCoordinate;
	uniform bool enablePointHighlighting;
	uniform float highlightedPointScale;
#endif

varying vec3 vColor;

#if !defined(color_type_point_index)
	varying float vOpacity;
#endif

#if defined(weighted_splats)
	varying float vLinearDepth;
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)
	varying float vLogDepth;
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)
	varying vec3 vViewPosition;
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)
	varying float vRadius;
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)
	varying vec3 vNormal;
#endif

#ifdef highlight_point
	varying float vHighlight;
#endif

// ---------------------
// OCTREE
// ---------------------

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)

/**
 * Rounds the specified number to the closest integer.
 */
float round(float number){
	return floor(number + 0.5);
}

/**
 * Gets the number of 1-bits up to inclusive index position.
 * 
 * number is treated as if it were an integer in the range 0-255
 */
int numberOfOnes(int number, int index) {
	int numOnes = 0;
	int tmp = 128;
	for (int i = 7; i >= 0; i--) {

		if (number >= tmp) {
			number = number - tmp;

			if (i <= index) {
				numOnes++;
			}
		}

		tmp = tmp / 2;
	}

	return numOnes;
}

/**
 * Checks whether the bit at index is 1.0
 *
 * number is treated as if it were an integer in the range 0-255
 */
bool isBitSet(int number, int index){

	// weird multi else if due to lack of proper array, int and bitwise support in WebGL 1.0
	int powi = 1;
	if (index == 0) {
		powi = 1;
	} else if (index == 1) {
		powi = 2;
	} else if (index == 2) {
		powi = 4;
	} else if (index == 3) {
		powi = 8;
	} else if (index == 4) {
		powi = 16;
	} else if (index == 5) {
		powi = 32;
	} else if (index == 6) {
		powi = 64;
	} else if (index == 7) {
		powi = 128;
	}

	int ndp = number / powi;

	return mod(float(ndp), 2.0) != 0.0;
}

/**
 * Gets the the LOD at the point position.
 */
float getLOD() {
	vec3 offset = vec3(0.0, 0.0, 0.0);
	int iOffset = int(vnStart);
	float depth = level;

	for (float i = 0.0; i <= 30.0; i++) {
		float nodeSizeAtLevel = octreeSize  / pow(2.0, i + level + 0.0);
		
		vec3 index3d = (position-offset) / nodeSizeAtLevel;
		index3d = floor(index3d + 0.5);
		int index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));
		
		vec4 value = texture2D(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));
		int mask = int(round(value.r * 255.0));

		if (isBitSet(mask, index)) {
			// there are more visible child nodes at this position
			int advanceG = int(round(value.g * 255.0)) * 256;
			int advanceB = int(round(value.b * 255.0));
			int advanceChild = numberOfOnes(mask, index - 1);
			int advance = advanceG + advanceB + advanceChild;

			iOffset = iOffset + advance;

			depth++;
		} else {
			return value.a * 255.0; // no more visible child nodes at this position
		}
		
		offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;  
	}
		
	return depth;
}

float getPointSizeAttenuation() {
	return 0.5 * pow(2.0, getLOD());
}

#endif

// ---------------------
// KD-TREE
// ---------------------

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)

float getLOD() {
	vec3 offset = vec3(0.0, 0.0, 0.0);
	float intOffset = 0.0;
	float depth = 0.0;
			
	vec3 size = bbSize;	
	vec3 pos = position;
		
	for (float i = 0.0; i <= 1000.0; i++) {
		
		vec4 value = texture2D(visibleNodes, vec2(intOffset / 2048.0, 0.0));
		
		int children = int(value.r * 255.0);
		float next = value.g * 255.0;
		int split = int(value.b * 255.0);
		
		if (next == 0.0) {
		 	return depth;
		}
		
		vec3 splitv = vec3(0.0, 0.0, 0.0);
		if (split == 1) {
			splitv.x = 1.0;
		} else if (split == 2) {
		 	splitv.y = 1.0;
		} else if (split == 4) {
		 	splitv.z = 1.0;
		}
		
		intOffset = intOffset + next;
		
		float factor = length(pos * splitv / size);
		if (factor < 0.5) {
		 	// left
			if (children == 0 || children == 2) {
				return depth;
			}
		} else {
			// right
			pos = pos - size * splitv * 0.5;
			if (children == 0 || children == 1) {
				return depth;
			}
			if (children == 3) {
				intOffset = intOffset + 1.0;
			}
		}
		size = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);
		
		depth++;
	}
		
		
	return depth;	
}

float getPointSizeAttenuation() {
	return 0.5 * pow(1.3, getLOD());
}

#endif

// formula adapted from: http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
float getContrastFactor(float contrast) {
	return (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);
}

vec3 getRGB() {
	#if defined(use_rgb_gamma_contrast_brightness)
	  vec3 rgb = color;
		rgb = pow(rgb, vec3(rgbGamma));
		rgb = rgb + rgbBrightness;
		rgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;
		rgb = clamp(rgb, 0.0, 1.0);
		return rgb;
	#else
		return color;
	#endif
}

float getIntensity() {
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);
	w = pow(w, intensityGamma);
	w = w + intensityBrightness;
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;
	w = clamp(w, 0.0, 1.0);
	
	return w;
}

vec3 getElevation() {
	float w;
	if (useUnscaledElevation) {
		// Use unscaled/unprojected values directly as elevations with a small scale do not work
		w = (position.z - heightMin) / (heightMax - heightMin);
	} else {
		// Original:
		vec4 world = modelMatrix * vec4(position, 1.0);
		w = (world.z - heightMin) / (heightMax - heightMin);
	}
	vec3 cElevation = texture2D(gradient, vec2(w, 1.0 - w)).rgb;
	return cElevation;
}

vec4 getClassification() {
	vec2 uv = vec2(classification / 255.0, 0.5);
	vec4 classColor = texture2D(classificationLUT, uv);
	
	return classColor;
}

vec3 getReturnNumber() {
	if (numberOfReturns == 1.0) {
		return vec3(1.0, 1.0, 0.0);
	} else {
		if (returnNumber == 1.0) {
			return vec3(1.0, 0.0, 0.0);
		} else if (returnNumber == numberOfReturns) {
			return vec3(0.0, 0.0, 1.0);
		} else {
			return vec3(0.0, 1.0, 0.0);
		}
	}
}

vec3 getSourceID() {
	float w = mod(pointSourceID, 10.0) / 10.0;
	return texture2D(gradient, vec2(w, 1.0 - w)).rgb;
}

vec3 getCompositeColor() {
	vec3 c;
	float w;

	c += wRGB * getRGB();
	w += wRGB;
	
	c += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);
	w += wIntensity;
	
	c += wElevation * getElevation();
	w += wElevation;
	
	c += wReturnNumber * getReturnNumber();
	w += wReturnNumber;
	
	c += wSourceID * getSourceID();
	w += wSourceID;
	
	vec4 cl = wClassification * getClassification();
	c += cl.a * cl.rgb;
	w += wClassification * cl.a;

	c = c / w;
	
	if (w == 0.0) {
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);
	}
	
	return c;
}

void main() {
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	gl_Position = projectionMatrix * mvPosition;

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)
		vViewPosition = mvPosition.xyz;
	#endif

	#if defined weighted_splats
		vLinearDepth = gl_Position.w;
	#endif

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)
		vNormal = normalize(normalMatrix * normal);
	#endif

	#if !defined(paraboloid_point_shape) && defined(use_edl)
		vLogDepth = log2(-mvPosition.z);
	#endif

	// ---------------------
	// POINT SIZE
	// ---------------------

	float pointSize = 1.0;
	float slope = tan(fov / 2.0);
	float projFactor =  -0.5 * screenHeight / (slope * mvPosition.z);

	#if defined fixed_point_size
		pointSize = size;
	#elif defined attenuated_point_size
		pointSize = size * spacing * projFactor;
	#elif defined adaptive_point_size
		float worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();
		pointSize = worldSpaceSize * projFactor;
	#endif

	pointSize = max(minSize, pointSize);
	pointSize = min(maxSize, pointSize);

	#if defined(weighted_splats) || defined(paraboloid_point_shape)
		vRadius = pointSize / projFactor;
	#endif
	
	gl_PointSize = pointSize;

	// ---------------------
	// HIGHLIGHTING
	// ---------------------

	#ifdef highlight_point
		vec4 mPosition = modelMatrix * vec4(position, 1.0);
		if (enablePointHighlighting && abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&
			abs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&
			abs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {
			vHighlight = 1.0;
			gl_PointSize = pointSize * highlightedPointScale;
		} else {
			vHighlight = 0.0;
		}
	#endif

	// ---------------------
	// OPACITY
	// ---------------------

	#ifndef color_type_point_index
		#ifdef attenuated_opacity
			vOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);
		#else
			vOpacity = opacity;
		#endif
	#endif

	// ---------------------
	// FILTERING
	// ---------------------

	#ifdef use_filter_by_normal
		if(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {
			// Move point outside clip space space to discard it.
			gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
		}
	#endif

	// ---------------------
	// POINT COLOR
	// ---------------------	

	#ifdef color_type_rgb
		vColor = getRGB();
	#elif defined color_type_height
		vColor = getElevation();
	#elif defined color_type_rgb_height
		vec3 cHeight = getElevation();
		vColor = (1.0 - transition) * getRGB() + transition * cHeight;
	#elif defined color_type_depth
		float linearDepth = -mvPosition.z ;
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;
		vColor = vec3(linearDepth, expDepth, 0.0);
	#elif defined color_type_intensity
		float w = getIntensity();
		vColor = vec3(w, w, w);
	#elif defined color_type_intensity_gradient
		float w = getIntensity();
		vColor = texture2D(gradient, vec2(w, 1.0 - w)).rgb;
	#elif defined color_type_color
		vColor = uColor;
	#elif defined color_type_lod
	float w = getLOD() / 10.0;
	vColor = texture2D(gradient, vec2(w, 1.0 - w)).rgb;
	#elif defined color_type_point_index
		vColor = indices.rgb;
	#elif defined color_type_classification
	  vec4 cl = getClassification(); 
		vColor = cl.rgb;
	#elif defined color_type_return_number
		vColor = getReturnNumber();
	#elif defined color_type_source
		vColor = getSourceID();
	#elif defined color_type_normal
		vColor = (modelMatrix * vec4(normal, 0.0)).xyz;
	#elif defined color_type_phong
		vColor = color;
	#elif defined color_type_composite
		vColor = getCompositeColor();
	#endif
	
	#if !defined color_type_composite && defined color_type_classification
		if (cl.a == 0.0) {
			gl_Position = vec4(100.0, 100.0, 100.0, 0.0);
			return;
		}
	#endif

	// ---------------------
	// CLIPPING
	// ---------------------
	#if NUM_CLIPPING_PLANES > 0
		// TODO: Optimize modelPositions
		vClipPosition = -(modelMatrix * vec4(position, 1.0)).xyz;
	#endif

	#if defined use_clip_box
		bool insideAny = false;
		for (int i = 0; i < max_clip_boxes; i++) {
			if (i == int(clipBoxCount)) {
				break;
			}
		
			vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);
			bool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;
			inside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;
			inside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;
			insideAny = insideAny || inside;
		}

		if (!insideAny) {
			#if defined clip_outside
				gl_Position = vec4(1000.0, 1000.0, 1000.0, 1.0);
			#elif defined clip_highlight_inside && !defined(color_type_depth)
				float c = (vColor.r + vColor.g + vColor.b) / 6.0;
			#endif
		} else {
			#if defined clip_highlight_inside
				vColor.r += 0.5;
			#endif
		}
	#endif
}
`,hg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,Lt=(s,t,e,n)=>{for(var i=n>1?void 0:n?ug(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(t,e,i):o(i))||i);return n&&i&&hg(t,e,i),i};const pg={[ts.OCTREE]:"tree_type_octree",[ts.KDTREE]:"tree_type_kdtree"},fg={[Xn.FIXED]:"fixed_point_size",[Xn.ATTENUATED]:"attenuated_point_size",[Xn.ADAPTIVE]:"adaptive_point_size"},mg={[nr.ATTENUATED]:"attenuated_opacity",[nr.FIXED]:"fixed_opacity"},gg={[wi.SQUARE]:"square_point_shape",[wi.CIRCLE]:"circle_point_shape",[wi.PARABOLOID]:"paraboloid_point_shape"},yg={[ue.RGB]:"color_type_rgb",[ue.COLOR]:"color_type_color",[ue.DEPTH]:"color_type_depth",[ue.HEIGHT]:"color_type_height",[ue.INTENSITY]:"color_type_intensity",[ue.INTENSITY_GRADIENT]:"color_type_intensity_gradient",[ue.LOD]:"color_type_lod",[ue.POINT_INDEX]:"color_type_point_index",[ue.CLASSIFICATION]:"color_type_classification",[ue.RETURN_NUMBER]:"color_type_return_number",[ue.SOURCE]:"color_type_source",[ue.NORMAL]:"color_type_normal",[ue.PHONG]:"color_type_phong",[ue.RGB_HEIGHT]:"color_type_rgb_height",[ue.COMPOSITE]:"color_type_composite"},xg={[$i.DISABLED]:"clip_disabled",[$i.CLIP_OUTSIDE]:"clip_outside",[$i.HIGHLIGHT_INSIDE]:"clip_highlight_inside"},Lc=class extends Lo{constructor(s={}){super();this.lights=!1,this.fog=!1,this.numClipBoxes=0,this.clipBoxes=[],this._clippingPlanes=[],this.visibleNodeTextureOffsets=new Map,this._gradient=ag,this.gradientTexture=Mc(this._gradient),this._classification=Tc,this.classificationTexture=wc(this._classification),this.uniforms={bbSize:St("fv",[0,0,0]),blendDepthSupplement:St("f",0),blendHardness:St("f",2),classificationLUT:St("t",this.classificationTexture||new ie),clipBoxCount:St("f",0),clipBoxes:St("Matrix4fv",[]),depthMap:St("t",null),diffuse:St("fv",[1,1,1]),fov:St("f",1),gradient:St("t",this.gradientTexture||new ie),heightMax:St("f",1),heightMin:St("f",0),intensityBrightness:St("f",0),intensityContrast:St("f",0),intensityGamma:St("f",1),intensityRange:St("fv",[0,65e3]),isLeafNode:St("b",0),level:St("f",0),maxSize:St("f",ng),minSize:St("f",ig),octreeSize:St("f",0),opacity:St("f",1),pcIndex:St("f",0),rgbBrightness:St("f",bc),rgbContrast:St("f",Sc),rgbGamma:St("f",vc),screenHeight:St("f",1),screenWidth:St("f",1),size:St("f",1),spacing:St("f",1),toModel:St("Matrix4f",[]),transition:St("f",.5),uColor:St("c",new E(16777215)),visibleNodes:St("t",this.visibleNodesTexture||new ie),vnStart:St("f",0),wClassification:St("f",0),wElevation:St("f",0),wIntensity:St("f",0),wReturnNumber:St("f",0),wRGB:St("f",1),wSourceID:St("f",0),opacityAttenuation:St("f",1),filterByNormalThreshold:St("f",0),highlightedPointCoordinate:St("fv",new M),highlightedPointColor:St("fv",rg.clone()),enablePointHighlighting:St("b",!0),highlightedPointScale:St("f",2),useUnscaledElevation:St("b",!1),clippingPlanes:St("fv",[]),clipIntersection:St("b",!1)},this.useClipBox=!1,this.weighted=!1,this.pointColorType=ue.RGB,this.pointSizeType=Xn.ADAPTIVE,this.clipMode=$i.DISABLED,this.useEDL=!1,this.shape=wi.CIRCLE,this.treeType=ts.OCTREE,this.pointOpacityType=nr.FIXED,this.useFilterByNormal=!1,this.highlightPoint=!1,this.clippingPlanes=[],this.attributes={position:{type:"fv",value:[]},color:{type:"fv",value:[]},normal:{type:"fv",value:[]},intensity:{type:"f",value:[]},classification:{type:"f",value:[]},returnNumber:{type:"f",value:[]},numberOfReturns:{type:"f",value:[]},pointSourceID:{type:"f",value:[]},indices:{type:"fv",value:[]}},this._clippingPlanes=[];const t=this.visibleNodesTexture=lg(2048,1,new E(16777215));t.minFilter=$t,t.magFilter=$t,this.setUniform("visibleNodes",t),this.treeType=ir(s.treeType,ts.OCTREE),this.size=ir(s.size,1),this.minSize=ir(s.minSize,2),this.maxSize=ir(s.maxSize,50),this.classification=Tc,this.defaultAttributeValues.normal=[0,0,0],this.defaultAttributeValues.classification=[0,0,0],this.defaultAttributeValues.indices=[0,0,0,0],this.vertexColors=!0,this.updateShaderSource()}dispose(){super.dispose(),this.gradientTexture&&(this.gradientTexture.dispose(),this.gradientTexture=void 0),this.visibleNodesTexture&&(this.visibleNodesTexture.dispose(),this.visibleNodesTexture=void 0),this.clearVisibleNodeTextureOffsets(),this.classificationTexture&&(this.classificationTexture.dispose(),this.classificationTexture=void 0),this.depthMap&&(this.depthMap.dispose(),this.depthMap=void 0)}clearVisibleNodeTextureOffsets(){this.visibleNodeTextureOffsets.clear()}updateShaderSource(){this.vertexShader=this.applyDefines(dg),this.fragmentShader=this.applyDefines(cg),this.opacity===1?(this.blending=$e,this.transparent=!1,this.depthTest=!0,this.depthWrite=!0,this.depthFunc=Vi):this.opacity<1&&!this.useEDL&&(this.blending=ss,this.transparent=!0,this.depthTest=!1,this.depthWrite=!0),this.weighted&&(this.blending=ss,this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.depthFunc=Vi),this._clippingPlanes&&this._clippingPlanes.length>0&&this.updateClippingPlanes(),this.needsUpdate=!0}applyDefines(s){const t=[];function e(n){n&&t.push(`#define ${n}`)}return e(pg[this.treeType]),e(fg[this.pointSizeType]),e(gg[this.shape]),e(yg[this.pointColorType]),e(xg[this.clipMode]),e(mg[this.pointOpacityType]),(this.rgbGamma!==vc||this.rgbBrightness!==bc||this.rgbContrast!==Sc)&&e("use_rgb_gamma_contrast_brightness"),this.useFilterByNormal&&e("use_filter_by_normal"),this.useEDL&&e("use_edl"),this.weighted&&e("weighted_splats"),this.numClipBoxes>0&&e("use_clip_box"),this.highlightPoint&&e("highlight_point"),e("MAX_POINT_LIGHTS 0"),e("MAX_DIR_LIGHTS 0"),t.push(s),t.join(`
`)}updateClippingPlanes(){if(!this._clippingPlanes)return;const s=this._clippingPlanes.map(t=>new rt(t.normal.x,t.normal.y,t.normal.z,t.constant));this.setUniform("clippingPlanes",s)}setClipBoxes(s){if(!s)return;this.clipBoxes=s;const t=this.numClipBoxes!==s.length&&(s.length===0||this.numClipBoxes===0);this.numClipBoxes=s.length,this.setUniform("clipBoxCount",this.numClipBoxes),t&&this.updateShaderSource();const e=this.numClipBoxes*16,n=new Float32Array(e);for(let i=0;i<this.numClipBoxes;i++)n.set(s[i].inverse.elements,16*i);for(let i=0;i<e;i++)isNaN(n[i])&&(n[i]=1/0);this.setUniform("clipBoxes",n)}get gradient(){return this._gradient}set gradient(s){this._gradient!==s&&(this._gradient=s,this.gradientTexture=Mc(this._gradient),this.setUniform("gradient",this.gradientTexture))}get classification(){return this._classification}set classification(s){const t={};for(const n of Object.keys(s))t[n]=s[n].clone();let e=!1;if(this._classification===void 0)e=!1;else{e=Object.keys(t).length===Object.keys(this._classification).length;for(const n of Object.keys(t))e=e&&this._classification[n]!==void 0,e=e&&t[n].equals(this._classification[n])}e||(this._classification=t,this.recomputeClassification())}recomputeClassification(){this.classificationTexture=wc(this._classification),this.setUniform("classificationLUT",this.classificationTexture)}get elevationRange(){return[this.heightMin,this.heightMax]}set elevationRange(s){this.heightMin=s[0],this.heightMax=s[1]}getUniform(s){return this.uniforms===void 0?void 0:this.uniforms[s].value}setUniform(s,t){if(this.uniforms===void 0)return;const e=this.uniforms[s];e.type==="c"?e.value.copy(t):t!==e.value&&(e.value=t)}updateMaterial(s,t,e,n){const i=n.getPixelRatio();e.type===sg?this.fov=e.fov*(Math.PI/180):this.fov=Math.PI/2;const r=n.getRenderTarget();r!==null&&r instanceof Le?(this.screenWidth=r.width,this.screenHeight=r.height):(this.screenWidth=n.domElement.clientWidth*i,this.screenHeight=n.domElement.clientHeight*i);const o=Math.max(s.scale.x,s.scale.y,s.scale.z);this.spacing=s.pcoGeometry.spacing*o,this.octreeSize=s.pcoGeometry.boundingBox.getSize(Lc.helperVec3).x,(this.pointSizeType===Xn.ADAPTIVE||this.pointColorType===ue.LOD)&&this.updateVisibilityTextureData(t)}updateVisibilityTextureData(s){s.sort(og);const t=new Uint8Array(s.length*4),e=new Array(s.length).fill(1/0);this.visibleNodeTextureOffsets.clear();for(let i=0;i<s.length;i++){const r=s[i];if(this.visibleNodeTextureOffsets.set(r.name,i),i>0){const o=r.name.slice(0,-1),a=this.visibleNodeTextureOffsets.get(o),l=i-a;e[a]=Math.min(e[a],l);const c=a*4;t[c]=t[c]|1<<r.index,t[c+1]=e[a]>>8,t[c+2]=e[a]%256}t[i*4+3]=r.name.length}const n=this.visibleNodesTexture;n&&(n.image.data.set(t),n.needsUpdate=!0)}static makeOnBeforeRender(s,t,e){return(n,i,r,o,a)=>{const l=a,c=l.uniforms;c.level.value=t.level,c.isLeafNode.value=t.isLeafNode;const d=l.visibleNodeTextureOffsets.get(t.name);d!==void 0&&(c.vnStart.value=d),c.pcIndex.value=e!==void 0?e:s.visibleNodes.indexOf(t),a.uniformsNeedUpdate=!0}}};let Mt=Lc;Mt.helperVec3=new M,Lt([Ft("bbSize")],Mt.prototype,"bbSize",2),Lt([Ft("depthMap")],Mt.prototype,"depthMap",2),Lt([Ft("fov")],Mt.prototype,"fov",2),Lt([Ft("heightMax")],Mt.prototype,"heightMax",2),Lt([Ft("heightMin")],Mt.prototype,"heightMin",2),Lt([Ft("intensityBrightness")],Mt.prototype,"intensityBrightness",2),Lt([Ft("intensityContrast")],Mt.prototype,"intensityContrast",2),Lt([Ft("intensityGamma")],Mt.prototype,"intensityGamma",2),Lt([Ft("intensityRange")],Mt.prototype,"intensityRange",2),Lt([Ft("maxSize")],Mt.prototype,"maxSize",2),Lt([Ft("minSize")],Mt.prototype,"minSize",2),Lt([Ft("octreeSize")],Mt.prototype,"octreeSize",2),Lt([Ft("opacity",!0)],Mt.prototype,"opacity",2),Lt([Ft("rgbBrightness",!0)],Mt.prototype,"rgbBrightness",2),Lt([Ft("rgbContrast",!0)],Mt.prototype,"rgbContrast",2),Lt([Ft("rgbGamma",!0)],Mt.prototype,"rgbGamma",2),Lt([Ft("screenHeight")],Mt.prototype,"screenHeight",2),Lt([Ft("screenWidth")],Mt.prototype,"screenWidth",2),Lt([Ft("size")],Mt.prototype,"size",2),Lt([Ft("spacing")],Mt.prototype,"spacing",2),Lt([Ft("transition")],Mt.prototype,"transition",2),Lt([Ft("uColor")],Mt.prototype,"color",2),Lt([Ft("wClassification")],Mt.prototype,"weightClassification",2),Lt([Ft("wElevation")],Mt.prototype,"weightElevation",2),Lt([Ft("wIntensity")],Mt.prototype,"weightIntensity",2),Lt([Ft("wReturnNumber")],Mt.prototype,"weightReturnNumber",2),Lt([Ft("wRGB")],Mt.prototype,"weightRGB",2),Lt([Ft("wSourceID")],Mt.prototype,"weightSourceID",2),Lt([Ft("opacityAttenuation")],Mt.prototype,"opacityAttenuation",2),Lt([Ft("filterByNormalThreshold")],Mt.prototype,"filterByNormalThreshold",2),Lt([Ft("highlightedPointCoordinate")],Mt.prototype,"highlightedPointCoordinate",2),Lt([Ft("highlightedPointColor")],Mt.prototype,"highlightedPointColor",2),Lt([Ft("enablePointHighlighting")],Mt.prototype,"enablePointHighlighting",2),Lt([Ft("highlightedPointScale")],Mt.prototype,"highlightedPointScale",2),Lt([Ft("useUnscaledElevation")],Mt.prototype,"useUnscaledElevation",2),Lt([Ft("clipIntersection")],Mt.prototype,"clipIntersection",2),Lt([Ce()],Mt.prototype,"useClipBox",2),Lt([Ce()],Mt.prototype,"weighted",2),Lt([Ce()],Mt.prototype,"pointColorType",2),Lt([Ce()],Mt.prototype,"pointSizeType",2),Lt([Ce()],Mt.prototype,"clipMode",2),Lt([Ce()],Mt.prototype,"useEDL",2),Lt([Ce()],Mt.prototype,"shape",2),Lt([Ce()],Mt.prototype,"treeType",2),Lt([Ce()],Mt.prototype,"pointOpacityType",2),Lt([Ce()],Mt.prototype,"useFilterByNormal",2),Lt([Ce()],Mt.prototype,"highlightPoint",2),Lt([Ce()],Mt.prototype,"clippingPlanes",2);function St(s,t){return{type:s,value:t}}function ir(s,t){return s===void 0?t:s}function Ft(s,t=!1){return(e,n)=>{Object.defineProperty(e,n,{get(){return this.getUniform(s)},set(i){i!==this.getUniform(s)&&(this.setUniform(s,i),t&&this.updateShaderSource())}})}}function Ce(){return(s,t)=>{const e=`_${t.toString()}`;Object.defineProperty(s,t,{get(){return this[e]},set(n){n!==this[e]?(this[e]=n,this.updateShaderSource()):e==="_clippingPlanes"&&(this[e]=n,this.updateClippingPlanes())}})}}const je={DATA_TYPE_DOUBLE:{ordinal:0,size:8},DATA_TYPE_FLOAT:{ordinal:1,size:4},DATA_TYPE_INT8:{ordinal:2,size:1},DATA_TYPE_UINT8:{ordinal:3,size:1},DATA_TYPE_INT16:{ordinal:4,size:2},DATA_TYPE_UINT16:{ordinal:5,size:2},DATA_TYPE_INT32:{ordinal:6,size:4},DATA_TYPE_UINT32:{ordinal:7,size:4},DATA_TYPE_INT64:{ordinal:8,size:8},DATA_TYPE_UINT64:{ordinal:9,size:8}};function qe(s,t,e){return{name:s,type:t,numElements:e,byteSize:e*t.size}}const Zc=qe(1,je.DATA_TYPE_INT8,4);qe(0,je.DATA_TYPE_FLOAT,3),qe(1,je.DATA_TYPE_INT8,3),qe(4,je.DATA_TYPE_FLOAT,3),qe(5,je.DATA_TYPE_UINT8,1),qe(6,je.DATA_TYPE_UINT16,1),qe(7,je.DATA_TYPE_UINT8,1),qe(8,je.DATA_TYPE_UINT8,2),qe(9,je.DATA_TYPE_UINT8,2),qe(10,je.DATA_TYPE_FLOAT,3);function bg(s,t){const e=s.min.clone(),n=s.max.clone(),i=new M().subVectors(n,e);return(t&1)>0?e.z+=i.z/2:n.z-=i.z/2,(t&2)>0?e.y+=i.y/2:n.y-=i.y/2,(t&4)>0?e.x+=i.x/2:n.x-=i.x/2,new Ge(e,n)}const Ic=5,Wo=class extends Be{constructor(s,t,e,n){super();this.id=Wo.idCount++,this.level=0,this.spacing=0,this.hasChildren=!1,this.children=[null,null,null,null,null,null,null,null],this.mean=new M,this.numPoints=0,this.geometry=new Qt,this.loaded=!1,this.loading=!1,this.failed=!1,this.parent=null,this.oneTimeDisposeHandlers=[],this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.name=s,this.index=_c(s),this.pcoGeometry=t,this.boundingBox=e,this.tightBoundingBox=e.clone(),this.boundingSphere=e.getBoundingSphere(new pn),this.xhrInit=n||{}}dispose(){!this.geometry||!this.parent||(this.geometry.dispose(),this.geometry=new Qt,this.loaded=!1,this.oneTimeDisposeHandlers.forEach(s=>s()),this.oneTimeDisposeHandlers=[])}getUrl(){const s=this.pcoGeometry,t=s.loader.version,e=[s.octreeDir];return s.loader&&t.equalOrHigher("1.5")?(e.push(this.getHierarchyBaseUrl()),e.push(this.name)):t.equalOrHigher("1.4")?e.push(this.name):t.upTo("1.3")&&e.push(this.name),e.join("/")}getHierarchyUrl(){return`${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`}addChild(s){this.children[s.index]=s,this.isLeafNode=!1,s.parent=this}traverse(s,t=!0){const e=t?[this]:[];let n;for(;(n=e.pop())!==void 0;){s(n);for(const i of n.children)i!==null&&e.push(i)}}load(){if(!this.canLoad())return Promise.resolve();this.loading=!0,this.pcoGeometry.numNodesLoading++,this.pcoGeometry.needsUpdate=!0;let s;return this.pcoGeometry.loader.version.equalOrHigher("1.5")&&this.level%this.pcoGeometry.hierarchyStepSize===0&&this.hasChildren?s=this.loadHierachyThenPoints():s=this.loadPoints(),s.catch(t=>{throw this.loading=!1,this.failed=!0,this.pcoGeometry.numNodesLoading--,t})}canLoad(){return!this.loading&&!this.loaded&&!this.pcoGeometry.disposed&&!this.pcoGeometry.loader.disposed&&this.pcoGeometry.numNodesLoading<this.pcoGeometry.maxNumNodesLoading}loadPoints(){return this.pcoGeometry.needsUpdate=!0,this.pcoGeometry.loader.load(this)}loadHierachyThenPoints(){return this.level%this.pcoGeometry.hierarchyStepSize!==0?Promise.resolve():Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then(s=>this.pcoGeometry.xhrRequest(s,this.xhrInit)).then(s=>s.arrayBuffer()).then(s=>this.loadHierarchy(this,s))}getHierarchyBaseUrl(){const s=this.pcoGeometry.hierarchyStepSize,t=this.name.substr(1),e=Math.floor(t.length/s);let n="r/";for(let i=0;i<e;i++)n+=`${t.substr(i*s,s)}/`;return n.slice(0,-1)}loadHierarchy(s,t){const e=new DataView(t),n=this.getNodeData(s.name,0,e);s.numPoints=n.numPoints;const i=[n],r=[];let o=Ic;for(;i.length>0;){const l=i.shift();let c=1;for(let d=0;d<8&&o+1<t.byteLength;d++){if((l.children&c)!==0){const h=this.getNodeData(l.name+d,o,e);r.push(h),i.push(h),o+=Ic}c=c*2}}s.pcoGeometry.needsUpdate=!0;const a=new Map;a.set(s.name,s),r.forEach(l=>this.addNode(l,s.pcoGeometry,a)),s.loadPoints()}getNodeData(s,t,e){const n=e.getUint8(t),i=e.getUint32(t+1,!0);return{children:n,numPoints:i,name:s}}addNode({name:s,numPoints:t,children:e},n,i){const r=_c(s),o=s.substring(0,s.length-1),a=i.get(o),l=s.length-1,c=bg(a.boundingBox,r),d=new Wo(s,n,c,this.xhrInit);d.level=l,d.numPoints=t,d.hasChildren=e>0,d.spacing=n.spacing/Math.pow(2,l),a.addChild(d),i.set(s,d)}};let Sg=Wo;Sg.idCount=0;class Cg extends Be{constructor(t,e){super();this.pcIndex=void 0,this.boundingBoxNode=null,this.loaded=!0,this.isTreeNode=!0,this.isGeometryNode=!1,this.geometryNode=t,this.sceneNode=e,this.children=t.children.slice()}dispose(){this.geometryNode.dispose()}disposeSceneNode(){const t=this.sceneNode;if(t.geometry instanceof Qt){const e=t.geometry.attributes;for(const n in e)n==="position"&&delete e[n].array,delete e[n];t.geometry.dispose(),t.geometry=void 0}}traverse(t,e){this.geometryNode.traverse(t,e)}get id(){return this.geometryNode.id}get name(){return this.geometryNode.name}get level(){return this.geometryNode.level}get isLeafNode(){return this.geometryNode.isLeafNode}get numPoints(){return this.geometryNode.numPoints}get index(){return this.geometryNode.index}get boundingSphere(){return this.geometryNode.boundingSphere}get boundingBox(){return this.geometryNode.boundingBox}get spacing(){return this.geometryNode.spacing}}new M,new pn,new E;class Xg extends Kt{constructor(){super(...arguments);this.root=null}initialized(){return this.root!==null}}const Ec=document.createElement("canvas"),me=Ec.getContext("webgl")||Ec.getContext("experimental-webgl");sr("EXT_frag_depth")&&Co(8),sr("EXT_frag_depth")&&sr("OES_texture_float")&&Co(8),sr("OES_texture_float")&&Co(8),vg();function sr(s){return me!==null&&Boolean(me.getExtension(s))}function Co(s){return me!==null&&me.getParameter(me.MAX_VARYING_VECTORS)>=s}function vg(){if(me===null)return"";const s=me.getShaderPrecisionFormat(me.VERTEX_SHADER,me.HIGH_FLOAT),t=me.getShaderPrecisionFormat(me.VERTEX_SHADER,me.MEDIUM_FLOAT),e=me.getShaderPrecisionFormat(me.FRAGMENT_SHADER,me.HIGH_FLOAT),n=me.getShaderPrecisionFormat(me.FRAGMENT_SHADER,me.MEDIUM_FLOAT),i=s&&e&&s.precision>0&&e.precision>0,r=t&&n&&t.precision>0&&n.precision>0;return i?"highp":r?"mediump":"lowp"}var Rc=null;try{var _g=typeof rr<"u"&&typeof rr.require=="function"&&rr.require("worker_threads")||typeof __non_webpack_require__=="function"&&__non_webpack_require__("worker_threads")||typeof require=="function"&&require("worker_threads");Rc=_g.Worker}catch{}function Tg(s,t){return Buffer.from(s,"base64").toString(t?"utf16":"utf8")}function Mg(s,t,e){var n=t===void 0?null:t,i=e===void 0?!1:e,r=Tg(s,i),o=r.indexOf(`
`,10)+1,a=r.substring(o)+(n?"//# sourceMappingURL="+n:"");return function(c){return new Rc(a,Object.assign({},c,{eval:!0}))}}function wg(s,t){var e=atob(s);if(t){for(var n=new Uint8Array(e.length),i=0,r=e.length;i<r;++i)n[i]=e.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(n.buffer))}return e}function Lg(s,t,e){var n=t===void 0?null:t,i=e===void 0?!1:e,r=wg(s,i),o=r.indexOf(`
`,10)+1,a=r.substring(o)+(n?"//# sourceMappingURL="+n:""),l=new Blob([a],{type:"application/javascript"});return URL.createObjectURL(l)}function Zg(s,t,e){var n;return function(r){return n=n||Lg(s,t,e),new Worker(n,r)}}var Ig=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";function Eg(){return Ig}function Vc(s,t,e){return Eg()?Mg(s,t,e):Zg(s,t,e)}Vc("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyIE1uPXR5cGVvZiBnbG9iYWxUaGlzPCJ1Ij9nbG9iYWxUaGlzOnR5cGVvZiB3aW5kb3c8InUiP3dpbmRvdzp0eXBlb2YgZ2xvYmFsPCJ1Ij9nbG9iYWw6dHlwZW9mIHNlbGY8InUiP3NlbGY6e30sZ2U9ZnVuY3Rpb24ocil7cmV0dXJuIHImJnIuTWF0aD09TWF0aCYmcn0sbD1nZSh0eXBlb2YgZ2xvYmFsVGhpcz09Im9iamVjdCImJmdsb2JhbFRoaXMpfHxnZSh0eXBlb2Ygd2luZG93PT0ib2JqZWN0IiYmd2luZG93KXx8Z2UodHlwZW9mIHNlbGY9PSJvYmplY3QiJiZzZWxmKXx8Z2UodHlwZW9mIE1uPT0ib2JqZWN0IiYmTW4pfHxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpfHxGdW5jdGlvbigicmV0dXJuIHRoaXMiKSgpLFJyPXt9LFQ9ZnVuY3Rpb24ocil7dHJ5e3JldHVybiEhcigpfWNhdGNoe3JldHVybiEwfX0scGY9VCxtPSFwZihmdW5jdGlvbigpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sMSx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSlbMV0hPTd9KSwkZj1ULGhlPSEkZihmdW5jdGlvbigpe3ZhciByPWZ1bmN0aW9uKCl7fS5iaW5kKCk7cmV0dXJuIHR5cGVvZiByIT0iZnVuY3Rpb24ifHxyLmhhc093blByb3BlcnR5KCJwcm90b3R5cGUiKX0pLGdmPWhlLFRlPUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLHg9Z2Y/VGUuYmluZChUZSk6ZnVuY3Rpb24oKXtyZXR1cm4gVGUuYXBwbHkoVGUsYXJndW1lbnRzKX0sJHQ9e30sRm49e30ucHJvcGVydHlJc0VudW1lcmFibGUsam49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixoZj1qbiYmIUZuLmNhbGwoezE6Mn0sMSk7JHQuZj1oZj9mdW5jdGlvbihlKXt2YXIgdD1qbih0aGlzLGUpO3JldHVybiEhdCYmdC5lbnVtZXJhYmxlfTpGbjt2YXIgd3I9ZnVuY3Rpb24ocixlKXtyZXR1cm57ZW51bWVyYWJsZTohKHImMSksY29uZmlndXJhYmxlOiEociYyKSx3cml0YWJsZTohKHImNCksdmFsdWU6ZX19LExuPWhlLERuPUZ1bmN0aW9uLnByb3RvdHlwZSxUZj1Ebi5iaW5kLGd0PURuLmNhbGwsQWY9TG4mJlRmLmJpbmQoZ3QsZ3QpLGc9TG4/ZnVuY3Rpb24ocil7cmV0dXJuIHImJkFmKHIpfTpmdW5jdGlvbihyKXtyZXR1cm4gciYmZnVuY3Rpb24oKXtyZXR1cm4gZ3QuYXBwbHkocixhcmd1bWVudHMpfX0sQm49ZyxPZj1Cbih7fS50b1N0cmluZyksYmY9Qm4oIiIuc2xpY2UpLEFlPWZ1bmN0aW9uKHIpe3JldHVybiBiZihPZihyKSw4LC0xKX0sU2Y9bCxJZj1nLEVmPVQsbWY9QWUsaHQ9U2YuT2JqZWN0LFJmPUlmKCIiLnNwbGl0KSxUdD1FZihmdW5jdGlvbigpe3JldHVybiFodCgieiIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApfSk/ZnVuY3Rpb24ocil7cmV0dXJuIG1mKHIpPT0iU3RyaW5nIj9SZihyLCIiKTpodChyKX06aHQsd2Y9bCxQZj13Zi5UeXBlRXJyb3IsT2U9ZnVuY3Rpb24ocil7aWYocj09bnVsbCl0aHJvdyBQZigiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIityKTtyZXR1cm4gcn0sX2Y9VHQsQ2Y9T2Usej1mdW5jdGlvbihyKXtyZXR1cm4gX2YoQ2YocikpfSxTPWZ1bmN0aW9uKHIpe3JldHVybiB0eXBlb2Ygcj09ImZ1bmN0aW9uIn0seGY9UyxNPWZ1bmN0aW9uKHIpe3JldHVybiB0eXBlb2Ygcj09Im9iamVjdCI/ciE9PW51bGw6eGYocil9LEF0PWwsTmY9UyxNZj1mdW5jdGlvbihyKXtyZXR1cm4gTmYocik/cjp2b2lkIDB9LHlyPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg8Mj9NZihBdFtyXSk6QXRbcl0mJkF0W3JdW2VdfSxGZj1nLGRyPUZmKHt9LmlzUHJvdG90eXBlT2YpLGpmPXlyLGJlPWpmKCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiKXx8IiIsVW49bCxPdD1iZSxHbj1Vbi5wcm9jZXNzLFZuPVVuLkRlbm8sWW49R24mJkduLnZlcnNpb25zfHxWbiYmVm4udmVyc2lvbixLbj1ZbiYmWW4udjgsTCxTZTtLbiYmKEw9S24uc3BsaXQoIi4iKSxTZT1MWzBdPjAmJkxbMF08ND8xOisoTFswXStMWzFdKSksIVNlJiZPdCYmKEw9T3QubWF0Y2goL0VkZ2VcLyhcZCspLyksKCFMfHxMWzFdPj03NCkmJihMPU90Lm1hdGNoKC9DaHJvbWVcLyhcZCspLyksTCYmKFNlPStMWzFdKSkpO3ZhciBidD1TZSxrbj1idCxMZj1ULFN0PSEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyYmIUxmKGZ1bmN0aW9uKCl7dmFyIHI9U3ltYm9sKCk7cmV0dXJuIVN0cmluZyhyKXx8IShPYmplY3QocilpbnN0YW5jZW9mIFN5bWJvbCl8fCFTeW1ib2wuc2hhbSYma24mJmtuPDQxfSksRGY9U3QsV249RGYmJiFTeW1ib2wuc2hhbSYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09InN5bWJvbCIsQmY9bCxVZj15cixHZj1TLFZmPWRyLFlmPVduLEtmPUJmLk9iamVjdCxXcj1ZZj9mdW5jdGlvbihyKXtyZXR1cm4gdHlwZW9mIHI9PSJzeW1ib2wifTpmdW5jdGlvbihyKXt2YXIgZT1VZigiU3ltYm9sIik7cmV0dXJuIEdmKGUpJiZWZihlLnByb3RvdHlwZSxLZihyKSl9LGtmPWwsV2Y9a2YuU3RyaW5nLEllPWZ1bmN0aW9uKHIpe3RyeXtyZXR1cm4gV2Yocil9Y2F0Y2h7cmV0dXJuIk9iamVjdCJ9fSx6Zj1sLEhmPVMscWY9SWUsWGY9emYuVHlwZUVycm9yLHpyPWZ1bmN0aW9uKHIpe2lmKEhmKHIpKXJldHVybiByO3Rocm93IFhmKHFmKHIpKyIgaXMgbm90IGEgZnVuY3Rpb24iKX0sSmY9enIsSXQ9ZnVuY3Rpb24ocixlKXt2YXIgdD1yW2VdO3JldHVybiB0PT1udWxsP3ZvaWQgMDpKZih0KX0sUWY9bCxFdD14LG10PVMsUnQ9TSxaZj1RZi5UeXBlRXJyb3IscnM9ZnVuY3Rpb24ocixlKXt2YXIgdCxhO2lmKGU9PT0ic3RyaW5nIiYmbXQodD1yLnRvU3RyaW5nKSYmIVJ0KGE9RXQodCxyKSl8fG10KHQ9ci52YWx1ZU9mKSYmIVJ0KGE9RXQodCxyKSl8fGUhPT0ic3RyaW5nIiYmbXQodD1yLnRvU3RyaW5nKSYmIVJ0KGE9RXQodCxyKSkpcmV0dXJuIGE7dGhyb3cgWmYoIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZSIpfSxIcj17ZXhwb3J0czp7fX0sem49bCxlcz1PYmplY3QuZGVmaW5lUHJvcGVydHksd3Q9ZnVuY3Rpb24ocixlKXt0cnl7ZXMoem4scix7dmFsdWU6ZSxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KX1jYXRjaHt6bltyXT1lfXJldHVybiBlfSx0cz1sLGFzPXd0LEhuPSJfX2NvcmUtanNfc2hhcmVkX18iLG5zPXRzW0huXXx8YXMoSG4se30pLFB0PW5zLHFuPVB0OyhIci5leHBvcnRzPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHFuW3JdfHwocW5bcl09ZSE9PXZvaWQgMD9lOnt9KX0pKCJ2ZXJzaW9ucyIsW10pLnB1c2goe3ZlcnNpb246IjMuMjEuMSIsbW9kZToiZ2xvYmFsIixjb3B5cmlnaHQ6Ilx4QTkgMjAxNC0yMDIyIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpIixsaWNlbnNlOiJodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjIxLjEvTElDRU5TRSIsc291cmNlOiJodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcyJ9KTt2YXIgb3M9bCxpcz1PZSx2cz1vcy5PYmplY3QsRz1mdW5jdGlvbihyKXtyZXR1cm4gdnMoaXMocikpfSx1cz1nLGZzPUcsc3M9dXMoe30uaGFzT3duUHJvcGVydHkpLFI9T2JqZWN0Lmhhc093bnx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc3MoZnMoZSksdCl9LGxzPWcsY3M9MCx5cz1NYXRoLnJhbmRvbSgpLGRzPWxzKDEgLnRvU3RyaW5nKSxFZT1mdW5jdGlvbihyKXtyZXR1cm4iU3ltYm9sKCIrKHI9PT12b2lkIDA/IiI6cikrIilfIitkcygrK2NzK3lzLDM2KX0scHM9bCwkcz1Ici5leHBvcnRzLFhuPVIsZ3M9RWUsSm49U3QsUW49V24sUHI9JHMoIndrcyIpLHByPXBzLlN5bWJvbCxabj1wciYmcHIuZm9yLGhzPVFuP3ByOnByJiZwci53aXRob3V0U2V0dGVyfHxncyxPPWZ1bmN0aW9uKHIpe2lmKCFYbihQcixyKXx8IShKbnx8dHlwZW9mIFByW3JdPT0ic3RyaW5nIikpe3ZhciBlPSJTeW1ib2wuIityO0puJiZYbihwcixyKT9QcltyXT1wcltyXTpRbiYmWm4/UHJbcl09Wm4oZSk6UHJbcl09aHMoZSl9cmV0dXJuIFByW3JdfSxUcz1sLEFzPXgscm89TSxlbz1XcixPcz1JdCxicz1ycyxTcz1PLElzPVRzLlR5cGVFcnJvcixFcz1TcygidG9QcmltaXRpdmUiKSx0bz1mdW5jdGlvbihyLGUpe2lmKCFybyhyKXx8ZW8ocikpcmV0dXJuIHI7dmFyIHQ9T3MocixFcyksYTtpZih0KXtpZihlPT09dm9pZCAwJiYoZT0iZGVmYXVsdCIpLGE9QXModCxyLGUpLCFybyhhKXx8ZW8oYSkpcmV0dXJuIGE7dGhyb3cgSXMoIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZSIpfXJldHVybiBlPT09dm9pZCAwJiYoZT0ibnVtYmVyIiksYnMocixlKX0sbXM9dG8sUnM9V3IscXI9ZnVuY3Rpb24ocil7dmFyIGU9bXMociwic3RyaW5nIik7cmV0dXJuIFJzKGUpP2U6ZSsiIn0sd3M9bCxhbz1NLF90PXdzLmRvY3VtZW50LFBzPWFvKF90KSYmYW8oX3QuY3JlYXRlRWxlbWVudCksQ3Q9ZnVuY3Rpb24ocil7cmV0dXJuIFBzP190LmNyZWF0ZUVsZW1lbnQocik6e319LF9zPW0sQ3M9VCx4cz1DdCxubz0hX3MmJiFDcyhmdW5jdGlvbigpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoeHMoImRpdiIpLCJhIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYSE9N30pLE5zPW0sTXM9eCxGcz0kdCxqcz13cixMcz16LERzPXFyLEJzPVIsVXM9bm8sb289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtSci5mPU5zP29vOmZ1bmN0aW9uKGUsdCl7aWYoZT1McyhlKSx0PURzKHQpLFVzKXRyeXtyZXR1cm4gb28oZSx0KX1jYXRjaHt9aWYoQnMoZSx0KSlyZXR1cm4ganMoIU1zKEZzLmYsZSx0KSxlW3RdKX07dmFyIEU9e30sR3M9bSxWcz1ULGlvPUdzJiZWcyhmdW5jdGlvbigpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24oKXt9LCJwcm90b3R5cGUiLHt2YWx1ZTo0Mix3cml0YWJsZTohMX0pLnByb3RvdHlwZSE9NDJ9KSx2bz1sLFlzPU0sS3M9dm8uU3RyaW5nLGtzPXZvLlR5cGVFcnJvcixEPWZ1bmN0aW9uKHIpe2lmKFlzKHIpKXJldHVybiByO3Rocm93IGtzKEtzKHIpKyIgaXMgbm90IGFuIG9iamVjdCIpfSxXcz1sLHpzPW0sSHM9bm8scXM9aW8sbWU9RCx1bz1xcixYcz1Xcy5UeXBlRXJyb3IseHQ9T2JqZWN0LmRlZmluZVByb3BlcnR5LEpzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsTnQ9ImVudW1lcmFibGUiLE10PSJjb25maWd1cmFibGUiLEZ0PSJ3cml0YWJsZSI7RS5mPXpzP3FzP2Z1bmN0aW9uKGUsdCxhKXtpZihtZShlKSx0PXVvKHQpLG1lKGEpLHR5cGVvZiBlPT0iZnVuY3Rpb24iJiZ0PT09InByb3RvdHlwZSImJiJ2YWx1ZSJpbiBhJiZGdCBpbiBhJiYhYVtGdF0pe3ZhciBuPUpzKGUsdCk7biYmbltGdF0mJihlW3RdPWEudmFsdWUsYT17Y29uZmlndXJhYmxlOk10IGluIGE/YVtNdF06bltNdF0sZW51bWVyYWJsZTpOdCBpbiBhP2FbTnRdOm5bTnRdLHdyaXRhYmxlOiExfSl9cmV0dXJuIHh0KGUsdCxhKX06eHQ6ZnVuY3Rpb24oZSx0LGEpe2lmKG1lKGUpLHQ9dW8odCksbWUoYSksSHMpdHJ5e3JldHVybiB4dChlLHQsYSl9Y2F0Y2h7fWlmKCJnZXQiaW4gYXx8InNldCJpbiBhKXRocm93IFhzKCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCIpO3JldHVybiJ2YWx1ZSJpbiBhJiYoZVt0XT1hLnZhbHVlKSxlfTt2YXIgUXM9bSxacz1FLHJsPXdyLGFyPVFzP2Z1bmN0aW9uKHIsZSx0KXtyZXR1cm4gWnMuZihyLGUscmwoMSx0KSl9OmZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gcltlXT10LHJ9LEg9e2V4cG9ydHM6e319LGVsPWcsdGw9UyxqdD1QdCxhbD1lbChGdW5jdGlvbi50b1N0cmluZyk7dGwoanQuaW5zcGVjdFNvdXJjZSl8fChqdC5pbnNwZWN0U291cmNlPWZ1bmN0aW9uKHIpe3JldHVybiBhbChyKX0pO3ZhciBMdD1qdC5pbnNwZWN0U291cmNlLG5sPWwsb2w9UyxpbD1MdCxmbz1ubC5XZWFrTWFwLHZsPW9sKGZvKSYmL25hdGl2ZSBjb2RlLy50ZXN0KGlsKGZvKSksdWw9SHIuZXhwb3J0cyxmbD1FZSxzbz11bCgia2V5cyIpLFJlPWZ1bmN0aW9uKHIpe3JldHVybiBzb1tyXXx8KHNvW3JdPWZsKHIpKX0sd2U9e30sc2w9dmwsbG89bCxEdD1nLGxsPU0sY2w9YXIsQnQ9UixVdD1QdCx5bD1SZSxkbD13ZSxjbz0iT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQiLEd0PWxvLlR5cGVFcnJvcixwbD1sby5XZWFrTWFwLFBlLFhyLF9lLCRsPWZ1bmN0aW9uKHIpe3JldHVybiBfZShyKT9YcihyKTpQZShyLHt9KX0sZ2w9ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFsbChlKXx8KHQ9WHIoZSkpLnR5cGUhPT1yKXRocm93IEd0KCJJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICIrcisiIHJlcXVpcmVkIik7cmV0dXJuIHR9fTtpZihzbHx8VXQuc3RhdGUpe3ZhciAkcj1VdC5zdGF0ZXx8KFV0LnN0YXRlPW5ldyBwbCksaGw9RHQoJHIuZ2V0KSx5bz1EdCgkci5oYXMpLFRsPUR0KCRyLnNldCk7UGU9ZnVuY3Rpb24ocixlKXtpZih5bygkcixyKSl0aHJvdyBuZXcgR3QoY28pO3JldHVybiBlLmZhY2FkZT1yLFRsKCRyLHIsZSksZX0sWHI9ZnVuY3Rpb24ocil7cmV0dXJuIGhsKCRyLHIpfHx7fX0sX2U9ZnVuY3Rpb24ocil7cmV0dXJuIHlvKCRyLHIpfX1lbHNle3ZhciBfcj15bCgic3RhdGUiKTtkbFtfcl09ITAsUGU9ZnVuY3Rpb24ocixlKXtpZihCdChyLF9yKSl0aHJvdyBuZXcgR3QoY28pO3JldHVybiBlLmZhY2FkZT1yLGNsKHIsX3IsZSksZX0sWHI9ZnVuY3Rpb24ocil7cmV0dXJuIEJ0KHIsX3IpP3JbX3JdOnt9fSxfZT1mdW5jdGlvbihyKXtyZXR1cm4gQnQocixfcil9fXZhciBncj17c2V0OlBlLGdldDpYcixoYXM6X2UsZW5mb3JjZTokbCxnZXR0ZXJGb3I6Z2x9LFZ0PW0sQWw9Uixwbz1GdW5jdGlvbi5wcm90b3R5cGUsT2w9VnQmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsWXQ9QWwocG8sIm5hbWUiKSxibD1ZdCYmZnVuY3Rpb24oKXt9Lm5hbWU9PT0ic29tZXRoaW5nIixTbD1ZdCYmKCFWdHx8VnQmJk9sKHBvLCJuYW1lIikuY29uZmlndXJhYmxlKSxDZT17RVhJU1RTOll0LFBST1BFUjpibCxDT05GSUdVUkFCTEU6U2x9LElsPWwsJG89UyxFbD1SLGdvPWFyLG1sPXd0LFJsPUx0LGhvPWdyLHdsPUNlLkNPTkZJR1VSQUJMRSxQbD1oby5nZXQsX2w9aG8uZW5mb3JjZSxDbD1TdHJpbmcoU3RyaW5nKS5zcGxpdCgiU3RyaW5nIik7KEguZXhwb3J0cz1mdW5jdGlvbihyLGUsdCxhKXt2YXIgbj1hPyEhYS51bnNhZmU6ITEsbz1hPyEhYS5lbnVtZXJhYmxlOiExLHY9YT8hIWEubm9UYXJnZXRHZXQ6ITEsaT1hJiZhLm5hbWUhPT12b2lkIDA/YS5uYW1lOmUsdTtpZigkbyh0KSYmKFN0cmluZyhpKS5zbGljZSgwLDcpPT09IlN5bWJvbCgiJiYoaT0iWyIrU3RyaW5nKGkpLnJlcGxhY2UoL15TeW1ib2xcKChbXildKilcKS8sIiQxIikrIl0iKSwoIUVsKHQsIm5hbWUiKXx8d2wmJnQubmFtZSE9PWkpJiZnbyh0LCJuYW1lIixpKSx1PV9sKHQpLHUuc291cmNlfHwodS5zb3VyY2U9Q2wuam9pbih0eXBlb2YgaT09InN0cmluZyI/aToiIikpKSxyPT09SWwpe28/cltlXT10Om1sKGUsdCk7cmV0dXJufWVsc2Ugbj8hdiYmcltlXSYmKG89ITApOmRlbGV0ZSByW2VdO28/cltlXT10OmdvKHIsZSx0KX0pKEZ1bmN0aW9uLnByb3RvdHlwZSwidG9TdHJpbmciLGZ1bmN0aW9uKCl7cmV0dXJuICRvKHRoaXMpJiZQbCh0aGlzKS5zb3VyY2V8fFJsKHRoaXMpfSk7dmFyIGhyPXt9LHhsPU1hdGguY2VpbCxObD1NYXRoLmZsb29yLFRyPWZ1bmN0aW9uKHIpe3ZhciBlPStyO3JldHVybiBlIT09ZXx8ZT09PTA/MDooZT4wP05sOnhsKShlKX0sTWw9VHIsRmw9TWF0aC5tYXgsamw9TWF0aC5taW4sQ3I9ZnVuY3Rpb24ocixlKXt2YXIgdD1NbChyKTtyZXR1cm4gdDwwP0ZsKHQrZSwwKTpqbCh0LGUpfSxMbD1UcixEbD1NYXRoLm1pbixKcj1mdW5jdGlvbihyKXtyZXR1cm4gcj4wP0RsKExsKHIpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9LEJsPUpyLEY9ZnVuY3Rpb24ocil7cmV0dXJuIEJsKHIubGVuZ3RoKX0sVWw9eixHbD1DcixWbD1GLFRvPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlLHQsYSl7dmFyIG49VWwoZSksbz1WbChuKSx2PUdsKGEsbyksaTtpZihyJiZ0IT10KXtmb3IoO28+djspaWYoaT1uW3YrK10saSE9aSlyZXR1cm4hMH1lbHNlIGZvcig7bz52O3YrKylpZigocnx8diBpbiBuKSYmblt2XT09PXQpcmV0dXJuIHJ8fHZ8fDA7cmV0dXJuIXImJi0xfX0sS3Q9e2luY2x1ZGVzOlRvKCEwKSxpbmRleE9mOlRvKCExKX0sWWw9ZyxrdD1SLEtsPXosa2w9S3QuaW5kZXhPZixXbD13ZSxBbz1ZbChbXS5wdXNoKSxPbz1mdW5jdGlvbihyLGUpe3ZhciB0PUtsKHIpLGE9MCxuPVtdLG87Zm9yKG8gaW4gdCkha3QoV2wsbykmJmt0KHQsbykmJkFvKG4sbyk7Zm9yKDtlLmxlbmd0aD5hOylrdCh0LG89ZVthKytdKSYmKH5rbChuLG8pfHxBbyhuLG8pKTtyZXR1cm4gbn0sV3Q9WyJjb25zdHJ1Y3RvciIsImhhc093blByb3BlcnR5IiwiaXNQcm90b3R5cGVPZiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9Mb2NhbGVTdHJpbmciLCJ0b1N0cmluZyIsInZhbHVlT2YiXSx6bD1PbyxIbD1XdCxxbD1IbC5jb25jYXQoImxlbmd0aCIsInByb3RvdHlwZSIpO2hyLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKGUpe3JldHVybiB6bChlLHFsKX07dmFyIHp0PXt9O3p0LmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczt2YXIgWGw9eXIsSmw9ZyxRbD1ocixabD16dCxyYz1ELGVjPUpsKFtdLmNvbmNhdCksdGM9WGwoIlJlZmxlY3QiLCJvd25LZXlzIil8fGZ1bmN0aW9uKGUpe3ZhciB0PVFsLmYocmMoZSkpLGE9WmwuZjtyZXR1cm4gYT9lYyh0LGEoZSkpOnR9LGJvPVIsYWM9dGMsbmM9UnIsb2M9RSxTbz1mdW5jdGlvbihyLGUsdCl7Zm9yKHZhciBhPWFjKGUpLG49b2MuZixvPW5jLmYsdj0wO3Y8YS5sZW5ndGg7disrKXt2YXIgaT1hW3ZdOyFibyhyLGkpJiYhKHQmJmJvKHQsaSkpJiZuKHIsaSxvKGUsaSkpfX0saWM9VCx2Yz1TLHVjPS8jfFwucHJvdG90eXBlXC4vLFFyPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9c2NbZmMocildO3JldHVybiB0PT1jYz8hMDp0PT1sYz8hMTp2YyhlKT9pYyhlKTohIWV9LGZjPVFyLm5vcm1hbGl6ZT1mdW5jdGlvbihyKXtyZXR1cm4gU3RyaW5nKHIpLnJlcGxhY2UodWMsIi4iKS50b0xvd2VyQ2FzZSgpfSxzYz1Rci5kYXRhPXt9LGxjPVFyLk5BVElWRT0iTiIsY2M9UXIuUE9MWUZJTEw9IlAiLElvPVFyLEh0PWwseWM9UnIuZixkYz1hcixwYz1ILmV4cG9ydHMsJGM9d3QsZ2M9U28saGM9SW8scT1mdW5jdGlvbihyLGUpe3ZhciB0PXIudGFyZ2V0LGE9ci5nbG9iYWwsbj1yLnN0YXQsbyx2LGksdSxmLHM7aWYoYT92PUh0Om4/dj1IdFt0XXx8JGModCx7fSk6dj0oSHRbdF18fHt9KS5wcm90b3R5cGUsdilmb3IoaSBpbiBlKXtpZihmPWVbaV0sci5ub1RhcmdldEdldD8ocz15Yyh2LGkpLHU9cyYmcy52YWx1ZSk6dT12W2ldLG89aGMoYT9pOnQrKG4/Ii4iOiIjIikraSxyLmZvcmNlZCksIW8mJnUhPT12b2lkIDApe2lmKHR5cGVvZiBmPT10eXBlb2YgdSljb250aW51ZTtnYyhmLHUpfShyLnNoYW18fHUmJnUuc2hhbSkmJmRjKGYsInNoYW0iLCEwKSxwYyh2LGksZixyKX19LFRjPUFlLHF0PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVybiBUYyhlKT09IkFycmF5In0sQWM9TyxPYz1BYygidG9TdHJpbmdUYWciKSxFbz17fTtFb1tPY109InoiO3ZhciBYdD1TdHJpbmcoRW8pPT09IltvYmplY3Qgel0iLGJjPWwsU2M9WHQsSWM9Uyx4ZT1BZSxFYz1PLG1jPUVjKCJ0b1N0cmluZ1RhZyIpLFJjPWJjLk9iamVjdCx3Yz14ZShmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpPT0iQXJndW1lbnRzIixQYz1mdW5jdGlvbihyLGUpe3RyeXtyZXR1cm4gcltlXX1jYXRjaHt9fSx4cj1TYz94ZTpmdW5jdGlvbihyKXt2YXIgZSx0LGE7cmV0dXJuIHI9PT12b2lkIDA/IlVuZGVmaW5lZCI6cj09PW51bGw/Ik51bGwiOnR5cGVvZih0PVBjKGU9UmMociksbWMpKT09InN0cmluZyI/dDp3Yz94ZShlKTooYT14ZShlKSk9PSJPYmplY3QiJiZJYyhlLmNhbGxlZSk/IkFyZ3VtZW50cyI6YX0sX2M9ZyxDYz1ULG1vPVMseGM9eHIsTmM9eXIsTWM9THQsUm89ZnVuY3Rpb24oKXt9LEZjPVtdLHdvPU5jKCJSZWZsZWN0IiwiY29uc3RydWN0IiksSnQ9L15ccyooPzpjbGFzc3xmdW5jdGlvbilcYi8samM9X2MoSnQuZXhlYyksTGM9IUp0LmV4ZWMoUm8pLFpyPWZ1bmN0aW9uKGUpe2lmKCFtbyhlKSlyZXR1cm4hMTt0cnl7cmV0dXJuIHdvKFJvLEZjLGUpLCEwfWNhdGNoe3JldHVybiExfX0sUG89ZnVuY3Rpb24oZSl7aWYoIW1vKGUpKXJldHVybiExO3N3aXRjaCh4YyhlKSl7Y2FzZSJBc3luY0Z1bmN0aW9uIjpjYXNlIkdlbmVyYXRvckZ1bmN0aW9uIjpjYXNlIkFzeW5jR2VuZXJhdG9yRnVuY3Rpb24iOnJldHVybiExfXRyeXtyZXR1cm4gTGN8fCEhamMoSnQsTWMoZSkpfWNhdGNoe3JldHVybiEwfX07UG8uc2hhbT0hMDt2YXIgTmU9IXdvfHxDYyhmdW5jdGlvbigpe3ZhciByO3JldHVybiBacihaci5jYWxsKXx8IVpyKE9iamVjdCl8fCFacihmdW5jdGlvbigpe3I9ITB9KXx8cn0pP1BvOlpyLERjPXFyLEJjPUUsVWM9d3IsUXQ9ZnVuY3Rpb24ocixlLHQpe3ZhciBhPURjKGUpO2EgaW4gcj9CYy5mKHIsYSxVYygwLHQpKTpyW2FdPXR9LEdjPVQsVmM9TyxZYz1idCxLYz1WYygic3BlY2llcyIpLGtjPWZ1bmN0aW9uKHIpe3JldHVybiBZYz49NTF8fCFHYyhmdW5jdGlvbigpe3ZhciBlPVtdLHQ9ZS5jb25zdHJ1Y3Rvcj17fTtyZXR1cm4gdFtLY109ZnVuY3Rpb24oKXtyZXR1cm57Zm9vOjF9fSxlW3JdKEJvb2xlYW4pLmZvbyE9PTF9KX0sV2M9ZyxNZT1XYyhbXS5zbGljZSksemM9cSxIYz1sLF9vPXF0LHFjPU5lLFhjPU0sQ289Q3IsSmM9RixRYz16LFpjPVF0LHJ5PU8sZXk9a2MsdHk9TWUsYXk9ZXkoInNsaWNlIiksbnk9cnkoInNwZWNpZXMiKSxadD1IYy5BcnJheSxveT1NYXRoLm1heDt6Yyh7dGFyZ2V0OiJBcnJheSIscHJvdG86ITAsZm9yY2VkOiFheX0se3NsaWNlOmZ1bmN0aW9uKGUsdCl7dmFyIGE9UWModGhpcyksbj1KYyhhKSxvPUNvKGUsbiksdj1Dbyh0PT09dm9pZCAwP246dCxuKSxpLHUsZjtpZihfbyhhKSYmKGk9YS5jb25zdHJ1Y3RvcixxYyhpKSYmKGk9PT1adHx8X28oaS5wcm90b3R5cGUpKT9pPXZvaWQgMDpYYyhpKSYmKGk9aVtueV0saT09PW51bGwmJihpPXZvaWQgMCkpLGk9PT1adHx8aT09PXZvaWQgMCkpcmV0dXJuIHR5KGEsbyx2KTtmb3IodT1uZXcoaT09PXZvaWQgMD9adDppKShveSh2LW8sMCkpLGY9MDtvPHY7bysrLGYrKylvIGluIGEmJlpjKHUsZixhW29dKTtyZXR1cm4gdS5sZW5ndGg9Zix1fX0pO3ZhciB4bz1nLGl5PXpyLHZ5PWhlLHV5PXhvKHhvLmJpbmQpLHJhPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGl5KHIpLGU9PT12b2lkIDA/cjp2eT91eShyLGUpOmZ1bmN0aW9uKCl7cmV0dXJuIHIuYXBwbHkoZSxhcmd1bWVudHMpfX0sZnk9eCxObz1ELHN5PUl0LGx5PWZ1bmN0aW9uKHIsZSx0KXt2YXIgYSxuO05vKHIpO3RyeXtpZihhPXN5KHIsInJldHVybiIpLCFhKXtpZihlPT09InRocm93Iil0aHJvdyB0O3JldHVybiB0fWE9ZnkoYSxyKX1jYXRjaChvKXtuPSEwLGE9b31pZihlPT09InRocm93Iil0aHJvdyB0O2lmKG4pdGhyb3cgYTtyZXR1cm4gTm8oYSksdH0sY3k9RCx5eT1seSxkeT1mdW5jdGlvbihyLGUsdCxhKXt0cnl7cmV0dXJuIGE/ZShjeSh0KVswXSx0WzFdKTplKHQpfWNhdGNoKG4pe3l5KHIsInRocm93IixuKX19LHJlPXt9LHB5PU8sJHk9cmUsZ3k9cHkoIml0ZXJhdG9yIiksaHk9QXJyYXkucHJvdG90eXBlLE1vPWZ1bmN0aW9uKHIpe3JldHVybiByIT09dm9pZCAwJiYoJHkuQXJyYXk9PT1yfHxoeVtneV09PT1yKX0sVHk9eHIsRm89SXQsQXk9cmUsT3k9TyxieT1PeSgiaXRlcmF0b3IiKSxlYT1mdW5jdGlvbihyKXtpZihyIT1udWxsKXJldHVybiBGbyhyLGJ5KXx8Rm8ociwiQEBpdGVyYXRvciIpfHxBeVtUeShyKV19LFN5PWwsSXk9eCxFeT16cixteT1ELFJ5PUllLHd5PWVhLFB5PVN5LlR5cGVFcnJvcixqbz1mdW5jdGlvbihyLGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8Mj93eShyKTplO2lmKEV5KHQpKXJldHVybiBteShJeSh0LHIpKTt0aHJvdyBQeShSeShyKSsiIGlzIG5vdCBpdGVyYWJsZSIpfSxfeT1sLEN5PXJhLHh5PXgsTnk9RyxNeT1keSxGeT1NbyxqeT1OZSxMeT1GLExvPVF0LER5PWpvLEJ5PWVhLERvPV95LkFycmF5LFV5PWZ1bmN0aW9uKGUpe3ZhciB0PU55KGUpLGE9ankodGhpcyksbj1hcmd1bWVudHMubGVuZ3RoLG89bj4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsdj1vIT09dm9pZCAwO3YmJihvPUN5KG8sbj4yP2FyZ3VtZW50c1syXTp2b2lkIDApKTt2YXIgaT1CeSh0KSx1PTAsZixzLHAsJCxJLHk7aWYoaSYmISh0aGlzPT1EbyYmRnkoaSkpKWZvcigkPUR5KHQsaSksST0kLm5leHQscz1hP25ldyB0aGlzOltdOyEocD14eShJLCQpKS5kb25lO3UrKyl5PXY/TXkoJCxvLFtwLnZhbHVlLHVdLCEwKTpwLnZhbHVlLExvKHMsdSx5KTtlbHNlIGZvcihmPUx5KHQpLHM9YT9uZXcgdGhpcyhmKTpEbyhmKTtmPnU7dSsrKXk9dj9vKHRbdV0sdSk6dFt1XSxMbyhzLHUseSk7cmV0dXJuIHMubGVuZ3RoPXUsc30sR3k9TyxCbz1HeSgiaXRlcmF0b3IiKSxVbz0hMTt0cnl7dmFyIFZ5PTAsR289e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohIVZ5Kyt9fSxyZXR1cm46ZnVuY3Rpb24oKXtVbz0hMH19O0dvW0JvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxBcnJheS5mcm9tKEdvLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoe312YXIgVm89ZnVuY3Rpb24ocixlKXtpZighZSYmIVVvKXJldHVybiExO3ZhciB0PSExO3RyeXt2YXIgYT17fTthW0JvXT1mdW5jdGlvbigpe3JldHVybntuZXh0OmZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6dD0hMH19fX0scihhKX1jYXRjaHt9cmV0dXJuIHR9LFl5PXEsS3k9VXksa3k9Vm8sV3k9IWt5KGZ1bmN0aW9uKHIpe0FycmF5LmZyb20ocil9KTtZeSh7dGFyZ2V0OiJBcnJheSIsc3RhdDohMCxmb3JjZWQ6V3l9LHtmcm9tOkt5fSk7dmFyIHp5PWwsSHk9eHIscXk9enkuU3RyaW5nLE5yPWZ1bmN0aW9uKHIpe2lmKEh5KHIpPT09IlN5bWJvbCIpdGhyb3cgVHlwZUVycm9yKCJDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyIpO3JldHVybiBxeShyKX0sdGE9ZyxYeT1UcixKeT1OcixReT1PZSxaeT10YSgiIi5jaGFyQXQpLFlvPXRhKCIiLmNoYXJDb2RlQXQpLHJkPXRhKCIiLnNsaWNlKSxLbz1mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgYT1KeShReShlKSksbj1YeSh0KSxvPWEubGVuZ3RoLHYsaTtyZXR1cm4gbjwwfHxuPj1vP3I/IiI6dm9pZCAwOih2PVlvKGEsbiksdjw1NTI5Nnx8dj41NjMxOXx8bisxPT09b3x8KGk9WW8oYSxuKzEpKTw1NjMyMHx8aT41NzM0Mz9yP1p5KGEsbik6djpyP3JkKGEsbixuKzIpOih2LTU1Mjk2PDwxMCkrKGktNTYzMjApKzY1NTM2KX19LGVkPXtjb2RlQXQ6S28oITEpLGNoYXJBdDpLbyghMCl9LGFhPXt9LHRkPU9vLGFkPVd0LGtvPU9iamVjdC5rZXlzfHxmdW5jdGlvbihlKXtyZXR1cm4gdGQoZSxhZCl9LG5kPW0sb2Q9aW8saWQ9RSx2ZD1ELHVkPXosZmQ9a287YWEuZj1uZCYmIW9kP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKGUsdCl7dmQoZSk7Zm9yKHZhciBhPXVkKHQpLG49ZmQodCksbz1uLmxlbmd0aCx2PTAsaTtvPnY7KWlkLmYoZSxpPW5bdisrXSxhW2ldKTtyZXR1cm4gZX07dmFyIHNkPXlyLGxkPXNkKCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIpLGNkPUQseWQ9YWEsV289V3QsZGQ9d2UscGQ9bGQsJGQ9Q3QsZ2Q9UmUsem89Ij4iLEhvPSI8IixuYT0icHJvdG90eXBlIixvYT0ic2NyaXB0Iixxbz1nZCgiSUVfUFJPVE8iKSxpYT1mdW5jdGlvbigpe30sWG89ZnVuY3Rpb24ocil7cmV0dXJuIEhvK29hK3pvK3IrSG8rIi8iK29hK3pvfSxKbz1mdW5jdGlvbihyKXtyLndyaXRlKFhvKCIiKSksci5jbG9zZSgpO3ZhciBlPXIucGFyZW50V2luZG93Lk9iamVjdDtyZXR1cm4gcj1udWxsLGV9LGhkPWZ1bmN0aW9uKCl7dmFyIHI9JGQoImlmcmFtZSIpLGU9ImphdmEiK29hKyI6Iix0O3JldHVybiByLnN0eWxlLmRpc3BsYXk9Im5vbmUiLHBkLmFwcGVuZENoaWxkKHIpLHIuc3JjPVN0cmluZyhlKSx0PXIuY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKFhvKCJkb2N1bWVudC5GPU9iamVjdCIpKSx0LmNsb3NlKCksdC5GfSxGZSxqZT1mdW5jdGlvbigpe3RyeXtGZT1uZXcgQWN0aXZlWE9iamVjdCgiaHRtbGZpbGUiKX1jYXRjaHt9amU9dHlwZW9mIGRvY3VtZW50PCJ1Ij9kb2N1bWVudC5kb21haW4mJkZlP0pvKEZlKTpoZCgpOkpvKEZlKTtmb3IodmFyIHI9V28ubGVuZ3RoO3ItLTspZGVsZXRlIGplW25hXVtXb1tyXV07cmV0dXJuIGplKCl9O2RkW3FvXT0hMDt2YXIgZWU9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24oZSx0KXt2YXIgYTtyZXR1cm4gZSE9PW51bGw/KGlhW25hXT1jZChlKSxhPW5ldyBpYSxpYVtuYV09bnVsbCxhW3FvXT1lKTphPWplKCksdD09PXZvaWQgMD9hOnlkLmYoYSx0KX0sVGQ9VCxBZD0hVGQoZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7fXJldHVybiByLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1udWxsLE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgcikhPT1yLnByb3RvdHlwZX0pLE9kPWwsYmQ9UixTZD1TLElkPUcsRWQ9UmUsbWQ9QWQsUW89RWQoIklFX1BST1RPIiksdmE9T2QuT2JqZWN0LFJkPXZhLnByb3RvdHlwZSxMZT1tZD92YS5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihyKXt2YXIgZT1JZChyKTtpZihiZChlLFFvKSlyZXR1cm4gZVtRb107dmFyIHQ9ZS5jb25zdHJ1Y3RvcjtyZXR1cm4gU2QodCkmJmUgaW5zdGFuY2VvZiB0P3QucHJvdG90eXBlOmUgaW5zdGFuY2VvZiB2YT9SZDpudWxsfSx3ZD1ULFBkPVMsWm89TGUsX2Q9SC5leHBvcnRzLENkPU8sdWE9Q2QoIml0ZXJhdG9yIikscmk9ITEsQXIsZmEsc2E7W10ua2V5cyYmKHNhPVtdLmtleXMoKSwibmV4dCJpbiBzYT8oZmE9Wm8oWm8oc2EpKSxmYSE9PU9iamVjdC5wcm90b3R5cGUmJihBcj1mYSkpOnJpPSEwKTt2YXIgeGQ9QXI9PW51bGx8fHdkKGZ1bmN0aW9uKCl7dmFyIHI9e307cmV0dXJuIEFyW3VhXS5jYWxsKHIpIT09cn0pO3hkJiYoQXI9e30pLFBkKEFyW3VhXSl8fF9kKEFyLHVhLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KTt2YXIgZWk9e0l0ZXJhdG9yUHJvdG90eXBlOkFyLEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6cml9LE5kPUUuZixNZD1SLEZkPU8sdGk9RmQoInRvU3RyaW5nVGFnIiksRGU9ZnVuY3Rpb24ocixlLHQpe3ImJiF0JiYocj1yLnByb3RvdHlwZSksciYmIU1kKHIsdGkpJiZOZChyLHRpLHtjb25maWd1cmFibGU6ITAsdmFsdWU6ZX0pfSxqZD1laS5JdGVyYXRvclByb3RvdHlwZSxMZD1lZSxEZD13cixCZD1EZSxVZD1yZSxHZD1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxWZD1mdW5jdGlvbihyLGUsdCxhKXt2YXIgbj1lKyIgSXRlcmF0b3IiO3JldHVybiByLnByb3RvdHlwZT1MZChqZCx7bmV4dDpEZCgrIWEsdCl9KSxCZChyLG4sITEpLFVkW25dPUdkLHJ9LGFpPWwsWWQ9UyxLZD1haS5TdHJpbmcsa2Q9YWkuVHlwZUVycm9yLFdkPWZ1bmN0aW9uKHIpe2lmKHR5cGVvZiByPT0ib2JqZWN0Inx8WWQocikpcmV0dXJuIHI7dGhyb3cga2QoIkNhbid0IHNldCAiK0tkKHIpKyIgYXMgYSBwcm90b3R5cGUiKX0semQ9ZyxIZD1ELHFkPVdkLHRlPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KCJfX3Byb3RvX18iaW57fT9mdW5jdGlvbigpe3ZhciByPSExLGU9e30sdDt0cnl7dD16ZChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsIl9fcHJvdG9fXyIpLnNldCksdChlLFtdKSxyPWUgaW5zdGFuY2VvZiBBcnJheX1jYXRjaHt9cmV0dXJuIGZ1bmN0aW9uKG4sbyl7cmV0dXJuIEhkKG4pLHFkKG8pLHI/dChuLG8pOm4uX19wcm90b19fPW8sbn19KCk6dm9pZCAwKSxYZD1xLEpkPXgsbmk9Q2UsUWQ9UyxaZD1WZCxvaT1MZSxpaT10ZSxycD1EZSxlcD1hcixsYT1ILmV4cG9ydHMsdHA9TyxhcD1yZSx2aT1laSxucD1uaS5QUk9QRVIsb3A9bmkuQ09ORklHVVJBQkxFLHVpPXZpLkl0ZXJhdG9yUHJvdG90eXBlLEJlPXZpLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlMsYWU9dHAoIml0ZXJhdG9yIiksZmk9ImtleXMiLG5lPSJ2YWx1ZXMiLHNpPSJlbnRyaWVzIixpcD1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxsaT1mdW5jdGlvbihyLGUsdCxhLG4sbyx2KXtaZCh0LGUsYSk7dmFyIGk9ZnVuY3Rpb24oQSl7aWYoQT09PW4mJiQpcmV0dXJuICQ7aWYoIUJlJiZBIGluIHMpcmV0dXJuIHNbQV07c3dpdGNoKEEpe2Nhc2UgZmk6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMsQSl9O2Nhc2UgbmU6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMsQSl9O2Nhc2Ugc2k6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMsQSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzKX19LHU9ZSsiIEl0ZXJhdG9yIixmPSExLHM9ci5wcm90b3R5cGUscD1zW2FlXXx8c1siQEBpdGVyYXRvciJdfHxuJiZzW25dLCQ9IUJlJiZwfHxpKG4pLEk9ZT09IkFycmF5IiYmcy5lbnRyaWVzfHxwLHksYyxkO2lmKEkmJih5PW9pKEkuY2FsbChuZXcgcikpLHkhPT1PYmplY3QucHJvdG90eXBlJiZ5Lm5leHQmJihvaSh5KSE9PXVpJiYoaWk/aWkoeSx1aSk6UWQoeVthZV0pfHxsYSh5LGFlLGlwKSkscnAoeSx1LCEwKSkpLG5wJiZuPT1uZSYmcCYmcC5uYW1lIT09bmUmJihvcD9lcChzLCJuYW1lIixuZSk6KGY9ITAsJD1mdW5jdGlvbigpe3JldHVybiBKZChwLHRoaXMpfSkpLG4paWYoYz17dmFsdWVzOmkobmUpLGtleXM6bz8kOmkoZmkpLGVudHJpZXM6aShzaSl9LHYpZm9yKGQgaW4gYykoQmV8fGZ8fCEoZCBpbiBzKSkmJmxhKHMsZCxjW2RdKTtlbHNlIFhkKHt0YXJnZXQ6ZSxwcm90bzohMCxmb3JjZWQ6QmV8fGZ9LGMpO3JldHVybiBzW2FlXSE9PSQmJmxhKHMsYWUsJCx7bmFtZTpufSksYXBbZV09JCxjfSx2cD1lZC5jaGFyQXQsdXA9TnIsY2k9Z3IsZnA9bGkseWk9IlN0cmluZyBJdGVyYXRvciIsc3A9Y2kuc2V0LGxwPWNpLmdldHRlckZvcih5aSk7ZnAoU3RyaW5nLCJTdHJpbmciLGZ1bmN0aW9uKHIpe3NwKHRoaXMse3R5cGU6eWksc3RyaW5nOnVwKHIpLGluZGV4OjB9KX0sZnVuY3Rpb24oKXt2YXIgZT1scCh0aGlzKSx0PWUuc3RyaW5nLGE9ZS5pbmRleCxuO3JldHVybiBhPj10Lmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9OihuPXZwKHQsYSksZS5pbmRleCs9bi5sZW5ndGgse3ZhbHVlOm4sZG9uZTohMX0pfSk7dmFyIGNwPUQseXA9ZnVuY3Rpb24oKXt2YXIgcj1jcCh0aGlzKSxlPSIiO3JldHVybiByLmdsb2JhbCYmKGUrPSJnIiksci5pZ25vcmVDYXNlJiYoZSs9ImkiKSxyLm11bHRpbGluZSYmKGUrPSJtIiksci5kb3RBbGwmJihlKz0icyIpLHIudW5pY29kZSYmKGUrPSJ1Iiksci5zdGlja3kmJihlKz0ieSIpLGV9LGNhPVQsZHA9bCx5YT1kcC5SZWdFeHAsZGE9Y2EoZnVuY3Rpb24oKXt2YXIgcj15YSgiYSIsInkiKTtyZXR1cm4gci5sYXN0SW5kZXg9MixyLmV4ZWMoImFiY2QiKSE9bnVsbH0pLHBwPWRhfHxjYShmdW5jdGlvbigpe3JldHVybiF5YSgiYSIsInkiKS5zdGlja3l9KSwkcD1kYXx8Y2EoZnVuY3Rpb24oKXt2YXIgcj15YSgiXnIiLCJneSIpO3JldHVybiByLmxhc3RJbmRleD0yLHIuZXhlYygic3RyIikhPW51bGx9KSxncD17QlJPS0VOX0NBUkVUOiRwLE1JU1NFRF9TVElDS1k6cHAsVU5TVVBQT1JURURfWTpkYX0saHA9VCxUcD1sLEFwPVRwLlJlZ0V4cCxPcD1ocChmdW5jdGlvbigpe3ZhciByPUFwKCIuIiwicyIpO3JldHVybiEoci5kb3RBbGwmJnIuZXhlYyhgCmApJiZyLmZsYWdzPT09InMiKX0pLGJwPVQsU3A9bCxJcD1TcC5SZWdFeHAsRXA9YnAoZnVuY3Rpb24oKXt2YXIgcj1JcCgiKD88YT5iKSIsImciKTtyZXR1cm4gci5leGVjKCJiIikuZ3JvdXBzLmEhPT0iYiJ8fCJiIi5yZXBsYWNlKHIsIiQ8YT5jIikhPT0iYmMifSksTXI9eCxVZT1nLG1wPU5yLFJwPXlwLHdwPWdwLFBwPUhyLmV4cG9ydHMsX3A9ZWUsQ3A9Z3IuZ2V0LHhwPU9wLE5wPUVwLE1wPVBwKCJuYXRpdmUtc3RyaW5nLXJlcGxhY2UiLFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSksR2U9UmVnRXhwLnByb3RvdHlwZS5leGVjLHBhPUdlLEZwPVVlKCIiLmNoYXJBdCksanA9VWUoIiIuaW5kZXhPZiksTHA9VWUoIiIucmVwbGFjZSksJGE9VWUoIiIuc2xpY2UpLGdhPWZ1bmN0aW9uKCl7dmFyIHI9L2EvLGU9L2IqL2c7cmV0dXJuIE1yKEdlLHIsImEiKSxNcihHZSxlLCJhIiksci5sYXN0SW5kZXghPT0wfHxlLmxhc3RJbmRleCE9PTB9KCksZGk9d3AuQlJPS0VOX0NBUkVULGhhPS8oKT8/Ly5leGVjKCIiKVsxXSE9PXZvaWQgMCxEcD1nYXx8aGF8fGRpfHx4cHx8TnA7RHAmJihwYT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9Q3AodCksbj1tcChlKSxvPWEucmF3LHYsaSx1LGYscyxwLCQ7aWYobylyZXR1cm4gby5sYXN0SW5kZXg9dC5sYXN0SW5kZXgsdj1NcihwYSxvLG4pLHQubGFzdEluZGV4PW8ubGFzdEluZGV4LHY7dmFyIEk9YS5ncm91cHMseT1kaSYmdC5zdGlja3ksYz1NcihScCx0KSxkPXQuc291cmNlLEE9MCxQPW47aWYoeSYmKGM9THAoYywieSIsIiIpLGpwKGMsImciKT09PS0xJiYoYys9ImciKSxQPSRhKG4sdC5sYXN0SW5kZXgpLHQubGFzdEluZGV4PjAmJighdC5tdWx0aWxpbmV8fHQubXVsdGlsaW5lJiZGcChuLHQubGFzdEluZGV4LTEpIT09YApgKSYmKGQ9Iig/OiAiK2QrIikiLFA9IiAiK1AsQSsrKSxpPW5ldyBSZWdFeHAoIl4oPzoiK2QrIikiLGMpKSxoYSYmKGk9bmV3IFJlZ0V4cCgiXiIrZCsiJCg/IVxccykiLGMpKSxnYSYmKHU9dC5sYXN0SW5kZXgpLGY9TXIoR2UseT9pOnQsUCkseT9mPyhmLmlucHV0PSRhKGYuaW5wdXQsQSksZlswXT0kYShmWzBdLEEpLGYuaW5kZXg9dC5sYXN0SW5kZXgsdC5sYXN0SW5kZXgrPWZbMF0ubGVuZ3RoKTp0Lmxhc3RJbmRleD0wOmdhJiZmJiYodC5sYXN0SW5kZXg9dC5nbG9iYWw/Zi5pbmRleCtmWzBdLmxlbmd0aDp1KSxoYSYmZiYmZi5sZW5ndGg+MSYmTXIoTXAsZlswXSxpLGZ1bmN0aW9uKCl7Zm9yKHM9MTtzPGFyZ3VtZW50cy5sZW5ndGgtMjtzKyspYXJndW1lbnRzW3NdPT09dm9pZCAwJiYoZltzXT12b2lkIDApfSksZiYmSSlmb3IoZi5ncm91cHM9cD1fcChudWxsKSxzPTA7czxJLmxlbmd0aDtzKyspJD1JW3NdLHBbJFswXV09ZlskWzFdXTtyZXR1cm4gZn0pO3ZhciBCcD1wYSxVcD1xLHBpPUJwO1VwKHt0YXJnZXQ6IlJlZ0V4cCIscHJvdG86ITAsZm9yY2VkOi8uLy5leGVjIT09cGl9LHtleGVjOnBpfSk7dmFyIEdwPWhlLCRpPUZ1bmN0aW9uLnByb3RvdHlwZSxnaT0kaS5hcHBseSxoaT0kaS5jYWxsLFZlPXR5cGVvZiBSZWZsZWN0PT0ib2JqZWN0IiYmUmVmbGVjdC5hcHBseXx8KEdwP2hpLmJpbmQoZ2kpOmZ1bmN0aW9uKCl7cmV0dXJuIGhpLmFwcGx5KGdpLGFyZ3VtZW50cyl9KSxUaT17fSxWcD1sLEFpPUNyLFlwPUYsS3A9UXQsa3A9VnAuQXJyYXksV3A9TWF0aC5tYXgsVGE9ZnVuY3Rpb24ocixlLHQpe2Zvcih2YXIgYT1ZcChyKSxuPUFpKGUsYSksbz1BaSh0PT09dm9pZCAwP2E6dCxhKSx2PWtwKFdwKG8tbiwwKSksaT0wO248bztuKyssaSsrKUtwKHYsaSxyW25dKTtyZXR1cm4gdi5sZW5ndGg9aSx2fSx6cD1BZSxIcD16LE9pPWhyLmYscXA9VGEsYmk9dHlwZW9mIHdpbmRvdz09Im9iamVjdCImJndpbmRvdyYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM/T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KTpbXSxYcD1mdW5jdGlvbihyKXt0cnl7cmV0dXJuIE9pKHIpfWNhdGNoe3JldHVybiBxcChiaSl9fTtUaS5mPWZ1bmN0aW9uKGUpe3JldHVybiBiaSYmenAoZSk9PSJXaW5kb3ciP1hwKGUpOk9pKEhwKGUpKX07dmFyIEFhPXt9LEpwPU87QWEuZj1KcDt2YXIgUXA9bCxacD1RcCxTaT1acCxyJD1SLGUkPUFhLHQkPUUuZixJaT1mdW5jdGlvbihyKXt2YXIgZT1TaS5TeW1ib2x8fChTaS5TeW1ib2w9e30pO3IkKGUscil8fHQkKGUscix7dmFsdWU6ZSQuZihyKX0pfSxhJD1sLEVpPXF0LG4kPU5lLG8kPU0saSQ9Tyx2JD1pJCgic3BlY2llcyIpLG1pPWEkLkFycmF5LHUkPWZ1bmN0aW9uKHIpe3ZhciBlO3JldHVybiBFaShyKSYmKGU9ci5jb25zdHJ1Y3RvcixuJChlKSYmKGU9PT1taXx8RWkoZS5wcm90b3R5cGUpKT9lPXZvaWQgMDpvJChlKSYmKGU9ZVt2JF0sZT09PW51bGwmJihlPXZvaWQgMCkpKSxlPT09dm9pZCAwP21pOmV9LGYkPXUkLHMkPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIG5ldyhmJChyKSkoZT09PTA/MDplKX0sbCQ9cmEsYyQ9Zyx5JD1UdCxkJD1HLHAkPUYsJCQ9cyQsUmk9YyQoW10ucHVzaCksbnI9ZnVuY3Rpb24ocil7dmFyIGU9cj09MSx0PXI9PTIsYT1yPT0zLG49cj09NCxvPXI9PTYsdj1yPT03LGk9cj09NXx8bztyZXR1cm4gZnVuY3Rpb24odSxmLHMscCl7Zm9yKHZhciAkPWQkKHUpLEk9eSQoJCkseT1sJChmLHMpLGM9cCQoSSksZD0wLEE9cHx8JCQsUD1lP0EodSxjKTp0fHx2P0EodSwwKTp2b2lkIDAsVyxscjtjPmQ7ZCsrKWlmKChpfHxkIGluIEkpJiYoVz1JW2RdLGxyPXkoVyxkLCQpLHIpKWlmKGUpUFtkXT1scjtlbHNlIGlmKGxyKXN3aXRjaChyKXtjYXNlIDM6cmV0dXJuITA7Y2FzZSA1OnJldHVybiBXO2Nhc2UgNjpyZXR1cm4gZDtjYXNlIDI6UmkoUCxXKX1lbHNlIHN3aXRjaChyKXtjYXNlIDQ6cmV0dXJuITE7Y2FzZSA3OlJpKFAsVyl9cmV0dXJuIG8/LTE6YXx8bj9uOlB9fSxYPXtmb3JFYWNoOm5yKDApLG1hcDpucigxKSxmaWx0ZXI6bnIoMiksc29tZTpucigzKSxldmVyeTpucig0KSxmaW5kOm5yKDUpLGZpbmRJbmRleDpucig2KSxmaWx0ZXJSZWplY3Q6bnIoNyl9LEZyPXEsT2E9bCxnJD15cixoJD1WZSxvZT14LFQkPWcsanI9bSxPcj1TdCxiYT1ULGI9UixBJD1xdCxPJD1TLGIkPU0sUyQ9ZHIsU2E9V3IsSWE9RCxJJD1HLFllPXosRWE9cXIsd2k9TnIsbWE9d3IsaWU9ZWUsUGk9a28sRSQ9aHIsX2k9VGksUmE9enQsQ2k9UnIseGk9RSxtJD1hYSxOaT0kdCxSJD1NZSxLZT1ILmV4cG9ydHMsdmU9SHIuZXhwb3J0cyx3JD1SZSxNaT13ZSxGaT1FZSxqaT1PLFAkPUFhLF8kPUlpLEMkPURlLExpPWdyLGtlPVguZm9yRWFjaCxfPXckKCJoaWRkZW4iKSxXZT0iU3ltYm9sIix1ZT0icHJvdG90eXBlIixEaT1qaSgidG9QcmltaXRpdmUiKSx4JD1MaS5zZXQsQmk9TGkuZ2V0dGVyRm9yKFdlKSxqPU9iamVjdFt1ZV0sSj1PYS5TeW1ib2wsb3I9SiYmSlt1ZV0sVWk9T2EuVHlwZUVycm9yLHdhPU9hLlFPYmplY3QsZmU9ZyQoIkpTT04iLCJzdHJpbmdpZnkiKSxHaT1DaS5mLGlyPXhpLmYsVmk9X2kuZixOJD1OaS5mLFlpPVQkKFtdLnB1c2gpLFE9dmUoInN5bWJvbHMiKSxzZT12ZSgib3Atc3ltYm9scyIpLFBhPXZlKCJzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5IiksX2E9dmUoInN5bWJvbC10by1zdHJpbmctcmVnaXN0cnkiKSxNJD12ZSgid2tzIiksQ2E9IXdhfHwhd2FbdWVdfHwhd2FbdWVdLmZpbmRDaGlsZCx4YT1qciYmYmEoZnVuY3Rpb24oKXtyZXR1cm4gaWUoaXIoe30sImEiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaXIodGhpcywiYSIse3ZhbHVlOjd9KS5hfX0pKS5hIT03fSk/ZnVuY3Rpb24ocixlLHQpe3ZhciBhPUdpKGosZSk7YSYmZGVsZXRlIGpbZV0saXIocixlLHQpLGEmJnIhPT1qJiZpcihqLGUsYSl9OmlyLE5hPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9UVtyXT1pZShvcik7cmV0dXJuIHgkKHQse3R5cGU6V2UsdGFnOnIsZGVzY3JpcHRpb246ZX0pLGpyfHwodC5kZXNjcmlwdGlvbj1lKSx0fSx6ZT1mdW5jdGlvbihlLHQsYSl7ZT09PWomJnplKHNlLHQsYSksSWEoZSk7dmFyIG49RWEodCk7cmV0dXJuIElhKGEpLGIoUSxuKT8oYS5lbnVtZXJhYmxlPyhiKGUsXykmJmVbX11bbl0mJihlW19dW25dPSExKSxhPWllKGEse2VudW1lcmFibGU6bWEoMCwhMSl9KSk6KGIoZSxfKXx8aXIoZSxfLG1hKDEse30pKSxlW19dW25dPSEwKSx4YShlLG4sYSkpOmlyKGUsbixhKX0sTWE9ZnVuY3Rpb24oZSx0KXtJYShlKTt2YXIgYT1ZZSh0KSxuPVBpKGEpLmNvbmNhdChqYShhKSk7cmV0dXJuIGtlKG4sZnVuY3Rpb24obyl7KCFqcnx8b2UoRmEsYSxvKSkmJnplKGUsbyxhW29dKX0pLGV9LEYkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9PT12b2lkIDA/aWUoZSk6TWEoaWUoZSksdCl9LEZhPWZ1bmN0aW9uKGUpe3ZhciB0PUVhKGUpLGE9b2UoTiQsdGhpcyx0KTtyZXR1cm4gdGhpcz09PWomJmIoUSx0KSYmIWIoc2UsdCk/ITE6YXx8IWIodGhpcyx0KXx8IWIoUSx0KXx8Yih0aGlzLF8pJiZ0aGlzW19dW3RdP2E6ITB9LEtpPWZ1bmN0aW9uKGUsdCl7dmFyIGE9WWUoZSksbj1FYSh0KTtpZighKGE9PT1qJiZiKFEsbikmJiFiKHNlLG4pKSl7dmFyIG89R2koYSxuKTtyZXR1cm4gbyYmYihRLG4pJiYhKGIoYSxfKSYmYVtfXVtuXSkmJihvLmVudW1lcmFibGU9ITApLG99fSxraT1mdW5jdGlvbihlKXt2YXIgdD1WaShZZShlKSksYT1bXTtyZXR1cm4ga2UodCxmdW5jdGlvbihuKXshYihRLG4pJiYhYihNaSxuKSYmWWkoYSxuKX0pLGF9LGphPWZ1bmN0aW9uKGUpe3ZhciB0PWU9PT1qLGE9VmkodD9zZTpZZShlKSksbj1bXTtyZXR1cm4ga2UoYSxmdW5jdGlvbihvKXtiKFEsbykmJighdHx8YihqLG8pKSYmWWkobixRW29dKX0pLG59O2lmKE9yfHwoSj1mdW5jdGlvbigpe2lmKFMkKG9yLHRoaXMpKXRocm93IFVpKCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IiKTt2YXIgZT0hYXJndW1lbnRzLmxlbmd0aHx8YXJndW1lbnRzWzBdPT09dm9pZCAwP3ZvaWQgMDp3aShhcmd1bWVudHNbMF0pLHQ9RmkoZSksYT1mdW5jdGlvbihuKXt0aGlzPT09aiYmb2UoYSxzZSxuKSxiKHRoaXMsXykmJmIodGhpc1tfXSx0KSYmKHRoaXNbX11bdF09ITEpLHhhKHRoaXMsdCxtYSgxLG4pKX07cmV0dXJuIGpyJiZDYSYmeGEoaix0LHtjb25maWd1cmFibGU6ITAsc2V0OmF9KSxOYSh0LGUpfSxvcj1KW3VlXSxLZShvciwidG9TdHJpbmciLGZ1bmN0aW9uKCl7cmV0dXJuIEJpKHRoaXMpLnRhZ30pLEtlKEosIndpdGhvdXRTZXR0ZXIiLGZ1bmN0aW9uKHIpe3JldHVybiBOYShGaShyKSxyKX0pLE5pLmY9RmEseGkuZj16ZSxtJC5mPU1hLENpLmY9S2ksRSQuZj1faS5mPWtpLFJhLmY9amEsUCQuZj1mdW5jdGlvbihyKXtyZXR1cm4gTmEoamkocikscil9LGpyJiYoaXIob3IsImRlc2NyaXB0aW9uIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBCaSh0aGlzKS5kZXNjcmlwdGlvbn19KSxLZShqLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsRmEse3Vuc2FmZTohMH0pKSksRnIoe2dsb2JhbDohMCx3cmFwOiEwLGZvcmNlZDohT3Isc2hhbTohT3J9LHtTeW1ib2w6Sn0pLGtlKFBpKE0kKSxmdW5jdGlvbihyKXtfJChyKX0pLEZyKHt0YXJnZXQ6V2Usc3RhdDohMCxmb3JjZWQ6IU9yfSx7Zm9yOmZ1bmN0aW9uKHIpe3ZhciBlPXdpKHIpO2lmKGIoUGEsZSkpcmV0dXJuIFBhW2VdO3ZhciB0PUooZSk7cmV0dXJuIFBhW2VdPXQsX2FbdF09ZSx0fSxrZXlGb3I6ZnVuY3Rpb24oZSl7aWYoIVNhKGUpKXRocm93IFVpKGUrIiBpcyBub3QgYSBzeW1ib2wiKTtpZihiKF9hLGUpKXJldHVybiBfYVtlXX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Q2E9ITB9LHVzZVNpbXBsZTpmdW5jdGlvbigpe0NhPSExfX0pLEZyKHt0YXJnZXQ6Ik9iamVjdCIsc3RhdDohMCxmb3JjZWQ6IU9yLHNoYW06IWpyfSx7Y3JlYXRlOkYkLGRlZmluZVByb3BlcnR5OnplLGRlZmluZVByb3BlcnRpZXM6TWEsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOktpfSksRnIoe3RhcmdldDoiT2JqZWN0IixzdGF0OiEwLGZvcmNlZDohT3J9LHtnZXRPd25Qcm9wZXJ0eU5hbWVzOmtpLGdldE93blByb3BlcnR5U3ltYm9sczpqYX0pLEZyKHt0YXJnZXQ6Ik9iamVjdCIsc3RhdDohMCxmb3JjZWQ6YmEoZnVuY3Rpb24oKXtSYS5mKDEpfSl9LHtnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ZnVuY3Rpb24oZSl7cmV0dXJuIFJhLmYoSSQoZSkpfX0pLGZlKXt2YXIgaiQ9IU9yfHxiYShmdW5jdGlvbigpe3ZhciByPUooKTtyZXR1cm4gZmUoW3JdKSE9IltudWxsXSJ8fGZlKHthOnJ9KSE9Int9Inx8ZmUoT2JqZWN0KHIpKSE9Int9In0pO0ZyKHt0YXJnZXQ6IkpTT04iLHN0YXQ6ITAsZm9yY2VkOmokfSx7c3RyaW5naWZ5OmZ1bmN0aW9uKGUsdCxhKXt2YXIgbj1SJChhcmd1bWVudHMpLG89dDtpZighKCFiJCh0KSYmZT09PXZvaWQgMHx8U2EoZSkpKXJldHVybiBBJCh0KXx8KHQ9ZnVuY3Rpb24odixpKXtpZihPJChvKSYmKGk9b2Uobyx0aGlzLHYsaSkpLCFTYShpKSlyZXR1cm4gaX0pLG5bMV09dCxoJChmZSxudWxsLG4pfX0pfWlmKCFvcltEaV0pe3ZhciBMJD1vci52YWx1ZU9mO0tlKG9yLERpLGZ1bmN0aW9uKHIpe3JldHVybiBvZShMJCx0aGlzKX0pfUMkKEosV2UpLE1pW19dPSEwO3ZhciBEJD1xLEIkPW0sVSQ9bCxIZT1nLEckPVIsViQ9UyxZJD1kcixLJD1OcixrJD1FLmYsVyQ9U28sWj1VJC5TeW1ib2wsYnI9WiYmWi5wcm90b3R5cGU7aWYoQiQmJlYkKFopJiYoISgiZGVzY3JpcHRpb24iaW4gYnIpfHxaKCkuZGVzY3JpcHRpb24hPT12b2lkIDApKXt2YXIgV2k9e30scWU9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50c1swXT09PXZvaWQgMD92b2lkIDA6SyQoYXJndW1lbnRzWzBdKSx0PVkkKGJyLHRoaXMpP25ldyBaKGUpOmU9PT12b2lkIDA/WigpOlooZSk7cmV0dXJuIGU9PT0iIiYmKFdpW3RdPSEwKSx0fTtXJChxZSxaKSxxZS5wcm90b3R5cGU9YnIsYnIuY29uc3RydWN0b3I9cWU7dmFyIHokPVN0cmluZyhaKCJ0ZXN0IikpPT0iU3ltYm9sKHRlc3QpIixIJD1IZShici50b1N0cmluZykscSQ9SGUoYnIudmFsdWVPZiksWCQ9L15TeW1ib2xcKCguKilcKVteKV0rJC8sSiQ9SGUoIiIucmVwbGFjZSksUSQ9SGUoIiIuc2xpY2UpO2skKGJyLCJkZXNjcmlwdGlvbiIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1xJCh0aGlzKSx0PUgkKGUpO2lmKEckKFdpLGUpKXJldHVybiIiO3ZhciBhPXokP1EkKHQsNywtMSk6SiQodCxYJCwiJDEiKTtyZXR1cm4gYT09PSIiP3ZvaWQgMDphfX0pLEQkKHtnbG9iYWw6ITAsZm9yY2VkOiEwfSx7U3ltYm9sOnFlfSl9dmFyIFokPUlpO1okKCJpdGVyYXRvciIpO3ZhciByZz17Q1NTUnVsZUxpc3Q6MCxDU1NTdHlsZURlY2xhcmF0aW9uOjAsQ1NTVmFsdWVMaXN0OjAsQ2xpZW50UmVjdExpc3Q6MCxET01SZWN0TGlzdDowLERPTVN0cmluZ0xpc3Q6MCxET01Ub2tlbkxpc3Q6MSxEYXRhVHJhbnNmZXJJdGVtTGlzdDowLEZpbGVMaXN0OjAsSFRNTEFsbENvbGxlY3Rpb246MCxIVE1MQ29sbGVjdGlvbjowLEhUTUxGb3JtRWxlbWVudDowLEhUTUxTZWxlY3RFbGVtZW50OjAsTWVkaWFMaXN0OjAsTWltZVR5cGVBcnJheTowLE5hbWVkTm9kZU1hcDowLE5vZGVMaXN0OjEsUGFpbnRSZXF1ZXN0TGlzdDowLFBsdWdpbjowLFBsdWdpbkFycmF5OjAsU1ZHTGVuZ3RoTGlzdDowLFNWR051bWJlckxpc3Q6MCxTVkdQYXRoU2VnTGlzdDowLFNWR1BvaW50TGlzdDowLFNWR1N0cmluZ0xpc3Q6MCxTVkdUcmFuc2Zvcm1MaXN0OjAsU291cmNlQnVmZmVyTGlzdDowLFN0eWxlU2hlZXRMaXN0OjAsVGV4dFRyYWNrQ3VlTGlzdDowLFRleHRUcmFja0xpc3Q6MCxUb3VjaExpc3Q6MH0sZWc9Q3QsTGE9ZWcoInNwYW4iKS5jbGFzc0xpc3Qsemk9TGEmJkxhLmNvbnN0cnVjdG9yJiZMYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsdGc9emk9PT1PYmplY3QucHJvdG90eXBlP3ZvaWQgMDp6aSxhZz1PLG5nPWVlLG9nPUUsRGE9YWcoInVuc2NvcGFibGVzIiksQmE9QXJyYXkucHJvdG90eXBlO0JhW0RhXT09bnVsbCYmb2cuZihCYSxEYSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm5nKG51bGwpfSk7dmFyIGlnPWZ1bmN0aW9uKHIpe0JhW0RhXVtyXT0hMH0sdmc9eixVYT1pZyxIaT1yZSxxaT1ncix1Zz1FLmYsZmc9bGksc2c9bSxYaT0iQXJyYXkgSXRlcmF0b3IiLGxnPXFpLnNldCxjZz1xaS5nZXR0ZXJGb3IoWGkpLEppPWZnKEFycmF5LCJBcnJheSIsZnVuY3Rpb24ocixlKXtsZyh0aGlzLHt0eXBlOlhpLHRhcmdldDp2ZyhyKSxpbmRleDowLGtpbmQ6ZX0pfSxmdW5jdGlvbigpe3ZhciByPWNnKHRoaXMpLGU9ci50YXJnZXQsdD1yLmtpbmQsYT1yLmluZGV4Kys7cmV0dXJuIWV8fGE+PWUubGVuZ3RoPyhyLnRhcmdldD12b2lkIDAse3ZhbHVlOnZvaWQgMCxkb25lOiEwfSk6dD09ImtleXMiP3t2YWx1ZTphLGRvbmU6ITF9OnQ9PSJ2YWx1ZXMiP3t2YWx1ZTplW2FdLGRvbmU6ITF9Ont2YWx1ZTpbYSxlW2FdXSxkb25lOiExfX0sInZhbHVlcyIpLFFpPUhpLkFyZ3VtZW50cz1IaS5BcnJheTtpZihVYSgia2V5cyIpLFVhKCJ2YWx1ZXMiKSxVYSgiZW50cmllcyIpLHNnJiZRaS5uYW1lIT09InZhbHVlcyIpdHJ5e3VnKFFpLCJuYW1lIix7dmFsdWU6InZhbHVlcyJ9KX1jYXRjaHt9dmFyIFppPWwscnY9cmcseWc9dGcsbGU9SmksR2E9YXIsZXY9TyxWYT1ldigiaXRlcmF0b3IiKSx0dj1ldigidG9TdHJpbmdUYWciKSxZYT1sZS52YWx1ZXMsYXY9ZnVuY3Rpb24ocixlKXtpZihyKXtpZihyW1ZhXSE9PVlhKXRyeXtHYShyLFZhLFlhKX1jYXRjaHtyW1ZhXT1ZYX1pZihyW3R2XXx8R2Eocix0dixlKSxydltlXSl7Zm9yKHZhciB0IGluIGxlKWlmKHJbdF0hPT1sZVt0XSl0cnl7R2Eocix0LGxlW3RdKX1jYXRjaHtyW3RdPWxlW3RdfX19fTtmb3IodmFyIEthIGluIHJ2KWF2KFppW0thXSYmWmlbS2FdLnByb3RvdHlwZSxLYSk7YXYoeWcsIkRPTVRva2VuTGlzdCIpO3ZhciBudj10eXBlb2YgQXJyYXlCdWZmZXI8InUiJiZ0eXBlb2YgRGF0YVZpZXc8InUiLGRnPUguZXhwb3J0cyxwZz1mdW5jdGlvbihyLGUsdCl7Zm9yKHZhciBhIGluIGUpZGcocixhLGVbYV0sdCk7cmV0dXJuIHJ9LCRnPWwsZ2c9ZHIsaGc9JGcuVHlwZUVycm9yLG92PWZ1bmN0aW9uKHIsZSl7aWYoZ2coZSxyKSlyZXR1cm4gcjt0aHJvdyBoZygiSW5jb3JyZWN0IGludm9jYXRpb24iKX0sVGc9bCxBZz1UcixPZz1KcixiZz1UZy5SYW5nZUVycm9yLGl2PWZ1bmN0aW9uKHIpe2lmKHI9PT12b2lkIDApcmV0dXJuIDA7dmFyIGU9QWcociksdD1PZyhlKTtpZihlIT09dCl0aHJvdyBiZygiV3JvbmcgbGVuZ3RoIG9yIGluZGV4Iik7cmV0dXJuIHR9LFNnPWwsSWc9U2cuQXJyYXksRWc9TWF0aC5hYnMscnI9TWF0aC5wb3csbWc9TWF0aC5mbG9vcixSZz1NYXRoLmxvZyx3Zz1NYXRoLkxOMixQZz1mdW5jdGlvbihyLGUsdCl7dmFyIGE9SWcodCksbj10KjgtZS0xLG89KDE8PG4pLTEsdj1vPj4xLGk9ZT09PTIzP3JyKDIsLTI0KS1ycigyLC03Nyk6MCx1PXI8MHx8cj09PTAmJjEvcjwwPzE6MCxmPTAscyxwLCQ7Zm9yKHI9RWcociksciE9cnx8cj09PTEvMD8ocD1yIT1yPzE6MCxzPW8pOihzPW1nKFJnKHIpL3dnKSwkPXJyKDIsLXMpLHIqJDwxJiYocy0tLCQqPTIpLHMrdj49MT9yKz1pLyQ6cis9aSpycigyLDEtdiksciokPj0yJiYocysrLCQvPTIpLHMrdj49bz8ocD0wLHM9byk6cyt2Pj0xPyhwPShyKiQtMSkqcnIoMixlKSxzPXMrdik6KHA9cipycigyLHYtMSkqcnIoMixlKSxzPTApKTtlPj04OylhW2YrK109cCYyNTUscC89MjU2LGUtPTg7Zm9yKHM9czw8ZXxwLG4rPWU7bj4wOylhW2YrK109cyYyNTUscy89MjU2LG4tPTg7cmV0dXJuIGFbLS1mXXw9dSoxMjgsYX0sX2c9ZnVuY3Rpb24ocixlKXt2YXIgdD1yLmxlbmd0aCxhPXQqOC1lLTEsbj0oMTw8YSktMSxvPW4+PjEsdj1hLTcsaT10LTEsdT1yW2ktLV0sZj11JjEyNyxzO2Zvcih1Pj49Nzt2PjA7KWY9ZioyNTYrcltpLS1dLHYtPTg7Zm9yKHM9ZiYoMTw8LXYpLTEsZj4+PS12LHYrPWU7dj4wOylzPXMqMjU2K3JbaS0tXSx2LT04O2lmKGY9PT0wKWY9MS1vO2Vsc2V7aWYoZj09PW4pcmV0dXJuIHM/TmFOOnU/LTEvMDoxLzA7cz1zK3JyKDIsZSksZj1mLW99cmV0dXJuKHU/LTE6MSkqcypycigyLGYtZSl9LENnPXtwYWNrOlBnLHVucGFjazpfZ30seGc9Ryx2dj1DcixOZz1GLHV2PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD14Zyh0aGlzKSxhPU5nKHQpLG49YXJndW1lbnRzLmxlbmd0aCxvPXZ2KG4+MT9hcmd1bWVudHNbMV06dm9pZCAwLGEpLHY9bj4yP2FyZ3VtZW50c1syXTp2b2lkIDAsaT12PT09dm9pZCAwP2E6dnYodixhKTtpPm87KXRbbysrXT1lO3JldHVybiB0fSxYZT1sLGthPWcsV2E9bSxNZz1udixmdj1DZSxzdj1hcixsdj1wZyx6YT1ULEplPW92LEZnPVRyLGpnPUpyLFFlPWl2LGN2PUNnLExnPUxlLHl2PXRlLERnPWhyLmYsQmc9RS5mLFVnPXV2LEdnPVRhLGR2PURlLHB2PWdyLFZnPWZ2LlBST1BFUiwkdj1mdi5DT05GSUdVUkFCTEUsTHI9cHYuZ2V0LGd2PXB2LnNldCxaZT0iQXJyYXlCdWZmZXIiLGh2PSJEYXRhVmlldyIsRHI9InByb3RvdHlwZSIsWWc9Ildyb25nIGxlbmd0aCIsVHY9Ildyb25nIGluZGV4IixCPVhlW1plXSxOPUIsQnI9TiYmTltEcl0sVj1YZVtodl0sU3I9ViYmVltEcl0sQXY9T2JqZWN0LnByb3RvdHlwZSxLZz1YZS5BcnJheSxydD1YZS5SYW5nZUVycm9yLGtnPWthKFVnKSxXZz1rYShbXS5yZXZlcnNlKSxPdj1jdi5wYWNrLGJ2PWN2LnVucGFjayxTdj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTVdfSxJdj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTUscj4+OCYyNTVdfSxFdj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTUscj4+OCYyNTUscj4+MTYmMjU1LHI+PjI0JjI1NV19LG12PWZ1bmN0aW9uKHIpe3JldHVybiByWzNdPDwyNHxyWzJdPDwxNnxyWzFdPDw4fHJbMF19LHpnPWZ1bmN0aW9uKHIpe3JldHVybiBPdihyLDIzLDQpfSxIZz1mdW5jdGlvbihyKXtyZXR1cm4gT3Yociw1Miw4KX0sZXQ9ZnVuY3Rpb24ocixlKXtCZyhyW0RyXSxlLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTHIodGhpcylbZV19fSl9LHZyPWZ1bmN0aW9uKHIsZSx0LGEpe3ZhciBuPVFlKHQpLG89THIocik7aWYobitlPm8uYnl0ZUxlbmd0aCl0aHJvdyBydChUdik7dmFyIHY9THIoby5idWZmZXIpLmJ5dGVzLGk9bitvLmJ5dGVPZmZzZXQsdT1HZyh2LGksaStlKTtyZXR1cm4gYT91OldnKHUpfSx1cj1mdW5jdGlvbihyLGUsdCxhLG4sbyl7dmFyIHY9UWUodCksaT1McihyKTtpZih2K2U+aS5ieXRlTGVuZ3RoKXRocm93IHJ0KFR2KTtmb3IodmFyIHU9THIoaS5idWZmZXIpLmJ5dGVzLGY9ditpLmJ5dGVPZmZzZXQscz1hKCtuKSxwPTA7cDxlO3ArKyl1W2YrcF09c1tvP3A6ZS1wLTFdfTtpZighTWcpTj1mdW5jdGlvbihlKXtKZSh0aGlzLEJyKTt2YXIgdD1RZShlKTtndih0aGlzLHtieXRlczprZyhLZyh0KSwwKSxieXRlTGVuZ3RoOnR9KSxXYXx8KHRoaXMuYnl0ZUxlbmd0aD10KX0sQnI9TltEcl0sVj1mdW5jdGlvbihlLHQsYSl7SmUodGhpcyxTciksSmUoZSxCcik7dmFyIG49THIoZSkuYnl0ZUxlbmd0aCxvPUZnKHQpO2lmKG88MHx8bz5uKXRocm93IHJ0KCJXcm9uZyBvZmZzZXQiKTtpZihhPWE9PT12b2lkIDA/bi1vOmpnKGEpLG8rYT5uKXRocm93IHJ0KFlnKTtndih0aGlzLHtidWZmZXI6ZSxieXRlTGVuZ3RoOmEsYnl0ZU9mZnNldDpvfSksV2F8fCh0aGlzLmJ1ZmZlcj1lLHRoaXMuYnl0ZUxlbmd0aD1hLHRoaXMuYnl0ZU9mZnNldD1vKX0sU3I9VltEcl0sV2EmJihldChOLCJieXRlTGVuZ3RoIiksZXQoViwiYnVmZmVyIiksZXQoViwiYnl0ZUxlbmd0aCIpLGV0KFYsImJ5dGVPZmZzZXQiKSksbHYoU3Ise2dldEludDg6ZnVuY3Rpb24oZSl7cmV0dXJuIHZyKHRoaXMsMSxlKVswXTw8MjQ+PjI0fSxnZXRVaW50ODpmdW5jdGlvbihlKXtyZXR1cm4gdnIodGhpcywxLGUpWzBdfSxnZXRJbnQxNjpmdW5jdGlvbihlKXt2YXIgdD12cih0aGlzLDIsZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCk7cmV0dXJuKHRbMV08PDh8dFswXSk8PDE2Pj4xNn0sZ2V0VWludDE2OmZ1bmN0aW9uKGUpe3ZhciB0PXZyKHRoaXMsMixlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKTtyZXR1cm4gdFsxXTw8OHx0WzBdfSxnZXRJbnQzMjpmdW5jdGlvbihlKXtyZXR1cm4gbXYodnIodGhpcyw0LGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApKX0sZ2V0VWludDMyOmZ1bmN0aW9uKGUpe3JldHVybiBtdih2cih0aGlzLDQsZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCkpPj4+MH0sZ2V0RmxvYXQzMjpmdW5jdGlvbihlKXtyZXR1cm4gYnYodnIodGhpcyw0LGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApLDIzKX0sZ2V0RmxvYXQ2NDpmdW5jdGlvbihlKXtyZXR1cm4gYnYodnIodGhpcyw4LGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApLDUyKX0sc2V0SW50ODpmdW5jdGlvbihlLHQpe3VyKHRoaXMsMSxlLFN2LHQpfSxzZXRVaW50ODpmdW5jdGlvbihlLHQpe3VyKHRoaXMsMSxlLFN2LHQpfSxzZXRJbnQxNjpmdW5jdGlvbihlLHQpe3VyKHRoaXMsMixlLEl2LHQsYXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDApfSxzZXRVaW50MTY6ZnVuY3Rpb24oZSx0KXt1cih0aGlzLDIsZSxJdix0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0sc2V0SW50MzI6ZnVuY3Rpb24oZSx0KXt1cih0aGlzLDQsZSxFdix0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0sc2V0VWludDMyOmZ1bmN0aW9uKGUsdCl7dXIodGhpcyw0LGUsRXYsdCxhcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCl9LHNldEZsb2F0MzI6ZnVuY3Rpb24oZSx0KXt1cih0aGlzLDQsZSx6Zyx0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0sc2V0RmxvYXQ2NDpmdW5jdGlvbihlLHQpe3VyKHRoaXMsOCxlLEhnLHQsYXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDApfX0pO2Vsc2V7dmFyIFJ2PVZnJiZCLm5hbWUhPT1aZTtpZighemEoZnVuY3Rpb24oKXtCKDEpfSl8fCF6YShmdW5jdGlvbigpe25ldyBCKC0xKX0pfHx6YShmdW5jdGlvbigpe3JldHVybiBuZXcgQixuZXcgQigxLjUpLG5ldyBCKE5hTiksUnYmJiEkdn0pKXtOPWZ1bmN0aW9uKGUpe3JldHVybiBKZSh0aGlzLEJyKSxuZXcgQihRZShlKSl9LE5bRHJdPUJyO2Zvcih2YXIgd3Y9RGcoQiksUHY9MCxIYTt3di5sZW5ndGg+UHY7KShIYT13dltQdisrXSlpbiBOfHxzdihOLEhhLEJbSGFdKTtCci5jb25zdHJ1Y3Rvcj1OfWVsc2UgUnYmJiR2JiZzdihCLCJuYW1lIixaZSk7eXYmJkxnKFNyKSE9PUF2JiZ5dihTcixBdik7dmFyIHR0PW5ldyBWKG5ldyBOKDIpKSxfdj1rYShTci5zZXRJbnQ4KTt0dC5zZXRJbnQ4KDAsMjE0NzQ4MzY0OCksdHQuc2V0SW50OCgxLDIxNDc0ODM2NDkpLCh0dC5nZXRJbnQ4KDApfHwhdHQuZ2V0SW50OCgxKSkmJmx2KFNyLHtzZXRJbnQ4OmZ1bmN0aW9uKGUsdCl7X3YodGhpcyxlLHQ8PDI0Pj4yNCl9LHNldFVpbnQ4OmZ1bmN0aW9uKGUsdCl7X3YodGhpcyxlLHQ8PDI0Pj4yNCl9fSx7dW5zYWZlOiEwfSl9ZHYoTixaZSksZHYoVixodik7dmFyIEN2PXtBcnJheUJ1ZmZlcjpOLERhdGFWaWV3OlZ9LHFnPXlyLFhnPUUsSmc9TyxRZz1tLHh2PUpnKCJzcGVjaWVzIiksTnY9ZnVuY3Rpb24ocil7dmFyIGU9cWcociksdD1YZy5mO1FnJiZlJiYhZVt4dl0mJnQoZSx4dix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfSxaZz1xLHJoPWwsZWg9Q3YsdGg9TnYscWE9IkFycmF5QnVmZmVyIixNdj1laFtxYV0sYWg9cmhbcWFdO1pnKHtnbG9iYWw6ITAsZm9yY2VkOmFoIT09TXZ9LHtBcnJheUJ1ZmZlcjpNdn0pLHRoKHFhKTt2YXIgbmg9WHQsb2g9eHIsaWg9bmg/e30udG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4iW29iamVjdCAiK29oKHRoaXMpKyJdIn0sdmg9WHQsdWg9SC5leHBvcnRzLGZoPWloO3ZofHx1aChPYmplY3QucHJvdG90eXBlLCJ0b1N0cmluZyIsZmgse3Vuc2FmZTohMH0pO3ZhciBjZT17ZXhwb3J0czp7fX0sc2g9bnYsWGE9bSx3PWwsRnY9UyxKYT1NLElyPVIsUWE9eHIsbGg9SWUsWmE9YXIscm49SC5leHBvcnRzLGNoPUUuZix5aD1kcixlbj1MZSxVcj10ZSxkaD1PLGp2PUVlLGF0PXcuSW50OEFycmF5LHRuPWF0JiZhdC5wcm90b3R5cGUsTHY9dy5VaW50OENsYW1wZWRBcnJheSxEdj1MdiYmTHYucHJvdG90eXBlLFk9YXQmJmVuKGF0KSxVPXRuJiZlbih0bikscGg9T2JqZWN0LnByb3RvdHlwZSxhbj13LlR5cGVFcnJvcixCdj1kaCgidG9TdHJpbmdUYWciKSxubj1qdigiVFlQRURfQVJSQVlfVEFHIiksb249anYoIlRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SIiksZXI9c2gmJiEhVXImJlFhKHcub3BlcmEpIT09Ik9wZXJhIixVdj0hMSxDLGZyLEdyLHRyPXtJbnQ4QXJyYXk6MSxVaW50OEFycmF5OjEsVWludDhDbGFtcGVkQXJyYXk6MSxJbnQxNkFycmF5OjIsVWludDE2QXJyYXk6MixJbnQzMkFycmF5OjQsVWludDMyQXJyYXk6NCxGbG9hdDMyQXJyYXk6NCxGbG9hdDY0QXJyYXk6OH0sdm49e0JpZ0ludDY0QXJyYXk6OCxCaWdVaW50NjRBcnJheTo4fSwkaD1mdW5jdGlvbihlKXtpZighSmEoZSkpcmV0dXJuITE7dmFyIHQ9UWEoZSk7cmV0dXJuIHQ9PT0iRGF0YVZpZXcifHxJcih0cix0KXx8SXIodm4sdCl9LEd2PWZ1bmN0aW9uKHIpe2lmKCFKYShyKSlyZXR1cm4hMTt2YXIgZT1RYShyKTtyZXR1cm4gSXIodHIsZSl8fElyKHZuLGUpfSxnaD1mdW5jdGlvbihyKXtpZihHdihyKSlyZXR1cm4gcjt0aHJvdyBhbigiVGFyZ2V0IGlzIG5vdCBhIHR5cGVkIGFycmF5Iil9LGhoPWZ1bmN0aW9uKHIpe2lmKEZ2KHIpJiYoIVVyfHx5aChZLHIpKSlyZXR1cm4gcjt0aHJvdyBhbihsaChyKSsiIGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIil9LFRoPWZ1bmN0aW9uKHIsZSx0LGEpe2lmKCEhWGEpe2lmKHQpZm9yKHZhciBuIGluIHRyKXt2YXIgbz13W25dO2lmKG8mJklyKG8ucHJvdG90eXBlLHIpKXRyeXtkZWxldGUgby5wcm90b3R5cGVbcl19Y2F0Y2h7dHJ5e28ucHJvdG90eXBlW3JdPWV9Y2F0Y2h7fX19KCFVW3JdfHx0KSYmcm4oVSxyLHQ/ZTplciYmdG5bcl18fGUsYSl9fSxBaD1mdW5jdGlvbihyLGUsdCl7dmFyIGEsbjtpZighIVhhKXtpZihVcil7aWYodCl7Zm9yKGEgaW4gdHIpaWYobj13W2FdLG4mJklyKG4scikpdHJ5e2RlbGV0ZSBuW3JdfWNhdGNoe319aWYoIVlbcl18fHQpdHJ5e3JldHVybiBybihZLHIsdD9lOmVyJiZZW3JdfHxlKX1jYXRjaHt9ZWxzZSByZXR1cm59Zm9yKGEgaW4gdHIpbj13W2FdLG4mJighbltyXXx8dCkmJnJuKG4scixlKX19O2ZvcihDIGluIHRyKWZyPXdbQ10sR3I9ZnImJmZyLnByb3RvdHlwZSxHcj9aYShHcixvbixmcik6ZXI9ITE7Zm9yKEMgaW4gdm4pZnI9d1tDXSxHcj1mciYmZnIucHJvdG90eXBlLEdyJiZaYShHcixvbixmcik7aWYoKCFlcnx8IUZ2KFkpfHxZPT09RnVuY3Rpb24ucHJvdG90eXBlKSYmKFk9ZnVuY3Rpb24oKXt0aHJvdyBhbigiSW5jb3JyZWN0IGludm9jYXRpb24iKX0sZXIpKWZvcihDIGluIHRyKXdbQ10mJlVyKHdbQ10sWSk7aWYoKCFlcnx8IVV8fFU9PT1waCkmJihVPVkucHJvdG90eXBlLGVyKSlmb3IoQyBpbiB0cil3W0NdJiZVcih3W0NdLnByb3RvdHlwZSxVKTtpZihlciYmZW4oRHYpIT09VSYmVXIoRHYsVSksWGEmJiFJcihVLEJ2KSl7VXY9ITAsY2goVSxCdix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMpP3RoaXNbbm5dOnZvaWQgMH19KTtmb3IoQyBpbiB0cil3W0NdJiZaYSh3W0NdLG5uLEMpfXZhciBoPXtOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTOmVyLFRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SOm9uLFRZUEVEX0FSUkFZX1RBRzpVdiYmbm4sYVR5cGVkQXJyYXk6Z2gsYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjpoaCxleHBvcnRUeXBlZEFycmF5TWV0aG9kOlRoLGV4cG9ydFR5cGVkQXJyYXlTdGF0aWNNZXRob2Q6QWgsaXNWaWV3OiRoLGlzVHlwZWRBcnJheTpHdixUeXBlZEFycmF5OlksVHlwZWRBcnJheVByb3RvdHlwZTpVfSxWdj1sLHVuPVQsT2g9Vm8sYmg9aC5OQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTLFNoPVZ2LkFycmF5QnVmZmVyLEVyPVZ2LkludDhBcnJheSxJaD0hYmh8fCF1bihmdW5jdGlvbigpe0VyKDEpfSl8fCF1bihmdW5jdGlvbigpe25ldyBFcigtMSl9KXx8IU9oKGZ1bmN0aW9uKHIpe25ldyBFcixuZXcgRXIobnVsbCksbmV3IEVyKDEuNSksbmV3IEVyKHIpfSwhMCl8fHVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBFcihuZXcgU2goMiksMSx2b2lkIDApLmxlbmd0aCE9PTF9KSxFaD1NLG1oPU1hdGguZmxvb3IsUmg9TnVtYmVyLmlzSW50ZWdlcnx8ZnVuY3Rpb24oZSl7cmV0dXJuIUVoKGUpJiZpc0Zpbml0ZShlKSYmbWgoZSk9PT1lfSx3aD1sLFBoPVRyLF9oPXdoLlJhbmdlRXJyb3IsQ2g9ZnVuY3Rpb24ocil7dmFyIGU9UGgocik7aWYoZTwwKXRocm93IF9oKCJUaGUgYXJndW1lbnQgY2FuJ3QgYmUgbGVzcyB0aGFuIDAiKTtyZXR1cm4gZX0seGg9bCxOaD1DaCxNaD14aC5SYW5nZUVycm9yLFl2PWZ1bmN0aW9uKHIsZSl7dmFyIHQ9Tmgocik7aWYodCVlKXRocm93IE1oKCJXcm9uZyBvZmZzZXQiKTtyZXR1cm4gdH0sRmg9bCxqaD1OZSxMaD1JZSxEaD1GaC5UeXBlRXJyb3IsS3Y9ZnVuY3Rpb24ocil7aWYoamgocikpcmV0dXJuIHI7dGhyb3cgRGgoTGgocikrIiBpcyBub3QgYSBjb25zdHJ1Y3RvciIpfSxCaD1yYSxVaD14LEdoPUt2LFZoPUcsWWg9RixLaD1qbyxraD1lYSxXaD1Nbyx6aD1oLmFUeXBlZEFycmF5Q29uc3RydWN0b3IsSGg9ZnVuY3Rpb24oZSl7dmFyIHQ9R2godGhpcyksYT1WaChlKSxuPWFyZ3VtZW50cy5sZW5ndGgsbz1uPjE/YXJndW1lbnRzWzFdOnZvaWQgMCx2PW8hPT12b2lkIDAsaT1raChhKSx1LGYscyxwLCQsSTtpZihpJiYhV2goaSkpZm9yKCQ9S2goYSxpKSxJPSQubmV4dCxhPVtdOyEocD1VaChJLCQpKS5kb25lOylhLnB1c2gocC52YWx1ZSk7Zm9yKHYmJm4+MiYmKG89Qmgobyxhcmd1bWVudHNbMl0pKSxmPVloKGEpLHM9bmV3KHpoKHQpKShmKSx1PTA7Zj51O3UrKylzW3VdPXY/byhhW3VdLHUpOmFbdV07cmV0dXJuIHN9LHFoPVMsWGg9TSxrdj10ZSxXdj1mdW5jdGlvbihyLGUsdCl7dmFyIGEsbjtyZXR1cm4ga3YmJnFoKGE9ZS5jb25zdHJ1Y3RvcikmJmEhPT10JiZYaChuPWEucHJvdG90eXBlKSYmbiE9PXQucHJvdG90eXBlJiZrdihyLG4pLHJ9LHp2PXEsSHY9bCxxdj14LEpoPW0sUWg9SWgsbXI9aCxYdj1DdixKdj1vdixaaD13cixWcj1hcixyVD1SaCxlVD1KcixRdj1pdixmbj1Zdixadj1xcix5ZT1SLHRUPXhyLHNuPU0sYVQ9V3IsblQ9ZWUsb1Q9ZHIsbnQ9dGUsaVQ9aHIuZixydT1IaCx2VD1YLmZvckVhY2gsdVQ9TnYsZXU9RSx0dT1ScixhdT1ncixmVD1Xdixsbj1hdS5nZXQsc1Q9YXUuc2V0LGNuPWV1LmYsbFQ9dHUuZixjVD1NYXRoLnJvdW5kLHluPUh2LlJhbmdlRXJyb3IsbnU9WHYuQXJyYXlCdWZmZXIseVQ9bnUucHJvdG90eXBlLGRUPVh2LkRhdGFWaWV3LG90PW1yLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MscFQ9bXIuVFlQRURfQVJSQVlfQ09OU1RSVUNUT1Isb3U9bXIuVFlQRURfQVJSQVlfVEFHLGl1PW1yLlR5cGVkQXJyYXksZGU9bXIuVHlwZWRBcnJheVByb3RvdHlwZSwkVD1tci5hVHlwZWRBcnJheUNvbnN0cnVjdG9yLGRuPW1yLmlzVHlwZWRBcnJheSxpdD0iQllURVNfUEVSX0VMRU1FTlQiLHBuPSJXcm9uZyBsZW5ndGgiLHZ1PWZ1bmN0aW9uKHIsZSl7JFQocik7Zm9yKHZhciB0PTAsYT1lLmxlbmd0aCxuPW5ldyByKGEpO2E+dDspblt0XT1lW3QrK107cmV0dXJuIG59LHZ0PWZ1bmN0aW9uKHIsZSl7Y24ocixlLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbG4odGhpcylbZV19fSl9LHV1PWZ1bmN0aW9uKHIpe3ZhciBlO3JldHVybiBvVCh5VCxyKXx8KGU9dFQocikpPT0iQXJyYXlCdWZmZXIifHxlPT0iU2hhcmVkQXJyYXlCdWZmZXIifSxmdT1mdW5jdGlvbihyLGUpe3JldHVybiBkbihyKSYmIWFUKGUpJiZlIGluIHImJnJUKCtlKSYmZT49MH0sc3U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD1adih0KSxmdShlLHQpP1poKDIsZVt0XSk6bFQoZSx0KX0sbHU9ZnVuY3Rpb24oZSx0LGEpe3JldHVybiB0PVp2KHQpLGZ1KGUsdCkmJnNuKGEpJiZ5ZShhLCJ2YWx1ZSIpJiYheWUoYSwiZ2V0IikmJiF5ZShhLCJzZXQiKSYmIWEuY29uZmlndXJhYmxlJiYoIXllKGEsIndyaXRhYmxlIil8fGEud3JpdGFibGUpJiYoIXllKGEsImVudW1lcmFibGUiKXx8YS5lbnVtZXJhYmxlKT8oZVt0XT1hLnZhbHVlLGUpOmNuKGUsdCxhKX07Smg/KG90fHwodHUuZj1zdSxldS5mPWx1LHZ0KGRlLCJidWZmZXIiKSx2dChkZSwiYnl0ZU9mZnNldCIpLHZ0KGRlLCJieXRlTGVuZ3RoIiksdnQoZGUsImxlbmd0aCIpKSx6dih7dGFyZ2V0OiJPYmplY3QiLHN0YXQ6ITAsZm9yY2VkOiFvdH0se2dldE93blByb3BlcnR5RGVzY3JpcHRvcjpzdSxkZWZpbmVQcm9wZXJ0eTpsdX0pLGNlLmV4cG9ydHM9ZnVuY3Rpb24ocixlLHQpe3ZhciBhPXIubWF0Y2goL1xkKyQvKVswXS84LG49cisodD8iQ2xhbXBlZCI6IiIpKyJBcnJheSIsbz0iZ2V0IityLHY9InNldCIrcixpPUh2W25dLHU9aSxmPXUmJnUucHJvdG90eXBlLHM9e30scD1mdW5jdGlvbih5LGMpe3ZhciBkPWxuKHkpO3JldHVybiBkLnZpZXdbb10oYyphK2QuYnl0ZU9mZnNldCwhMCl9LCQ9ZnVuY3Rpb24oeSxjLGQpe3ZhciBBPWxuKHkpO3QmJihkPShkPWNUKGQpKTwwPzA6ZD4yNTU/MjU1OmQmMjU1KSxBLnZpZXdbdl0oYyphK0EuYnl0ZU9mZnNldCxkLCEwKX0sST1mdW5jdGlvbih5LGMpe2NuKHksYyx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpcyxjKX0sc2V0OmZ1bmN0aW9uKGQpe3JldHVybiAkKHRoaXMsYyxkKX0sZW51bWVyYWJsZTohMH0pfTtvdD9RaCYmKHU9ZShmdW5jdGlvbih5LGMsZCxBKXtyZXR1cm4gSnYoeSxmKSxmVChmdW5jdGlvbigpe3JldHVybiBzbihjKT91dShjKT9BIT09dm9pZCAwP25ldyBpKGMsZm4oZCxhKSxBKTpkIT09dm9pZCAwP25ldyBpKGMsZm4oZCxhKSk6bmV3IGkoYyk6ZG4oYyk/dnUodSxjKTpxdihydSx1LGMpOm5ldyBpKFF2KGMpKX0oKSx5LHUpfSksbnQmJm50KHUsaXUpLHZUKGlUKGkpLGZ1bmN0aW9uKHkpe3kgaW4gdXx8VnIodSx5LGlbeV0pfSksdS5wcm90b3R5cGU9Zik6KHU9ZShmdW5jdGlvbih5LGMsZCxBKXtKdih5LGYpO3ZhciBQPTAsVz0wLGxyLGNyLCRlO2lmKCFzbihjKSkkZT1RdihjKSxjcj0kZSphLGxyPW5ldyBudShjcik7ZWxzZSBpZih1dShjKSl7bHI9YyxXPWZuKGQsYSk7dmFyIE5uPWMuYnl0ZUxlbmd0aDtpZihBPT09dm9pZCAwKXtpZihObiVhfHwoY3I9Tm4tVyxjcjwwKSl0aHJvdyB5bihwbil9ZWxzZSBpZihjcj1lVChBKSphLGNyK1c+Tm4pdGhyb3cgeW4ocG4pOyRlPWNyL2F9ZWxzZSByZXR1cm4gZG4oYyk/dnUodSxjKTpxdihydSx1LGMpO2ZvcihzVCh5LHtidWZmZXI6bHIsYnl0ZU9mZnNldDpXLGJ5dGVMZW5ndGg6Y3IsbGVuZ3RoOiRlLHZpZXc6bmV3IGRUKGxyKX0pO1A8JGU7KUkoeSxQKyspfSksbnQmJm50KHUsaXUpLGY9dS5wcm90b3R5cGU9blQoZGUpKSxmLmNvbnN0cnVjdG9yIT09dSYmVnIoZiwiY29uc3RydWN0b3IiLHUpLFZyKGYscFQsdSksb3UmJlZyKGYsb3Usbiksc1tuXT11LHp2KHtnbG9iYWw6ITAsZm9yY2VkOnUhPWksc2hhbTohb3R9LHMpLGl0IGluIHV8fFZyKHUsaXQsYSksaXQgaW4gZnx8VnIoZixpdCxhKSx1VChuKX0pOmNlLmV4cG9ydHM9ZnVuY3Rpb24oKXt9O3ZhciBnVD1jZS5leHBvcnRzO2dUKCJGbG9hdDMyIixmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCxhLG4pe3JldHVybiByKHRoaXMsdCxhLG4pfX0pO3ZhciBoVD1HLCRuPUNyLFRUPUYsQVQ9TWF0aC5taW4sT1Q9W10uY29weVdpdGhpbnx8ZnVuY3Rpb24oZSx0KXt2YXIgYT1oVCh0aGlzKSxuPVRUKGEpLG89JG4oZSxuKSx2PSRuKHQsbiksaT1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCx1PUFUKChpPT09dm9pZCAwP246JG4oaSxuKSktdixuLW8pLGY9MTtmb3IodjxvJiZvPHYrdSYmKGY9LTEsdis9dS0xLG8rPXUtMSk7dS0tID4wOyl2IGluIGE/YVtvXT1hW3ZdOmRlbGV0ZSBhW29dLG8rPWYsdis9ZjtyZXR1cm4gYX0sYlQ9ZyxjdT1oLFNUPU9ULElUPWJUKFNUKSxFVD1jdS5hVHlwZWRBcnJheSxtVD1jdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO21UKCJjb3B5V2l0aGluIixmdW5jdGlvbihlLHQpe3JldHVybiBJVChFVCh0aGlzKSxlLHQsYXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDApfSk7dmFyIHl1PWgsUlQ9WC5ldmVyeSx3VD15dS5hVHlwZWRBcnJheSxQVD15dS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1BUKCJldmVyeSIsZnVuY3Rpb24oZSl7cmV0dXJuIFJUKHdUKHRoaXMpLGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfSk7dmFyIGR1PWgsX1Q9eCxDVD11dix4VD1kdS5hVHlwZWRBcnJheSxOVD1kdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO05UKCJmaWxsIixmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoO3JldHVybiBfVChDVCx4VCh0aGlzKSxlLHQ+MT9hcmd1bWVudHNbMV06dm9pZCAwLHQ+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0pO3ZhciBNVD1GLEZUPWZ1bmN0aW9uKHIsZSl7Zm9yKHZhciB0PTAsYT1NVChlKSxuPW5ldyByKGEpO2E+dDspblt0XT1lW3QrK107cmV0dXJuIG59LHB1PUQsalQ9S3YsTFQ9TyxEVD1MVCgic3BlY2llcyIpLEJUPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9cHUocikuY29uc3RydWN0b3IsYTtyZXR1cm4gdD09PXZvaWQgMHx8KGE9cHUodClbRFRdKT09bnVsbD9lOmpUKGEpfSwkdT1oLFVUPUJULEdUPSR1LlRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SLFZUPSR1LmFUeXBlZEFycmF5Q29uc3RydWN0b3IsdXQ9ZnVuY3Rpb24ocil7cmV0dXJuIFZUKFVUKHIscltHVF0pKX0sWVQ9RlQsS1Q9dXQsa1Q9ZnVuY3Rpb24ocixlKXtyZXR1cm4gWVQoS1QociksZSl9LGd1PWgsV1Q9WC5maWx0ZXIselQ9a1QsSFQ9Z3UuYVR5cGVkQXJyYXkscVQ9Z3UuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtxVCgiZmlsdGVyIixmdW5jdGlvbihlKXt2YXIgdD1XVChIVCh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKTtyZXR1cm4gelQodGhpcyx0KX0pO3ZhciBodT1oLFhUPVguZmluZCxKVD1odS5hVHlwZWRBcnJheSxRVD1odS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1FUKCJmaW5kIixmdW5jdGlvbihlKXtyZXR1cm4gWFQoSlQodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgVHU9aCxaVD1YLmZpbmRJbmRleCxyQT1UdS5hVHlwZWRBcnJheSxlQT1UdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO2VBKCJmaW5kSW5kZXgiLGZ1bmN0aW9uKGUpe3JldHVybiBaVChyQSh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBBdT1oLHRBPVguZm9yRWFjaCxhQT1BdS5hVHlwZWRBcnJheSxuQT1BdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO25BKCJmb3JFYWNoIixmdW5jdGlvbihlKXt0QShhQSh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBPdT1oLG9BPUt0LmluY2x1ZGVzLGlBPU91LmFUeXBlZEFycmF5LHZBPU91LmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7dkEoImluY2x1ZGVzIixmdW5jdGlvbihlKXtyZXR1cm4gb0EoaUEodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgYnU9aCx1QT1LdC5pbmRleE9mLGZBPWJ1LmFUeXBlZEFycmF5LHNBPWJ1LmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7c0EoImluZGV4T2YiLGZ1bmN0aW9uKGUpe3JldHVybiB1QShmQSh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBsQT1sLGNBPVQsZ249ZyxTdT1oLGhuPUppLHlBPU8sVG49eUEoIml0ZXJhdG9yIiksSXU9bEEuVWludDhBcnJheSxkQT1nbihobi52YWx1ZXMpLHBBPWduKGhuLmtleXMpLCRBPWduKGhuLmVudHJpZXMpLEFuPVN1LmFUeXBlZEFycmF5LGZ0PVN1LmV4cG9ydFR5cGVkQXJyYXlNZXRob2QsWXI9SXUmJkl1LnByb3RvdHlwZSxzdD0hY0EoZnVuY3Rpb24oKXtZcltUbl0uY2FsbChbMV0pfSksRXU9ISFZciYmWXIudmFsdWVzJiZZcltUbl09PT1Zci52YWx1ZXMmJllyLnZhbHVlcy5uYW1lPT09InZhbHVlcyIsbXU9ZnVuY3Rpb24oKXtyZXR1cm4gZEEoQW4odGhpcykpfTtmdCgiZW50cmllcyIsZnVuY3Rpb24oKXtyZXR1cm4gJEEoQW4odGhpcykpfSxzdCksZnQoImtleXMiLGZ1bmN0aW9uKCl7cmV0dXJuIHBBKEFuKHRoaXMpKX0sc3QpLGZ0KCJ2YWx1ZXMiLG11LHN0fHwhRXUse25hbWU6InZhbHVlcyJ9KSxmdChUbixtdSxzdHx8IUV1LHtuYW1lOiJ2YWx1ZXMifSk7dmFyIFJ1PWgsZ0E9ZyxoQT1SdS5hVHlwZWRBcnJheSxUQT1SdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kLEFBPWdBKFtdLmpvaW4pO1RBKCJqb2luIixmdW5jdGlvbihlKXtyZXR1cm4gQUEoaEEodGhpcyksZSl9KTt2YXIgT0E9VCxiQT1mdW5jdGlvbihyLGUpe3ZhciB0PVtdW3JdO3JldHVybiEhdCYmT0EoZnVuY3Rpb24oKXt0LmNhbGwobnVsbCxlfHxmdW5jdGlvbigpe3JldHVybiAxfSwxKX0pfSxTQT1WZSxJQT16LEVBPVRyLG1BPUYsUkE9YkEsd0E9TWF0aC5taW4sT249W10ubGFzdEluZGV4T2Ysd3U9ISFPbiYmMS9bMV0ubGFzdEluZGV4T2YoMSwtMCk8MCxQQT1SQSgibGFzdEluZGV4T2YiKSxfQT13dXx8IVBBLENBPV9BP2Z1bmN0aW9uKGUpe2lmKHd1KXJldHVybiBTQShPbix0aGlzLGFyZ3VtZW50cyl8fDA7dmFyIHQ9SUEodGhpcyksYT1tQSh0KSxuPWEtMTtmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYobj13QShuLEVBKGFyZ3VtZW50c1sxXSkpKSxuPDAmJihuPWErbik7bj49MDtuLS0paWYobiBpbiB0JiZ0W25dPT09ZSlyZXR1cm4gbnx8MDtyZXR1cm4tMX06T24sUHU9aCx4QT1WZSxOQT1DQSxNQT1QdS5hVHlwZWRBcnJheSxGQT1QdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO0ZBKCJsYXN0SW5kZXhPZiIsZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4geEEoTkEsTUEodGhpcyksdD4xP1tlLGFyZ3VtZW50c1sxXV06W2VdKX0pO3ZhciBfdT1oLGpBPVgubWFwLExBPXV0LERBPV91LmFUeXBlZEFycmF5LEJBPV91LmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7QkEoIm1hcCIsZnVuY3Rpb24oZSl7cmV0dXJuIGpBKERBKHRoaXMpLGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsZnVuY3Rpb24odCxhKXtyZXR1cm4gbmV3KExBKHQpKShhKX0pfSk7dmFyIFVBPWwsR0E9enIsVkE9RyxZQT1UdCxLQT1GLGtBPVVBLlR5cGVFcnJvcixDdT1mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oZSx0LGEsbil7R0EodCk7dmFyIG89VkEoZSksdj1ZQShvKSxpPUtBKG8pLHU9cj9pLTE6MCxmPXI/LTE6MTtpZihhPDIpZm9yKDs7KXtpZih1IGluIHYpe249dlt1XSx1Kz1mO2JyZWFrfWlmKHUrPWYscj91PDA6aTw9dSl0aHJvdyBrQSgiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSIpfWZvcig7cj91Pj0wOmk+dTt1Kz1mKXUgaW4gdiYmKG49dChuLHZbdV0sdSxvKSk7cmV0dXJuIG59fSx4dT17bGVmdDpDdSghMSkscmlnaHQ6Q3UoITApfSxOdT1oLFdBPXh1LmxlZnQsekE9TnUuYVR5cGVkQXJyYXksSEE9TnUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtIQSgicmVkdWNlIixmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoO3JldHVybiBXQSh6QSh0aGlzKSxlLHQsdD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfSk7dmFyIE11PWgscUE9eHUucmlnaHQsWEE9TXUuYVR5cGVkQXJyYXksSkE9TXUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtKQSgicmVkdWNlUmlnaHQiLGZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIHFBKFhBKHRoaXMpLGUsdCx0PjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgRnU9aCxRQT1GdS5hVHlwZWRBcnJheSxaQT1GdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kLHJPPU1hdGguZmxvb3I7WkEoInJldmVyc2UiLGZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD1RQShlKS5sZW5ndGgsYT1yTyh0LzIpLG49MCxvO248YTspbz1lW25dLGVbbisrXT1lWy0tdF0sZVt0XT1vO3JldHVybiBlfSk7dmFyIGp1PWwsTHU9eCxibj1oLGVPPUYsdE89WXYsYU89RyxEdT1ULG5PPWp1LlJhbmdlRXJyb3IsU249anUuSW50OEFycmF5LEJ1PVNuJiZTbi5wcm90b3R5cGUsVXU9QnUmJkJ1LnNldCxvTz1ibi5hVHlwZWRBcnJheSxpTz1ibi5leHBvcnRUeXBlZEFycmF5TWV0aG9kLEluPSFEdShmdW5jdGlvbigpe3ZhciByPW5ldyBVaW50OENsYW1wZWRBcnJheSgyKTtyZXR1cm4gTHUoVXUscix7bGVuZ3RoOjEsMDozfSwxKSxyWzFdIT09M30pLHZPPUluJiZibi5OQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTJiZEdShmdW5jdGlvbigpe3ZhciByPW5ldyBTbigyKTtyZXR1cm4gci5zZXQoMSksci5zZXQoIjIiLDEpLHJbMF0hPT0wfHxyWzFdIT09Mn0pO2lPKCJzZXQiLGZ1bmN0aW9uKGUpe29PKHRoaXMpO3ZhciB0PXRPKGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDEpLGE9YU8oZSk7aWYoSW4pcmV0dXJuIEx1KFV1LHRoaXMsYSx0KTt2YXIgbj10aGlzLmxlbmd0aCxvPWVPKGEpLHY9MDtpZihvK3Q+bil0aHJvdyBuTygiV3JvbmcgbGVuZ3RoIik7Zm9yKDt2PG87KXRoaXNbdCt2XT1hW3YrK119LCFJbnx8dk8pO3ZhciBHdT1oLHVPPXV0LGZPPVQsc089TWUsbE89R3UuYVR5cGVkQXJyYXksY089R3UuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCx5Tz1mTyhmdW5jdGlvbigpe25ldyBJbnQ4QXJyYXkoMSkuc2xpY2UoKX0pO2NPKCJzbGljZSIsZnVuY3Rpb24oZSx0KXtmb3IodmFyIGE9c08obE8odGhpcyksZSx0KSxuPXVPKHRoaXMpLG89MCx2PWEubGVuZ3RoLGk9bmV3IG4odik7dj5vOylpW29dPWFbbysrXTtyZXR1cm4gaX0seU8pO3ZhciBWdT1oLGRPPVguc29tZSxwTz1WdS5hVHlwZWRBcnJheSwkTz1WdS5leHBvcnRUeXBlZEFycmF5TWV0aG9kOyRPKCJzb21lIixmdW5jdGlvbihlKXtyZXR1cm4gZE8ocE8odGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgWXU9VGEsZ089TWF0aC5mbG9vcixFbj1mdW5jdGlvbihyLGUpe3ZhciB0PXIubGVuZ3RoLGE9Z08odC8yKTtyZXR1cm4gdDw4P2hPKHIsZSk6VE8ocixFbihZdShyLDAsYSksZSksRW4oWXUocixhKSxlKSxlKX0saE89ZnVuY3Rpb24ocixlKXtmb3IodmFyIHQ9ci5sZW5ndGgsYT0xLG4sbzthPHQ7KXtmb3Iobz1hLG49clthXTtvJiZlKHJbby0xXSxuKT4wOylyW29dPXJbLS1vXTtvIT09YSsrJiYocltvXT1uKX1yZXR1cm4gcn0sVE89ZnVuY3Rpb24ocixlLHQsYSl7Zm9yKHZhciBuPWUubGVuZ3RoLG89dC5sZW5ndGgsdj0wLGk9MDt2PG58fGk8bzspclt2K2ldPXY8biYmaTxvP2EoZVt2XSx0W2ldKTw9MD9lW3YrK106dFtpKytdOnY8bj9lW3YrK106dFtpKytdO3JldHVybiByfSxBTz1FbixPTz1iZSxLdT1PTy5tYXRjaCgvZmlyZWZveFwvKFxkKykvaSksYk89ISFLdSYmK0t1WzFdLFNPPWJlLElPPS9NU0lFfFRyaWRlbnQvLnRlc3QoU08pLEVPPWJlLGt1PUVPLm1hdGNoKC9BcHBsZVdlYktpdFwvKFxkKylcLi8pLG1PPSEha3UmJitrdVsxXSxXdT1sLFJPPWcsbW49VCx3Tz16cixQTz1BTyx6dT1oLEh1PWJPLF9PPUlPLHF1PWJ0LFh1PW1PLENPPVd1LkFycmF5LHhPPXp1LmFUeXBlZEFycmF5LE5PPXp1LmV4cG9ydFR5cGVkQXJyYXlNZXRob2QscGU9V3UuVWludDE2QXJyYXksS3I9cGUmJlJPKHBlLnByb3RvdHlwZS5zb3J0KSxNTz0hIUtyJiYhKG1uKGZ1bmN0aW9uKCl7S3IobmV3IHBlKDIpLG51bGwpfSkmJm1uKGZ1bmN0aW9uKCl7S3IobmV3IHBlKDIpLHt9KX0pKSxKdT0hIUtyJiYhbW4oZnVuY3Rpb24oKXtpZihxdSlyZXR1cm4gcXU8NzQ7aWYoSHUpcmV0dXJuIEh1PDY3O2lmKF9PKXJldHVybiEwO2lmKFh1KXJldHVybiBYdTw2MDI7dmFyIHI9bmV3IHBlKDUxNiksZT1DTyg1MTYpLHQsYTtmb3IodD0wO3Q8NTE2O3QrKylhPXQlNCxyW3RdPTUxNS10LGVbdF09dC0yKmErMztmb3IoS3IocixmdW5jdGlvbihuLG8pe3JldHVybihuLzR8MCktKG8vNHwwKX0pLHQ9MDt0PDUxNjt0KyspaWYoclt0XSE9PWVbdF0pcmV0dXJuITB9KSxGTz1mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gciE9PXZvaWQgMD8rcihlLHQpfHwwOnQhPT10Py0xOmUhPT1lPzE6ZT09PTAmJnQ9PT0wPzEvZT4wJiYxL3Q8MD8xOi0xOmU+dH19O05PKCJzb3J0IixmdW5jdGlvbihlKXtyZXR1cm4gZSE9PXZvaWQgMCYmd08oZSksSnU/S3IodGhpcyxlKTpQTyh4Tyh0aGlzKSxGTyhlKSl9LCFKdXx8TU8pO3ZhciBRdT1oLGpPPUpyLFp1PUNyLExPPXV0LERPPVF1LmFUeXBlZEFycmF5LEJPPVF1LmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7Qk8oInN1YmFycmF5IixmdW5jdGlvbihlLHQpe3ZhciBhPURPKHRoaXMpLG49YS5sZW5ndGgsbz1adShlLG4pLHY9TE8oYSk7cmV0dXJuIG5ldyB2KGEuYnVmZmVyLGEuYnl0ZU9mZnNldCtvKmEuQllURVNfUEVSX0VMRU1FTlQsak8oKHQ9PT12b2lkIDA/bjpadSh0LG4pKS1vKSl9KTt2YXIgVU89bCxHTz1WZSxyZj1oLFJuPVQsZWY9TWUsbHQ9VU8uSW50OEFycmF5LHRmPXJmLmFUeXBlZEFycmF5LFZPPXJmLmV4cG9ydFR5cGVkQXJyYXlNZXRob2QsYWY9W10udG9Mb2NhbGVTdHJpbmcsWU89ISFsdCYmUm4oZnVuY3Rpb24oKXthZi5jYWxsKG5ldyBsdCgxKSl9KSxLTz1SbihmdW5jdGlvbigpe3JldHVyblsxLDJdLnRvTG9jYWxlU3RyaW5nKCkhPW5ldyBsdChbMSwyXSkudG9Mb2NhbGVTdHJpbmcoKX0pfHwhUm4oZnVuY3Rpb24oKXtsdC5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcuY2FsbChbMSwyXSl9KTtWTygidG9Mb2NhbGVTdHJpbmciLGZ1bmN0aW9uKCl7cmV0dXJuIEdPKGFmLFlPP2VmKHRmKHRoaXMpKTp0Zih0aGlzKSxlZihhcmd1bWVudHMpKX0sS08pO3ZhciBrTz1oLmV4cG9ydFR5cGVkQXJyYXlNZXRob2QsV089VCx6Tz1sLEhPPWcsbmY9ek8uVWludDhBcnJheSxxTz1uZiYmbmYucHJvdG90eXBlfHx7fSxjdD1bXS50b1N0cmluZyxYTz1ITyhbXS5qb2luKTtXTyhmdW5jdGlvbigpe2N0LmNhbGwoe30pfSkmJihjdD1mdW5jdGlvbigpe3JldHVybiBYTyh0aGlzKX0pO3ZhciBKTz1xTy50b1N0cmluZyE9Y3Q7a08oInRvU3RyaW5nIixjdCxKTyk7dmFyIFFPPWNlLmV4cG9ydHM7UU8oIlVpbnQ4IixmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCxhLG4pe3JldHVybiByKHRoaXMsdCxhLG4pfX0pO3ZhciBaTz1NYXRoLnNpZ258fGZ1bmN0aW9uKGUpe3JldHVybihlPStlKT09MHx8ZSE9ZT9lOmU8MD8tMToxfSxyYj1xLGViPVpPO3JiKHt0YXJnZXQ6Ik1hdGgiLHN0YXQ6ITB9LHtzaWduOmVifSk7dmFyIHRiPWcsYWI9dGIoMSAudmFsdWVPZiksbmI9YAkKXHZcZlxyIFx4QTBcdTE2ODBcdTIwMDBcdTIwMDFcdTIwMDJcdTIwMDNcdTIwMDRcdTIwMDVcdTIwMDZcdTIwMDdcdTIwMDhcdTIwMDlcdTIwMEFcdTIwMkZcdTIwNUZcdTMwMDBcdTIwMjhcdTIwMjlcdUZFRkZgLG9iPWcsaWI9T2UsdmI9TnIsdWI9bmIsb2Y9b2IoIiIucmVwbGFjZSkseXQ9IlsiK3ViKyJdIixmYj1SZWdFeHAoIl4iK3l0K3l0KyIqIiksc2I9UmVnRXhwKHl0K3l0KyIqJCIpLHduPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD12YihpYihlKSk7cmV0dXJuIHImMSYmKHQ9b2YodCxmYiwiIikpLHImMiYmKHQ9b2YodCxzYiwiIikpLHR9fSxsYj17c3RhcnQ6d24oMSksZW5kOnduKDIpLHRyaW06d24oMyl9LGNiPW0sUG49bCx2Zj1nLHliPUlvLGRiPUguZXhwb3J0cyx1Zj1SLHBiPVd2LCRiPWRyLGdiPVdyLGZmPXRvLGhiPVQsVGI9aHIuZixBYj1Sci5mLE9iPUUuZixiYj1hYixTYj1sYi50cmltLF9uPSJOdW1iZXIiLHNyPVBuW19uXSxDbj1zci5wcm90b3R5cGUsSWI9UG4uVHlwZUVycm9yLEViPXZmKCIiLnNsaWNlKSxkdD12ZigiIi5jaGFyQ29kZUF0KSxtYj1mdW5jdGlvbihyKXt2YXIgZT1mZihyLCJudW1iZXIiKTtyZXR1cm4gdHlwZW9mIGU9PSJiaWdpbnQiP2U6UmIoZSl9LFJiPWZ1bmN0aW9uKHIpe3ZhciBlPWZmKHIsIm51bWJlciIpLHQsYSxuLG8sdixpLHUsZjtpZihnYihlKSl0aHJvdyBJYigiQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXIiKTtpZih0eXBlb2YgZT09InN0cmluZyImJmUubGVuZ3RoPjIpe2lmKGU9U2IoZSksdD1kdChlLDApLHQ9PT00M3x8dD09PTQ1KXtpZihhPWR0KGUsMiksYT09PTg4fHxhPT09MTIwKXJldHVybiBOYU59ZWxzZSBpZih0PT09NDgpe3N3aXRjaChkdChlLDEpKXtjYXNlIDY2OmNhc2UgOTg6bj0yLG89NDk7YnJlYWs7Y2FzZSA3OTpjYXNlIDExMTpuPTgsbz01NTticmVhaztkZWZhdWx0OnJldHVybitlfWZvcih2PUViKGUsMiksaT12Lmxlbmd0aCx1PTA7dTxpO3UrKylpZihmPWR0KHYsdSksZjw0OHx8Zj5vKXJldHVybiBOYU47cmV0dXJuIHBhcnNlSW50KHYsbil9fXJldHVybitlfTtpZih5Yihfbiwhc3IoIiAwbzEiKXx8IXNyKCIwYjEiKXx8c3IoIisweDEiKSkpe2Zvcih2YXIga3I9ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDwxPzA6c3IobWIoZSkpLGE9dGhpcztyZXR1cm4gJGIoQ24sYSkmJmhiKGZ1bmN0aW9uKCl7YmIoYSl9KT9wYihPYmplY3QodCksYSxrcik6dH0sc2Y9Y2I/VGIoc3IpOiJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixwYXJzZUZsb2F0LHBhcnNlSW50LGZyb21TdHJpbmcscmFuZ2UiLnNwbGl0KCIsIikseG49MCxwdDtzZi5sZW5ndGg+eG47eG4rKyl1ZihzcixwdD1zZlt4bl0pJiYhdWYoa3IscHQpJiZPYihrcixwdCxBYihzcixwdCkpO2tyLnByb3RvdHlwZT1DbixDbi5jb25zdHJ1Y3Rvcj1rcixkYihQbixfbixrcil9dmFyIHdiPWNlLmV4cG9ydHM7d2IoIlVpbnQzMiIsZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHQsYSxuKXtyZXR1cm4gcih0aGlzLHQsYSxuKX19KTt2YXIgUGI9bSxfYj1DZS5FWElTVFMsbGY9ZyxDYj1FLmYsY2Y9RnVuY3Rpb24ucHJvdG90eXBlLHhiPWxmKGNmLnRvU3RyaW5nKSx5Zj0vZnVuY3Rpb25cYig/OlxzfFwvXCpbXFNcc10qP1wqXC98XC9cL1teXG5ccl0qW1xuXHJdKykqKFteXHMoL10qKS8sTmI9bGYoeWYuZXhlYyksTWI9Im5hbWUiO1BiJiYhX2ImJkNiKGNmLE1iLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBOYih5Zix4Yih0aGlzKSlbMV19Y2F0Y2h7cmV0dXJuIiJ9fX0pO3ZhciBGYj1mdW5jdGlvbihyKXtyZXR1cm4gcltyLlBPU0lUSU9OX0NBUlRFU0lBTj0wXT0iUE9TSVRJT05fQ0FSVEVTSUFOIixyW3IuQ09MT1JfUEFDS0VEPTFdPSJDT0xPUl9QQUNLRUQiLHJbci5DT0xPUl9GTE9BVFNfMT0yXT0iQ09MT1JfRkxPQVRTXzEiLHJbci5DT0xPUl9GTE9BVFNfMjU1PTNdPSJDT0xPUl9GTE9BVFNfMjU1IixyW3IuTk9STUFMX0ZMT0FUUz00XT0iTk9STUFMX0ZMT0FUUyIscltyLkZJTExFUj01XT0iRklMTEVSIixyW3IuSU5URU5TSVRZPTZdPSJJTlRFTlNJVFkiLHJbci5DTEFTU0lGSUNBVElPTj03XT0iQ0xBU1NJRklDQVRJT04iLHJbci5OT1JNQUxfU1BIRVJFTUFQUEVEPThdPSJOT1JNQUxfU1BIRVJFTUFQUEVEIixyW3IuTk9STUFMX09DVDE2PTldPSJOT1JNQUxfT0NUMTYiLHJbci5OT1JNQUw9MTBdPSJOT1JNQUwiLHJ9KEZifHx7fSksSz17REFUQV9UWVBFX0RPVUJMRTp7b3JkaW5hbDowLHNpemU6OH0sREFUQV9UWVBFX0ZMT0FUOntvcmRpbmFsOjEsc2l6ZTo0fSxEQVRBX1RZUEVfSU5UODp7b3JkaW5hbDoyLHNpemU6MX0sREFUQV9UWVBFX1VJTlQ4OntvcmRpbmFsOjMsc2l6ZToxfSxEQVRBX1RZUEVfSU5UMTY6e29yZGluYWw6NCxzaXplOjJ9LERBVEFfVFlQRV9VSU5UMTY6e29yZGluYWw6NSxzaXplOjJ9LERBVEFfVFlQRV9JTlQzMjp7b3JkaW5hbDo2LHNpemU6NH0sREFUQV9UWVBFX1VJTlQzMjp7b3JkaW5hbDo3LHNpemU6NH0sREFUQV9UWVBFX0lOVDY0OntvcmRpbmFsOjgsc2l6ZTo4fSxEQVRBX1RZUEVfVUlOVDY0OntvcmRpbmFsOjksc2l6ZTo4fX07ZnVuY3Rpb24gayhyLGUsdCl7cmV0dXJue25hbWU6cix0eXBlOmUsbnVtRWxlbWVudHM6dCxieXRlU2l6ZTp0KmUuc2l6ZX19dmFyIGRmPWsoMSxLLkRBVEFfVFlQRV9JTlQ4LDQpO2soMCxLLkRBVEFfVFlQRV9GTE9BVCwzKSxrKDEsSy5EQVRBX1RZUEVfSU5UOCwzKSxrKDQsSy5EQVRBX1RZUEVfRkxPQVQsMyksayg1LEsuREFUQV9UWVBFX1VJTlQ4LDEpLGsoNixLLkRBVEFfVFlQRV9VSU5UMTYsMSksayg3LEsuREFUQV9UWVBFX1VJTlQ4LDEpLGsoOCxLLkRBVEFfVFlQRV9VSU5UOCwyKSxrKDksSy5EQVRBX1RZUEVfVUlOVDgsMiksaygxMCxLLkRBVEFfVFlQRV9GTE9BVCwzKX0pKCk7Cgo=",null,!1),Vc("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyICRhPXR5cGVvZiBnbG9iYWxUaGlzPCJ1Ij9nbG9iYWxUaGlzOnR5cGVvZiB3aW5kb3c8InUiP3dpbmRvdzp0eXBlb2YgZ2xvYmFsPCJ1Ij9nbG9iYWw6dHlwZW9mIHNlbGY8InUiP3NlbGY6e30sS3I9ZnVuY3Rpb24ocil7cmV0dXJuIHImJnIuTWF0aD09TWF0aCYmcn0sbD1Lcih0eXBlb2YgZ2xvYmFsVGhpcz09Im9iamVjdCImJmdsb2JhbFRoaXMpfHxLcih0eXBlb2Ygd2luZG93PT0ib2JqZWN0IiYmd2luZG93KXx8S3IodHlwZW9mIHNlbGY9PSJvYmplY3QiJiZzZWxmKXx8S3IodHlwZW9mICRhPT0ib2JqZWN0IiYmJGEpfHxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpfHxGdW5jdGlvbigicmV0dXJuIHRoaXMiKSgpLHhlPXtleHBvcnRzOnt9fSxnYT1sLHl2PU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxOZT1mdW5jdGlvbihyLGUpe3RyeXt5dihnYSxyLHt2YWx1ZTplLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pfWNhdGNoe2dhW3JdPWV9cmV0dXJuIGV9LHB2PWwsZHY9TmUsaGE9Il9fY29yZS1qc19zaGFyZWRfXyIsJHY9cHZbaGFdfHxkdihoYSx7fSksRmU9JHYsQWE9RmU7KHhlLmV4cG9ydHM9ZnVuY3Rpb24ocixlKXtyZXR1cm4gQWFbcl18fChBYVtyXT1lIT09dm9pZCAwP2U6e30pfSkoInZlcnNpb25zIixbXSkucHVzaCh7dmVyc2lvbjoiMy4yMS4xIixtb2RlOiJnbG9iYWwiLGNvcHlyaWdodDoiXHhBOSAyMDE0LTIwMjIgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSkiLGxpY2Vuc2U6Imh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMjEuMS9MSUNFTlNFIixzb3VyY2U6Imh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzIn0pO3ZhciBiPWZ1bmN0aW9uKHIpe3RyeXtyZXR1cm4hIXIoKX1jYXRjaHtyZXR1cm4hMH19LGd2PWIsV3I9IWd2KGZ1bmN0aW9uKCl7dmFyIHI9ZnVuY3Rpb24oKXt9LmJpbmQoKTtyZXR1cm4gdHlwZW9mIHIhPSJmdW5jdGlvbiJ8fHIuaGFzT3duUHJvcGVydHkoInByb3RvdHlwZSIpfSksVGE9V3IsYmE9RnVuY3Rpb24ucHJvdG90eXBlLGh2PWJhLmJpbmQsTWU9YmEuY2FsbCxBdj1UYSYmaHYuYmluZChNZSxNZSksVD1UYT9mdW5jdGlvbihyKXtyZXR1cm4gciYmQXYocil9OmZ1bmN0aW9uKHIpe3JldHVybiByJiZmdW5jdGlvbigpe3JldHVybiBNZS5hcHBseShyLGFyZ3VtZW50cyl9fSxUdj1sLGJ2PVR2LlR5cGVFcnJvcixqZT1mdW5jdGlvbihyKXtpZihyPT1udWxsKXRocm93IGJ2KCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAiK3IpO3JldHVybiByfSxPdj1sLEl2PWplLFN2PU92Lk9iamVjdCx6PWZ1bmN0aW9uKHIpe3JldHVybiBTdihJdihyKSl9LEV2PVQsbXY9eix3dj1Fdih7fS5oYXNPd25Qcm9wZXJ0eSksQz1PYmplY3QuaGFzT3dufHxmdW5jdGlvbihlLHQpe3JldHVybiB3dihtdihlKSx0KX0sUnY9VCxQdj0wLF92PU1hdGgucmFuZG9tKCksQ3Y9UnYoMSAudG9TdHJpbmcpLEJlPWZ1bmN0aW9uKHIpe3JldHVybiJTeW1ib2woIisocj09PXZvaWQgMD8iIjpyKSsiKV8iK0N2KCsrUHYrX3YsMzYpfSxPPWZ1bmN0aW9uKHIpe3JldHVybiB0eXBlb2Ygcj09ImZ1bmN0aW9uIn0sVWU9bCx4dj1PLE52PWZ1bmN0aW9uKHIpe3JldHVybiB4dihyKT9yOnZvaWQgMH0sbHI9ZnVuY3Rpb24ocixlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aDwyP052KFVlW3JdKTpVZVtyXSYmVWVbcl1bZV19LEZ2PWxyLHpyPUZ2KCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiKXx8IiIsT2E9bCxWZT16cixJYT1PYS5wcm9jZXNzLFNhPU9hLkRlbm8sRWE9SWEmJklhLnZlcnNpb25zfHxTYSYmU2EudmVyc2lvbixtYT1FYSYmRWEudjgsTixxcjttYSYmKE49bWEuc3BsaXQoIi4iKSxxcj1OWzBdPjAmJk5bMF08ND8xOisoTlswXStOWzFdKSksIXFyJiZWZSYmKE49VmUubWF0Y2goL0VkZ2VcLyhcZCspLyksKCFOfHxOWzFdPj03NCkmJihOPVZlLm1hdGNoKC9DaHJvbWVcLyhcZCspLyksTiYmKHFyPStOWzFdKSkpO3ZhciB3YT1xcixSYT13YSxNdj1iLFBhPSEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyYmIU12KGZ1bmN0aW9uKCl7dmFyIHI9U3ltYm9sKCk7cmV0dXJuIVN0cmluZyhyKXx8IShPYmplY3QocilpbnN0YW5jZW9mIFN5bWJvbCl8fCFTeW1ib2wuc2hhbSYmUmEmJlJhPDQxfSksanY9UGEsX2E9anYmJiFTeW1ib2wuc2hhbSYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09InN5bWJvbCIsQnY9bCxVdj14ZS5leHBvcnRzLENhPUMsVnY9QmUseGE9UGEsTmE9X2EsY3I9VXYoIndrcyIpLGVyPUJ2LlN5bWJvbCxGYT1lciYmZXIuZm9yLER2PU5hP2VyOmVyJiZlci53aXRob3V0U2V0dGVyfHxWdixJPWZ1bmN0aW9uKHIpe2lmKCFDYShjcixyKXx8ISh4YXx8dHlwZW9mIGNyW3JdPT0ic3RyaW5nIikpe3ZhciBlPSJTeW1ib2wuIityO3hhJiZDYShlcixyKT9jcltyXT1lcltyXTpOYSYmRmE/Y3Jbcl09RmEoZSk6Y3Jbcl09RHYoZSl9cmV0dXJuIGNyW3JdfSxHdj1JLEx2PUd2KCJ0b1N0cmluZ1RhZyIpLE1hPXt9O01hW0x2XT0ieiI7dmFyIERlPVN0cmluZyhNYSk9PT0iW29iamVjdCB6XSIscT17ZXhwb3J0czp7fX0sWXY9YixSPSFZdihmdW5jdGlvbigpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sMSx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSlbMV0hPTd9KSxQPXt9LGt2PU8saj1mdW5jdGlvbihyKXtyZXR1cm4gdHlwZW9mIHI9PSJvYmplY3QiP3IhPT1udWxsOmt2KHIpfSxLdj1sLGphPWosR2U9S3YuZG9jdW1lbnQsV3Y9amEoR2UpJiZqYShHZS5jcmVhdGVFbGVtZW50KSxCYT1mdW5jdGlvbihyKXtyZXR1cm4gV3Y/R2UuY3JlYXRlRWxlbWVudChyKTp7fX0senY9Uixxdj1iLEh2PUJhLFVhPSF6diYmIXF2KGZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIdigiZGl2IiksImEiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hIT03fSksWHY9UixKdj1iLFZhPVh2JiZKdihmdW5jdGlvbigpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24oKXt9LCJwcm90b3R5cGUiLHt2YWx1ZTo0Mix3cml0YWJsZTohMX0pLnByb3RvdHlwZSE9NDJ9KSxEYT1sLFF2PWosWnY9RGEuU3RyaW5nLHJ1PURhLlR5cGVFcnJvcix0cj1mdW5jdGlvbihyKXtpZihRdihyKSlyZXR1cm4gcjt0aHJvdyBydShadihyKSsiIGlzIG5vdCBhbiBvYmplY3QiKX0sZXU9V3IsSHI9RnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsTD1ldT9Ici5iaW5kKEhyKTpmdW5jdGlvbigpe3JldHVybiBIci5hcHBseShIcixhcmd1bWVudHMpfSx0dT1ULHdyPXR1KHt9LmlzUHJvdG90eXBlT2YpLGF1PWwsbnU9bHIsb3U9TyxpdT13cix2dT1fYSx1dT1hdS5PYmplY3QsWHI9dnU/ZnVuY3Rpb24ocil7cmV0dXJuIHR5cGVvZiByPT0ic3ltYm9sIn06ZnVuY3Rpb24ocil7dmFyIGU9bnUoIlN5bWJvbCIpO3JldHVybiBvdShlKSYmaXUoZS5wcm90b3R5cGUsdXUocikpfSxmdT1sLHN1PWZ1LlN0cmluZyxKcj1mdW5jdGlvbihyKXt0cnl7cmV0dXJuIHN1KHIpfWNhdGNoe3JldHVybiJPYmplY3QifX0sbHU9bCxjdT1PLHl1PUpyLHB1PWx1LlR5cGVFcnJvcixScj1mdW5jdGlvbihyKXtpZihjdShyKSlyZXR1cm4gcjt0aHJvdyBwdSh5dShyKSsiIGlzIG5vdCBhIGZ1bmN0aW9uIil9LGR1PVJyLEdhPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9cltlXTtyZXR1cm4gdD09bnVsbD92b2lkIDA6ZHUodCl9LCR1PWwsTGU9TCxZZT1PLGtlPWosZ3U9JHUuVHlwZUVycm9yLGh1PWZ1bmN0aW9uKHIsZSl7dmFyIHQsYTtpZihlPT09InN0cmluZyImJlllKHQ9ci50b1N0cmluZykmJiFrZShhPUxlKHQscikpfHxZZSh0PXIudmFsdWVPZikmJiFrZShhPUxlKHQscikpfHxlIT09InN0cmluZyImJlllKHQ9ci50b1N0cmluZykmJiFrZShhPUxlKHQscikpKXJldHVybiBhO3Rocm93IGd1KCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWUiKX0sQXU9bCxUdT1MLExhPWosWWE9WHIsYnU9R2EsT3U9aHUsSXU9SSxTdT1BdS5UeXBlRXJyb3IsRXU9SXUoInRvUHJpbWl0aXZlIiksa2E9ZnVuY3Rpb24ocixlKXtpZighTGEocil8fFlhKHIpKXJldHVybiByO3ZhciB0PWJ1KHIsRXUpLGE7aWYodCl7aWYoZT09PXZvaWQgMCYmKGU9ImRlZmF1bHQiKSxhPVR1KHQscixlKSwhTGEoYSl8fFlhKGEpKXJldHVybiBhO3Rocm93IFN1KCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWUiKX1yZXR1cm4gZT09PXZvaWQgMCYmKGU9Im51bWJlciIpLE91KHIsZSl9LG11PWthLHd1PVhyLFFyPWZ1bmN0aW9uKHIpe3ZhciBlPW11KHIsInN0cmluZyIpO3JldHVybiB3dShlKT9lOmUrIiJ9LFJ1PWwsUHU9UixfdT1VYSxDdT1WYSxacj10cixLYT1Rcix4dT1SdS5UeXBlRXJyb3IsS2U9T2JqZWN0LmRlZmluZVByb3BlcnR5LE51PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsV2U9ImVudW1lcmFibGUiLHplPSJjb25maWd1cmFibGUiLHFlPSJ3cml0YWJsZSI7UC5mPVB1P0N1P2Z1bmN0aW9uKGUsdCxhKXtpZihacihlKSx0PUthKHQpLFpyKGEpLHR5cGVvZiBlPT0iZnVuY3Rpb24iJiZ0PT09InByb3RvdHlwZSImJiJ2YWx1ZSJpbiBhJiZxZSBpbiBhJiYhYVtxZV0pe3ZhciBuPU51KGUsdCk7biYmbltxZV0mJihlW3RdPWEudmFsdWUsYT17Y29uZmlndXJhYmxlOnplIGluIGE/YVt6ZV06blt6ZV0sZW51bWVyYWJsZTpXZSBpbiBhP2FbV2VdOm5bV2VdLHdyaXRhYmxlOiExfSl9cmV0dXJuIEtlKGUsdCxhKX06S2U6ZnVuY3Rpb24oZSx0LGEpe2lmKFpyKGUpLHQ9S2EodCksWnIoYSksX3UpdHJ5e3JldHVybiBLZShlLHQsYSl9Y2F0Y2h7fWlmKCJnZXQiaW4gYXx8InNldCJpbiBhKXRocm93IHh1KCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCIpO3JldHVybiJ2YWx1ZSJpbiBhJiYoZVt0XT1hLnZhbHVlKSxlfTt2YXIgUHI9ZnVuY3Rpb24ocixlKXtyZXR1cm57ZW51bWVyYWJsZTohKHImMSksY29uZmlndXJhYmxlOiEociYyKSx3cml0YWJsZTohKHImNCksdmFsdWU6ZX19LEZ1PVIsTXU9UCxqdT1Qcixhcj1GdT9mdW5jdGlvbihyLGUsdCl7cmV0dXJuIE11LmYocixlLGp1KDEsdCkpfTpmdW5jdGlvbihyLGUsdCl7cmV0dXJuIHJbZV09dCxyfSxCdT1ULFV1PU8sSGU9RmUsVnU9QnUoRnVuY3Rpb24udG9TdHJpbmcpO1V1KEhlLmluc3BlY3RTb3VyY2UpfHwoSGUuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbihyKXtyZXR1cm4gVnUocil9KTt2YXIgWGU9SGUuaW5zcGVjdFNvdXJjZSxEdT1sLEd1PU8sTHU9WGUsV2E9RHUuV2Vha01hcCxZdT1HdShXYSkmJi9uYXRpdmUgY29kZS8udGVzdChMdShXYSkpLGt1PXhlLmV4cG9ydHMsS3U9QmUsemE9a3UoImtleXMiKSxKZT1mdW5jdGlvbihyKXtyZXR1cm4gemFbcl18fCh6YVtyXT1LdShyKSl9LFFlPXt9LFd1PVl1LHFhPWwsWmU9VCx6dT1qLHF1PWFyLHJ0PUMsZXQ9RmUsSHU9SmUsWHU9UWUsSGE9Ik9iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkIix0dD1xYS5UeXBlRXJyb3IsSnU9cWEuV2Vha01hcCxyZSxfcixlZSxRdT1mdW5jdGlvbihyKXtyZXR1cm4gZWUocik/X3Iocik6cmUocix7fSl9LFp1PWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdDtpZighenUoZSl8fCh0PV9yKGUpKS50eXBlIT09cil0aHJvdyB0dCgiSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAiK3IrIiByZXF1aXJlZCIpO3JldHVybiB0fX07aWYoV3V8fGV0LnN0YXRlKXt2YXIgbnI9ZXQuc3RhdGV8fChldC5zdGF0ZT1uZXcgSnUpLHJmPVplKG5yLmdldCksWGE9WmUobnIuaGFzKSxlZj1aZShuci5zZXQpO3JlPWZ1bmN0aW9uKHIsZSl7aWYoWGEobnIscikpdGhyb3cgbmV3IHR0KEhhKTtyZXR1cm4gZS5mYWNhZGU9cixlZihucixyLGUpLGV9LF9yPWZ1bmN0aW9uKHIpe3JldHVybiByZihucixyKXx8e319LGVlPWZ1bmN0aW9uKHIpe3JldHVybiBYYShucixyKX19ZWxzZXt2YXIgeXI9SHUoInN0YXRlIik7WHVbeXJdPSEwLHJlPWZ1bmN0aW9uKHIsZSl7aWYocnQocix5cikpdGhyb3cgbmV3IHR0KEhhKTtyZXR1cm4gZS5mYWNhZGU9cixxdShyLHlyLGUpLGV9LF9yPWZ1bmN0aW9uKHIpe3JldHVybiBydChyLHlyKT9yW3lyXTp7fX0sZWU9ZnVuY3Rpb24ocil7cmV0dXJuIHJ0KHIseXIpfX12YXIgdGU9e3NldDpyZSxnZXQ6X3IsaGFzOmVlLGVuZm9yY2U6UXUsZ2V0dGVyRm9yOlp1fSxhdD1SLHRmPUMsSmE9RnVuY3Rpb24ucHJvdG90eXBlLGFmPWF0JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLG50PXRmKEphLCJuYW1lIiksbmY9bnQmJmZ1bmN0aW9uKCl7fS5uYW1lPT09InNvbWV0aGluZyIsb2Y9bnQmJighYXR8fGF0JiZhZihKYSwibmFtZSIpLmNvbmZpZ3VyYWJsZSksb3Q9e0VYSVNUUzpudCxQUk9QRVI6bmYsQ09ORklHVVJBQkxFOm9mfSx2Zj1sLFFhPU8sdWY9QyxaYT1hcixmZj1OZSxzZj1YZSxybj10ZSxsZj1vdC5DT05GSUdVUkFCTEUsY2Y9cm4uZ2V0LHlmPXJuLmVuZm9yY2UscGY9U3RyaW5nKFN0cmluZykuc3BsaXQoIlN0cmluZyIpOyhxLmV4cG9ydHM9ZnVuY3Rpb24ocixlLHQsYSl7dmFyIG49YT8hIWEudW5zYWZlOiExLG89YT8hIWEuZW51bWVyYWJsZTohMSxpPWE/ISFhLm5vVGFyZ2V0R2V0OiExLHY9YSYmYS5uYW1lIT09dm9pZCAwP2EubmFtZTplLHU7aWYoUWEodCkmJihTdHJpbmcodikuc2xpY2UoMCw3KT09PSJTeW1ib2woIiYmKHY9IlsiK1N0cmluZyh2KS5yZXBsYWNlKC9eU3ltYm9sXCgoW14pXSopXCkvLCIkMSIpKyJdIiksKCF1Zih0LCJuYW1lIil8fGxmJiZ0Lm5hbWUhPT12KSYmWmEodCwibmFtZSIsdiksdT15Zih0KSx1LnNvdXJjZXx8KHUuc291cmNlPXBmLmpvaW4odHlwZW9mIHY9PSJzdHJpbmciP3Y6IiIpKSkscj09PXZmKXtvP3JbZV09dDpmZihlLHQpO3JldHVybn1lbHNlIG4/IWkmJnJbZV0mJihvPSEwKTpkZWxldGUgcltlXTtvP3JbZV09dDpaYShyLGUsdCl9KShGdW5jdGlvbi5wcm90b3R5cGUsInRvU3RyaW5nIixmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzKSYmY2YodGhpcykuc291cmNlfHxzZih0aGlzKX0pO3ZhciBlbj1ULGRmPWVuKHt9LnRvU3RyaW5nKSwkZj1lbigiIi5zbGljZSksaXQ9ZnVuY3Rpb24ocil7cmV0dXJuICRmKGRmKHIpLDgsLTEpfSxnZj1sLGhmPURlLEFmPU8sYWU9aXQsVGY9SSxiZj1UZigidG9TdHJpbmdUYWciKSxPZj1nZi5PYmplY3QsSWY9YWUoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT09IkFyZ3VtZW50cyIsU2Y9ZnVuY3Rpb24ocixlKXt0cnl7cmV0dXJuIHJbZV19Y2F0Y2h7fX0scHI9aGY/YWU6ZnVuY3Rpb24ocil7dmFyIGUsdCxhO3JldHVybiByPT09dm9pZCAwPyJVbmRlZmluZWQiOnI9PT1udWxsPyJOdWxsIjp0eXBlb2YodD1TZihlPU9mKHIpLGJmKSk9PSJzdHJpbmciP3Q6SWY/YWUoZSk6KGE9YWUoZSkpPT0iT2JqZWN0IiYmQWYoZS5jYWxsZWUpPyJBcmd1bWVudHMiOmF9LEVmPURlLG1mPXByLHdmPUVmP3t9LnRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIltvYmplY3QgIittZih0aGlzKSsiXSJ9LFJmPURlLFBmPXEuZXhwb3J0cyxfZj13ZjtSZnx8UGYoT2JqZWN0LnByb3RvdHlwZSwidG9TdHJpbmciLF9mLHt1bnNhZmU6ITB9KTt2YXIgQ2Y9Yix4Zj1PLE5mPS8jfFwucHJvdG90eXBlXC4vLENyPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9TWZbRmYocildO3JldHVybiB0PT1CZj8hMDp0PT1qZj8hMTp4ZihlKT9DZihlKTohIWV9LEZmPUNyLm5vcm1hbGl6ZT1mdW5jdGlvbihyKXtyZXR1cm4gU3RyaW5nKHIpLnJlcGxhY2UoTmYsIi4iKS50b0xvd2VyQ2FzZSgpfSxNZj1Dci5kYXRhPXt9LGpmPUNyLk5BVElWRT0iTiIsQmY9Q3IuUE9MWUZJTEw9IlAiLHRuPUNyLGFuPWwsVWY9TyxWZj1hbi5TdHJpbmcsRGY9YW4uVHlwZUVycm9yLEdmPWZ1bmN0aW9uKHIpe2lmKHR5cGVvZiByPT0ib2JqZWN0Inx8VWYocikpcmV0dXJuIHI7dGhyb3cgRGYoIkNhbid0IHNldCAiK1ZmKHIpKyIgYXMgYSBwcm90b3R5cGUiKX0sTGY9VCxZZj10cixrZj1HZix4cj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fCgiX19wcm90b19fImlue30/ZnVuY3Rpb24oKXt2YXIgcj0hMSxlPXt9LHQ7dHJ5e3Q9TGYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCJfX3Byb3RvX18iKS5zZXQpLHQoZSxbXSkscj1lIGluc3RhbmNlb2YgQXJyYXl9Y2F0Y2h7fXJldHVybiBmdW5jdGlvbihuLG8pe3JldHVybiBZZihuKSxrZihvKSxyP3QobixvKTpuLl9fcHJvdG9fXz1vLG59fSgpOnZvaWQgMCksS2Y9TyxXZj1qLG5uPXhyLG9uPWZ1bmN0aW9uKHIsZSx0KXt2YXIgYSxuO3JldHVybiBubiYmS2YoYT1lLmNvbnN0cnVjdG9yKSYmYSE9PXQmJldmKG49YS5wcm90b3R5cGUpJiZuIT09dC5wcm90b3R5cGUmJm5uKHIsbikscn0sTnI9e30semY9bCxxZj1ULEhmPWIsWGY9aXQsdnQ9emYuT2JqZWN0LEpmPXFmKCIiLnNwbGl0KSx1dD1IZihmdW5jdGlvbigpe3JldHVybiF2dCgieiIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApfSk/ZnVuY3Rpb24ocil7cmV0dXJuIFhmKHIpPT0iU3RyaW5nIj9KZihyLCIiKTp2dChyKX06dnQsUWY9dXQsWmY9amUsZHI9ZnVuY3Rpb24ocil7cmV0dXJuIFFmKFpmKHIpKX0scnM9TWF0aC5jZWlsLGVzPU1hdGguZmxvb3IsJHI9ZnVuY3Rpb24ocil7dmFyIGU9K3I7cmV0dXJuIGUhPT1lfHxlPT09MD8wOihlPjA/ZXM6cnMpKGUpfSx0cz0kcixhcz1NYXRoLm1heCxucz1NYXRoLm1pbixGcj1mdW5jdGlvbihyLGUpe3ZhciB0PXRzKHIpO3JldHVybiB0PDA/YXModCtlLDApOm5zKHQsZSl9LG9zPSRyLGlzPU1hdGgubWluLE1yPWZ1bmN0aW9uKHIpe3JldHVybiByPjA/aXMob3MociksOTAwNzE5OTI1NDc0MDk5MSk6MH0sdnM9TXIsQj1mdW5jdGlvbihyKXtyZXR1cm4gdnMoci5sZW5ndGgpfSx1cz1kcixmcz1Gcixzcz1CLHZuPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlLHQsYSl7dmFyIG49dXMoZSksbz1zcyhuKSxpPWZzKGEsbyksdjtpZihyJiZ0IT10KXtmb3IoO28+aTspaWYodj1uW2krK10sdiE9dilyZXR1cm4hMH1lbHNlIGZvcig7bz5pO2krKylpZigocnx8aSBpbiBuKSYmbltpXT09PXQpcmV0dXJuIHJ8fGl8fDA7cmV0dXJuIXImJi0xfX0sZnQ9e2luY2x1ZGVzOnZuKCEwKSxpbmRleE9mOnZuKCExKX0sbHM9VCxzdD1DLGNzPWRyLHlzPWZ0LmluZGV4T2YscHM9UWUsdW49bHMoW10ucHVzaCksZm49ZnVuY3Rpb24ocixlKXt2YXIgdD1jcyhyKSxhPTAsbj1bXSxvO2ZvcihvIGluIHQpIXN0KHBzLG8pJiZzdCh0LG8pJiZ1bihuLG8pO2Zvcig7ZS5sZW5ndGg+YTspc3QodCxvPWVbYSsrXSkmJih+eXMobixvKXx8dW4obixvKSk7cmV0dXJuIG59LGx0PVsiY29uc3RydWN0b3IiLCJoYXNPd25Qcm9wZXJ0eSIsImlzUHJvdG90eXBlT2YiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvTG9jYWxlU3RyaW5nIiwidG9TdHJpbmciLCJ2YWx1ZU9mIl0sZHM9Zm4sJHM9bHQsZ3M9JHMuY29uY2F0KCJsZW5ndGgiLCJwcm90b3R5cGUiKTtOci5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbihlKXtyZXR1cm4gZHMoZSxncyl9O3ZhciBqcj17fSxzbj17fSxsbj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxjbj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGhzPWNuJiYhbG4uY2FsbCh7MToyfSwxKTtzbi5mPWhzP2Z1bmN0aW9uKGUpe3ZhciB0PWNuKHRoaXMsZSk7cmV0dXJuISF0JiZ0LmVudW1lcmFibGV9OmxuO3ZhciBBcz1SLFRzPUwsYnM9c24sT3M9UHIsSXM9ZHIsU3M9UXIsRXM9Qyxtcz1VYSx5bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2pyLmY9QXM/eW46ZnVuY3Rpb24oZSx0KXtpZihlPUlzKGUpLHQ9U3ModCksbXMpdHJ5e3JldHVybiB5bihlLHQpfWNhdGNoe31pZihFcyhlLHQpKXJldHVybiBPcyghVHMoYnMuZixlLHQpLGVbdF0pfTt2YXIgd3M9VCxScz13cygxIC52YWx1ZU9mKSxQcz1sLF9zPXByLENzPVBzLlN0cmluZyx4cz1mdW5jdGlvbihyKXtpZihfcyhyKT09PSJTeW1ib2wiKXRocm93IFR5cGVFcnJvcigiQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmciKTtyZXR1cm4gQ3Mocil9LE5zPWAJClx2XGZcciBceEEwXHUxNjgwXHUyMDAwXHUyMDAxXHUyMDAyXHUyMDAzXHUyMDA0XHUyMDA1XHUyMDA2XHUyMDA3XHUyMDA4XHUyMDA5XHUyMDBBXHUyMDJGXHUyMDVGXHUzMDAwXHUyMDI4XHUyMDI5XHVGRUZGYCxGcz1ULE1zPWplLGpzPXhzLEJzPU5zLHBuPUZzKCIiLnJlcGxhY2UpLG5lPSJbIitCcysiXSIsVXM9UmVnRXhwKCJeIituZStuZSsiKiIpLFZzPVJlZ0V4cChuZStuZSsiKiQiKSxjdD1mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9anMoTXMoZSkpO3JldHVybiByJjEmJih0PXBuKHQsVXMsIiIpKSxyJjImJih0PXBuKHQsVnMsIiIpKSx0fX0sRHM9e3N0YXJ0OmN0KDEpLGVuZDpjdCgyKSx0cmltOmN0KDMpfSxHcz1SLHl0PWwsZG49VCxMcz10bixZcz1xLmV4cG9ydHMsJG49Qyxrcz1vbixLcz13cixXcz1Ycixnbj1rYSx6cz1iLHFzPU5yLmYsSHM9anIuZixYcz1QLmYsSnM9UnMsUXM9RHMudHJpbSxwdD0iTnVtYmVyIixIPXl0W3B0XSxkdD1ILnByb3RvdHlwZSxacz15dC5UeXBlRXJyb3Iscmw9ZG4oIiIuc2xpY2UpLG9lPWRuKCIiLmNoYXJDb2RlQXQpLGVsPWZ1bmN0aW9uKHIpe3ZhciBlPWduKHIsIm51bWJlciIpO3JldHVybiB0eXBlb2YgZT09ImJpZ2ludCI/ZTp0bChlKX0sdGw9ZnVuY3Rpb24ocil7dmFyIGU9Z24ociwibnVtYmVyIiksdCxhLG4sbyxpLHYsdSxmO2lmKFdzKGUpKXRocm93IFpzKCJDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlciIpO2lmKHR5cGVvZiBlPT0ic3RyaW5nIiYmZS5sZW5ndGg+Mil7aWYoZT1RcyhlKSx0PW9lKGUsMCksdD09PTQzfHx0PT09NDUpe2lmKGE9b2UoZSwyKSxhPT09ODh8fGE9PT0xMjApcmV0dXJuIE5hTn1lbHNlIGlmKHQ9PT00OCl7c3dpdGNoKG9lKGUsMSkpe2Nhc2UgNjY6Y2FzZSA5ODpuPTIsbz00OTticmVhaztjYXNlIDc5OmNhc2UgMTExOm49OCxvPTU1O2JyZWFrO2RlZmF1bHQ6cmV0dXJuK2V9Zm9yKGk9cmwoZSwyKSx2PWkubGVuZ3RoLHU9MDt1PHY7dSsrKWlmKGY9b2UoaSx1KSxmPDQ4fHxmPm8pcmV0dXJuIE5hTjtyZXR1cm4gcGFyc2VJbnQoaSxuKX19cmV0dXJuK2V9O2lmKExzKHB0LCFIKCIgMG8xIil8fCFIKCIwYjEiKXx8SCgiKzB4MSIpKSl7Zm9yKHZhciBncj1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPDE/MDpIKGVsKGUpKSxhPXRoaXM7cmV0dXJuIEtzKGR0LGEpJiZ6cyhmdW5jdGlvbigpe0pzKGEpfSk/a3MoT2JqZWN0KHQpLGEsZ3IpOnR9LGhuPUdzP3FzKEgpOiJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixwYXJzZUZsb2F0LHBhcnNlSW50LGZyb21TdHJpbmcscmFuZ2UiLnNwbGl0KCIsIiksJHQ9MCxpZTtobi5sZW5ndGg+JHQ7JHQrKykkbihILGllPWhuWyR0XSkmJiEkbihncixpZSkmJlhzKGdyLGllLEhzKEgsaWUpKTtnci5wcm90b3R5cGU9ZHQsZHQuY29uc3RydWN0b3I9Z3IsWXMoeXQscHQsZ3IpfXZhciBBbj17fTtBbi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7dmFyIGFsPWxyLG5sPVQsb2w9TnIsaWw9QW4sdmw9dHIsdWw9bmwoW10uY29uY2F0KSxmbD1hbCgiUmVmbGVjdCIsIm93bktleXMiKXx8ZnVuY3Rpb24oZSl7dmFyIHQ9b2wuZih2bChlKSksYT1pbC5mO3JldHVybiBhP3VsKHQsYShlKSk6dH0sVG49QyxzbD1mbCxsbD1qcixjbD1QLHlsPWZ1bmN0aW9uKHIsZSx0KXtmb3IodmFyIGE9c2woZSksbj1jbC5mLG89bGwuZixpPTA7aTxhLmxlbmd0aDtpKyspe3ZhciB2PWFbaV07IVRuKHIsdikmJiEodCYmVG4odCx2KSkmJm4ocix2LG8oZSx2KSl9fSxndD1sLHBsPWpyLmYsZGw9YXIsJGw9cS5leHBvcnRzLGdsPU5lLGhsPXlsLEFsPXRuLGh0PWZ1bmN0aW9uKHIsZSl7dmFyIHQ9ci50YXJnZXQsYT1yLmdsb2JhbCxuPXIuc3RhdCxvLGksdix1LGYscztpZihhP2k9Z3Q6bj9pPWd0W3RdfHxnbCh0LHt9KTppPShndFt0XXx8e30pLnByb3RvdHlwZSxpKWZvcih2IGluIGUpe2lmKGY9ZVt2XSxyLm5vVGFyZ2V0R2V0PyhzPXBsKGksdiksdT1zJiZzLnZhbHVlKTp1PWlbdl0sbz1BbChhP3Y6dCsobj8iLiI6IiMiKSt2LHIuZm9yY2VkKSwhbyYmdSE9PXZvaWQgMCl7aWYodHlwZW9mIGY9PXR5cGVvZiB1KWNvbnRpbnVlO2hsKGYsdSl9KHIuc2hhbXx8dSYmdS5zaGFtKSYmZGwoZiwic2hhbSIsITApLCRsKGksdixmLHIpfX0sYm49dHlwZW9mIEFycmF5QnVmZmVyPCJ1IiYmdHlwZW9mIERhdGFWaWV3PCJ1IixUbD1xLmV4cG9ydHMsYmw9ZnVuY3Rpb24ocixlLHQpe2Zvcih2YXIgYSBpbiBlKVRsKHIsYSxlW2FdLHQpO3JldHVybiByfSxPbD1sLElsPXdyLFNsPU9sLlR5cGVFcnJvcixPbj1mdW5jdGlvbihyLGUpe2lmKElsKGUscikpcmV0dXJuIHI7dGhyb3cgU2woIkluY29ycmVjdCBpbnZvY2F0aW9uIil9LEVsPWwsbWw9JHIsd2w9TXIsUmw9RWwuUmFuZ2VFcnJvcixJbj1mdW5jdGlvbihyKXtpZihyPT09dm9pZCAwKXJldHVybiAwO3ZhciBlPW1sKHIpLHQ9d2woZSk7aWYoZSE9PXQpdGhyb3cgUmwoIldyb25nIGxlbmd0aCBvciBpbmRleCIpO3JldHVybiB0fSxQbD1sLF9sPVBsLkFycmF5LENsPU1hdGguYWJzLFk9TWF0aC5wb3cseGw9TWF0aC5mbG9vcixObD1NYXRoLmxvZyxGbD1NYXRoLkxOMixNbD1mdW5jdGlvbihyLGUsdCl7dmFyIGE9X2wodCksbj10KjgtZS0xLG89KDE8PG4pLTEsaT1vPj4xLHY9ZT09PTIzP1koMiwtMjQpLVkoMiwtNzcpOjAsdT1yPDB8fHI9PT0wJiYxL3I8MD8xOjAsZj0wLHMscCxnO2ZvcihyPUNsKHIpLHIhPXJ8fHI9PT0xLzA/KHA9ciE9cj8xOjAscz1vKToocz14bChObChyKS9GbCksZz1ZKDIsLXMpLHIqZzwxJiYocy0tLGcqPTIpLHMraT49MT9yKz12L2c6cis9dipZKDIsMS1pKSxyKmc+PTImJihzKyssZy89MikscytpPj1vPyhwPTAscz1vKTpzK2k+PTE/KHA9KHIqZy0xKSpZKDIsZSkscz1zK2kpOihwPXIqWSgyLGktMSkqWSgyLGUpLHM9MCkpO2U+PTg7KWFbZisrXT1wJjI1NSxwLz0yNTYsZS09ODtmb3Iocz1zPDxlfHAsbis9ZTtuPjA7KWFbZisrXT1zJjI1NSxzLz0yNTYsbi09ODtyZXR1cm4gYVstLWZdfD11KjEyOCxhfSxqbD1mdW5jdGlvbihyLGUpe3ZhciB0PXIubGVuZ3RoLGE9dCo4LWUtMSxuPSgxPDxhKS0xLG89bj4+MSxpPWEtNyx2PXQtMSx1PXJbdi0tXSxmPXUmMTI3LHM7Zm9yKHU+Pj03O2k+MDspZj1mKjI1NityW3YtLV0saS09ODtmb3Iocz1mJigxPDwtaSktMSxmPj49LWksaSs9ZTtpPjA7KXM9cyoyNTYrclt2LS1dLGktPTg7aWYoZj09PTApZj0xLW87ZWxzZXtpZihmPT09bilyZXR1cm4gcz9OYU46dT8tMS8wOjEvMDtzPXMrWSgyLGUpLGY9Zi1vfXJldHVybih1Py0xOjEpKnMqWSgyLGYtZSl9LEJsPXtwYWNrOk1sLHVucGFjazpqbH0sVWw9YixWbD0hVWwoZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7fXJldHVybiByLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1udWxsLE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgcikhPT1yLnByb3RvdHlwZX0pLERsPWwsR2w9QyxMbD1PLFlsPXosa2w9SmUsS2w9VmwsU249a2woIklFX1BST1RPIiksQXQ9RGwuT2JqZWN0LFdsPUF0LnByb3RvdHlwZSx2ZT1LbD9BdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihyKXt2YXIgZT1ZbChyKTtpZihHbChlLFNuKSlyZXR1cm4gZVtTbl07dmFyIHQ9ZS5jb25zdHJ1Y3RvcjtyZXR1cm4gTGwodCkmJmUgaW5zdGFuY2VvZiB0P3QucHJvdG90eXBlOmUgaW5zdGFuY2VvZiBBdD9XbDpudWxsfSx6bD16LEVuPUZyLHFsPUIsbW49ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXpsKHRoaXMpLGE9cWwodCksbj1hcmd1bWVudHMubGVuZ3RoLG89RW4obj4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsYSksaT1uPjI/YXJndW1lbnRzWzJdOnZvaWQgMCx2PWk9PT12b2lkIDA/YTpFbihpLGEpO3Y+bzspdFtvKytdPWU7cmV0dXJuIHR9LEhsPVFyLFhsPVAsSmw9UHIsUWw9ZnVuY3Rpb24ocixlLHQpe3ZhciBhPUhsKGUpO2EgaW4gcj9YbC5mKHIsYSxKbCgwLHQpKTpyW2FdPXR9LFpsPWwsd249RnIscmM9QixlYz1RbCx0Yz1abC5BcnJheSxhYz1NYXRoLm1heCxSbj1mdW5jdGlvbihyLGUsdCl7Zm9yKHZhciBhPXJjKHIpLG49d24oZSxhKSxvPXduKHQ9PT12b2lkIDA/YTp0LGEpLGk9dGMoYWMoby1uLDApKSx2PTA7bjxvO24rKyx2KyspZWMoaSx2LHJbbl0pO3JldHVybiBpLmxlbmd0aD12LGl9LG5jPVAuZixvYz1DLGljPUksUG49aWMoInRvU3RyaW5nVGFnIiksVHQ9ZnVuY3Rpb24ocixlLHQpe3ImJiF0JiYocj1yLnByb3RvdHlwZSksciYmIW9jKHIsUG4pJiZuYyhyLFBuLHtjb25maWd1cmFibGU6ITAsdmFsdWU6ZX0pfSx1ZT1sLGJ0PVQsT3Q9Uix2Yz1ibixfbj1vdCxDbj1hcix4bj1ibCxJdD1iLGZlPU9uLHVjPSRyLGZjPU1yLHNlPUluLE5uPUJsLHNjPXZlLEZuPXhyLGxjPU5yLmYsY2M9UC5mLHljPW1uLHBjPVJuLE1uPVR0LGpuPXRlLGRjPV9uLlBST1BFUixCbj1fbi5DT05GSUdVUkFCTEUsaHI9am4uZ2V0LFVuPWpuLnNldCxsZT0iQXJyYXlCdWZmZXIiLFZuPSJEYXRhVmlldyIsQXI9InByb3RvdHlwZSIsJGM9Ildyb25nIGxlbmd0aCIsRG49Ildyb25nIGluZGV4IixGPXVlW2xlXSxfPUYsVHI9XyYmX1tBcl0sVT11ZVtWbl0sb3I9VSYmVVtBcl0sR249T2JqZWN0LnByb3RvdHlwZSxnYz11ZS5BcnJheSxjZT11ZS5SYW5nZUVycm9yLGhjPWJ0KHljKSxBYz1idChbXS5yZXZlcnNlKSxMbj1Obi5wYWNrLFluPU5uLnVucGFjayxrbj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTVdfSxLbj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTUscj4+OCYyNTVdfSxXbj1mdW5jdGlvbihyKXtyZXR1cm5bciYyNTUscj4+OCYyNTUscj4+MTYmMjU1LHI+PjI0JjI1NV19LHpuPWZ1bmN0aW9uKHIpe3JldHVybiByWzNdPDwyNHxyWzJdPDwxNnxyWzFdPDw4fHJbMF19LFRjPWZ1bmN0aW9uKHIpe3JldHVybiBMbihyLDIzLDQpfSxiYz1mdW5jdGlvbihyKXtyZXR1cm4gTG4ociw1Miw4KX0seWU9ZnVuY3Rpb24ocixlKXtjYyhyW0FyXSxlLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaHIodGhpcylbZV19fSl9LFg9ZnVuY3Rpb24ocixlLHQsYSl7dmFyIG49c2UodCksbz1ocihyKTtpZihuK2U+by5ieXRlTGVuZ3RoKXRocm93IGNlKERuKTt2YXIgaT1ocihvLmJ1ZmZlcikuYnl0ZXMsdj1uK28uYnl0ZU9mZnNldCx1PXBjKGksdix2K2UpO3JldHVybiBhP3U6QWModSl9LEo9ZnVuY3Rpb24ocixlLHQsYSxuLG8pe3ZhciBpPXNlKHQpLHY9aHIocik7aWYoaStlPnYuYnl0ZUxlbmd0aCl0aHJvdyBjZShEbik7Zm9yKHZhciB1PWhyKHYuYnVmZmVyKS5ieXRlcyxmPWkrdi5ieXRlT2Zmc2V0LHM9YSgrbikscD0wO3A8ZTtwKyspdVtmK3BdPXNbbz9wOmUtcC0xXX07aWYoIXZjKV89ZnVuY3Rpb24oZSl7ZmUodGhpcyxUcik7dmFyIHQ9c2UoZSk7VW4odGhpcyx7Ynl0ZXM6aGMoZ2ModCksMCksYnl0ZUxlbmd0aDp0fSksT3R8fCh0aGlzLmJ5dGVMZW5ndGg9dCl9LFRyPV9bQXJdLFU9ZnVuY3Rpb24oZSx0LGEpe2ZlKHRoaXMsb3IpLGZlKGUsVHIpO3ZhciBuPWhyKGUpLmJ5dGVMZW5ndGgsbz11Yyh0KTtpZihvPDB8fG8+bil0aHJvdyBjZSgiV3Jvbmcgb2Zmc2V0Iik7aWYoYT1hPT09dm9pZCAwP24tbzpmYyhhKSxvK2E+bil0aHJvdyBjZSgkYyk7VW4odGhpcyx7YnVmZmVyOmUsYnl0ZUxlbmd0aDphLGJ5dGVPZmZzZXQ6b30pLE90fHwodGhpcy5idWZmZXI9ZSx0aGlzLmJ5dGVMZW5ndGg9YSx0aGlzLmJ5dGVPZmZzZXQ9byl9LG9yPVVbQXJdLE90JiYoeWUoXywiYnl0ZUxlbmd0aCIpLHllKFUsImJ1ZmZlciIpLHllKFUsImJ5dGVMZW5ndGgiKSx5ZShVLCJieXRlT2Zmc2V0IikpLHhuKG9yLHtnZXRJbnQ4OmZ1bmN0aW9uKGUpe3JldHVybiBYKHRoaXMsMSxlKVswXTw8MjQ+PjI0fSxnZXRVaW50ODpmdW5jdGlvbihlKXtyZXR1cm4gWCh0aGlzLDEsZSlbMF19LGdldEludDE2OmZ1bmN0aW9uKGUpe3ZhciB0PVgodGhpcywyLGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApO3JldHVybih0WzFdPDw4fHRbMF0pPDwxNj4+MTZ9LGdldFVpbnQxNjpmdW5jdGlvbihlKXt2YXIgdD1YKHRoaXMsMixlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKTtyZXR1cm4gdFsxXTw8OHx0WzBdfSxnZXRJbnQzMjpmdW5jdGlvbihlKXtyZXR1cm4gem4oWCh0aGlzLDQsZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCkpfSxnZXRVaW50MzI6ZnVuY3Rpb24oZSl7cmV0dXJuIHpuKFgodGhpcyw0LGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApKT4+PjB9LGdldEZsb2F0MzI6ZnVuY3Rpb24oZSl7cmV0dXJuIFluKFgodGhpcyw0LGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApLDIzKX0sZ2V0RmxvYXQ2NDpmdW5jdGlvbihlKXtyZXR1cm4gWW4oWCh0aGlzLDgsZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCksNTIpfSxzZXRJbnQ4OmZ1bmN0aW9uKGUsdCl7Sih0aGlzLDEsZSxrbix0KX0sc2V0VWludDg6ZnVuY3Rpb24oZSx0KXtKKHRoaXMsMSxlLGtuLHQpfSxzZXRJbnQxNjpmdW5jdGlvbihlLHQpe0oodGhpcywyLGUsS24sdCxhcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCl9LHNldFVpbnQxNjpmdW5jdGlvbihlLHQpe0oodGhpcywyLGUsS24sdCxhcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCl9LHNldEludDMyOmZ1bmN0aW9uKGUsdCl7Sih0aGlzLDQsZSxXbix0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0sc2V0VWludDMyOmZ1bmN0aW9uKGUsdCl7Sih0aGlzLDQsZSxXbix0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0sc2V0RmxvYXQzMjpmdW5jdGlvbihlLHQpe0oodGhpcyw0LGUsVGMsdCxhcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCl9LHNldEZsb2F0NjQ6ZnVuY3Rpb24oZSx0KXtKKHRoaXMsOCxlLGJjLHQsYXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDApfX0pO2Vsc2V7dmFyIHFuPWRjJiZGLm5hbWUhPT1sZTtpZighSXQoZnVuY3Rpb24oKXtGKDEpfSl8fCFJdChmdW5jdGlvbigpe25ldyBGKC0xKX0pfHxJdChmdW5jdGlvbigpe3JldHVybiBuZXcgRixuZXcgRigxLjUpLG5ldyBGKE5hTikscW4mJiFCbn0pKXtfPWZ1bmN0aW9uKGUpe3JldHVybiBmZSh0aGlzLFRyKSxuZXcgRihzZShlKSl9LF9bQXJdPVRyO2Zvcih2YXIgSG49bGMoRiksWG49MCxTdDtIbi5sZW5ndGg+WG47KShTdD1IbltYbisrXSlpbiBffHxDbihfLFN0LEZbU3RdKTtUci5jb25zdHJ1Y3Rvcj1ffWVsc2UgcW4mJkJuJiZDbihGLCJuYW1lIixsZSk7Rm4mJnNjKG9yKSE9PUduJiZGbihvcixHbik7dmFyIHBlPW5ldyBVKG5ldyBfKDIpKSxKbj1idChvci5zZXRJbnQ4KTtwZS5zZXRJbnQ4KDAsMjE0NzQ4MzY0OCkscGUuc2V0SW50OCgxLDIxNDc0ODM2NDkpLChwZS5nZXRJbnQ4KDApfHwhcGUuZ2V0SW50OCgxKSkmJnhuKG9yLHtzZXRJbnQ4OmZ1bmN0aW9uKGUsdCl7Sm4odGhpcyxlLHQ8PDI0Pj4yNCl9LHNldFVpbnQ4OmZ1bmN0aW9uKGUsdCl7Sm4odGhpcyxlLHQ8PDI0Pj4yNCl9fSx7dW5zYWZlOiEwfSl9TW4oXyxsZSksTW4oVSxWbik7dmFyIFFuPXtBcnJheUJ1ZmZlcjpfLERhdGFWaWV3OlV9LE9jPWxyLEljPVAsU2M9SSxFYz1SLFpuPVNjKCJzcGVjaWVzIikscm89ZnVuY3Rpb24ocil7dmFyIGU9T2MociksdD1JYy5mO0VjJiZlJiYhZVtabl0mJnQoZSxabix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfSxtYz1odCx3Yz1sLFJjPVFuLFBjPXJvLEV0PSJBcnJheUJ1ZmZlciIsZW89UmNbRXRdLF9jPXdjW0V0XTttYyh7Z2xvYmFsOiEwLGZvcmNlZDpfYyE9PWVvfSx7QXJyYXlCdWZmZXI6ZW99KSxQYyhFdCk7dmFyIHRvPXt9LENjPWZuLHhjPWx0LE5jPU9iamVjdC5rZXlzfHxmdW5jdGlvbihlKXtyZXR1cm4gQ2MoZSx4Yyl9LEZjPVIsTWM9VmEsamM9UCxCYz10cixVYz1kcixWYz1OYzt0by5mPUZjJiYhTWM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24oZSx0KXtCYyhlKTtmb3IodmFyIGE9VWModCksbj1WYyh0KSxvPW4ubGVuZ3RoLGk9MCx2O28+aTspamMuZihlLHY9bltpKytdLGFbdl0pO3JldHVybiBlfTt2YXIgRGM9bHIsR2M9RGMoImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiksTGM9dHIsWWM9dG8sYW89bHQsa2M9UWUsS2M9R2MsV2M9QmEsemM9SmUsbm89Ij4iLG9vPSI8IixtdD0icHJvdG90eXBlIix3dD0ic2NyaXB0Iixpbz16YygiSUVfUFJPVE8iKSxSdD1mdW5jdGlvbigpe30sdm89ZnVuY3Rpb24ocil7cmV0dXJuIG9vK3d0K25vK3Irb28rIi8iK3d0K25vfSx1bz1mdW5jdGlvbihyKXtyLndyaXRlKHZvKCIiKSksci5jbG9zZSgpO3ZhciBlPXIucGFyZW50V2luZG93Lk9iamVjdDtyZXR1cm4gcj1udWxsLGV9LHFjPWZ1bmN0aW9uKCl7dmFyIHI9V2MoImlmcmFtZSIpLGU9ImphdmEiK3d0KyI6Iix0O3JldHVybiByLnN0eWxlLmRpc3BsYXk9Im5vbmUiLEtjLmFwcGVuZENoaWxkKHIpLHIuc3JjPVN0cmluZyhlKSx0PXIuY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKHZvKCJkb2N1bWVudC5GPU9iamVjdCIpKSx0LmNsb3NlKCksdC5GfSxkZSwkZT1mdW5jdGlvbigpe3RyeXtkZT1uZXcgQWN0aXZlWE9iamVjdCgiaHRtbGZpbGUiKX1jYXRjaHt9JGU9dHlwZW9mIGRvY3VtZW50PCJ1Ij9kb2N1bWVudC5kb21haW4mJmRlP3VvKGRlKTpxYygpOnVvKGRlKTtmb3IodmFyIHI9YW8ubGVuZ3RoO3ItLTspZGVsZXRlICRlW210XVthb1tyXV07cmV0dXJuICRlKCl9O2tjW2lvXT0hMDt2YXIgUHQ9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24oZSx0KXt2YXIgYTtyZXR1cm4gZSE9PW51bGw/KFJ0W210XT1MYyhlKSxhPW5ldyBSdCxSdFttdF09bnVsbCxhW2lvXT1lKTphPSRlKCksdD09PXZvaWQgMD9hOlljLmYoYSx0KX0sSGM9SSxYYz1QdCxKYz1QLF90PUhjKCJ1bnNjb3BhYmxlcyIpLEN0PUFycmF5LnByb3RvdHlwZTtDdFtfdF09PW51bGwmJkpjLmYoQ3QsX3Qse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpYYyhudWxsKX0pO3ZhciBRYz1mdW5jdGlvbihyKXtDdFtfdF1bcl09ITB9LEJyPXt9LFpjPWIscnk9Tyxmbz12ZSxleT1xLmV4cG9ydHMsdHk9SSx4dD10eSgiaXRlcmF0b3IiKSxzbz0hMSxpcixOdCxGdDtbXS5rZXlzJiYoRnQ9W10ua2V5cygpLCJuZXh0ImluIEZ0PyhOdD1mbyhmbyhGdCkpLE50IT09T2JqZWN0LnByb3RvdHlwZSYmKGlyPU50KSk6c289ITApO3ZhciBheT1pcj09bnVsbHx8WmMoZnVuY3Rpb24oKXt2YXIgcj17fTtyZXR1cm4gaXJbeHRdLmNhbGwocikhPT1yfSk7YXkmJihpcj17fSkscnkoaXJbeHRdKXx8ZXkoaXIseHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pO3ZhciBsbz17SXRlcmF0b3JQcm90b3R5cGU6aXIsQlVHR1lfU0FGQVJJX0lURVJBVE9SUzpzb30sbnk9bG8uSXRlcmF0b3JQcm90b3R5cGUsb3k9UHQsaXk9UHIsdnk9VHQsdXk9QnIsZnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sc3k9ZnVuY3Rpb24ocixlLHQsYSl7dmFyIG49ZSsiIEl0ZXJhdG9yIjtyZXR1cm4gci5wcm90b3R5cGU9b3kobnkse25leHQ6aXkoKyFhLHQpfSksdnkocixuLCExKSx1eVtuXT1meSxyfSxseT1odCxjeT1MLGNvPW90LHl5PU8scHk9c3kseW89dmUscG89eHIsZHk9VHQsJHk9YXIsTXQ9cS5leHBvcnRzLGd5PUksaHk9QnIsJG89bG8sQXk9Y28uUFJPUEVSLFR5PWNvLkNPTkZJR1VSQUJMRSxnbz0kby5JdGVyYXRvclByb3RvdHlwZSxnZT0kby5CVUdHWV9TQUZBUklfSVRFUkFUT1JTLFVyPWd5KCJpdGVyYXRvciIpLGhvPSJrZXlzIixWcj0idmFsdWVzIixBbz0iZW50cmllcyIsYnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sT3k9ZnVuY3Rpb24ocixlLHQsYSxuLG8saSl7cHkodCxlLGEpO3ZhciB2PWZ1bmN0aW9uKGgpe2lmKGg9PT1uJiZnKXJldHVybiBnO2lmKCFnZSYmaCBpbiBzKXJldHVybiBzW2hdO3N3aXRjaChoKXtjYXNlIGhvOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLGgpfTtjYXNlIFZyOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLGgpfTtjYXNlIEFvOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLGgpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcyl9fSx1PWUrIiBJdGVyYXRvciIsZj0hMSxzPXIucHJvdG90eXBlLHA9c1tVcl18fHNbIkBAaXRlcmF0b3IiXXx8biYmc1tuXSxnPSFnZSYmcHx8dihuKSx3PWU9PSJBcnJheSImJnMuZW50cmllc3x8cCxkLGMseTtpZih3JiYoZD15byh3LmNhbGwobmV3IHIpKSxkIT09T2JqZWN0LnByb3RvdHlwZSYmZC5uZXh0JiYoeW8oZCkhPT1nbyYmKHBvP3BvKGQsZ28pOnl5KGRbVXJdKXx8TXQoZCxVcixieSkpLGR5KGQsdSwhMCkpKSxBeSYmbj09VnImJnAmJnAubmFtZSE9PVZyJiYoVHk/JHkocywibmFtZSIsVnIpOihmPSEwLGc9ZnVuY3Rpb24oKXtyZXR1cm4gY3kocCx0aGlzKX0pKSxuKWlmKGM9e3ZhbHVlczp2KFZyKSxrZXlzOm8/Zzp2KGhvKSxlbnRyaWVzOnYoQW8pfSxpKWZvcih5IGluIGMpKGdlfHxmfHwhKHkgaW4gcykpJiZNdChzLHksY1t5XSk7ZWxzZSBseSh7dGFyZ2V0OmUscHJvdG86ITAsZm9yY2VkOmdlfHxmfSxjKTtyZXR1cm4gc1tVcl0hPT1nJiZNdChzLFVyLGcse25hbWU6bn0pLGh5W2VdPWcsY30sSXk9ZHIsanQ9UWMsVG89QnIsYm89dGUsU3k9UC5mLEV5PU95LG15PVIsT289IkFycmF5IEl0ZXJhdG9yIix3eT1iby5zZXQsUnk9Ym8uZ2V0dGVyRm9yKE9vKSxQeT1FeShBcnJheSwiQXJyYXkiLGZ1bmN0aW9uKHIsZSl7d3kodGhpcyx7dHlwZTpPbyx0YXJnZXQ6SXkociksaW5kZXg6MCxraW5kOmV9KX0sZnVuY3Rpb24oKXt2YXIgcj1SeSh0aGlzKSxlPXIudGFyZ2V0LHQ9ci5raW5kLGE9ci5pbmRleCsrO3JldHVybiFlfHxhPj1lLmxlbmd0aD8oci50YXJnZXQ9dm9pZCAwLHt2YWx1ZTp2b2lkIDAsZG9uZTohMH0pOnQ9PSJrZXlzIj97dmFsdWU6YSxkb25lOiExfTp0PT0idmFsdWVzIj97dmFsdWU6ZVthXSxkb25lOiExfTp7dmFsdWU6W2EsZVthXV0sZG9uZTohMX19LCJ2YWx1ZXMiKSxJbz1Uby5Bcmd1bWVudHM9VG8uQXJyYXk7aWYoanQoImtleXMiKSxqdCgidmFsdWVzIiksanQoImVudHJpZXMiKSxteSYmSW8ubmFtZSE9PSJ2YWx1ZXMiKXRyeXtTeShJbywibmFtZSIse3ZhbHVlOiJ2YWx1ZXMifSl9Y2F0Y2h7fXZhciBicj17ZXhwb3J0czp7fX0sX3k9SSxTbz1feSgiaXRlcmF0b3IiKSxFbz0hMTt0cnl7dmFyIEN5PTAsbW89e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohIUN5Kyt9fSxyZXR1cm46ZnVuY3Rpb24oKXtFbz0hMH19O21vW1NvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxBcnJheS5mcm9tKG1vLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoe312YXIgeHk9ZnVuY3Rpb24ocixlKXtpZighZSYmIUVvKXJldHVybiExO3ZhciB0PSExO3RyeXt2YXIgYT17fTthW1NvXT1mdW5jdGlvbigpe3JldHVybntuZXh0OmZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6dD0hMH19fX0scihhKX1jYXRjaHt9cmV0dXJuIHR9LE55PWJuLEJ0PVIsUz1sLHdvPU8sVXQ9aix2cj1DLFZ0PXByLEZ5PUpyLER0PWFyLEd0PXEuZXhwb3J0cyxNeT1QLmYsank9d3IsTHQ9dmUsT3I9eHIsQnk9SSxSbz1CZSxoZT1TLkludDhBcnJheSxZdD1oZSYmaGUucHJvdG90eXBlLFBvPVMuVWludDhDbGFtcGVkQXJyYXksX289UG8mJlBvLnByb3RvdHlwZSxWPWhlJiZMdChoZSksTT1ZdCYmTHQoWXQpLFV5PU9iamVjdC5wcm90b3R5cGUsa3Q9Uy5UeXBlRXJyb3IsQ289QnkoInRvU3RyaW5nVGFnIiksS3Q9Um8oIlRZUEVEX0FSUkFZX1RBRyIpLFd0PVJvKCJUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUiIpLGs9TnkmJiEhT3ImJlZ0KFMub3BlcmEpIT09Ik9wZXJhIix4bz0hMSxtLFEsSXIsSz17SW50OEFycmF5OjEsVWludDhBcnJheToxLFVpbnQ4Q2xhbXBlZEFycmF5OjEsSW50MTZBcnJheToyLFVpbnQxNkFycmF5OjIsSW50MzJBcnJheTo0LFVpbnQzMkFycmF5OjQsRmxvYXQzMkFycmF5OjQsRmxvYXQ2NEFycmF5Ojh9LHp0PXtCaWdJbnQ2NEFycmF5OjgsQmlnVWludDY0QXJyYXk6OH0sVnk9ZnVuY3Rpb24oZSl7aWYoIVV0KGUpKXJldHVybiExO3ZhciB0PVZ0KGUpO3JldHVybiB0PT09IkRhdGFWaWV3Inx8dnIoSyx0KXx8dnIoenQsdCl9LE5vPWZ1bmN0aW9uKHIpe2lmKCFVdChyKSlyZXR1cm4hMTt2YXIgZT1WdChyKTtyZXR1cm4gdnIoSyxlKXx8dnIoenQsZSl9LER5PWZ1bmN0aW9uKHIpe2lmKE5vKHIpKXJldHVybiByO3Rocm93IGt0KCJUYXJnZXQgaXMgbm90IGEgdHlwZWQgYXJyYXkiKX0sR3k9ZnVuY3Rpb24ocil7aWYod28ocikmJighT3J8fGp5KFYscikpKXJldHVybiByO3Rocm93IGt0KEZ5KHIpKyIgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IiKX0sTHk9ZnVuY3Rpb24ocixlLHQsYSl7aWYoISFCdCl7aWYodClmb3IodmFyIG4gaW4gSyl7dmFyIG89U1tuXTtpZihvJiZ2cihvLnByb3RvdHlwZSxyKSl0cnl7ZGVsZXRlIG8ucHJvdG90eXBlW3JdfWNhdGNoe3RyeXtvLnByb3RvdHlwZVtyXT1lfWNhdGNoe319fSghTVtyXXx8dCkmJkd0KE0scix0P2U6ayYmWXRbcl18fGUsYSl9fSxZeT1mdW5jdGlvbihyLGUsdCl7dmFyIGEsbjtpZighIUJ0KXtpZihPcil7aWYodCl7Zm9yKGEgaW4gSylpZihuPVNbYV0sbiYmdnIobixyKSl0cnl7ZGVsZXRlIG5bcl19Y2F0Y2h7fX1pZighVltyXXx8dCl0cnl7cmV0dXJuIEd0KFYscix0P2U6ayYmVltyXXx8ZSl9Y2F0Y2h7fWVsc2UgcmV0dXJufWZvcihhIGluIEspbj1TW2FdLG4mJighbltyXXx8dCkmJkd0KG4scixlKX19O2ZvcihtIGluIEspUT1TW21dLElyPVEmJlEucHJvdG90eXBlLElyP0R0KElyLFd0LFEpOms9ITE7Zm9yKG0gaW4genQpUT1TW21dLElyPVEmJlEucHJvdG90eXBlLElyJiZEdChJcixXdCxRKTtpZigoIWt8fCF3byhWKXx8Vj09PUZ1bmN0aW9uLnByb3RvdHlwZSkmJihWPWZ1bmN0aW9uKCl7dGhyb3cga3QoIkluY29ycmVjdCBpbnZvY2F0aW9uIil9LGspKWZvcihtIGluIEspU1ttXSYmT3IoU1ttXSxWKTtpZigoIWt8fCFNfHxNPT09VXkpJiYoTT1WLnByb3RvdHlwZSxrKSlmb3IobSBpbiBLKVNbbV0mJk9yKFNbbV0ucHJvdG90eXBlLE0pO2lmKGsmJkx0KF9vKSE9PU0mJk9yKF9vLE0pLEJ0JiYhdnIoTSxDbykpe3hvPSEwLE15KE0sQ28se2dldDpmdW5jdGlvbigpe3JldHVybiBVdCh0aGlzKT90aGlzW0t0XTp2b2lkIDB9fSk7Zm9yKG0gaW4gSylTW21dJiZEdChTW21dLEt0LG0pfXZhciAkPXtOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTOmssVFlQRURfQVJSQVlfQ09OU1RSVUNUT1I6V3QsVFlQRURfQVJSQVlfVEFHOnhvJiZLdCxhVHlwZWRBcnJheTpEeSxhVHlwZWRBcnJheUNvbnN0cnVjdG9yOkd5LGV4cG9ydFR5cGVkQXJyYXlNZXRob2Q6THksZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZDpZeSxpc1ZpZXc6VnksaXNUeXBlZEFycmF5Ok5vLFR5cGVkQXJyYXk6VixUeXBlZEFycmF5UHJvdG90eXBlOk19LEZvPWwscXQ9YixreT14eSxLeT0kLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MsV3k9Rm8uQXJyYXlCdWZmZXIsdXI9Rm8uSW50OEFycmF5LHp5PSFLeXx8IXF0KGZ1bmN0aW9uKCl7dXIoMSl9KXx8IXF0KGZ1bmN0aW9uKCl7bmV3IHVyKC0xKX0pfHwha3koZnVuY3Rpb24ocil7bmV3IHVyLG5ldyB1cihudWxsKSxuZXcgdXIoMS41KSxuZXcgdXIocil9LCEwKXx8cXQoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHVyKG5ldyBXeSgyKSwxLHZvaWQgMCkubGVuZ3RoIT09MX0pLHF5PWosSHk9TWF0aC5mbG9vcixYeT1OdW1iZXIuaXNJbnRlZ2VyfHxmdW5jdGlvbihlKXtyZXR1cm4hcXkoZSkmJmlzRmluaXRlKGUpJiZIeShlKT09PWV9LEp5PWwsUXk9JHIsWnk9SnkuUmFuZ2VFcnJvcixycD1mdW5jdGlvbihyKXt2YXIgZT1ReShyKTtpZihlPDApdGhyb3cgWnkoIlRoZSBhcmd1bWVudCBjYW4ndCBiZSBsZXNzIHRoYW4gMCIpO3JldHVybiBlfSxlcD1sLHRwPXJwLGFwPWVwLlJhbmdlRXJyb3IsTW89ZnVuY3Rpb24ocixlKXt2YXIgdD10cChyKTtpZih0JWUpdGhyb3cgYXAoIldyb25nIG9mZnNldCIpO3JldHVybiB0fSxqbz1ULG5wPVJyLG9wPVdyLGlwPWpvKGpvLmJpbmQpLEJvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIG5wKHIpLGU9PT12b2lkIDA/cjpvcD9pcChyLGUpOmZ1bmN0aW9uKCl7cmV0dXJuIHIuYXBwbHkoZSxhcmd1bWVudHMpfX0sdnA9VCx1cD1iLFVvPU8sZnA9cHIsc3A9bHIsbHA9WGUsVm89ZnVuY3Rpb24oKXt9LGNwPVtdLERvPXNwKCJSZWZsZWN0IiwiY29uc3RydWN0IiksSHQ9L15ccyooPzpjbGFzc3xmdW5jdGlvbilcYi8seXA9dnAoSHQuZXhlYykscHA9IUh0LmV4ZWMoVm8pLERyPWZ1bmN0aW9uKGUpe2lmKCFVbyhlKSlyZXR1cm4hMTt0cnl7cmV0dXJuIERvKFZvLGNwLGUpLCEwfWNhdGNoe3JldHVybiExfX0sR289ZnVuY3Rpb24oZSl7aWYoIVVvKGUpKXJldHVybiExO3N3aXRjaChmcChlKSl7Y2FzZSJBc3luY0Z1bmN0aW9uIjpjYXNlIkdlbmVyYXRvckZ1bmN0aW9uIjpjYXNlIkFzeW5jR2VuZXJhdG9yRnVuY3Rpb24iOnJldHVybiExfXRyeXtyZXR1cm4gcHB8fCEheXAoSHQsbHAoZSkpfWNhdGNoe3JldHVybiEwfX07R28uc2hhbT0hMDt2YXIgTG89IURvfHx1cChmdW5jdGlvbigpe3ZhciByO3JldHVybiBEcihEci5jYWxsKXx8IURyKE9iamVjdCl8fCFEcihmdW5jdGlvbigpe3I9ITB9KXx8cn0pP0dvOkRyLGRwPWwsJHA9TG8sZ3A9SnIsaHA9ZHAuVHlwZUVycm9yLFlvPWZ1bmN0aW9uKHIpe2lmKCRwKHIpKXJldHVybiByO3Rocm93IGhwKGdwKHIpKyIgaXMgbm90IGEgY29uc3RydWN0b3IiKX0sQXA9cHIsa289R2EsVHA9QnIsYnA9SSxPcD1icCgiaXRlcmF0b3IiKSxLbz1mdW5jdGlvbihyKXtpZihyIT1udWxsKXJldHVybiBrbyhyLE9wKXx8a28ociwiQEBpdGVyYXRvciIpfHxUcFtBcChyKV19LElwPWwsU3A9TCxFcD1ScixtcD10cix3cD1KcixScD1LbyxQcD1JcC5UeXBlRXJyb3IsX3A9ZnVuY3Rpb24ocixlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPDI/UnAocik6ZTtpZihFcCh0KSlyZXR1cm4gbXAoU3AodCxyKSk7dGhyb3cgUHAod3AocikrIiBpcyBub3QgaXRlcmFibGUiKX0sQ3A9SSx4cD1CcixOcD1DcCgiaXRlcmF0b3IiKSxGcD1BcnJheS5wcm90b3R5cGUsTXA9ZnVuY3Rpb24ocil7cmV0dXJuIHIhPT12b2lkIDAmJih4cC5BcnJheT09PXJ8fEZwW05wXT09PXIpfSxqcD1CbyxCcD1MLFVwPVlvLFZwPXosRHA9QixHcD1fcCxMcD1LbyxZcD1NcCxrcD0kLmFUeXBlZEFycmF5Q29uc3RydWN0b3IsS3A9ZnVuY3Rpb24oZSl7dmFyIHQ9VXAodGhpcyksYT1WcChlKSxuPWFyZ3VtZW50cy5sZW5ndGgsbz1uPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxpPW8hPT12b2lkIDAsdj1McChhKSx1LGYscyxwLGcsdztpZih2JiYhWXAodikpZm9yKGc9R3AoYSx2KSx3PWcubmV4dCxhPVtdOyEocD1CcCh3LGcpKS5kb25lOylhLnB1c2gocC52YWx1ZSk7Zm9yKGkmJm4+MiYmKG89anAobyxhcmd1bWVudHNbMl0pKSxmPURwKGEpLHM9bmV3KGtwKHQpKShmKSx1PTA7Zj51O3UrKylzW3VdPWk/byhhW3VdLHUpOmFbdV07cmV0dXJuIHN9LFdwPWl0LHpwPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVybiBXcChlKT09IkFycmF5In0scXA9bCxXbz16cCxIcD1MbyxYcD1qLEpwPUksUXA9SnAoInNwZWNpZXMiKSx6bz1xcC5BcnJheSxacD1mdW5jdGlvbihyKXt2YXIgZTtyZXR1cm4gV28ocikmJihlPXIuY29uc3RydWN0b3IsSHAoZSkmJihlPT09em98fFdvKGUucHJvdG90eXBlKSk/ZT12b2lkIDA6WHAoZSkmJihlPWVbUXBdLGU9PT1udWxsJiYoZT12b2lkIDApKSksZT09PXZvaWQgMD96bzplfSxyZD1acCxlZD1mdW5jdGlvbihyLGUpe3JldHVybiBuZXcocmQocikpKGU9PT0wPzA6ZSl9LHRkPUJvLGFkPVQsbmQ9dXQsb2Q9eixpZD1CLHZkPWVkLHFvPWFkKFtdLnB1c2gpLFo9ZnVuY3Rpb24ocil7dmFyIGU9cj09MSx0PXI9PTIsYT1yPT0zLG49cj09NCxvPXI9PTYsaT1yPT03LHY9cj09NXx8bztyZXR1cm4gZnVuY3Rpb24odSxmLHMscCl7Zm9yKHZhciBnPW9kKHUpLHc9bmQoZyksZD10ZChmLHMpLGM9aWQodykseT0wLGg9cHx8dmQsRT1lP2godSxjKTp0fHxpP2godSwwKTp2b2lkIDAseCxEO2M+eTt5KyspaWYoKHZ8fHkgaW4gdykmJih4PXdbeV0sRD1kKHgseSxnKSxyKSlpZihlKUVbeV09RDtlbHNlIGlmKEQpc3dpdGNoKHIpe2Nhc2UgMzpyZXR1cm4hMDtjYXNlIDU6cmV0dXJuIHg7Y2FzZSA2OnJldHVybiB5O2Nhc2UgMjpxbyhFLHgpfWVsc2Ugc3dpdGNoKHIpe2Nhc2UgNDpyZXR1cm4hMTtjYXNlIDc6cW8oRSx4KX1yZXR1cm4gbz8tMTphfHxuP246RX19LHJyPXtmb3JFYWNoOlooMCksbWFwOlooMSksZmlsdGVyOlooMiksc29tZTpaKDMpLGV2ZXJ5OlooNCksZmluZDpaKDUpLGZpbmRJbmRleDpaKDYpLGZpbHRlclJlamVjdDpaKDcpfSxIbz1odCxYbz1sLEpvPUwsdWQ9UixmZD16eSxmcj0kLFFvPVFuLFpvPU9uLHNkPVByLFNyPWFyLGxkPVh5LGNkPU1yLHJpPUluLFh0PU1vLGVpPVFyLEdyPUMseWQ9cHIsSnQ9aixwZD1YcixkZD1QdCwkZD13cixBZT14cixnZD1Oci5mLHRpPUtwLGhkPXJyLmZvckVhY2gsQWQ9cm8sYWk9UCxuaT1qcixvaT10ZSxUZD1vbixRdD1vaS5nZXQsYmQ9b2kuc2V0LFp0PWFpLmYsT2Q9bmkuZixJZD1NYXRoLnJvdW5kLHJhPVhvLlJhbmdlRXJyb3IsaWk9UW8uQXJyYXlCdWZmZXIsU2Q9aWkucHJvdG90eXBlLEVkPVFvLkRhdGFWaWV3LFRlPWZyLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MsbWQ9ZnIuVFlQRURfQVJSQVlfQ09OU1RSVUNUT1Isdmk9ZnIuVFlQRURfQVJSQVlfVEFHLHVpPWZyLlR5cGVkQXJyYXksTHI9ZnIuVHlwZWRBcnJheVByb3RvdHlwZSx3ZD1mci5hVHlwZWRBcnJheUNvbnN0cnVjdG9yLGVhPWZyLmlzVHlwZWRBcnJheSxiZT0iQllURVNfUEVSX0VMRU1FTlQiLHRhPSJXcm9uZyBsZW5ndGgiLGZpPWZ1bmN0aW9uKHIsZSl7d2Qocik7Zm9yKHZhciB0PTAsYT1lLmxlbmd0aCxuPW5ldyByKGEpO2E+dDspblt0XT1lW3QrK107cmV0dXJuIG59LE9lPWZ1bmN0aW9uKHIsZSl7WnQocixlLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUXQodGhpcylbZV19fSl9LHNpPWZ1bmN0aW9uKHIpe3ZhciBlO3JldHVybiAkZChTZCxyKXx8KGU9eWQocikpPT0iQXJyYXlCdWZmZXIifHxlPT0iU2hhcmVkQXJyYXlCdWZmZXIifSxsaT1mdW5jdGlvbihyLGUpe3JldHVybiBlYShyKSYmIXBkKGUpJiZlIGluIHImJmxkKCtlKSYmZT49MH0sY2k9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD1laSh0KSxsaShlLHQpP3NkKDIsZVt0XSk6T2QoZSx0KX0seWk9ZnVuY3Rpb24oZSx0LGEpe3JldHVybiB0PWVpKHQpLGxpKGUsdCkmJkp0KGEpJiZHcihhLCJ2YWx1ZSIpJiYhR3IoYSwiZ2V0IikmJiFHcihhLCJzZXQiKSYmIWEuY29uZmlndXJhYmxlJiYoIUdyKGEsIndyaXRhYmxlIil8fGEud3JpdGFibGUpJiYoIUdyKGEsImVudW1lcmFibGUiKXx8YS5lbnVtZXJhYmxlKT8oZVt0XT1hLnZhbHVlLGUpOlp0KGUsdCxhKX07dWQ/KFRlfHwobmkuZj1jaSxhaS5mPXlpLE9lKExyLCJidWZmZXIiKSxPZShMciwiYnl0ZU9mZnNldCIpLE9lKExyLCJieXRlTGVuZ3RoIiksT2UoTHIsImxlbmd0aCIpKSxIbyh7dGFyZ2V0OiJPYmplY3QiLHN0YXQ6ITAsZm9yY2VkOiFUZX0se2dldE93blByb3BlcnR5RGVzY3JpcHRvcjpjaSxkZWZpbmVQcm9wZXJ0eTp5aX0pLGJyLmV4cG9ydHM9ZnVuY3Rpb24ocixlLHQpe3ZhciBhPXIubWF0Y2goL1xkKyQvKVswXS84LG49cisodD8iQ2xhbXBlZCI6IiIpKyJBcnJheSIsbz0iZ2V0IityLGk9InNldCIrcix2PVhvW25dLHU9dixmPXUmJnUucHJvdG90eXBlLHM9e30scD1mdW5jdGlvbihkLGMpe3ZhciB5PVF0KGQpO3JldHVybiB5LnZpZXdbb10oYyphK3kuYnl0ZU9mZnNldCwhMCl9LGc9ZnVuY3Rpb24oZCxjLHkpe3ZhciBoPVF0KGQpO3QmJih5PSh5PUlkKHkpKTwwPzA6eT4yNTU/MjU1OnkmMjU1KSxoLnZpZXdbaV0oYyphK2guYnl0ZU9mZnNldCx5LCEwKX0sdz1mdW5jdGlvbihkLGMpe1p0KGQsYyx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpcyxjKX0sc2V0OmZ1bmN0aW9uKHkpe3JldHVybiBnKHRoaXMsYyx5KX0sZW51bWVyYWJsZTohMH0pfTtUZT9mZCYmKHU9ZShmdW5jdGlvbihkLGMseSxoKXtyZXR1cm4gWm8oZCxmKSxUZChmdW5jdGlvbigpe3JldHVybiBKdChjKT9zaShjKT9oIT09dm9pZCAwP25ldyB2KGMsWHQoeSxhKSxoKTp5IT09dm9pZCAwP25ldyB2KGMsWHQoeSxhKSk6bmV3IHYoYyk6ZWEoYyk/ZmkodSxjKTpKbyh0aSx1LGMpOm5ldyB2KHJpKGMpKX0oKSxkLHUpfSksQWUmJkFlKHUsdWkpLGhkKGdkKHYpLGZ1bmN0aW9uKGQpe2QgaW4gdXx8U3IodSxkLHZbZF0pfSksdS5wcm90b3R5cGU9Zik6KHU9ZShmdW5jdGlvbihkLGMseSxoKXtabyhkLGYpO3ZhciBFPTAseD0wLEQsRyxzcjtpZighSnQoYykpc3I9cmkoYyksRz1zciphLEQ9bmV3IGlpKEcpO2Vsc2UgaWYoc2koYykpe0Q9Yyx4PVh0KHksYSk7dmFyIGtyPWMuYnl0ZUxlbmd0aDtpZihoPT09dm9pZCAwKXtpZihrciVhfHwoRz1rci14LEc8MCkpdGhyb3cgcmEodGEpfWVsc2UgaWYoRz1jZChoKSphLEcreD5rcil0aHJvdyByYSh0YSk7c3I9Ry9hfWVsc2UgcmV0dXJuIGVhKGMpP2ZpKHUsYyk6Sm8odGksdSxjKTtmb3IoYmQoZCx7YnVmZmVyOkQsYnl0ZU9mZnNldDp4LGJ5dGVMZW5ndGg6RyxsZW5ndGg6c3IsdmlldzpuZXcgRWQoRCl9KTtFPHNyOyl3KGQsRSsrKX0pLEFlJiZBZSh1LHVpKSxmPXUucHJvdG90eXBlPWRkKExyKSksZi5jb25zdHJ1Y3RvciE9PXUmJlNyKGYsImNvbnN0cnVjdG9yIix1KSxTcihmLG1kLHUpLHZpJiZTcihmLHZpLG4pLHNbbl09dSxIbyh7Z2xvYmFsOiEwLGZvcmNlZDp1IT12LHNoYW06IVRlfSxzKSxiZSBpbiB1fHxTcih1LGJlLGEpLGJlIGluIGZ8fFNyKGYsYmUsYSksQWQobil9KTpici5leHBvcnRzPWZ1bmN0aW9uKCl7fTt2YXIgUmQ9YnIuZXhwb3J0cztSZCgiRmxvYXQzMiIsZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHQsYSxuKXtyZXR1cm4gcih0aGlzLHQsYSxuKX19KTt2YXIgUGQ9eixhYT1GcixfZD1CLENkPU1hdGgubWluLHhkPVtdLmNvcHlXaXRoaW58fGZ1bmN0aW9uKGUsdCl7dmFyIGE9UGQodGhpcyksbj1fZChhKSxvPWFhKGUsbiksaT1hYSh0LG4pLHY9YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAsdT1DZCgodj09PXZvaWQgMD9uOmFhKHYsbikpLWksbi1vKSxmPTE7Zm9yKGk8byYmbzxpK3UmJihmPS0xLGkrPXUtMSxvKz11LTEpO3UtLSA+MDspaSBpbiBhP2Fbb109YVtpXTpkZWxldGUgYVtvXSxvKz1mLGkrPWY7cmV0dXJuIGF9LE5kPVQscGk9JCxGZD14ZCxNZD1OZChGZCksamQ9cGkuYVR5cGVkQXJyYXksQmQ9cGkuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtCZCgiY29weVdpdGhpbiIsZnVuY3Rpb24oZSx0KXtyZXR1cm4gTWQoamQodGhpcyksZSx0LGFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwKX0pO3ZhciBkaT0kLFVkPXJyLmV2ZXJ5LFZkPWRpLmFUeXBlZEFycmF5LERkPWRpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7RGQoImV2ZXJ5IixmdW5jdGlvbihlKXtyZXR1cm4gVWQoVmQodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgJGk9JCxHZD1MLExkPW1uLFlkPSRpLmFUeXBlZEFycmF5LGtkPSRpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7a2QoImZpbGwiLGZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIEdkKExkLFlkKHRoaXMpLGUsdD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsdD4yP2FyZ3VtZW50c1syXTp2b2lkIDApfSk7dmFyIEtkPUIsV2Q9ZnVuY3Rpb24ocixlKXtmb3IodmFyIHQ9MCxhPUtkKGUpLG49bmV3IHIoYSk7YT50OyluW3RdPWVbdCsrXTtyZXR1cm4gbn0sZ2k9dHIsemQ9WW8scWQ9SSxIZD1xZCgic3BlY2llcyIpLFhkPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9Z2kocikuY29uc3RydWN0b3IsYTtyZXR1cm4gdD09PXZvaWQgMHx8KGE9Z2kodClbSGRdKT09bnVsbD9lOnpkKGEpfSxoaT0kLEpkPVhkLFFkPWhpLlRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SLFpkPWhpLmFUeXBlZEFycmF5Q29uc3RydWN0b3IsSWU9ZnVuY3Rpb24ocil7cmV0dXJuIFpkKEpkKHIscltRZF0pKX0sciQ9V2QsZSQ9SWUsdCQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4gciQoZSQociksZSl9LEFpPSQsYSQ9cnIuZmlsdGVyLG4kPXQkLG8kPUFpLmFUeXBlZEFycmF5LGkkPUFpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7aSQoImZpbHRlciIsZnVuY3Rpb24oZSl7dmFyIHQ9YSQobyQodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCk7cmV0dXJuIG4kKHRoaXMsdCl9KTt2YXIgVGk9JCx2JD1yci5maW5kLHUkPVRpLmFUeXBlZEFycmF5LGYkPVRpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7ZiQoImZpbmQiLGZ1bmN0aW9uKGUpe3JldHVybiB2JCh1JCh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBiaT0kLHMkPXJyLmZpbmRJbmRleCxsJD1iaS5hVHlwZWRBcnJheSxjJD1iaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO2MkKCJmaW5kSW5kZXgiLGZ1bmN0aW9uKGUpe3JldHVybiBzJChsJCh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBPaT0kLHkkPXJyLmZvckVhY2gscCQ9T2kuYVR5cGVkQXJyYXksZCQ9T2kuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtkJCgiZm9yRWFjaCIsZnVuY3Rpb24oZSl7eSQocCQodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgSWk9JCwkJD1mdC5pbmNsdWRlcyxnJD1JaS5hVHlwZWRBcnJheSxoJD1JaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO2gkKCJpbmNsdWRlcyIsZnVuY3Rpb24oZSl7cmV0dXJuICQkKGckKHRoaXMpLGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfSk7dmFyIFNpPSQsQSQ9ZnQuaW5kZXhPZixUJD1TaS5hVHlwZWRBcnJheSxiJD1TaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO2IkKCJpbmRleE9mIixmdW5jdGlvbihlKXtyZXR1cm4gQSQoVCQodGhpcyksZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9KTt2YXIgTyQ9bCxJJD1iLG5hPVQsRWk9JCxvYT1QeSxTJD1JLGlhPVMkKCJpdGVyYXRvciIpLG1pPU8kLlVpbnQ4QXJyYXksRSQ9bmEob2EudmFsdWVzKSxtJD1uYShvYS5rZXlzKSx3JD1uYShvYS5lbnRyaWVzKSx2YT1FaS5hVHlwZWRBcnJheSxTZT1FaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kLEVyPW1pJiZtaS5wcm90b3R5cGUsRWU9IUkkKGZ1bmN0aW9uKCl7RXJbaWFdLmNhbGwoWzFdKX0pLHdpPSEhRXImJkVyLnZhbHVlcyYmRXJbaWFdPT09RXIudmFsdWVzJiZFci52YWx1ZXMubmFtZT09PSJ2YWx1ZXMiLFJpPWZ1bmN0aW9uKCl7cmV0dXJuIEUkKHZhKHRoaXMpKX07U2UoImVudHJpZXMiLGZ1bmN0aW9uKCl7cmV0dXJuIHckKHZhKHRoaXMpKX0sRWUpLFNlKCJrZXlzIixmdW5jdGlvbigpe3JldHVybiBtJCh2YSh0aGlzKSl9LEVlKSxTZSgidmFsdWVzIixSaSxFZXx8IXdpLHtuYW1lOiJ2YWx1ZXMifSksU2UoaWEsUmksRWV8fCF3aSx7bmFtZToidmFsdWVzIn0pO3ZhciBQaT0kLFIkPVQsUCQ9UGkuYVR5cGVkQXJyYXksXyQ9UGkuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxDJD1SJChbXS5qb2luKTtfJCgiam9pbiIsZnVuY3Rpb24oZSl7cmV0dXJuIEMkKFAkKHRoaXMpLGUpfSk7dmFyIHgkPVdyLF9pPUZ1bmN0aW9uLnByb3RvdHlwZSxDaT1faS5hcHBseSx4aT1faS5jYWxsLHVhPXR5cGVvZiBSZWZsZWN0PT0ib2JqZWN0IiYmUmVmbGVjdC5hcHBseXx8KHgkP3hpLmJpbmQoQ2kpOmZ1bmN0aW9uKCl7cmV0dXJuIHhpLmFwcGx5KENpLGFyZ3VtZW50cyl9KSxOJD1iLEYkPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9W11bcl07cmV0dXJuISF0JiZOJChmdW5jdGlvbigpe3QuY2FsbChudWxsLGV8fGZ1bmN0aW9uKCl7cmV0dXJuIDF9LDEpfSl9LE0kPXVhLGokPWRyLEIkPSRyLFUkPUIsViQ9RiQsRCQ9TWF0aC5taW4sZmE9W10ubGFzdEluZGV4T2YsTmk9ISFmYSYmMS9bMV0ubGFzdEluZGV4T2YoMSwtMCk8MCxHJD1WJCgibGFzdEluZGV4T2YiKSxMJD1OaXx8IUckLFkkPUwkP2Z1bmN0aW9uKGUpe2lmKE5pKXJldHVybiBNJChmYSx0aGlzLGFyZ3VtZW50cyl8fDA7dmFyIHQ9aiQodGhpcyksYT1VJCh0KSxuPWEtMTtmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYobj1EJChuLEIkKGFyZ3VtZW50c1sxXSkpKSxuPDAmJihuPWErbik7bj49MDtuLS0paWYobiBpbiB0JiZ0W25dPT09ZSlyZXR1cm4gbnx8MDtyZXR1cm4tMX06ZmEsRmk9JCxrJD11YSxLJD1ZJCxXJD1GaS5hVHlwZWRBcnJheSx6JD1GaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO3okKCJsYXN0SW5kZXhPZiIsZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gayQoSyQsVyQodGhpcyksdD4xP1tlLGFyZ3VtZW50c1sxXV06W2VdKX0pO3ZhciBNaT0kLHEkPXJyLm1hcCxIJD1JZSxYJD1NaS5hVHlwZWRBcnJheSxKJD1NaS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO0okKCJtYXAiLGZ1bmN0aW9uKGUpe3JldHVybiBxJChYJCh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGZ1bmN0aW9uKHQsYSl7cmV0dXJuIG5ldyhIJCh0KSkoYSl9KX0pO3ZhciBRJD1sLFokPVJyLHJnPXosZWc9dXQsdGc9QixhZz1RJC5UeXBlRXJyb3Isamk9ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKGUsdCxhLG4pe1okKHQpO3ZhciBvPXJnKGUpLGk9ZWcobyksdj10ZyhvKSx1PXI/di0xOjAsZj1yPy0xOjE7aWYoYTwyKWZvcig7Oyl7aWYodSBpbiBpKXtuPWlbdV0sdSs9ZjticmVha31pZih1Kz1mLHI/dTwwOnY8PXUpdGhyb3cgYWcoIlJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUiKX1mb3IoO3I/dT49MDp2PnU7dSs9Zil1IGluIGkmJihuPXQobixpW3VdLHUsbykpO3JldHVybiBufX0sQmk9e2xlZnQ6amkoITEpLHJpZ2h0OmppKCEwKX0sVWk9JCxuZz1CaS5sZWZ0LG9nPVVpLmFUeXBlZEFycmF5LGlnPVVpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7aWcoInJlZHVjZSIsZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gbmcob2codGhpcyksZSx0LHQ+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBWaT0kLHZnPUJpLnJpZ2h0LHVnPVZpLmFUeXBlZEFycmF5LGZnPVZpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7ZmcoInJlZHVjZVJpZ2h0IixmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoO3JldHVybiB2Zyh1Zyh0aGlzKSxlLHQsdD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfSk7dmFyIERpPSQsc2c9RGkuYVR5cGVkQXJyYXksbGc9RGkuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxjZz1NYXRoLmZsb29yO2xnKCJyZXZlcnNlIixmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9c2coZSkubGVuZ3RoLGE9Y2codC8yKSxuPTAsbztuPGE7KW89ZVtuXSxlW24rK109ZVstLXRdLGVbdF09bztyZXR1cm4gZX0pO3ZhciBHaT1sLExpPUwsc2E9JCx5Zz1CLHBnPU1vLGRnPXosWWk9YiwkZz1HaS5SYW5nZUVycm9yLGxhPUdpLkludDhBcnJheSxraT1sYSYmbGEucHJvdG90eXBlLEtpPWtpJiZraS5zZXQsZ2c9c2EuYVR5cGVkQXJyYXksaGc9c2EuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxjYT0hWWkoZnVuY3Rpb24oKXt2YXIgcj1uZXcgVWludDhDbGFtcGVkQXJyYXkoMik7cmV0dXJuIExpKEtpLHIse2xlbmd0aDoxLDA6M30sMSksclsxXSE9PTN9KSxBZz1jYSYmc2EuTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyYmWWkoZnVuY3Rpb24oKXt2YXIgcj1uZXcgbGEoMik7cmV0dXJuIHIuc2V0KDEpLHIuc2V0KCIyIiwxKSxyWzBdIT09MHx8clsxXSE9PTJ9KTtoZygic2V0IixmdW5jdGlvbihlKXtnZyh0aGlzKTt2YXIgdD1wZyhhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwxKSxhPWRnKGUpO2lmKGNhKXJldHVybiBMaShLaSx0aGlzLGEsdCk7dmFyIG49dGhpcy5sZW5ndGgsbz15ZyhhKSxpPTA7aWYobyt0Pm4pdGhyb3cgJGcoIldyb25nIGxlbmd0aCIpO2Zvcig7aTxvOyl0aGlzW3QraV09YVtpKytdfSwhY2F8fEFnKTt2YXIgVGc9VCxXaT1UZyhbXS5zbGljZSksemk9JCxiZz1JZSxPZz1iLElnPVdpLFNnPXppLmFUeXBlZEFycmF5LEVnPXppLmV4cG9ydFR5cGVkQXJyYXlNZXRob2QsbWc9T2coZnVuY3Rpb24oKXtuZXcgSW50OEFycmF5KDEpLnNsaWNlKCl9KTtFZygic2xpY2UiLGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBhPUlnKFNnKHRoaXMpLGUsdCksbj1iZyh0aGlzKSxvPTAsaT1hLmxlbmd0aCx2PW5ldyBuKGkpO2k+bzspdltvXT1hW28rK107cmV0dXJuIHZ9LG1nKTt2YXIgcWk9JCx3Zz1yci5zb21lLFJnPXFpLmFUeXBlZEFycmF5LFBnPXFpLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7UGcoInNvbWUiLGZ1bmN0aW9uKGUpe3JldHVybiB3ZyhSZyh0aGlzKSxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX0pO3ZhciBIaT1SbixfZz1NYXRoLmZsb29yLHlhPWZ1bmN0aW9uKHIsZSl7dmFyIHQ9ci5sZW5ndGgsYT1fZyh0LzIpO3JldHVybiB0PDg/Q2cocixlKTp4ZyhyLHlhKEhpKHIsMCxhKSxlKSx5YShIaShyLGEpLGUpLGUpfSxDZz1mdW5jdGlvbihyLGUpe2Zvcih2YXIgdD1yLmxlbmd0aCxhPTEsbixvO2E8dDspe2ZvcihvPWEsbj1yW2FdO28mJmUocltvLTFdLG4pPjA7KXJbb109clstLW9dO28hPT1hKysmJihyW29dPW4pfXJldHVybiByfSx4Zz1mdW5jdGlvbihyLGUsdCxhKXtmb3IodmFyIG49ZS5sZW5ndGgsbz10Lmxlbmd0aCxpPTAsdj0wO2k8bnx8djxvOylyW2krdl09aTxuJiZ2PG8/YShlW2ldLHRbdl0pPD0wP2VbaSsrXTp0W3YrK106aTxuP2VbaSsrXTp0W3YrK107cmV0dXJuIHJ9LE5nPXlhLEZnPXpyLFhpPUZnLm1hdGNoKC9maXJlZm94XC8oXGQrKS9pKSxNZz0hIVhpJiYrWGlbMV0samc9enIsQmc9L01TSUV8VHJpZGVudC8udGVzdChqZyksVWc9enIsSmk9VWcubWF0Y2goL0FwcGxlV2ViS2l0XC8oXGQrKVwuLyksVmc9ISFKaSYmK0ppWzFdLFFpPWwsRGc9VCxwYT1iLEdnPVJyLExnPU5nLFppPSQscnY9TWcsWWc9QmcsZXY9d2EsdHY9Vmcsa2c9UWkuQXJyYXksS2c9WmkuYVR5cGVkQXJyYXksV2c9WmkuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxZcj1RaS5VaW50MTZBcnJheSxtcj1ZciYmRGcoWXIucHJvdG90eXBlLnNvcnQpLHpnPSEhbXImJiEocGEoZnVuY3Rpb24oKXttcihuZXcgWXIoMiksbnVsbCl9KSYmcGEoZnVuY3Rpb24oKXttcihuZXcgWXIoMikse30pfSkpLGF2PSEhbXImJiFwYShmdW5jdGlvbigpe2lmKGV2KXJldHVybiBldjw3NDtpZihydilyZXR1cm4gcnY8Njc7aWYoWWcpcmV0dXJuITA7aWYodHYpcmV0dXJuIHR2PDYwMjt2YXIgcj1uZXcgWXIoNTE2KSxlPWtnKDUxNiksdCxhO2Zvcih0PTA7dDw1MTY7dCsrKWE9dCU0LHJbdF09NTE1LXQsZVt0XT10LTIqYSszO2ZvcihtcihyLGZ1bmN0aW9uKG4sbyl7cmV0dXJuKG4vNHwwKS0oby80fDApfSksdD0wO3Q8NTE2O3QrKylpZihyW3RdIT09ZVt0XSlyZXR1cm4hMH0pLHFnPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiByIT09dm9pZCAwPytyKGUsdCl8fDA6dCE9PXQ/LTE6ZSE9PWU/MTplPT09MCYmdD09PTA/MS9lPjAmJjEvdDwwPzE6LTE6ZT50fX07V2coInNvcnQiLGZ1bmN0aW9uKGUpe3JldHVybiBlIT09dm9pZCAwJiZHZyhlKSxhdj9tcih0aGlzLGUpOkxnKEtnKHRoaXMpLHFnKGUpKX0sIWF2fHx6Zyk7dmFyIG52PSQsSGc9TXIsb3Y9RnIsWGc9SWUsSmc9bnYuYVR5cGVkQXJyYXksUWc9bnYuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtRZygic3ViYXJyYXkiLGZ1bmN0aW9uKGUsdCl7dmFyIGE9SmcodGhpcyksbj1hLmxlbmd0aCxvPW92KGUsbiksaT1YZyhhKTtyZXR1cm4gbmV3IGkoYS5idWZmZXIsYS5ieXRlT2Zmc2V0K28qYS5CWVRFU19QRVJfRUxFTUVOVCxIZygodD09PXZvaWQgMD9uOm92KHQsbikpLW8pKX0pO3ZhciBaZz1sLHJoPXVhLGl2PSQsZGE9Yix2dj1XaSxtZT1aZy5JbnQ4QXJyYXksdXY9aXYuYVR5cGVkQXJyYXksZWg9aXYuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxmdj1bXS50b0xvY2FsZVN0cmluZyx0aD0hIW1lJiZkYShmdW5jdGlvbigpe2Z2LmNhbGwobmV3IG1lKDEpKX0pLGFoPWRhKGZ1bmN0aW9uKCl7cmV0dXJuWzEsMl0udG9Mb2NhbGVTdHJpbmcoKSE9bmV3IG1lKFsxLDJdKS50b0xvY2FsZVN0cmluZygpfSl8fCFkYShmdW5jdGlvbigpe21lLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLDJdKX0pO2VoKCJ0b0xvY2FsZVN0cmluZyIsZnVuY3Rpb24oKXtyZXR1cm4gcmgoZnYsdGg/dnYodXYodGhpcykpOnV2KHRoaXMpLHZ2KGFyZ3VtZW50cykpfSxhaCk7dmFyIG5oPSQuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxvaD1iLGloPWwsdmg9VCxzdj1paC5VaW50OEFycmF5LHVoPXN2JiZzdi5wcm90b3R5cGV8fHt9LHdlPVtdLnRvU3RyaW5nLGZoPXZoKFtdLmpvaW4pO29oKGZ1bmN0aW9uKCl7d2UuY2FsbCh7fSl9KSYmKHdlPWZ1bmN0aW9uKCl7cmV0dXJuIGZoKHRoaXMpfSk7dmFyIHNoPXVoLnRvU3RyaW5nIT13ZTtuaCgidG9TdHJpbmciLHdlLHNoKTt2YXIgbGg9YnIuZXhwb3J0cztsaCgiVWludDgiLGZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbih0LGEsbil7cmV0dXJuIHIodGhpcyx0LGEsbil9fSk7dmFyIGNoPWJyLmV4cG9ydHM7Y2goIlVpbnQxNiIsZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHQsYSxuKXtyZXR1cm4gcih0aGlzLHQsYSxuKX19KTt2YXIgeWg9YnIuZXhwb3J0czt5aCgiVWludDMyIixmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCxhLG4pe3JldHVybiByKHRoaXMsdCxhLG4pfX0pO2Z1bmN0aW9uIHBoKHIpe2Zvcih2YXIgZT1yLmRhdGEuYnVmZmVyLHQ9ci5kYXRhLm51bVBvaW50cyxhPXIuZGF0YS5wb2ludFNpemUsbj1yLmRhdGEucG9pbnRGb3JtYXRJRCxvPXIuZGF0YS5zY2FsZSxpPXIuZGF0YS5vZmZzZXQsdj1uZXcgRGF0YVZpZXcoZSksdT17bWluOltOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLE51bWJlci5QT1NJVElWRV9JTkZJTklUWV0sbWF4OltOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLE51bWJlci5ORUdBVElWRV9JTkZJTklUWV19LGY9WzAsMCwwXSxzPW5ldyBBcnJheUJ1ZmZlcih0KjMqNCkscD1uZXcgQXJyYXlCdWZmZXIodCo0KSxnPW5ldyBBcnJheUJ1ZmZlcih0KjQpLHc9bmV3IEFycmF5QnVmZmVyKHQpLGQ9bmV3IEFycmF5QnVmZmVyKHQpLGM9bmV3IEFycmF5QnVmZmVyKHQpLHk9bmV3IEFycmF5QnVmZmVyKHQqMiksaD1uZXcgRmxvYXQzMkFycmF5KHMpLEU9bmV3IFVpbnQ4QXJyYXkocCkseD1uZXcgRmxvYXQzMkFycmF5KGcpLEQ9bmV3IFVpbnQ4QXJyYXkodyksRz1uZXcgVWludDhBcnJheShkKSxzcj1uZXcgVWludDhBcnJheShjKSxrcj1uZXcgVWludDE2QXJyYXkoeSksQT0wO0E8dDtBKyspe3ZhciBkaD12LmdldEludDMyKEEqYSswLCEwKSwkaD12LmdldEludDMyKEEqYSs0LCEwKSxnaD12LmdldEludDMyKEEqYSs4LCEwKSxSZT1kaCpvWzBdK2lbMF0tci5kYXRhLm1pbnNbMF0sUGU9JGgqb1sxXStpWzFdLXIuZGF0YS5taW5zWzFdLF9lPWdoKm9bMl0raVsyXS1yLmRhdGEubWluc1syXTtoWzMqQSswXT1SZSxoWzMqQSsxXT1QZSxoWzMqQSsyXT1fZSxmWzBdKz1SZS90LGZbMV0rPVBlL3QsZlsyXSs9X2UvdCx1Lm1pblswXT1NYXRoLm1pbih1Lm1pblswXSxSZSksdS5taW5bMV09TWF0aC5taW4odS5taW5bMV0sUGUpLHUubWluWzJdPU1hdGgubWluKHUubWluWzJdLF9lKSx1Lm1heFswXT1NYXRoLm1heCh1Lm1heFswXSxSZSksdS5tYXhbMV09TWF0aC5tYXgodS5tYXhbMV0sUGUpLHUubWF4WzJdPU1hdGgubWF4KHUubWF4WzJdLF9lKTt2YXIgaGg9di5nZXRVaW50MTYoQSphKzEyLCEwKTt4W0FdPWhoO3ZhciBsdj12LmdldFVpbnQ4KEEqYSsxNCksQWg9bHYmNyxUaD0obHYmNTYpPj4zO0dbQV09QWgsc3JbQV09VGg7dmFyIGJoPXYuZ2V0VWludDgoQSphKzE1KTtEW0FdPWJoO3ZhciBPaD12LmdldFVpbnQxNihBKmErMTgsITApO2lmKGtyW0FdPU9oLG49PT0yKXt2YXIgSWg9di5nZXRVaW50MTYoQSphKzIwLCEwKS8yNTYsU2g9di5nZXRVaW50MTYoQSphKzIyLCEwKS8yNTYsRWg9di5nZXRVaW50MTYoQSphKzI0LCEwKS8yNTY7RVs0KkErMF09SWgsRVs0KkErMV09U2gsRVs0KkErMl09RWgsRVs0KkErM109MjU1fX1mb3IodmFyIGN2PW5ldyBBcnJheUJ1ZmZlcih0KjQpLG1oPW5ldyBVaW50MzJBcnJheShjdiksQ2U9MDtDZTx0O0NlKyspbWhbQ2VdPUNlO3ZhciBXPXttZWFuOmYscG9zaXRpb246cyxjb2xvcjpwLGludGVuc2l0eTpnLGNsYXNzaWZpY2F0aW9uOncscmV0dXJuTnVtYmVyOmQsbnVtYmVyT2ZSZXR1cm5zOmMscG9pbnRTb3VyY2VJRDp5LHRpZ2h0Qm91bmRpbmdCb3g6dSxpbmRpY2VzOmN2fSx3aD1bVy5wb3NpdGlvbixXLmNvbG9yLFcuaW50ZW5zaXR5LFcuY2xhc3NpZmljYXRpb24sVy5yZXR1cm5OdW1iZXIsVy5udW1iZXJPZlJldHVybnMsVy5wb2ludFNvdXJjZUlELFcuaW5kaWNlc107cG9zdE1lc3NhZ2UoVyx3aCl9b25tZXNzYWdlPXBofSkoKTsKCg==",null,!1);class Hg extends Ns{constructor(t,e=new E(16776960)){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array([t.min.x,t.min.y,t.min.z,t.max.x,t.min.y,t.min.z,t.max.x,t.min.y,t.max.z,t.min.x,t.min.y,t.max.z,t.min.x,t.max.y,t.min.z,t.max.x,t.max.y,t.min.z,t.max.x,t.max.y,t.max.z,t.min.x,t.max.y,t.max.z]),r=new Qt;r.setIndex(new re(n,1)),r.setAttribute("position",new re(i,3));const o=new Cn({color:e});super(r,o)}}let Xe=typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:typeof Xo<"u"?Xo:{};Xe.requestAnimationFrame,Xe.cancelAnimationFrame,function(){if(typeof process<"u"&&process.hrtime!==void 0&&(!process.versions||process.versions.electron===void 0))return function(){const s=process.hrtime();return s[0]*1e3+s[1]/1e6};if(Xe.performance!==void 0&&Xe.performance.now!==void 0)return Xe.performance.now.bind(Xe.performance);{const s=Xe.performance&&Xe.performance.timing&&Xe.performance.timing.navigationStart?Xe.performance.timing.navigationStart:Date.now();return function(){return Date.now()-s}}}();var Rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vg={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(Rg,function(){var e=function(){function n(p){return o.appendChild(p.dom),p}function i(p){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===p?"block":"none";r=p}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,d=n(new e.Panel("FPS","#0ff","#002")),h=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-a,200),p>l+1e3&&(d.update(1e3*c/(p-l),100),l=p,c=0,u)){var g=performance.memory;u.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),d=80*c,h=48*c,u=3*c,p=2*c,g=3*c,y=15*c,S=74*c,m=30*c,f=document.createElement("canvas");f.width=d,f.height=h,f.style.cssText="width:80px;height:48px";var L=f.getContext("2d");return L.font="bold "+9*c+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=r,L.fillRect(0,0,d,h),L.fillStyle=i,L.fillText(n,u,p),L.fillRect(g,y,S,m),L.fillStyle=r,L.globalAlpha=.9,L.fillRect(g,y,S,m),{dom:f,update:function(w,v){o=Math.min(o,w),a=Math.max(a,w),L.fillStyle=r,L.globalAlpha=1,L.fillRect(0,0,d,y),L.fillStyle=i,L.fillText(l(w)+" "+n+" ("+l(o)+"-"+l(a)+")",u,p),L.drawImage(f,g+c,y,S-c,m,g,y,S-c,m),L.fillRect(g+S-c,y,c,m),L.fillStyle=r,L.globalAlpha=.9,L.fillRect(g+S-c,y,c,l((1-w/v)*m))}}},e})})(Vg);var Gc=`// 
// adapted from the EDL shader code from Christian Boucheny in cloud compare:
// https://github.com/cloudcompare/trunk/tree/master/plugins/qEDL/shaders/EDL
//
#ifndef IS_WEBGL_2
	#extension GL_EXT_frag_depth : enable
#endif

uniform float screenWidth;
uniform float screenHeight;
uniform vec2 neighbours[NEIGHBOUR_COUNT];
uniform float edlStrength;
uniform float radius;
uniform float opacity;

uniform float uNear;
uniform float uFar;

uniform mat4 uProj;

uniform sampler2D uEDLColor;
uniform sampler2D uEDLDepth;

varying vec2 vUv;

float response(float depth){
	vec2 uvRadius = radius / vec2(screenWidth, screenHeight);
	
	float sum = 0.0;
	
	for(int i = 0; i < NEIGHBOUR_COUNT; i++){
		vec2 uvNeighbor = vUv + uvRadius * neighbours[i];
		
		float neighbourDepth = texture2D(uEDLColor, uvNeighbor).a;
		neighbourDepth = (neighbourDepth == 1.0) ? 0.0 : neighbourDepth;

		if(neighbourDepth != 0.0){
			if(depth == 0.0){
				sum += 100.0;
			}else{
				sum += max(0.0, depth - neighbourDepth);
			}
		}
	}
	
	return sum / float(NEIGHBOUR_COUNT);
}

void main(){
	vec4 cEDL = texture2D(uEDLColor, vUv);
	
	float depth = cEDL.a;
	depth = (depth == 1.0) ? 0.0 : depth;
	float res = response(depth);
	float shade = exp(-res * 300.0 * edlStrength);

	gl_FragColor = vec4(cEDL.rgb * shade, opacity);

	float dl = pow(2.0, depth);

	vec4 dp = uProj * vec4(0.0, 0.0, -dl, 1.0);
	float pz = dp.z / dp.w;
	float fragDepth = (pz + 1.0) / 2.0;

	gl_FragDepthEXT = fragDepth;

	if(depth == 0.0){
		discard;
	}
}`,Pc=`varying vec2 vUv;

void main() {
	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
	gl_Position = projectionMatrix * mvPosition;
}`;class Ug extends Ve{constructor(){super();this.neighbourCnt=0,this.isWebGL2=!1;const t={screenWidth:{type:"f",value:1024},screenHeight:{type:"f",value:768},edlStrength:{type:"f",value:1},uNear:{type:"f",value:1},uFar:{type:"f",value:1},radius:{type:"f",value:1},neighbours:{type:"2fv",value:[]},uEDLColor:{type:"t",value:null},uEDLDepth:{type:"t",value:null},opacity:{type:"f",value:1},uProj:{type:"Matrix4fv",value:[]}};this.setValues({uniforms:t,vertexShader:this.getDefines()+Pc,fragmentShader:this.getDefines()+Gc,lights:!1}),this.neighbourCount=8}getDefines(){let t="";return t+="#define NEIGHBOUR_COUNT "+this.neighbourCnt+`
`,this.isWebGL2&&(t+=`#define IS_WEBGL_2
`),t}setIsWebGL2(t){this.isWebGL2=t,this.updateShaderSource()}updateShaderSource(){const t=this.getDefines()+Pc,e=this.getDefines()+Gc;this.setValues({vertexShader:t,fragmentShader:e}),this.uniforms.neighbours.value=this.neighbours,this.needsUpdate=!0}get neighbourCount(){return this.neighbourCnt}set neighbourCount(t){if(this.neighbourCnt!==t){this.neighbourCnt=t,this.neighbours=new Float32Array(this.neighbourCnt*2);for(let e=0;e<this.neighbourCount;e++)this.neighbours[2*e+0]=Math.cos(2*e*Math.PI/this.neighbourCnt),this.neighbours[2*e+1]=Math.sin(2*e*Math.PI/this.neighbourCnt);this.updateShaderSource()}}}wi.CIRCLE,Xn.FIXED,ue.HEIGHT,0/36,new E(54/255,83/255,121/255),1/36,new E(54/255,94/255,123/255),2/36,new E(53/255,106/255,124/255),3/36,new E(53/255,119/255,126/255),4/36,new E(52/255,128/255,124/255),5/36,new E(52/255,129/255,113/255),6/36,new E(51/255,131/255,102/255),7/36,new E(50/255,133/255,90/255),8/36,new E(50/255,134/255,77/255),9/36,new E(49/255,136/255,64/255),10/36,new E(48/255,138/255,50/255),11/36,new E(61/255,139/255,48/255),12/36,new E(75/255,141/255,47/255),13/36,new E(89/255,149/255,47/255),14/36,new E(104/255,158/255,46/255),15/36,new E(121/255,166/255,45/255),16/36,new E(140/255,175/255,43/255),17/36,new E(161/255,183/255,41/255),18/36,new E(185/255,192/255,39/255),19/36,new E(200/255,189/255,36/255),20/36,new E(208/255,177/255,33/255),21/36,new E(217/255,163/255,30/255),22/36,new E(225/255,146/255,26/255),23/36,new E(234/255,127/255,22/255),24/36,new E(242/255,104/255,18/255),25/36,new E(237/255,94/255,16/255),26/36,new E(233/255,84/255,14/255),27/36,new E(228/255,75/255,13/255),28/36,new E(224/255,66/255,11/255),29/36,new E(219/255,57/255,10/255),30/36,new E(215/255,48/255,8/255),31/36,new E(211/255,39/255,7/255),32/36,new E(206/255,31/255,5/255),33/36,new E(202/255,23/255,4/255),34/36,new E(197/255,15/255,2/255),35/36,new E(193/255,7/255,1/255),36/36,new E(188/255,0/255,0/255),new rt(.5,.5,.5,1),new rt(1,1,1,1),new rt(177/255,110/255,13/255,1),new rt(43/255,143/255,81/255,1),new rt(39/255,149/255,48/255,1),new rt(60/255,155/255,34/255,1),new rt(188/255,0/255,0/255,1),new rt(158/255,30/255,160/255,1),new rt(166/255,25/255,139/255,1),new rt(52/255,106/255,127/255,1),new rt(49/255,132/255,130/255,1),new rt(182/255,59/255,7/255,1),new rt(171/255,155/255,19/255,1),new rt(166/255,25/255,139/255,1),new rt(129/255,34/255,155/255,1),new rt(182/255,7/255,42/255,1),new rt(158/255,30/255,160/255,1),new rt(46/255,138/255,108/255,1),new rt(158/255,30/255,160/255,1),new rt(188/255,10/255,10/255,1),new rt(188/255,20/255,20/255,1),new rt(188/255,30/255,30/255,1),new rt(188/255,40/255,40/255,1),new rt(188/255,50/255,50/255,1),new rt(188/255,60/255,60/255,1),new rt(188/255,70/255,70/255,1),new rt(188/255,80/255,80/255,1),new rt(188/255,90/255,90/255,1),new rt(188/255,100/255,100/255,1),new rt(188/255,110/255,110/255,1),new rt(188/255,120/255,120/255,1),new rt(188/255,130/255,130/255,1),new rt(.5,.5,.5,1);class Fg extends Kt{constructor(){super();const t=new ie;t.minFilter=$t,t.magFilter=$t;const e=new Hs({map:t,depthTest:!0,depthWrite:!0});this.material=e,this.sprite=new Tl(e),this.add(this.sprite),this.borderThickness=0,this.fontface="Open Sans",this.fontsize=24,this.borderColor={r:255,g:255,b:255,a:1},this.backgroundColor={r:255,g:255,b:255,a:1},this.textColor={r:255,g:255,b:255,a:1},this.text=""}setText(t){this.text!==t&&(this.text=t,this.update())}setTextColor(t){this.textColor=t,this.update()}setBorderColor(t){this.borderColor=t,this.update()}setBackgroundColor(t){this.backgroundColor=t,this.update()}update(){let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return;e.font=this.fontsize+"px "+this.fontface;const i=e.measureText(this.text).width,r=4,o=2*r+i+2*this.borderThickness,a=this.fontsize*1.4+2*this.borderThickness;if(t=document.createElement("canvas"),e=t.getContext("2d"),!e)return;e.canvas.width=o,e.canvas.height=a,e.font=this.fontsize+"px "+this.fontface,e.fillStyle="rgba("+this.backgroundColor.r+","+this.backgroundColor.g+","+this.backgroundColor.b+","+this.backgroundColor.a+")",e.strokeStyle="rgba("+this.borderColor.r+","+this.borderColor.g+","+this.borderColor.b+","+this.borderColor.a+")",e.lineWidth=this.borderThickness,this.roundRect(e,this.borderThickness/2,this.borderThickness/2,i+this.borderThickness+2*r,this.fontsize*1.4+this.borderThickness,0),e.strokeStyle="rgba(255, 255, 255, 1.0)",e.strokeText(this.text,this.borderThickness+r,this.fontsize+this.borderThickness),e.fillStyle="rgba("+this.textColor.r+","+this.textColor.g+","+this.textColor.b+","+this.textColor.a+")",e.fillText(this.text,this.borderThickness+r,this.fontsize+this.borderThickness);const l=new ie(t);l.minFilter=de,l.magFilter=de,l.needsUpdate=!0,this.sprite.material.map=l,this.sprite.scale.set(o*.01,a*.01,1)}roundRect(t,e,n,i,r,o){t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath(),t.fill(),t.stroke()}}class Ag extends Be{constructor(t,e){super();this.object=t,this.domElement=e!==void 0?e:document,this.enabled=!0,this.target=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:dr.LEFT,ZOOM:dr.MIDDLE,PAN:dr.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=a.NONE},this.update=function(){const F=new M,_=new Se().setFromUnitVectors(t.up,new M(0,1,0)),x=_.clone().invert(),A=new M,B=new Se;return function(){const lt=n.object.position;return F.copy(lt).sub(n.target),F.applyQuaternion(_),d.setFromVector3(F),n.autoRotate&&l===a.NONE&&k(Q()),d.theta+=h.theta,d.phi+=h.phi,d.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=u,d.radius=Math.max(n.minDistance,Math.min(n.maxDistance,d.radius)),n.target.add(p),F.setFromSpherical(d),F.applyQuaternion(x),lt.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor):h.set(0,0,0),u=1,p.set(0,0,0),g||A.distanceToSquared(n.object.position)>c||8*(1-B.dot(n.object.quaternion))>c?(n.dispatchEvent(i),A.copy(n.object.position),B.copy(n.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){n.domElement&&(n.domElement.removeEventListener("contextmenu",Gt,!1),n.domElement.removeEventListener("mousedown",Xt,!1),n.domElement.removeEventListener("wheel",tt,!1),n.domElement.removeEventListener("touchstart",at,!1),n.domElement.removeEventListener("touchend",xt,!1),n.domElement.removeEventListener("touchmove",_t,!1)),document.removeEventListener("mousemove",U,!1),document.removeEventListener("mouseup",$,!1),window.removeEventListener("keydown",ft,!1)};const n=this,i={type:"change"},r={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5};let l=a.NONE;const c=1e-6,d=new yc,h=new yc;let u=1;const p=new M;let g=!1;const y=new q,S=new q,m=new q,f=new q,L=new q,w=new q,v=new q,G=new q,P=new q;function Q(){return 2*Math.PI/60/60*n.autoRotateSpeed}function ct(){return Math.pow(.95,n.zoomSpeed)}function k(F){h.theta-=F}function b(F){h.phi-=F}const I=function(){const F=new M;return function(x,A){F.setFromMatrixColumn(A,0),F.multiplyScalar(-x),p.add(F)}}(),V=function(){const F=new M;return function(x,A){F.setFromMatrixColumn(A,1),F.multiplyScalar(x),p.add(F)}}(),C=function(){const F=new M;return function(x,A){const B=n.domElement===document?n.domElement.body:n.domElement;if(Object.getPrototypeOf(n.object).isPerspectiveCamera){const st=n.object.position;F.copy(st).sub(n.target);let lt=F.length();lt*=Math.tan(n.object.fov/2*Math.PI/180),I(2*x*lt/B.clientHeight,n.object.matrix),V(2*A*lt/B.clientHeight,n.object.matrix)}else Object.getPrototypeOf(n.object).isOrthographicCamera?(I(x*(n.object.right-n.object.left)/n.object.zoom/B.clientWidth,n.object.matrix),V(A*(n.object.top-n.object.bottom)/n.object.zoom/B.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(F){Object.getPrototypeOf(n.object).isPerspectiveCamera?u/=F:Object.getPrototypeOf(n.object).isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*F)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(F){Object.getPrototypeOf(n.object).isPerspectiveCamera?u*=F:Object.getPrototypeOf(n.object).isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/F)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(F){y.set(F.clientX,F.clientY)}function W(F){v.set(F.clientX,F.clientY)}function K(F){f.set(F.clientX,F.clientY)}function nt(F){S.set(F.clientX,F.clientY),m.subVectors(S,y);const _=n.domElement===document?n.domElement.body:n.domElement;!_||(k(2*Math.PI*m.x/_.clientWidth*n.rotateSpeed),b(2*Math.PI*m.y/_.clientHeight*n.rotateSpeed),y.copy(S),n.update())}function j(F){G.set(F.clientX,F.clientY),P.subVectors(G,v),P.y>0?D(ct()):P.y<0&&H(ct()),v.copy(G),n.update()}function it(F){L.set(F.clientX,F.clientY),w.subVectors(L,f),C(w.x,w.y),f.copy(L),n.update()}function ut(F){F.deltaY<0?H(ct()):F.deltaY>0&&D(ct()),n.update()}function At(F){switch(F.keyCode){case n.keys.UP:C(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:C(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:C(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:C(-n.keyPanSpeed,0),n.update();break}}function wt(F){y.set(F.touches[0].pageX,F.touches[0].pageY)}function z(F){const _=F.touches[0].pageX-F.touches[1].pageX,x=F.touches[0].pageY-F.touches[1].pageY,A=Math.sqrt(_*_+x*x);v.set(0,A)}function Dt(F){f.set(F.touches[0].pageX,F.touches[0].pageY)}function Vt(F){S.set(F.touches[0].pageX,F.touches[0].pageY),m.subVectors(S,y);const _=n.domElement===document?n.domElement.body:n.domElement;k(2*Math.PI*m.x/_.clientWidth*n.rotateSpeed),b(2*Math.PI*m.y/_.clientHeight*n.rotateSpeed),y.copy(S),n.update()}function mt(F){const _=F.touches[0].pageX-F.touches[1].pageX,x=F.touches[0].pageY-F.touches[1].pageY,A=Math.sqrt(_*_+x*x);G.set(0,A),P.subVectors(G,v),P.y>0?H(ct()):P.y<0&&D(ct()),v.copy(G),n.update()}function gt(F){L.set(F.touches[0].pageX,F.touches[0].pageY),w.subVectors(L,f),C(w.x,w.y),f.copy(L),n.update()}function Xt(F){if(n.enabled!==!1){if(F.preventDefault(),F.button===n.mouseButtons.ORBIT){if(n.enableRotate===!1)return;N(F),l=a.ROTATE}else if(F.button===n.mouseButtons.ZOOM){if(n.enableZoom===!1)return;W(F),l=a.DOLLY}else if(F.button===n.mouseButtons.PAN){if(n.enablePan===!1)return;K(F),l=a.PAN}l!==a.NONE&&(document.addEventListener("mousemove",U,!1),document.addEventListener("mouseup",$,!1),n.dispatchEvent(r))}}function U(F){if(n.enabled!==!1){if(F.preventDefault(),l===a.ROTATE){if(n.enableRotate===!1)return;nt(F)}else if(l===a.DOLLY){if(n.enableZoom===!1)return;j(F)}else if(l===a.PAN){if(n.enablePan===!1)return;it(F)}}}function $(){n.enabled!==!1&&(document.removeEventListener("mousemove",U,!1),document.removeEventListener("mouseup",$,!1),n.dispatchEvent(o),l=a.NONE)}function tt(F){n.enabled===!1||n.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(F.preventDefault(),F.stopPropagation(),ut(F),n.dispatchEvent(r),n.dispatchEvent(o))}function ft(F){n.enabled===!1||n.enableKeys===!1||n.enablePan===!1||At(F)}function at(F){if(n.enabled!==!1){switch(F.touches.length){case 1:if(n.enableRotate===!1)return;wt(F),l=a.TOUCH_ROTATE;break;case 2:if(n.enableZoom===!1)return;z(F),l=a.TOUCH_DOLLY;break;case 3:if(n.enablePan===!1)return;Dt(F),l=a.TOUCH_PAN;break;default:l=a.NONE}l!==a.NONE&&n.dispatchEvent(r)}}function _t(F){if(n.enabled!==!1)switch(F.preventDefault(),F.stopPropagation(),F.touches.length){case 1:if(n.enableRotate===!1||l!==a.TOUCH_ROTATE)return;Vt(F);break;case 2:if(n.enableZoom===!1||l!==a.TOUCH_DOLLY)return;mt(F);break;case 3:if(n.enablePan===!1||l!==a.TOUCH_PAN)return;gt(F);break;default:l=a.NONE}}function xt(){n.enabled!==!1&&(n.dispatchEvent(o),l=a.NONE)}function Gt(F){F.preventDefault()}n.domElement&&(n.domElement.addEventListener("contextmenu",Gt,!1),n.domElement.addEventListener("mousedown",Xt,!1),n.domElement.addEventListener("wheel",tt,!1),n.domElement.addEventListener("touchstart",at,!1),n.domElement.addEventListener("touchend",xt,!1),n.domElement.addEventListener("touchmove",_t,!1)),window.addEventListener("keydown",ft,!1),this.update()}get center(){return console.warn("OrbitControls: .center has been renamed to .target"),this.target}get noZoom(){return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom}set noZoom(t){console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!t}get noRotate(){return console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate}set noRotate(t){console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!t}get noPan(){return console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan}set noPan(t){console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!t}get noKeys(){return console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys}set noKeys(t){console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!t}get staticMoving(){return console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping}set staticMoving(t){console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!t}get dynamicDampingFactor(){return console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor}set dynamicDampingFactor(t){console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=t}}});export default Gg();

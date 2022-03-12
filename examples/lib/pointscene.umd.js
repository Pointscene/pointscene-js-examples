(function(Xe,Ht){typeof exports=="object"&&typeof module<"u"?Ht(exports):typeof define=="function"&&define.amd?define(["exports"],Ht):(Xe=typeof globalThis<"u"?globalThis:Xe||self,Ht(Xe.Pointscene={}))})(this,function(Xe){"use strict";const Ht="138",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fd=0,Ua=1,Od=2,Va=1,zd=2,ns=3,oi=0,it=1,jn=2,ka=1,en=0,ai=1,Fs=2,Ha=3,Ga=4,Bd=5,li=100,Ud=101,Vd=102,Wa=103,Xa=104,kd=200,Hd=201,Gd=202,Wd=203,ja=204,Za=205,Xd=206,jd=207,Zd=208,Yd=209,qd=210,Jd=0,Qd=1,Kd=2,is=3,$d=4,eu=5,tu=6,nu=7,Os=0,iu=1,su=2,Sn=0,ru=1,ou=2,au=3,lu=4,cu=5,Ya=300,ci=301,hi=302,Yr=303,qr=304,zs=306,Jr=307,Qr=1e3,Gt=1001,Kr=1002,et=1003,qa=1004,Ja=1005,ut=1006,hu=1007,Bs=1008,Zn=1009,du=1010,uu=1011,ss=1012,fu=1013,rs=1014,En=1015,di=1016,pu=1017,mu=1018,ui=1020,gu=1021,vu=1022,yt=1023,yu=1024,_u=1025,Yn=1026,fi=1027,xu=1028,bu=1029,wu=1030,Mu=1031,Su=1033,$r=33776,eo=33777,to=33778,no=33779,Qa=35840,Ka=35841,$a=35842,el=35843,Eu=36196,tl=37492,nl=37496,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,dl=37816,ul=37817,fl=37818,pl=37819,ml=37820,gl=37821,vl=36492,Tu=2200,Lu=2201,Au=2202,Us=2300,Vs=2301,io=2302,pi=2400,mi=2401,ks=2402,so=2500,yl=2501,Cu=0,Tn=3e3,rt=3001,Pu=3200,Ru=3201,gi=0,Du=1,ro=7680,Iu=519,os=35044,Hs=35048,_l="300 es",oo=1035;class tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wt=[];for(let r=0;r<256;r++)wt[r]=(r<16?"0":"")+r.toString(16);const ao=Math.PI/180,lo=180/Math.PI;function nn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toUpperCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function Nu(r,e){return(r%e+e)%e}function co(r,e,t){return(1-t)*r+t*e}function xl(r){return(r&r-1)===0&&r!==0}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class ee{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ee.prototype.isVector2=!0;class _t{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],v=n[8],g=i[0],y=i[3],m=i[6],p=i[1],S=i[4],x=i[7],w=i[2],C=i[5],A=i[8];return s[0]=o*g+a*p+l*w,s[3]=o*y+a*S+l*C,s[6]=o*m+a*x+l*A,s[1]=c*g+h*p+d*w,s[4]=c*y+h*S+d*C,s[7]=c*m+h*x+d*A,s[2]=u*g+f*p+v*w,s[5]=u*y+f*S+v*C,s[8]=u*m+f*x+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,v=t*d+n*u+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}_t.prototype.isMatrix3=!0;function bl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function as(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function uo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class D{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Nu(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=uo(s,i,e+1/3),this.g=uo(s,i,e),this.b=uo(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=wl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Gs);const n=co(Wt.h,Gs.h,t),i=co(Wt.s,Gs.s,t),s=co(Wt.l,Gs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}D.NAMES=wl,D.prototype.isColor=!0,D.prototype.r=1,D.prototype.g=1,D.prototype.b=1;let yi;class qn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=as("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ml{constructor(e=null){this.uuid=nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(po(i[o].image)):s.push(po(i[o]))}else s=po(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function po(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Ml.prototype.isSource=!0;let Fu=0;class lt extends tn{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=Gt,i=Gt,s=ut,o=Bs,a=yt,l=Zn,c=1,h=Tn){super();Object.defineProperty(this,"id",{value:Fu++}),this.uuid=nn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null,lt.DEFAULT_MAPPING=Ya,lt.prototype.isTexture=!0;class le{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],v=l[9],g=l[2],y=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(v-y)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(v+y)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,w=(m+1)/2,C=(h+u)/4,A=(d+g)/4,B=(v+y)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=A/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=B/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=A/s,i=B/s),this.set(n,i,s,t),this}let p=Math.sqrt((y-v)*(y-v)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(p)<.001&&(p=1),this.x=(y-v)/p,this.y=(d-g)/p,this.z=(u-h)/p,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}le.prototype.isVector4=!0;class St extends tn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new le(0,0,e,t),this.scissorTest=!1,this.viewport=new le(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}St.prototype.isWebGLRenderTarget=!0;class Ws extends lt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ws.prototype.isDataArrayTexture=!0;class Ou extends St{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new Ws(null,e,t,n),this.texture.isRenderTargetTexture=!0}}Ou.prototype.isWebGLArrayRenderTarget=!0;class mo extends lt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}mo.prototype.isData3DTexture=!0;class zu extends St{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new mo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}zu.prototype.isWebGL3DRenderTarget=!0;class Bu extends St{constructor(e,t,n,i={}){super(e,t,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Bu.prototype.isWebGLMultipleRenderTargets=!0;class ct{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==v){let y=1-a;const m=l*u+c*f+h*v+d*g,p=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,m*p);y=Math.sin(y*C)/w,a=Math.sin(a*C)/w}const x=a*p;if(l=l*y+u*x,c=c*y+f*x,h=h*y+v*x,d=d*y+g*x,y===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],v=s[o+3];return e[t]=a*v+h*d+l*f-c*u,e[t+1]=l*v+h*u+c*d-a*f,e[t+2]=c*v+h*f+a*u-l*d,e[t+3]=h*v-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"YXZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"ZXY":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"ZYX":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"YZX":this._x=u*h*d+c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d-u*f*v;break;case"XZY":this._x=u*h*d-c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ct.prototype.isQuaternion=!0;class _{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,d=l*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=c*l+u*-s+h*-a-d*-o,this.y=h*l+u*-o+d*-s-c*-a,this.z=d*l+u*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}_.prototype.isVector3=!0;const go=new _,Sl=new ct;class ot{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Jn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox),vo.applyMatrix4(e.matrixWorld),this.union(vo);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Xs.subVectors(this.max,ls),_i.subVectors(e.a,ls),xi.subVectors(e.b,ls),bi.subVectors(e.c,ls),Ln.subVectors(xi,_i),An.subVectors(bi,xi),Qn.subVectors(_i,bi);let t=[0,-Ln.z,Ln.y,0,-An.z,An.y,0,-Qn.z,Qn.y,Ln.z,0,-Ln.x,An.z,0,-An.x,Qn.z,0,-Qn.x,-Ln.y,Ln.x,0,-An.y,An.x,0,-Qn.y,Qn.x,0];return!yo(t,_i,xi,bi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,_i,xi,bi,Xs))?!1:(js.crossVectors(Ln,An),t=[js.x,js.y,js.z],yo(t,_i,xi,bi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ot.prototype.isBox3=!0;const pn=[new _,new _,new _,new _,new _,new _,new _,new _],Jn=new _,vo=new ot,_i=new _,xi=new _,bi=new _,Ln=new _,An=new _,Qn=new _,ls=new _,Xs=new _,js=new _,Kn=new _;function yo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Kn.fromArray(r,s);const a=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Uu=new ot,El=new _,Zs=new _,_o=new _;class sn{constructor(e=new _,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(_o.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Zs.set(0,0,1).multiplyScalar(e.radius):Zs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(El.copy(e.center).add(Zs)),this.expandByPoint(El.copy(e.center).sub(Zs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new _,xo=new _,Ys=new _,Cn=new _,bo=new _,qs=new _,wo=new _;class $n{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xo.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(xo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=Cn.dot(this.direction),l=-Cn.dot(Ys),c=Cn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,v;if(h>0)if(d=o*l-a,u=o*a-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Ys).multiplyScalar(u).add(xo),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,i,s){bo.subVectors(t,e),qs.subVectors(n,e),wo.crossVectors(bo,qs);let o=this.direction.dot(wo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(Cn,qs));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Cn));if(c<0||l+c>o)return null;const h=-a*Cn.dot(wo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,d,u,f,v,g,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=v,m[11]=g,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,v=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,v=c*h,g=c*d;t[0]=u+g*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-v,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,v=c*h,g=c*d;t[0]=u-g*a,t[4]=-o*d,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,v=a*h,g=a*d;t[0]=l*h,t[4]=v*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=g-u*d,t[8]=v*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+v,t[10]=u-g*d}else if(e.order==="XZY"){const u=o*l,f=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=o*h,t[9]=f*d-v,t[2]=v*d-f,t[6]=a*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,ku)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Pn.crossVectors(n,Ft),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Pn.crossVectors(n,Ft)),Pn.normalize(),Js.crossVectors(Ft,Pn),i[0]=Pn.x,i[4]=Js.x,i[8]=Ft.x,i[1]=Pn.y,i[5]=Js.y,i[9]=Ft.y,i[2]=Pn.z,i[6]=Js.z,i[10]=Ft.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],v=n[2],g=n[6],y=n[10],m=n[14],p=n[3],S=n[7],x=n[11],w=n[15],C=i[0],A=i[4],B=i[8],X=i[12],V=i[1],b=i[5],L=i[9],R=i[13],O=i[2],I=i[6],N=i[10],U=i[14],F=i[3],Y=i[7],ie=i[11],q=i[15];return s[0]=o*C+a*V+l*O+c*F,s[4]=o*A+a*b+l*I+c*Y,s[8]=o*B+a*L+l*N+c*ie,s[12]=o*X+a*R+l*U+c*q,s[1]=h*C+d*V+u*O+f*F,s[5]=h*A+d*b+u*I+f*Y,s[9]=h*B+d*L+u*N+f*ie,s[13]=h*X+d*R+u*U+f*q,s[2]=v*C+g*V+y*O+m*F,s[6]=v*A+g*b+y*I+m*Y,s[10]=v*B+g*L+y*N+m*ie,s[14]=v*X+g*R+y*U+m*q,s[3]=p*C+S*V+x*O+w*F,s[7]=p*A+S*b+x*I+w*Y,s[11]=p*B+S*L+x*N+w*ie,s[15]=p*X+S*R+x*U+w*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],v=e[3],g=e[7],y=e[11],m=e[15];return v*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+g*(+t*l*f-t*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+y*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],v=e[12],g=e[13],y=e[14],m=e[15],p=d*y*c-g*u*c+g*l*f-a*y*f-d*l*m+a*u*m,S=v*u*c-h*y*c-v*l*f+o*y*f+h*l*m-o*u*m,x=h*g*c-v*d*c+v*a*f-o*g*f-h*a*m+o*d*m,w=v*d*l-h*g*l-v*a*u+o*g*u+h*a*y-o*d*y,C=t*p+n*S+i*x+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=p*A,e[1]=(g*u*s-d*y*s-g*i*f+n*y*f+d*i*m-n*u*m)*A,e[2]=(a*y*s-g*l*s+g*i*c-n*y*c-a*i*m+n*l*m)*A,e[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*A,e[4]=S*A,e[5]=(h*y*s-v*u*s+v*i*f-t*y*f-h*i*m+t*u*m)*A,e[6]=(v*l*s-o*y*s-v*i*c+t*y*c+o*i*m-t*l*m)*A,e[7]=(o*u*s-h*l*s+h*i*c-t*u*c-o*i*f+t*l*f)*A,e[8]=x*A,e[9]=(v*d*s-h*g*s-v*n*f+t*g*f+h*n*m-t*d*m)*A,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*m+t*a*m)*A,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*f-t*a*f)*A,e[12]=w*A,e[13]=(h*g*i-v*d*i+v*n*u-t*g*u-h*n*y+t*d*y)*A,e[14]=(v*a*i-o*g*i-v*n*l+t*g*l+o*n*y-t*a*y)*A,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,v=s*d,g=o*h,y=o*d,m=a*d,p=l*c,S=l*h,x=l*d,w=n.x,C=n.y,A=n.z;return i[0]=(1-(g+m))*w,i[1]=(f+x)*w,i[2]=(v-S)*w,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(u+m))*C,i[6]=(y+p)*C,i[7]=0,i[8]=(v+S)*A,i[9]=(y-p)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/s,h=1/o,d=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),d=(t+e)*l,u=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ye.prototype.isMatrix4=!0;const wi=new _,Xt=new ye,Vu=new _(0,0,0),ku=new _(1,1,1),Pn=new _,Js=new _,Ft=new _,Tl=new ye,Ll=new ct;class Rn{constructor(e=0,t=0,n=0,i=Rn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Rn.prototype.isEuler=!0,Rn.DefaultOrder="XYZ",Rn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hu=0;const Al=new _,Mi=new ct,gn=new ye,Qs=new _,cs=new _,Gu=new _,Wu=new ct,Cl=new _(1,0,0),Pl=new _(0,1,0),Rl=new _(0,0,1),Xu={type:"added"},Dl={type:"removed"};class Ge extends tn{constructor(){super();Object.defineProperty(this,"id",{value:Hu++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();const e=new _,t=new Rn,n=new ct,i=new _(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new _t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(cs,Qs,this.up):gn.lookAt(Qs,cs,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(gn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ge.DefaultUp=new _(0,1,0),Ge.DefaultMatrixAutoUpdate=!0,Ge.prototype.isObject3D=!0;const jt=new _,vn=new _,So=new _,yn=new _,Si=new _,Ei=new _,Il=new _,Eo=new _,To=new _,Lo=new _;class mt{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),vn.subVectors(n,t),So.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(vn),l=jt.dot(So),c=vn.dot(vn),h=vn.dot(So),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,v=(o*h-a*l)*u;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,yn),l.set(0,0),l.addScaledVector(s,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),vn.subVectors(e,t),jt.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return mt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Si.subVectors(i,n),Ei.subVectors(s,n),Eo.subVectors(e,n);const l=Si.dot(Eo),c=Ei.dot(Eo);if(l<=0&&c<=0)return t.copy(n);To.subVectors(e,i);const h=Si.dot(To),d=Ei.dot(To);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Si,o);Lo.subVectors(e,s);const f=Si.dot(Lo),v=Ei.dot(Lo);if(v>=0&&f<=v)return t.copy(s);const g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ei,a);const y=h*v-f*d;if(y<=0&&d-h>=0&&f-v>=0)return Il.subVectors(s,i),a=(d-h)/(d-h+(f-v)),t.copy(i).addScaledVector(Il,a);const m=1/(y+g+u);return o=g*m,a=u*m,t.copy(n).addScaledVector(Si,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ju=0;class vt extends tn{constructor(){super();Object.defineProperty(this,"id",{value:ju++}),this.uuid=nn(),this.name="",this.type="Material",this.fog=!0,this.blending=ai,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ja,this.blendDst=Za,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ka;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}vt.prototype.isMaterial=!0,vt.fromType=function(){return null};class Zt extends vt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new D(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Zt.prototype.isMeshBasicMaterial=!0;const st=new _,Ks=new ee;class Ue{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=os,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new D),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ee),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new _),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new le),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==os&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ue.prototype.isBufferAttribute=!0;class Nl extends Ue{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends Ue{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zu extends Ue{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Zu.prototype.isFloat16BufferAttribute=!0;class tt extends Ue{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yu=0;const zt=new ye,Ao=new Ge,Ti=new _,Ot=new ot,hs=new ot,xt=new _;class ze extends tn{constructor(){super();Object.defineProperty(this,"id",{value:Yu++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Fl:Nl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Ot.min,hs.min),Ot.expandByPoint(xt),xt.addVectors(Ot.max,hs.max),Ot.expandByPoint(xt)):(Ot.expandByPoint(hs.min),Ot.expandByPoint(hs.max))}Ot.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),xt.add(Ti)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let V=0;V<a;V++)c[V]=new _,h[V]=new _;const d=new _,u=new _,f=new _,v=new ee,g=new ee,y=new ee,m=new _,p=new _;function S(V,b,L){d.fromArray(i,V*3),u.fromArray(i,b*3),f.fromArray(i,L*3),v.fromArray(o,V*2),g.fromArray(o,b*2),y.fromArray(o,L*2),u.sub(d),f.sub(d),g.sub(v),y.sub(v);const R=1/(g.x*y.y-y.x*g.y);!isFinite(R)||(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(R),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(R),c[V].add(m),c[b].add(m),c[L].add(m),h[V].add(p),h[b].add(p),h[L].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let V=0,b=x.length;V<b;++V){const L=x[V],R=L.start,O=L.count;for(let I=R,N=R+O;I<N;I+=3)S(n[I+0],n[I+1],n[I+2])}const w=new _,C=new _,A=new _,B=new _;function X(V){A.fromArray(s,V*3),B.copy(A);const b=c[V];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),C.crossVectors(B,b);const R=C.dot(h[V])<0?-1:1;l[V*4]=w.x,l[V*4+1]=w.y,l[V*4+2]=w.z,l[V*4+3]=R}for(let V=0,b=x.length;V<b;++V){const L=x[V],R=L.start,O=L.count;for(let I=R,N=R+O;I<N;I+=3)X(n[I+0]),X(n[I+1]),X(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new _,s=new _,o=new _,a=new _,l=new _,c=new _,h=new _,d=new _;if(e)for(let u=0,f=e.count;u<f;u+=3){const v=e.getX(u+0),g=e.getX(u+1),y=e.getX(u+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let d=0,u=c;d<h;d++,u++)o[u]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,v=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let m=0;m<h;m++)u[v++]=c[f++]}return new Ue(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ze,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ze.prototype.isBufferGeometry=!0;const Ol=new ye,Li=new $n,Co=new sn,Dn=new _,In=new _,Nn=new _,Po=new _,Ro=new _,Do=new _,$s=new _,er=new _,tr=new _,nr=new ee,ir=new ee,sr=new ee,Io=new _,rr=new _;class $e extends Ge{constructor(e=new ze,t=new Zt){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),e.ray.intersectsSphere(Co)===!1)||(Ol.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Ol),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,f=n.groups,v=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=i[m.materialIndex],S=Math.max(m.start,v.start),x=Math.min(a.count,Math.min(m.start+m.count,v.start+v.count));for(let w=S,C=x;w<C;w+=3){const A=a.getX(w),B=a.getX(w+1),X=a.getX(w+2);o=or(this,p,e,Li,l,c,h,d,u,A,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let m=g,p=y;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);o=or(this,i,e,Li,l,c,h,d,u,S,x,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=i[m.materialIndex],S=Math.max(m.start,v.start),x=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let w=S,C=x;w<C;w+=3){const A=w,B=w+1,X=w+2;o=or(this,p,e,Li,l,c,h,d,u,A,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let m=g,p=y;m<p;m+=3){const S=m,x=m+1,w=m+2;o=or(this,i,e,Li,l,c,h,d,u,S,x,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}$e.prototype.isMesh=!0;function qu(r,e,t,n,i,s,o,a){let l;if(e.side===it?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==jn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:r}}function or(r,e,t,n,i,s,o,a,l,c,h,d){Dn.fromBufferAttribute(i,c),In.fromBufferAttribute(i,h),Nn.fromBufferAttribute(i,d);const u=r.morphTargetInfluences;if(s&&u){$s.set(0,0,0),er.set(0,0,0),tr.set(0,0,0);for(let v=0,g=s.length;v<g;v++){const y=u[v],m=s[v];y!==0&&(Po.fromBufferAttribute(m,c),Ro.fromBufferAttribute(m,h),Do.fromBufferAttribute(m,d),o?($s.addScaledVector(Po,y),er.addScaledVector(Ro,y),tr.addScaledVector(Do,y)):($s.addScaledVector(Po.sub(Dn),y),er.addScaledVector(Ro.sub(In),y),tr.addScaledVector(Do.sub(Nn),y)))}Dn.add($s),In.add(er),Nn.add(tr)}r.isSkinnedMesh&&(r.boneTransform(c,Dn),r.boneTransform(h,In),r.boneTransform(d,Nn));const f=qu(r,e,t,n,Dn,In,Nn,Io);if(f){a&&(nr.fromBufferAttribute(a,c),ir.fromBufferAttribute(a,h),sr.fromBufferAttribute(a,d),f.uv=mt.getUV(Io,Dn,In,Nn,nr,ir,sr,new ee)),l&&(nr.fromBufferAttribute(l,c),ir.fromBufferAttribute(l,h),sr.fromBufferAttribute(l,d),f.uv2=mt.getUV(Io,Dn,In,Nn,nr,ir,sr,new ee));const v={a:c,b:h,c:d,normal:new _,materialIndex:0};mt.getNormal(Dn,In,Nn,v.normal),f.face=v}return f}class ei extends ze{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function v(g,y,m,p,S,x,w,C,A,B,X){const V=x/A,b=w/B,L=x/2,R=w/2,O=C/2,I=A+1,N=B+1;let U=0,F=0;const Y=new _;for(let ie=0;ie<N;ie++){const q=ie*b-R;for(let ne=0;ne<I;ne++){const ve=ne*V-L;Y[g]=ve*p,Y[y]=q*S,Y[m]=O,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[y]=0,Y[m]=C>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ne/A),d.push(1-ie/B),U+=1}}for(let ie=0;ie<B;ie++)for(let q=0;q<A;q++){const ne=u+q+I*ie,ve=u+q+I*(ie+1),Ne=u+(q+1)+I*(ie+1),be=u+(q+1)+I*ie;l.push(ne,ve,be),l.push(ve,Ne,be),F+=6}a.addGroup(f,F,X),f+=F,u+=U}}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=Ai(r[t]);for(const i in n)e[i]=n[i]}return e}const Ju={clone:Ai,merge:Et};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends vt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Qu,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}It.prototype.isShaderMaterial=!0;class ar extends Ge{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ar.prototype.isCamera=!0;class At extends ar{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}At.prototype.isPerspectiveCamera=!0;const Ci=90,Pi=1;class No extends Ge{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new At(Ci,Pi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new _(1,0,0)),this.add(i);const s=new At(Ci,Pi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new _(-1,0,0)),this.add(s);const o=new At(Ci,Pi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new _(0,1,0)),this.add(o);const a=new At(Ci,Pi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new _(0,-1,0)),this.add(a);const l=new At(Ci,Pi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new _(0,0,1)),this.add(l);const c=new At(Ci,Pi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new _(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class lr extends lt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ci;super(e,t,n,i,s,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}lr.prototype.isCubeTexture=!0;class zl extends St{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=yt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:en});s.uniforms.tEquirect.value=t;const o=new $e(i,s),a=t.minFilter;return t.minFilter===Bs&&(t.minFilter=ut),new No(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}zl.prototype.isWebGLCubeRenderTarget=!0;const Fo=new _,$u=new _,ef=new _t;class Yt{constructor(e=new _(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fo.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),i=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Yt.prototype.isPlane=!0;const Ri=new sn,cr=new _;class ds{constructor(e=new Yt,t=new Yt,n=new Yt,i=new Yt,s=new Yt,o=new Yt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],v=n[10],g=n[11],y=n[12],m=n[13],p=n[14],S=n[15];return t[0].setComponents(a-i,d-l,g-u,S-y).normalize(),t[1].setComponents(a+i,d+l,g+u,S+y).normalize(),t[2].setComponents(a+s,d+c,g+f,S+m).normalize(),t[3].setComponents(a-s,d-c,g-f,S-m).normalize(),t[4].setComponents(a-o,d-h,g-v,S-p).normalize(),t[5].setComponents(a+o,d+h,g+v,S+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class rn extends ze{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],v=[],g=[],y=[];for(let m=0;m<h;m++){const p=m*u-o;for(let S=0;S<c;S++){const x=S*d-s;v.push(x,-p,0),g.push(0,0,1),y.push(S/a),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){const S=p+c*m,x=p+c*(m+1),w=p+1+c*(m+1),C=p+1+c*m;f.push(S,x,C),f.push(x,w,C)}this.setIndex(f),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf="vec3 transformed = vec3( position );",hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
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
}`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Gf=`uniform bool receiveShadow;
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
#endif`,Wf=`#if defined( USE_ENVMAP )
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,qf=`PhysicalMaterial material;
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
#endif`,Jf=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#ifdef USE_SHADOWMAP
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
#endif`,Dp=`#ifdef USE_SHADOWMAP
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
#endif`,Ip=`#ifdef USE_SHADOWMAP
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
#endif`,Np=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ke={alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:df,bumpmap_pars_fragment:uf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:vf,color_pars_fragment:yf,color_pars_vertex:_f,color_vertex:xf,common:bf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Ef,emissivemap_fragment:Tf,emissivemap_pars_fragment:Lf,encodings_fragment:Af,encodings_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Df,envmap_pars_vertex:If,envmap_physical_pars_fragment:Wf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:zf,fog_pars_fragment:Bf,gradientmap_pars_fragment:Uf,lightmap_fragment:Vf,lightmap_pars_fragment:kf,lights_lambert_vertex:Hf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:Kf,lights_fragment_end:$f,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphcolor_vertex:hp,morphnormal_vertex:dp,morphtarget_pars_vertex:up,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:vp,normal_vertex:yp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:wp,output_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Lp,dithering_pars_fragment:Ap,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:zp,skinnormal_vertex:Bp,specularmap_fragment:Up,specularmap_pars_fragment:Vp,tonemapping_fragment:kp,tonemapping_pars_fragment:Hp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:Zp,uv2_pars_fragment:Yp,uv2_pars_vertex:qp,uv2_vertex:Jp,worldpos_vertex:Qp,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
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
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`uniform vec3 diffuse;
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ce={common:{diffuse:{value:new D(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _t},uv2Transform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new D(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new D(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new D(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}}},on={basic:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new D(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new D(0)},specular:{value:new D(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Et([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new D(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Et([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new D(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Et([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Et([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Et([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Et([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:Et([ce.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Et([ce.common,ce.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Et([ce.lights,ce.fog,{color:{value:new D(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};on.physical={uniforms:Et([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ee(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new D(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new D(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new D(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function Kp(r,e,t,n,i,s){const o=new D(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(g,y){let m=!1,p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));const S=r.xr,x=S.getSession&&S.getSession();x&&x.environmentBlendMode==="additive"&&(p=null),p===null?v(o,a):p&&p.isColor&&(v(p,1),m=!0),(r.autoClear||m)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===zs)?(c===void 0&&(c=new $e(new ei(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Ai(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(h!==p||d!==p.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=p,d=p.version,u=r.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new $e(new rn(2,2),new It({name:"BackgroundMaterial",uniforms:Ai(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||d!==p.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=p,d=p.version,u=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,y){t.buffers.color.setClear(g.r,g.g,g.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),a=y,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,v(o,a)},render:f}}function $p(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l;function h(R,O,I,N,U){let F=!1;if(o){const Y=v(N,I,O);c!==Y&&(c=Y,u(c.object)),F=y(N,U),F&&m(N,U)}else{const Y=O.wireframe===!0;(c.geometry!==N.id||c.program!==I.id||c.wireframe!==Y)&&(c.geometry=N.id,c.program=I.id,c.wireframe=Y,F=!0)}R.isInstancedMesh===!0&&(F=!0),U!==null&&t.update(U,34963),F&&(A(R,O,I,N),U!==null&&r.bindBuffer(34963,t.get(U).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function f(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,O,I){const N=I.wireframe===!0;let U=a[R.id];U===void 0&&(U={},a[R.id]=U);let F=U[O.id];F===void 0&&(F={},U[O.id]=F);let Y=F[N];return Y===void 0&&(Y=g(d()),F[N]=Y),Y}function g(R){const O=[],I=[],N=[];for(let U=0;U<i;U++)O[U]=0,I[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:N,object:R,attributes:{},index:null}}function y(R,O){const I=c.attributes,N=R.attributes;let U=0;for(const F in N){const Y=I[F],ie=N[F];if(Y===void 0||Y.attribute!==ie||Y.data!==ie.data)return!0;U++}return c.attributesNum!==U||c.index!==O}function m(R,O){const I={},N=R.attributes;let U=0;for(const F in N){const Y=N[F],ie={};ie.attribute=Y,Y.data&&(ie.data=Y.data),I[F]=ie,U++}c.attributes=I,c.attributesNum=U,c.index=O}function p(){const R=c.newAttributes;for(let O=0,I=R.length;O<I;O++)R[O]=0}function S(R){x(R,0)}function x(R,O){const I=c.newAttributes,N=c.enabledAttributes,U=c.attributeDivisors;I[R]=1,N[R]===0&&(r.enableVertexAttribArray(R),N[R]=1),U[R]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),U[R]=O)}function w(){const R=c.newAttributes,O=c.enabledAttributes;for(let I=0,N=O.length;I<N;I++)O[I]!==R[I]&&(r.disableVertexAttribArray(I),O[I]=0)}function C(R,O,I,N,U,F){n.isWebGL2===!0&&(I===5124||I===5125)?r.vertexAttribIPointer(R,O,I,U,F):r.vertexAttribPointer(R,O,I,N,U,F)}function A(R,O,I,N){if(n.isWebGL2===!1&&(R.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const U=N.attributes,F=I.getAttributes(),Y=O.defaultAttributeValues;for(const ie in F){const q=F[ie];if(q.location>=0){let ne=U[ie];if(ne===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const ve=ne.normalized,Ne=ne.itemSize,be=t.get(ne);if(be===void 0)continue;const J=be.buffer,He=be.type,Ce=be.bytesPerElement;if(ne.isInterleavedBufferAttribute){const me=ne.data,ge=me.stride,Ae=ne.offset;if(me.isInstancedInterleavedBuffer){for(let H=0;H<q.locationSize;H++)x(q.location+H,me.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<q.locationSize;H++)S(q.location+H);r.bindBuffer(34962,J);for(let H=0;H<q.locationSize;H++)C(q.location+H,Ne/q.locationSize,He,ve,ge*Ce,(Ae+Ne/q.locationSize*H)*Ce)}else{if(ne.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)x(q.location+me,ne.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<q.locationSize;me++)S(q.location+me);r.bindBuffer(34962,J);for(let me=0;me<q.locationSize;me++)C(q.location+me,Ne/q.locationSize,He,ve,Ne*Ce,Ne/q.locationSize*me*Ce)}}else if(Y!==void 0){const ve=Y[ie];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(q.location,ve);break;case 3:r.vertexAttrib3fv(q.location,ve);break;case 4:r.vertexAttrib4fv(q.location,ve);break;default:r.vertexAttrib1fv(q.location,ve)}}}}w()}function B(){b();for(const R in a){const O=a[R];for(const I in O){const N=O[I];for(const U in N)f(N[U].object),delete N[U];delete O[I]}delete a[R]}}function X(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const I in O){const N=O[I];for(const U in N)f(N[U].object),delete N[U];delete O[I]}delete a[R.id]}function V(R){for(const O in a){const I=a[O];if(I[R.id]===void 0)continue;const N=I[R.id];for(const U in N)f(N[U].object),delete N[U];delete I[R.id]}}function b(){L(),c!==l&&(c=l,u(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:b,resetDefaultState:L,dispose:B,releaseStatesOfGeometry:X,releaseStatesOfProgram:V,initAttributes:p,enableAttribute:S,disableUnusedAttributes:w}}function em(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function tm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),f=r.getParameter(3379),v=r.getParameter(34076),g=r.getParameter(34921),y=r.getParameter(36347),m=r.getParameter(36348),p=r.getParameter(36349),S=u>0,x=o||e.has("OES_texture_float"),w=S&&x,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:C}}function nm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Yt,a=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,f){const v=d.length!==0||u||n!==0||i;return i=u,t=h(d,f,0),n=d.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,f){const v=d.clippingPlanes,g=d.clipIntersection,y=d.clipShadows,m=r.get(d);if(!i||v===null||v.length===0||s&&!y)s?h(null):c();else{const p=s?0:n,S=p*4;let x=m.clippingState||null;l.value=x,x=h(v,u,S,f);for(let w=0;w!==S;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,v){const g=d!==null?d.length:0;let y=null;if(g!==0){if(y=l.value,v!==!0||y===null){const m=f+g*4,p=u.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<m)&&(y=new Float32Array(m));for(let S=0,x=f;S!==g;++S,x+=4)o.copy(d[S]).applyMatrix4(p,a),o.normal.toArray(y,x),y[x+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}}function im(r){let e=new WeakMap;function t(o,a){return a===Yr?o.mapping=ci:a===qr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yr||a===qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zl(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Oo extends ar{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Oo.prototype.isOrthographicCamera=!0;const Di=4,Ul=[.125,.215,.35,.446,.526,.582],ti=20,zo=new Oo,Vl=new D;let Bo=null;const ni=(1+Math.sqrt(5))/2,Ii=1/ni,kl=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,ni,Ii),new _(0,ni,-Ii),new _(Ii,0,ni),new _(-Ii,0,ni),new _(ni,Ii,0),new _(-ni,Ii,0)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:di,format:yt,encoding:Tn,depthBuffer:!1},i=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=rm(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Vl),h.toneMapping=Sn,h.autoClear=!1;const f=new Zt({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),v=new $e(new ei,f);let g=!1;const y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,g=!0):(f.color.copy(Vl),g=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):p===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;hr(i,p*S,m>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kl[(i-1)%kl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $e(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ti-1),g=s/v,y=isFinite(s)?1+Math.floor(h*g):ti;y>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ti}`);const m=[];let p=0;for(let A=0;A<ti;++A){const B=A/g,X=Math.exp(-B*B/2);m.push(X),A===0?p+=X:A<y&&(p+=2*X)}for(let A=0;A<m.length;A++)m[A]=m[A]/p;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=v,u.mipInt.value=S-n;const x=this._sizeLods[i],w=3*x*(i>S-Di?i-S+Di:0),C=4*(this._cubeSize-x);hr(t,w,C,3*x,2*x),l.setRenderTarget(t),l.render(d,zo)}}function sm(r){const e=[],t=[],n=[];let i=r;const s=r-Di+1+Ul.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Di?l=Ul[o-r+Di-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),h=-c/2,d=1+c/2,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,v=6,g=3,y=2,m=1,p=new Float32Array(g*v*f),S=new Float32Array(y*v*f),x=new Float32Array(m*v*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,B=C>2?0:-1,X=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];p.set(X,g*v*C),S.set(u,y*v*C);const V=[C,C,C,C,C,C];x.set(V,m*v*C)}const w=new ze;w.setAttribute("position",new Ue(p,g)),w.setAttribute("uv",new Ue(S,y)),w.setAttribute("faceIndex",new Ue(x,m)),e.push(w),i>Di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(r,e,t){const n=new St(r,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rm(r,e,t){const n=new Float32Array(ti),i=new _(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Wl(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Xl(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Uo(){return`

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
	`}function om(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yr||l===qr,h=l===ci||l===hi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Hl(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Hl(r));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function am(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],34962);const f=d.morphAttributes;for(const v in f){const g=f[v];for(let y=0,m=g.length;y<m;y++)e.update(g[y],34962)}}function c(d){const u=[],f=d.index,v=d.attributes.position;let g=0;if(f!==null){const p=f.array;g=f.version;for(let S=0,x=p.length;S<x;S+=3){const w=p[S+0],C=p[S+1],A=p[S+2];u.push(w,C,C,A,A,w)}}else{const p=v.array;g=v.version;for(let S=0,x=p.length/3-1;S<x;S+=3){const w=S+0,C=S+1,A=S+2;u.push(w,C,C,A,A,w)}}const y=new(bl(u)?Fl:Nl)(u,1);y.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,y)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function cm(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){r.drawElements(s,f,a,u*l),t.update(f,s,1)}function d(u,f,v){if(v===0)return;let g,y;if(i)g=r,y="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,a,u*l,v),t.update(f,s,v)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function hm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dm(r,e){return r[0]-e[0]}function um(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Vo(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function fm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new le,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let I=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();const S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let X=0;S===!0&&(X=1),x===!0&&(X=2),w===!0&&(X=3);let V=h.attributes.position.count*X,b=1;V>e.maxTextureSize&&(b=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const L=new Float32Array(V*b*4*g),R=new Ws(L,V,b,g);R.format=yt,R.type=En,R.needsUpdate=!0;const O=X*4;for(let N=0;N<g;N++){const U=C[N],F=A[N],Y=B[N],ie=V*b*4*N;for(let q=0;q<U.count;q++){const ne=q*O;S===!0&&(o.fromBufferAttribute(U,q),U.normalized===!0&&Vo(o,U),L[ie+ne+0]=o.x,L[ie+ne+1]=o.y,L[ie+ne+2]=o.z,L[ie+ne+3]=0),x===!0&&(o.fromBufferAttribute(F,q),F.normalized===!0&&Vo(o,F),L[ie+ne+4]=o.x,L[ie+ne+5]=o.y,L[ie+ne+6]=o.z,L[ie+ne+7]=0),w===!0&&(o.fromBufferAttribute(Y,q),Y.normalized===!0&&Vo(o,F),L[ie+ne+8]=o.x,L[ie+ne+9]=o.y,L[ie+ne+10]=o.z,L[ie+ne+11]=Y.itemSize===4?o.w:1)}}y={count:g,texture:R,size:new ee(V,b)},s.set(h,y),h.addEventListener("dispose",I)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const v=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<v;x++){const w=g[x];w[0]=x,w[1]=f[x]}g.sort(um);for(let x=0;x<8;x++)x<v&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dm);const y=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const w=a[x],C=w[0],A=w[1];C!==Number.MAX_SAFE_INTEGER&&A?(y&&h.getAttribute("morphTarget"+x)!==y[C]&&h.setAttribute("morphTarget"+x,y[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),i[x]=A,p+=A):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function pm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const jl=new lt,Zl=new Ws,Yl=new mo,ql=new lr,Jl=[],Ql=[],Kl=new Float32Array(16),$l=new Float32Array(9),ec=new Float32Array(4);function Ni(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jl[i];if(s===void 0&&(s=new Float32Array(i),Jl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dr(r,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function _m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Ct(t,n))return;ec.set(n),r.uniformMatrix2fv(this.addr,!1,ec),Tt(t,n)}}function xm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Ct(t,n))return;$l.set(n),r.uniformMatrix3fv(this.addr,!1,$l),Tt(t,n)}}function bm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Ct(t,n))return;Kl.set(n),r.uniformMatrix4fv(this.addr,!1,Kl),Tt(t,n)}}function wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mm(r,e){const t=this.cache;Ct(t,e)||(r.uniform2iv(this.addr,e),Tt(t,e))}function Sm(r,e){const t=this.cache;Ct(t,e)||(r.uniform3iv(this.addr,e),Tt(t,e))}function Em(r,e){const t=this.cache;Ct(t,e)||(r.uniform4iv(this.addr,e),Tt(t,e))}function Tm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lm(r,e){const t=this.cache;Ct(t,e)||(r.uniform2uiv(this.addr,e),Tt(t,e))}function Am(r,e){const t=this.cache;Ct(t,e)||(r.uniform3uiv(this.addr,e),Tt(t,e))}function Cm(r,e){const t=this.cache;Ct(t,e)||(r.uniform4uiv(this.addr,e),Tt(t,e))}function Pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||jl,i)}function Rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yl,i)}function Dm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ql,i)}function Im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zl,i)}function Nm(r){switch(r){case 5126:return mm;case 35664:return gm;case 35665:return vm;case 35666:return ym;case 35674:return _m;case 35675:return xm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Lm;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}function Fm(r,e){r.uniform1fv(this.addr,e)}function Om(r,e){const t=Ni(e,this.size,2);r.uniform2fv(this.addr,t)}function zm(r,e){const t=Ni(e,this.size,3);r.uniform3fv(this.addr,t)}function Bm(r,e){const t=Ni(e,this.size,4);r.uniform4fv(this.addr,t)}function Um(r,e){const t=Ni(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vm(r,e){const t=Ni(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function km(r,e){const t=Ni(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Hm(r,e){r.uniform1iv(this.addr,e)}function Gm(r,e){r.uniform2iv(this.addr,e)}function Wm(r,e){r.uniform3iv(this.addr,e)}function Xm(r,e){r.uniform4iv(this.addr,e)}function jm(r,e){r.uniform1uiv(this.addr,e)}function Zm(r,e){r.uniform2uiv(this.addr,e)}function Ym(r,e){r.uniform3uiv(this.addr,e)}function qm(r,e){r.uniform4uiv(this.addr,e)}function Jm(r,e,t){const n=e.length,i=dr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||jl,i[s])}function Qm(r,e,t){const n=e.length,i=dr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Yl,i[s])}function Km(r,e,t){const n=e.length,i=dr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ql,i[s])}function $m(r,e,t){const n=e.length,i=dr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Zl,i[s])}function eg(r){switch(r){case 5126:return Fm;case 35664:return Om;case 35665:return zm;case 35666:return Bm;case 35674:return Um;case 35675:return Vm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return jm;case 36294:return Zm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return $m}}function tg(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Nm(e.type)}function tc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=eg(e.type)}tc.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Tt(e,r)};function nc(r){this.id=r,this.seq=[],this.map={}}nc.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,e[o.id],t)}};const ko=/(\w+)(\])?(\[|\.)?/g;function ic(r,e){r.seq.push(e),r.map[e.id]=e}function ng(r,e,t){const n=r.name,i=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),o=ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ic(t,c===void 0?new tg(a,r,e):new tc(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new nc(a),ic(t,d)),t=d}}}function Fn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);ng(i,s,this)}}Fn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)},Fn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)},Fn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}},Fn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function sc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ig=0;function sg(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function rg(r){switch(r){case Tn:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function rc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+sg(r.getShaderSource(e))}function og(r,e){const t=rg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ag(r,e){let t;switch(e){case ru:t="Linear";break;case ou:t="Reinhard";break;case au:t="OptimizedCineon";break;case lu:t="ACESFilmic";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function cg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function us(r){return r!==""}function oc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(r){return r.replace(dg,ug)}function ug(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ho(t)}const fg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(r){return r.replace(pg,cc).replace(fg,mg)}function mg(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),cc(r,e,t,n)}function cc(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Va?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function vg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case hi:e="ENVMAP_TYPE_CUBE";break;case zs:case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hi:case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function _g(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Os:e="ENVMAP_BLENDING_MULTIPLY";break;case iu:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function xg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gg(t),c=vg(t),h=yg(t),d=_g(t),u=xg(t),f=t.isWebGL2?"":lg(t),v=cg(s),g=i.createProgram();let y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[v].filter(us).join(`
`),y.length>0&&(y+=`
`),m=[f,v].filter(us).join(`
`),m.length>0&&(m+=`
`)):(y=[hc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),m=[f,hc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Sn?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,og("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=Ho(o),o=oc(o,t),o=ac(o,t),a=Ho(a),a=oc(a,t),a=ac(a,t),o=lc(o),a=lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=p+y+o,x=p+m+a,w=sc(i,35633,S),C=sc(i,35632,x);if(i.attachShader(g,w),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const X=i.getProgramInfoLog(g).trim(),V=i.getShaderInfoLog(w).trim(),b=i.getShaderInfoLog(C).trim();let L=!0,R=!0;if(i.getProgramParameter(g,35714)===!1){L=!1;const O=rc(i,w,"vertex"),I=rc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+X+`
`+O+`
`+I)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||b==="")&&(R=!1);R&&(this.diagnostics={runnable:L,programLog:X,vertexShader:{log:V,prefix:y},fragmentShader:{log:b,prefix:m}})}i.deleteShader(w),i.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new Fn(i,g)),A};let B;return this.getAttributes=function(){return B===void 0&&(B=hg(i,g)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let wg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Sg;t.set(e,n)}return t.get(e)}}class Sg{constructor(){this.id=wg++,this.usedTimes=0}}function Eg(r,e,t,n,i,s,o){const a=new Mo,l=new Mg,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.floatVertexTextures,f=i.maxVertexUniforms,v=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){const R=b.skeleton.bones;if(u)return 1024;{const I=Math.floor((f-20)/4),N=Math.min(I,R.length);return N<R.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+R.length+" bones. This GPU supports "+N+"."),0):N}}function p(b,L,R,O,I){const N=O.fog,U=I.geometry,F=b.isMeshStandardMaterial?O.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||F),ie=!!Y&&(Y.mapping===zs||Y.mapping===Jr)?Y.image.height:null,q=y[b.type],ne=I.isSkinnedMesh?m(I):0;b.precision!==null&&(g=i.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ve=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ne=ve!==void 0?ve.length:0;let be=0;U.morphAttributes.position!==void 0&&(be=1),U.morphAttributes.normal!==void 0&&(be=2),U.morphAttributes.color!==void 0&&(be=3);let J,He,Ce,me;if(q){const Q=on[q];J=Q.vertexShader,He=Q.fragmentShader}else J=b.vertexShader,He=b.fragmentShader,l.update(b),Ce=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const ge=r.getRenderTarget(),Ae=b.alphaTest>0,H=b.clearcoat>0;return{isWebGL2:h,shaderID:q,shaderName:b.type,vertexShader:J,fragmentShader:He,defines:b.defines,customVertexShaderID:Ce,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:v,outputEncoding:ge===null?r.outputEncoding:ge.isXRRenderTarget===!0?ge.texture.encoding:Tn,map:!!b.map,matcap:!!b.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:ie,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Du,tangentSpaceNormalMap:b.normalMapType===gi,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===rt,clearcoat:H,clearcoatMap:H&&!!b.clearcoatMap,clearcoatRoughnessMap:H&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:H&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===ai,alphaMap:!!b.alphaMap,alphaTest:Ae,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!U.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0&&ne>0,maxBones:ne,useVertexTexture:u,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:be,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Sn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jn,flipSided:b.side===it,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function S(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)L.push(R),L.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(x(L,b),w(L,b),L.push(r.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function x(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.maxBones),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection)}function w(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.displacementMap&&a.enable(18),L.specularMap&&a.enable(19),L.roughnessMap&&a.enable(20),L.metalnessMap&&a.enable(21),L.gradientMap&&a.enable(22),L.alphaMap&&a.enable(23),L.alphaTest&&a.enable(24),L.vertexColors&&a.enable(25),L.vertexAlphas&&a.enable(26),L.vertexUvs&&a.enable(27),L.vertexTangents&&a.enable(28),L.uvsVertexOnly&&a.enable(29),L.fog&&a.enable(30),b.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.useVertexTexture&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.physicallyCorrectLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.depthPacking&&a.enable(13),L.dithering&&a.enable(14),L.specularIntensityMap&&a.enable(15),L.specularColorMap&&a.enable(16),L.transmission&&a.enable(17),L.transmissionMap&&a.enable(18),L.thicknessMap&&a.enable(19),L.sheen&&a.enable(20),L.sheenColorMap&&a.enable(21),L.sheenRoughnessMap&&a.enable(22),L.decodeVideoTexture&&a.enable(23),L.opaque&&a.enable(24),b.push(a.mask)}function C(b){const L=y[b.type];let R;if(L){const O=on[L];R=Ju.clone(O.uniforms)}else R=b.uniforms;return R}function A(b,L){let R;for(let O=0,I=c.length;O<I;O++){const N=c[O];if(N.cacheKey===L){R=N,++R.usedTimes;break}}return R===void 0&&(R=new bg(r,L,b,s),c.push(R)),R}function B(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function X(b){l.remove(b)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:C,acquireProgram:A,releaseProgram:B,releaseShaderCache:X,programs:c,dispose:V}}function Tg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,v,g,y){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:v,renderOrder:d.renderOrder,z:g,group:y},r[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=g,m.group=y),e++,m}function a(d,u,f,v,g,y){const m=o(d,u,f,v,g,y);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,v,g,y){const m=o(d,u,f,v,g,y);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||Lg),n.length>1&&n.sort(u||dc),i.length>1&&i.sort(u||dc)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Ag(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new uc,r.set(n,[s])):i>=r.get(n).length?(s=new uc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new D};break;case"SpotLight":t={position:new _,direction:new _,color:new D,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new D,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new D,groundColor:new D};break;case"RectAreaLight":t={color:new D,position:new _,halfWidth:new _,halfHeight:new _};break}return r[e.id]=t,t}}}function Pg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Rg=0;function Dg(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Ig(r,e){const t=new Cg,n=Pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new _);const s=new _,o=new ye,a=new ye;function l(h,d){let u=0,f=0,v=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,y=0,m=0,p=0,S=0,x=0,w=0,C=0;h.sort(Dg);const A=d!==!0?Math.PI:1;for(let X=0,V=h.length;X<V;X++){const b=h[X],L=b.color,R=b.intensity,O=b.distance,I=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=L.r*R*A,f+=L.g*R*A,v+=L.b*R*A;else if(b.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],R);else if(b.isDirectionalLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity*A),b.castShadow){const U=b.shadow,F=n.get(b);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=I,i.directionalShadowMatrix[g]=b.shadow.matrix,x++}i.directional[g]=N,g++}else if(b.isSpotLight){const N=t.get(b);if(N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(L).multiplyScalar(R*A),N.distance=O,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,b.castShadow){const U=b.shadow,F=n.get(b);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[m]=F,i.spotShadowMap[m]=I,i.spotShadowMatrix[m]=b.shadow.matrix,C++}i.spot[m]=N,m++}else if(b.isRectAreaLight){const N=t.get(b);N.color.copy(L).multiplyScalar(R),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=N,p++}else if(b.isPointLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity*A),N.distance=b.distance,N.decay=b.decay,b.castShadow){const U=b.shadow,F=n.get(b);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[y]=F,i.pointShadowMap[y]=I,i.pointShadowMatrix[y]=b.shadow.matrix,w++}i.point[y]=N,y++}else if(b.isHemisphereLight){const N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(R*A),N.groundColor.copy(b.groundColor).multiplyScalar(R*A),i.hemi[S]=N,S++}}p>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==g||B.pointLength!==y||B.spotLength!==m||B.rectAreaLength!==p||B.hemiLength!==S||B.numDirectionalShadows!==x||B.numPointShadows!==w||B.numSpotShadows!==C)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=y,i.hemi.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=C,B.directionalLength=g,B.pointLength=y,B.spotLength=m,B.rectAreaLength=p,B.hemiLength=S,B.numDirectionalShadows=x,B.numPointShadows=w,B.numSpotShadows=C,i.version=Rg++)}function c(h,d){let u=0,f=0,v=0,g=0,y=0;const m=d.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){const x=h[p];if(x.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(x.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(x.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),w.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function fc(r,e){const t=new Ig(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ng(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new fc(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new fc(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Go extends vt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Go.prototype.isMeshDepthMaterial=!0;class Wo extends vt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new _,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Wo.prototype.isMeshDistanceMaterial=!0;const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function pc(r,e,t){let n=new ds;const i=new ee,s=new ee,o=new le,a=new Go({depthPacking:Ru}),l=new Wo,c={},h=t.maxTextureSize,d={0:it,1:oi,2:jn},u=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new ze;v.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $e(v,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va,this.render=function(x,w,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||x.length===0)return;const A=r.getRenderTarget(),B=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),V=r.state;V.setBlending(en),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let b=0,L=x.length;b<L;b++){const R=x[b],O=R.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const I=O.getFrameExtents();if(i.multiply(I),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/I.x),i.x=s.x*I.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/I.y),i.y=s.y*I.y,O.mapSize.y=s.y)),O.map===null&&!O.isPointLightShadow&&this.type===ns){const U={minFilter:ut,magFilter:ut,format:yt};O.map=new St(i.x,i.y,U),O.map.texture.name=R.name+".shadowMap",O.mapPass=new St(i.x,i.y,U),O.camera.updateProjectionMatrix()}if(O.map===null){const U={minFilter:et,magFilter:et,format:yt};O.map=new St(i.x,i.y,U),O.map.texture.name=R.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const N=O.getViewportCount();for(let U=0;U<N;U++){const F=O.getViewport(U);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),V.viewport(o),O.updateMatrices(R,U),n=O.getFrustum(),S(w,C,O.camera,R,this.type)}!O.isPointLightShadow&&this.type===ns&&m(O,C),O.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(A,B,X)};function m(x,w){const C=e.update(g);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,C,u,g,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,C,f,g,null)}function p(x,w,C,A,B,X){let V=null;const b=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0?V=b:V=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const L=V.uuid,R=w.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let I=O[R];I===void 0&&(I=V.clone(),O[R]=I),V=I}return V.visible=w.visible,V.wireframe=w.wireframe,X===ns?V.side=w.shadowSide!==null?w.shadowSide:w.side:V.side=w.shadowSide!==null?w.shadowSide:d[w.side],V.alphaMap=w.alphaMap,V.alphaTest=w.alphaTest,V.clipShadows=w.clipShadows,V.clippingPlanes=w.clippingPlanes,V.clipIntersection=w.clipIntersection,V.displacementMap=w.displacementMap,V.displacementScale=w.displacementScale,V.displacementBias=w.displacementBias,V.wireframeLinewidth=w.wireframeLinewidth,V.linewidth=w.linewidth,C.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(C.matrixWorld),V.nearDistance=A,V.farDistance=B),V}function S(x,w,C,A,B){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&B===ns)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const b=e.update(x),L=x.material;if(Array.isArray(L)){const R=b.groups;for(let O=0,I=R.length;O<I;O++){const N=R[O],U=L[N.materialIndex];if(U&&U.visible){const F=p(x,U,A,C.near,C.far,B);r.renderBufferDirect(C,null,b,F,x,N)}}}else if(L.visible){const R=p(x,L,A,C.near,C.far,B);r.renderBufferDirect(C,null,b,R,x,null)}}const V=x.children;for(let b=0,L=V.length;b<L;b++)S(V[b],w,C,A,B)}}function zg(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const pe=new le;let de=null;const Fe=new le(0,0,0,0);return{setMask:function(ue){de!==ue&&!P&&(r.colorMask(ue,ue,ue,ue),de=ue)},setLocked:function(ue){P=ue},setClear:function(ue,re,Ie,je,Rt){Rt===!0&&(ue*=je,re*=je,Ie*=je),pe.set(ue,re,Ie,je),Fe.equals(pe)===!1&&(r.clearColor(ue,re,Ie,je),Fe.copy(pe))},reset:function(){P=!1,de=null,Fe.set(-1,0,0,0)}}}function s(){let P=!1,pe=null,de=null,Fe=null;return{setTest:function(ue){ue?be(2929):J(2929)},setMask:function(ue){pe!==ue&&!P&&(r.depthMask(ue),pe=ue)},setFunc:function(ue){if(de!==ue){if(ue)switch(ue){case Jd:r.depthFunc(512);break;case Qd:r.depthFunc(519);break;case Kd:r.depthFunc(513);break;case is:r.depthFunc(515);break;case $d:r.depthFunc(514);break;case eu:r.depthFunc(518);break;case tu:r.depthFunc(516);break;case nu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);de=ue}},setLocked:function(ue){P=ue},setClear:function(ue){Fe!==ue&&(r.clearDepth(ue),Fe=ue)},reset:function(){P=!1,pe=null,de=null,Fe=null}}}function o(){let P=!1,pe=null,de=null,Fe=null,ue=null,re=null,Ie=null,je=null,Rt=null;return{setTest:function(nt){P||(nt?be(2960):J(2960))},setMask:function(nt){pe!==nt&&!P&&(r.stencilMask(nt),pe=nt)},setFunc:function(nt,hn,dn){(de!==nt||Fe!==hn||ue!==dn)&&(r.stencilFunc(nt,hn,dn),de=nt,Fe=hn,ue=dn)},setOp:function(nt,hn,dn){(re!==nt||Ie!==hn||je!==dn)&&(r.stencilOp(nt,hn,dn),re=nt,Ie=hn,je=dn)},setLocked:function(nt){P=nt},setClear:function(nt){Rt!==nt&&(r.clearStencil(nt),Rt=nt)},reset:function(){P=!1,pe=null,de=null,Fe=null,ue=null,re=null,Ie=null,je=null,Rt=null}}}const a=new i,l=new s,c=new o;let h={},d={},u=new WeakMap,f=[],v=null,g=!1,y=null,m=null,p=null,S=null,x=null,w=null,C=null,A=!1,B=null,X=null,V=null,b=null,L=null;const R=r.getParameter(35661);let O=!1,I=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=I>=2);let U=null,F={};const Y=r.getParameter(3088),ie=r.getParameter(2978),q=new le().fromArray(Y),ne=new le().fromArray(ie);function ve(P,pe,de){const Fe=new Uint8Array(4),ue=r.createTexture();r.bindTexture(P,ue),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let re=0;re<de;re++)r.texImage2D(pe+re,0,6408,1,1,0,6408,5121,Fe);return ue}const Ne={};Ne[3553]=ve(3553,3553,1),Ne[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(is),Q(!1),oe(Ua),be(2884),H(en);function be(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function J(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function He(P,pe){return d[P]!==pe?(r.bindFramebuffer(P,pe),d[P]=pe,n&&(P===36009&&(d[36160]=pe),P===36160&&(d[36009]=pe)),!0):!1}function Ce(P,pe){let de=f,Fe=!1;if(P)if(de=u.get(pe),de===void 0&&(de=[],u.set(pe,de)),P.isWebGLMultipleRenderTargets){const ue=P.texture;if(de.length!==ue.length||de[0]!==36064){for(let re=0,Ie=ue.length;re<Ie;re++)de[re]=36064+re;de.length=ue.length,Fe=!0}}else de[0]!==36064&&(de[0]=36064,Fe=!0);else de[0]!==1029&&(de[0]=1029,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function me(P){return v!==P?(r.useProgram(P),v=P,!0):!1}const ge={[li]:32774,[Ud]:32778,[Vd]:32779};if(n)ge[Wa]=32775,ge[Xa]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ge[Wa]=P.MIN_EXT,ge[Xa]=P.MAX_EXT)}const Ae={[kd]:0,[Hd]:1,[Gd]:768,[ja]:770,[qd]:776,[Zd]:774,[Xd]:772,[Wd]:769,[Za]:771,[Yd]:775,[jd]:773};function H(P,pe,de,Fe,ue,re,Ie,je){if(P===en){g===!0&&(J(3042),g=!1);return}if(g===!1&&(be(3042),g=!0),P!==Bd){if(P!==y||je!==A){if((m!==li||x!==li)&&(r.blendEquation(32774),m=li,x=li),je)switch(P){case ai:r.blendFuncSeparate(1,771,1,771);break;case Fs:r.blendFunc(1,1);break;case Ha:r.blendFuncSeparate(0,769,0,1);break;case Ga:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ai:r.blendFuncSeparate(770,771,1,771);break;case Fs:r.blendFunc(770,1);break;case Ha:r.blendFuncSeparate(0,769,0,1);break;case Ga:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,S=null,w=null,C=null,y=P,A=je}return}ue=ue||pe,re=re||de,Ie=Ie||Fe,(pe!==m||ue!==x)&&(r.blendEquationSeparate(ge[pe],ge[ue]),m=pe,x=ue),(de!==p||Fe!==S||re!==w||Ie!==C)&&(r.blendFuncSeparate(Ae[de],Ae[Fe],Ae[re],Ae[Ie]),p=de,S=Fe,w=re,C=Ie),y=P,A=null}function j(P,pe){P.side===jn?J(2884):be(2884);let de=P.side===it;pe&&(de=!de),Q(de),P.blending===ai&&P.transparent===!1?H(en):H(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Fe=P.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),_e(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?be(32926):J(32926)}function Q(P){B!==P&&(P?r.frontFace(2304):r.frontFace(2305),B=P)}function oe(P){P!==Fd?(be(2884),P!==X&&(P===Ua?r.cullFace(1029):P===Od?r.cullFace(1028):r.cullFace(1032))):J(2884),X=P}function se(P){P!==V&&(O&&r.lineWidth(P),V=P)}function _e(P,pe,de){P?(be(32823),(b!==pe||L!==de)&&(r.polygonOffset(pe,de),b=pe,L=de)):J(32823)}function fe(P){P?be(3089):J(3089)}function Me(P){P===void 0&&(P=33984+R-1),U!==P&&(r.activeTexture(P),U=P)}function k(P,pe){U===null&&Me();let de=F[U];de===void 0&&(de={type:void 0,texture:void 0},F[U]=de),(de.type!==P||de.texture!==pe)&&(r.bindTexture(P,pe||Ne[P]),de.type=P,de.texture=pe)}function E(){const P=F[U];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){q.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function Se(P){ne.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function xe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},U=null,F={},d={},u=new WeakMap,f=[],v=null,g=!1,y=null,m=null,p=null,S=null,x=null,w=null,C=null,A=!1,B=null,X=null,V=null,b=null,L=null,q.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:J,bindFramebuffer:He,drawBuffers:Ce,useProgram:me,setBlending:H,setMaterial:j,setFlipSided:Q,setCullFace:oe,setLineWidth:se,setPolygonOffset:_e,setScissorTest:fe,activeTexture:Me,bindTexture:k,unbindTexture:E,compressedTexImage2D:M,texImage2D:$,texImage3D:Re,texStorage2D:he,texStorage3D:Te,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:ae,scissor:De,viewport:Se,reset:xe}}function Bg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,M){return y?new OffscreenCanvas(E,M):as("canvas")}function p(E,M,W,K){let ae=1;if((E.width>K||E.height>K)&&(ae=K/Math.max(E.width,E.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const he=M?ho:Math.floor,Te=he(ae*E.width),$=he(ae*E.height);v===void 0&&(v=m(Te,$));const Re=W?m(Te,$):v;return Re.width=Te,Re.height=$,Re.getContext("2d").drawImage(E,0,0,Te,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Te+"x"+$+")."),Re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return xl(E.width)&&xl(E.height)}function x(E){return a?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==et&&E.minFilter!==ut}function w(E,M){return E.generateMipmaps&&M&&E.minFilter!==et&&E.minFilter!==ut}function C(E){r.generateMipmap(E)}function A(E,M,W,K,ae=!1){if(a===!1)return M;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he=M;return M===6403&&(W===5126&&(he=33326),W===5131&&(he=33325),W===5121&&(he=33321)),M===33319&&(W===5126&&(he=33328),W===5131&&(he=33327),W===5121&&(he=33323)),M===6408&&(W===5126&&(he=34836),W===5131&&(he=34842),W===5121&&(he=K===rt&&ae===!1?35907:32856),W===32819&&(he=32854),W===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function B(E,M,W){return w(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==et&&E.minFilter!==ut?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function X(E){return E===et||E===qa||E===Ja?9728:9729}function V(E){const M=E.target;M.removeEventListener("dispose",V),L(M),M.isVideoTexture&&f.delete(M)}function b(E){const M=E.target;M.removeEventListener("dispose",b),O(M)}function L(E){const M=n.get(E);if(M.__webglInit===void 0)return;const W=E.source,K=g.get(W);if(K){const ae=K[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(E),Object.keys(K).length===0&&g.delete(W)}n.remove(E)}function R(E){const M=n.get(E);r.deleteTexture(M.__webglTexture);const W=E.source,K=g.get(W);delete K[M.__cacheKey],o.memory.textures--}function O(E){const M=E.texture,W=n.get(E),K=n.get(M);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)r.deleteFramebuffer(W.__webglFramebuffer[ae]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[ae]);else r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&r.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ae=0,he=M.length;ae<he;ae++){const Te=n.get(M[ae]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(M[ae])}n.remove(M),n.remove(E)}let I=0;function N(){I=0}function U(){const E=I;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),I+=1,E}function F(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function Y(E,M){const W=n.get(E);if(E.isVideoTexture&&Me(E),E.version>0&&W.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(W,E,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,W.__webglTexture)}function ie(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){He(W,E,M);return}t.activeTexture(33984+M),t.bindTexture(35866,W.__webglTexture)}function q(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){He(W,E,M);return}t.activeTexture(33984+M),t.bindTexture(32879,W.__webglTexture)}function ne(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){Ce(W,E,M);return}t.activeTexture(33984+M),t.bindTexture(34067,W.__webglTexture)}const ve={[Qr]:10497,[Gt]:33071,[Kr]:33648},Ne={[et]:9728,[qa]:9984,[Ja]:9986,[ut]:9729,[hu]:9985,[Bs]:9987};function be(E,M,W){if(W?(r.texParameteri(E,10242,ve[M.wrapS]),r.texParameteri(E,10243,ve[M.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,ve[M.wrapR]),r.texParameteri(E,10240,Ne[M.magFilter]),r.texParameteri(E,10241,Ne[M.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(M.wrapS!==Gt||M.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,X(M.magFilter)),r.texParameteri(E,10241,X(M.minFilter)),M.minFilter!==et&&M.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(M.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function J(E,M){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",V));const K=M.source;let ae=g.get(K);ae===void 0&&(ae={},g.set(K,ae));const he=F(M);if(he!==E.__cacheKey){ae[he]===void 0&&(ae[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[he].usedTimes++;const Te=ae[E.__cacheKey];Te!==void 0&&(ae[E.__cacheKey].usedTimes--,Te.usedTimes===0&&R(M)),E.__cacheKey=he,E.__webglTexture=ae[he].texture}return W}function He(E,M,W){let K=3553;M.isDataArrayTexture&&(K=35866),M.isData3DTexture&&(K=32879);const ae=J(E,M),he=M.source;if(t.activeTexture(33984+W),t.bindTexture(K,E.__webglTexture),he.version!==he.__currentVersion||ae===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const Te=x(M)&&S(M.image)===!1;let $=p(M.image,Te,!1,h);$=k(M,$);const Re=S($)||a,De=s.convert(M.format,M.encoding);let Se=s.convert(M.type),xe=A(M.internalFormat,De,Se,M.encoding,M.isVideoTexture);be(K,M,Re);let P;const pe=M.mipmaps,de=a&&M.isVideoTexture!==!0,Fe=E.__version===void 0,ue=B(M,$,Re);if(M.isDepthTexture)xe=6402,a?M.type===En?xe=36012:M.type===rs?xe=33190:M.type===ui?xe=35056:xe=33189:M.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Yn&&xe===6402&&M.type!==ss&&M.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ss,Se=s.convert(M.type)),M.format===fi&&xe===6402&&(xe=34041,M.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ui,Se=s.convert(M.type))),de&&Fe?t.texStorage2D(3553,1,xe,$.width,$.height):t.texImage2D(3553,0,xe,$.width,$.height,0,De,Se,null);else if(M.isDataTexture)if(pe.length>0&&Re){de&&Fe&&t.texStorage2D(3553,ue,xe,pe[0].width,pe[0].height);for(let re=0,Ie=pe.length;re<Ie;re++)P=pe[re],de?t.texSubImage2D(3553,re,0,0,P.width,P.height,De,Se,P.data):t.texImage2D(3553,re,xe,P.width,P.height,0,De,Se,P.data);M.generateMipmaps=!1}else de?(Fe&&t.texStorage2D(3553,ue,xe,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,De,Se,$.data)):t.texImage2D(3553,0,xe,$.width,$.height,0,De,Se,$.data);else if(M.isCompressedTexture){de&&Fe&&t.texStorage2D(3553,ue,xe,pe[0].width,pe[0].height);for(let re=0,Ie=pe.length;re<Ie;re++)P=pe[re],M.format!==yt?De!==null?de?t.compressedTexSubImage2D(3553,re,0,0,P.width,P.height,De,P.data):t.compressedTexImage2D(3553,re,xe,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(3553,re,0,0,P.width,P.height,De,Se,P.data):t.texImage2D(3553,re,xe,P.width,P.height,0,De,Se,P.data)}else if(M.isDataArrayTexture)de?(Fe&&t.texStorage3D(35866,ue,xe,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,De,Se,$.data)):t.texImage3D(35866,0,xe,$.width,$.height,$.depth,0,De,Se,$.data);else if(M.isData3DTexture)de?(Fe&&t.texStorage3D(32879,ue,xe,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,De,Se,$.data)):t.texImage3D(32879,0,xe,$.width,$.height,$.depth,0,De,Se,$.data);else if(M.isFramebufferTexture)de&&Fe?t.texStorage2D(3553,ue,xe,$.width,$.height):t.texImage2D(3553,0,xe,$.width,$.height,0,De,Se,null);else if(pe.length>0&&Re){de&&Fe&&t.texStorage2D(3553,ue,xe,pe[0].width,pe[0].height);for(let re=0,Ie=pe.length;re<Ie;re++)P=pe[re],de?t.texSubImage2D(3553,re,0,0,De,Se,P):t.texImage2D(3553,re,xe,De,Se,P);M.generateMipmaps=!1}else de?(Fe&&t.texStorage2D(3553,ue,xe,$.width,$.height),t.texSubImage2D(3553,0,0,0,De,Se,$)):t.texImage2D(3553,0,xe,De,Se,$);w(M,Re)&&C(K),he.__currentVersion=he.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Ce(E,M,W){if(M.image.length!==6)return;const K=J(E,M),ae=M.source;if(t.activeTexture(33984+W),t.bindTexture(34067,E.__webglTexture),ae.version!==ae.__currentVersion||K===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,$=[];for(let re=0;re<6;re++)!he&&!Te?$[re]=p(M.image[re],!1,!0,c):$[re]=Te?M.image[re].image:M.image[re],$[re]=k(M,$[re]);const Re=$[0],De=S(Re)||a,Se=s.convert(M.format,M.encoding),xe=s.convert(M.type),P=A(M.internalFormat,Se,xe,M.encoding),pe=a&&M.isVideoTexture!==!0,de=E.__version===void 0;let Fe=B(M,Re,De);be(34067,M,De);let ue;if(he){pe&&de&&t.texStorage2D(34067,Fe,P,Re.width,Re.height);for(let re=0;re<6;re++){ue=$[re].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];M.format!==yt?Se!==null?pe?t.compressedTexSubImage2D(34069+re,Ie,0,0,je.width,je.height,Se,je.data):t.compressedTexImage2D(34069+re,Ie,P,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(34069+re,Ie,0,0,je.width,je.height,Se,xe,je.data):t.texImage2D(34069+re,Ie,P,je.width,je.height,0,Se,xe,je.data)}}}else{ue=M.mipmaps,pe&&de&&(ue.length>0&&Fe++,t.texStorage2D(34067,Fe,P,$[0].width,$[0].height));for(let re=0;re<6;re++)if(Te){pe?t.texSubImage2D(34069+re,0,0,0,$[re].width,$[re].height,Se,xe,$[re].data):t.texImage2D(34069+re,0,P,$[re].width,$[re].height,0,Se,xe,$[re].data);for(let Ie=0;Ie<ue.length;Ie++){const Rt=ue[Ie].image[re].image;pe?t.texSubImage2D(34069+re,Ie+1,0,0,Rt.width,Rt.height,Se,xe,Rt.data):t.texImage2D(34069+re,Ie+1,P,Rt.width,Rt.height,0,Se,xe,Rt.data)}}else{pe?t.texSubImage2D(34069+re,0,0,0,Se,xe,$[re]):t.texImage2D(34069+re,0,P,Se,xe,$[re]);for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];pe?t.texSubImage2D(34069+re,Ie+1,0,0,Se,xe,je.image[re]):t.texImage2D(34069+re,Ie+1,P,Se,xe,je.image[re])}}}w(M,De)&&C(34067),ae.__currentVersion=ae.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function me(E,M,W,K,ae){const he=s.convert(W.format,W.encoding),Te=s.convert(W.type),$=A(W.internalFormat,he,Te,W.encoding);n.get(M).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,$,M.width,M.height,M.depth,0,he,Te,null):t.texImage2D(ae,0,$,M.width,M.height,0,he,Te,null)),t.bindFramebuffer(36160,E),fe(M)?u.framebufferTexture2DMultisampleEXT(36160,K,ae,n.get(W).__webglTexture,0,_e(M)):r.framebufferTexture2D(36160,K,ae,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ge(E,M,W){if(r.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let K=33189;if(W||fe(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===En?K=36012:ae.type===rs&&(K=33190));const he=_e(M);fe(M)?u.renderbufferStorageMultisampleEXT(36161,he,K,M.width,M.height):r.renderbufferStorageMultisample(36161,he,K,M.width,M.height)}else r.renderbufferStorage(36161,K,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const K=_e(M);W&&fe(M)===!1?r.renderbufferStorageMultisample(36161,K,35056,M.width,M.height):fe(M)?u.renderbufferStorageMultisampleEXT(36161,K,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const K=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,ae=s.convert(K.format,K.encoding),he=s.convert(K.type),Te=A(K.internalFormat,ae,he,K.encoding),$=_e(M);W&&fe(M)===!1?r.renderbufferStorageMultisample(36161,$,Te,M.width,M.height):fe(M)?u.renderbufferStorageMultisampleEXT(36161,$,Te,M.width,M.height):r.renderbufferStorage(36161,Te,M.width,M.height)}r.bindRenderbuffer(36161,null)}function Ae(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,ae=_e(M);if(M.depthTexture.format===Yn)fe(M)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ae):r.framebufferTexture2D(36160,36096,3553,K,0);else if(M.depthTexture.format===fi)fe(M)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ae):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function H(E){const M=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,E)}else if(W){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=r.createRenderbuffer(),ge(M.__webglDepthbuffer[K],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),ge(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function j(E,M,W){const K=n.get(E);M!==void 0&&me(K.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&H(E)}function Q(E){const M=E.texture,W=n.get(E),K=n.get(M);E.addEventListener("dispose",b),E.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,o.memory.textures++);const ae=E.isWebGLCubeRenderTarget===!0,he=E.isWebGLMultipleRenderTargets===!0,Te=S(E)||a;if(ae){W.__webglFramebuffer=[];for(let $=0;$<6;$++)W.__webglFramebuffer[$]=r.createFramebuffer()}else if(W.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const $=E.texture;for(let Re=0,De=$.length;Re<De;Re++){const Se=n.get($[Re]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&E.samples>0&&fe(E)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer);const $=s.convert(M.format,M.encoding),Re=s.convert(M.type),De=A(M.internalFormat,$,Re,M.encoding),Se=_e(E);r.renderbufferStorageMultisample(36161,Se,De,E.width,E.height),t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,W.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}if(ae){t.bindTexture(34067,K.__webglTexture),be(34067,M,Te);for(let $=0;$<6;$++)me(W.__webglFramebuffer[$],E,M,36064,34069+$);w(M,Te)&&C(34067),t.unbindTexture()}else if(he){const $=E.texture;for(let Re=0,De=$.length;Re<De;Re++){const Se=$[Re],xe=n.get(Se);t.bindTexture(3553,xe.__webglTexture),be(3553,Se,Te),me(W.__webglFramebuffer,E,Se,36064+Re,3553),w(Se,Te)&&C(3553)}t.unbindTexture()}else{let $=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?$=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,K.__webglTexture),be($,M,Te),me(W.__webglFramebuffer,E,M,36064,$),w(M,Te)&&C($),t.unbindTexture()}E.depthBuffer&&H(E)}function oe(E){const M=S(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0,ae=W.length;K<ae;K++){const he=W[K];if(w(he,M)){const Te=E.isWebGLCubeRenderTarget?34067:3553,$=n.get(he).__webglTexture;t.bindTexture(Te,$),C(Te),t.unbindTexture()}}}function se(E){if(a&&E.samples>0&&fe(E)===!1){const M=E.width,W=E.height;let K=16384;const ae=[36064],he=E.stencilBuffer?33306:36096;E.depthBuffer&&ae.push(he);const Te=n.get(E),$=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;$===!1&&(E.depthBuffer&&(K|=256),E.stencilBuffer&&(K|=1024)),t.bindFramebuffer(36008,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Te.__webglFramebuffer),$===!0&&(r.invalidateFramebuffer(36008,[he]),r.invalidateFramebuffer(36009,[he])),r.blitFramebuffer(0,0,M,W,0,0,M,W,K,9728),r.invalidateFramebuffer(36008,ae),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Te.__webglMultisampledFramebuffer)}}function _e(E){return Math.min(d,E.samples)}function fe(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(E){const M=o.render.frame;f.get(E)!==M&&(f.set(E,M),E.update())}function k(E,M){const W=E.encoding,K=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===oo||W!==Tn&&(W===rt?a===!1?e.has("EXT_sRGB")===!0&&K===yt?(E.format=oo,E.minFilter=ut,E.generateMipmaps=!1):M=qn.sRGBToLinear(M):(K!==yt||ae!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),M}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=ie,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=j,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function Ug(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Zn)return 5121;if(s===pu)return 32819;if(s===mu)return 32820;if(s===du)return 5120;if(s===uu)return 5122;if(s===ss)return 5123;if(s===fu)return 5124;if(s===rs)return 5125;if(s===En)return 5126;if(s===di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gu)return 6406;if(s===yt)return 6408;if(s===yu)return 6409;if(s===_u)return 6410;if(s===Yn)return 6402;if(s===fi)return 34041;if(s===xu)return 6403;if(s===vu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===oo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bu)return 36244;if(s===wu)return 33319;if(s===Mu)return 33320;if(s===Su)return 36249;if(s===$r||s===eo||s===to||s===no)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qa||s===Ka||s===$a||s===el)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ka)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===el)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tl||s===nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===tl)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===il||s===sl||s===rl||s===ol||s===al||s===ll||s===cl||s===hl||s===dl||s===ul||s===fl||s===pl||s===ml||s===gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===il)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ol)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ll)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ml)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gl)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vl)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ui)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class mc extends At{constructor(e=[]){super();this.cameras=e}}mc.prototype.isArrayCamera=!0;class Pt extends Ge{constructor(){super();this.type="Group"}}Pt.prototype.isGroup=!0;const Vg={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vg))),c&&e.hand){o=!0;for(const g of e.hand.values()){const y=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const p=new Pt;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[g.jointName]=p,c.add(p)}const m=c.joints[g.jointName];y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class jo extends lt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=ss),n===void 0&&h===fi&&(n=ui);super(null,i,s,o,a,l,h,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:et,this.minFilter=l!==void 0?l:et,this.flipY=!1,this.generateMipmaps=!1}}jo.prototype.isDepthTexture=!0;class kg extends tn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,d=null,u=null;const f=t.getContextAttributes();let v=null,g=null;const y=[],m=new Map,p=new At;p.layers.enable(1),p.viewport=new le;const S=new At;S.layers.enable(2),S.viewport=new le;const x=[p,S],w=new mc;w.layers.enable(1),w.layers.enable(2);let C=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=y[F];return Y===void 0&&(Y=new Xo,y[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=y[F];return Y===void 0&&(Y=new Xo,y[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=y[F];return Y===void 0&&(Y=new Xo,y[F]=Y),Y.getHandSpace()};function B(F){const Y=m.get(F.inputSource);Y&&Y.dispatchEvent({type:F.type,data:F.inputSource})}function X(){m.forEach(function(F,Y){F.disconnect(Y)}),m.clear(),C=null,A=null,e.setRenderTarget(v),d=null,h=null,c=null,i=null,g=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return c},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),g=new St(d.framebufferWidth,d.framebufferHeight,{format:yt,type:Zn,encoding:e.outputEncoding})}else{let Y=null,ie=null,q=null;f.depth&&(q=f.stencil?35056:33190,Y=f.stencil?fi:Yn,ie=f.stencil?ui:ss);const ne={colorFormat:e.outputEncoding===rt?35907:32856,depthFormat:q,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ne),i.updateRenderState({layers:[h]}),g=new St(h.textureWidth,h.textureHeight,{format:yt,type:Zn,depthTexture:new jo(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const ve=e.properties.get(g);ve.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(F){const Y=i.inputSources;for(let ie=0;ie<y.length;ie++)m.set(Y[ie],y[ie]);for(let ie=0;ie<F.removed.length;ie++){const q=F.removed[ie],ne=m.get(q);ne&&(ne.dispatchEvent({type:"disconnected",data:q}),m.delete(q))}for(let ie=0;ie<F.added.length;ie++){const q=F.added[ie],ne=m.get(q);ne&&ne.dispatchEvent({type:"connected",data:q})}}const b=new _,L=new _;function R(F,Y,ie){b.setFromMatrixPosition(Y.matrixWorld),L.setFromMatrixPosition(ie.matrixWorld);const q=b.distanceTo(L),ne=Y.projectionMatrix.elements,ve=ie.projectionMatrix.elements,Ne=ne[14]/(ne[10]-1),be=ne[14]/(ne[10]+1),J=(ne[9]+1)/ne[5],He=(ne[9]-1)/ne[5],Ce=(ne[8]-1)/ne[0],me=(ve[8]+1)/ve[0],ge=Ne*Ce,Ae=Ne*me,H=q/(-Ce+me),j=H*-Ce;Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(j),F.translateZ(H),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Q=Ne+H,oe=be+H,se=ge-j,_e=Ae+(q-j),fe=J*be/oe*Q,Me=He*be/oe*Q;F.projectionMatrix.makePerspective(se,_e,fe,Me,Q,oe)}function O(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;w.near=S.near=p.near=F.near,w.far=S.far=p.far=F.far,(C!==w.near||A!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,A=w.far);const Y=F.parent,ie=w.cameras;O(w,Y);for(let ne=0;ne<ie.length;ne++)O(ie[ne],Y);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),F.position.copy(w.position),F.quaternion.copy(w.quaternion),F.scale.copy(w.scale),F.matrix.copy(w.matrix),F.matrixWorld.copy(w.matrixWorld);const q=F.children;for(let ne=0,ve=q.length;ne<ve;ne++)q[ne].updateMatrixWorld(!0);ie.length===2?R(w,p,S):w.projectionMatrix.copy(p.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let I=null;function N(F,Y){if(l=Y.getViewerPose(o),u=Y,l!==null){const q=l.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let ne=!1;q.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let ve=0;ve<q.length;ve++){const Ne=q[ve];let be=null;if(d!==null)be=d.getViewport(Ne);else{const He=c.getViewSubImage(h,Ne);be=He.viewport,ve===0&&(e.setRenderTargetTextures(g,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}const J=x[ve];J.matrix.fromArray(Ne.transform.matrix),J.projectionMatrix.fromArray(Ne.projectionMatrix),J.viewport.set(be.x,be.y,be.width,be.height),ve===0&&w.matrix.copy(J.matrix),ne===!0&&w.cameras.push(J)}}const ie=i.inputSources;for(let q=0;q<y.length;q++){const ne=y[q],ve=ie[q];ne.update(ve,Y,o)}I&&I(F,Y),u=null}const U=new Bl;U.setAnimationLoop(N),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}function Hg(r){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,S,x,w){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?u(m,p,w):d(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),v(m,p)):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?(n(m,p),y(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,S,x):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=r.get(p).envMap;S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===it&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===it&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===it&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===it&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===it&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===it&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),r.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){d(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===it&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===it&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===it&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function v(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function y(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===it&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===it&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Gg(){const r=as("canvas");return r.style.display="block",r}function Je(r={}){const e=r.canvas!==void 0?r.canvas:Gg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const g=this;let y=!1,m=0,p=0,S=null,x=-1,w=null;const C=new le,A=new le;let B=null,X=e.width,V=e.height,b=1,L=null,R=null;const O=new le(0,0,X,V),I=new le(0,0,X,V);let N=!1;const U=new ds;let F=!1,Y=!1,ie=null;const q=new ye,ne=new ee,ve=new _,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return S===null?b:1}let J=t;function He(T,z){for(let Z=0;Z<T.length;Z++){const G=T[Z],te=e.getContext(G,z);if(te!==null)return te}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ht}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",pe,!1),J===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),J=He(z,T),J===null)throw He(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,me,ge,Ae,H,j,Q,oe,se,_e,fe,Me,k,E,M,W,K,ae,he,Te,$,Re,De;function Se(){Ce=new am(J),me=new tm(J,Ce,r),Ce.init(me),Re=new Ug(J,Ce,me),ge=new zg(J,Ce,me),Ae=new hm(J),H=new Tg,j=new Bg(J,Ce,ge,H,me,Re,Ae),Q=new im(g),oe=new om(g),se=new tf(J,me),De=new $p(J,Ce,se,me),_e=new lm(J,se,Ae,De),fe=new pm(J,_e,se,Ae),he=new fm(J,me,j),W=new nm(H),Me=new Eg(g,Q,oe,Ce,me,De,W),k=new Hg(H),E=new Ag,M=new Ng(Ce,me),ae=new Kp(g,Q,ge,fe,h,o),K=new pc(g,fe,me),Te=new em(J,Ce,Ae,me),$=new cm(J,Ce,Ae,me),Ae.programs=Me.programs,g.capabilities=me,g.extensions=Ce,g.properties=H,g.renderLists=E,g.shadowMap=K,g.state=ge,g.info=Ae}Se();const xe=new kg(g,J);this.xr=xe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(T){T!==void 0&&(b=T,this.setSize(X,V,!1))},this.getSize=function(T){return T.set(X,V)},this.setSize=function(T,z,Z){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,V=z,e.width=Math.floor(T*b),e.height=Math.floor(z*b),Z!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(X*b,V*b).floor()},this.setDrawingBufferSize=function(T,z,Z){X=T,V=z,b=Z,e.width=Math.floor(T*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,z,Z,G){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,z,Z,G),ge.viewport(C.copy(O).multiplyScalar(b).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,z,Z,G){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,z,Z,G),ge.scissor(A.copy(I).multiplyScalar(b).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){ge.setScissorTest(N=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,z=!0,Z=!0){let G=0;T&&(G|=16384),z&&(G|=256),Z&&(G|=1024),J.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",pe,!1),E.dispose(),M.dispose(),H.dispose(),Q.dispose(),oe.dispose(),fe.dispose(),De.dispose(),Me.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",je),xe.removeEventListener("sessionend",Rt),ie&&(ie.dispose(),ie=null),nt.stop()};function P(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Ae.autoReset,z=K.enabled,Z=K.autoUpdate,G=K.needsUpdate,te=K.type;Se(),Ae.autoReset=T,K.enabled=z,K.autoUpdate=Z,K.needsUpdate=G,K.type=te}function de(T){const z=T.target;z.removeEventListener("dispose",de),Fe(z)}function Fe(T){ue(T),H.remove(T)}function ue(T){const z=H.get(T).programs;z!==void 0&&(z.forEach(function(Z){Me.releaseProgram(Z)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,G,te,Pe){z===null&&(z=Ne);const Oe=te.isMesh&&te.matrixWorld.determinant()<0,Ve=P_(T,z,Z,G,te);ge.setMaterial(G,Oe);let Be=Z.index;const Ke=Z.attributes.position;if(Be===null){if(Ke===void 0||Ke.count===0)return}else if(Be.count===0)return;let Ze=1;G.wireframe===!0&&(Be=_e.getWireframeAttribute(Z),Ze=2),De.setup(te,G,Ve,Z,Be);let Ye,dt=Te;Be!==null&&(Ye=se.get(Be),dt=$,dt.setIndex(Ye));const ri=Be!==null?Be.count:Ke.count,$i=Z.drawRange.start*Ze,es=Z.drawRange.count*Ze,un=Pe!==null?Pe.start*Ze:0,qe=Pe!==null?Pe.count*Ze:1/0,ts=Math.max($i,un),gt=Math.min(ri,$i+es,un+qe)-1,fn=Math.max(0,gt-ts+1);if(fn!==0){if(te.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*be()),dt.setMode(1)):dt.setMode(4);else if(te.isLine){let Xn=G.linewidth;Xn===void 0&&(Xn=1),ge.setLineWidth(Xn*be()),te.isLineSegments?dt.setMode(1):te.isLineLoop?dt.setMode(2):dt.setMode(3)}else te.isPoints?dt.setMode(0):te.isSprite&&dt.setMode(4);if(te.isInstancedMesh)dt.renderInstances(ts,fn,te.count);else if(Z.isInstancedBufferGeometry){const Xn=Math.min(Z.instanceCount,Z._maxInstanceCount);dt.renderInstances(ts,fn,Xn)}else dt.render(ts,fn)}},this.compile=function(T,z){u=M.get(T),u.init(),v.push(u),T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(u.pushLight(Z),Z.castShadow&&u.pushShadow(Z))}),u.setupLights(g.physicallyCorrectLights),T.traverse(function(Z){const G=Z.material;if(G)if(Array.isArray(G))for(let te=0;te<G.length;te++){const Pe=G[te];Oa(Pe,T,Z)}else Oa(G,T,Z)}),v.pop(),u=null};let re=null;function Ie(T){re&&re(T)}function je(){nt.stop()}function Rt(){nt.start()}const nt=new Bl;nt.setAnimationLoop(Ie),typeof window<"u"&&nt.setContext(window),this.setAnimationLoop=function(T){re=T,xe.setAnimationLoop(T),T===null?nt.stop():nt.start()},xe.addEventListener("sessionstart",je),xe.addEventListener("sessionend",Rt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,z,S),u=M.get(T,v.length),u.init(),v.push(u),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U.setFromProjectionMatrix(q),Y=this.localClippingEnabled,F=W.init(this.clippingPlanes,Y,z),d=E.get(T,f.length),d.init(),f.push(d),hn(T,z,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(L,R),F===!0&&W.beginShadows();const Z=u.state.shadowsArray;if(K.render(Z,T,z),F===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(d,T),u.setupLights(g.physicallyCorrectLights),z.isArrayCamera){const G=z.cameras;for(let te=0,Pe=G.length;te<Pe;te++){const Oe=G[te];dn(d,T,Oe,Oe.viewport)}}else dn(d,T,z);S!==null&&(j.updateMultisampleRenderTarget(S),j.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(g,T,z),De.resetDefaultState(),x=-1,w=null,v.pop(),v.length>0?u=v[v.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function hn(T,z,Z,G){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||U.intersectsSprite(T)){G&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);const Oe=fe.update(T),Ve=T.material;Ve.visible&&d.push(T,Oe,Ve,Z,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ae.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ae.render.frame),!T.frustumCulled||U.intersectsObject(T))){G&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);const Oe=fe.update(T),Ve=T.material;if(Array.isArray(Ve)){const Be=Oe.groups;for(let Ke=0,Ze=Be.length;Ke<Ze;Ke++){const Ye=Be[Ke],dt=Ve[Ye.materialIndex];dt&&dt.visible&&d.push(T,Oe,dt,Z,ve.z,Ye)}}else Ve.visible&&d.push(T,Oe,Ve,Z,ve.z,null)}}const Pe=T.children;for(let Oe=0,Ve=Pe.length;Oe<Ve;Oe++)hn(Pe[Oe],z,Z,G)}function dn(T,z,Z,G){const te=T.opaque,Pe=T.transmissive,Oe=T.transparent;u.setupLightsView(Z),Pe.length>0&&A_(te,z,Z),G&&ge.viewport(C.copy(G)),te.length>0&&jr(te,z,Z),Pe.length>0&&jr(Pe,z,Z),Oe.length>0&&jr(Oe,z,Z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function A_(T,z,Z){const G=me.isWebGL2;ie===null&&(ie=new St(1,1,{generateMipmaps:!0,type:Re.convert(di)!==null?di:Zn,minFilter:Bs,samples:G&&s===!0?4:0})),g.getDrawingBufferSize(ne),G?ie.setSize(ne.x,ne.y):ie.setSize(ho(ne.x),ho(ne.y));const te=g.getRenderTarget();g.setRenderTarget(ie),g.clear();const Pe=g.toneMapping;g.toneMapping=Sn,jr(T,z,Z),g.toneMapping=Pe,j.updateMultisampleRenderTarget(ie),j.updateRenderTargetMipmap(ie),g.setRenderTarget(te)}function jr(T,z,Z){const G=z.isScene===!0?z.overrideMaterial:null;for(let te=0,Pe=T.length;te<Pe;te++){const Oe=T[te],Ve=Oe.object,Be=Oe.geometry,Ke=G===null?Oe.material:G,Ze=Oe.group;Ve.layers.test(Z.layers)&&C_(Ve,z,Z,Be,Ke,Ze)}}function C_(T,z,Z,G,te,Pe){T.onBeforeRender(g,z,Z,G,te,Pe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(g,z,Z,G,T,Pe),te.transparent===!0&&te.side===jn?(te.side=it,te.needsUpdate=!0,g.renderBufferDirect(Z,z,G,te,T,Pe),te.side=oi,te.needsUpdate=!0,g.renderBufferDirect(Z,z,G,te,T,Pe),te.side=jn):g.renderBufferDirect(Z,z,G,te,T,Pe),T.onAfterRender(g,z,Z,G,te,Pe)}function Oa(T,z,Z){z.isScene!==!0&&(z=Ne);const G=H.get(T),te=u.state.lights,Pe=u.state.shadowsArray,Oe=te.state.version,Ve=Me.getParameters(T,te.state,Pe,z,Z),Be=Me.getProgramCacheKey(Ve);let Ke=G.programs;G.environment=T.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(T.isMeshStandardMaterial?oe:Q).get(T.envMap||G.environment),Ke===void 0&&(T.addEventListener("dispose",de),Ke=new Map,G.programs=Ke);let Ze=Ke.get(Be);if(Ze!==void 0){if(G.currentProgram===Ze&&G.lightsStateVersion===Oe)return Nd(T,Ve),Ze}else Ve.uniforms=Me.getUniforms(T),T.onBuild(Z,Ve,g),T.onBeforeCompile(Ve,g),Ze=Me.acquireProgram(Ve,Be),Ke.set(Be,Ze),G.uniforms=Ve.uniforms;const Ye=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=W.uniform),Nd(T,Ve),G.needsLights=D_(T),G.lightsStateVersion=Oe,G.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMap.value=te.state.directionalShadowMap,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotShadowMap.value=te.state.spotShadowMap,Ye.spotShadowMatrix.value=te.state.spotShadowMatrix,Ye.pointShadowMap.value=te.state.pointShadowMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix);const dt=Ze.getUniforms(),ri=Fn.seqWithValue(dt.seq,Ye);return G.currentProgram=Ze,G.uniformsList=ri,Ze}function Nd(T,z){const Z=H.get(T);Z.outputEncoding=z.outputEncoding,Z.instancing=z.instancing,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function P_(T,z,Z,G,te){z.isScene!==!0&&(z=Ne),j.resetTextureUnits();const Pe=z.fog,Oe=G.isMeshStandardMaterial?z.environment:null,Ve=S===null?g.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Tn,Be=(G.isMeshStandardMaterial?oe:Q).get(G.envMap||Oe),Ke=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!G.normalMap&&!!Z.attributes.tangent,Ye=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,ri=!!Z.morphAttributes.color,$i=G.toneMapped?g.toneMapping:Sn,es=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,un=es!==void 0?es.length:0,qe=H.get(G),ts=u.state.lights;if(F===!0&&(Y===!0||T!==w)){const $t=T===w&&G.id===x;W.setState(G,T,$t)}let gt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ts.state.version||qe.outputEncoding!==Ve||te.isInstancedMesh&&qe.instancing===!1||!te.isInstancedMesh&&qe.instancing===!0||te.isSkinnedMesh&&qe.skinning===!1||!te.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Be||G.fog&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==W.numPlanes||qe.numIntersection!==W.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==Ze||qe.morphTargets!==Ye||qe.morphNormals!==dt||qe.morphColors!==ri||qe.toneMapping!==$i||me.isWebGL2===!0&&qe.morphTargetsCount!==un)&&(gt=!0):(gt=!0,qe.__version=G.version);let fn=qe.currentProgram;gt===!0&&(fn=Oa(G,z,te));let Xn=!1,Is=!1,za=!1;const Lt=fn.getUniforms(),Ns=qe.uniforms;if(ge.useProgram(fn.program)&&(Xn=!0,Is=!0,za=!0),G.id!==x&&(x=G.id,Is=!0),Xn||w!==T){if(Lt.setValue(J,"projectionMatrix",T.projectionMatrix),me.logarithmicDepthBuffer&&Lt.setValue(J,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Is=!0,za=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const $t=Lt.map.cameraPosition;$t!==void 0&&$t.setValue(J,ve.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(J,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||te.isSkinnedMesh)&&Lt.setValue(J,"viewMatrix",T.matrixWorldInverse)}if(te.isSkinnedMesh){Lt.setOptional(J,te,"bindMatrix"),Lt.setOptional(J,te,"bindMatrixInverse");const $t=te.skeleton;$t&&(me.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Lt.setValue(J,"boneTexture",$t.boneTexture,j),Lt.setValue(J,"boneTextureSize",$t.boneTextureSize)):Lt.setOptional(J,$t,"boneMatrices"))}const Ba=Z.morphAttributes;return(Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&me.isWebGL2===!0)&&he.update(te,Z,G,fn),(Is||qe.receiveShadow!==te.receiveShadow)&&(qe.receiveShadow=te.receiveShadow,Lt.setValue(J,"receiveShadow",te.receiveShadow)),Is&&(Lt.setValue(J,"toneMappingExposure",g.toneMappingExposure),qe.needsLights&&R_(Ns,za),Pe&&G.fog&&k.refreshFogUniforms(Ns,Pe),k.refreshMaterialUniforms(Ns,G,b,V,ie),Fn.upload(J,qe.uniformsList,Ns,j)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fn.upload(J,qe.uniformsList,Ns,j),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(J,"center",te.center),Lt.setValue(J,"modelViewMatrix",te.modelViewMatrix),Lt.setValue(J,"normalMatrix",te.normalMatrix),Lt.setValue(J,"modelMatrix",te.matrixWorld),fn}function R_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z,T.directionalShadowMap.needsUpdate=z,T.directionalShadowMatrix.needsUpdate=z,T.spotShadowMap.needsUpdate=z,T.spotShadowMatrix.needsUpdate=z,T.pointShadowMap.needsUpdate=z,T.pointShadowMatrix.needsUpdate=z}function D_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,z,Z){H.get(T.texture).__webglTexture=z,H.get(T.depthTexture).__webglTexture=Z;const G=H.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,z){const Z=H.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Z=0){S=T,m=z,p=Z;let G=!0;if(T){const Be=H.get(T);Be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),G=!1):Be.__webglFramebuffer===void 0?j.setupRenderTarget(T):Be.__hasExternalTextures&&j.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture)}let te=null,Pe=!1,Oe=!1;if(T){const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Oe=!0);const Ke=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(te=Ke[z],Pe=!0):me.isWebGL2&&T.samples>0&&j.useMultisampledRTT(T)===!1?te=H.get(T).__webglMultisampledFramebuffer:te=Ke,C.copy(T.viewport),A.copy(T.scissor),B=T.scissorTest}else C.copy(O).multiplyScalar(b).floor(),A.copy(I).multiplyScalar(b).floor(),B=N;if(ge.bindFramebuffer(36160,te)&&me.drawBuffers&&G&&ge.drawBuffers(T,te),ge.viewport(C),ge.scissor(A),ge.setScissorTest(B),Pe){const Be=H.get(T.texture);J.framebufferTexture2D(36160,36064,34069+z,Be.__webglTexture,Z)}else if(Oe){const Be=H.get(T.texture),Ke=z||0;J.framebufferTextureLayer(36160,36064,Be.__webglTexture,Z||0,Ke)}x=-1},this.readRenderTargetPixels=function(T,z,Z,G,te,Pe,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){ge.bindFramebuffer(36160,Ve);try{const Be=T.texture,Ke=Be.format,Ze=Be.type;if(Ke!==yt&&Re.convert(Ke)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ze===di&&(Ce.has("EXT_color_buffer_half_float")||me.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ze!==Zn&&Re.convert(Ze)!==J.getParameter(35738)&&!(Ze===En&&(me.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J.checkFramebufferStatus(36160)===36053?z>=0&&z<=T.width-G&&Z>=0&&Z<=T.height-te&&J.readPixels(z,Z,G,te,Re.convert(Ke),Re.convert(Ze),Pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Be=S!==null?H.get(S).__webglFramebuffer:null;ge.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,z,Z=0){if(z.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const G=Math.pow(2,-Z),te=Math.floor(z.image.width*G),Pe=Math.floor(z.image.height*G);j.setTexture2D(z,0),J.copyTexSubImage2D(3553,Z,0,0,T.x,T.y,te,Pe),ge.unbindTexture()},this.copyTextureToTexture=function(T,z,Z,G=0){const te=z.image.width,Pe=z.image.height,Oe=Re.convert(Z.format),Ve=Re.convert(Z.type);j.setTexture2D(Z,0),J.pixelStorei(37440,Z.flipY),J.pixelStorei(37441,Z.premultiplyAlpha),J.pixelStorei(3317,Z.unpackAlignment),z.isDataTexture?J.texSubImage2D(3553,G,T.x,T.y,te,Pe,Oe,Ve,z.image.data):z.isCompressedTexture?J.compressedTexSubImage2D(3553,G,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Oe,z.mipmaps[0].data):J.texSubImage2D(3553,G,T.x,T.y,Oe,Ve,z.image),G===0&&Z.generateMipmaps&&J.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Z,G,te=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,Ve=T.max.z-T.min.z+1,Be=Re.convert(G.format),Ke=Re.convert(G.type);let Ze;if(G.isData3DTexture)j.setTexture3D(G,0),Ze=32879;else if(G.isDataArrayTexture)j.setTexture2DArray(G,0),Ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,G.flipY),J.pixelStorei(37441,G.premultiplyAlpha),J.pixelStorei(3317,G.unpackAlignment);const Ye=J.getParameter(3314),dt=J.getParameter(32878),ri=J.getParameter(3316),$i=J.getParameter(3315),es=J.getParameter(32877),un=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;J.pixelStorei(3314,un.width),J.pixelStorei(32878,un.height),J.pixelStorei(3316,T.min.x),J.pixelStorei(3315,T.min.y),J.pixelStorei(32877,T.min.z),Z.isDataTexture||Z.isData3DTexture?J.texSubImage3D(Ze,te,z.x,z.y,z.z,Pe,Oe,Ve,Be,Ke,un.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ze,te,z.x,z.y,z.z,Pe,Oe,Ve,Be,un.data)):J.texSubImage3D(Ze,te,z.x,z.y,z.z,Pe,Oe,Ve,Be,Ke,un),J.pixelStorei(3314,Ye),J.pixelStorei(32878,dt),J.pixelStorei(3316,ri),J.pixelStorei(3315,$i),J.pixelStorei(32877,es),te===0&&G.generateMipmaps&&J.generateMipmap(Ze),ge.unbindTexture()},this.initTexture=function(T){j.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){m=0,p=0,S=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Je.prototype.isWebGLRenderer=!0;class Wg extends Je{}Wg.prototype.isWebGL1Renderer=!0;class _n extends Ge{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}_n.prototype.isScene=!0;class fs{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=os,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}fs.prototype.isInterleavedBuffer=!0;const ft=new _;class ps{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ue(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ps.prototype.isInterleavedBufferAttribute=!0;class ur extends vt{constructor(e){super();this.type="SpriteMaterial",this.color=new D(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}ur.prototype.isSpriteMaterial=!0;let Fi;const ms=new _,Oi=new _,zi=new _,Bi=new ee,gs=new ee,gc=new ye,fr=new _,vs=new _,pr=new _,vc=new ee,Zo=new ee,yc=new ee;class _c extends Ge{constructor(e){super();if(this.type="Sprite",Fi===void 0){Fi=new ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fs(t,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new ps(n,3,0,!1)),Fi.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=Fi,this.material=e!==void 0?e:new ur,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-zi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;mr(fr.set(-.5,-.5,0),zi,o,Oi,i,s),mr(vs.set(.5,-.5,0),zi,o,Oi,i,s),mr(pr.set(.5,.5,0),zi,o,Oi,i,s),vc.set(0,0),Zo.set(1,0),yc.set(1,1);let a=e.ray.intersectTriangle(fr,vs,pr,!1,ms);if(a===null&&(mr(vs.set(-.5,.5,0),zi,o,Oi,i,s),Zo.set(0,1),a=e.ray.intersectTriangle(fr,pr,vs,!1,ms),a===null))return;const l=e.ray.origin.distanceTo(ms);l<e.near||l>e.far||t.push({distance:l,point:ms.clone(),uv:mt.getUV(ms,fr,vs,pr,vc,Zo,yc,new ee),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}_c.prototype.isSprite=!0;function mr(r,e,t,n,i,s){Bi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(gs.x=s*Bi.x-i*Bi.y,gs.y=i*Bi.x+s*Bi.y):gs.copy(Bi),r.copy(e),r.x+=gs.x,r.y+=gs.y,r.applyMatrix4(gc)}const xc=new _,bc=new le,wc=new le,Xg=new _,Mc=new ye;class Sc extends $e{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new le,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;bc.fromBufferAttribute(i.attributes.skinIndex,e),wc.fromBufferAttribute(i.attributes.skinWeight,e),xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=wc.getComponent(s);if(o!==0){const a=bc.getComponent(s);Mc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Xg.copy(xc).applyMatrix4(Mc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Sc.prototype.isSkinnedMesh=!0;class jg extends Ge{constructor(){super();this.type="Bone"}}jg.prototype.isBone=!0;class Yo extends lt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=et,h=et,d,u){super(null,o,a,l,c,h,i,s,d,u);this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Yo.prototype.isDataTexture=!0;class qo extends Ue{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}qo.prototype.isInstancedBufferAttribute=!0;const Ec=new ye,Tc=new ye,gr=[],ys=new $e;class Zg extends $e{constructor(e,t,n){super(e,t);this.instanceMatrix=new qo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Ec),Tc.multiplyMatrices(n,Ec),ys.matrixWorld=Tc,ys.raycast(e,gr);for(let o=0,a=gr.length;o<a;o++){const l=gr[o];l.instanceId=s,l.object=this,t.push(l)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Zg.prototype.isInstancedMesh=!0;class Bt extends vt{constructor(e){super();this.type="LineBasicMaterial",this.color=new D(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Bt.prototype.isLineBasicMaterial=!0;const Lc=new _,Ac=new _,Cc=new ye,Jo=new $n,vr=new sn;class On extends Ge{constructor(e=new ze,t=new Bt){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lc.fromBufferAttribute(t,i-1),Ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Ac);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=s,e.ray.intersectsSphere(vr)===!1)return;Cc.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(Cc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new _,h=new _,d=new _,u=new _,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const v=n.index,y=n.attributes.position;if(v!==null){const m=Math.max(0,o.start),p=Math.min(v.count,o.start+o.count);for(let S=m,x=p-1;S<x;S+=f){const w=v.getX(S),C=v.getX(S+1);if(c.fromBufferAttribute(y,w),h.fromBufferAttribute(y,C),Jo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(u);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(y.count,o.start+o.count);for(let S=m,x=p-1;S<x;S+=f){if(c.fromBufferAttribute(y,S),h.fromBufferAttribute(y,S+1),Jo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}On.prototype.isLine=!0;const Pc=new _,Rc=new _;class _s extends On{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pc.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pc.distanceTo(Rc);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}_s.prototype.isLineSegments=!0;class Yg extends On{constructor(e,t){super(e,t);this.type="LineLoop"}}Yg.prototype.isLineLoop=!0;class yr extends vt{constructor(e){super();this.type="PointsMaterial",this.color=new D(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}yr.prototype.isPointsMaterial=!0;const Dc=new ye,Qo=new $n,_r=new sn,xr=new _;class br extends Ge{constructor(e=new ze,t=new yr){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;Dc.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Dc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=u,g=f;v<g;v++){const y=c.getX(v);xr.fromBufferAttribute(d,y),Ic(xr,y,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let v=u,g=f;v<g;v++)xr.fromBufferAttribute(d,v),Ic(xr,v,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}br.prototype.isPoints=!0;function Ic(r,e,t,n,i,s,o){const a=Qo.distanceSqToPoint(r);if(a<t){const l=new _;Qo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qg extends lt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.minFilter=o!==void 0?o:ut,this.magFilter=s!==void 0?s:ut,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}qg.prototype.isVideoTexture=!0;class Jg extends lt{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=et,this.minFilter=et,this.generateMipmaps=!1,this.needsUpdate=!0}}Jg.prototype.isFramebufferTexture=!0;class Qg extends lt{constructor(e,t,n,i,s,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,s,d,u);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Qg.prototype.isCompressedTexture=!0;class Nc extends lt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.needsUpdate=!0}}Nc.prototype.isCanvasTexture=!0;class wr extends ze{constructor(e=1,t=8,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new _,h=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}static fromJSON(e){return new wr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ko extends ze{constructor(e=1,t=1,n=1,i=8,s=1,o=!1,a=0,l=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let v=0;const g=[],y=n/2;let m=0;p(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function p(){const x=new _,w=new _;let C=0;const A=(t-e)/n;for(let B=0;B<=s;B++){const X=[],V=B/s,b=V*(t-e)+e;for(let L=0;L<=i;L++){const R=L/i,O=R*l+a,I=Math.sin(O),N=Math.cos(O);w.x=b*I,w.y=-V*n+y,w.z=b*N,d.push(w.x,w.y,w.z),x.set(I,A,N).normalize(),u.push(x.x,x.y,x.z),f.push(R,1-V),X.push(v++)}g.push(X)}for(let B=0;B<i;B++)for(let X=0;X<s;X++){const V=g[X][B],b=g[X+1][B],L=g[X+1][B+1],R=g[X][B+1];h.push(V,b,R),h.push(b,L,R),C+=6}c.addGroup(m,C,0),m+=C}function S(x){const w=v,C=new ee,A=new _;let B=0;const X=x===!0?e:t,V=x===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,y*V,0),u.push(0,V,0),f.push(.5,.5),v++;const b=v;for(let L=0;L<=i;L++){const O=L/i*l+a,I=Math.cos(O),N=Math.sin(O);A.x=X*N,A.y=y*V,A.z=X*I,d.push(A.x,A.y,A.z),u.push(0,V,0),C.x=I*.5+.5,C.y=N*.5*V+.5,f.push(C.x,C.y),v++}for(let L=0;L<i;L++){const R=w+L,O=b+L;x===!0?h.push(O,O+1,R):h.push(O+1,O,R),B+=3}c.addGroup(m,B,x===!0?1:2),m+=B}}static fromJSON(e){return new Ko(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends Ko{constructor(e=1,t=1,n=8,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}new _,new _,new _,new mt;class Ut{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ee:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new _,i=[],s=[],o=[],a=new _,l=new ye;for(let f=0;f<=e;f++){const v=f/e;i[f]=this.getTangentAt(v,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Dt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Dt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],f*v)),o[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mr extends Ut{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ee,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Mr.prototype.isEllipseCurve=!0;class Fc extends Mr{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o);this.type="ArcCurve"}}Fc.prototype.isArcCurve=!0;function ea(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Sr=new _,ta=new ea,na=new ea,ia=new ea;class Oc extends Ut{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new _){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Sr.subVectors(i[0],i[1]).add(i[0]),c=Sr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Sr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),v<1e-4&&(v=g),y<1e-4&&(y=g),ta.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,v,g,y),na.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,v,g,y),ia.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,v,g,y)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),na.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ia.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ta.calc(l),na.calc(l),ia.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Oc.prototype.isCatmullRomCurve3=!0;function zc(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Kg(r,e){const t=1-r;return t*t*e}function $g(r,e){return 2*(1-r)*r*e}function e0(r,e){return r*r*e}function xs(r,e,t,n){return Kg(r,e)+$g(r,t)+e0(r,n)}function t0(r,e){const t=1-r;return t*t*t*e}function n0(r,e){const t=1-r;return 3*t*t*r*e}function i0(r,e){return 3*(1-r)*r*r*e}function s0(r,e){return r*r*r*e}function bs(r,e,t,n,i){return t0(r,e)+n0(r,t)+i0(r,n)+s0(r,i)}class sa extends Ut{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,i.x,s.x,o.x,a.x),bs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}sa.prototype.isCubicBezierCurve=!0;class Bc extends Ut{constructor(e=new _,t=new _,n=new _,i=new _){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,i.x,s.x,o.x,a.x),bs(e,i.y,s.y,o.y,a.y),bs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Bc.prototype.isCubicBezierCurve3=!0;class Er extends Ut{constructor(e=new ee,t=new ee){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ee;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Er.prototype.isLineCurve=!0;class r0 extends Ut{constructor(e=new _,t=new _){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new _){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ra extends Ut{constructor(e=new ee,t=new ee,n=new ee){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,i.x,s.x,o.x),xs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ra.prototype.isQuadraticBezierCurve=!0;class Uc extends Ut{constructor(e=new _,t=new _,n=new _){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,i.x,s.x,o.x),xs(e,i.y,s.y,o.y),xs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Uc.prototype.isQuadraticBezierCurve3=!0;class oa extends Ut{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(zc(a,l.x,c.x,h.x,d.x),zc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}oa.prototype.isSplineCurve=!0;var Vc=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:Oc,CubicBezierCurve:sa,CubicBezierCurve3:Bc,EllipseCurve:Mr,LineCurve:Er,LineCurve3:r0,QuadraticBezierCurve:ra,QuadraticBezierCurve3:Uc,SplineCurve:oa});class o0 extends Ut{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Er(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}}class aa extends o0{constructor(e){super();this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Er(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ra(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new sa(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Mr(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ui extends aa{constructor(e){super(e);this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new aa().fromJSON(i))}return this}}const a0={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=kc(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,u,f;if(n&&(s=u0(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let v=t;v<i;v+=t)d=r[v],u=r[v+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return ws(s,o,t,a,l,f),o}};function kc(r,e,t,n,i){let s,o;if(i===M0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Wc(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Wc(s,r[s],r[s+1],o);return o&&Tr(o,o.next)&&(Ss(o),o=o.next),o}function zn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||ht(t.prev,t,t.next)===0)){if(Ss(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ws(r,e,t,n,i,s,o){if(!r)return;!o&&s&&v0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?c0(r,n,i,s):l0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Ss(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=h0(zn(r),e,t),ws(r,e,t,n,i,s,2)):o===2&&d0(r,e,t,n,i,s):ws(zn(r),e,t,n,i,s,1);break}}}function l0(r){const e=r.prev,t=r,n=r.next;if(ht(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Vi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ht(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function c0(r,e,t,n){const i=r.prev,s=r,o=r.next;if(ht(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,d=la(a,l,e,t,n),u=la(c,h,e,t,n);let f=r.prevZ,v=r.nextZ;for(;f&&f.z>=d&&v&&v.z<=u;){if(f!==r.prev&&f!==r.next&&Vi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ht(f.prev,f,f.next)>=0||(f=f.prevZ,v!==r.prev&&v!==r.next&&Vi(i.x,i.y,s.x,s.y,o.x,o.y,v.x,v.y)&&ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;f&&f.z>=d;){if(f!==r.prev&&f!==r.next&&Vi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ht(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;v&&v.z<=u;){if(v!==r.prev&&v!==r.next&&Vi(i.x,i.y,s.x,s.y,o.x,o.y,v.x,v.y)&&ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function h0(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Tr(i,s)&&Hc(i,n,n.next,s)&&Ms(i,s)&&Ms(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Ss(n),Ss(n.next),n=r=s),n=n.next}while(n!==r);return zn(n)}function d0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&x0(o,a)){let l=Gc(o,a);o=zn(o,o.next),l=zn(l,l.next),ws(o,e,t,n,i,s),ws(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function u0(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=kc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(_0(c));for(i.sort(f0),s=0;s<i.length;s++)p0(i[s],t),t=zn(t,t.next);return t}function f0(r,e){return r.x-e.x}function p0(r,e){if(e=m0(r,e),e){const t=Gc(e,r);zn(e,e.next),zn(t,t.next)}}function m0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s){if(s=u,u===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Vi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Ms(t,r)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&g0(o,t)))&&(o=t,h=d)),t=t.next;while(t!==a);return o}function g0(r,e){return ht(r.prev,r,e.prev)<0&&ht(e.next,r,r.next)<0}function v0(r,e,t,n){let i=r;do i.z===null&&(i.z=la(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,y0(i)}function y0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function la(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function _0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Vi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function x0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!b0(r,e)&&(Ms(r,e)&&Ms(e,r)&&w0(r,e)&&(ht(r.prev,r,e.prev)||ht(r,e.prev,e))||Tr(r,e)&&ht(r.prev,r,r.next)>0&&ht(e.prev,e,e.next)>0)}function ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Tr(r,e){return r.x===e.x&&r.y===e.y}function Hc(r,e,t,n){const i=Ar(ht(r,e,t)),s=Ar(ht(r,e,n)),o=Ar(ht(t,n,r)),a=Ar(ht(t,n,e));return!!(i!==s&&o!==a||i===0&&Lr(r,t,e)||s===0&&Lr(r,n,e)||o===0&&Lr(t,r,n)||a===0&&Lr(t,e,n))}function Lr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ar(r){return r>0?1:r<0?-1:0}function b0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Hc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ms(r,e){return ht(r.prev,r,r.next)<0?ht(r,e,r.next)>=0&&ht(r,r.prev,e)>=0:ht(r,e,r.prev)<0||ht(r,r.next,e)<0}function w0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Gc(r,e){const t=new ca(r.i,r.x,r.y),n=new ca(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Wc(r,e,t,n){const i=new ca(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ss(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ca(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Bn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Bn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Xc(e),jc(n,e);let o=e.length;t.forEach(Xc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,jc(n,t[l]);const a=a0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Xc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function jc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ki extends ze{constructor(e=new Ui([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:S0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let S,x=!1,w,C,A,B;m&&(S=m.getSpacedPoints(h),x=!0,u=!1,w=m.computeFrenetFrames(h,!1),C=new _,A=new _,B=new _),u||(y=0,f=0,v=0,g=0);const X=a.extractPoints(c);let V=X.shape;const b=X.holes;if(!Bn.isClockWise(V)){V=V.reverse();for(let H=0,j=b.length;H<j;H++){const Q=b[H];Bn.isClockWise(Q)&&(b[H]=Q.reverse())}}const R=Bn.triangulateShape(V,b),O=V;for(let H=0,j=b.length;H<j;H++){const Q=b[H];V=V.concat(Q)}function I(H,j,Q){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(Q).add(H)}const N=V.length,U=R.length;function F(H,j,Q){let oe,se,_e;const fe=H.x-j.x,Me=H.y-j.y,k=Q.x-H.x,E=Q.y-H.y,M=fe*fe+Me*Me,W=fe*E-Me*k;if(Math.abs(W)>Number.EPSILON){const K=Math.sqrt(M),ae=Math.sqrt(k*k+E*E),he=j.x-Me/K,Te=j.y+fe/K,$=Q.x-E/ae,Re=Q.y+k/ae,De=(($-he)*E-(Re-Te)*k)/(fe*E-Me*k);oe=he+fe*De-H.x,se=Te+Me*De-H.y;const Se=oe*oe+se*se;if(Se<=2)return new ee(oe,se);_e=Math.sqrt(Se/2)}else{let K=!1;fe>Number.EPSILON?k>Number.EPSILON&&(K=!0):fe<-Number.EPSILON?k<-Number.EPSILON&&(K=!0):Math.sign(Me)===Math.sign(E)&&(K=!0),K?(oe=-Me,se=fe,_e=Math.sqrt(M)):(oe=fe,se=Me,_e=Math.sqrt(M/2))}return new ee(oe/_e,se/_e)}const Y=[];for(let H=0,j=O.length,Q=j-1,oe=H+1;H<j;H++,Q++,oe++)Q===j&&(Q=0),oe===j&&(oe=0),Y[H]=F(O[H],O[Q],O[oe]);const ie=[];let q,ne=Y.concat();for(let H=0,j=b.length;H<j;H++){const Q=b[H];q=[];for(let oe=0,se=Q.length,_e=se-1,fe=oe+1;oe<se;oe++,_e++,fe++)_e===se&&(_e=0),fe===se&&(fe=0),q[oe]=F(Q[oe],Q[_e],Q[fe]);ie.push(q),ne=ne.concat(q)}for(let H=0;H<y;H++){const j=H/y,Q=f*Math.cos(j*Math.PI/2),oe=v*Math.sin(j*Math.PI/2)+g;for(let se=0,_e=O.length;se<_e;se++){const fe=I(O[se],Y[se],oe);He(fe.x,fe.y,-Q)}for(let se=0,_e=b.length;se<_e;se++){const fe=b[se];q=ie[se];for(let Me=0,k=fe.length;Me<k;Me++){const E=I(fe[Me],q[Me],oe);He(E.x,E.y,-Q)}}}const ve=v+g;for(let H=0;H<N;H++){const j=u?I(V[H],ne[H],ve):V[H];x?(A.copy(w.normals[0]).multiplyScalar(j.x),C.copy(w.binormals[0]).multiplyScalar(j.y),B.copy(S[0]).add(A).add(C),He(B.x,B.y,B.z)):He(j.x,j.y,0)}for(let H=1;H<=h;H++)for(let j=0;j<N;j++){const Q=u?I(V[j],ne[j],ve):V[j];x?(A.copy(w.normals[H]).multiplyScalar(Q.x),C.copy(w.binormals[H]).multiplyScalar(Q.y),B.copy(S[H]).add(A).add(C),He(B.x,B.y,B.z)):He(Q.x,Q.y,d/h*H)}for(let H=y-1;H>=0;H--){const j=H/y,Q=f*Math.cos(j*Math.PI/2),oe=v*Math.sin(j*Math.PI/2)+g;for(let se=0,_e=O.length;se<_e;se++){const fe=I(O[se],Y[se],oe);He(fe.x,fe.y,d+Q)}for(let se=0,_e=b.length;se<_e;se++){const fe=b[se];q=ie[se];for(let Me=0,k=fe.length;Me<k;Me++){const E=I(fe[Me],q[Me],oe);x?He(E.x,E.y+S[h-1].y,S[h-1].x+Q):He(E.x,E.y,d+Q)}}}Ne(),be();function Ne(){const H=i.length/3;if(u){let j=0,Q=N*j;for(let oe=0;oe<U;oe++){const se=R[oe];Ce(se[2]+Q,se[1]+Q,se[0]+Q)}j=h+y*2,Q=N*j;for(let oe=0;oe<U;oe++){const se=R[oe];Ce(se[0]+Q,se[1]+Q,se[2]+Q)}}else{for(let j=0;j<U;j++){const Q=R[j];Ce(Q[2],Q[1],Q[0])}for(let j=0;j<U;j++){const Q=R[j];Ce(Q[0]+N*h,Q[1]+N*h,Q[2]+N*h)}}n.addGroup(H,i.length/3-H,0)}function be(){const H=i.length/3;let j=0;J(O,j),j+=O.length;for(let Q=0,oe=b.length;Q<oe;Q++){const se=b[Q];J(se,j),j+=se.length}n.addGroup(H,i.length/3-H,1)}function J(H,j){let Q=H.length;for(;--Q>=0;){const oe=Q;let se=Q-1;se<0&&(se=H.length-1);for(let _e=0,fe=h+y*2;_e<fe;_e++){const Me=N*_e,k=N*(_e+1),E=j+oe+Me,M=j+se+Me,W=j+se+k,K=j+oe+k;me(E,M,W,K)}}}function He(H,j,Q){l.push(H),l.push(j),l.push(Q)}function Ce(H,j,Q){ge(H),ge(j),ge(Q);const oe=i.length/3,se=p.generateTopUV(n,i,oe-3,oe-2,oe-1);Ae(se[0]),Ae(se[1]),Ae(se[2])}function me(H,j,Q,oe){ge(H),ge(j),ge(oe),ge(j),ge(Q),ge(oe);const se=i.length/3,_e=p.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Ae(_e[0]),Ae(_e[1]),Ae(_e[3]),Ae(_e[1]),Ae(_e[2]),Ae(_e[3])}function ge(H){i.push(l[H*3+0]),i.push(l[H*3+1]),i.push(l[H*3+2])}function Ae(H){s.push(H.x),s.push(H.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return E0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Vc[i.type]().fromJSON(i)),new ki(n,e.options)}}const S0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ee(s,o),new ee(a,l),new ee(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],v=e[i*3+2],g=e[s*3],y=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-d),new ee(u,1-v),new ee(g,1-m)]:[new ee(a,1-l),new ee(h,1-d),new ee(f,1-v),new ee(y,1-m)]}};function E0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cr extends ze{constructor(e=new Ui([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(o,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const v=u.holes;Bn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,m=v.length;y<m;y++){const p=v[y];Bn.isClockWise(p)===!0&&(v[y]=p.reverse())}const g=Bn.triangulateShape(f,v);for(let y=0,m=v.length;y<m;y++){const p=v[y];f=f.concat(p)}for(let y=0,m=f.length;y<m;y++){const p=f[y];i.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,m=g.length;y<m;y++){const p=g[y],S=p[0]+d,x=p[1]+d,w=p[2]+d;n.push(S,x,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return T0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Cr(n,e.curveSegments)}}function T0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ii extends ze{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new _,u=new _,f=[],v=[],g=[],y=[];for(let m=0;m<=n;m++){const p=[],S=m/n;let x=0;m==0&&o==0?x=.5/t:m==n&&l==Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const C=w/t;d.x=-e*Math.cos(i+C*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+C*s)*Math.sin(o+S*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),y.push(C+x,1-S),p.push(c++)}h.push(p)}for(let m=0;m<n;m++)for(let p=0;p<t;p++){const S=h[m][p+1],x=h[m][p],w=h[m+1][p],C=h[m+1][p+1];(m!==0||o>0)&&f.push(S,x,C),(m!==n-1||l<Math.PI)&&f.push(x,w,C)}this.setIndex(f),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}static fromJSON(e){return new ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zc extends vt{constructor(e){super();this.type="ShadowMaterial",this.color=new D(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Zc.prototype.isShadowMaterial=!0;class ha extends It{constructor(e){super(e);this.type="RawShaderMaterial"}}ha.prototype.isRawShaderMaterial=!0;class da extends vt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new D(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}da.prototype.isMeshStandardMaterial=!0;class Yc extends da{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new D(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new D(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new D(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Yc.prototype.isMeshPhysicalMaterial=!0;class qc extends vt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new D(16777215),this.specular=new D(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}qc.prototype.isMeshPhongMaterial=!0;class Jc extends vt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new D(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Jc.prototype.isMeshToonMaterial=!0;class Qc extends vt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Qc.prototype.isMeshNormalMaterial=!0;class Kc extends vt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new D(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Kc.prototype.isMeshLambertMaterial=!0;class $c extends vt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new D(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}$c.prototype.isMeshMatcapMaterial=!0;class eh extends Bt{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}eh.prototype.isLineDashedMaterial=!0;const L0={ShadowMaterial:Zc,SpriteMaterial:ur,RawShaderMaterial:ha,ShaderMaterial:It,PointsMaterial:yr,MeshPhysicalMaterial:Yc,MeshStandardMaterial:da,MeshPhongMaterial:qc,MeshToonMaterial:Jc,MeshNormalMaterial:Qc,MeshLambertMaterial:Kc,MeshDepthMaterial:Go,MeshDistanceMaterial:Wo,MeshBasicMaterial:Zt,MeshMatcapMaterial:$c,LineDashedMaterial:eh,LineBasicMaterial:Bt,Material:vt};vt.fromType=function(r){return new L0[r]};const at={arraySlice:function(r,e,t){return at.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const v=c.times[f]*i;if(!(v<t||v>=n)){d.push(c.times[f]);for(let g=0;g<h;++g)u.push(c.values[f*h+g])}}d.length!==0&&(c.times=at.convertArray(d,c.times.constructor),c.values=at.convertArray(u,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const v=a.times.length-1;let g;if(s<=a.times[0]){const m=h,p=d-h;g=at.arraySlice(a.values,m,p)}else if(s>=a.times[v]){const m=v*d+h,p=m+d-h;g=at.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=h,S=d-h;m.evaluate(s),g=at.arraySlice(m.resultBuffer,p,S)}l==="quaternion"&&new ct().fromArray(g).normalize().conjugate().toArray(g);const y=c.times.length;for(let m=0;m<y;++m){const p=m*f+u;if(l==="quaternion")ct.multiplyQuaternionsFlat(c.values,p,g,0,c.values,p);else{const S=f-u*2;for(let x=0;x<S;++x)c.values[p+x]-=g[x]}}}return r.blendMode=yl,r}};class Un{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Un.prototype.beforeStart_=Un.prototype.copySampleValue_,Un.prototype.afterEnd_=Un.prototype.copySampleValue_;class A0 extends Un{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pi,endingEnd:pi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mi:s=e,a=2*t-n;break;case ks:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mi:o=e,l=2*n-t;break;case ks:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),g=v*v,y=g*v,m=-u*y+2*u*g-u*v,p=(1+u)*y+(-1.5-2*u)*g+(-.5+u)*v+1,S=(-1-f)*y+(1.5+f)*g+.5*v,x=f*y-f*g;for(let w=0;w!==a;++w)s[w]=m*o[h+w]+p*o[c+w]+S*o[l+w]+x*o[d+w];return s}}class th extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class C0 extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class an{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=at.convertArray(t,this.TimeBufferType),this.values=at.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:at.convertArray(e.times,Array),values:at.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new C0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new A0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=at.arraySlice(n,s,o),this.values=at.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&at.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=at.arraySlice(this.times),t=at.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===io,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let v=0;v!==n;++v){const g=t[d+v];if(g!==t[u+v]||g!==t[f+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=at.arraySlice(e,0,o),this.values=at.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=at.arraySlice(this.times,0),t=at.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}an.prototype.TimeBufferType=Float32Array,an.prototype.ValueBufferType=Float32Array,an.prototype.DefaultInterpolation=Vs;class Hi extends an{}Hi.prototype.ValueTypeName="bool",Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=Us,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class nh extends an{}nh.prototype.ValueTypeName="color";class Pr extends an{}Pr.prototype.ValueTypeName="number";class P0 extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ct.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Es extends an{InterpolantFactoryMethodLinear(e){return new P0(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion",Es.prototype.DefaultInterpolation=Vs,Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends an{}Gi.prototype.ValueTypeName="string",Gi.prototype.ValueBufferType=Array,Gi.prototype.DefaultInterpolation=Us,Gi.prototype.InterpolantFactoryMethodLinear=void 0,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends an{}Rr.prototype.ValueTypeName="vector";class ih{constructor(e,t=-1,n,i=so){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(an.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=at.getKeyframeOrder(l);l=at.sortedArray(l,1,h),c=at.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,v,g){if(f.length!==0){const y=[],m=[];at.flattenJSON(f,y,m,v),y.length!==0&&g.push(new d(u,y,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let v;for(v=0;v<u.length;v++)if(u[v].morphTargets)for(let g=0;g<u[v].morphTargets.length;g++)f[u[v].morphTargets[g]]=-1;for(const g in f){const y=[],m=[];for(let p=0;p!==u[v].morphTargets.length;++p){const S=u[v];y.push(S.time),m.push(S.morphTarget===g?1:0)}i.push(new Pr(".morphTargetInfluence["+g+"]",y,m))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Rr,f+".position",u,"pos",i),n(Es,f+".quaternion",u,"rot",i),n(Rr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return nh;case"quaternion":return Es;case"bool":case"boolean":return Hi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function D0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R0(r.type);if(r.times===void 0){const t=[],n=[];at.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],v=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const I0=new sh;class Vn{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const xn={};class N0 extends Vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:i});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xn[e],d=c.body.getReader(),u=c.headers.get("Content-Length"),f=u?parseInt(u):0,v=f!==0;let g=0;const y=new ReadableStream({start(m){p();function p(){d.read().then(({done:S,value:x})=>{if(S)m.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let C=0,A=h.length;C<A;C++){const B=h[C];B.onProgress&&B.onProgress(w)}m.enqueue(x),p()}})}}});return new Response(y)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{Wi.add(e,c);const h=xn[e];delete xn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete xn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rh extends Vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=as("img");function l(){h(),Wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class F0 extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=new lr,o=new rh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class oh extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=new lt,o=new rh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ln extends Ge{constructor(e,t=1){super();this.type="Light",this.color=new D(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}ln.prototype.isLight=!0;class O0 extends ln{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.groundColor=new D(t)}copy(e){return ln.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}O0.prototype.isHemisphereLight=!0;const ah=new ye,lh=new _,ch=new _;class ua{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hh extends ua{constructor(){super(new At(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}hh.prototype.isSpotLightShadow=!0;class z0 extends ln{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}z0.prototype.isSpotLight=!0;const dh=new ye,Ts=new _,fa=new _;class uh extends ua{constructor(){super(new At(90,1,.5,500));this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),fa.copy(n.position),fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fa),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}uh.prototype.isPointLightShadow=!0;class B0 extends ln{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}B0.prototype.isPointLight=!0;class fh extends ua{constructor(){super(new Oo(-5,5,5,-5,.5,500))}}fh.prototype.isDirectionalLightShadow=!0;class U0 extends ln{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}U0.prototype.isDirectionalLight=!0;class V0 extends ln{constructor(e,t){super(e,t);this.type="AmbientLight"}}V0.prototype.isAmbientLight=!0;class k0 extends ln{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}k0.prototype.isRectAreaLight=!0;class ph{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new _)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}ph.prototype.isSphericalHarmonics3=!0;class pa extends ln{constructor(e=new ph,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}pa.prototype.isLightProbe=!0;class H0{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G0 extends ze{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}G0.prototype.isInstancedBufferGeometry=!0;class W0 extends Vn{constructor(e){super(e);typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Wi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}W0.prototype.isImageBitmapLoader=!0;let Dr;const X0={getContext:function(){return Dr===void 0&&(Dr=new(window.AudioContext||window.webkitAudioContext)),Dr},setContext:function(r){Dr=r}};class j0 extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new N0(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);X0.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Z0 extends pa{constructor(e,t,n=1){super(void 0,n);const i=new D().set(e),s=new D().set(t),o=new _(i.r,i.g,i.b),a=new _(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}Z0.prototype.isHemisphereLightProbe=!0;class Y0 extends pa{constructor(e,t=1){super(void 0,t);const n=new D().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Y0.prototype.isAmbientLightProbe=!0;class q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mh(){return(typeof performance>"u"?Date:performance).now()}class J0 extends Ge{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Q0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;ct.multiplyQuaternionsFlat(e,o,e,t,e,n),ct.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ma="\\[\\]\\.:\\/",K0=new RegExp("["+ma+"]","g"),ga="[^"+ma+"]",$0="[^"+ma.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",ga),tv=/(WCOD+)?/.source.replace("WCOD",$0),nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ga),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ga),sv=new RegExp("^"+ev+tv+nv+iv+"$"),rv=["material","materials","bones"];class ov{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){const t=sv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=ov,Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray],Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class av{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:pi,endingEnd:pi};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yl:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case so:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Au;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Tu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=mi,i.endingEnd=mi):(e?i.endingStart=this.zeroSlopeAtStart?mi:pi:i.endingStart=ks,t?i.endingEnd=this.zeroSlopeAtEnd?mi:pi:i.endingEnd=ks)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class lv extends tn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let v=h[f];if(v!==void 0)++v.referenceCount,o[d]=v;else{if(v=o[d],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,f));continue}const g=t&&t._propertyBindings[d].binding.parsedPath;v=new Q0(Qe.create(n,f,g),u.ValueTypeName,u.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,f),o[d]=v}a[d].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new th(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ih.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=so),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new av(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ih.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}lv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class cv extends fs{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}cv.prototype.isInstancedInterleavedBuffer=!0;class Xi{constructor(e,t,n=0,i=1/0){this.ray=new $n(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return va(e,this,n,t),n.sort(gh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)va(e[i],this,n,t);return n.sort(gh),n}}function gh(r,e){return r.distance-e.distance}function va(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)va(i[s],e,t,!0)}}class vh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kn=new _,Ir=new ye,ya=new ye;class hv extends _s{constructor(e){const t=yh(e),n=new ze,i=[],s=[],o=new D(0,0,1),a=new D(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new tt(i,3)),n.setAttribute("color",new tt(s,3));const l=new Bt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ya.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ir.multiplyMatrices(ya,a.matrixWorld),kn.setFromMatrixPosition(Ir),i.setXYZ(o,kn.x,kn.y,kn.z),Ir.multiplyMatrices(ya,a.parent.matrixWorld),kn.setFromMatrixPosition(Ir),i.setXYZ(o+1,kn.x,kn.y,kn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function yh(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,yh(r.children[t]));return e}class dv extends _s{constructor(e=10,t=10,n=4473924,i=8947848){n=new D(n),i=new D(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,v=-a;u<=t;u++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const g=u===s?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new ze;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const d=new Bt({vertexColors:!0,toneMapped:!1});super(h,d);this.type="GridHelper"}}const uv=new Float32Array(1);new Int32Array(uv.buffer),Ut.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Ut.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r},aa.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)},dv.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},hv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Vn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),H0.extractUrlBase(r)},Vn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},ot.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)},ot.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ot.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},ot.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},ot.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)},Rn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")},sn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ds.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)},_t.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},_t.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},_t.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},_t.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},_t.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},_t.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},ye.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)},ye.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new _().setFromMatrixColumn(this,3)},ye.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)},ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ye.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ye.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)},ye.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ye.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ye.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)},ye.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},Yt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)},ct.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)},ct.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},$n.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},$n.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)},$n.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},mt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},mt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)},mt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)},mt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)},mt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)},mt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),mt.getBarycoord(r,e,t,n,i)},mt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),mt.getNormal(r,e,t,n)},Ui.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)},Ui.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ki(this,r)},Ui.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cr(this,r)},ee.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},ee.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},ee.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},_.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},_.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},_.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)},_.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)},_.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)},_.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)},_.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},_.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},_.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},le.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ge.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)},Ge.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Ge.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)},Ge.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Ge.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(Ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),$e.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties($e.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Cu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Sc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},At.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)},Object.defineProperties(ln.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}}),Object.defineProperties(Ue.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Hs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Hs)}}}),Ue.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Hs:os),this},Ue.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ue.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},ze.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)},ze.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Ue(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)},ze.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)},ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},ze.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)},ze.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),fs.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Hs:os),this},fs.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},ki.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},ki.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},ki.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},_n.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(vt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new D}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===ka}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(It.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}}),Je.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)},Je.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)},Je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Je.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)},Je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?rt:Tn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),Object.defineProperties(pc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(St.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}}),J0.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new j0().load(r,function(n){e.setBuffer(n)}),this},No.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)},No.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)},qn.crossOrigin=void 0,qn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new oh;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},qn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new F0;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},qn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},qn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ht}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ht);var fv=`precision highp float;
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
	
	
}`,pv=Object.freeze({__proto__:null,default:fv}),mv=`precision highp float;
precision highp int;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position =   projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,gv=Object.freeze({__proto__:null,default:mv});class vv extends It{constructor(){super(...arguments);this.vertexShader=gv,this.fragmentShader=pv,this.uniforms={near:{type:"f",value:0},far:{type:"f",value:0},screenWidth:{type:"f",value:0},screenHeight:{type:"f",value:0},map:{type:"t",value:null}}}}var bn=(r=>(r[r.DISABLED=0]="DISABLED",r[r.CLIP_OUTSIDE=1]="CLIP_OUTSIDE",r[r.HIGHLIGHT_INSIDE=2]="HIGHLIGHT_INSIDE",r))(bn||{}),qt=(r=>(r[r.FIXED=0]="FIXED",r[r.ATTENUATED=1]="ATTENUATED",r[r.ADAPTIVE=2]="ADAPTIVE",r))(qt||{}),wn=(r=>(r[r.SQUARE=0]="SQUARE",r[r.CIRCLE=1]="CIRCLE",r[r.PARABOLOID=2]="PARABOLOID",r))(wn||{}),ji=(r=>(r[r.OCTREE=0]="OCTREE",r[r.KDTREE=1]="KDTREE",r))(ji||{}),Ls=(r=>(r[r.FIXED=0]="FIXED",r[r.ATTENUATED=1]="ATTENUATED",r))(Ls||{}),pt=(r=>(r[r.RGB=0]="RGB",r[r.COLOR=1]="COLOR",r[r.DEPTH=2]="DEPTH",r[r.HEIGHT=3]="HEIGHT",r[r.ELEVATION=3]="ELEVATION",r[r.INTENSITY=4]="INTENSITY",r[r.INTENSITY_GRADIENT=5]="INTENSITY_GRADIENT",r[r.LOD=6]="LOD",r[r.LEVEL_OF_DETAIL=6]="LEVEL_OF_DETAIL",r[r.POINT_INDEX=7]="POINT_INDEX",r[r.CLASSIFICATION=8]="CLASSIFICATION",r[r.RETURN_NUMBER=9]="RETURN_NUMBER",r[r.SOURCE=10]="SOURCE",r[r.NORMAL=11]="NORMAL",r[r.PHONG=12]="PHONG",r[r.RGB_HEIGHT=13]="RGB_HEIGHT",r[r.COMPOSITE=50]="COMPOSITE",r))(pt||{});const _h=0,xh=0,bh=1,yv=50,_v=50,xv=2,bv=15,wv=1e6,wh=2,Mv=4,Mh="PerspectiveCamera",Sv=new D(0,0,0),Ev=new le(1,0,0,1);function _a(r){return parseInt(r.charAt(r.length-1),10)}function Tv(r,e){const t=r.name,n=e.name;return t.length!==n.length?t.length-n.length:t<n?-1:t>n?1:0}const Sh={0:new le(.5,.5,.5,1),1:new le(.5,.5,.5,1),2:new le(.63,.32,.18,1),3:new le(0,1,0,1),4:new le(0,.8,0,1),5:new le(0,.6,0,1),6:new le(1,.66,0,1),7:new le(1,0,1,1),8:new le(1,0,0,1),9:new le(0,0,1,1),12:new le(1,1,0,1),DEFAULT:new le(.3,.6,.6,.5)},Lv=[[0,new D(0,0,0)],[1,new D(1,1,1)]],Av=[[0,new D(.077,.042,.206)],[.1,new D(.225,.036,.388)],[.2,new D(.373,.074,.432)],[.3,new D(.522,.128,.42)],[.4,new D(.665,.182,.37)],[.5,new D(.797,.255,.287)],[.6,new D(.902,.364,.184)],[.7,new D(.969,.516,.063)],[.8,new D(.988,.683,.072)],[.9,new D(.961,.859,.298)],[1,new D(.988,.998,.645)]],Cv=[[0,new D(.241,.015,.61)],[.1,new D(.387,.001,.654)],[.2,new D(.524,.025,.653)],[.3,new D(.651,.125,.596)],[.4,new D(.752,.227,.513)],[.5,new D(.837,.329,.431)],[.6,new D(.907,.435,.353)],[.7,new D(.963,.554,.272)],[.8,new D(.992,.681,.195)],[.9,new D(.987,.822,.144)],[1,new D(.94,.975,.131)]],Pv=[[0,new D(.278,0,.714)],[1/6,new D(0,0,1)],[2/6,new D(0,1,1)],[3/6,new D(0,1,0)],[4/6,new D(1,1,0)],[5/6,new D(1,.64,0)],[1,new D(1,0,0)]],Eh=[[0,new D(.3686,.3098,.6353)],[.1,new D(.1961,.5333,.7412)],[.2,new D(.4,.7608,.6471)],[.3,new D(.6706,.8667,.6431)],[.4,new D(.902,.9608,.5961)],[.5,new D(1,1,.749)],[.6,new D(.9961,.8784,.5451)],[.7,new D(.9922,.6824,.3804)],[.8,new D(.9569,.4275,.2627)],[.9,new D(.8353,.2431,.3098)],[1,new D(.6196,.0039,.2588)]],Rv=[[0,new D(.267,.005,.329)],[.1,new D(.283,.141,.458)],[.2,new D(.254,.265,.53)],[.3,new D(.207,.372,.553)],[.4,new D(.164,.471,.558)],[.5,new D(.128,.567,.551)],[.6,new D(.135,.659,.518)],[.7,new D(.267,.749,.441)],[.8,new D(.478,.821,.318)],[.9,new D(.741,.873,.15)],[1,new D(.993,.906,.144)]],Dv=[[0,new D(.1647,.2824,.3451)],[.1,new D(.1338,.3555,.4227)],[.2,new D(.061,.4319,.4864)],[.3,new D(0,.5099,.5319)],[.4,new D(0,.5881,.5569)],[.5,new D(.137,.665,.5614)],[.6,new D(.2906,.7395,.5477)],[.7,new D(.4453,.8099,.5201)],[.8,new D(.6102,.8748,.485)],[.9,new D(.7883,.9323,.4514)],[1,new D(.9804,.9804,.4314)]];function Th(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255);for(let c=0;c<n;c++)i[c*3]=s,i[c*3+1]=o,i[c*3+2]=a;const l=new Yo(i,r,e,yt);return l.needsUpdate=!0,l.magFilter=et,l}function xa(r){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.rect(0,0,64,64);const i=n.createLinearGradient(0,0,64,64);for(let o=0;o<r.length;o++){const a=r[o];i.addColorStop(a[0],`#${a[1].getHexString()}`)}n.fillStyle=i,n.fill();const s=new Nc(t);return s.needsUpdate=!0,s.minFilter=ut,s}function ba(r){const i=new Uint8Array(262144);for(let o=0;o<256;o++)for(let a=0;a<256;a++){const l=o+256*a;let c;r[o]?c=r[o]:r[o%32]?c=r[o%32]:c=r.DEFAULT,i[4*l+0]=255*c.x,i[4*l+1]=255*c.y,i[4*l+2]=255*c.z,i[4*l+3]=255*c.w}const s=new Yo(i,256,256,yt);return s.magFilter=et,s.needsUpdate=!0,s}var Iv=`precision highp float;
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
`,Nv=`precision highp float;
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
`,Fv=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,Le=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ov(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Fv(e,t,i),i};const zv={[ji.OCTREE]:"tree_type_octree",[ji.KDTREE]:"tree_type_kdtree"},Bv={[qt.FIXED]:"fixed_point_size",[qt.ATTENUATED]:"attenuated_point_size",[qt.ADAPTIVE]:"adaptive_point_size"},Uv={[Ls.ATTENUATED]:"attenuated_opacity",[Ls.FIXED]:"fixed_opacity"},Vv={[wn.SQUARE]:"square_point_shape",[wn.CIRCLE]:"circle_point_shape",[wn.PARABOLOID]:"paraboloid_point_shape"},kv={[pt.RGB]:"color_type_rgb",[pt.COLOR]:"color_type_color",[pt.DEPTH]:"color_type_depth",[pt.HEIGHT]:"color_type_height",[pt.INTENSITY]:"color_type_intensity",[pt.INTENSITY_GRADIENT]:"color_type_intensity_gradient",[pt.LOD]:"color_type_lod",[pt.POINT_INDEX]:"color_type_point_index",[pt.CLASSIFICATION]:"color_type_classification",[pt.RETURN_NUMBER]:"color_type_return_number",[pt.SOURCE]:"color_type_source",[pt.NORMAL]:"color_type_normal",[pt.PHONG]:"color_type_phong",[pt.RGB_HEIGHT]:"color_type_rgb_height",[pt.COMPOSITE]:"color_type_composite"},Hv={[bn.DISABLED]:"clip_disabled",[bn.CLIP_OUTSIDE]:"clip_outside",[bn.HIGHLIGHT_INSIDE]:"clip_highlight_inside"},Lh=class extends ha{constructor(r={}){super();this.lights=!1,this.fog=!1,this.numClipBoxes=0,this.clipBoxes=[],this._clippingPlanes=[],this.visibleNodeTextureOffsets=new Map,this._gradient=Eh,this.gradientTexture=xa(this._gradient),this._classification=Sh,this.classificationTexture=ba(this._classification),this.uniforms={bbSize:Ee("fv",[0,0,0]),blendDepthSupplement:Ee("f",0),blendHardness:Ee("f",2),classificationLUT:Ee("t",this.classificationTexture||new lt),clipBoxCount:Ee("f",0),clipBoxes:Ee("Matrix4fv",[]),depthMap:Ee("t",null),diffuse:Ee("fv",[1,1,1]),fov:Ee("f",1),gradient:Ee("t",this.gradientTexture||new lt),heightMax:Ee("f",1),heightMin:Ee("f",0),intensityBrightness:Ee("f",0),intensityContrast:Ee("f",0),intensityGamma:Ee("f",1),intensityRange:Ee("fv",[0,65e3]),isLeafNode:Ee("b",0),level:Ee("f",0),maxSize:Ee("f",yv),minSize:Ee("f",xv),octreeSize:Ee("f",0),opacity:Ee("f",1),pcIndex:Ee("f",0),rgbBrightness:Ee("f",_h),rgbContrast:Ee("f",xh),rgbGamma:Ee("f",bh),screenHeight:Ee("f",1),screenWidth:Ee("f",1),size:Ee("f",1),spacing:Ee("f",1),toModel:Ee("Matrix4f",[]),transition:Ee("f",.5),uColor:Ee("c",new D(16777215)),visibleNodes:Ee("t",this.visibleNodesTexture||new lt),vnStart:Ee("f",0),wClassification:Ee("f",0),wElevation:Ee("f",0),wIntensity:Ee("f",0),wReturnNumber:Ee("f",0),wRGB:Ee("f",1),wSourceID:Ee("f",0),opacityAttenuation:Ee("f",1),filterByNormalThreshold:Ee("f",0),highlightedPointCoordinate:Ee("fv",new _),highlightedPointColor:Ee("fv",Ev.clone()),enablePointHighlighting:Ee("b",!0),highlightedPointScale:Ee("f",2),useUnscaledElevation:Ee("b",!1),clippingPlanes:Ee("fv",[]),clipIntersection:Ee("b",!1)},this.useClipBox=!1,this.weighted=!1,this.pointColorType=pt.RGB,this.pointSizeType=qt.ADAPTIVE,this.clipMode=bn.DISABLED,this.useEDL=!1,this.shape=wn.CIRCLE,this.treeType=ji.OCTREE,this.pointOpacityType=Ls.FIXED,this.useFilterByNormal=!1,this.highlightPoint=!1,this.clippingPlanes=[],this.attributes={position:{type:"fv",value:[]},color:{type:"fv",value:[]},normal:{type:"fv",value:[]},intensity:{type:"f",value:[]},classification:{type:"f",value:[]},returnNumber:{type:"f",value:[]},numberOfReturns:{type:"f",value:[]},pointSourceID:{type:"f",value:[]},indices:{type:"fv",value:[]}},this._clippingPlanes=[];const e=this.visibleNodesTexture=Th(2048,1,new D(16777215));e.minFilter=et,e.magFilter=et,this.setUniform("visibleNodes",e),this.treeType=Nr(r.treeType,ji.OCTREE),this.size=Nr(r.size,1),this.minSize=Nr(r.minSize,2),this.maxSize=Nr(r.maxSize,50),this.classification=Sh,this.defaultAttributeValues.normal=[0,0,0],this.defaultAttributeValues.classification=[0,0,0],this.defaultAttributeValues.indices=[0,0,0,0],this.vertexColors=!0,this.updateShaderSource()}dispose(){super.dispose(),this.gradientTexture&&(this.gradientTexture.dispose(),this.gradientTexture=void 0),this.visibleNodesTexture&&(this.visibleNodesTexture.dispose(),this.visibleNodesTexture=void 0),this.clearVisibleNodeTextureOffsets(),this.classificationTexture&&(this.classificationTexture.dispose(),this.classificationTexture=void 0),this.depthMap&&(this.depthMap.dispose(),this.depthMap=void 0)}clearVisibleNodeTextureOffsets(){this.visibleNodeTextureOffsets.clear()}updateShaderSource(){this.vertexShader=this.applyDefines(Nv),this.fragmentShader=this.applyDefines(Iv),this.opacity===1?(this.blending=en,this.transparent=!1,this.depthTest=!0,this.depthWrite=!0,this.depthFunc=is):this.opacity<1&&!this.useEDL&&(this.blending=Fs,this.transparent=!0,this.depthTest=!1,this.depthWrite=!0),this.weighted&&(this.blending=Fs,this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.depthFunc=is),this._clippingPlanes&&this._clippingPlanes.length>0&&this.updateClippingPlanes(),this.needsUpdate=!0}applyDefines(r){const e=[];function t(n){n&&e.push(`#define ${n}`)}return t(zv[this.treeType]),t(Bv[this.pointSizeType]),t(Vv[this.shape]),t(kv[this.pointColorType]),t(Hv[this.clipMode]),t(Uv[this.pointOpacityType]),(this.rgbGamma!==bh||this.rgbBrightness!==_h||this.rgbContrast!==xh)&&t("use_rgb_gamma_contrast_brightness"),this.useFilterByNormal&&t("use_filter_by_normal"),this.useEDL&&t("use_edl"),this.weighted&&t("weighted_splats"),this.numClipBoxes>0&&t("use_clip_box"),this.highlightPoint&&t("highlight_point"),t("MAX_POINT_LIGHTS 0"),t("MAX_DIR_LIGHTS 0"),e.push(r),e.join(`
`)}updateClippingPlanes(){if(!this._clippingPlanes)return;const r=this._clippingPlanes.map(e=>new le(e.normal.x,e.normal.y,e.normal.z,e.constant));this.setUniform("clippingPlanes",r)}setClipBoxes(r){if(!r)return;this.clipBoxes=r;const e=this.numClipBoxes!==r.length&&(r.length===0||this.numClipBoxes===0);this.numClipBoxes=r.length,this.setUniform("clipBoxCount",this.numClipBoxes),e&&this.updateShaderSource();const t=this.numClipBoxes*16,n=new Float32Array(t);for(let i=0;i<this.numClipBoxes;i++)n.set(r[i].inverse.elements,16*i);for(let i=0;i<t;i++)isNaN(n[i])&&(n[i]=1/0);this.setUniform("clipBoxes",n)}get gradient(){return this._gradient}set gradient(r){this._gradient!==r&&(this._gradient=r,this.gradientTexture=xa(this._gradient),this.setUniform("gradient",this.gradientTexture))}get classification(){return this._classification}set classification(r){const e={};for(const n of Object.keys(r))e[n]=r[n].clone();let t=!1;if(this._classification===void 0)t=!1;else{t=Object.keys(e).length===Object.keys(this._classification).length;for(const n of Object.keys(e))t=t&&this._classification[n]!==void 0,t=t&&e[n].equals(this._classification[n])}t||(this._classification=e,this.recomputeClassification())}recomputeClassification(){this.classificationTexture=ba(this._classification),this.setUniform("classificationLUT",this.classificationTexture)}get elevationRange(){return[this.heightMin,this.heightMax]}set elevationRange(r){this.heightMin=r[0],this.heightMax=r[1]}getUniform(r){return this.uniforms===void 0?void 0:this.uniforms[r].value}setUniform(r,e){if(this.uniforms===void 0)return;const t=this.uniforms[r];t.type==="c"?t.value.copy(e):e!==t.value&&(t.value=e)}updateMaterial(r,e,t,n){const i=n.getPixelRatio();t.type===Mh?this.fov=t.fov*(Math.PI/180):this.fov=Math.PI/2;const s=n.getRenderTarget();s!==null&&s instanceof St?(this.screenWidth=s.width,this.screenHeight=s.height):(this.screenWidth=n.domElement.clientWidth*i,this.screenHeight=n.domElement.clientHeight*i);const o=Math.max(r.scale.x,r.scale.y,r.scale.z);this.spacing=r.pcoGeometry.spacing*o,this.octreeSize=r.pcoGeometry.boundingBox.getSize(Lh.helperVec3).x,(this.pointSizeType===qt.ADAPTIVE||this.pointColorType===pt.LOD)&&this.updateVisibilityTextureData(e)}updateVisibilityTextureData(r){r.sort(Tv);const e=new Uint8Array(r.length*4),t=new Array(r.length).fill(1/0);this.visibleNodeTextureOffsets.clear();for(let i=0;i<r.length;i++){const s=r[i];if(this.visibleNodeTextureOffsets.set(s.name,i),i>0){const o=s.name.slice(0,-1),a=this.visibleNodeTextureOffsets.get(o),l=i-a;t[a]=Math.min(t[a],l);const c=a*4;e[c]=e[c]|1<<s.index,e[c+1]=t[a]>>8,e[c+2]=t[a]%256}e[i*4+3]=s.name.length}const n=this.visibleNodesTexture;n&&(n.image.data.set(e),n.needsUpdate=!0)}static makeOnBeforeRender(r,e,t){return(n,i,s,o,a)=>{const l=a,c=l.uniforms;c.level.value=e.level,c.isLeafNode.value=e.isLeafNode;const h=l.visibleNodeTextureOffsets.get(e.name);h!==void 0&&(c.vnStart.value=h),c.pcIndex.value=t!==void 0?t:r.visibleNodes.indexOf(e),a.uniformsNeedUpdate=!0}}};let we=Lh;we.helperVec3=new _,Le([We("bbSize")],we.prototype,"bbSize",2),Le([We("depthMap")],we.prototype,"depthMap",2),Le([We("fov")],we.prototype,"fov",2),Le([We("heightMax")],we.prototype,"heightMax",2),Le([We("heightMin")],we.prototype,"heightMin",2),Le([We("intensityBrightness")],we.prototype,"intensityBrightness",2),Le([We("intensityContrast")],we.prototype,"intensityContrast",2),Le([We("intensityGamma")],we.prototype,"intensityGamma",2),Le([We("intensityRange")],we.prototype,"intensityRange",2),Le([We("maxSize")],we.prototype,"maxSize",2),Le([We("minSize")],we.prototype,"minSize",2),Le([We("octreeSize")],we.prototype,"octreeSize",2),Le([We("opacity",!0)],we.prototype,"opacity",2),Le([We("rgbBrightness",!0)],we.prototype,"rgbBrightness",2),Le([We("rgbContrast",!0)],we.prototype,"rgbContrast",2),Le([We("rgbGamma",!0)],we.prototype,"rgbGamma",2),Le([We("screenHeight")],we.prototype,"screenHeight",2),Le([We("screenWidth")],we.prototype,"screenWidth",2),Le([We("size")],we.prototype,"size",2),Le([We("spacing")],we.prototype,"spacing",2),Le([We("transition")],we.prototype,"transition",2),Le([We("uColor")],we.prototype,"color",2),Le([We("wClassification")],we.prototype,"weightClassification",2),Le([We("wElevation")],we.prototype,"weightElevation",2),Le([We("wIntensity")],we.prototype,"weightIntensity",2),Le([We("wReturnNumber")],we.prototype,"weightReturnNumber",2),Le([We("wRGB")],we.prototype,"weightRGB",2),Le([We("wSourceID")],we.prototype,"weightSourceID",2),Le([We("opacityAttenuation")],we.prototype,"opacityAttenuation",2),Le([We("filterByNormalThreshold")],we.prototype,"filterByNormalThreshold",2),Le([We("highlightedPointCoordinate")],we.prototype,"highlightedPointCoordinate",2),Le([We("highlightedPointColor")],we.prototype,"highlightedPointColor",2),Le([We("enablePointHighlighting")],we.prototype,"enablePointHighlighting",2),Le([We("highlightedPointScale")],we.prototype,"highlightedPointScale",2),Le([We("useUnscaledElevation")],we.prototype,"useUnscaledElevation",2),Le([We("clipIntersection")],we.prototype,"clipIntersection",2),Le([Vt()],we.prototype,"useClipBox",2),Le([Vt()],we.prototype,"weighted",2),Le([Vt()],we.prototype,"pointColorType",2),Le([Vt()],we.prototype,"pointSizeType",2),Le([Vt()],we.prototype,"clipMode",2),Le([Vt()],we.prototype,"useEDL",2),Le([Vt()],we.prototype,"shape",2),Le([Vt()],we.prototype,"treeType",2),Le([Vt()],we.prototype,"pointOpacityType",2),Le([Vt()],we.prototype,"useFilterByNormal",2),Le([Vt()],we.prototype,"highlightPoint",2),Le([Vt()],we.prototype,"clippingPlanes",2);function Ee(r,e){return{type:r,value:e}}function Nr(r,e){return r===void 0?e:r}function We(r,e=!1){return(t,n)=>{Object.defineProperty(t,n,{get(){return this.getUniform(r)},set(i){i!==this.getUniform(r)&&(this.setUniform(r,i),e&&this.updateShaderSource())}})}}function Vt(){return(r,e)=>{const t=`_${e.toString()}`;Object.defineProperty(r,e,{get(){return this[t]},set(n){n!==this[t]?(this[t]=n,this.updateShaderSource()):t==="_clippingPlanes"&&(this[t]=n,this.updateClippingPlanes())}})}}var Ah=(r=>(r[r.POSITION_CARTESIAN=0]="POSITION_CARTESIAN",r[r.COLOR_PACKED=1]="COLOR_PACKED",r[r.COLOR_FLOATS_1=2]="COLOR_FLOATS_1",r[r.COLOR_FLOATS_255=3]="COLOR_FLOATS_255",r[r.NORMAL_FLOATS=4]="NORMAL_FLOATS",r[r.FILLER=5]="FILLER",r[r.INTENSITY=6]="INTENSITY",r[r.CLASSIFICATION=7]="CLASSIFICATION",r[r.NORMAL_SPHEREMAPPED=8]="NORMAL_SPHEREMAPPED",r[r.NORMAL_OCT16=9]="NORMAL_OCT16",r[r.NORMAL=10]="NORMAL",r))(Ah||{});const Jt={DATA_TYPE_DOUBLE:{ordinal:0,size:8},DATA_TYPE_FLOAT:{ordinal:1,size:4},DATA_TYPE_INT8:{ordinal:2,size:1},DATA_TYPE_UINT8:{ordinal:3,size:1},DATA_TYPE_INT16:{ordinal:4,size:2},DATA_TYPE_UINT16:{ordinal:5,size:2},DATA_TYPE_INT32:{ordinal:6,size:4},DATA_TYPE_UINT32:{ordinal:7,size:4},DATA_TYPE_INT64:{ordinal:8,size:8},DATA_TYPE_UINT64:{ordinal:9,size:8}};function cn(r,e,t){return{name:r,type:e,numElements:t,byteSize:t*e.size}}const Ch=cn(1,Jt.DATA_TYPE_INT8,4),Ph={POSITION_CARTESIAN:cn(0,Jt.DATA_TYPE_FLOAT,3),RGBA_PACKED:Ch,COLOR_PACKED:Ch,RGB_PACKED:cn(1,Jt.DATA_TYPE_INT8,3),NORMAL_FLOATS:cn(4,Jt.DATA_TYPE_FLOAT,3),FILLER_1B:cn(5,Jt.DATA_TYPE_UINT8,1),INTENSITY:cn(6,Jt.DATA_TYPE_UINT16,1),CLASSIFICATION:cn(7,Jt.DATA_TYPE_UINT8,1),NORMAL_SPHEREMAPPED:cn(8,Jt.DATA_TYPE_UINT8,2),NORMAL_OCT16:cn(9,Jt.DATA_TYPE_UINT8,2),NORMAL:cn(10,Jt.DATA_TYPE_FLOAT,3)};class wa{constructor(e=[]){this.attributes=[],this.byteSize=0,this.size=0;for(let t=0;t<e.length;t++){const n=e[t],i=Ph[n];this.attributes.push(i),this.byteSize+=i.byteSize,this.size++}}add(e){this.attributes.push(e),this.byteSize+=e.byteSize,this.size++}hasColors(){return this.attributes.find(Gv)!==void 0}hasNormals(){return this.attributes.find(Wv)!==void 0}}function Gv({name:r}){return r===1}function Wv({name:r}){return r===8||r===4||r===10||r===9}function Fr(r,e){return new ot().setFromPoints([new _(r.min.x,r.min.y,r.min.z).applyMatrix4(e),new _(r.min.x,r.min.y,r.min.z).applyMatrix4(e),new _(r.max.x,r.min.y,r.min.z).applyMatrix4(e),new _(r.min.x,r.max.y,r.min.z).applyMatrix4(e),new _(r.min.x,r.min.y,r.max.z).applyMatrix4(e),new _(r.min.x,r.max.y,r.max.z).applyMatrix4(e),new _(r.max.x,r.max.y,r.min.z).applyMatrix4(e),new _(r.max.x,r.min.y,r.max.z).applyMatrix4(e),new _(r.max.x,r.max.y,r.max.z).applyMatrix4(e)])}function Rh(r,e){const t=r.min.clone(),n=r.max.clone(),i=new _().subVectors(n,t);return(e&1)>0?t.z+=i.z/2:n.z-=i.z/2,(e&2)>0?t.y+=i.y/2:n.y-=i.y/2,(e&4)>0?t.x+=i.x/2:n.x-=i.x/2,new ot(t,n)}const Dh=5,Ma=class extends tn{constructor(r,e,t,n){super();this.id=Ma.idCount++,this.level=0,this.spacing=0,this.hasChildren=!1,this.children=[null,null,null,null,null,null,null,null],this.mean=new _,this.numPoints=0,this.geometry=new ze,this.loaded=!1,this.loading=!1,this.failed=!1,this.parent=null,this.oneTimeDisposeHandlers=[],this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.name=r,this.index=_a(r),this.pcoGeometry=e,this.boundingBox=t,this.tightBoundingBox=t.clone(),this.boundingSphere=t.getBoundingSphere(new sn),this.xhrInit=n||{}}dispose(){!this.geometry||!this.parent||(this.geometry.dispose(),this.geometry=new ze,this.loaded=!1,this.oneTimeDisposeHandlers.forEach(r=>r()),this.oneTimeDisposeHandlers=[])}getUrl(){const r=this.pcoGeometry,e=r.loader.version,t=[r.octreeDir];return r.loader&&e.equalOrHigher("1.5")?(t.push(this.getHierarchyBaseUrl()),t.push(this.name)):e.equalOrHigher("1.4")?t.push(this.name):e.upTo("1.3")&&t.push(this.name),t.join("/")}getHierarchyUrl(){return`${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`}addChild(r){this.children[r.index]=r,this.isLeafNode=!1,r.parent=this}traverse(r,e=!0){const t=e?[this]:[];let n;for(;(n=t.pop())!==void 0;){r(n);for(const i of n.children)i!==null&&t.push(i)}}load(){if(!this.canLoad())return Promise.resolve();this.loading=!0,this.pcoGeometry.numNodesLoading++,this.pcoGeometry.needsUpdate=!0;let r;return this.pcoGeometry.loader.version.equalOrHigher("1.5")&&this.level%this.pcoGeometry.hierarchyStepSize===0&&this.hasChildren?r=this.loadHierachyThenPoints():r=this.loadPoints(),r.catch(e=>{throw this.loading=!1,this.failed=!0,this.pcoGeometry.numNodesLoading--,e})}canLoad(){return!this.loading&&!this.loaded&&!this.pcoGeometry.disposed&&!this.pcoGeometry.loader.disposed&&this.pcoGeometry.numNodesLoading<this.pcoGeometry.maxNumNodesLoading}loadPoints(){return this.pcoGeometry.needsUpdate=!0,this.pcoGeometry.loader.load(this)}loadHierachyThenPoints(){return this.level%this.pcoGeometry.hierarchyStepSize!==0?Promise.resolve():Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then(r=>this.pcoGeometry.xhrRequest(r,this.xhrInit)).then(r=>r.arrayBuffer()).then(r=>this.loadHierarchy(this,r))}getHierarchyBaseUrl(){const r=this.pcoGeometry.hierarchyStepSize,e=this.name.substr(1),t=Math.floor(e.length/r);let n="r/";for(let i=0;i<t;i++)n+=`${e.substr(i*r,r)}/`;return n.slice(0,-1)}loadHierarchy(r,e){const t=new DataView(e),n=this.getNodeData(r.name,0,t);r.numPoints=n.numPoints;const i=[n],s=[];let o=Dh;for(;i.length>0;){const l=i.shift();let c=1;for(let h=0;h<8&&o+1<e.byteLength;h++){if((l.children&c)!==0){const d=this.getNodeData(l.name+h,o,t);s.push(d),i.push(d),o+=Dh}c=c*2}}r.pcoGeometry.needsUpdate=!0;const a=new Map;a.set(r.name,r),s.forEach(l=>this.addNode(l,r.pcoGeometry,a)),r.loadPoints()}getNodeData(r,e,t){const n=t.getUint8(e),i=t.getUint32(e+1,!0);return{children:n,numPoints:i,name:r}}addNode({name:r,numPoints:e,children:t},n,i){const s=_a(r),o=r.substring(0,r.length-1),a=i.get(o),l=r.length-1,c=Rh(a.boundingBox,s),h=new Ma(r,n,c,this.xhrInit);h.level=l,h.numPoints=e,h.hasChildren=t>0,h.spacing=n.spacing/Math.pow(2,l),a.addChild(h),i.set(r,h)}};let Or=Ma;Or.idCount=0;class Ih{constructor(e,t,n,i,s,o){this.loader=e,this.boundingBox=t,this.tightBoundingBox=n,this.offset=i,this.xhrRequest=s,this.xhrInit=o,this.disposed=!1,this.needsUpdate=!0,this.octreeDir="",this.hierarchyStepSize=-1,this.nodes={},this.numNodesLoading=0,this.maxNumNodesLoading=3,this.spacing=0,this.pointAttributes=new wa([]),this.projection=null,this.url=null}dispose(){this.loader.dispose(),this.root.traverse(e=>e.dispose()),this.disposed=!0}addNodeLoadedCallback(e){this.loader.callbacks.push(e)}clearNodeLoadedCallbacks(){this.loader.callbacks=[]}}class Nh extends tn{constructor(e,t){super();this.pcIndex=void 0,this.boundingBoxNode=null,this.loaded=!0,this.isTreeNode=!0,this.isGeometryNode=!1,this.geometryNode=e,this.sceneNode=t,this.children=e.children.slice()}dispose(){this.geometryNode.dispose()}disposeSceneNode(){const e=this.sceneNode;if(e.geometry instanceof ze){const t=e.geometry.attributes;for(const n in t)n==="position"&&delete t[n].array,delete t[n];e.geometry.dispose(),e.geometry=void 0}}traverse(e,t){this.geometryNode.traverse(e,t)}get id(){return this.geometryNode.id}get name(){return this.geometryNode.name}get level(){return this.geometryNode.level}get isLeafNode(){return this.geometryNode.isLeafNode}get numPoints(){return this.geometryNode.numPoints}get index(){return this.geometryNode.index}get boundingSphere(){return this.geometryNode.boundingSphere}get boundingBox(){return this.geometryNode.boundingBox}get spacing(){return this.geometryNode.spacing}}function Fh(r,e,t){return Math.min(Math.max(e,r),t)}const Mt=class{dispose(){this.pickState&&(this.pickState.material.dispose(),this.pickState.renderTarget.dispose())}pick(r,e,t,n,i={}){if(n.length===0)return null;const s=this.pickState?this.pickState:this.pickState=Mt.getPickState(),o=s.material,a=r.getPixelRatio(),l=Math.ceil(r.domElement.clientWidth*a),c=Math.ceil(r.domElement.clientHeight*a);Mt.updatePickRenderTarget(this.pickState,l,c);const h=Mt.helperVec3;i.pixelPosition?h.copy(i.pixelPosition):(h.addVectors(e.position,t.direction).project(e),h.x=(h.x+1)*l*.5,h.y=(h.y+1)*c*.5);const d=Math.floor((i.pickWindowSize||bv)*a),u=(d-1)/2,f=Math.floor(Fh(h.x-u,0,l)),v=Math.floor(Fh(h.y-u,0,c));Mt.prepareRender(r,f,v,d,o,s);const g=Mt.render(r,e,o,n,t,s,i);o.clearVisibleNodeTextureOffsets();const y=Mt.readPixels(r,f,v,d),m=Mt.findHit(y,d);return Mt.getPickPoint(m,g)}static prepareRender(r,e,t,n,i,s){r.setScissor(e,t,n,n),r.setScissorTest(!0),r.state.buffers.depth.setTest(i.depthTest),r.state.buffers.depth.setMask(i.depthWrite),r.state.setBlending(en),r.setRenderTarget(s.renderTarget),r.getClearColor(this.clearColor);const o=r.getClearAlpha();r.setClearColor(Sv,0),r.clear(!0,!0,!0),r.setClearColor(this.clearColor,o)}static render(r,e,t,n,i,s,o){const a=[];for(const l of n){const c=Mt.nodesOnRay(l,i);!c.length||(Mt.updatePickMaterial(t,l.material,o),t.updateMaterial(l,c,e,r),o.onBeforePickRender&&o.onBeforePickRender(t,s.renderTarget),s.scene.children=Mt.createTempNodes(l,c,t,a.length),r.render(s.scene,e),c.forEach(h=>a.push({node:h,octree:l})))}return a}static nodesOnRay(r,e){const t=[],n=e.clone();for(const i of r.visibleNodes){const s=Mt.helperSphere.copy(i.boundingSphere).applyMatrix4(r.matrixWorld);n.intersectsSphere(s)&&t.push(i)}return t}static readPixels(r,e,t,n){const i=new Uint8Array(4*n*n);return r.readRenderTargetPixels(r.getRenderTarget(),e,t,n,n,i),r.setScissorTest(!1),r.setRenderTarget(null),i}static createTempNodes(r,e,t,n){const i=[];for(let s=0;s<e.length;s++){const o=e[s],a=o.sceneNode,l=new br(a.geometry,t);l.matrix=a.matrix,l.matrixWorld=a.matrixWorld,l.matrixAutoUpdate=!1,l.frustumCulled=!1;const c=n+s+1;c>255&&console.error("More than 255 nodes for pick are not supported."),l.onBeforeRender=we.makeOnBeforeRender(r,o,c),i.push(l)}return i}static updatePickMaterial(r,e,t){r.pointSizeType=e.pointSizeType,r.shape=e.shape,r.size=e.size,r.minSize=e.minSize,r.maxSize=e.maxSize,r.classification=e.classification,r.useFilterByNormal=e.useFilterByNormal,r.filterByNormalThreshold=e.filterByNormalThreshold,t.pickOutsideClipRegion?r.clipMode=bn.DISABLED:(r.clipMode=e.clipMode,r.setClipBoxes(e.clipMode===bn.CLIP_OUTSIDE?e.clipBoxes:[]))}static updatePickRenderTarget(r,e,t){r.renderTarget.width===e&&r.renderTarget.height===t||(r.renderTarget.dispose(),r.renderTarget=Mt.makePickRenderTarget(),r.renderTarget.setSize(e,t))}static makePickRenderTarget(){return new St(1,1,{minFilter:ut,magFilter:et,format:yt})}static findHit(r,e){const t=new Uint32Array(r.buffer);let n=Number.MAX_VALUE,i=null;for(let s=0;s<e;s++)for(let o=0;o<e;o++){const a=s+o*e,l=Math.pow(s-(e-1)/2,2)+Math.pow(o-(e-1)/2,2),c=r[4*a+3];r[4*a+3]=0;const h=t[a];c>0&&l<n&&(i={pIndex:h,pcIndex:c-1},n=l)}return i}static getPickPoint(r,e){if(!r)return null;const t={},n=e[r.pcIndex]&&e[r.pcIndex].node.sceneNode;if(!n)return null;t.pointCloud=e[r.pcIndex].octree;const i=n.geometry.attributes;for(const s in i){if(!i.hasOwnProperty(s))continue;const o=i[s];if(s==="position")Mt.addPositionToPickPoint(t,r,o,n);else if(s==="normal")Mt.addNormalToPickPoint(t,r,o,n);else if(s!=="indices")if(o.itemSize===1)t[s]=o.array[r.pIndex];else{const a=[];for(let l=0;l<o.itemSize;l++)a.push(o.array[o.itemSize*r.pIndex+l]);t[s]=a}}return t}static addPositionToPickPoint(r,e,t,n){r.position=new _().fromBufferAttribute(t,e.pIndex).applyMatrix4(n.matrixWorld)}static addNormalToPickPoint(r,e,t,n){const i=new _().fromBufferAttribute(t,e.pIndex),s=new le(i.x,i.y,i.z,0).applyMatrix4(n.matrixWorld);i.set(s.x,s.y,s.z),r.normal=i}static getPickState(){const r=new _n;r.autoUpdate=!1;const e=new we;return e.pointColorType=pt.POINT_INDEX,{renderTarget:Mt.makePickRenderTarget(),material:e,scene:r}}};let As=Mt;As.helperVec3=new _,As.helperSphere=new sn,As.clearColor=new D;class Oh extends Ge{constructor(){super(...arguments);this.root=null}initialized(){return this.root!==null}}class Sa extends Oh{constructor(e,t,n){super();this.disposed=!1,this.level=0,this.maxLevel=1/0,this.minNodePixelSize=_v,this.root=null,this.boundingBoxNodes=[],this.visibleNodes=[],this.visibleGeometry=[],this.numVisiblePoints=0,this.showBoundingBox=!1,this.visibleBounds=new ot,this.name="",this.potree=e,this.root=t.root,this.pcoGeometry=t,this.boundingBox=t.boundingBox,this.boundingSphere=this.boundingBox.getBoundingSphere(new sn),this.position.copy(t.offset),this.updateMatrix(),this.material=n||new we,this.initMaterial(this.material)}initMaterial(e){this.updateMatrixWorld(!0);const{min:t,max:n}=Fr(this.pcoGeometry.tightBoundingBox||this.getBoundingBoxWorld(),this.matrixWorld),i=n.z-t.z;e.heightMin=t.z-.2*i,e.heightMax=n.z+.2*i}dispose(){this.root&&this.root.dispose(),this.pcoGeometry.root.traverse(e=>this.potree.lru.remove(e)),this.pcoGeometry.dispose(),this.material.dispose(),this.visibleNodes=[],this.visibleGeometry=[],this.picker&&(this.picker.dispose(),this.picker=void 0),this.disposed=!0}get pointSizeType(){return this.material.pointSizeType}set pointSizeType(e){this.material.pointSizeType=e}toTreeNode(e,t){const n=new br(e.geometry,this.material),i=new Nh(e,n);return n.name=e.name,n.position.copy(e.boundingBox.min),n.frustumCulled=!1,n.onBeforeRender=we.makeOnBeforeRender(this,i),t?(t.sceneNode.add(n),t.children[e.index]=i,e.oneTimeDisposeHandlers.push(()=>{i.disposeSceneNode(),t.sceneNode.remove(i.sceneNode),t.children[e.index]=e})):(this.root=i,this.add(n)),i}updateVisibleBounds(){const e=this.visibleBounds;e.min.set(1/0,1/0,1/0),e.max.set(-1/0,-1/0,-1/0);for(const t of this.visibleNodes)t.isLeafNode&&(e.expandByPoint(t.boundingBox.min),e.expandByPoint(t.boundingBox.max))}updateBoundingBoxes(){if(!this.showBoundingBox||!this.parent)return;let e=this.parent.getObjectByName("bbroot");e||(e=new Ge,e.name="bbroot",this.parent.add(e));const t=[];for(const n of this.visibleNodes)n.boundingBoxNode!==void 0&&n.isLeafNode&&t.push(n.boundingBoxNode);e.children=t}updateMatrixWorld(e){this.matrixAutoUpdate===!0&&this.updateMatrix(),(this.matrixWorldNeedsUpdate===!0||e===!0)&&(this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0)}hideDescendants(e){const t=[];for(n(e);t.length>0;){const i=t.shift();i.visible=!1,n(i)}function n(i){for(const s of i.children)s.visible&&t.push(s)}}moveToOrigin(){this.position.set(0,0,0),this.position.set(0,0,0).sub(this.getBoundingBoxWorld().getCenter(new _))}moveToGroundPlane(){this.position.y+=-this.getBoundingBoxWorld().min.y}getBoundingBoxWorld(){return this.updateMatrixWorld(!0),Fr(this.boundingBox,this.matrixWorld)}getVisibleExtent(){return this.visibleBounds.applyMatrix4(this.matrixWorld)}pick(e,t,n,i={}){return this.picker=this.picker||new As,this.picker.pick(e,t,n,[this],i)}get progress(){return this.visibleGeometry.length===0?0:this.visibleNodes.length/this.visibleGeometry.length}}const zh=document.createElement("canvas"),bt=zh.getContext("webgl")||zh.getContext("experimental-webgl"),Xv={SHADER_INTERPOLATION:zr("EXT_frag_depth")&&Ea(8),SHADER_SPLATS:zr("EXT_frag_depth")&&zr("OES_texture_float")&&Ea(8),SHADER_EDL:zr("OES_texture_float")&&Ea(8),precision:jv()};function zr(r){return bt!==null&&Boolean(bt.getExtension(r))}function Ea(r){return bt!==null&&bt.getParameter(bt.MAX_VARYING_VECTORS)>=r}function jv(){if(bt===null)return"";const r=bt.getShaderPrecisionFormat(bt.VERTEX_SHADER,bt.HIGH_FLOAT),e=bt.getShaderPrecisionFormat(bt.VERTEX_SHADER,bt.MEDIUM_FLOAT),t=bt.getShaderPrecisionFormat(bt.FRAGMENT_SHADER,bt.HIGH_FLOAT),n=bt.getShaderPrecisionFormat(bt.FRAGMENT_SHADER,bt.MEDIUM_FLOAT),i=r&&t&&r.precision>0&&t.precision>0,s=e&&n&&e.precision>0&&n.precision>0;return i?"highp":s?"mediump":"lowp"}class Zi{constructor(e){this.versionMinor=0,this.version=e;const t=e.indexOf(".")===-1?e.length:e.indexOf(".");this.versionMajor=parseInt(e.substr(0,t),10),this.versionMinor=parseInt(e.substr(t+1),10),isNaN(this.versionMinor)&&(this.versionMinor=0)}newerThan(e){const t=new Zi(e);return this.versionMajor>t.versionMajor?!0:this.versionMajor===t.versionMajor&&this.versionMinor>t.versionMinor}equalOrHigher(e){const t=new Zi(e);return this.versionMajor>t.versionMajor?!0:this.versionMajor===t.versionMajor&&this.versionMinor>=t.versionMinor}upTo(e){return!this.newerThan(e)}}var Bh=null;try{var Zv=typeof module<"u"&&typeof module.require=="function"&&module.require("worker_threads")||typeof __non_webpack_require__=="function"&&__non_webpack_require__("worker_threads")||typeof require=="function"&&require("worker_threads");Bh=Zv.Worker}catch{}function Yv(r,e){return Buffer.from(r,"base64").toString(e?"utf16":"utf8")}function qv(r,e,t){var n=e===void 0?null:e,i=t===void 0?!1:t,s=Yv(r,i),o=s.indexOf(`
`,10)+1,a=s.substring(o)+(n?"//# sourceMappingURL="+n:"");return function(c){return new Bh(a,Object.assign({},c,{eval:!0}))}}function Jv(r,e){var t=atob(r);if(e){for(var n=new Uint8Array(t.length),i=0,s=t.length;i<s;++i)n[i]=t.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(n.buffer))}return t}function Qv(r,e,t){var n=e===void 0?null:e,i=t===void 0?!1:t,s=Jv(r,i),o=s.indexOf(`
`,10)+1,a=s.substring(o)+(n?"//# sourceMappingURL="+n:""),l=new Blob([a],{type:"application/javascript"});return URL.createObjectURL(l)}function Kv(r,e,t){var n;return function(s){return n=n||Qv(r,e,t),new Worker(n,s)}}var $v=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";function ey(){return $v}function Uh(r,e,t){return ey()?qv(r,e,t):Kv(r,e,t)}Uh("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwp2YXIgd29ya2VyX2NvZGU9ZnVuY3Rpb24oUCl7InVzZSBzdHJpY3QiO3ZhciBUPShuPT4obltuLlBPU0lUSU9OX0NBUlRFU0lBTj0wXT0iUE9TSVRJT05fQ0FSVEVTSUFOIixuW24uQ09MT1JfUEFDS0VEPTFdPSJDT0xPUl9QQUNLRUQiLG5bbi5DT0xPUl9GTE9BVFNfMT0yXT0iQ09MT1JfRkxPQVRTXzEiLG5bbi5DT0xPUl9GTE9BVFNfMjU1PTNdPSJDT0xPUl9GTE9BVFNfMjU1IixuW24uTk9STUFMX0ZMT0FUUz00XT0iTk9STUFMX0ZMT0FUUyIsbltuLkZJTExFUj01XT0iRklMTEVSIixuW24uSU5URU5TSVRZPTZdPSJJTlRFTlNJVFkiLG5bbi5DTEFTU0lGSUNBVElPTj03XT0iQ0xBU1NJRklDQVRJT04iLG5bbi5OT1JNQUxfU1BIRVJFTUFQUEVEPThdPSJOT1JNQUxfU1BIRVJFTUFQUEVEIixuW24uTk9STUFMX09DVDE2PTldPSJOT1JNQUxfT0NUMTYiLG5bbi5OT1JNQUw9MTBdPSJOT1JNQUwiLG4pKShUfHx7fSk7Y29uc3QgTz17REFUQV9UWVBFX0RPVUJMRTp7b3JkaW5hbDowLHNpemU6OH0sREFUQV9UWVBFX0ZMT0FUOntvcmRpbmFsOjEsc2l6ZTo0fSxEQVRBX1RZUEVfSU5UODp7b3JkaW5hbDoyLHNpemU6MX0sREFUQV9UWVBFX1VJTlQ4OntvcmRpbmFsOjMsc2l6ZToxfSxEQVRBX1RZUEVfSU5UMTY6e29yZGluYWw6NCxzaXplOjJ9LERBVEFfVFlQRV9VSU5UMTY6e29yZGluYWw6NSxzaXplOjJ9LERBVEFfVFlQRV9JTlQzMjp7b3JkaW5hbDo2LHNpemU6NH0sREFUQV9UWVBFX1VJTlQzMjp7b3JkaW5hbDo3LHNpemU6NH0sREFUQV9UWVBFX0lOVDY0OntvcmRpbmFsOjgsc2l6ZTo4fSxEQVRBX1RZUEVfVUlOVDY0OntvcmRpbmFsOjksc2l6ZTo4fX07ZnVuY3Rpb24gSShuLHQsZSl7cmV0dXJue25hbWU6bix0eXBlOnQsbnVtRWxlbWVudHM6ZSxieXRlU2l6ZTplKnQuc2l6ZX19Y29uc3QgaD1JKDEsTy5EQVRBX1RZUEVfSU5UOCw0KSxTPXtQT1NJVElPTl9DQVJURVNJQU46SSgwLE8uREFUQV9UWVBFX0ZMT0FULDMpLFJHQkFfUEFDS0VEOmgsQ09MT1JfUEFDS0VEOmgsUkdCX1BBQ0tFRDpJKDEsTy5EQVRBX1RZUEVfSU5UOCwzKSxOT1JNQUxfRkxPQVRTOkkoNCxPLkRBVEFfVFlQRV9GTE9BVCwzKSxGSUxMRVJfMUI6SSg1LE8uREFUQV9UWVBFX1VJTlQ4LDEpLElOVEVOU0lUWTpJKDYsTy5EQVRBX1RZUEVfVUlOVDE2LDEpLENMQVNTSUZJQ0FUSU9OOkkoNyxPLkRBVEFfVFlQRV9VSU5UOCwxKSxOT1JNQUxfU1BIRVJFTUFQUEVEOkkoOCxPLkRBVEFfVFlQRV9VSU5UOCwyKSxOT1JNQUxfT0NUMTY6SSg5LE8uREFUQV9UWVBFX1VJTlQ4LDIpLE5PUk1BTDpJKDEwLE8uREFUQV9UWVBFX0ZMT0FULDMpfTtjbGFzcyBfe2NvbnN0cnVjdG9yKHQpe3RoaXMudmVyc2lvbk1pbm9yPTAsdGhpcy52ZXJzaW9uPXQ7Y29uc3QgZT10LmluZGV4T2YoIi4iKT09PS0xP3QubGVuZ3RoOnQuaW5kZXhPZigiLiIpO3RoaXMudmVyc2lvbk1ham9yPXBhcnNlSW50KHQuc3Vic3RyKDAsZSksMTApLHRoaXMudmVyc2lvbk1pbm9yPXBhcnNlSW50KHQuc3Vic3RyKGUrMSksMTApLGlzTmFOKHRoaXMudmVyc2lvbk1pbm9yKSYmKHRoaXMudmVyc2lvbk1pbm9yPTApfW5ld2VyVGhhbih0KXtjb25zdCBlPW5ldyBfKHQpO3JldHVybiB0aGlzLnZlcnNpb25NYWpvcj5lLnZlcnNpb25NYWpvcj8hMDp0aGlzLnZlcnNpb25NYWpvcj09PWUudmVyc2lvbk1ham9yJiZ0aGlzLnZlcnNpb25NaW5vcj5lLnZlcnNpb25NaW5vcn1lcXVhbE9ySGlnaGVyKHQpe2NvbnN0IGU9bmV3IF8odCk7cmV0dXJuIHRoaXMudmVyc2lvbk1ham9yPmUudmVyc2lvbk1ham9yPyEwOnRoaXMudmVyc2lvbk1ham9yPT09ZS52ZXJzaW9uTWFqb3ImJnRoaXMudmVyc2lvbk1pbm9yPj1lLnZlcnNpb25NaW5vcn11cFRvKHQpe3JldHVybiF0aGlzLm5ld2VyVGhhbih0KX19Y2xhc3MgRXtjb25zdHJ1Y3Rvcih0KXt0aGlzLnRtcD1uZXcgQXJyYXlCdWZmZXIoNCksdGhpcy50bXBmPW5ldyBGbG9hdDMyQXJyYXkodGhpcy50bXApLHRoaXMudG1wdTg9bmV3IFVpbnQ4QXJyYXkodGhpcy50bXApLHRoaXMudTg9bmV3IFVpbnQ4QXJyYXkodCl9Z2V0VWludDMyKHQpe3JldHVybiB0aGlzLnU4W3QrM108PDI0fHRoaXMudThbdCsyXTw8MTZ8dGhpcy51OFt0KzFdPDw4fHRoaXMudThbdF19Z2V0VWludDE2KHQpe3JldHVybiB0aGlzLnU4W3QrMV08PDh8dGhpcy51OFt0XX1nZXRGbG9hdDMyKHQpe2NvbnN0IGU9dGhpcy50bXB1OCxpPXRoaXMudTgscj10aGlzLnRtcGY7cmV0dXJuIGVbMF09aVt0KzBdLGVbMV09aVt0KzFdLGVbMl09aVt0KzJdLGVbM109aVt0KzNdLHJbMF19Z2V0VWludDgodCl7cmV0dXJuIHRoaXMudThbdF19fWNvbnN0IE49TWF0aC5zaWdufHxmdW5jdGlvbihuKXtyZXR1cm4obj0rbik9PTB8fG4hPW4/bjpuPDA/LTE6MX07ZnVuY3Rpb24gbChuKXtjb25zdCB0PW4uZGF0YS5idWZmZXIsZT1uLmRhdGEucG9pbnRBdHRyaWJ1dGVzLGk9e2F0dHJpYnV0ZUJ1ZmZlcnM6e30sY3VycmVudE9mZnNldDowLGRhdGE6bmV3IEUodCksbWVhbjpbMCwwLDBdLG5vZGVPZmZzZXQ6bi5kYXRhLm9mZnNldCxudW1Qb2ludHM6bi5kYXRhLmJ1ZmZlci5ieXRlTGVuZ3RoL2UuYnl0ZVNpemUscG9pbnRBdHRyaWJ1dGVzOmUsc2NhbGU6bi5kYXRhLnNjYWxlLHRpZ2h0Qm94TWF4OltOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLE51bWJlci5ORUdBVElWRV9JTkZJTklUWV0sdGlnaHRCb3hNaW46W051bWJlci5QT1NJVElWRV9JTkZJTklUWSxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXSx0cmFuc2ZlcmFibGVzOltdLHZlcnNpb246bmV3IF8obi5kYXRhLnZlcnNpb24pfTtmb3IoY29uc3QgcyBvZiBpLnBvaW50QXR0cmlidXRlcy5hdHRyaWJ1dGVzKWQocyxpKSxpLmN1cnJlbnRPZmZzZXQrPXMuYnl0ZVNpemU7Y29uc3Qgcj1uZXcgQXJyYXlCdWZmZXIoaS5udW1Qb2ludHMqNCksbz1uZXcgVWludDMyQXJyYXkocik7Zm9yKGxldCBzPTA7czxpLm51bVBvaW50cztzKyspb1tzXT1zO2kuYXR0cmlidXRlQnVmZmVyc1tULkNMQVNTSUZJQ0FUSU9OXXx8bShpKTtjb25zdCB1PXtidWZmZXI6dCxtZWFuOmkubWVhbixhdHRyaWJ1dGVCdWZmZXJzOmkuYXR0cmlidXRlQnVmZmVycyx0aWdodEJvdW5kaW5nQm94OnttaW46aS50aWdodEJveE1pbixtYXg6aS50aWdodEJveE1heH0saW5kaWNlczpyfTtwb3N0TWVzc2FnZSh1LGkudHJhbnNmZXJhYmxlcyl9ZnVuY3Rpb24gbShuKXtjb25zdCB0PW5ldyBBcnJheUJ1ZmZlcihuLm51bVBvaW50cyo0KSxlPW5ldyBGbG9hdDMyQXJyYXkodCk7Zm9yKGxldCBpPTA7aTxuLm51bVBvaW50cztpKyspZVtpXT0wO24uYXR0cmlidXRlQnVmZmVyc1tULkNMQVNTSUZJQ0FUSU9OXT17YnVmZmVyOnQsYXR0cmlidXRlOlMuQ0xBU1NJRklDQVRJT059fWZ1bmN0aW9uIGQobix0KXtjb25zdCBlPUwobix0KTtlIT09dm9pZCAwJiYodC5hdHRyaWJ1dGVCdWZmZXJzW2UuYXR0cmlidXRlLm5hbWVdPWUsdC50cmFuc2ZlcmFibGVzLnB1c2goZS5idWZmZXIpKX1mdW5jdGlvbiBMKG4sdCl7c3dpdGNoKG4ubmFtZSl7Y2FzZSBULlBPU0lUSU9OX0NBUlRFU0lBTjpyZXR1cm4gZyhuLHQpO2Nhc2UgVC5DT0xPUl9QQUNLRUQ6cmV0dXJuIHkobix0KTtjYXNlIFQuSU5URU5TSVRZOnJldHVybiBGKG4sdCk7Y2FzZSBULkNMQVNTSUZJQ0FUSU9OOnJldHVybiBCKG4sdCk7Y2FzZSBULk5PUk1BTF9TUEhFUkVNQVBQRUQ6cmV0dXJuIEMobix0KTtjYXNlIFQuTk9STUFMX09DVDE2OnJldHVybiBSKG4sdCk7Y2FzZSBULk5PUk1BTDpyZXR1cm4gcChuLHQpO2RlZmF1bHQ6cmV0dXJufX1mdW5jdGlvbiBnKG4sdCl7Y29uc3QgZT1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqNCozKSxpPW5ldyBGbG9hdDMyQXJyYXkoZSk7Zm9yKGxldCByPTA7cjx0Lm51bVBvaW50cztyKyspe2xldCBvLHUsczt0LnZlcnNpb24ubmV3ZXJUaGFuKCIxLjMiKT8obz10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzApKnQuc2NhbGUsdT10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzQpKnQuc2NhbGUscz10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzgpKnQuc2NhbGUpOihvPXQuZGF0YS5nZXRGbG9hdDMyKHIqdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrMCkrdC5ub2RlT2Zmc2V0WzBdLHU9dC5kYXRhLmdldEZsb2F0MzIocip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSs0KSt0Lm5vZGVPZmZzZXRbMV0scz10LmRhdGEuZ2V0RmxvYXQzMihyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzgpK3Qubm9kZU9mZnNldFsyXSksaVszKnIrMF09byxpWzMqcisxXT11LGlbMypyKzJdPXMsdC5tZWFuWzBdKz1vL3QubnVtUG9pbnRzLHQubWVhblsxXSs9dS90Lm51bVBvaW50cyx0Lm1lYW5bMl0rPXMvdC5udW1Qb2ludHMsdC50aWdodEJveE1pblswXT1NYXRoLm1pbih0LnRpZ2h0Qm94TWluWzBdLG8pLHQudGlnaHRCb3hNaW5bMV09TWF0aC5taW4odC50aWdodEJveE1pblsxXSx1KSx0LnRpZ2h0Qm94TWluWzJdPU1hdGgubWluKHQudGlnaHRCb3hNaW5bMl0scyksdC50aWdodEJveE1heFswXT1NYXRoLm1heCh0LnRpZ2h0Qm94TWF4WzBdLG8pLHQudGlnaHRCb3hNYXhbMV09TWF0aC5tYXgodC50aWdodEJveE1heFsxXSx1KSx0LnRpZ2h0Qm94TWF4WzJdPU1hdGgubWF4KHQudGlnaHRCb3hNYXhbMl0scyl9cmV0dXJue2J1ZmZlcjplLGF0dHJpYnV0ZTpufX1mdW5jdGlvbiB5KG4sdCl7Y29uc3QgZT1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqMyksaT1uZXcgVWludDhBcnJheShlKTtmb3IobGV0IHI9MDtyPHQubnVtUG9pbnRzO3IrKylpWzMqciswXT10LmRhdGEuZ2V0VWludDgodC5jdXJyZW50T2Zmc2V0K3IqdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrMCksaVszKnIrMV09dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzEpLGlbMypyKzJdPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrcip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSsyKTtyZXR1cm57YnVmZmVyOmUsYXR0cmlidXRlOm59fWZ1bmN0aW9uIEYobix0KXtjb25zdCBlPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cyo0KSxpPW5ldyBGbG9hdDMyQXJyYXkoZSk7Zm9yKGxldCByPTA7cjx0Lm51bVBvaW50cztyKyspaVtyXT10LmRhdGEuZ2V0VWludDE2KHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKTtyZXR1cm57YnVmZmVyOmUsYXR0cmlidXRlOm59fWZ1bmN0aW9uIEIobix0KXtjb25zdCBlPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cyksaT1uZXcgVWludDhBcnJheShlKTtmb3IobGV0IHI9MDtyPHQubnVtUG9pbnRzO3IrKylpW3JdPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrcip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSk7cmV0dXJue2J1ZmZlcjplLGF0dHJpYnV0ZTpufX1mdW5jdGlvbiBDKG4sdCl7Y29uc3QgZT1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqNCozKSxpPW5ldyBGbG9hdDMyQXJyYXkoZSk7Zm9yKGxldCByPTA7cjx0Lm51bVBvaW50cztyKyspe2NvbnN0IG89dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzApLHU9dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzEpLHM9by8yNTUsYj11LzI1NTtsZXQgQT1zKjItMSxhPWIqMi0xLGY9MTtjb25zdCBjPS0xLE09QSotQSthKi1hK2YqLWM7Zj1NLEE9QSpNYXRoLnNxcnQoTSksYT1hKk1hdGguc3FydChNKSxBPUEqMixhPWEqMixmPWYqMi0xLGlbMypyKzBdPUEsaVszKnIrMV09YSxpWzMqcisyXT1mfXJldHVybntidWZmZXI6ZSxhdHRyaWJ1dGU6bn19ZnVuY3Rpb24gUihuLHQpe2NvbnN0IGU9bmV3IEFycmF5QnVmZmVyKHQubnVtUG9pbnRzKjQqMyksaT1uZXcgRmxvYXQzMkFycmF5KGUpO2ZvcihsZXQgcj0wO3I8dC5udW1Qb2ludHM7cisrKXtjb25zdCBvPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrcip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSswKSx1PXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrcip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSsxKSxzPW8vMjU1KjItMSxiPXUvMjU1KjItMTtsZXQgQT0xLU1hdGguYWJzKHMpLU1hdGguYWJzKGIpLGE9MCxmPTA7QT49MD8oYT1zLGY9Yik6KGE9LShiL04oYiktMSkvTihzKSxmPS0ocy9OKHMpLTEpL04oYikpO2NvbnN0IGM9TWF0aC5zcXJ0KGEqYStmKmYrQSpBKTthPWEvYyxmPWYvYyxBPUEvYyxpWzMqciswXT1hLGlbMypyKzFdPWYsaVszKnIrMl09QX1yZXR1cm57YnVmZmVyOmUsYXR0cmlidXRlOm59fWZ1bmN0aW9uIHAobix0KXtjb25zdCBlPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cyo0KjMpLGk9bmV3IEZsb2F0MzJBcnJheShlKTtmb3IobGV0IHI9MDtyPHQubnVtUG9pbnRzO3IrKyl7Y29uc3Qgbz10LmRhdGEuZ2V0RmxvYXQzMih0LmN1cnJlbnRPZmZzZXQrcip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSswKSx1PXQuZGF0YS5nZXRGbG9hdDMyKHQuY3VycmVudE9mZnNldCtyKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzQpLHM9dC5kYXRhLmdldEZsb2F0MzIodC5jdXJyZW50T2Zmc2V0K3IqdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrOCk7aVszKnIrMF09byxpWzMqcisxXT11LGlbMypyKzJdPXN9cmV0dXJue2J1ZmZlcjplLGF0dHJpYnV0ZTpufX1yZXR1cm4gUC5oYW5kbGVNZXNzYWdlPWwsT2JqZWN0LmRlZmluZVByb3BlcnR5KFAsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pLFB9KHt9KTsKCg==",null,!1);var ty=Uh("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7ZnVuY3Rpb24gbChpKXtjb25zdCBFPWkuZGF0YS5idWZmZXIsbj1pLmRhdGEubnVtUG9pbnRzLHI9aS5kYXRhLnBvaW50U2l6ZSxGPWkuZGF0YS5wb2ludEZvcm1hdElELGM9aS5kYXRhLnNjYWxlLE49aS5kYXRhLm9mZnNldCxhPW5ldyBEYXRhVmlldyhFKSxlPXttaW46W051bWJlci5QT1NJVElWRV9JTkZJTklUWSxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXSxtYXg6W051bWJlci5ORUdBVElWRV9JTkZJTklUWSxOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXX0sbT1bMCwwLDBdLHc9bmV3IEFycmF5QnVmZmVyKG4qMyo0KSx5PW5ldyBBcnJheUJ1ZmZlcihuKjQpLGc9bmV3IEFycmF5QnVmZmVyKG4qNCksVT1uZXcgQXJyYXlCdWZmZXIobiksZD1uZXcgQXJyYXlCdWZmZXIobiksVD1uZXcgQXJyYXlCdWZmZXIobiksYj1uZXcgQXJyYXlCdWZmZXIobioyKSxBPW5ldyBGbG9hdDMyQXJyYXkodykscz1uZXcgVWludDhBcnJheSh5KSxoPW5ldyBGbG9hdDMyQXJyYXkoZykscD1uZXcgVWludDhBcnJheShVKSxNPW5ldyBVaW50OEFycmF5KGQpLFY9bmV3IFVpbnQ4QXJyYXkoVCksUz1uZXcgVWludDE2QXJyYXkoYik7Zm9yKGxldCB0PTA7dDxuO3QrKyl7Y29uc3QgTz1hLmdldEludDMyKHQqciswLCEwKSxEPWEuZ2V0SW50MzIodCpyKzQsITApLFA9YS5nZXRJbnQzMih0KnIrOCwhMCksST1PKmNbMF0rTlswXS1pLmRhdGEubWluc1swXSxmPUQqY1sxXStOWzFdLWkuZGF0YS5taW5zWzFdLG89UCpjWzJdK05bMl0taS5kYXRhLm1pbnNbMl07QVszKnQrMF09SSxBWzMqdCsxXT1mLEFbMyp0KzJdPW8sbVswXSs9SS9uLG1bMV0rPWYvbixtWzJdKz1vL24sZS5taW5bMF09TWF0aC5taW4oZS5taW5bMF0sSSksZS5taW5bMV09TWF0aC5taW4oZS5taW5bMV0sZiksZS5taW5bMl09TWF0aC5taW4oZS5taW5bMl0sbyksZS5tYXhbMF09TWF0aC5tYXgoZS5tYXhbMF0sSSksZS5tYXhbMV09TWF0aC5tYXgoZS5tYXhbMV0sZiksZS5tYXhbMl09TWF0aC5tYXgoZS5tYXhbMl0sbyk7Y29uc3QgRz1hLmdldFVpbnQxNih0KnIrMTIsITApO2hbdF09Rztjb25zdCBCPWEuZ2V0VWludDgodCpyKzE0KSxSPUImNyx6PShCJjU2KT4+MztNW3RdPVIsVlt0XT16O2NvbnN0IGo9YS5nZXRVaW50OCh0KnIrMTUpO3BbdF09ajtjb25zdCBrPWEuZ2V0VWludDE2KHQqcisxOCwhMCk7aWYoU1t0XT1rLEY9PT0yKXtjb25zdCBxPWEuZ2V0VWludDE2KHQqcisyMCwhMCkvMjU2LEM9YS5nZXRVaW50MTYodCpyKzIyLCEwKS8yNTYsSD1hLmdldFVpbnQxNih0KnIrMjQsITApLzI1NjtzWzQqdCswXT1xLHNbNCp0KzFdPUMsc1s0KnQrMl09SCxzWzQqdCszXT0yNTV9fWNvbnN0IHg9bmV3IEFycmF5QnVmZmVyKG4qNCksWT1uZXcgVWludDMyQXJyYXkoeCk7Zm9yKGxldCB0PTA7dDxuO3QrKylZW3RdPXQ7Y29uc3QgdT17bWVhbjptLHBvc2l0aW9uOncsY29sb3I6eSxpbnRlbnNpdHk6ZyxjbGFzc2lmaWNhdGlvbjpVLHJldHVybk51bWJlcjpkLG51bWJlck9mUmV0dXJuczpULHBvaW50U291cmNlSUQ6Yix0aWdodEJvdW5kaW5nQm94OmUsaW5kaWNlczp4fSxfPVt1LnBvc2l0aW9uLHUuY29sb3IsdS5pbnRlbnNpdHksdS5jbGFzc2lmaWNhdGlvbix1LnJldHVybk51bWJlcix1Lm51bWJlck9mUmV0dXJucyx1LnBvaW50U291cmNlSUQsdS5pbmRpY2VzXTtwb3N0TWVzc2FnZSh1LF8pfW9ubWVzc2FnZT1sfSkoKTsKCg==",null,!1);const Vh={0:r=>({position:[r.getInt32(0,!0),r.getInt32(4,!0),r.getInt32(8,!0)],intensity:r.getUint16(12,!0),classification:r.getUint8(16)}),1:r=>({position:[r.getInt32(0,!0),r.getInt32(4,!0),r.getInt32(8,!0)],intensity:r.getUint16(12,!0),classification:r.getUint8(16)}),2:r=>({position:[r.getInt32(0,!0),r.getInt32(4,!0),r.getInt32(8,!0)],intensity:r.getUint16(12,!0),classification:r.getUint8(16),color:[r.getUint16(20,!0),r.getUint16(22,!0),r.getUint16(24,!0)]}),3:r=>({position:[r.getInt32(0,!0),r.getInt32(4,!0),r.getInt32(8,!0)],intensity:r.getUint16(12,!0),classification:r.getUint8(16),color:[r.getUint16(28,!0),r.getUint16(30,!0),r.getUint16(32,!0)]})},Hn=(r,e,t,n)=>{n=n===void 0||n===0?1:n;const i=r.slice(t,t+e.BYTES_PER_ELEMENT*n),s=new e(i);if(n===void 0||n===1)return s[0];const o=[];for(let a=0;a<n;a++)o.push(s[a]);return o},ny=r=>{const e={pointsOffset:0,pointsFormatId:0,pointsStructSize:0,pointsCount:0,scale:[],offset:[],maxs:[],mins:[]};e.pointsOffset=Hn(r,Uint32Array,32*3),e.pointsFormatId=Hn(r,Uint8Array,32*3+8),e.pointsStructSize=Hn(r,Uint16Array,32*3+8+1),e.pointsCount=Hn(r,Uint32Array,32*3+11);let t=32*3+35;e.scale=Hn(r,Float64Array,t,3),t+=24,e.offset=Hn(r,Float64Array,t,3),t+=24;const n=Hn(r,Float64Array,t,6);return t+=48,e.maxs=[n[0],n[2],n[4]],e.mins=[n[1],n[3],n[5]],e};class iy{constructor(e){this.arrayBuffer=e,this.readOffset=0}open(){return new Promise(function(e){setTimeout(e,0)})}getHeader(){return new Promise(e=>{setTimeout(()=>{this.header=ny(this.arrayBuffer),e(this.header)},0)})}readData(e,t,n){return new Promise((i,s)=>{setTimeout(()=>{if(!this.header)return s(new Error("Cannot start reading data till a header request is issued"));let o;if(n<=1){e=Math.min(e,this.header.pointsCount-this.readOffset),o=this.header.pointsOffset+this.readOffset*this.header.pointsStructSize;const a=o+e*this.header.pointsStructSize;return this.readOffset+=e,i({buffer:this.arrayBuffer.slice(o,a),count:e,hasMoreData:this.readOffset+e<this.header.pointsCount})}else{const a=Math.min(e*n,this.header.pointsCount-this.readOffset),l=Math.ceil(a/n);let c=0;const h=new Uint8Array(l*this.header.pointsStructSize);for(let d=0;d<a;d++){if(d%n===0){o=this.header.pointsOffset+this.readOffset*this.header.pointsStructSize;const u=new Uint8Array(this.arrayBuffer,o,this.header.pointsStructSize);h.set(u,c*this.header.pointsStructSize),c++}this.readOffset++}return i({buffer:h.buffer,count:c,hasMoreData:this.readOffset<this.header.pointsCount})}},0)})}close(){return new Promise(e=>{setTimeout(e,0)})}}class sy{constructor(e){if(this.arrayBuffer=e,this.version=-1,this.formatId=-1,this.isCompressed=!1,this.versionAsString="-1",this.determineVersion(),this.version>12)throw new Error("Only file versions <= 1.2 are supported at this time");if(this.determineFormat(),!Vh[this.formatId])throw new Error("The point format ID is not supported: "+this.formatId);if(this.isCompressed)throw new Error("LAZ not supported");this.loader=new iy(this.arrayBuffer)}determineFormat(){const e=Hn(this.arrayBuffer,Uint8Array,104),t=(e&128)>>7,n=(e&64)>>6;if(t===1&&n===1)throw new Error("Old style compression not supported");this.formatId=e&63,this.isCompressed=t===1||n===1}determineVersion(){const e=new Int8Array(this.arrayBuffer,24,2);this.version=e[0]*10+e[1],this.versionAsString=e[0]+"."+e[1]}open(){return this.loader.open()}getHeader(){return this.loader.getHeader()}readData(e,t,n){return this.loader.readData(e,t,n)}close(){return this.loader.close()}}class ry{constructor(e,t,n,i,s,o,a,l){this.arrayb=e,this.decoder=Vh[t],this.pointsCount=i,this.pointSize=n,this.scale=s,this.offset=o,this.mins=a,this.maxs=l}getPoint(e){if(e<0||e>=this.pointsCount)throw new Error("Point index out of range");const t=new DataView(this.arrayb,e*this.pointSize,this.pointSize);return this.decoder(t)}}var oy=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});class ay{constructor({getUrl:e=a=>Promise.resolve(a),version:t,boundingBox:n,scale:i,xhrRequest:s,xhrInit:o}){this.disposed=!1,this.workers=[],typeof t=="string"?this.version=new Zi(t):this.version=t,this.xhrRequest=s,this.xhrInit=o||{},this.getUrl=e,this.boundingBox=n,this.scale=i,this.callbacks=[]}dispose(){this.workers.forEach(e=>e.terminate()),this.workers=[],this.disposed=!0}load(e){return e.loaded||this.disposed?Promise.resolve():Promise.resolve(this.getUrl(this.getNodeUrl(e))).then(t=>this.xhrRequest(t,this.xhrInit)).then(t=>t.arrayBuffer()).then(t=>new Promise(n=>this.parse(e,t,n)))}getNodeUrl(e){let t=e.getUrl();return this.version.equalOrHigher("1.4")&&(t+=".las"),t}parse(e,t,n){return oy(this,null,function*(){if(this.disposed){n();return}const i=new sy(t),s=yield i.getHeader(),o=1,a=s.pointsCount;yield i.readData(a,0,o).then(l=>{const c=new ry(l.buffer,s.pointsFormatId,s.pointsStructSize,l.count,s.scale,s.offset,s.mins,s.maxs),h=this.getWorker();h.onmessage=u=>{const f=e.geometry=e.geometry||new ze,v=c.pointsCount,g=new Float32Array(u.data.position),y=new Uint8Array(u.data.color),m=new Float32Array(u.data.intensity),p=new Uint8Array(u.data.classification),S=new Uint8Array(u.data.returnNumber),x=new Uint8Array(u.data.numberOfReturns),w=new Uint16Array(u.data.pointSourceID),C=new Uint8Array(u.data.indices);f.setAttribute("position",new Ue(g,3)),f.setAttribute("color",new Ue(y,4,!0)),f.setAttribute("intensity",new Ue(m,1)),f.setAttribute("classification",new Ue(p,1)),f.setAttribute("returnNumber",new Ue(S,1)),f.setAttribute("numberOfReturns",new Ue(x,1)),f.setAttribute("pointSourceID",new Ue(w,1)),f.setAttribute("indices",new Ue(C,4)),f.attributes.indices.normalized=!0;const A=new ot(new _().fromArray(u.data.tightBoundingBox.min),new _().fromArray(u.data.tightBoundingBox.max));f.boundingBox=e.boundingBox,e.tightBoundingBox=A,e.loaded=!0,e.loading=!1,e.failed=!1,e.pcoGeometry.numNodesLoading--,e.pcoGeometry.needsUpdate=!0,e.geometry=f,e.numPoints=v,e.mean=new _(...u.data.mean),this.releaseWorker(h),this.callbacks.forEach(B=>B(e)),n()};const d={buffer:c.arrayb,numPoints:c.pointsCount,pointSize:c.pointSize,pointFormatID:2,scale:c.scale,offset:c.offset,mins:c.mins,maxs:c.maxs};h.postMessage(d,[d.buffer])}).catch(l=>{throw new Error(l)})})}getWorker(){const e=this.workers.pop();return e||new ty}releaseWorker(e){this.workers.push(e)}}function ly(r,e,t,n){return Promise.resolve(e(r)).then(i=>t(i,n).then(s=>s.json()).then(cy(i,e,t,n)))}function cy(r,e,t,n){return i=>{const{offset:s,boundingBox:o,tightBoundingBox:a}=hy(i);let l,c;if(!Array.isArray(i.pointAttributes)&&i.pointAttributes==="LAS")l=new ay({getUrl:e,version:i.version,boundingBox:o,scale:i.scale,xhrRequest:t,xhrInit:n}),c=["POSITION_CARTESIAN","RGB_PACKED","INTENSITY","CLASSIFICATION"];else throw new Error("Unsupported format "+i.pointAttributes);const h=new Ih(l,o,a,s,t,n);h.url=r,h.octreeDir=i.octreeDir,h.needsUpdate=!0,h.spacing=i.spacing,h.hierarchyStepSize=i.hierarchyStepSize,h.projection=i.projection,h.offset=s,h.pointAttributes=new wa(c);const d={},u=new Zi(i.version);return dy(h,i,d,u,n).then(()=>(u.upTo("1.4")&&uy(h,i,d,n),h.nodes=d,h))}}function hy(r){const e=new _(r.boundingBox.lx,r.boundingBox.ly,r.boundingBox.lz),t=new _(r.boundingBox.ux,r.boundingBox.uy,r.boundingBox.uz),n=new ot(e,t),i=n.clone(),s=e.clone();if(r.tightBoundingBox){const{lx:o,ly:a,lz:l,ux:c,uy:h,uz:d}=r.tightBoundingBox;i.min.set(o,a,l),i.max.set(c,h,d)}return n.min.sub(s),n.max.sub(s),i.min.sub(s),i.max.sub(s),{offset:s,boundingBox:n,tightBoundingBox:i}}function dy(r,e,t,n,i){const s="r",o=new Or(s,r,r.boundingBox,i);return o.hasChildren=!0,o.spacing=r.spacing,n.upTo("1.5")?o.numPoints=e.hierarchy[0][1]:o.numPoints=0,r.root=o,t[s]=o,r.root.load()}function uy(r,e,t,n){for(let i=1;i<e.hierarchy.length;i++){const[s,o]=e.hierarchy[i],{index:a,parentName:l,level:c}=fy(s),h=t[l],d=Rh(h.boundingBox,a),u=new Or(s,r,d,n);u.level=c,u.numPoints=o,u.spacing=r.spacing/Math.pow(2,u.level),t[s]=u,h.addChild(u)}}function fy(r){return{index:_a(r),parentName:r.substring(0,r.length-1),level:r.length-1}}function py(r){return r!=null&&r.isGeometryNode}function Ta(r){return r!=null&&r.isTreeNode}function kh(r){this.content=[],this.scoreFunction=r}kh.prototype={push:function(r){this.content.push(r),this.bubbleUp(this.content.length-1)},pop:function(){var r=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),r},remove:function(r){for(var e=this.content.length,t=0;t<e;t++)if(this.content[t]==r){var n=this.content.pop();if(t==e-1)break;this.content[t]=n,this.bubbleUp(t),this.sinkDown(t);break}},size:function(){return this.content.length},bubbleUp:function(r){for(var e=this.content[r],t=this.scoreFunction(e);r>0;){var n=Math.floor((r+1)/2)-1,i=this.content[n];if(t>=this.scoreFunction(i))break;this.content[n]=e,this.content[r]=i,r=n}},sinkDown:function(r){for(var e=this.content.length,t=this.content[r],n=this.scoreFunction(t);;){var i=(r+1)*2,s=i-1,o=null;if(s<e){var a=this.content[s],l=this.scoreFunction(a);l<n&&(o=s)}if(i<e){var c=this.content[i],h=this.scoreFunction(c);h<(o==null?n:l)&&(o=i)}if(o==null)break;this.content[r]=this.content[o],this.content[o]=t,r=o}}};class my extends _s{constructor(e,t=new D(16776960)){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array([e.min.x,e.min.y,e.min.z,e.max.x,e.min.y,e.min.z,e.max.x,e.min.y,e.max.z,e.min.x,e.min.y,e.max.z,e.min.x,e.max.y,e.min.z,e.max.x,e.max.y,e.min.z,e.max.x,e.max.y,e.max.z,e.min.x,e.max.y,e.max.z]),s=new ze;s.setIndex(new Ue(n,1)),s.setAttribute("position",new Ue(i,3));const o=new Bt({color:t});super(s,o)}}class gy{constructor(e){this.node=e,this.next=null,this.previous=null}}class vy{constructor(e=1e6){this.pointBudget=e,this.first=null,this.last=null,this.numPoints=0,this.items=new Map}get size(){return this.items.size}has(e){return this.items.has(e.id)}touch(e){if(!e.loaded)return;const t=this.items.get(e.id);t?this.touchExisting(t):this.addNew(e)}addNew(e){const t=new gy(e);t.previous=this.last,this.last=t,t.previous&&(t.previous.next=t),this.first||(this.first=t),this.items.set(e.id,t),this.numPoints+=e.numPoints}touchExisting(e){e.previous?e.next&&(e.previous.next=e.next,e.next.previous=e.previous,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e)):e.next&&(this.first=e.next,this.first.previous=null,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e))}remove(e){const t=this.items.get(e.id);!t||(this.items.size===1?(this.first=null,this.last=null):(t.previous||(this.first=t.next,this.first.previous=null),t.next||(this.last=t.previous,this.last.next=null),t.previous&&t.next&&(t.previous.next=t.next,t.next.previous=t.previous)),this.items.delete(e.id),this.numPoints-=e.numPoints)}getLRUItem(){return this.first?this.first.node:void 0}freeMemory(){if(!(this.items.size<=1))for(;this.numPoints>this.pointBudget*2;){const e=this.getLRUItem();e&&this.disposeSubtree(e)}}dispose(){let e=this.getLRUItem();for(;e!==void 0;)this.disposeSubtree(e),e=this.getLRUItem()}disposeSubtree(e){const t=[e];e.traverse(n=>{n.loaded&&t.push(n)});for(const n of t)n.dispose(),this.remove(n)}}class La{constructor(e,t,n,i){this.pointCloudIndex=e,this.weight=t,this.node=n,this.parent=i}}class Yi{constructor(){this._pointBudget=wv,this._rendererSize=new ee,this.maxNumNodesLoading=Mv,this.features=Xv,this.lru=new vy(this._pointBudget),this.updateVisibilityStructures=(()=>{const e=new ye,t=new ye,n=new ye;return(i,s)=>{const o=[],a=[],l=new kh(c=>1/c.weight);for(let c=0;c<i.length;c++){const h=i[c];if(!h.initialized())continue;h.numVisiblePoints=0,h.visibleNodes=[],h.visibleGeometry=[],s.updateMatrixWorld(!1);const d=s.matrixWorldInverse,u=h.matrixWorld;if(e.identity().multiply(s.projectionMatrix).multiply(d).multiply(u),o.push(new ds().setFromProjectionMatrix(e)),t.copy(u).invert(),n.identity().multiply(t).multiply(s.matrixWorld),a.push(new _().setFromMatrixPosition(n)),h.visible&&h.root!==null){const f=Number.MAX_VALUE;l.push(new La(c,f,h.root))}Ta(h.root)&&h.hideDescendants(h.root.sceneNode);for(const f of h.boundingBoxNodes)f.visible=!1}return{frustums:o,cameraPositions:a,priorityQueue:l}}})()}loadPointCloud(e,t,n=(s,o)=>fetch(s,o),i){return ly(e,t,n,i).then(s=>new Sa(this,s))}updatePointClouds(e,t,n){const i=this.updateVisibility(e,t,n);for(let s=0;s<e.length;s++){const o=e[s];o.disposed||(o.material.updateMaterial(o,o.visibleNodes,t,n),o.updateVisibleBounds(),o.updateBoundingBoxes())}return this.lru.freeMemory(),i}static pick(e,t,n,i,s={}){return Yi.picker=Yi.picker||new As,Yi.picker.pick(t,n,i,e,s)}dispose(){this.lru.dispose()}get pointBudget(){return this._pointBudget}set pointBudget(e){e!==this._pointBudget&&(this._pointBudget=e,this.lru.pointBudget=e,this.lru.freeMemory())}updateVisibility(e,t,n){let i=0;const s=[],o=[],{frustums:a,cameraPositions:l,priorityQueue:c}=this.updateVisibilityStructures(e,t);let h=0,d=!1,u=!1,f;for(;(f=c.pop())!==void 0;){let y=f.node;if(i+y.numPoints>this.pointBudget)break;const m=f.pointCloudIndex,p=e[m],S=p.maxLevel!==void 0?p.maxLevel:1/0;if(y.level>S||!a[m].intersectsBox(y.boundingBox)||this.shouldClip(p,y.boundingBox))continue;i+=y.numPoints,p.numVisiblePoints+=y.numPoints;const x=f.parent;if(py(y)&&(!x||Ta(x)))if(y.loaded&&h<wh)y=p.toTreeNode(y,x),h++;else if(!y.failed)y.loaded&&h>=wh&&(d=!0),o.push(y),p.visibleGeometry.push(y);else{u=!0;continue}Ta(y)&&(this.updateTreeNodeVisibility(p,y,s),p.visibleGeometry.push(y.geometryNode));const w=.5*n.getSize(this._rendererSize).height*n.getPixelRatio();this.updateChildVisibility(f,c,p,y,l[m],t,w)}const v=Math.min(this.maxNumNodesLoading,o.length),g=[];for(let y=0;y<v;y++)g.push(o[y].load());return{visibleNodes:s,numVisiblePoints:i,exceededMaxLoadsToGPU:d,nodeLoadFailed:u,nodeLoadPromises:g}}updateTreeNodeVisibility(e,t,n){this.lru.touch(t.geometryNode);const i=t.sceneNode;i.visible=!0,i.material=e.material,i.updateMatrix(),i.matrixWorld.multiplyMatrices(e.matrixWorld,i.matrix),n.push(t),e.visibleNodes.push(t),this.updateBoundingBoxVisibility(e,t)}updateChildVisibility(e,t,n,i,s,o,a){const l=i.children;for(let c=0;c<l.length;c++){const h=l[c];if(h===null)continue;const d=h.boundingSphere,u=d.center.distanceTo(s),f=d.radius;let v=0;if(o.type===Mh){const p=o.fov*Math.PI/180,S=Math.tan(p/2);v=a/(S*u)}else{const m=o;v=2*a/(m.top-m.bottom)}const g=f*v;if(g<n.minNodePixelSize)continue;const y=u<f?Number.MAX_VALUE:g+1/u;t.push(new La(e.pointCloudIndex,y,h,i))}}updateBoundingBoxVisibility(e,t){if(e.showBoundingBox&&!t.boundingBoxNode){const n=new my(t.boundingBox);n.matrixAutoUpdate=!1,e.boundingBoxNodes.push(n),t.boundingBoxNode=n,t.boundingBoxNode.matrix.copy(e.matrixWorld)}else e.showBoundingBox&&t.boundingBoxNode?(t.boundingBoxNode.visible=!0,t.boundingBoxNode.matrix.copy(e.matrixWorld)):!e.showBoundingBox&&t.boundingBoxNode&&(t.boundingBoxNode.visible=!1)}shouldClip(e,t){const n=e.material;if(n.numClipBoxes===0||n.clipMode!==bn.CLIP_OUTSIDE)return!1;const i=t.clone();e.updateMatrixWorld(!0),i.applyMatrix4(e.matrixWorld);const s=n.clipBoxes;for(let o=0;o<s.length;o++){const a=s[o].matrix,l=new ot(new _(-.5,-.5,-.5),new _(.5,.5,.5)).applyMatrix4(a);if(i.intersectsBox(l))return!1}return!0}}var yy=Object.freeze({__proto__:null,BlurMaterial:vv,ClipMode:bn,PointSizeType:qt,PointShape:wn,TreeType:ji,PointOpacityType:Ls,PointColorType:pt,PointCloudMaterial:we,generateDataTexture:Th,generateGradientTexture:xa,generateClassificationTexture:ba,GRAYSCALE:Lv,INFERNO:Av,PLASMA:Cv,RAINBOW:Pv,SPECTRAL:Eh,VIRIDIS:Rv,YELLOW_GREEN:Dv,PointAttributeName:Ah,POINT_ATTRIBUTE_TYPES:Jt,POINT_ATTRIBUTES:Ph,PointAttributes:wa,PointCloudOctreeGeometryNode:Or,PointCloudOctreeGeometry:Ih,PointCloudOctreeNode:Nh,PointCloudOctree:Sa,PointCloudTree:Oh,QueueItem:La,Potree:Yi,Version:Zi});let kt=typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:typeof Xe<"u"?Xe:{},_y=kt.requestAnimationFrame||(r=>kt.setTimeout(r,50/3)),Hh=kt.cancelAnimationFrame||(r=>kt.clearTimeout(r));const Gn=function(){if(typeof process<"u"&&process.hrtime!==void 0&&(!process.versions||process.versions.electron===void 0))return function(){const r=process.hrtime();return r[0]*1e3+r[1]/1e6};if(kt.performance!==void 0&&kt.performance.now!==void 0)return kt.performance.now.bind(kt.performance);{const r=kt.performance&&kt.performance.timing&&kt.performance.timing.navigationStart?kt.performance.timing.navigationStart:Date.now();return function(){return Date.now()-r}}}();const Qt=[];let qi=!1,Aa=!1,Gh=[];const Wh=_y;let Br=0,xy=120,Ur,Xh=!0;const by=()=>{for(let r=0;r<Gh.length;r++)Gh[r]()},Vr=r=>{let e=Qt.indexOf(r);e>-1&&Qt.splice(e,1),Qt.push(r),Br=0,Aa&&!qi&&(Ur=Wh(Ca),qi=!0)},wy=r=>{Aa=r},Ji=r=>{const e=Qt.indexOf(r);e!==-1&&Qt.splice(e,1),Qt.length===0&&(Hh(Ur),qi=!1)},Ca=(r=Gn(),e)=>{if(Br>=xy&&Xh)return qi=!1,Br=0,Hh(Ur),!1;Aa&&qi?Ur=Wh(Ca):by(),Qt.length||Br++;let t=0,n=Qt.length;for(;t<n;)Qt[t++].update(r,e),n>Qt.length&&t--,n=Qt.length;return!0},My=()=>qi,Sy=()=>Xh,Mn={},Cs={Linear:{None(r){return r}},Quadratic:{In(r){return Math.pow(r,2)},Out(r){return r*(2-r)},InOut(r){return(r*=2)<1?.5*Math.pow(r,2):-.5*(--r*(r-2)-1)}},Cubic:{In(r){return Math.pow(r,3)},Out(r){return--r*r*r+1},InOut(r){return(r*=2)<1?.5*Math.pow(r,3):.5*((r-=2)*r*r+2)}},Quartic:{In(r){return Math.pow(r,4)},Out(r){return 1- --r*r*r*r},InOut(r){return(r*=2)<1?.5*Math.pow(r,4):-.5*((r-=2)*r*r*r-2)}},Quintic:{In(r){return Math.pow(r,5)},Out(r){return--r*r*r*r*r+1},InOut(r){return(r*=2)<1?.5*Math.pow(r,5):.5*((r-=2)*r*r*r*r+2)}},Sinusoidal:{In(r){return 1-Math.cos(r*Math.PI/2)},Out(r){return Math.sin(r*Math.PI/2)},InOut(r){return .5*(1-Math.cos(Math.PI*r))}},Exponential:{In(r){return r===0?0:Math.pow(1024,r-1)},Out(r){return r===1?1:1-Math.pow(2,-10*r)},InOut(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}},Circular:{In(r){return 1-Math.sqrt(1-r*r)},Out(r){return Math.sqrt(1- --r*r)},InOut(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}},Elastic:{In(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}},Back:{In(r){return r*r*((1.70158+1)*r-1.70158)},Out(r){return--r*r*((1.70158+1)*r+1.70158)+1},InOut(r){const e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}},Bounce:{In(r){return 1-Cs.Bounce.Out(1-r)},Out(r){let e=2.75,t=7.5625;return r<1/e?t*r*r:r<2/e?t*(r-=1.5/e)*r+.75:r<2.5/e?t*(r-=2.25/e)*r+.9375:t*(r-=2.625/e)*r+.984375},InOut(r){return r<.5?Cs.Bounce.In(r*2)*.5:Cs.Bounce.Out(r*2-1)*.5+.5}},Stepped:{steps:r=>e=>(e*r|0)/r}},Ey=50/3,Ty=250,jh="_chainedTweens",kr="Callback",Ly="update",Ay="complete",Cy="start",Py="repeat",Ry="reverse",Dy="pause",Iy="play",Ny="restart",Fy="stop",Oy="seek",si="STRING_PROP",zy=/\s+|([A-Za-z?().,{}:""[\]#%]+)|([-+]=+)?([-+]+)?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]=?\d+)?/g;function Zh(r){if(r&&r.nodeType||r===void 0||typeof r!="object")return r;if(Array.isArray(r))return[].concat(r);if(typeof r=="object"){let e={};for(let t in r)e[t]=Zh(r[t]);return e}return r}const By=r=>isNaN(+r)||(r[0]==="+"||r[0]==="-")&&r[1]==="="||r===""||r===" ",Uy=/^#([0-9a-f]{6}|[0-9a-f]{3})$/gi,Vy=(r,e)=>{let t,n,i;e.length===3&&(t=e[0],n=e[1],i=e[2],e=t+t+n+n+i+i);let s=parseInt(e,16);return t=s>>16&255,n=s>>8&255,i=s&255,"rgb("+t+", "+n+", "+i+")"};function Ps(r){if(r&&r.splice&&r.isString||typeof r!="string"||r.charAt(1)==="=")return r;const e=r.replace(Uy,Vy).match(zy).map(t=>By(t)?t:+t);return e.isString=!0,e}function Rs(r,e,t,n){const i=t[r],s=n[r];if(i===s)return!0;if(Array.isArray(i)&&Array.isArray(s)&&i.length===s.length)for(let o=0,a=s.length;o<a;o++){const l=i[o],c=s[o];l===c||typeof l=="number"&&typeof c=="number"||Rs(o,e[r],i,s)}if(!(typeof i=="number"&&typeof s=="number")){if(!(i&&i.splice&&i.isString&&s&&s.splice&&s.isString)){if(typeof i=="string"&&Array.isArray(s)){const o=Ps(i),a=s.map(Ps);return t[r]=o,n[r]=a,!0}else if(typeof i=="string"||typeof s=="string"){let o=Array.isArray(i)&&i[0]===si?i:Ps(i),a=Array.isArray(s)&&s[0]===si?s:Ps(s);if(o===void 0)return;let l=1;for(;l<o.length;)o[l]===a[l]&&typeof o[l-1]=="string"?(o.splice(l-1,2,o[l-1]+o[l]),a.splice(l-1,2,a[l-1]+a[l])):l++;return l=0,o[0]===si&&o.shift(),a[0]===si&&a.shift(),t[r]=o,n[r]=a,!0}else if(typeof i=="object"&&typeof s=="object"){if(Array.isArray(i)&&!i.isString)return i.map((o,a)=>Rs(a,e[r],i,s));for(let o in s)Rs(o,e[r],i,s);return!0}}}return!1}const ky="rgb(",Pa="rgba(",Qi=(r,e,t=ky)=>typeof r[e]=="number"&&(r[e-1]===t||r[e-3]===t||r[e-5]===t);function Ra(r,e,t,n,i,s,o){const a=o?t:t[r];let l=o?n:n[r];if(l===void 0)return a;if(a===void 0||typeof a=="string"||a===l)return l;if(typeof a=="object"&&typeof l=="object"){if(!a||!l)return e[r];if(typeof a=="object"&&!!a&&a.isString&&l&&l.splice&&l.isString){let c="";for(let h=0,d=a.length;h<d;h++)if(a[h]!==l[h]||typeof a[h]!="number"||typeof l[h]=="number"){const u=typeof a[h]=="number"&&typeof l[h]=="string"&&l[h][1]==="=";let f=typeof a[h]!="number"?a[h]:u?a[h]+parseFloat(l[h][0]+l[h].substr(2))*i:a[h]+(l[h]-a[h])*i;(Qi(a,h)||Qi(a,h,Pa))&&(f|=0),c+=f,u&&s===1&&(a[h]=a[h]+parseFloat(l[h][0]+l[h].substr(2)))}else c+=a[h];return o||(e[r]=c),c}else if(Array.isArray(a)&&a[0]!==si)for(let c=0,h=a.length;c<h;c++)a[c]===l[c]||typeof e[r]=="string"||Ra(c,e[r],a,l,i,s);else if(typeof a=="object"&&!!a&&!a.isString)for(let c in a)a[c]!==l[c]&&Ra(c,e[r],a,l,i,s)}else if(typeof a=="number"){const c=typeof l=="string";e[r]=c?a+parseFloat(l[0]+l.substr(2))*i:a+(l-a)*i,c&&s===1&&(t[r]=e[r])}else typeof l=="function"&&(e[r]=l(i));return e[r]}const Hy=/([.[])/g,Gy=/\]/g,Da=function(r,e){const t=r[e],n=e.replace(Gy,"").split(Hy),i=n.length-1;let s=Array.isArray(r),o=typeof r=="object"&&!s;return o?(r[e]=null,delete r[e]):s&&r.splice(e,1),n.reduce((a,l,c)=>{s&&l!=="."&&l!=="["&&(l*=1);let d=n[c+1]==="[";if(l==="."||l==="[")return l==="."?(o=!0,s=!1):l==="["&&(o=!1,s=!0),a;if(a[l]===void 0){if(s||o)return a[l]=c===i?t:s||d?[]:o?{}:null,o=s=!1,a[l]}else if(a[l]!==void 0)return c===i&&(a[l]=t),a[l];return a},r)},Yh=function(r){if(typeof r=="object"&&!!r){for(let e in r)if(e.indexOf(".")!==-1||e.indexOf("[")!==-1)Da(r,e);else if(typeof r[e]=="object"&&!!r[e]){let t=r[e];for(let n in t)if(n.indexOf(".")!==-1||n.indexOf("[")!==-1)Da(t,n);else if(typeof t[n]=="object"&&!!t[n]){let i=t[n];for(let s in i)(s.indexOf(".")!==-1||s.indexOf("[")!==-1)&&Da(i,s)}}}return r},Nt={Linear(r,e,t){const n=r.length-1,i=n*e,s=Math.floor(i),o=Nt.Utils.Linear;return e<0?o(r[0],r[1],i,t):e>1?o(r[n],r[n-1],n-i,t):o(r[s],r[s+1>n?n:s+1],i-s,t)},Bezier(r,e,t){let n=Nt.Utils.Reset(t),i=r.length-1,s=Math.pow,o=Nt.Utils.Bernstein,a=Array.isArray(n);for(let l=0;l<=i;l++)if(typeof n=="number")n+=s(1-e,i-l)*s(e,l)*r[l]*o(i,l);else if(a)for(let c=0,h=n.length;c<h;c++)typeof n[c]=="number"?n[c]+=s(1-e,i-l)*s(e,l)*r[l][c]*o(i,l):n[c]=r[l][c];else if(typeof n=="object")for(let c in n)typeof n[c]=="number"?n[c]+=s(1-e,i-l)*s(e,l)*r[l][c]*o(i,l):n[c]=r[l][c];else if(typeof n=="string"){let c="",h=Math.round(i*e),d=r[h];for(let u=1,f=d.length;u<f;u++)c+=d[u];return c}return n},CatmullRom(r,e,t){const n=r.length-1;let i=n*e,s=Math.floor(i);const o=Nt.Utils.CatmullRom;return r[0]===r[n]?(e<0&&(s=Math.floor(i=n*(1+e))),o(r[(s-1+n)%n],r[s],r[(s+1)%n],r[(s+2)%n],i-s,t)):e<0?o(r[1],r[1],r[0],r[0],-e,t):e>1?o(r[n-1],r[n-1],r[n],r[n],(e|0)-e,t):o(r[s?s-1:0],r[s],r[n<s+1?n:s+1],r[n<s+2?n:s+2],i-s,t)},Utils:{Linear(r,e,t,n){if(r===e||typeof r=="string"){if(e.length&&e.splice&&e.isString){e="";for(let i=0,s=r.length;i<s;i++)e+=r[i]}return e}else{if(typeof r=="number")return typeof r=="function"?r(t):r+(e-r)*t;if(typeof r=="object"){if(r.length!==void 0){const i=typeof r[0]=="string"||r.isString;if(i||r[0]===si){let s="";for(let o=i?0:1,a=r.length;o<a;o++){let l=t===0?r[o]:t===1?e[o]:typeof r[o]=="number"?r[o]+(e[o]-r[o])*t:e[o];(t>0&&t<1&&Qi(r,o)||Qi(r,o,Pa))&&(l|=0),s+=l}return s}else if(n&&n.length&&n.splice)for(let s=0,o=n.length;s<o;s++)n[s]=Nt.Utils.Linear(r[s],e[s],t,n[s])}else for(const i in n)n[i]=Nt.Utils.Linear(r[i],e[i],t,n[i]);return n}}},Reset(r){if(Array.isArray(r)){for(let e=0,t=r.length;e<t;e++)r[e]=Nt.Utils.Reset(r[e]);return r}else if(typeof r=="object"){for(let e in r)r[e]=Nt.Utils.Reset(r[e]);return r}else if(typeof r=="number")return 0;return r},Bernstein(r,e){const t=Nt.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){const r=[1];return e=>{let t=1;if(r[e])return r[e];for(let n=e;n>1;n--)t*=n;return r[e]=t,t}}(),CatmullRom(r,e,t,n,i,s){if(typeof r=="string")return e;if(typeof r=="number"){const o=(t-r)*.5,a=(n-e)*.5,l=i*i,c=i*l;return(2*e-2*t+o+a)*c+(-3*e+3*t-2*o-a)*l+o*i+e}else if(typeof r=="object"){if(r.length!==void 0){if(r[0]===si){let o="";for(let a=1,l=r.length;a<l;a++){let c=typeof r[a]=="number"?Nt.Utils.CatmullRom(r[a],e[a],t[a],n[a],i):n[a];(Qi(r,a)||Qi(r,a,Pa))&&(c|=0),o+=c}return o}for(let o=0,a=s.length;o<a;o++)s[o]=Nt.Utils.CatmullRom(r[o],e[o],t[o],n[o],i,s[o])}else for(const o in s)s[o]=Nt.Utils.CatmullRom(r[o],e[o],t[o],n[o],i,s[o]);return s}}}},Ds={};function qh(r,e,t){if(!r||!r.nodeType)return e;const n=r.queueID||"q_"+Date.now();r.queueID||(r.queueID=n);const i=Ds[n];if(i){if(i.object===e&&r===i.tween.node&&t._startTime===i.tween._startTime)Ji(i.tween);else if(typeof e=="object"&&!!e&&!!i.object){for(let s in e)s in i.object&&(t._startTime===i.tween._startTime?delete i.object[s]:i.propNormaliseRequired=!0);Object.assign(i.object,e)}return i.object}return typeof e=="object"&&!!e?(Ds[n]={tween:t,object:e,propNormaliseRequired:!1},Ds[n].object):e}function Wy(r,e,t){return e?r?typeof window<"u"&&r===window||typeof document<"u"&&r===document?[r]:typeof r=="string"?!!document.querySelectorAll&&document.querySelectorAll(r):Array.isArray(r)?r:r.nodeType?[r]:t?r:[]:null:r?typeof window<"u"&&r===window||typeof document<"u"&&r===document?r:typeof r=="string"?!!document.querySelector&&document.querySelector(r):Array.isArray(r)?r[0]:r.nodeType||t?r:null:null}let Jh=0;const Ia=Cs.Linear.None;class Wn{static fromTo(e,t,n,i={}){i.quickRender=i.quickRender?i.quickRender:!n;const s=new Wn(e,t).to(n,i);return i.quickRender&&(s.render().update(s._startTime),s._rendered=!1,s._onStartCallbackFired=!1),s}static to(e,t,n){return Wn.fromTo(e,null,t,n)}static from(e,t,n){return Wn.fromTo(e,t,null,n)}constructor(e,t){return this.id=Jh++,!!e&&typeof e=="object"&&!t&&!e.nodeType?(t=this.object=e,e=null):!!e&&(e.nodeType||e.length||typeof e=="string")&&(e=this.node=Wy(e),t=this.object=qh(e,t,this)),this._valuesEnd=null,this._valuesStart=Array.isArray(t)?[]:{},this._duration=1e3,this._easingFunction=Ia,this._easingReverse=Ia,this._interpolationFunction=Nt.Linear,this._startTime=0,this._initTime=0,this._delayTime=0,this._repeat=0,this._r=0,this._isPlaying=!1,this._yoyo=!1,this._reversed=!1,this._onStartCallbackFired=!1,this._pausedTime=null,this._isFinite=!0,this._maxListener=15,this._chainedTweensCount=0,this._prevTime=null,this}setMaxListener(e=15){return this._maxListener=e,this}on(e,t){const{_maxListener:n}=this,i=e+kr;for(let s=0;s<n;s++){const o=i+s;if(!this[o]){this[o]=t;break}}return this}once(e,t){const{_maxListener:n}=this,i=e+kr;for(let s=0;s<n;s++){const o=i+s;if(!this[o]){this[o]=(...a)=>{t.apply(this,a),this[o]=null};break}}return this}off(e,t){const{_maxListener:n}=this,i=e+kr;for(let s=0;s<n;s++){const o=i+s;this[o]===t&&(this[o]=null)}return this}emit(e,t,n,i){const{_maxListener:s}=this,o=e+kr;if(!this[o+0])return this;for(let a=0;a<s;a++){const l=o+a;this[l]&&this[l](t,n,i)}return this}isPlaying(){return this._isPlaying}isStarted(){return this._onStartCallbackFired}reverse(e){const{_reversed:t}=this;return this._reversed=e!==void 0?e:!t,this}reversed(){return this._reversed}pause(){return this._isPlaying?(this._isPlaying=!1,Ji(this),this._pausedTime=Gn(),this.emit(Dy,this.object)):this}play(){return this._isPlaying?this:(this._isPlaying=!0,this._startTime+=Gn()-this._pausedTime,this._initTime=this._startTime,Vr(this),this._pausedTime=Gn(),this.emit(Iy,this.object))}restart(e){return this._repeat=this._r,this.reassignValues(),Vr(this),this.emit(Ny,this.object)}seek(e,t){const{_duration:n,_initTime:i,_startTime:s,_reversed:o}=this;let a=i+e;return this._isPlaying=!0,a<s&&s>=i&&(this._startTime-=n,this._reversed=!o),this.update(e,!1),this.emit(Oy,e,this.object),t?this:this.pause()}duration(e){return this._duration=typeof e=="function"?e(this._duration):e,this}to(e,t=1e3,n){if(this._valuesEnd=e,typeof t=="number"||typeof t=="function")this._duration=typeof t=="function"?t(this._duration):t;else if(typeof t=="object"){for(const i in t)if(typeof this[i]=="function"){const[s=null,o=null,a=null,l=null]=Array.isArray(t[i])?t[i]:[t[i]];this[i](s,o,a,l)}}return this}render(){if(this._rendered)return this;let{_valuesStart:e,_valuesEnd:t,object:n,node:i,InitialValues:s}=this;if(Yh(n),Yh(t),i&&i.queueID&&Ds[i.queueID]){const o=Ds[i.queueID];if(o.propNormaliseRequired&&o.tween!==this){for(const a in t)o.tween._valuesEnd[a]!==void 0;o.normalisedProp=!0,o.propNormaliseRequired=!1}}if(i&&s&&(!n||Object.keys(n).length===0?n=this.object=qh(i,s(i,t),this):(!t||Object.keys(t).length===0)&&(t=this._valuesEnd=s(i,n))),!e.processed){for(const o in t){let a=n&&n[o]&&Zh(n[o]),l=t[o];if(!(Mn[o]&&Mn[o].init&&(Mn[o].init.call(this,a,l,o,n),a===void 0&&e[o]&&(a=e[o]),Mn[o].skipProcess))&&!(typeof a=="number"&&isNaN(a)||a===null||l===null||a===!1||l===!1||a===void 0||l===void 0||a===l)){if(e[o]=a,Array.isArray(l))if(Array.isArray(a))l.isString&&n[o].isString&&!a.isString?a.isString=!0:Rs(o,n,e,t);else{l.unshift(a);for(let c=0,h=l.length;c<h;c++)typeof l[c]=="string"&&(l[c]=Ps(l[c]))}else Rs(o,n,e,t);!(typeof a=="number"&&typeof l=="string"&&l[1]==="=")}}e.processed=!0}return this._rendered=!0,this}start(e){return this._startTime=e!==void 0?typeof e=="string"?Gn()+parseFloat(e):e:Gn(),this._startTime+=this._delayTime,this._initTime=this._prevTime=this._startTime,this._onStartCallbackFired=!1,this._rendered=!1,this._isPlaying=!0,Vr(this),this}stop(){let{_isPlaying:e,_isFinite:t,object:n,_startTime:i,_duration:s,_r:o,_yoyo:a,_reversed:l}=this;if(!e)return this;let c=t?(o+1)%2===1:!l;return this._reversed=!1,a&&c?this.update(i):this.update(i+s),Ji(this),this.emit(Fy,n)}delay(e){return this._delayTime=typeof e=="function"?e(this._delayTime):e,this}chainedTweens(){if(this._chainedTweensCount=arguments.length,!this._chainedTweensCount)return this;for(let e=0,t=this._chainedTweensCount;e<t;e++)this[jh+e]=arguments[e];return this}repeat(e){return this._repeat=this._duration?typeof e=="function"?e(this._repeat):e:0,this._r=this._repeat,this._isFinite=isFinite(e),this}reverseDelay(e){return this._reverseDelayTime=typeof e=="function"?e(this._reverseDelayTime):e,this}yoyo(e,t){return this._yoyo=typeof e=="function"?e(this._yoyo):e===null?this._yoyo:e,e||(this._reversed=!1),this._easingReverse=t||null,this}easing(e){return this._easingFunction=e,this}interpolation(e){return typeof e=="function"&&(this._interpolationFunction=e),this}reassignValues(e){const{_valuesStart:t,object:n,_delayTime:i}=this;this._isPlaying=!0,this._startTime=e!==void 0?e:Gn(),this._startTime+=i,this._reversed=!1,Vr(this);for(const s in t){const o=t[s];n[s]=o}return this}update(e,t,n){let{_onStartCallbackFired:i,_easingFunction:s,_interpolationFunction:o,_easingReverse:a,_repeat:l,_delayTime:c,_reverseDelayTime:h,_yoyo:d,_reversed:u,_startTime:f,_prevTime:v,_duration:g,_valuesStart:y,_valuesEnd:m,object:p,_isFinite:S,_isPlaying:x,__render:w,_chainedTweensCount:C}=this,A,B,X,V=0;if(!g)A=1,l=0;else{e=e!==void 0?e:Gn();let b=e-v;if(this._prevTime=e,b>Ty&&My()&&Sy()&&(e-=b-Ey),!x||e<f&&!n)return!0;A=(e-f)/g,A=A>1?1:A,A=u?1-A:A}if(i||(this._rendered||(this.render(),this._rendered=!0),this.emit(Cy,p),this._onStartCallbackFired=!0),B=u&&a||s,!p)return!0;for(X in m){const b=y[X];if(b==null&&!(Mn[X]&&Mn[X].update))continue;const L=m[X],R=B[X]?B[X](A):typeof B=="function"?B(A):Ia(A),O=o[X]?o[X]:typeof o=="function"?o:Nt.Linear;typeof L=="number"?p[X]=b+(L-b)*R:Array.isArray(L)&&!L.isString&&!Array.isArray(b)?p[X]=O(L,R,p[X]):L&&L.update?L.update(R):typeof L=="function"?p[X]=L(R):typeof L=="string"&&typeof b=="number"?p[X]=b+parseFloat(L[0]+L.substr(2))*R:Ra(X,p,y,m,R,A),Mn[X]&&Mn[X].update&&Mn[X].update.call(this,p[X],b,L,R,A,X),V++}if(!V)return Ji(this),!1;if(w&&Wn.Renderer&&Wn.Renderer.update&&Wn.Renderer.update.call(this,p,A),this.emit(Ly,p,A,e),A===1||u&&A===0)if(l>0&&g>0){if(S&&this._repeat--,d)this._reversed=!u;else for(X in m){let b=m[X];typeof b=="string"&&typeof y[X]=="number"&&(y[X]+=parseFloat(b[0]+b.substr(2)))}return this.emit(d&&!u?Ry:Py,p),u&&h?this._startTime=e-h:this._startTime=e+c,!0}else{if(t||(this._isPlaying=!1,Ji(this),Jh--),this.emit(Ay,p),this._repeat=this._r,C)for(let b=0;b<C;b++)this[jh+b].start(e+g);return!1}return!0}}var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qh={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Xy,function(){var t=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-a,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,u)){var v=performance.memory;u.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,f=2*c,v=3*c,g=15*c,y=74*c,m=30*c,p=document.createElement("canvas");p.width=h,p.height=d,p.style.cssText="width:80px;height:48px";var S=p.getContext("2d");return S.font="bold "+9*c+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=s,S.fillRect(0,0,h,d),S.fillStyle=i,S.fillText(n,u,f),S.fillRect(v,g,y,m),S.fillStyle=s,S.globalAlpha=.9,S.fillRect(v,g,y,m),{dom:p,update:function(x,w){o=Math.min(o,x),a=Math.max(a,x),S.fillStyle=s,S.globalAlpha=1,S.fillRect(0,0,h,g),S.fillStyle=i,S.fillText(l(x)+" "+n+" ("+l(o)+"-"+l(a)+")",u,f),S.drawImage(p,v+c,g,y-c,m,v,g,y-c,m),S.fillRect(v+y-c,g,c,m),S.fillStyle=s,S.globalAlpha=.9,S.fillRect(v+y-c,g,c,l((1-x/w)*m))}}},t})})(Qh);var jy=Qh.exports;const Zy="62.0.0";class Kt{constructor(){this._debug=!1}dispatch(e,t,n){const i={};t!==void 0&&(i.detail=t),this._debug&&console.log(e,t);const s=new CustomEvent(e,i);(n||window).dispatchEvent(s)}}const Yy=(r,e,t)=>{const n=[];let i=-1,s=0,o=r.length/e-1,a=0,l=0,c=0;const h=function(g,y){for(g*=e,y*=e,c=0;c<e;c++)a=r[g+c],r[g+c]=r[y+c],r[y+c]=a};let d,u;const f=new Float64Array(e),v=new Float64Array(e);for(;;)if(o-s<=25){for(u=s+1;u<=o;u++){for(l=0;l<e;l++)f[l]=r[u*e+l];for(d=u-1;d>=s&&r[d*e+t]>f[t];){for(l=0;l<e;l++)r[(d+1)*e+l]=r[d*e+l];d--}for(l=0;l<e;l++)r[(d+1)*e+l]=f[l]}if(i===-1)break;o=n[i--],s=n[i--]}else{const g=s+o>>1;for(d=s+1,u=o,h(g,d),r[s*e+t]>r[o*e+t]&&h(s,o),r[d*e+t]>r[o*e+t]&&h(d,o),r[s*e+t]>r[d*e+t]&&h(s,d),l=0;l<e;l++)v[l]=r[d*e+l];for(;;){do d++;while(r[d*e+t]<v[t]);do u--;while(r[u*e+t]>v[t]);if(u<d)break;h(d,u)}for(l=0;l<e;l++)r[(s+1)*e+l]=r[u*e+l],r[u*e+l]=v[l];o-d+1>=u-s?(n[++i]=d,n[++i]=o,o=u-1):(n[++i]=s,n[++i]=u-1,s=d)}return r};class qy{constructor(e,t,n){this.metric=t,this.maxDepth=0,this.eleSize=n;const i=function(o,a){return o.subarray(a*n,a*n+n)},s=(o,a,l,c)=>{const h=a%n;let d,u;const f=o.length/n;return a>this.maxDepth&&(this.maxDepth=a),f===0?null:f===1?new Kh(i(o,0),a,l,c):(Yy(o,n,h),d=Math.floor(f/2),u=new Kh(i(o,d),a,l,d+c),u.left=s(o.subarray(0,d*n),a+1,u,c),u.right=s(o.subarray((d+1)*n,o.length),a+1,u,c+d+1),u)};this.root=s(e,0,null,0)}getMaxDepth(){return this.maxDepth}nearest(e,t,n){let i;const s=new Jy(function(a){return-a[1]}),o=a=>{let l;const c=a.depth%this.eleSize,h=this.metric(e,a.obj);let d=0,u,f;const v=[];function g(y,m){s.push([y,m]),s.size()>t&&s.pop()}for(f=0;f<this.eleSize;f+=1)f===a.depth%this.eleSize?v[f]=e[f]:v[f]=a.obj[f];if(d=this.metric(v,a.obj),a.right===null&&a.left===null){(s.size()<t||h<s.peek()[1])&&g(a,h);return}a.right===null?l=a.left:a.left===null?l=a.right:e[c]<a.obj[c]?l=a.left:l=a.right,o(l),(s.size()<t||h<s.peek()[1])&&g(a,h),(s.size()<t||Math.abs(d)<s.peek()[1])&&(l===a.left?u=a.right:u=a.left,u!==null&&o(u))};if(n)for(let a=0;a<t;a+=1)s.push([null,n]);o(this.root),i=[];for(let a=0;a<t;a+=1)s.content[a][0]&&i.push([s.content[a][0],s.content[a][1]]);return i}}class Kh{constructor(e,t,n,i){this.obj=e,this.left=null,this.right=null,this.parent=n,this.depth=t,this.pos=i}}class Jy{constructor(e){this.content=[],this.scoreFunction=e}push(e){this.content.push(e),this.bubbleUp(this.content.length-1)}pop(){const e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.sinkDown(0)),e}peek(){return this.content[0]}remove(e){const t=this.content.length;for(let n=0;n<t;n++)if(this.content[n]===e){const i=this.content.pop();n!==t-1&&(this.content[n]=i,this.scoreFunction(i)<this.scoreFunction(e)?this.bubbleUp(n):this.sinkDown(n));return}throw new Error("Node not found.")}size(){return this.content.length}bubbleUp(e){const t=this.content[e];for(;e>0;){const n=Math.floor((e+1)/2)-1,i=this.content[n];if(this.scoreFunction(t)<this.scoreFunction(i))this.content[n]=t,this.content[e]=i,e=n;else break}}sinkDown(e){const t=this.content.length,n=this.content[e],i=this.scoreFunction(n);for(;;){const s=(e+1)*2,o=s-1;let a=null,l;if(o<t){const c=this.content[o];l=this.scoreFunction(c),l<i&&(a=o)}if(s<t){const c=this.content[s];this.scoreFunction(c)<(a===null?i:l)&&(a=s)}if(a!==null)this.content[e]=this.content[a],this.content[a]=n,e=a;else break}}}class $h{constructor(e){this.depthScale=100,this.scene=e.scene,this.sceneLabels=e.sceneLabels,this.domEl=e.domEl,this.mouse=e.mouse,this.camera=e.camera,this.controls=e.controls,this.referenceFrame=e.referenceFrame,this.screenWidth=this.domEl.clientWidth,this.screenHeight=this.domEl.clientHeight,this.group=new Pt,this.scene.add(this.group),this.toolActive=!1,this.manager=new sh,this.loader=new oh(this.manager),this.loader.setCrossOrigin("*"),this.events=new Kt,this.color=16777215,this.hoverColor=15886354,this.activeColor=12320768,this.type="Photo",this.eps=1e-5,this.activeOpacity=1,this.peekMplier=.07,this.peekRadius=0,this.monoColor=0,this.activeMaterialNeedsUpdate=!1,this.nNearest=7,this.maxDistance=100,this.addPhotosBinds(),this.addPhotosListeners(),this.binds(),this.addListeners()}dispose(){this.nearestObjects=void 0,this.geometry&&(this.geometry.dispose(),this.geometry=void 0),this.activeTexture=void 0,this.activeDepthTexture=void 0,this.activeDepthData=void 0,this.activeObject&&(this.activeObject.geometry.dispose(),this.activeObject.material.map&&this.activeObject.material.map.dispose(),this.activeObject.material.dispose(),this.activeObject=void 0),this.targetObject&&(this.targetObject.geometry.dispose(),this.targetObject.material.map&&this.targetObject.material.map.dispose(),this.targetObject.material.dispose(),this.targetObject=void 0),this.scene.remove(this.group),this.removeListeners()}update(){if(this.activeMaterialNeedsUpdate&&this.activeObject){const e=this.activeObject.material;e.uniforms.screen.value=new ee(this.screenWidth,this.screenHeight),e.uniforms.radius.value=this.peekRadius,e.uniforms.opacity.value=this.activeOpacity,this.activeMaterialNeedsUpdate=!1}this.peekRadius>this.eps&&this.activeObject&&(this.activeObject.material.uniforms.mouse.value=this.mouse)}setAllPickable(e){for(let t=0;t<this.group.children.length;t++)this.group.children[t].userData.isPickable=e}getGeometry(){return this.geometry===void 0&&(this.geometry=new ii(1,32,16)),this.geometry}getRingGeometry(){return typeof this.ringGeometry>"u"&&(this.ringGeometry=new wr(1,24)),this.ringGeometry}getActiveMaterial(){const e={vertexShader:["#ifdef GL_ES","precision highp float;","#endif","varying vec2 vUv;","varying vec2 pixel;","uniform sampler2D depthmap;","uniform float depthScale;","const float eps = 1e-5;","void main(){","  vUv = uv;","  if (depthScale > eps) {","    vec4 depth = texture2D(depthmap, vUv);","    vec3 newPosition = position + normal * depth.x * depthScale;","    vec4 v = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);","    float x = v.x / v.z;","    float y = v.y / v.z;","    pixel = vec2(0.5 * x + 0.5, - 0.5 * y + 0.5);","    gl_Position = v;","  } else {","    vec4 v = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","    float x = v.x / v.z;","    float y = v.y / v.z;","    pixel = vec2(0.5 * x + 0.5, - 0.5 * y + 0.5);","    gl_Position = v;","  }","}"].join(`
`),fragmentShader:["#ifdef GL_ES","precision highp float;","#endif","uniform sampler2D texture1;","uniform sampler2D depthmap;","uniform vec2 mouse;","uniform vec2 screen;","uniform float radius;","uniform float opacity;","uniform float mono;","varying vec2 vUv;","varying vec2 pixel;","const float eps = 1e-5;","const float PI = 3.14159265359;","void main() {","  vec2 pos = vUv;","  vec2 px = pixel;","  vec4 color1 = texture2D(texture1, vUv);","  float opacityOut = opacity;","  if(radius >= eps) {","    vec2 mouse_n = vec2(mouse.x * 0.5 + 0.5, -mouse.y * 0.5 + 0.5);","    vec2 px_screen = vec2(px.x * screen.x, px.y * screen.y);","    vec2 mouse_screen = vec2(mouse_n.x * screen.x, mouse_n.y * screen.y);","    if(distance(mouse_screen, px_screen) < radius) {","      discard;","    }","  }","  vec4 colorOut = color1;","  colorOut.a = opacityOut;","  if(mono > eps){","    vec3 luma = vec3(.299, 0.587, 0.114);","    gl_FragColor = vec4(vec3(dot(colorOut.rgb, luma)), colorOut.a);","  }","  else {","     vec4 depth = texture2D(depthmap, vUv);","     vec3 blend = color1.rgb * 0.2 + depth.rgb * 0.8;","     gl_FragColor = vec4(blend, 1.0);","  }","}"].join(`
`)},t={texture1:{type:"t",value:""},depthmap:{type:"t",value:""},depthScale:{type:"f",value:0},mouse:{type:"v2",value:new ee(.5,.5)},screen:{type:"v2",value:new ee(this.screenWidth,this.screenHeight)},mono:{type:"f",value:0},radius:{type:"f",value:this.peekRadius},opacity:{type:"f",value:this.activeOpacity}};return new It({uniforms:t,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:it,transparent:!0,depthWrite:!1,depthTest:!1})}getMaterial(){return new Zt({color:this.color,visible:!0,wireframe:!1,transparent:!0,depthTest:!0,depthWrite:!0,opacity:.8,side:oi})}setPeekMode(e){this.peekRadius=this.screenWidth>this.screenHeight?this.peekMplier*this.screenWidth:this.peekMplier*this.screenHeight,e?this.activeObject.material.uniforms.radius.value=this.peekRadius:this.activeObject.material.uniforms.radius.value=0,this.events.dispatch("pointscene_photo_peekmode_mode_changed",{value:e},this.domEl)}handleResize(){if(this.activeObject===void 0)return;const e=this.domEl,t=this.activeObject.material;t.uniforms.screen.value=new ee(e.clientWidth,e.clientHeight),t.needsUpdate=!0}handleClearHoveredObjects(){this.hoveredObject!==void 0&&this.hoveredObject.dispatchEvent({type:"hover_out"})}handleSetPhotoPeekMode(e){this.setPeekMode(e.detail.value)}handleLeftClick(){this.hoveredObject!==void 0&&this.hoveredObject.dispatchEvent({type:"set_active"})}handleToolActivated(){this.toolActive=!0}handleToolDeactivated(){this.toolActive=!1}handleRightClick(){this.isActive&&!this.toolActive&&this.events.dispatch("pointscene_exit_sphere_mode",void 0,this.domEl)}handleEnterSphereMode(){this.events.dispatch("pointscene_toggle_sphere_controls",{camera:this.camera},this.domEl),this.setAllPickable(!1),this.isActive=!0}handleExitSphereMode(){this.events.dispatch("pointscene_toggle_sphere_controls",void 0,this.domEl),!!this.targetObject&&(this.targetObject.dispatchEvent({type:"set_deactive"}),this.setAllPickable(!0),this.isActive=!1,this.activeObject&&this.scene.remove(this.activeObject),this.nearestObjects=[],this.targetObject.material&&(this.targetObject.material.map&&this.targetObject.material.map.dispose(),this.targetObject.material.dispose()),this.targetObject=void 0,this.activeTexture=void 0,this.activeDepthTexture=void 0,this.activeDepthData=void 0)}addPhotosBinds(){this.handleResize=this.handleResize.bind(this),this.handleClearHoveredObjects=this.handleClearHoveredObjects.bind(this),this.handleSetPhotoPeekMode=this.handleSetPhotoPeekMode.bind(this),this.handleLeftClick=this.handleLeftClick.bind(this),this.handleToolActivated=this.handleToolActivated.bind(this),this.handleToolDeactivated=this.handleToolDeactivated.bind(this),this.handleRightClick=this.handleRightClick.bind(this),this.handleEnterSphereMode=this.handleEnterSphereMode.bind(this),this.handleExitSphereMode=this.handleExitSphereMode.bind(this)}addPhotosListeners(){window.addEventListener("resize",this.handleResize,!1),this.domEl.addEventListener("pointscene_clear_hovered_objects",this.handleClearHoveredObjects,!1),this.domEl.addEventListener("pointscene_set_photo_peekmode",this.handleSetPhotoPeekMode,!1),this.domEl.addEventListener("pointscene_on_leftclick",this.handleLeftClick,!1),this.domEl.addEventListener("pointscene_tool_activated",this.handleToolActivated,!1),this.domEl.addEventListener("pointscene_tool_deactivated",this.handleToolDeactivated,!1),this.domEl.addEventListener("pointscene_on_rightclick",this.handleRightClick,!1),this.domEl.addEventListener("pointscene_enter_sphere_mode",this.handleEnterSphereMode,!1),this.domEl.addEventListener("pointscene_exit_sphere_mode",this.handleExitSphereMode,!1)}removePhotosListeners(){window.removeEventListener("resize",this.handleResize,!1),this.domEl.removeEventListener("pointscene_clear_hovered_objects",this.handleClearHoveredObjects,!1),this.domEl.removeEventListener("pointscene_set_photo_peekmode",this.handleSetPhotoPeekMode,!1),this.domEl.removeEventListener("pointscene_on_leftclick",this.handleLeftClick,!1),this.domEl.removeEventListener("pointscene_tool_activated",this.handleToolActivated,!1),this.domEl.removeEventListener("pointscene_tool_deactivated",this.handleToolDeactivated,!1),this.domEl.removeEventListener("pointscene_on_rightclick",this.handleRightClick,!1),this.domEl.removeEventListener("pointscene_enter_sphere_mode",this.handleEnterSphereMode,!1),this.domEl.removeEventListener("pointscene_exit_sphere_mode",this.handleExitSphereMode,!1)}binds(){}addListeners(){}removeListeners(){}addObjectListeners(e){const t=this;e.addEventListener("hover_in",function(n){const i=n.target;!i.material.visible||!i.userData.isPickable||t.toolActive||(i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.hoverColor),t.hoveredObject=e,t.domEl.style.cursor="pointer")}),e.addEventListener("hover_out",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.color),t.hoveredObject=void 0,t.domEl.style.cursor="auto"}),e.addEventListener("set_active",function(n){const i=n.target;i.userData.activateCallback(i)}),e.addEventListener("set_deactive",function(n){const i=n.target;i.userData.deactivateCallback(i)})}load(e){console.warn("Photos.load: not implemented in base class.",e)}add(e,t){t=t||{};const n=t.geometry||this.getGeometry(),i=t.material||this.getMaterial(),s=this.referenceFrame.toScene(e.position),o=new ct(e.quaternion.x,e.quaternion.y,e.quaternion.z,e.quaternion.w),a=e.url,l=t.activateCallback||function(){console.error("Photos.activateCallback missing")},c=t.deactivateCallback||function(){console.error("Photos.deactivateCallback missing")},h=new $e(n,i);h.userData.idx=this.group.children.length,h.userData.isPickable=!0,this.addObjectListeners(h),h.up.set(0,0,1),h.position.set(s.x,s.y,s.z),h.rotation.setFromQuaternion(o),h.scale.set(1,1,1),a!==void 0&&(h.userData.fileUrl=a),typeof e.depthUrl<"u"&&(h.userData.depthUrl=e.depthUrl),h.userData.activateCallback=l,h.userData.deactivateCallback=c,h.userData.position=s,h.userData.quaternion=o,this.group.add(h)}getObjectAtIndex(e){return this.group.children[e]}index(){const e=function(s,o){return(s[0]-o[0])*(s[0]-o[0])+(s[1]-o[1])*(s[1]-o[1])},t=[],n=this.group.children.length;for(let s=0;s<n;s++){const o=this.group.children[s].position,a=[o.x,o.y,o.z,s];t.push(...a)}const i=new Float64Array(t);this.kdtree=new qy(i,e,4)}openNearest(e){const t=this.getNearest(e);if(!t||t.length===0)return;t.sort(function(i,s){return i.d-s.d});const n=this.getObjectAtIndex(t[0].idx);this.isActive?this.targetObject===n||n.dispatchEvent({type:"set_active"}):n.dispatchEvent({type:"set_active"})}getNearest(e,t){if(!this.kdtree)return;t=t||{};const n=t.nNearest||10;let i=t.maxDistance||100;i*=i;const s=this.kdtree.nearest([e.x,e.y,e.z],n,i),o=[];for(let a=0;a<s.length;a++){const l=s[a],c=l[0],h=Math.round(c.obj[3]),d=l[1];o.push({d,idx:h})}return o}}class Ki{projectedRadius(e,t,n,i){let s=1/Math.tan(t/2)/n;return s=s*i/2,e*s}lineSegmentIntersection2D(e,t,n,i){function o(c,h,d){return c-1e-7<=h&&h<=d+1e-7}function a(c,h,d,u,f,v,g,y){const m=((c*u-h*d)*(f-g)-(c-d)*(f*y-v*g))/((c-d)*(v-y)-(h-u)*(f-g)),p=((c*u-h*d)*(v-y)-(h-u)*(f*y-v*g))/((c-d)*(v-y)-(h-u)*(f-g));if(isNaN(m)||isNaN(p))return!1;if(c>=d){if(!o(d,m,c))return!1}else if(!o(c,m,d))return!1;if(h>=u){if(!o(u,p,h))return!1}else if(!o(h,p,u))return!1;if(f>=g){if(!o(g,m,f))return!1}else if(!o(f,m,g))return!1;if(v>=y){if(!o(y,p,v))return!1}else if(!o(v,p,y))return!1;return{x:m,y:p}}return a(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)!==!1}lineLineIntersection2D(e,t,n,i){const s=function(o,a,l){return(l.y-o.y)*(a.x-o.x)>(a.y-o.y)*(l.x-o.x)};return s(e,n,i)!==s(t,n,i)&&s(e,t,n)!==s(e,t,i)}pointInPolygon2D(e,t){let n,i,s=!1;for(n=0,i=e.length-1;n<e.length;i=n++)e[n].y>t.y!=e[i].y>t.y&&t.x<(e[i].x-e[n].x)*(t.y-e[n].y)/(e[i].y-e[n].y)+e[n].x&&(s=!s);return s}almostEquals(e,t,n,i){return i=i||!1,i&&e<0&&(e*=-1),n=n||Number.EPSILON,e>t-n&&e<=t+n}getMiddlePoint(e,t){return e.clone().lerp(t,.5)}getLineIntersectionXY(e,t,n,i){const s=Number.EPSILON,o=(e.x-t.x)*(n.y-i.y)-(e.y-t.y)*(n.x-i.x);if(o<s&&o>=-s)return;const a=e.x*t.y-e.y*t.x,l=n.x*i.y-n.y*i.x;let c=a*(n.x-i.x)-(e.x-t.x)*l;c/=o;let h=a*(n.y-i.y)-(e.y-t.y)*l;return h/=o,new _(c,h,0)}arrayToMatrix(e,t){t=t||3;const n=e.length/t,i=[];for(let s=0;s<n;s++){const o=s*t;i.push([e[o+0],e[o+1],e[o+2]])}return i}typedToArray(e,t){t=t||3;const n=e.length/t,i=[];for(const s=0;s<n;s+t)i.push(e[s+0]),i.push(e[s+1]),i.push(e[s+2]);return i}arrayToTyped(e){const t=e[0].length,n=e.length,i=new Float32Array(t*n);for(let s=0;s<n;s++)i[s*t+0]=e[s][0],i[s*t+1]=e[s][1],i[s*t+2]=e[s][2];return i}flipNormal(e,t,n){return t=t||new _(0,0,0),n=n||new _(0,0,Number.MAX_VALUE),new _(n.x-t.x,n.y-t.y,n.z-t.z).clone().dot(e)<0&&e.multiplyScalar(-1),e}getPlaneNormal(e){const t=this.getCentroid(e);for(let s=0;s<e.length;s++)e[s][0]-=t[0],e[s][1]-=t[1],e[s][2]-=t[2];const n=this.getSVD(e);return new _(n.V[2][0],n.V[2][1],n.V[2][2])}getCentroid(e){let t=0,n=0,i=0;const s=e.length;for(let o=0;o<s;o++){const a=e[o];t+=a[0],n+=a[1],i+=a[2]}return[t/s,n/s,i/s]}rep(e,t,n){typeof n>"u"&&(n=0);const i=e[n],s=Array(i);let o;if(n===e.length-1){for(o=i-2;o>=0;o-=2)s[o+1]=t,s[o]=t;return o===-1&&(s[0]=t),s}for(o=i-1;o>=0;o--)s[o]=this.rep(e,t,n+1);return s}getSVD(e){let t=2220446049250313e-31;const n=1e-64/t,i=50;let s=0,o=0,a=0,l=0,c=0;const h=e,d=h.length,u=h[0].length;if(d<u)throw new Error("Need more rows than columns");const f=new Array(u),v=new Array(u);for(o=0;o<u;o++)f[o]=v[o]=0;const g=this.rep([u,u],0);function y(B,X){return B=Math.abs(B),X=Math.abs(X),B>X?B*Math.sqrt(1+X*X/B/B):X===0?B:X*Math.sqrt(1+B*B/X/X)}let m=0,p=0,S=0,x=0,w=0,C=0,A=0;for(o=0;o<u;o++){for(f[o]=p,A=0,c=o+1,a=o;a<d;a++)A+=h[a][o]*h[a][o];if(A<=n)p=0;else for(m=h[o][o],p=Math.sqrt(A),m>=0&&(p=-p),S=m*p-A,h[o][o]=m-p,a=c;a<u;a++){for(A=0,l=o;l<d;l++)A+=h[l][o]*h[l][a];for(m=A/S,l=o;l<d;l++)h[l][a]+=m*h[l][o]}for(v[o]=p,A=0,a=c;a<u;a++)A+=h[o][a]*h[o][a];if(A<=n)p=0;else{for(m=h[o][o+1],p=Math.sqrt(A),m>=0&&(p=-p),S=m*p-A,h[o][o+1]=m-p,a=c;a<u;a++)f[a]=h[o][a]/S;for(a=c;a<d;a++){for(A=0,l=c;l<u;l++)A+=h[a][l]*h[o][l];for(l=c;l<u;l++)h[a][l]+=A*f[l]}}w=Math.abs(v[o])+Math.abs(f[o]),w>x&&(x=w)}for(o=u-1;o!==-1;o+=-1){if(p!==0){for(S=p*h[o][o+1],a=c;a<u;a++)g[a][o]=h[o][a]/S;for(a=c;a<u;a++){for(A=0,l=c;l<u;l++)A+=h[o][l]*g[l][a];for(l=c;l<u;l++)g[l][a]+=A*g[l][o]}}for(a=c;a<u;a++)g[o][a]=0,g[a][o]=0;g[o][o]=1,p=f[o],c=o}for(o=u-1;o!==-1;o+=-1){for(c=o+1,p=v[o],a=c;a<u;a++)h[o][a]=0;if(p!==0){for(S=h[o][o]*p,a=c;a<u;a++){for(A=0,l=c;l<d;l++)A+=h[l][o]*h[l][a];for(m=A/S,l=o;l<d;l++)h[l][a]+=m*h[l][o]}for(a=o;a<d;a++)h[a][o]/=p}else for(a=o;a<d;a++)h[a][o]=0;h[o][o]+=1}for(t*=x,l=u-1;l!==-1;l+=-1)for(let B=0;B<i;B++){let X=!1;for(c=l;c!==-1;c+=-1){if(Math.abs(f[c])<=t){X=!0;break}if(Math.abs(v[c-1])<=t)break}if(!X){s=0,A=1;const V=c-1;for(o=c;o<l+1&&(m=A*f[o],f[o]*=s,!(Math.abs(m)<=t));o++)for(p=v[o],S=y(m,p),v[o]=S,s=p/S,A=-m/S,a=0;a<d;a++)w=h[a][V],C=h[a][o],h[a][V]=w*s+C*A,h[a][o]=-w*A+C*s}if(C=v[l],c===l){if(C<0)for(v[l]=-C,a=0;a<u;a++)g[a][l]=-g[a][l];break}if(B>=i-1)throw new Error("Error: no convergence.");for(x=v[c],w=v[l-1],p=f[l-1],S=f[l],m=((w-C)*(w+C)+(p-S)*(p+S))/(2*S*w),p=y(m,1),m<0?m=((x-C)*(x+C)+S*(w/(m-p)-S))/x:m=((x-C)*(x+C)+S*(w/(m+p)-S))/x,s=1,A=1,o=c+1;o<l+1;o++){for(p=f[o],w=v[o],S=A*p,p*=s,C=y(m,S),f[o-1]=C,s=m/C,A=S/C,m=x*s+p*A,p=-x*A+p*s,S=w*A,w*=s,a=0;a<u;a++)x=g[a][o-1],C=g[a][o],g[a][o-1]=x*s+C*A,g[a][o]=-x*A+C*s;for(C=y(m,S),v[o-1]=C,s=m/C,A=S/C,m=s*p+A*w,x=-A*p+s*w,a=0;a<d;a++)w=h[a][o-1],C=h[a][o],h[a][o-1]=w*s+C*A,h[a][o]=-w*A+C*s}f[c]=0,f[l]=m,v[l]=x}for(o=0;o<v.length;o++)v[o]<t&&(v[o]=0);for(o=0;o<u;o++)for(a=o-1;a>=0;a--)if(v[a]<v[o]){for(s=v[a],v[a]=v[o],v[o]=s,l=0;l<h.length;l++){const B=h[l][o];h[l][o]=h[l][a],h[l][a]=B}for(l=0;l<g.length;l++){const B=g[l][o];g[l][o]=g[l][a],g[l][a]=B}o=a}return{U:h,S:v,V:g}}}const ed=1/255,td=ed*1/255,nd=td*1/255,Qy=nd*1/255;class id extends $h{constructor(e){super(e);this.ringOffset=new _(0,0,-1.86),this.pickHistory=[],this.pickHistorySizeLimit=5,this.pickHistoryDistanceLimit=.2,this.mathUtils=new Ki,this.type="PhotoSphere",this.createActiveSphere(),this.debugSphere=new $e(new wr(.5,16),this.getMaterial()),this.debugSphere.material.depthTest=!1,this.debugSphere.material.depthWrite=!1,this.debugSphere.material.needsUpdate=!0,this.debugSphere.material.color.setHex(this.hoverColor),this.sceneLabels.add(this.debugSphere)}createActiveSphere(){const n=new ii(1,360,180),i=this.getActiveMaterial();this.activeObject=new $e(n,i),this.activeObject.up.set(0,0,1),this.activeObject.scale.set(-100,100,100),this.activeObject.name="ActivePhotoSphere",this.activeObject.userData.isPickable=!1;const s=this;this.activeObject.addEventListener("intersect",function(o){if(typeof s.activeDepthData>"u")return;const a=o.point,l=s.camera.position.clone(),c=new _().subVectors(a,l).normalize(),h=s.getDepthPixelValue(o.uv);if(h.length===0||h.reduce((m,p)=>m+p,0)===0)return;const d=100,u=s.getDepthMetricValue(h,d),f=new _().addVectors(l,c.clone().multiplyScalar(u));s.debugSphere.position.copy(f),s.pickHistory.length<1&&s.pickHistory.push(f.clone());const v=f.distanceTo(s.pickHistory[s.pickHistory.length-1]);if(s.pickHistory.length<2&&v>.1){s.pickHistory.push(f.clone());return}const g=new _().subVectors(s.pickHistory[s.pickHistory.length-1],s.pickHistory[0]),y=new _().subVectors(f,s.pickHistory[s.pickHistory.length-1]);if(!(g.angleTo(y)<Math.PI/8||v<.1)&&(s.pickHistory.push(f.clone()),!(s.pickHistory.length<s.pickHistorySizeLimit))){s.pickHistory.length>s.pickHistorySizeLimit&&s.pickHistory.shift();{let m=s.pickHistory.map(x=>[Math.floor(x.x*10),Math.floor(x.y*10),Math.floor(x.z*10)]),p=s.mathUtils.getPlaneNormal(m);p=s.flipNormal(p,f,l),Math.sqrt(p.x*p.x+p.y*p.y)<Math.abs(p.z)?(p.x=0,p.y=0,p.z=-1):(p.x=Math.floor(p.x*40)/40,p.y=Math.floor(p.y*40)/40,p.z=0,p.normalize()),s.debugSphere.lookAt(new _().addVectors(f,p))}}})}calculateRms(e){const i=e.map(s=>s*s).reduce((s,o)=>s+o)/e.length;return Math.sqrt(i)}flipNormal(e,t,n){return t=t||new _(0,0,0),n=n||new _(0,0,Number.MAX_VALUE),new _(n.x-t.x,n.y-t.y,n.z-t.z).clone().dot(e)<0&&e.multiplyScalar(-1),e}getDepthMetricValue(e,t=100){const n=e[0]*ed+e[1]*td+e[2]*nd+e[3]*Qy;return t*n}normalizePixel(e,t,n){let i=e[0],s=e[1];return i=i<0?t-i:i,i=i>t?i-(t-1):i,s=s<0?n-s:s,s=s>n?s-(n-1):s,[i,s]}getDepthPixelValue(e){if(typeof this.activeDepthData>"u")return[];const t=this.activeDepthData,n=this.normalizePixel([Math.floor(e.x*t.width),Math.floor((1-e.y)*t.height)],t.width,t.height),i=(n[1]*t.width+n[0])*4;return[t.data[i+0],t.data[i+1],t.data[i+2],t.data[i+3]]}load(e,t={}){this.nearestObjects=[],this.targetObject=void 0;const n=this,i=function(f){const v=n.camera,g=n.controls,y=v.position,m=f.position,p=new _().lerpVectors(m,y,.001);p.sub(m),p.negate(),p.add(m),p.z=m.z,g.target.copy(p),v.lookAt(p),v.position.copy(m),g.update()},s=function(f,v=.01){for(let g=0;g<f.length;g++){if(f[g].d<v)continue;const y=n.getObjectAtIndex(f[g].idx);y.geometry.dispose(),y.geometry=n.getRingGeometry(),y.position.add(n.ringOffset),y.rotation.set(0,0,0)}},o=function(f,v=.01){for(let g=0;g<f.length;g++){if(f[g].d<v)continue;const y=n.getObjectAtIndex(f[g].idx);y.geometry.dispose(),y.geometry=n.getGeometry(),y.position.set(y.userData.position.x,y.userData.position.y,y.userData.position.z),y.rotation.setFromQuaternion(new ct(y.userData.quaternion.x,y.userData.quaternion.y,y.userData.quaternion.z,y.userData.quaternion.w))}},a=function(f,v){for(let g=0;g<f.length;g++){const y=n.getObjectAtIndex(f[g].idx);v?(y.userData.isPickable=!1,y.renderOrder=0):(y.userData.isPickable=!0,y.renderOrder=Number.MAX_VALUE),y.material.depthTest=v,y.material.depthWrite=v,y.material.needsUpdate=!0}},l=function(f){n.events.dispatch("pointscene_update_load_indicator",{value:100,message:"Loading Photo Sphere..."},n.domEl),f.minFilter=ut,n.activeTexture=f,!!n.targetObject&&(n.targetObject.material.visible=!1,n.targetObject.material.needsUpdate=!0,n.nearestObjects=n.getNearest(n.targetObject.position,{nNearest:n.nNearest,maxDistance:n.maxDistance}),s(n.nearestObjects),a(n.nearestObjects,!1),i(n.targetObject),!!n.activeObject&&(n.activeObject.material.uniforms.texture1.value=n.activeTexture,n.activeObject.position.set(n.targetObject.userData.position.x,n.targetObject.userData.position.y,n.targetObject.userData.position.z),n.activeObject.rotation.setFromQuaternion(new ct(n.targetObject.userData.quaternion.x,n.targetObject.userData.quaternion.y,n.targetObject.userData.quaternion.z,n.targetObject.userData.quaternion.w)),n.activeObject.material.uniforms.mono.value=0,n.events.dispatch("pointscene_active_sphere_changed",{sphere:n.targetObject},n.domEl),n.events.dispatch("pointscene_camera_position_changed",{},n.domEl),n.scene.getObjectByName("ActivePhotoSphere")||n.scene.add(n.activeObject)))},c=function(){},h=function(){},d=function(f){n.isActive&&n.targetObject?n.targetObject.dispatchEvent({type:"set_deactive"}):n.events.dispatch("pointscene_enter_sphere_mode",void 0,n.domEl),n.events.dispatch("pointscene_update_load_indicator",{value:65,message:"Loading Photo Sphere..."},n.domEl);const v=f.userData.fileUrl;n.targetObject=f,n.activeObject&&(n.activeObject.material.uniforms.mono.value=1),n.loader.load(v,l,c,h),typeof f.userData.depthUrl<"u"&&n.loader.load(f.userData.depthUrl,function(g){const y=document.createElement("canvas");y.width=g.image.width,y.height=g.image.height;const m=y.getContext("2d");!m||(m.drawImage(g.image,0,0),n.activeDepthData=m.getImageData(0,0,g.image.width,g.image.height),n.activeDepthTexture=g,n.activeObject.material.uniforms.depthmap.value=g)})},u=function(){!n.targetObject||(n.targetObject.material.visible=!0,n.targetObject.material.needsUpdate=!0,o(n.nearestObjects),a(n.nearestObjects,!0))};for(const f of e)this.referenceFrame.isSet()||(this.referenceFrame.position=new _(f.position.x,f.position.y,f.position.z)),this.add(f,{activateCallback:d,deactivateCallback:u});this.index()}setTargetSize(e){for(let t=0;t<this.group.children.length;t++)this.group.children[t].scale.set(e,e,e);this.events.dispatch("pointscene_photosphere_target_size_changed",{value:e},this.domEl)}setActiveOpacity(e){this.activeObject&&(this.activeObject.material.uniforms.opacity.value=e),this.events.dispatch("pointscene_photosphere_active_opacity_changed",{value:e},this.domEl)}setVisibility(e){for(let t=0;t<this.group.children.length;t++)this.group.children[t].material.visible=e,this.group.children[t].userData.isPickable=e;this.events.dispatch("pointscene_photosphere_target_visiblity_changed",{value:e},this.domEl)}setBackgroundMode(e){!this.activeObject||(e?(this.activeObject.material.depthTest=!0,this.activeObject.material.depthWrite=!1,this.activeObject.scale.set(-1e3,1e3,1e3)):(this.activeObject.material.depthTest=!1,this.activeObject.material.depthWrite=!1,this.activeObject.scale.set(-100,100,100)),this.activeObject.material.needsUpdate=!0,this.events.dispatch("pointscene_photosphere_background_mode_changed",{value:e},this.domEl))}handleOpenNearestSphere(e){this.openNearest(e.detail.position)}handleSetSphereBackgroundMode(e){this.setBackgroundMode(e.detail.value)}handleSetSphereVisibility(e){this.setVisibility(e.detail.value)}handleSetSphereSize(e){this.setTargetSize(e.detail.value)}handleSetSphereOpacity(e){this.setActiveOpacity(e.detail.value)}handleLoadSpheres(e){this.load(e.detail)}binds(){this.handleOpenNearestSphere=this.handleOpenNearestSphere.bind(this),this.handleSetSphereBackgroundMode=this.handleSetSphereBackgroundMode.bind(this),this.handleSetSphereVisibility=this.handleSetSphereVisibility.bind(this),this.handleSetSphereSize=this.handleSetSphereSize.bind(this),this.handleSetSphereOpacity=this.handleSetSphereOpacity.bind(this),this.handleLoadSpheres=this.handleLoadSpheres.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_open_nearest_photo_sphere",this.handleOpenNearestSphere,!1),this.domEl.addEventListener("pointscene_set_photosphere_background_mode",this.handleSetSphereBackgroundMode,!1),this.domEl.addEventListener("pointscene_set_photosphere_visibility",this.handleSetSphereVisibility,!1),this.domEl.addEventListener("pointscene_set_photosphere_size",this.handleSetSphereSize,!1),this.domEl.addEventListener("pointscene_set_photosphere_active_opacity",this.handleSetSphereOpacity,!1),this.domEl.addEventListener("pointscene_load_photo_spheres",this.handleLoadSpheres,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_open_nearest_photo_sphere",this.handleOpenNearestSphere,!1),this.domEl.removeEventListener("pointscene_set_photosphere_background_mode",this.handleSetSphereBackgroundMode,!1),this.domEl.removeEventListener("pointscene_set_photosphere_visibility",this.handleSetSphereVisibility,!1),this.domEl.removeEventListener("pointscene_set_photosphere_size",this.handleSetSphereSize,!1),this.domEl.removeEventListener("pointscene_set_photosphere_active_opacity",this.handleSetSphereOpacity,!1),this.domEl.removeEventListener("pointscene_load_photo_spheres",this.handleLoadSpheres,!1),this.removePhotosListeners()}}const sd=["Y","Z"];class Na{constructor(){this._isSet=!1,this._upAxis="Z",this.mRotation=new ye().identity(),this.mScale=new ye().identity(),this.mPosition=new ye().identity(),this.mPreComputed=new ye().identity(),this.mNeedsUpdate=!1}computeBoundingBox(e){const t=this.getTransformationMatrix();return Fr(e,t)}computeUntranslatedBoundingBox(e){const t=this.mRotation.clone().multiply(this.mScale);return Fr(e,t)}decomposeMatrix(e){const t=new _,n=new ct,i=new _,s=new Rn;if(e.decompose(t,n,i),s.setFromQuaternion(n),this._upAxis==="Z"){const o=i.x;i.x=i.y,i.y=o}return{position:t,quaternion:n,rotation:s,scale:i}}getSceneGroup(e){const t=this.getTransformationMatrix(),{position:n,quaternion:i,rotation:s}=this.decomposeMatrix(t),o=this.getScale(),a=new Pt;this._upAxis==="Z"?a.up.set(0,0,1):a.up.set(0,1,0),a.matrixAutoUpdate=!1,a.matrix=t,a.matrixWorld=t,a.position.copy(n),a.quaternion.copy(i),a.rotation.copy(s),a.updateMatrix();for(const l of e)l.scale.copy(o),l.matrixAutoUpdate=!1,a.add(l),l.updateMatrix();return a.updateMatrixWorld(!0),a}getTransformationMatrix(e,t){if(!e&&!this.mNeedsUpdate)return this.mPreComputed;const n=this.mRotation.clone();return this.mPreComputed=n.copyPosition(this.mPosition),t&&(this.mPreComputed.elements[0]=this.mScale.elements[0],this.mPreComputed.elements[5]=this.mScale.elements[5],this.mPreComputed.elements[10]=this.mScale.elements[10]),this.mNeedsUpdate=!!t,this.mPreComputed}isSet(){return this._isSet}toGeo(e,t={}){this.isSet()||console.warn("ReferenceFrame.toGeo: ref not set");const n=this._normalize(e),s=this.getTransformationMatrix(t.forceMatrixUpdate,t.useScale).clone().invert();return n.applyMatrix4(s)}toScene(e,t={}){return this.isSet()||console.warn("ReferenceFrame.toScene: ref not set"),this._normalize(e).applyMatrix4(this.getTransformationMatrix(t.forceMatrixUpdate,t.useScale))}set upAxis(e){if(!sd.includes(e))throw new Error("Invalid up axis: "+e+". Allowed: "+sd.join(" "));e==="Y"?this.mRotation.makeRotationX(-Math.PI/2):this.mRotation.identity(),this.mNeedsUpdate=!0,this._upAxis=e}get upAxis(){return this._upAxis}setPosition(e,t){const n=t?e.clone().negate():e.clone();this.mPosition.makeTranslation(n.x,n.y,n.z),this.mNeedsUpdate=!0,this._isSet=!0}set position(e){this.mPosition.makeTranslation(-e.x,-e.y,-e.z),this.mNeedsUpdate=!0,this._isSet=!0}get position(){const e=new _,t=new ct,n=new _;return this.getTransformationMatrix().decompose(e,t,n),e.negate()}setScale(e){this.mScale.makeScale(e.x,e.y,e.z),this.mNeedsUpdate=!0}set scale(e){this.mScale.makeScale(e.x,e.y,e.z),this.mNeedsUpdate=!0}getScale(){return new _(this.mScale.elements[0],this.mScale.elements[5],this.mScale.elements[10])}getScaleMatrix3(){return new _t().setFromMatrix4(this.mScale)}_normalize(e){return e instanceof _?e.clone():e instanceof Ge?e.position.clone():e.x!==void 0&&e.y!==void 0&&e.z!==void 0?new _(e.x,e.y,e.z):(console.warn("referenceFrame: Invalid object",e),new _)}}var rd=`// 
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
}`,od=`varying vec2 vUv;

void main() {
	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
	gl_Position = projectionMatrix * mvPosition;
}`;class Ky extends It{constructor(){super();this.neighbourCnt=0,this.isWebGL2=!1;const e={screenWidth:{type:"f",value:1024},screenHeight:{type:"f",value:768},edlStrength:{type:"f",value:1},uNear:{type:"f",value:1},uFar:{type:"f",value:1},radius:{type:"f",value:1},neighbours:{type:"2fv",value:[]},uEDLColor:{type:"t",value:null},uEDLDepth:{type:"t",value:null},opacity:{type:"f",value:1},uProj:{type:"Matrix4fv",value:[]}};this.setValues({uniforms:e,vertexShader:this.getDefines()+od,fragmentShader:this.getDefines()+rd,lights:!1}),this.neighbourCount=8}getDefines(){let e="";return e+="#define NEIGHBOUR_COUNT "+this.neighbourCnt+`
`,this.isWebGL2&&(e+=`#define IS_WEBGL_2
`),e}setIsWebGL2(e){this.isWebGL2=e,this.updateShaderSource()}updateShaderSource(){const e=this.getDefines()+od,t=this.getDefines()+rd;this.setValues({vertexShader:e,fragmentShader:t}),this.uniforms.neighbours.value=this.neighbours,this.needsUpdate=!0}get neighbourCount(){return this.neighbourCnt}set neighbourCount(e){if(this.neighbourCnt!==e){this.neighbourCnt=e,this.neighbours=new Float32Array(this.neighbourCnt*2);for(let t=0;t<this.neighbourCount;t++)this.neighbours[2*t+0]=Math.cos(2*t*Math.PI/this.neighbourCnt),this.neighbours[2*t+1]=Math.sin(2*t*Math.PI/this.neighbourCnt);this.updateShaderSource()}}}class $y{constructor(e,t,n){this.screenScene=new _n,this.camera=new ar,this.edlMaterial=new Ky,this.edlMaterial.depthTest=!0,this.edlMaterial.depthWrite=!0,this.edlMaterial.transparent=!0,this.edlMaterial.uniforms.edlStrength.value=.4,this.edlMaterial.uniforms.radius.value=1.6,this.edlMaterial.uniforms.opacity.value=1,this.rtEDL=new St(1024,1024,{minFilter:et,magFilter:et,format:yt,type:En,depthTexture:new jo(1024,1024,rs)}),this.screenQuad=new $e(new rn(2,2,1,1),this.edlMaterial),this.screenQuad.frustumCulled=!1,this.screenScene.add(this.screenQuad),e&&t&&n&&this.resize(e,t,n)}resize(e,t,n){const i=t.getPixelRatio(),s=e.clientWidth,o=e.clientHeight,a=Math.floor(s*i),l=Math.floor(o*i);this.rtEDL.setSize(a,l),this.edlMaterial.uniforms.screenWidth.value=s,this.edlMaterial.uniforms.screenHeight.value=o,this.edlMaterial.uniforms.uNear.value=n.near,this.edlMaterial.uniforms.uFar.value=n.far}dispose(){this.edlMaterial.dispose(),this.rtEDL.dispose(),this.screenQuad.material.dispose(),this.screenQuad.geometry.dispose(),this.screenScene.remove(this.screenQuad)}render(e,t,n){e.setRenderTarget(this.rtEDL),e.clear(!0,!0,!0),e.render(t,n),e.setRenderTarget(null);const i=n.projectionMatrix,s=new Float32Array(16);s.set(i.elements),this.edlMaterial.uniforms.uEDLColor.value=this.rtEDL.texture,this.edlMaterial.uniforms.uEDLDepth.value=this.rtEDL.depthTexture,this.edlMaterial.uniforms.uProj.value=s,e.render(this.screenScene,this.camera)}}var e_=Object.defineProperty,t_=Object.defineProperties,n_=Object.getOwnPropertyDescriptors,ad=Object.getOwnPropertySymbols,i_=Object.prototype.hasOwnProperty,s_=Object.prototype.propertyIsEnumerable,ld=(r,e,t)=>e in r?e_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,r_=(r,e)=>{for(var t in e||(e={}))i_.call(e,t)&&ld(r,t,e[t]);if(ad)for(var t of ad(e))s_.call(e,t)&&ld(r,t,e[t]);return r},o_=(r,e)=>t_(r,n_(e)),cd=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});class hd{constructor(e={}){if(this.pointclouds=[],this.pointBudgetLow=2e5,this.pointBudgetMed=15e5,this.pointBudgetHigh=3e6,this.events=new Kt,this.potree=new Yi,this.useEDL=!1,this.edlRenderer=new $y,this.clippingPlanes=[],this.scene=e.scene,this.camera=e.camera,this.renderer=e.renderer,this.domEl=e.domEl,this.referenceFrame=e.referenceFrame,this.referenceFrame&&e.referenceFramePosition)throw new Error("PointClouds: ReferenceFrame and ReferenceFramePosition both provider. Use only one.");!this.referenceFrame&&e.referenceFramePosition&&(this.referenceFrame=new Na,this.referenceFrame.position=e.referenceFramePosition),this.renderer&&this.initGLExtensions(this.renderer),this.binds(),this.addListeners(),this.setPointBudget("Low"),this.camera&&this.domEl&&this.renderer&&this.resize(this.renderer,this.camera,this.domEl)}initGLExtensions(e){const t=e.capabilities.isWebGL2,n=e.getContext(),i=n.getExtension("EXT_frag_depth"),s=n.getExtension("WEBGL_depth_texture");if(!t&&!i&&!s&&console.error("Device/browser not supported. Capabilities",e.capabilities),!t){const o=n.getExtension("OES_vertex_array_object");o&&(n.createVertexArray=o.createVertexArrayOES.bind(o),n.bindVertexArray=o.bindVertexArrayOES.bind(o))}this.edlRenderer.edlMaterial.setIsWebGL2(t)}dispose(){for(const e of this.pointclouds)e.dispose();this.pointclouds=[],this.potree&&(this.potree.dispose(),this.potree=void 0),this.edlRenderer.dispose(),this.removeListeners()}pick(e){const t=e.screenPos,n=e.renderer||this.renderer,i=e.pickClipped||!1,s=e.camera||this.camera,o=e.pointclouds||this.pointclouds,a=e.pickWindowSize||17;if(!s)throw new Error("PointClouds.pick: camera required");if(!n)throw new Error("PointClouds.pick: renderer required");const l={x:t.x/n.domElement.clientWidth*2-1,y:-(t.y/n.domElement.clientHeight)*2+1},c=new Xi;c.setFromCamera(l,s);const h=c.ray;let d,u=1/0,f;for(const v of o){const g=v.pick(n,s,h,{pickOutsideClipRegion:i,pickWindowSize:a});if(!g||!g.position)continue;const y=s.position.distanceTo(g.position);y<u&&(u=y,d=v,f=g.position)}if(d)return f}getBoundingBox(e){e=e||this.pointclouds;const t=new ot;for(let n=0;n<e.length;n++){const s=e[n].getBoundingBoxWorld();t.union(s)}return t}setReferenceFrame(e){this.referenceFrame=e}fitHeightRange(){const e=this.getBoundingBox();this.setHeightRange([e.min.z,e.max.z])}fitIntensityRange(){let e=!1;const t=this.pointclouds.length>0?this.pointclouds[0].material.intensityRange:Hr.intensityRange;for(let n=0;n<this.pointclouds.length;n++){const i=this.pointclouds[n].pcoGeometry.root,s=.85;if(i!==void 0){if(!i.loaded)return!1;const o=i.geometry.attributes;if(o.intensity!==void 0){const a=o.intensity.array,l=[];for(let d=0;d<a.length;d++)l.push(a[d]);l.sort();const c=Math.floor((l.length-1)*s),h=Math.floor((l.length-1)*(1-s));t[0]=t[0]>l[h]?l[h]:t[0],t[1]=t[1]<l[c]?l[c]:t[1],e=!0}}}return e&&this.setIntensityRange(t),!0}setDefaults(e){const t=new _;for(const n of e){n.material.shape=Hr.pointShape,n.material.gradient=Hr.heightGradient,n.material.classification=Hr.classificationColors,n.pcoGeometry.boundingBox.getSize(t),n.material.opacity=1;const i=t.x;n.material.uniforms.octreeSize.value=i,n.material.spacing=n.pcoGeometry.spacing*n.scale.x}}load(e){return cd(this,arguments,function*(t,n={}){const i=Array.isArray(t)?t:[t],s=[];if(!this.potree)throw new Error("Potree needs to be initialized first");let o="";n.queryString&&(o=n.queryString.startsWith("?")?n.queryString:"?"+n.queryString);const a=n.xhrInit||{};for(const l of i){const c=l.endsWith("/")?l:l+"/",h=yield this.potree.loadPointCloud("cloud.js",d=>c+d+o,(d,u)=>fetch(d,u),o_(r_({},a),{mode:"cors"})).catch(d=>{throw new Error(d)});s.push(h)}return this.setDefaults(s),this.pointclouds.push(...s),s})}loadInternal(e){return cd(this,arguments,function*(t,n={}){const i=yield this.load(t,n).catch(o=>{throw new Error(o)});if(!this.referenceFrame)throw new Error("PointClouds.loadInternal: ReferenceFrame not initialized");const s=this.addToReferenceFrame(i,this.referenceFrame);if(!this.scene)throw new Error("PointClouds.loadInternal: scene required");return this.scene.add(s),i})}addToReferenceFrame(e,t){if(e.length<1)throw new Error("PointClouds.addToReferenceFrame: at least one POC required");return t.isSet()||t.setPosition(e[0].position,!0),t.getSceneGroup(e)}render(e,t,n){const i=e||this.renderer,s=t||this.scene,o=n||this.camera;if(!i||!s||!o)throw new Error("PointClouds.render: renderer, scene and camera required");this.useEDL?this.edlRenderer.render(i,s,o):i.render(s,o)}update(e,t,n){const i=e||this.pointclouds,s=n||this.camera,o=t||this.renderer;if(!i||!s||!o)throw new Error("PointClouds.update: pointclouds, camera and renderer required");this.potree&&this.potree.updatePointClouds(i,s,o),this.clippingPlanes&&this.updateClippingPlanes(this.clippingPlanes)}setClipBoxes(e){this.pointclouds.forEach(function(t){t.material.setClipBoxes(e)}),e&&e.length>0?this.pointclouds.forEach(function(t){t.material.useClipBox=!0}):this.pointclouds.forEach(function(t){t.material.useClipBox=!1})}setClippingPlanes(e){this.clippingPlanes=e,this.updateClippingPlanes(this.clippingPlanes)}updateClippingPlanes(e){this.pointclouds.forEach(t=>t.material.clippingPlanes=e)}setEDLEnabled(e){this.useEDL=e;for(const t of this.pointclouds)t.material.useEDL=e;this.events.dispatch("pointscene_pointclouds_edl_changed",{value:e},this.domEl)}setOpacity(e){this.pointclouds.forEach(function(t){t.material.opacity=e}),this.events.dispatch("pointscene_pointclouds_opacity_changed",{value:e},this.domEl)}setPointBudget(e){if(!this.potree)throw new Error("Potree needs to be initialized first");if(e==="Low")this.potree.pointBudget=this.pointBudgetLow;else if(e==="Med")this.potree.pointBudget=this.pointBudgetMed;else if(e==="High")this.potree.pointBudget=this.pointBudgetHigh;else{console.warn("Pointclouds.setPointBudget: unknown value",e);return}this.events.dispatch("pointscene_pointclouds_lod_changed",{value:e},this.domEl)}translatePosition(e){this.pointclouds.forEach(t=>{t.position.add(e),t.updateMatrix()})}setMaterial(e){throw new Error("setMaterial is deprecated. Use setColorType instead. "+e)}setColorType(e){this.events.dispatch("pointscene_pointclouds_color_type_changed",{value:e},this.domEl),this.pointclouds.forEach(function(t){console.log("setColorType",e,t),t.material.pointColorType=e})}setMaterialWeights(e){e=e||{};const t=e.rgb||0,n=e.int||0,i=e.z||0,s=e.cls||0;this.pointclouds.forEach(o=>{o.material.uniforms.wRGB.value=t,o.material.uniforms.wIntensity.value=n,o.material.uniforms.wElevation.value=i,o.material.uniforms.wClassification.value=s}),this.events.dispatch("pointscene_pointclouds_material_weights_changed",{weights:e},this.domEl)}setColorWeight(e){this.pointclouds.forEach(t=>{t.material.uniforms.wRGB.value=e}),this.events.dispatch("pointscene_pointclouds_rgb_weight_changed",{value:e},this.domEl)}setElevationWeight(e){this.pointclouds.forEach(t=>{t.material.uniforms.wElevation.value=e}),this.events.dispatch("pointscene_pointclouds_elevation_weight_changed",{value:e},this.domEl)}setIntensityWeight(e){this.pointclouds.forEach(t=>{t.material.uniforms.wIntensity.value=e}),this.events.dispatch("pointscene_pointclouds_intensity_weight_changed",{value:e},this.domEl)}setClassificationWeight(e){this.pointclouds.forEach(t=>{t.material.uniforms.wClassification.value=e}),this.events.dispatch("pointscene_pointclouds_classification_weight_changed",{value:e},this.domEl)}setClassVisibility(e,t){let n=!1;for(let i=0;i<this.pointclouds.length;i++){const s=this.pointclouds[i],o=s.material.classification,a=o[e].w;o[e].w=t?1:0,a!==o[e].w&&(n=!0),s.material.classification=o}n&&this.events.dispatch("pointscene_pointclouds_class_visibility_changed",{key:e,value:t},this.domEl)}setClipMode(e){this.events.dispatch("pointscene_pointclouds_clip_mode_changed",{value:e},this.domEl),this.pointclouds.forEach(t=>{t.material.clipMode=e})}setPointShape(e){let t=wn.SQUARE;typeof e=="string"?e.toLowerCase()==="circle"&&(t=wn.CIRCLE):t=e,this.events.dispatch("pointscene_pointclouds_point_shape_changed",{value:t},this.domEl),this.pointclouds.forEach(function(n){n.material.shape=t})}setPointSize(e){e<0&&(e=0),this.events.dispatch("pointscene_pointclouds_point_size_changed",{value:e},this.domEl),this.pointclouds.forEach(function(t){t.material.size=e})}setPointSizeType(e){let t;typeof e=="string"?e==="Adaptive"?t=qt.ADAPTIVE:e==="Attenuated"?t=qt.ATTENUATED:t=qt.FIXED:t=e,this.events.dispatch("pointscene_pointclouds_point_size_type_changed",{value:t},this.domEl),this.pointclouds.forEach(function(n){n.material.pointSizeType=t})}setHeightRange(e){let t={x:0,y:0,z:e[0]},n={x:0,y:0,z:e[1]};if(!this.referenceFrame||!this.referenceFrame.isSet())throw new Error("Reference frame has not been set");t=this.referenceFrame.toScene(t),n=this.referenceFrame.toScene(n),this.events.dispatch("pointscene_pointclouds_height_range_changed",{range:[e[0],e[1]]},this.domEl),this.pointclouds.forEach(function(i){i.material.elevationRange=[t.z,n.z]})}setUseUnscaledElevation(e){this.pointclouds.forEach(function(t){})}setIntensityRange(e){this.events.dispatch("pointscene_pointclouds_intensity_range_changed",{range:e},this.domEl),this.pointclouds.forEach(function(t){t.material.uniforms.intensityRange.value=e})}setVisibility(e){this.pointclouds.forEach(function(t){t.visible=e}),this.events.dispatch("pointscene_pointclouds_visibility_changed",{value:e},this.domEl)}resize(e,t,n){const i=t||this.camera,s=n||this.domEl,o=e||this.renderer;if(!i||!s||!o)throw new Error("PointClouds.onWindowResize: camera, domEl and renderer required");this.edlRenderer.resize(s,o,i);for(let a=0;a<this.pointclouds.length;a++){const l=this.pointclouds[a];l.material.screenWidth=s.clientWidth,l.material.screenHeight=s.clientHeight,l.material.fov=i.fov*(Math.PI/180)}}handleWindowResize(){!this.camera&&!this.domEl||this.resize()}handleLoadPointcloud(e){this.load(e.detail.path)}handleSetClipBoxes(e){this.setClipBoxes(e.detail.clipBoxes)}handleSetClipMode(e){this.setClipMode(e.detail.clipMode)}handleSetLOD(e){this.setPointBudget(e.detail.value)}handleSetMaterial(e){this.setMaterial(e.detail.value)}handleSetMaterialWeights(e){this.setMaterialWeights(e.detail.weights)}handleSetClassVisibility(e){this.setClassVisibility(e.detail.key,e.detail.value)}handleUpdateClassRange(e){throw new Error("Update class range not implemented "+e)}handleSetPointShape(e){this.setPointShape(e.detail.value)}handleSetPointSize(e){this.setPointSize(e.detail.value)}handleSetPointSizeType(e){this.setPointSizeType(e.detail.value)}handleSetHeightRange(e){this.setHeightRange(e.detail.range)}handleSetIntensityRange(e){this.setIntensityRange(e.detail.range)}handleSetEDL(e){this.setEDLEnabled(e.detail.value)}handleSetVisibility(e){this.setVisibility(e.detail.value)}binds(){this.handleLoadPointcloud=this.handleLoadPointcloud.bind(this),this.handleSetClassVisibility=this.handleSetClassVisibility.bind(this),this.handleSetClipBoxes=this.handleSetClipBoxes.bind(this),this.handleSetClipMode=this.handleSetClipMode.bind(this),this.handleSetEDL=this.handleSetEDL.bind(this),this.handleSetHeightRange=this.handleSetHeightRange.bind(this),this.handleSetIntensityRange=this.handleSetIntensityRange.bind(this),this.handleSetLOD=this.handleSetLOD.bind(this),this.handleSetMaterial=this.handleSetMaterial.bind(this),this.handleSetMaterialWeights=this.handleSetMaterialWeights.bind(this),this.handleSetPointShape=this.handleSetPointShape.bind(this),this.handleSetPointSize=this.handleSetPointSize.bind(this),this.handleSetPointSizeType=this.handleSetPointSizeType.bind(this),this.handleSetVisibility=this.handleSetVisibility.bind(this),this.handleUpdateClassRange=this.handleUpdateClassRange.bind(this),this.handleWindowResize=this.handleWindowResize.bind(this)}addListeners(e){const t=e||this.domEl;!t||(t.addEventListener("pointscene_load_pointcloud",this.handleLoadPointcloud,!1),t.addEventListener("pointscene_set_clipboxes",this.handleSetClipBoxes,!1),t.addEventListener("pointscene_set_clip_mode",this.handleSetClipMode,!1),t.addEventListener("pointscene_set_pointclouds_lod",this.handleSetLOD,!1),t.addEventListener("pointscene_set_pointclouds_material",this.handleSetMaterial,!1),t.addEventListener("pointscene_set_pointclouds_material_weights",this.handleSetMaterialWeights,!1),t.addEventListener("pointscene_set_pointclouds_class_visibility",this.handleSetClassVisibility,!1),t.addEventListener("pointscene_pointclouds_update_class_range",this.handleUpdateClassRange,!1),t.addEventListener("pointscene_set_pointclouds_shape",this.handleSetPointShape,!1),t.addEventListener("pointscene_set_pointclouds_point_size",this.handleSetPointSize,!1),t.addEventListener("pointscene_set_pointclouds_size_type",this.handleSetPointSizeType,!1),t.addEventListener("pointscene_set_pointclouds_height_range",this.handleSetHeightRange,!1),t.addEventListener("pointscene_set_pointclouds_intensity_range",this.handleSetIntensityRange,!1),t.addEventListener("pointscene_set_pointclouds_edl",this.handleSetEDL,!1),t.addEventListener("pointscene_set_pointclouds_visibility",this.handleSetVisibility,!1),window.addEventListener("resize",this.handleWindowResize,!1))}removeListeners(e){const t=e||this.domEl;!t||(t.removeEventListener("pointscene_load_pointcloud",this.handleLoadPointcloud,!1),t.removeEventListener("pointscene_set_clipboxes",this.handleSetClipBoxes,!1),t.removeEventListener("pointscene_set_clip_mode",this.handleSetClipMode,!1),t.removeEventListener("pointscene_set_pointclouds_lod",this.handleSetLOD,!1),t.removeEventListener("pointscene_set_pointclouds_material",this.handleSetMaterial,!1),t.removeEventListener("pointscene_set_pointclouds_material_weights",this.handleSetMaterialWeights,!1),t.removeEventListener("pointscene_set_pointclouds_class_visibility",this.handleSetClassVisibility,!1),t.removeEventListener("pointscene_pointclouds_update_class_range",this.handleUpdateClassRange,!1),t.removeEventListener("pointscene_set_pointclouds_shape",this.handleSetPointShape,!1),t.removeEventListener("pointscene_set_pointclouds_point_size",this.handleSetPointSize,!1),t.removeEventListener("pointscene_set_pointclouds_size_type",this.handleSetPointSizeType,!1),t.removeEventListener("pointscene_set_pointclouds_height_range",this.handleSetHeightRange,!1),t.removeEventListener("pointscene_set_pointclouds_intensity_range",this.handleSetIntensityRange,!1),t.removeEventListener("pointscene_set_pointclouds_edl",this.handleSetEDL,!1),t.removeEventListener("pointscene_set_pointclouds_visibility",this.handleSetVisibility,!1),window.removeEventListener("resize",this.handleWindowResize,!1))}}const Hr={pointShape:wn.CIRCLE,pointSize:3,minPointSize:1,maxPointSize:50,opacity:1,sizeType:"Fixed",pointSizeType:qt.FIXED,pointColorType:pt.HEIGHT,minNodeSize:1,edlStrength:1,edlRadius:1.4,useEDL:!1,useHqSplat:!1,heightMin:0,heightMax:100,useUnscaledElevation:!1,materialTransition:.5,weightRGB:.4,weightIntensity:0,weightElevation:.6,weightClassification:0,weightReturnNumber:0,weightSourceID:0,intensityRange:[0,65536],intensityGamma:1,intensityContrast:0,intensityBrightness:0,rgbGamma:1,rgbContrast:0,rgbBrightness:0,heightGradient:[[0/36,new D(54/255,83/255,121/255)],[1/36,new D(54/255,94/255,123/255)],[2/36,new D(53/255,106/255,124/255)],[3/36,new D(53/255,119/255,126/255)],[4/36,new D(52/255,128/255,124/255)],[5/36,new D(52/255,129/255,113/255)],[6/36,new D(51/255,131/255,102/255)],[7/36,new D(50/255,133/255,90/255)],[8/36,new D(50/255,134/255,77/255)],[9/36,new D(49/255,136/255,64/255)],[10/36,new D(48/255,138/255,50/255)],[11/36,new D(61/255,139/255,48/255)],[12/36,new D(75/255,141/255,47/255)],[13/36,new D(89/255,149/255,47/255)],[14/36,new D(104/255,158/255,46/255)],[15/36,new D(121/255,166/255,45/255)],[16/36,new D(140/255,175/255,43/255)],[17/36,new D(161/255,183/255,41/255)],[18/36,new D(185/255,192/255,39/255)],[19/36,new D(200/255,189/255,36/255)],[20/36,new D(208/255,177/255,33/255)],[21/36,new D(217/255,163/255,30/255)],[22/36,new D(225/255,146/255,26/255)],[23/36,new D(234/255,127/255,22/255)],[24/36,new D(242/255,104/255,18/255)],[25/36,new D(237/255,94/255,16/255)],[26/36,new D(233/255,84/255,14/255)],[27/36,new D(228/255,75/255,13/255)],[28/36,new D(224/255,66/255,11/255)],[29/36,new D(219/255,57/255,10/255)],[30/36,new D(215/255,48/255,8/255)],[31/36,new D(211/255,39/255,7/255)],[32/36,new D(206/255,31/255,5/255)],[33/36,new D(202/255,23/255,4/255)],[34/36,new D(197/255,15/255,2/255)],[35/36,new D(193/255,7/255,1/255)],[36/36,new D(188/255,0/255,0/255)]],classificationColors:{0:new le(.5,.5,.5,1),1:new le(1,1,1,1),2:new le(177/255,110/255,13/255,1),3:new le(43/255,143/255,81/255,1),4:new le(39/255,149/255,48/255,1),5:new le(60/255,155/255,34/255,1),6:new le(188/255,0/255,0/255,1),7:new le(158/255,30/255,160/255,1),8:new le(166/255,25/255,139/255,1),9:new le(52/255,106/255,127/255,1),10:new le(49/255,132/255,130/255,1),11:new le(182/255,59/255,7/255,1),12:new le(171/255,155/255,19/255,1),13:new le(166/255,25/255,139/255,1),14:new le(129/255,34/255,155/255,1),15:new le(182/255,7/255,42/255,1),16:new le(158/255,30/255,160/255,1),17:new le(46/255,138/255,108/255,1),18:new le(158/255,30/255,160/255,1),19:new le(188/255,10/255,10/255,1),20:new le(188/255,20/255,20/255,1),21:new le(188/255,30/255,30/255,1),22:new le(188/255,40/255,40/255,1),23:new le(188/255,50/255,50/255,1),24:new le(188/255,60/255,60/255,1),25:new le(188/255,70/255,70/255,1),26:new le(188/255,80/255,80/255,1),27:new le(188/255,90/255,90/255,1),28:new le(188/255,100/255,100/255,1),29:new le(188/255,110/255,110/255,1),30:new le(188/255,120/255,120/255,1),31:new le(188/255,130/255,130/255,1),DEFAULT:new le(.5,.5,.5,1)}};class dd{constructor(e){this.toGeo=e.referenceFrame.toGeo,this.header=`999
DXF downloaded from Pointscene.com
0
SECTION
2
HEADER
9
$ACADVER
1
AC1006
9
$INSBASE
10
0.0
20
0.0
30
0.0
9
$EXTMIN
10
{xmin}
20
{ymin}
30
{zmin}
9
$EXTMAX
10
{xmax}
20
{ymax}
30
{zmax}
0
ENDSEC
`,this.header+=`0
SECTION
2
TABLES
0
TABLE
2
LTYPE
70
1
0
LTYPE
2
CONTINUOUS
70
64
3
Solid line
72
65
73
0
40
0.000000
0
ENDTAB
`,this.header+=`0
TABLE
2
LAYER
70
6
0
LAYER
2
1
70
64
62
7
6
CONTINUOUS
0
LAYER
2
2
70
64
62
7
6
CONTINUOUS
0
ENDTAB
0
TABLE
2
STYLE
70
0
0
ENDTAB
0
ENDSEC
`,this.header+=`0
SECTION
2
BLOCKS
0
ENDSEC
`,this.body="",this.footer=`0
EOF`,this.entitiesBegin=`0
SECTION
2
ENTITIES
`,this.entityEnd=`0
ENDSEC
`,this.pointEnt=`0
POINT
5
{id}
8
{layer}
6
CONTINUOUS
62
150
10
{x}
20
{y}
30
{z}
`,this.vertexBegin=`0
POLYLINE
8
{layer}
62
0
66
1
10
0.0
20
0.0
30
0.0
70
8
`,this.vertex=`0
VERTEX
8
{layer}
10
{x}
20
{y}
30
{z}
70
32
`,this.vertexEnd=`0
SEQEND
`,this.points=[],this.lines=[],this.polygons=[],this.xmin=9999999999e-2,this.ymin=9999999999e-2,this.zmin=9999999999e-2,this.xmax=-9999999999e-2,this.ymax=-9999999999e-2,this.zmax=-9999999999e-2}dispose(){this.points=[],this.lines=[],this.polygons=[],this.toGeo=()=>new _}setPoints(e){this.points=[],this.points=e}setLines(e){this.lines=[],this.lines=e}setPolygons(e){this.polygons=[],this.polygons=e}addPoint(e){this.points.push(e)}addLine(e){this.lines.push(e)}addPolygon(e){this.polygons.push(e)}updateExtremes(e){this.xmin=Math.min(this.xmin,e.x),this.ymin=Math.min(this.ymin,e.y),this.zmin=Math.min(this.zmin,e.z),this.xmax=Math.max(this.xmax,e.x),this.ymax=Math.max(this.ymax,e.y),this.zmax=Math.max(this.zmax,e.z)}getData(){if(this.lines.length===0&&this.polygons.length===0&&this.points.length===0){console.warn("DxfFile: no data.");return}let e=0,t=0,n="",i="",s,o,a=!1,l=!1,c="";for(n+=this.entitiesBegin,e=0;e<this.lines.length;e++){for(s=this.lines[e],s.position!==void 0?(n+=this.vertexBegin.replace("{layer}","Annotation Line"),a=!0,s=s.position):n+=this.vertexBegin.replace("{layer}","Measurement Line"),t=0;t<s.length;t++)i=this.vertex,a?o=s[t]:o=this.toGeo(s[t]),this.updateExtremes(o),i=i.replace("{x}",o.x).replace("{y}",o.y).replace("{z}",o.z).replace("{layer}",s.layerId),n+=i;n+=this.vertexEnd}for(e=0;e<this.polygons.length;e++){for(s=this.polygons[e],s.position!==void 0?(n+=this.vertexBegin.replace("{layer}","Annotation Polygon"),l=!0,s=s.position):n+=this.vertexBegin.replace("{layer}","Measurement Polygon"),t=0;t<s.length;t++)i=this.vertex,l?o=s[t]:o=this.toGeo(s[t]),this.updateExtremes(o),i=i.replace("{x}",o.x).replace("{y}",o.y).replace("{z}",o.z).replace("{layer}",s.layerId),n+=i;i=this.vertex,l?o=s[0]:o=this.toGeo(s[0]),i=i.replace("{x}",o.x).replace("{y}",o.y).replace("{z}",o.z).replace("{layer}",s.layerId),n+=i,n+=this.vertexEnd}for(e=0;e<this.points.length;e++)s=this.points[e],s.position!==void 0?(c="Annotation Point",o=s.position,o.x=parseFloat(o.x),o.y=parseFloat(o.y),o.z=parseFloat(o.z)):s!==void 0&&(c="Measurement Point",o=this.toGeo(s)),this.updateExtremes(o),n+=this.pointEnt.replace("{id}",e.toString()).replace("{x}",o.x).replace("{y}",o.y).replace("{z}",o.z).replace("{layer}",c);n+=this.entityEnd;let h=this.header;return h=h.replace("{xmin}",this.xmin.toString()).replace("{ymin}",this.ymin.toString()).replace("{zmin}",this.zmin.toString()),h=h.replace("{xmax}",this.xmax.toString()).replace("{ymax}",this.ymax.toString()).replace("{zmax}",this.zmax.toString()),h+n+this.footer}reset(){this.points=[],this.lines=[],this.polygons=[]}}class Gr extends Ge{constructor(){super();const e=new lt;e.minFilter=et,e.magFilter=et;const t=new ur({map:e,depthTest:!0,depthWrite:!0});this.material=t,this.sprite=new _c(t),this.add(this.sprite),this.borderThickness=0,this.fontface="Open Sans",this.fontsize=24,this.borderColor={r:255,g:255,b:255,a:1},this.backgroundColor={r:255,g:255,b:255,a:1},this.textColor={r:255,g:255,b:255,a:1},this.text=""}setText(e){this.text!==e&&(this.text=e,this.update())}setTextColor(e){this.textColor=e,this.update()}setBorderColor(e){this.borderColor=e,this.update()}setBackgroundColor(e){this.backgroundColor=e,this.update()}update(){let e=document.createElement("canvas"),t=e.getContext("2d");if(!t)return;t.font=this.fontsize+"px "+this.fontface;const i=t.measureText(this.text).width,s=4,o=2*s+i+2*this.borderThickness,a=this.fontsize*1.4+2*this.borderThickness;if(e=document.createElement("canvas"),t=e.getContext("2d"),!t)return;t.canvas.width=o,t.canvas.height=a,t.font=this.fontsize+"px "+this.fontface,t.fillStyle="rgba("+this.backgroundColor.r+","+this.backgroundColor.g+","+this.backgroundColor.b+","+this.backgroundColor.a+")",t.strokeStyle="rgba("+this.borderColor.r+","+this.borderColor.g+","+this.borderColor.b+","+this.borderColor.a+")",t.lineWidth=this.borderThickness,this.roundRect(t,this.borderThickness/2,this.borderThickness/2,i+this.borderThickness+2*s,this.fontsize*1.4+this.borderThickness,0),t.strokeStyle="rgba(255, 255, 255, 1.0)",t.strokeText(this.text,this.borderThickness+s,this.fontsize+this.borderThickness),t.fillStyle="rgba("+this.textColor.r+","+this.textColor.g+","+this.textColor.b+","+this.textColor.a+")",t.fillText(this.text,this.borderThickness+s,this.fontsize+this.borderThickness);const l=new lt(e);l.minFilter=ut,l.magFilter=ut,l.needsUpdate=!0,this.sprite.material.map=l,this.sprite.scale.set(o*.01,a*.01,1)}roundRect(e,t,n,i,s,o){e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+i-o,n),e.quadraticCurveTo(t+i,n,t+i,n+o),e.lineTo(t+i,n+s-o),e.quadraticCurveTo(t+i,n+s,t+i-o,n+s),e.lineTo(t+o,n+s),e.quadraticCurveTo(t,n+s,t,n+s-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath(),e.fill(),e.stroke()}}class ud{constructor(e){this.scene=e.scene,this.sceneLabels=e.sceneLabels,this.domEl=e.domEl,this.referenceFrame=e.referenceFrame,this.type="Polygon",this.group=new Pt,this.groupLabels=new Pt,this.scene.add(this.group),this.sceneLabels.add(this.groupLabels),this.addLabelsActive=!1,this.showLabelsActive=!1,this.color=15886354,this.hoverColor=65280,this.activeColor=12320768,this.hasHoveredObject=!1,this.hoveredObject=void 0,this.math=new Ki,this.author=""}dispose(){this.hoveredObject&&(this.hoveredObject.material.dispose(),this.hoveredObject.geometry.dispose()),this.scene.remove(this.group),this.sceneLabels.remove(this.groupLabels)}reset(){for(let e=this.group.children.length-1;e>=0;e--)this.group.remove(this.group.children[e]);for(let e=this.groupLabels.children.length-1;e>=0;e--)this.group.remove(this.groupLabels.children[e])}getObjectByIndex(e){return this.group.children[e]}getLast(){return this.group.children[this.getCount()-1]}getCount(){return this.group.children.length}getHovered(){const e=this.getHoveredIndex();if(e!==void 0)return this.group.children[e]}getHoveredIndex(){if(!!this.hasHoveredObject){for(let e=0;e<this.group.children.length;e++)if(this.group.children[e].userData.hoverActive)return e}}getVerticesFromObject(e,t,n){n=n||3,t=t||!1;const s=e.geometry.attributes.position.array,o=s.length/3,a=[];for(let l=0;l<o;l++){const c=l*3;let h={x:s[c+0].toFixed(n),y:s[c+1].toFixed(n),z:s[c+2].toFixed(n)};t&&(h=this.referenceFrame.toGeo(h)),a.push(h)}return a}getVertices(e){e=e||!1;const t=[];for(let n=0;n<this.group.children.length;n++){const s=this.group.children[n].geometry.attributes.position.array,o=s.length/3,a=[];for(let l=0;l<o;l++){const c=l*3;let h={x:s[c+0],y:s[c+1],z:s[c+2]};e&&(h=this.referenceFrame.toGeo(h)),a.push(h)}a.length>1&&t.push(a)}return t}updateLabel(e){if(e.userData.label===void 0)return;const t=e.geometry.attributes.position.array,n=e.geometry.attributes.position.count,i=e.userData.label,s=this.math.getPlaneNormal(this.math.arrayToMatrix(t)),o=5,a=s.clone().multiplyScalar(o);let l,c,h;l=c=h=0;for(let m=0;m<n;m++){const p=m*3;l+=t[p+0],c+=t[p+1],h+=t[p+2]}l/=n,c/=n,h/=n,a.add(new _(l,c,h));const d=s.clone().negate(),f=new Xi(a,d).intersectObject(e),v=this.getObjectArea3D(e);i.setText("Area(Sq): "+v.toFixed(3)),i.position.copy(a);let g=new _;f.length<1?(g=s.clone().negate(),g.multiplyScalar(o),g.add(a)):g.copy(f[0].point);const y=e.userData.labelLine.geometry.attributes.position.array;y[0]=g.x,y[1]=g.y,y[2]=g.z,y[3]=a.x,y[4]=a.y,y[5]=a.z,e.userData.labelLine.geometry.attributes.position.needsUpdate=!0}updatePosition(e,t,n){const i=e.geometry.attributes.position.array,s=t*3;i[s+0]=n.x,i[s+1]=n.y,i[s+2]=n.z,e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeBoundingSphere(),this.updateLabel(e)}updatePositionAtLineIndex(e,t,n){const i=this.getObjectByLineIndex(e);i!==void 0&&(this.updatePosition(i,t,n),i.userData.attributes.dateModified=Date.now(),this.author!==void 0&&(i.userData.attributes.author=this.author))}getStatsHTML(e){const t=this.getStats(e);let n="";return n+='<p style="padding-top: 0px;">POLYGON</p>',n+='<p>Area 3D: <b class="pull-right">'+t.area.toFixed(3)+" sq m/ft</b><br/>",n+='Perimeter: <b class="pull-right">'+t.perimeter.toFixed(3)+" m/ft</b><br/></p>",n}getStats(e){const t=e.geometry.attributes.position.count,n=e.geometry.attributes.position.array,i=this.getObjectArea3D(e);let s=0;for(let o=0;o<t-1;o++){const a=o*3,l=new _(n[a+0],n[a+1],n[a+2]),c=new _(n[a+3],n[a+4],n[a+5]);s+=l.distanceTo(c)}return{perimeter:s,area:i}}getObjectByLineIndex(e){for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];if(n.userData.lineIndex===e)return n}}getObjectArea3D(e){const n=(e.geometry.index.count||e.geometry.index.length)/3,i=e.geometry.index.array,s=e.geometry.attributes.position.array;let o=0;for(let a=0;a<n;a++){const l=a*3,c=i[l+0]*3,h=i[l+1]*3,d=i[l+2]*3,u=new _(s[c+0],s[c+1],s[c+2]),f=new _(s[h+0],s[h+1],s[h+2]),v=new _(s[d+0],s[d+1],s[d+2]),g=f.clone().sub(u),y=v.clone().sub(u),m=new _;m.crossVectors(g,y),o+=m.length()/2}return o}getProjectedArray(e){const t=e.geometry.attributes.position.array,n=e.geometry.attributes.position.count,i=this.math.getPlaneNormal(this.math.arrayToMatrix(t)),s=this.math.flipNormal(i),o=new ct().setFromUnitVectors(s.normalize(),new _(0,0,1));let a,l,c,h,d;for(c=h=d=0,a=0;a<n;a++)l=a*3,c+=t[l+0],h+=t[l+1],d+=t[l+2];c/=n,h/=n,d/=n;const u=[];for(a=0;a<n;a++){l=a*3;const f=new _(t[l+0]-c,t[l+1]-h,t[l+2]-d);f.applyQuaternion(o),u.push(f.x),u.push(f.y),u.push(f.z)}return{array:u,normal:s,quat:o,centroid:{x:c,y:h,z:d}}}addLabel(e,t,n){e.userData.normal=t,e.userData.centroid=new _(n.x,n.y,n.z);const i=this.getObjectArea3D(e);e.userData.area=i;const s=new Gr,o=5,a=t.clone().multiplyScalar(o);a.add(new _(n.x,n.y,n.z));const l=t.clone().negate(),h=new Xi(a,l).intersectObject(e),d=new D(this.color);s.borderColor={r:d.r*255,g:d.g*255,b:d.b*255,a:1},s.backgroundColor={r:d.r*255,g:d.g*255,b:d.b*255,a:1},s.textColor={r:255,g:255,b:255,a:1},s.setText("Area(Sq): "+i.toFixed(3)),s.position.copy(a),e.userData.label=s;let u=new _;h.length<1?(u=t.clone().negate(),u.multiplyScalar(o),u.add(a)):u.copy(h[0].point);const f=new ze,v=new Bt({color:this.color}),g=new Float32Array(2*3);f.setAttribute("position",new Ue(g,3)),e.userData.labelLine=new On(f,v);const y=e.userData.labelLine.geometry.attributes.position.array;y[0]=u.x,y[1]=u.y,y[2]=u.z,y[3]=a.x,y[4]=a.y,y[5]=a.z,e.userData.labelLine.geometry.attributes.position.needsUpdate=!0,this.showLabelsActive&&(this.groupLabels.add(e.userData.label),this.groupLabels.add(e.userData.labelLine))}hideLabel(e){this.groupLabels.remove(e.userData.label),this.groupLabels.remove(e.userData.labelLine)}showLabel(e){this.groupLabels.add(e.userData.label),this.groupLabels.add(e.userData.labelLine)}addFromObject(e,t,n){const i=e.userData.index,s=this.getProjectedArray(e),o=this.getShape(s.array);if(o===void 0){console.warn("Polygons.addFromObject: Failed to add",e);return}const a=new Cr(o),l=new Zt({color:this.color,transparent:!0,opacity:.6,side:jn,wireframe:!1}),c=new $e(a,l);c.userData.lineIndex=i,c.userData.deleteActionCallback=n,c.userData.attributes=t||{},c.userData.type=this.type,(c.userData.attributes.dateCreated===void 0||c.userData.attributes.dateCreated===0)&&(c.userData.attributes.dateCreated=Date.now());const h=e.geometry.attributes.position.array,d=e.geometry.attributes.position.count,u=c.geometry.attributes.position,f=u.array;if(d<3){console.error("Polygons.addFromObject: Error, not enough vertices",e);return}this.group.add(c);for(let v=0;v<d;v++){const g=v*3;f[g+0]=h[g+0],f[g+1]=h[g+1],f[g+2]=h[g+2]}u.needsUpdate=!0,this.addLabelsActive&&this.addLabel(c,s.normal,s.centroid),this.addListeners(c)}addListeners(e){const t=this;e.addEventListener("get_stats_html",function(n){n.callback(t.getStatsHTML(n.target))}),e.addEventListener("hover_in",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.hoverColor),i.userData.hoverActive=!0,t.hasHoveredObject=!0,t.hoveredObject=i,t.domEl.style.cursor="pointer"}),e.addEventListener("hover_out",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.color),i.userData.hoverActive=!1,t.hasHoveredObject=!1,t.hoveredObject=void 0,t.domEl.style.cursor="auto"}),e.addEventListener("set_active",function(n){n.target.material.color.setHex(t.activeColor)}),e.addEventListener("set_deactive",function(n){n.target.material.color.setHex(t.color)}),e.addEventListener("discard_changes",function(n){n.target.userData.unsaved=void 0}),e.addEventListener("save",function(n){const i=n.target,s=n.callback;if(i.userData.unsaved!==void 0){const a=i.userData.unsaved;for(const l of Object.keys(a))i.userData.attributes[l]=a[l];i.userData.unsaved=void 0,i.userData.attributes.dateModified=Date.now()}t.author!==void 0&&(i.userData.attributes.author=t.author);const o=t.getVerticesFromObject(i,!0,3);i.userData.attributes.position=o,s!==void 0&&s(i)}),e.addEventListener("stage_save",function(n){const i=n.target,s=n.attribute,o=n.value;i.userData.unsaved===void 0&&(i.userData.unsaved={}),i.userData.unsaved[s]=o}),e.addEventListener("delete",function(n){t.delete(n.target)})}deleteAll(){const e=[];for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];e.push(n)}for(let t=0;t<e.length;t++)this.delete(e[t])}delete(e){e.userData.deleteActionCallback!==void 0&&e.userData.deleteActionCallback(e),e.userData.label!==void 0&&(this.groupLabels.remove(e.userData.label),this.groupLabels.remove(e.userData.labelLine)),this.group.remove(e)}getShape(e){let t,n;e instanceof Ge?(t=e.geometry.attributes.position.array,n=e.geometry.attributes.position.count):(t=e,n=e.length/3);const i=new Ui;if(!(n<4)){i.moveTo(t[0],t[1]);for(let s=1;s<n;s++){const o=s*3;i.lineTo(t[o+0],t[o+1])}return i}}}class fd{constructor(e){this.scene=e.scene,this.sceneLabels=e.sceneLabels,this.referenceFrame=e.referenceFrame,this.domEl=e.domEl,this.color=4951343,this.hoverColor=65280,this.activeColor=12320768,this.type="Line",this.group=new Pt,this.groupLabels=new Pt,this.scene.add(this.group),this.sceneLabels.add(this.groupLabels),this.events=new Kt,this.index=0,this.addLabelsActive=!1,this.showLabelsActive=!1,this.isClosed=!1}dispose(){this.scene.remove(this.group),this.sceneLabels.remove(this.groupLabels)}reset(){for(let e=this.group.children.length-1;e>=0;e--)this.group.remove(this.group.children[e]);for(let e=this.groupLabels.children.length-1;e>=0;e--)this.group.remove(this.groupLabels.children[e])}setVisibilityAll(e){for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];n.material.visible=e,n.userData.labels!==void 0&&(this.groupLabels.children[t].material.visible=e)}this.events.dispatch("pointscene_vectorline_visibility_changed",{value:e},this.domEl)}getVerticesFromObject(e,t,n){n=n||3,t=t||!1;const s=e.geometry.attributes.position.array,o=s.length/3,a=[];for(let l=0;l<o;l++){const c=l*3;let h={x:parseFloat(s[c+0].toFixed(n)),y:parseFloat(s[c+1].toFixed(n)),z:parseFloat(s[c+2].toFixed(n))};t&&(h=this.referenceFrame.toGeo(h)),a.push(h)}return a}getVertices(e){e=e||!1;const t=[];for(let n=0;n<this.group.children.length;n++){const s=this.group.children[n].geometry.attributes.position.array,o=s.length/3,a=[];for(let l=0;l<o;l++){const c=l*3;let h={x:s[c+0],y:s[c+1],z:s[c+2]};e&&(h=this.referenceFrame.toGeo(h)),a.push(h)}a.length>1&&t.push(a)}return t}getLast(){return this.group.children[this.getCount()-1]}getIndex(){return this.index}getCount(){return this.group.children.length}getMaterial(){return new Bt({color:this.color,linewidth:1})}updatePosition(e,t,n){const i=e.geometry.attributes.position.count,s=e.geometry.attributes.position.array,o=t*3;let a;s[o+0]=n.x,s[o+1]=n.y,s[o+2]=n.z,this.isClosed&&t===0&&(a=(i-1)*3,s[a+0]=n.x,s[a+1]=n.y,s[a+2]=n.z),e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeBoundingSphere(),this.updateLabels(e,t)}getStatsHTML(e){const t=this.getStats(e);let n="";return n+='<p style="padding-top: 0px;">LINE</p>',n+='<p>Length: <b class="pull-right">'+t.length.toFixed(3)+" m/ft</b><br/>",n+='Angle to XY: <b class="pull-right">'+t.angle.toFixed(3)+" deg</b></p>",n+='<p>dXY: <b class="pull-right">'+t.deltaXY.toFixed(3)+" m/ft</b><br/>",n+='dZ: <b class="pull-right">'+t.deltaZ.toFixed(3)+" m/ft</b></p>",n}getStats(e){const t=e.geometry.attributes.position.count,n=e.geometry.attributes.position.array;let i,s,o,a;const l=new _(n[0],n[1],n[2]),c=new _(n[t*3-3],n[t*3-2],n[t*3-1]),h=new _(c.x-l.x,c.y-l.y,c.z-l.z),d=new ee(h.x,h.y).length(),u=h.clone().angleTo(new _(0,0,1))*180/Math.PI-90;let f=0;for(i=0;i<t-1;i++)s=i*3,o=new _(n[s+0],n[s+1],n[s+2]),a=new _(n[s+3],n[s+4],n[s+5]),f+=o.distanceTo(a);return{start:this.referenceFrame.toGeo(l),end:this.referenceFrame.toGeo(c),delta:h,deltaXY:d,deltaZ:h.z,angle:u,length:f}}updatePositionAtLineIndex(e,t,n){const i=this.getObjectByLineIndex(e);i!==void 0&&(this.updatePosition(i,t,n),i.userData.attributes.dateModified=Date.now(),this.author!==void 0&&(i.userData.attributes.author=this.author))}getObjectByLineIndex(e){for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];if(n.userData.index===e)return n}}getObjectByIndex(e){return this.group.children[e]}getHovered(){const e=this.getHoveredIndex();if(e!==void 0)return this.group.children[e]}getHoveredIndex(){if(!!this.hasHoveredObject){for(let e=0;e<this.group.children.length;e++)if(this.group.children[e].userData.hoverActive)return e}}addListeners(e){const t=this;e.addEventListener("get_stats_html",function(n){n.callback(t.getStatsHTML(n.target))}),e.addEventListener("hover_in",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.hoverColor),i.userData.hoverActive=!0,t.hasHoveredObject=!0,t.hoveredObject=i,t.domEl.style.cursor="pointer"}),e.addEventListener("hover_out",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.color),i.userData.hoverActive=!1,t.hasHoveredObject=!1,t.hoveredObject=void 0,t.domEl.style.cursor="auto"}),e.addEventListener("set_active",function(n){n.target.material.color.setHex(t.activeColor)}),e.addEventListener("set_deactive",function(n){n.target.material.color.setHex(t.color)}),e.addEventListener("discard_changes",function(n){n.target.userData.unsaved=void 0}),e.addEventListener("save",function(n){const i=n.target,s=n.callback;if(i.userData.unsaved!==void 0){const a=i.userData.unsaved;for(const l of Object.keys(a))i.userData.attributes[l]=a[l];i.userData.unsaved=void 0,i.userData.attributes.dateModified=Date.now()}t.author!==void 0&&(i.userData.attributes.author=t.author);const o=t.getVerticesFromObject(i,!0,3);i.userData.attributes.position=o,s!==void 0&&s(i)}),e.addEventListener("stage_save",function(n){const i=n.target,s=n.attribute,o=n.value;i.userData.unsaved===void 0&&(i.userData.unsaved={}),i.userData.unsaved[s]=o}),e.addEventListener("delete",function(n){t.delete(n.target)})}updateLabels(e,t){if(e.userData.labels===void 0)return;const n=e.geometry.attributes.position.array,i=e.geometry.attributes.position.count;let s,o,a;const l=t*3;let c;this.isClosed?c=(i-2)*3:c=(i-1)*3,t>0?s=new _(n[l-3],n[l-2],n[l-1]):this.isClosed&&t===0&&(s=new _(n[c+0],n[c+1],n[c+2])),o=new _(n[l+0],n[l+1],n[l+2]),l<c?a=new _(n[l+3],n[l+4],n[l+5]):this.isClosed&&l===c&&(a=new _(n[0],n[1],n[2]));const h=function(g,y){const m=Math.sqrt((y.x-g.x)*(y.x-g.x)+(y.y-g.y)*(y.y-g.y)),p=y.z-g.z,S=g.distanceTo(y),x=g.clone();return x.lerp(y,.5),{dxy:m,dz:p,dist:S,mid:x}};let d,u,f,v;if(s!==void 0){let g;this.isClosed&&t===0?g=i-2:g=t-1;const y=h(s,o);d=e.userData.labelOffsets[g],u=e.userData.labels[g],f=e.userData.labelLines[g],v=f.geometry.attributes.position.array,v[0]=y.mid.x,v[1]=y.mid.y,v[2]=y.mid.z,v[3]=y.mid.x+d.x,v[4]=y.mid.y+d.y,v[5]=y.mid.z+d.z,f.geometry.attributes.position.needsUpdate=!0;const m="Dist: "+y.dist.toFixed(3)+"   dXY: "+y.dxy.toFixed(3)+"  dZ: "+y.dz.toFixed(3);u.setText(m),u.position.copy(y.mid),u.position.add(d)}if(a!==void 0){const g=h(o,a);d=e.userData.labelOffsets[t],u=e.userData.labels[t],f=e.userData.labelLines[t],v=f.geometry.attributes.position.array,v[0]=g.mid.x,v[1]=g.mid.y,v[2]=g.mid.z,v[3]=g.mid.x+d.x,v[4]=g.mid.y+d.y,v[5]=g.mid.z+d.z,f.geometry.attributes.position.needsUpdate=!0;const y="Dist: "+g.dist.toFixed(3)+"   dXY: "+g.dxy.toFixed(3)+"  dZ: "+g.dz.toFixed(3);u.setText(y),u.position.copy(g.mid),u.position.add(d)}}addLabel(e,t,n,i){i=i||"X: "+e.position.x.toFixed(3)+"  Y: "+e.position.y.toFixed(3)+"  Z: "+e.position.z.toFixed(3),n=n||new _(0,0,0);const s=new Gr;s.position.copy(t),s.position.add(n);const o=new D(this.color);s.borderColor={r:o.r*255,g:o.g*255,b:o.b*255,a:1},s.backgroundColor={r:o.r*255,g:o.g*255,b:o.b*255,a:1},s.textColor={r:255,g:255,b:255,a:1},s.setText(i),e.userData.labels===void 0&&(e.userData.labelOffsets=[],e.userData.labelLines=[],e.userData.labels=[]);const a=e.userData.labels.length;e.userData.labelOffsets.push(n),e.userData.labels.push(s);const l=new ze,c=new Bt({color:this.color}),h=new Float32Array(2*3);l.setAttribute("position",new Ue(h,3)),e.userData.labelLines.push(new On(l,c));const d=e.userData.labelLines[a].geometry.attributes.position.array;d[0]=t.x,d[1]=t.y,d[2]=t.z,d[3]=s.position.x,d[4]=s.position.y,d[5]=s.position.z,this.showLabelsActive&&(this.groupLabels.add(e.userData.labels[a]),this.groupLabels.add(e.userData.labelLines[a]))}hideLabel(e,t){this.groupLabels.remove(e.userData.labels[t]),this.groupLabels.remove(e.userData.labelLines[t])}showLabel(e,t){this.groupLabels.add(e.userData.labels[t]),this.groupLabels.add(e.userData.labelLines[t])}add(e,t,n){const i=e.length;if(i<2){console.warn("Lines.add: requires at least 2 vertices.",i);return}t=t||{};const s=t.geometry||new ze,o=t.material||this.getMaterial(),a=t.attributes||{},l=t.isNew||!1,c=t.isVector||!1,h=t.isLetter||!1,d=t.colors||[],u=t.indexes||[];let f;f=new Float32Array(i*3),s.setAttribute("position",new Ue(f,3));const v=this.index;let g;c===!0?(h||s.setIndex(new Ue(new Uint32Array(u),1)),s.setAttribute("color",new Ue(new Float32Array(d),3)),g=new _s(s,o)):g=new On(s,o),g.userData.index=v,this.index++,g.userData.type=this.type,n!==void 0&&(g.userData.deleteActionCallback=n);const y=g.geometry.attributes.position.array;for(let m=0;m<i;m++){const p=m*3;if(y[p+0]=e[m].x,y[p+1]=e[m].y,y[p+2]=e[m].z,this.displayLabels&&m>0&&m<i){const S=new _(e[m-1].x,e[m-1].y,e[m-1].z),x=new _(e[m].x,e[m].y,e[m].z),w=Math.sqrt((x.x-S.x)*(x.x-S.x)+(x.y-S.y)*(x.y-S.y)),C=x.z-S.z,A=S.distanceTo(x);S.lerp(x,.5);const B="Dist: "+A.toFixed(3)+"   dXY: "+w.toFixed(3)+"  dZ: "+C.toFixed(3);this.addLabelsActive&&this.addLabel(g,S,new _(0,0,.5),B)}}g.userData.attributes=a,g.userData.isNew=l,(g.userData.attributes.dateCreated===void 0||g.userData.attributes.dateCreated===0)&&(g.userData.attributes.dateCreated=Date.now()),g.userData.hoverActive=!1,this.addListeners(g),this.group.add(g)}getObjectIndex(e){for(let t=0;t<this.group.children.length;t++)if(e===this.group.children[t])return t}deleteByLineIndex(e){const t=[];for(let n=0;n<this.group.children.length;n++){const i=this.group.children[n];i.userData.index===e&&t.push(i)}for(let n=0;n<t.length;n++)this.delete(t[n])}deleteAll(){const e=[];for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];e.push(n)}for(let t=0;t<e.length;t++)this.delete(e[t])}delete(e){if(e.userData.deleteActionCallback!==void 0&&e.userData.deleteActionCallback(e),e.userData.labels!==void 0)for(let t=0;t<e.userData.labels.length;t++)this.groupLabels.remove(e.userData.labels[t]),this.groupLabels.remove(e.userData.labelLines[t]);this.group.remove(e)}}class pd{constructor(e){this.scene=e.scene,this.sceneLabels=e.sceneLabels,this.domEl=e.domEl,this.referenceFrame=e.referenceFrame,this.mouse=e.mouse,this.camera=e.camera,this.pick=e.getMousePointcloudIntersection,this.math=new Ki,this.type="Point",this.group=new Pt,this.groupLabels=new Pt,this.scene.add(this.group),this.sceneLabels.add(this.groupLabels),this.color=12320768,this.hoverColor=4951343,this.activeColor=12320768,this.scale=1,this.dragOnPointCloud=!0,this.hasHoveredObject=!1,this.hoveredObject=void 0,this.addLabelsActive=!1,this.showLabelsActive=!1,this.geometry=new ii(1,32,32),this.events=new Kt,this.intersectPlane=void 0,this.raycaster=new Xi,this.intersects=void 0,this.author=void 0}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=void 0),this.hoveredObject&&(this.hoveredObject.material.dispose(),this.hoveredObject.geometry.dispose(),this.hoveredObject=void 0),this.pick=void 0,this.scene.remove(this.group),this.sceneLabels.remove(this.groupLabels)}reset(){for(let e=this.group.children.length-1;e>=0;e--)this.group.remove(this.group.children[e]);for(let e=this.groupLabels.children.length-1;e>=0;e--)this.group.remove(this.groupLabels.children[e])}getLast(){return this.group.children[this.getCount()-1]}getStatsHTML(e){const t=this.getStats(e),n=this.referenceFrame.toGeo(t);let i='<p style="padding-top: 0px;">POINT</p>';return i+='<p>X: <b class="pull-right">'+n.x.toFixed(3)+" m/ft</b><br/>",i+='Y: <b class="pull-right">'+n.y.toFixed(3)+" m/ft</b><br/>",i+='Z: <b class="pull-right">'+n.z.toFixed(3)+" m/ft</b><br/></p>",i}getStats(e){return e.position}getMinMax(){let e,t,n,i,s,o,a;e=t=n=Number.MAX_VALUE,i=s=o=Number.MIN_VALUE,a=this.getCount();for(let l=0;l<a;l++){const c=this.group.children[l];e=c.position.x<e?c.position.x:e,t=c.position.y<t?c.position.y:t,n=c.position.z<n?c.position.z:n,i=c.position.x>i?c.position.x:i,s=c.position.y>s?c.position.y:s,o=c.position.z>o?c.position.z:o}return{min:{x:e,y:t,z:n},max:{x:i,y:s,z:o}}}getVertices(){const e=[];for(let t=0;t<this.group.children.length;t++){const n=this.group.children[t];e.push({x:n.position.x,y:n.position.y,z:n.position.z})}return e}getIndex(e){for(let t=0;t<this.group.children.length;t++)if(this.group.children[t]===e)return t}getObjectByIndex(e){return this.group.children[e]}getCount(){return this.group.children.length}getHovered(){const e=this.getHoveredIndex();if(e!==void 0)return this.group.children[e]}getHoveredIndex(){if(!!this.hasHoveredObject){for(let e=0;e<this.group.children.length;e++)if(this.group.children[e].userData.hoverActive)return e}}getMaterial(){return new Zt({color:this.color,visible:!0})}addLabel(e,t,n){const i=this.referenceFrame.toGeo(e.position);n=n||"X: "+i.x.toFixed(3)+"  Y: "+i.y.toFixed(3)+"  Z: "+i.z.toFixed(3),t=t||new _(0,0,0);const s=new Gr;s.position.copy(e.position),s.position.add(t);const o=new D(this.color);s.borderColor={r:o.r*255,g:o.g*255,b:o.b*255,a:1},s.backgroundColor={r:o.r*255,g:o.g*255,b:o.b*255,a:1},s.textColor={r:255,g:255,b:255,a:1},s.setText(n),e.userData.labelOffset=t,e.userData.label=s;const a=new ze,l=new Bt({color:this.color}),c=new Float32Array(2*3);a.setAttribute("position",new Ue(c,3)),e.userData.labelLine=new On(a,l);const h=e.userData.labelLine.geometry.attributes.position.array;h[0]=e.position.x,h[1]=e.position.y,h[2]=e.position.z,h[3]=s.position.x,h[4]=s.position.y,h[5]=s.position.z,this.showLabelsActive&&(this.groupLabels.add(e.userData.label),this.groupLabels.add(e.userData.labelLine))}hideLabel(e){this.groupLabels.remove(e.userData.label),this.groupLabels.remove(e.userData.labelLine)}showLabel(e){this.groupLabels.add(e.userData.label),this.groupLabels.add(e.userData.labelLine)}updateLabel(e,t){const n=e.userData.label;if(n===void 0)return;const i=this.referenceFrame.toGeo(e.position);t=t||"X: "+i.x.toFixed(3)+"  Y: "+i.y.toFixed(3)+"  Z: "+i.z.toFixed(3),n.position.copy(e.position),n.position.add(e.userData.labelOffset),n.setText(t);const s=e.userData.labelLine.geometry.attributes.position.array;s[0]=e.position.x,s[1]=e.position.y,s[2]=e.position.z,s[3]=n.position.x,s[4]=n.position.y,s[5]=n.position.z,e.userData.labelLine.geometry.attributes.position.needsUpdate=!0}updatePosition(e){if(this.dragOnPointCloud){if(!this.pick)throw new Error("Points.updatePosition: Pick is not defined");const t=this.pick({screenPos:this.mouse});return t?(e.position.copy(t),this.updateLabel(e),t):void 0}else{if(this.intersects===void 0||this.intersects.length===0)return;const t=this.intersects[0].point;if(this.intersectPlane===void 0){const l=new _;this.intersectPlane=new Yt,this.camera.getWorldDirection(l),this.intersectPlane.setFromNormalAndCoplanarPoint(l,t)}const n=new _,i={x:this.mouse.x/this.domEl.clientWidth*2-1,y:-(this.mouse.y/this.domEl.clientHeight)*2+1};this.raycaster.setFromCamera(i,this.camera),this.raycaster.ray.intersectPlane(this.intersectPlane,n);const s=n.clone().sub(t);s.projectOnPlane(new _(0,0,1));const o=s.clone().normalize(),a=s.dot(o);return o.multiplyScalar(a),e.position.copy(o.add(t)),e.position}}addListeners(e){const t=this;e.addEventListener("get_stats_html",function(n){const i=n.target,s=t.getStatsHTML(i);n.callback(s)}),e.addEventListener("drag_start",function(n){t.events.dispatch("pointscene_disable_controls",void 0,t.domEl),t.domEl.style.cursor="move",t.intersects=n.intersects}),e.addEventListener("drag_end",function(n){t.events.dispatch("pointscene_enable_controls",void 0,t.domEl),t.domEl.style.cursor="auto",t.intersects=void 0,t.intersectPlane=void 0,n.target.userData.dragEndCallback!==void 0&&n.target.userData.dragEndCallback(n.target)}),e.addEventListener("drag",function(n){const i=n.target.position.clone(),s=t.updatePosition(n.target),o=n.target;o.userData.attributes.dateModified=Date.now(),t.author!==void 0&&(o.userData.attributes.author=t.author),o.userData.dragActionCallback!==void 0&&s!==void 0&&o.userData.dragActionCallback(o.userData.attributes,s,i)}),e.addEventListener("hover_in",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.hoverColor),i.userData.hoverActive=!0,t.hasHoveredObject=!0,t.hoveredObject=i,t.domEl.style.cursor="pointer"}),e.addEventListener("hover_out",function(n){const i=n.target;i.material.color.equals(new D(t.activeColor))||i.material.color.setHex(t.color),i.userData.hoverActive=!1,t.hasHoveredObject=!1,t.hoveredObject=void 0,t.domEl.style.cursor="auto"}),e.addEventListener("set_active",function(n){n.target.material.color.setHex(t.activeColor)}),e.addEventListener("set_deactive",function(n){n.target.material.color.setHex(t.color)}),e.addEventListener("discard_changes",function(n){n.target.userData.unsaved=void 0}),e.addEventListener("save",function(n){const i=n.target,s=n.callback;if(i.userData.unsaved!==void 0){const a=i.userData.unsaved;for(const l of Object.keys(a))i.userData.attributes[l]=a[l];i.userData.unsaved=void 0,i.userData.attributes.dateModified=Date.now()}t.author!==void 0&&(i.userData.attributes.author=t.author);const o=t.referenceFrame.toGeo(i.position);i.userData.attributes.position={},i.userData.attributes.position.x=o.x.toFixed(3),i.userData.attributes.position.y=o.y.toFixed(3),i.userData.attributes.position.z=o.z.toFixed(3),s!==void 0&&s(i)}),e.addEventListener("stage_save",function(n){const i=n.target,s=n.attribute,o=n.value;i.userData.unsaved===void 0&&(i.userData.unsaved={}),i.userData.unsaved[s]=o}),e.addEventListener("delete",function(n){t.delete(n.target)})}addPoint(e,t){const n=new ze;n.setAttribute("position",new Ue(new Float32Array(e),3)),n.setAttribute("color",new Ue(new Float32Array(t),3)),n.computeBoundingSphere(),n.computeBoundingBox();const i=new yr({size:.1}),s=new br(n,i);s.userData.attributes={},s.userData.attributes.dateCreated=Date.now(),s.userData.hoverActive=!1,this.addListeners(s),this.group.add(s)}add(e,t,n,i){t=t||{},e=e||new _;const s=t.material||this.getMaterial(),o=t.geometry||this.geometry,a=t.attributes||{},l=t.isNew,c=t.rotation||new _(-Math.PI/2,0,0),h=new $e(o,s);h.scale.set(this.scale,this.scale,this.scale),h.position.copy(e),h.rotation.set(c.x,c.y,c.z),h.userData.isNew=l,h.userData.hoverActive=!1,h.userData.type=this.type,h.userData.attributes=a,(a.dateCreated===void 0||a.dateCreated===0)&&(h.userData.attributes.dateCreated=Date.now()),this.addListeners(h),n!==void 0&&(h.userData.dragActionCallback=n),i!==void 0&&(h.userData.dragEndCallback=i),this.addLabelsActive&&this.addLabel(h,new _(0,0,1.5)),this.group.add(h)}deleteByLineIndex(e){const t=[];for(let n=0;n<this.group.children.length;n++){const i=this.group.children[n];i.userData.attributes.lineIndex!==void 0&&i.userData.attributes.lineIndex===e&&t.push(i)}for(let n=0;n<t.length;n++)this.delete(t[n])}deleteLastOfLine(){return this.group.children.pop(),this.group.children.length>0?this.group.children[this.group.children.length-1].position:null}delete(e){e.userData.label!==void 0&&(this.groupLabels.remove(e.userData.label),this.groupLabels.remove(e.userData.labelLine)),this.group.remove(e)}deleteAll(){const e=this.getCount();for(let t=e-1;t>=0;t--)this.delete(this.getObjectByIndex(t))}setPosition(e,t){this.group.children[e].position.copy(t)}hideAll(){this.group.children.forEach(function(e){e.material.visible=!1})}showAll(){this.group.children.forEach(function(e){e.material.visible=!0})}}var a_=Object.defineProperty,md=Object.getOwnPropertySymbols,l_=Object.prototype.hasOwnProperty,c_=Object.prototype.propertyIsEnumerable,gd=(r,e,t)=>e in r?a_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,vd=(r,e)=>{for(var t in e||(e={}))l_.call(e,t)&&gd(r,t,e[t]);if(md)for(var t of md(e))c_.call(e,t)&&gd(r,t,e[t]);return r};class Wr{constructor(e){this.scene=e.scene,this.sceneLabels=e.sceneLabels,this.domEl=e.domEl,this.mouse=e.mouse,this.camera=e.camera,this.controls=e.controls,this.referenceFrame=e.referenceFrame,this.screenHeight=this.domEl.clientHeight,this.onAddCallback=e.onAddCallback,this.onEditCallback=e.onEditCallback,this.onCancelCallback=e.onCancelCallback,this.disableCancelOnRightClick=!1,this.math=new Ki,this.events=new Kt,this.type="PointTool",this.points=new pd(e),this.requireCancel=!1,this.color=e.pointerColor||4951343,this.points.color=e.measurementColor||4951343,this.points.hoverColor=e.hoverColor||15886354,this.points.activeColor=e.activeColor||12320768,this.geometry=new ii(1,32,32),this.attributes={},this.pointer=void 0,this.mouseDownActive=!1,this.editActive=!1,this.hoverActive=!1,this.editAfterPlacing=!1,this.autoFollow=!1,this.autoFollowVector=void 0,this.lastLookAtPosition=void 0,this.numberOfpoints=0,this.insideActiveSection=!0,this.sphereModeActive=!1,this.addPointToolBinds(),this.addPointToolListeners(),this.binds(),this.addListeners()}dispose(){this.disposePoint(),this.removePointToolListeners(),this.pick=void 0}disposePoint(){this.pointerMesh&&(this.pointerMesh.material.dispose(),this.pointerMesh.geometry.dispose(),this.pointerMesh=void 0),this.pointer&&(this.pointer.material.dispose(),this.pointer.geometry.dispose(),this.pointer=void 0),this.geometry&&this.geometry.dispose(),this.points.dispose(),this.onAddCallback=void 0,this.onEditCallback=void 0,this.onCancelCallback=void 0}binds(){console.error("PointTool.binds: Binds needs to be inherited")}handleEndActiveTool(e){this.onCancel(e)}handleClearPoints(){this.clearAllPoints()}handleEnterSphereMode(){this.sphereModeActive=!0}handleExitSphereMode(){this.sphereModeActive=!1}handleActiveSphereChanged(){this.autoFollow&&this.lastLookAtPosition!==void 0&&this.camera.lookAt(this.lastLookAtPosition)}handleSetAutofollowMode(e){this.autoFollow=e.detail.value,this.events.dispatch("pointscene_tools_autofollow_mode_changed",{value:e.detail.value},this.domEl)}handleMouseUp(){this.mouseDownActive=!1}handleKeyDown(e){e.keyCode===27&&this.end()}handleUpdateInsideSection(e){this.insideActiveSection=e.detail.value}addPointToolBinds(){this.updatePointer=this.updatePointer.bind(this),this.onInteraction=this.onInteraction.bind(this),this.onCancel=this.onCancel.bind(this),this.handleActiveSphereChanged=this.handleActiveSphereChanged.bind(this),this.handleClearPoints=this.handleClearPoints.bind(this),this.handleEndActiveTool=this.handleEndActiveTool.bind(this),this.handleEnterSphereMode=this.handleEnterSphereMode.bind(this),this.handleExitSphereMode=this.handleExitSphereMode.bind(this),this.handleSetAutofollowMode=this.handleSetAutofollowMode.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleUpdateInsideSection=this.handleUpdateInsideSection.bind(this)}addPointToolListeners(){this.domEl.addEventListener("mousemove",this.updatePointer),this.domEl.addEventListener("pointscene_on_leftclick",this.onInteraction,!1),this.domEl.addEventListener("pointscene_on_rightclick",this.onCancel,!1),this.domEl.addEventListener("pointscene_end_active_tool",this.handleEndActiveTool,!1),this.domEl.addEventListener("pointscene_clear_all_points",this.handleClearPoints,!1),this.domEl.addEventListener("pointscene_enter_sphere_mode",this.handleEnterSphereMode,!1),this.domEl.addEventListener("pointscene_exit_sphere_mode",this.handleExitSphereMode,!1),this.domEl.addEventListener("pointscene_active_sphere_changed",this.handleActiveSphereChanged,!1),this.domEl.addEventListener("pointscene_set_tools_autofollow_mode",this.handleSetAutofollowMode,!1),this.domEl.addEventListener("mouseup",this.handleMouseUp,!1),this.domEl.addEventListener("keydown",this.handleKeyDown,!1),this.domEl.addEventListener("update_inside_active_section",this.handleUpdateInsideSection,!1)}removePointToolListeners(){this.domEl.removeEventListener("mousemove",this.updatePointer),this.domEl.removeEventListener("pointscene_on_leftclick",this.onInteraction,!1),this.domEl.removeEventListener("pointscene_on_rightclick",this.onCancel,!1),this.domEl.removeEventListener("pointscene_end_active_tool",this.handleEndActiveTool,!1),this.domEl.removeEventListener("pointscene_clear_all_points",this.handleClearPoints,!1),this.domEl.removeEventListener("pointscene_enter_sphere_mode",this.handleEnterSphereMode,!1),this.domEl.removeEventListener("pointscene_exit_sphere_mode",this.handleExitSphereMode,!1),this.domEl.removeEventListener("pointscene_active_sphere_changed",this.handleActiveSphereChanged,!1),this.domEl.removeEventListener("pointscene_set_tools_autofollow_mode",this.handleSetAutofollowMode,!1),this.domEl.removeEventListener("mouseup",this.handleMouseUp,!1),this.domEl.removeEventListener("keydown",this.handleKeyDown,!1),this.domEl.removeEventListener("update_inside_active_section",this.handleUpdateInsideSection,!1)}getAttributeArray(){const e=this.points.getCount(),t=[];for(let n=0;n<e;n++){const s=this.points.getObjectByIndex(n).userData.attributes;s.isNew!==void 0&&delete s.isNew,t.push(s)}return t}getVertices(){return this.points.getVertices()}onInteraction(){if(this.pointer!==void 0){const e=vd({},this.attributes);this.onAddCallback?this.onAddCallback(this,e):this.add(e)}else this.points.hoveredObject!==void 0&&(this.onEditCallback?this.onEditCallback(this):this.edit(this.points.hoveredObject))}onCancel(e){this.disableCancelOnRightClick||(this.onCancelCallback?this.onCancelCallback(this,e):this.end(!0))}addListeners(){console.error("PointTool.addListeners not implemented. Called by ",this.type)}populateAttributesFromSchema(e){this.attributes={};for(let t=0;t<e.length;t++){const n=e[t];this.attributes[n.name]=n.value}}getMaterial(e){return e=e||!1,new Zt({color:this.color,visible:!0,transparent:!0,opacity:.8,wireframe:e})}addLoaded(e,t){if(Array.isArray(e)){console.warn("PointTool.addLoaded: unsupported type array for base class");return}this.points.add(e,{geometry:this.geometry,material:this.getMaterial(),attributes:t,isNew:!1},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this))}updateAutoFollow(e){const t=this,n=function(s,o){const l=s.x-o.x,c=s.y-o.y,h=s.z-o.z;return Math.abs(l)>1e-5||Math.abs(c)>1e-5?!1:!(Math.abs(h)>1e-5)},i=function(s,o){const l=s.x-o.x,c=s.y-o.y,h=s.z-o.z;return!(Math.abs(l)>.5&&Math.abs(c)>.5&&Math.abs(h)>.5)};if(this.autoFollowVector===void 0&&!this.sphereModeActive)this.autoFollowVector=this.camera.position.clone().sub(e);else if(this.sphereModeActive)this.sphereModeActive&&(this.camera.lookAt(e),this.events.dispatch("pointscene_open_nearest_photo_sphere",{position:e},this.domEl));else{let s;i(this.camera.position,this.controls.target)&&this.numberOfpoints===1?s=e:s=this.controls.target;const o=this.camera.position.clone().sub(s);this.autoFollowVector&&!n(o,this.autoFollowVector)&&(this.autoFollowVector=o);const a=e.clone().add(this.autoFollowVector||new _);this.camera.position.copy(a),this.camera.lookAt(e),this.controls.target.copy(e),setTimeout(function(){t.updatePointer()},100)}this.lastLookAtPosition=e,this.numberOfpoints+=1}addNew(e){if(Array.isArray(e)){console.warn("PointTool.addNew: wrong type for base class",e);return}this.points.add(e,{geometry:this.geometry,material:this.getMaterial(),attributes:vd({},this.attributes),isNew:!0},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this)),this.finalize(),this.editLast()}dragActionCallback(e,t){throw new Error("PointTool: dragActionCallBack not implemented by base class "+e+" "+t)}dragEndCallback(e){throw new Error("PointTool: dragEndCallback not implemented for base class "+e)}add(e){if(this.pointer===void 0)return;if(!this.pick)throw new Error("PointTool.add: pick not defined");const t=this.pick({screenPos:this.mouse});if(t){if(this.events.dispatch("pointscene_is_inside_section",{pos:t},this.domEl),!this.insideActiveSection)return;this.points.add(t,{geometry:this.geometry,material:this.getMaterial(),attributes:e,isNew:!1},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this)),this.requireCancel||this.end(),this.autoFollow&&this.updateAutoFollow(t)}}save(){console.error("Pointscene.PointTool.save: Not implemented for base class. Called by",this.type)}edit(e){console.error("Pointscene.PointTool.edit: Not implemented for base class. Called by",this.type,e)}delete(e){this.points.delete(e)}clearAllPoints(){this.points.deleteAll()}updatePointerScale(){if(!this.pointer)return;const e=this.screenHeight,t=this.camera,n=t.position.distanceTo(this.pointer.position),i=Math.PI/180,s=t.fov*i,o=this.math.projectedRadius(1,s,n,e);let a=1;o>35?a=35/o:o<5&&(a=5/o),this.pointer.scale.set(a,a,a)}updatePointer(){if(this.pointer===void 0&&!this.editActive)return;if(!this.pick)throw new Error("PointTool.updatePointer: pick not defined");const e=this.pick({screenPos:this.mouse});if(e&&this.pointer){this.pointer.position.copy(e),this.updatePointerScale();const t=this.referenceFrame.toGeo(e);this.events.dispatch("pointscene_update_tooltip",{message:'POINT<hr style="padding:5px;margin:0px;" />X: '+t.x.toFixed(3)+"<br/>Y: "+t.y.toFixed(3)+"<br/>Z: "+t.z.toFixed(3),data:{posGeo:t}},this.domEl)}}getPointer(){if(this.pointerMesh===void 0){const e=new ii(1,16,16),t=new Zt({color:this.color,transparent:!0,opacity:.8,depthTest:!1,depthWrite:!1});this.pointerMesh=new $e(e,t),this.pointerMesh.renderOrder=Number.MAX_VALUE}return this.pointerMesh}editLast(){console.warn("Pointscene.PointTool.editLast: Not implemented. Called by",this.type)}start(){this.pointer===void 0&&(this.pointer=this.getPointer(),this.scene.add(this.pointer),this.events.dispatch("pointscene_tool_activated",{type:this.type},this.domEl))}end(e){this.pointer!==void 0&&(e=e||!1,this.scene.remove(this.pointer),this.pointer=void 0,this.editAfterPlacing&&!e&&this.editLast(),this.finalize(),this.autoFollowVector=void 0,this.numberOfpoints=0,this.events.dispatch("pointscene_tool_deactivated",void 0,this.domEl))}finalize(){throw new Error("PointTool.finalize not implemented for base class")}}var h_=Object.defineProperty,yd=Object.getOwnPropertySymbols,d_=Object.prototype.hasOwnProperty,u_=Object.prototype.propertyIsEnumerable,_d=(r,e,t)=>e in r?h_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Fa=(r,e)=>{for(var t in e||(e={}))d_.call(e,t)&&_d(r,t,e[t]);if(yd)for(var t of yd(e))u_.call(e,t)&&_d(r,t,e[t]);return r};class Xr extends Wr{constructor(e){super(e);this.disablePointerLine=e.disablePointerLine||!1,this.lines=new fd(e),this.lines.color=e.lineColor||4951343,this.lines.hoverColor=e.lineHoverColor||15886354,this.lines.activeColor=e.activeLineColor||12320768,this.requireCancel=!0,this.points.scale=.2,this.lines.isClosed=!1,this.type="LineTool",this.geometry=new ei(1,1,1),this.group=new Pt,this.activeLine=void 0,this.activePointCnt=0,this.maxPoints=5e3,this.insideActiveSection=!0,this.addLineToolBinds(),this.addLineToolListeners()}dispose(){this.disposePoint(),this.disposeLine(),this.removeLineToolListeners(),this.removePointToolListeners()}disposeLine(){this.activeLine&&(this.activeLine.material.dispose(),this.activeLine.geometry.dispose()),this.lines.dispose()}binds(){console.error("LineTool.binds: Not implemented by",this.type)}handleClearLines(){this.clearAllLines()}addLineToolBinds(){this.undo=this.undo.bind(this),this.handleClearLines=this.handleClearLines.bind(this)}addLineToolListeners(){this.domEl.addEventListener("pointscene_undo_annotation",this.undo,!1),this.domEl.addEventListener("pointscene_clear_all_lines",this.handleClearLines,!1)}removeLineToolListeners(){this.domEl.removeEventListener("pointscene_undo_annotation",this.undo,!1),this.domEl.removeEventListener("pointscene_clear_all_lines",this.handleClearLines,!1),this.removePointToolListeners()}addListeners(){console.error("LineTool.addListeners not implemented. Called by ",this.type)}getVertices(){return this.lines.getVertices()}undo(){if(this.activePointCnt>0){const e=this.getActiveLine();this.activePointCnt-=1,e.geometry.setDrawRange(0,this.activePointCnt+1),e.geometry.attributes.position.needsUpdate=!0,this.updatePointer(),this.points.deleteLastOfLine()}}getAttributeArray(){const e=this.lines.getCount(),t=[];for(let n=0;n<e;n++){const s=this.lines.getObjectByIndex(n).userData.attributes;s.isNew!==void 0&&delete s.isNew,t.push(s)}return t}updateLine(e,t,n){if(n>=this.maxPoints){this.end();return}let i=n*3;const s=e.geometry.attributes.position.array;s[i++]=t.x,s[i++]=t.y,s[i++]=t.z,this.lines.isClosed&&this.activePointCnt>1?(s[i++]=s[0],s[i++]=s[1],s[i++]=s[2],e.geometry.setDrawRange(0,n+2)):e.geometry.setDrawRange(0,n+1),e.geometry.attributes.position.needsUpdate=!0}getActiveLine(){if(this.activeLine===void 0){this.activePointCnt=0;const e=new ze,t=new Bt({color:this.color,linewidth:3,transparent:!1,depthTest:!1,depthWrite:!1}),n=new Float32Array(this.maxPoints*3);e.setAttribute("position",new Ue(n,3)),this.activeLine=new On(e,t),this.activeLine.renderOrder=Number.MAX_VALUE,this.sceneLabels.add(this.activeLine)}return this.activeLine}edit(e){console.error("LineTool.edit called by",this.type,e)}onInteraction(){if(this.pointer!==void 0){const e=Fa({},this.attributes);this.onAddCallback?this.onAddCallback(this,e):this.add()}else if(this.lines.hoveredObject!==void 0)this.onEditCallback?this.onEditCallback(this,this.lines.hoveredObject):this.edit(this.lines.hoveredObject);else if(this.points.hoveredObject!==void 0){const e=this.points.hoveredObject.userData.attributes.lineIndex;this.onEditCallback?this.onEditCallback(this,this.lines.getObjectByLineIndex(e)):this.edit(this.lines.getObjectByLineIndex(e))}}updatePointer(){if(this.pointer===void 0&&!this.editActive)return;if(!this.pick)throw new Error("LineTool.updatePointer: pick is not defined");const e=this.pick({screenPos:this.mouse});if(e){if(this.activePointCnt>0&&this.activeLine){const t=this.activeLine.geometry.attributes.position.array;let n=this.activePointCnt;n*=3;const i=new _(t[n-3],t[n-2],t[n-1]),s=new _(t[n+0],t[n+1],t[n+2]),o=Math.sqrt((s.x-i.x)*(s.x-i.x)+(s.y-i.y)*(s.y-i.y)),a=s.z-i.z;if(s.x!==0&&s.y!==0&&s.z!==0){const l=i.distanceTo(s);if(l>0){const c=this.referenceFrame.toGeo(e);this.events.dispatch("pointscene_update_tooltip",{message:'DISTANCE<hr style="padding:5px;margin:0px;" />dXY: '+o.toFixed(3)+"<br/>dZ: "+a.toFixed(3)+'<hr style="padding:5px;margin:0px;" />Dist: '+l.toFixed(3)+'<hr style="padding:5px;margin:0px;" />X: '+c.x.toFixed(3)+"<br/>Y: "+c.y.toFixed(3)+"<br/>Z: "+c.z.toFixed(3),data:{posGeo:c,pos:e,dxy:o,dz:a,length:l}},this.domEl)}}}if(this.pointer&&(this.pointer.position.copy(e),this.updatePointerScale()),!this.disablePointerLine){const t=this.getActiveLine();this.updateLine(t,e,this.activePointCnt)}}}deleteActionCallback(e){this.points.deleteByLineIndex(e.userData.index)}dragActionCallback(e,t){this.lines.updatePositionAtLineIndex(e.lineIndex,e.vertexIndex,t)}dragEndCallback(e){console.warn("LineTool: dragEndCallback triggered",e)}addLoaded(e,t){const n=[];for(let s=0;s<e.length;s++){const o={};o.lineIndex=this.lines.getIndex(),o.vertexIndex=s;const a=e[s];n.push(a),this.points.add(new _(a.x,a.y,a.z),{geometry:this.geometry,material:this.getMaterial(),attributes:o,isNew:!1},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this))}this.lines.isClosed&&n.push(e[0]);const i=t;i.isNew=!1,this.lines.add(n,{attributes:i},this.deleteActionCallback.bind(this))}addNew(e,t){t=t||!0;const n=[];for(let i=0;i<e.length;i++){const s={};s.lineIndex=this.lines.getIndex(),s.vertexIndex=i;let o;t?(o=this.referenceFrame.toScene(e[i]),e[i]=o):o=e[i],n.push(o),this.points.add(new _(o.x,o.y,o.z),{geometry:this.geometry,material:this.getMaterial(),attributes:s,isNew:!0},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this))}this.lines.isClosed&&n.push(e[0]),this.lines.add(n,{attributes:Fa({},this.attributes)},this.deleteActionCallback.bind(this)),this.runFinalizeHooks()}add(e){if(this.pointer===void 0)return;if(!this.pick)throw new Error("LineTool.add: pick is not defined");const t=this.pick({screenPos:this.mouse});if(t){if(this.events.dispatch("pointscene_is_inside_section",{pos:t},this.domEl),!this.insideActiveSection)return;const n={};n.lineIndex=this.lines.getIndex(),n.vertexIndex=this.activePointCnt,this.points.add(t,{geometry:this.geometry,material:this.getMaterial(),attributes:n,isNew:!1},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this));const i=this.getActiveLine();this.updateLine(i,t,this.activePointCnt),this.activePointCnt++,this.autoFollow&&this.updateAutoFollow(t)}}clearAllLines(){this.lines!==void 0&&this.lines.deleteAll()}dispatchEnd(){throw new Error("LineTool.dispatchEnd: not implemented for base class")}finalize(){if(this.activeLine===void 0){this.dispatchEnd();return}if(this.activeLine.geometry.setDrawRange(0,this.activePointCnt),this.activePointCnt<2){this.activePointCnt=0,this.points.deleteByLineIndex(this.lines.getIndex()),this.activeLine.geometry.setDrawRange(0,0),this.dispatchEnd();return}if(this.lines.isClosed&&this.activePointCnt<3){this.activePointCnt=0,this.points.deleteByLineIndex(this.lines.getIndex()),this.activeLine.geometry.setDrawRange(0,0),this.dispatchEnd();return}const e=[],t=this.activeLine.geometry.attributes.position.array;for(let n=0;n<this.activePointCnt;n++){const i=n*3;e.push({x:t[i+0],y:t[i+1],z:t[i+2]})}this.lines.isClosed&&e.push({x:t[0],y:t[1],z:t[2]}),this.lines.add(e,{attributes:Fa({},this.attributes)},this.deleteActionCallback.bind(this)),this.activePointCnt=0,this.activeLine.geometry.setDrawRange(0,0),this.runFinalizeHooks(),this.dispatchEnd()}runFinalizeHooks(){console.error("LineTool.runFinalizeHooks not implemented. Called by",this.type)}}var f_=Object.defineProperty,xd=Object.getOwnPropertySymbols,p_=Object.prototype.hasOwnProperty,m_=Object.prototype.propertyIsEnumerable,bd=(r,e,t)=>e in r?f_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,wd=(r,e)=>{for(var t in e||(e={}))p_.call(e,t)&&bd(r,t,e[t]);if(xd)for(var t of xd(e))m_.call(e,t)&&bd(r,t,e[t]);return r};class Md extends Xr{constructor(e){super(e);this.polygons=new ud(e),this.polygons.color=e.polygonColor||4951343,this.polygons.hoverColor=e.polygonHoverColor||15886354,this.polygons.activeColor=e.activePolygonColor||12320768,this.type="PolygonTool",this.lines.isClosed=!0,this.addPolygonToolBinds(),this.addPolygonToolListeners()}dispose(){this.pick=void 0,this.disposePoint(),this.disposeLine(),this.disposePolygon(),this.removeLineToolListeners(),this.removePointToolListeners(),this.removePolygonToolListeners()}disposePolygon(){this.polygons.dispose()}binds(){console.error("PolygonTool.binds: Not implemented by",this.type)}handleClearLines(){this.clearAllPolygons()}addPolygonToolBinds(){this.handleClearLines=this.handleClearLines.bind(this)}addPolygonToolListeners(){this.domEl.addEventListener("pointscene_clear_all_lines",this.handleClearLines,!1)}removePolygonToolListeners(){this.domEl.removeEventListener("pointscene_clear_all_lines",this.handleClearLines,!1),this.removeLineToolListeners()}addListeners(){console.error("PolygonTool.addListeners not implemented. Called by ",this.type)}edit(e){console.error("PolygontTool.edit not implemented for base class. Called by",this.type,e)}getAttributeArray(){const e=this.polygons.getCount(),t=[];for(let n=0;n<e;n++){const s=this.polygons.getObjectByIndex(n).userData.attributes;s.isNew!==void 0&&delete s.isNew,t.push(s)}return t}onInteraction(){if(this.pointer!==void 0){const e=wd({},this.attributes);this.onAddCallback?this.onAddCallback(this,e):this.add()}else{let e;if(this.polygons.hoveredObject!==void 0)this.onEditCallback?this.onEditCallback(this,this.polygons.hoveredObject):this.edit(this.polygons.hoveredObject);else if(this.lines.hoveredObject!==void 0){if(e=this.polygons.getObjectByLineIndex(this.lines.hoveredObject.userData.index),!e)return;this.onEditCallback?this.onEditCallback(this,e):this.edit(e)}else if(this.points.hoveredObject!==void 0){if(e=this.polygons.getObjectByLineIndex(this.points.hoveredObject.userData.attributes.lineIndex),!e)return;this.onEditCallback?this.onEditCallback(this,e):this.edit(e)}}}addLoaded(e,t){const n=[];for(let s=0;s<e.length;s++){const o={};o.lineIndex=this.lines.getIndex(),o.vertexIndex=s;const a=e[s];n.push(a),this.points.add(new _(a.x,a.y,a.z),{geometry:this.geometry,material:this.getMaterial(),attributes:o,isNew:!1},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this))}this.lines.isClosed&&n.push(e[0]);const i=t;i.isNew=!1,this.lines.add(n,{attributes:i},this.deleteActionCallback.bind(this)),this.polygons.addFromObject(this.lines.getLast(),i,this.deleteActionCallback.bind(this))}addNew(e,t){if(e.length<3){console.error("PolygonTool.addNew: Error, not enough vertices");return}t=t||!0;const n=[];for(let s=0;s<e.length;s++){const o={};o.lineIndex=this.lines.getIndex(),o.vertexIndex=s;let a;t?(a=this.referenceFrame.toScene(e[s]),e[s]=a):a=e[s],n.push(a),this.points.add(new _(a.x,a.y,a.z),{geometry:this.geometry,material:this.getMaterial(),attributes:o,isNew:!0},this.dragActionCallback.bind(this),this.dragEndCallback.bind(this))}n.push(e[0]);const i={};i.isNew=!1,this.lines.add(n,{attributes:i},this.deleteActionCallback.bind(this)),this.runFinalizeHooks()}clearAllPolygons(){this.polygons!==void 0&&this.polygons.deleteAll()}runFinalizeHooks(){const e=this.lines.getLast();this.polygons.addFromObject(e,wd({},this.attributes),this.deleteActionCallback.bind(this))}deleteActionCallback(e){const t=e.userData.lineIndex;this.points.deleteByLineIndex(t),this.lines.deleteByLineIndex(t)}dragActionCallback(e,t){this.lines.updatePositionAtLineIndex(e.lineIndex,e.vertexIndex,t),this.polygons.updatePositionAtLineIndex(e.lineIndex,e.vertexIndex,t)}getVertices(){return this.polygons.getVertices()}}class Sd extends Md{constructor(e){super(e);this.type="AreaMeasurement",this.points.scale=.1,this.polygons.addLabelsActive=!0,this.polygons.showLabelsActive=!0}dragEndCallback(){}edit(e){this.events.dispatch("pointscene_measurement_open_for_edit",{object:e},this.domEl)}handleAreaMeasurementStart(){this.start()}binds(){this.handleAreaMeasurementStart=this.handleAreaMeasurementStart.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_areameasurement_start",this.handleAreaMeasurementStart,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_areameasurement_start",this.handleAreaMeasurementStart,!1),this.removePolygonToolListeners()}dispatchEnd(){this.events.dispatch("pointscene_areameasurement_finalize",void 0,this.domEl)}}class Ed extends Xr{constructor(e){super(e);this.type="DistanceMeasurement",this.requireCancel=!0,this.editAfterPlacing=!1,this.points.addLabelsActive=!0,this.points.showLabelsActive=!0,this.points.scale=.1,this.lines.addLabelsActive=!0,this.lines.showLabelsActive=!0}dragEndCallback(){}runFinalizeHooks(){}edit(e){this.events.dispatch("pointscene_measurement_open_for_edit",{object:e},this.domEl)}handleDistanceMeasurementStart(){this.start()}handleDistanceMeasurementDelete(e){this.delete(e.detail.object)}binds(){this.handleDistanceMeasurementDelete=this.handleDistanceMeasurementDelete.bind(this),this.handleDistanceMeasurementStart=this.handleDistanceMeasurementStart.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_distancemeasurement_start",this.handleDistanceMeasurementStart,!1),this.domEl.addEventListener("pointscene_distancemeasurement_delete",this.handleDistanceMeasurementDelete,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_distancemeasurement_start",this.handleDistanceMeasurementStart,!1),this.domEl.removeEventListener("pointscene_distancemeasurement_delete",this.handleDistanceMeasurementDelete,!1),this.removeLineToolListeners()}dispatchEnd(){this.events.dispatch("pointscene_distancemeasurement_finalize",void 0,this.domEl)}}class Td extends Wr{constructor(e){super(e);this.type="PointMeasurement",this.requireCancel=!0,this.editAfterPlacing=!1,this.points.addLabelsActive=!0,this.points.showLabelsActive=!0,this.points.scale=.1}dragActionCallback(){}dragEndCallback(){}handlePointMeasurementStart(){this.start()}handlePointMeasurementDelete(e){this.delete(e.detail.object)}binds(){this.handlePointMeasurementStart=this.handlePointMeasurementStart.bind(this),this.handlePointMeasurementDelete=this.handlePointMeasurementDelete.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_pointmeasurement_start",this.handlePointMeasurementStart,!1),this.domEl.addEventListener("pointscene_pointmeasurement_delete",this.handlePointMeasurementDelete,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_pointmeasurement_start",this.handlePointMeasurementStart,!1),this.domEl.removeEventListener("pointscene_pointmeasurement_delete",this.handlePointMeasurementDelete,!1),this.removePointToolListeners()}finalize(){this.events.dispatch("pointscene_pointmeasurement_finalize",void 0,this.domEl)}save(){console.warn("PointMeasurement.save not implemented")}edit(e){this.events.dispatch("pointscene_measurement_open_for_edit",{object:e},this.domEl)}}class Ld{constructor(e){this.domEl=e.domEl,this.referenceFrame=e.referenceFrame,this.points=new Td(e),this.lines=new Ed(e),this.areas=new Sd(e),this.events=new Kt,this.binds(),this.addListeners()}dispose(){this.points.dispose(),this.lines.dispose(),this.areas.dispose(),this.removeListeners()}openExportDialog(){if(this.points.getVertices().length===0&&this.lines.getVertices().length===0&&this.areas.getVertices().length===0){this.events.dispatch("pointscene_open_confirm_dialog",{title:"Please place measurement first",options:[{type:"success",label:"OK",callback:function(){}}]},this.domEl);return}const e=this;(function(){e.events.dispatch("pointscene_open_confirm_dialog",{title:"Choose download format",options:[{type:"success",label:"DXF",callback:e.exportDXF.bind(e)},{type:"success",label:"TXT",callback:e.exportTXT.bind(e)}]},e.domEl)})()}handleMeasurementExport(){this.openExportDialog()}binds(){this.handleMeasurementExport=this.handleMeasurementExport.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_measurement_export",this.handleMeasurementExport,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_measurement_export",this.handleMeasurementExport,!1),this.points.removeListeners(),this.lines.removeListeners(),this.areas.removeListeners()}exportTXT(){let e="";const t=this.points.getVertices(),n=this.lines.getVertices(),i=this.areas.getVertices();let s,o,a;for(e+=`# POINTS
`,s=0;s<t.length;s++)a=this.referenceFrame.toGeo(t[s]),e+=a.x.toFixed(3)+" "+a.y.toFixed(3)+" "+a.z.toFixed(3)+`
`;for(e+=`# LINES
`,s=0;s<n.length;s++){const c=n[s];for(e+="# "+s+`
`,o=0;o<c.length;o++)a=this.referenceFrame.toGeo(c[o]),e+=a.x.toFixed(3)+" "+a.y.toFixed(3)+" "+a.z.toFixed(3)+`
`}for(e+=`# POLYGONS
`,s=0;s<i.length;s++){const c=i[s];for(e+="# "+s+`
`,o=0;o<c.length;o++)a=this.referenceFrame.toGeo(c[o]),e+=a.x.toFixed(3)+" "+a.y.toFixed(3)+" "+a.z.toFixed(3)+`
`}const l=new Blob([e],{type:"text/ascii;charset=utf-8;"});this.save(l,"txt")}exportDXF(){const e=new dd({referenceFrame:this.referenceFrame}),t=this.points.getVertices(),n=this.lines.getVertices(),i=this.areas.getVertices();e.setPoints(t),e.setLines(n),e.setPolygons(i);const s=e.getData();if(s===void 0){alert("Sorry, no data available for download.");return}const o=new Blob([s],{type:"text/ascii;charset=utf-8;"});this.save(o,"dxf")}save(e,t){const n=document.createElement("a"),i=URL.createObjectURL(e);n.setAttribute("href",i),n.setAttribute("download","Pointscene_measurements_"+Date.now()+"."+t),n.style.visibility="hidden",document.body.appendChild(n),n.click(),setTimeout(function(){document.body.removeChild(n)},1e3)}}class g_ extends tn{constructor(e,t){super();this.object=e,this.domElement=t!==void 0?t:document,this.enabled=!0,this.target=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:Zr.LEFT,ZOOM:Zr.MIDDLE,PAN:Zr.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=a.NONE},this.update=function(){const k=new _,E=new ct().setFromUnitVectors(e.up,new _(0,1,0)),M=E.clone().invert(),W=new _,K=new ct;return function(){const he=n.object.position;return k.copy(he).sub(n.target),k.applyQuaternion(E),h.setFromVector3(k),n.autoRotate&&l===a.NONE&&V(B()),h.theta+=d.theta,h.phi+=d.phi,h.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=u,h.radius=Math.max(n.minDistance,Math.min(n.maxDistance,h.radius)),n.target.add(f),k.setFromSpherical(h),k.applyQuaternion(M),he.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor):d.set(0,0,0),u=1,f.set(0,0,0),v||W.distanceToSquared(n.object.position)>c||8*(1-K.dot(n.object.quaternion))>c?(n.dispatchEvent(i),W.copy(n.object.position),K.copy(n.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){n.domElement&&(n.domElement.removeEventListener("contextmenu",Me,!1),n.domElement.removeEventListener("mousedown",Ae,!1),n.domElement.removeEventListener("wheel",Q,!1),n.domElement.removeEventListener("touchstart",se,!1),n.domElement.removeEventListener("touchend",fe,!1),n.domElement.removeEventListener("touchmove",_e,!1)),document.removeEventListener("mousemove",H,!1),document.removeEventListener("mouseup",j,!1),window.removeEventListener("keydown",oe,!1)};const n=this,i={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5};let l=a.NONE;const c=1e-6,h=new vh,d=new vh;let u=1;const f=new _;let v=!1;const g=new ee,y=new ee,m=new ee,p=new ee,S=new ee,x=new ee,w=new ee,C=new ee,A=new ee;function B(){return 2*Math.PI/60/60*n.autoRotateSpeed}function X(){return Math.pow(.95,n.zoomSpeed)}function V(k){d.theta-=k}function b(k){d.phi-=k}const L=function(){const k=new _;return function(M,W){k.setFromMatrixColumn(W,0),k.multiplyScalar(-M),f.add(k)}}(),R=function(){const k=new _;return function(M,W){k.setFromMatrixColumn(W,1),k.multiplyScalar(M),f.add(k)}}(),O=function(){const k=new _;return function(M,W){const K=n.domElement===document?n.domElement.body:n.domElement;if(Object.getPrototypeOf(n.object).isPerspectiveCamera){const ae=n.object.position;k.copy(ae).sub(n.target);let he=k.length();he*=Math.tan(n.object.fov/2*Math.PI/180),L(2*M*he/K.clientHeight,n.object.matrix),R(2*W*he/K.clientHeight,n.object.matrix)}else Object.getPrototypeOf(n.object).isOrthographicCamera?(L(M*(n.object.right-n.object.left)/n.object.zoom/K.clientWidth,n.object.matrix),R(W*(n.object.top-n.object.bottom)/n.object.zoom/K.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(k){Object.getPrototypeOf(n.object).isPerspectiveCamera?u/=k:Object.getPrototypeOf(n.object).isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(k){Object.getPrototypeOf(n.object).isPerspectiveCamera?u*=k:Object.getPrototypeOf(n.object).isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(k){g.set(k.clientX,k.clientY)}function F(k){w.set(k.clientX,k.clientY)}function Y(k){p.set(k.clientX,k.clientY)}function ie(k){y.set(k.clientX,k.clientY),m.subVectors(y,g);const E=n.domElement===document?n.domElement.body:n.domElement;!E||(V(2*Math.PI*m.x/E.clientWidth*n.rotateSpeed),b(2*Math.PI*m.y/E.clientHeight*n.rotateSpeed),g.copy(y),n.update())}function q(k){C.set(k.clientX,k.clientY),A.subVectors(C,w),A.y>0?I(X()):A.y<0&&N(X()),w.copy(C),n.update()}function ne(k){S.set(k.clientX,k.clientY),x.subVectors(S,p),O(x.x,x.y),p.copy(S),n.update()}function ve(k){k.deltaY<0?N(X()):k.deltaY>0&&I(X()),n.update()}function Ne(k){switch(k.keyCode){case n.keys.UP:O(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:O(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:O(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:O(-n.keyPanSpeed,0),n.update();break}}function be(k){g.set(k.touches[0].pageX,k.touches[0].pageY)}function J(k){const E=k.touches[0].pageX-k.touches[1].pageX,M=k.touches[0].pageY-k.touches[1].pageY,W=Math.sqrt(E*E+M*M);w.set(0,W)}function He(k){p.set(k.touches[0].pageX,k.touches[0].pageY)}function Ce(k){y.set(k.touches[0].pageX,k.touches[0].pageY),m.subVectors(y,g);const E=n.domElement===document?n.domElement.body:n.domElement;V(2*Math.PI*m.x/E.clientWidth*n.rotateSpeed),b(2*Math.PI*m.y/E.clientHeight*n.rotateSpeed),g.copy(y),n.update()}function me(k){const E=k.touches[0].pageX-k.touches[1].pageX,M=k.touches[0].pageY-k.touches[1].pageY,W=Math.sqrt(E*E+M*M);C.set(0,W),A.subVectors(C,w),A.y>0?N(X()):A.y<0&&I(X()),w.copy(C),n.update()}function ge(k){S.set(k.touches[0].pageX,k.touches[0].pageY),x.subVectors(S,p),O(x.x,x.y),p.copy(S),n.update()}function Ae(k){if(n.enabled!==!1){if(k.preventDefault(),k.button===n.mouseButtons.ORBIT){if(n.enableRotate===!1)return;U(k),l=a.ROTATE}else if(k.button===n.mouseButtons.ZOOM){if(n.enableZoom===!1)return;F(k),l=a.DOLLY}else if(k.button===n.mouseButtons.PAN){if(n.enablePan===!1)return;Y(k),l=a.PAN}l!==a.NONE&&(document.addEventListener("mousemove",H,!1),document.addEventListener("mouseup",j,!1),n.dispatchEvent(s))}}function H(k){if(n.enabled!==!1){if(k.preventDefault(),l===a.ROTATE){if(n.enableRotate===!1)return;ie(k)}else if(l===a.DOLLY){if(n.enableZoom===!1)return;q(k)}else if(l===a.PAN){if(n.enablePan===!1)return;ne(k)}}}function j(){n.enabled!==!1&&(document.removeEventListener("mousemove",H,!1),document.removeEventListener("mouseup",j,!1),n.dispatchEvent(o),l=a.NONE)}function Q(k){n.enabled===!1||n.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(k.preventDefault(),k.stopPropagation(),ve(k),n.dispatchEvent(s),n.dispatchEvent(o))}function oe(k){n.enabled===!1||n.enableKeys===!1||n.enablePan===!1||Ne(k)}function se(k){if(n.enabled!==!1){switch(k.touches.length){case 1:if(n.enableRotate===!1)return;be(k),l=a.TOUCH_ROTATE;break;case 2:if(n.enableZoom===!1)return;J(k),l=a.TOUCH_DOLLY;break;case 3:if(n.enablePan===!1)return;He(k),l=a.TOUCH_PAN;break;default:l=a.NONE}l!==a.NONE&&n.dispatchEvent(s)}}function _e(k){if(n.enabled!==!1)switch(k.preventDefault(),k.stopPropagation(),k.touches.length){case 1:if(n.enableRotate===!1||l!==a.TOUCH_ROTATE)return;Ce(k);break;case 2:if(n.enableZoom===!1||l!==a.TOUCH_DOLLY)return;me(k);break;case 3:if(n.enablePan===!1||l!==a.TOUCH_PAN)return;ge(k);break;default:l=a.NONE}}function fe(){n.enabled!==!1&&(n.dispatchEvent(o),l=a.NONE)}function Me(k){k.preventDefault()}n.domElement&&(n.domElement.addEventListener("contextmenu",Me,!1),n.domElement.addEventListener("mousedown",Ae,!1),n.domElement.addEventListener("wheel",Q,!1),n.domElement.addEventListener("touchstart",se,!1),n.domElement.addEventListener("touchend",fe,!1),n.domElement.addEventListener("touchmove",_e,!1)),window.addEventListener("keydown",oe,!1),this.update()}get center(){return console.warn("OrbitControls: .center has been renamed to .target"),this.target}get noZoom(){return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom}set noZoom(e){console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}get noRotate(){return console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate}set noRotate(e){console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}get noPan(){return console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan}set noPan(e){console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}get noKeys(){return console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys}set noKeys(e){console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}get staticMoving(){return console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping}set staticMoving(e){console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}get dynamicDampingFactor(){return console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor}set dynamicDampingFactor(e){console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}class Ad{constructor(e){this.camera=e.camera,this.domEl=e.domEl,this.mouse=e.mouse,this.getMousePointcloudIntersection=e.getMousePointcloudIntersection,this.flyTo=e.flyTo,this.controls=new g_(this.camera,this.domEl),this.controls.minDistance=10,this.orbitControls=this.controls,this.controlsEnabled=!0,this.keyboardEnabled=!0,this.focusInPointsceneView=!0,this.mouseInPointscene=!0,this.keyboardMovementEnabled=!0,this.sphereControlsEnabled=!1,this.measurementActive=!1,this.previousState={},this.events=new Kt,this.state={moveRight:!1,moveLeft:!1,moveUp:!1,moveDown:!1,moveForward:!1,moveBackward:!1,step:1,stepNormal:1,stepFast:10},this.binds(),this.addListeners()}dispose(){this.controls.dispose(),this.removeListeners()}handleAutoFollow(e){e.detail.value?this.keyboardMovementEnabled=!1:this.keyboardMovementEnabled=!0}handleTouchStart(e){this.clickTimer===void 0?this.clickTimer=window.setTimeout(()=>{this.clickTimer=void 0},500):(e.preventDefault(),this.onDoubleTap(e),clearTimeout(this.clickTimer),this.clickTimer=void 0)}binds(){this.handleAutoFollow=this.handleAutoFollow.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onDblClick=this.onDblClick.bind(this),this.disableControls=this.disableControls.bind(this),this.enableControls=this.enableControls.bind(this),this.toggleSphereControls=this.toggleSphereControls.bind(this),this.onMouseWheel=this.onMouseWheel.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_set_tools_autofollow_mode",this.handleAutoFollow,!1),window.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("keyup",this.onKeyUp,!1),this.domEl.addEventListener("dblclick",this.onDblClick,!1),this.domEl.addEventListener("pointscene_disable_controls",this.disableControls,!1),this.domEl.addEventListener("pointscene_enable_controls",this.enableControls,!1),this.domEl.addEventListener("pointscene_toggle_sphere_controls",this.toggleSphereControls,!1),this.domEl.addEventListener("wheel",this.onMouseWheel,!1),this.domEl.addEventListener("mousewheel",this.onMouseWheel,!1),this.domEl.addEventListener("DOMMouseScroll",this.onMouseWheel,!1),this.domEl.addEventListener("touchstart",this.handleTouchStart,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_set_tools_autofollow_mode",this.handleAutoFollow,!1),window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("keyup",this.onKeyUp,!1),this.domEl.removeEventListener("dblclick",this.onDblClick,!1),this.domEl.removeEventListener("pointscene_disable_controls",this.disableControls,!1),this.domEl.removeEventListener("pointscene_enable_controls",this.enableControls,!1),this.domEl.removeEventListener("pointscene_toggle_sphere_controls",this.toggleSphereControls,!1),this.domEl.removeEventListener("wheel",this.onMouseWheel,!1),this.domEl.removeEventListener("mousewheel",this.onMouseWheel,!1),this.domEl.removeEventListener("DOMMouseScroll",this.onMouseWheel,!1),this.domEl.removeEventListener("touchstart",this.handleTouchStart,!1)}onMouseWheel(e){e.preventDefault(),this.sphereControlsEnabled&&(e.wheelDeltaY?this.camera.fov-=e.wheelDeltaY*.05:e.wheelDelta?this.camera.fov-=e.wheelDelta*.05:e.detail&&(this.camera.fov+=e.detail*1),this.camera.fov=Math.max(20,Math.min(100,this.camera.fov)),this.camera.updateProjectionMatrix()),this.events.dispatch("pointscene_camera_position_changed",{position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}},this.domEl)}toggleSphereControls(e){if(this.sphereControlsEnabled)this.controlsEnabled=!0,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.sphereControlsEnabled=!1,this.camera.fov=this.previousState.cameraFOV,this.camera.updateProjectionMatrix(),this.controls.target.copy(this.camera.position),this.camera.position.add(new _(5,5,10)),this.camera.lookAt(this.controls.target),this.events.dispatch("activate_pointcloud_mode"),this.controls.minDistance=10;else{this.controlsEnabled=!1,this.previousState.cameraPosition=e.detail.camera.position.clone();const t=e.detail.camera.fov;this.previousState.cameraFOV=t,this.previousState.controlsTarget=this.controls.target.clone(),this.controls.enablePan=!1,this.controls.enableZoom=!1,this.sphereControlsEnabled=!0,this.controls.minDistance=.01}}onDoubleTap(e){if(e.touches&&e.touches.length>1)return;const t=this.domEl.getBoundingClientRect();this.mouse.x=e.touches[0].clientX-t.left,this.mouse.y=e.touches[0].clientY-t.top,this.onDblClick()}updateControlResetPosition(){this.controls.target0.copy(this.controls.target),this.controls.position0.copy(this.controls.object.position),this.controls.zoom0=this.controls.object.zoom}enableControls(){this.controlsEnabled=!0,this.controls.enabled=!0}disableControls(){this.controlsEnabled=!1,this.controls.enabled=!1}update(e){if(!!this.controlsEnabled){if(this.updateMoveState(),!this.sphereControlsEnabled){const n=this.camera.position.clone(),i=this.controls.target.clone(),s=n.distanceTo(i),o=this.controls.minDistance;if(o>.01&&s<o+.01){const a=new _;a.subVectors(i,n).multiplyScalar(this.controls.minDistance).add(n),this.controls.target.copy(a)}}this.controls.update(e)}}setTargetDistance(e){const t=e||.1,n=this.camera.clone();n.translateZ(-1*t),this.controls.target.copy(n.position)}useOrbitControls(){this.controls&&(this.controls.enabled=!1),this.controls=this.orbitControls,this.controls.enabled=!0}updateMoveState(){if(!this.controlsEnabled)return;let e=new Ge;e=this.camera.clone(),e.position.copy(this.controls.target),this.state.moveLeft?e.translateX(-1*this.state.step):this.state.moveRight?e.translateX(this.state.step):this.state.moveUp?e.position.setZ(this.controls.target.z+this.state.step):this.state.moveDown?e.position.setZ(this.controls.target.z-this.state.step):this.state.moveForward?e.translateZ(-1*this.state.step):this.state.moveBackward&&e.translateZ(this.state.step),this.controls.target.copy(e.position),this.state.moveLeft?this.camera.translateX(-1*this.state.step):this.state.moveRight&&this.camera.translateX(this.state.step),this.state.moveUp?this.camera.position.z+=this.state.step:this.state.moveDown&&(this.camera.position.z-=this.state.step),this.state.moveForward?(this.camera.translateZ(-1*this.state.step),this.setTargetDistance(1)):this.state.moveBackward&&this.camera.translateZ(this.state.step)}disableMoveState(){this.state.moveLeft=!1,this.state.moveRight=!1,this.state.moveUp=!1,this.state.moveDown=!1,this.state.moveForward=!1,this.state.moveBackward=!1}onKeyDown(e){if(!!this.keyboardEnabled&&!!this.controlsEnabled&&!((!this.keyboardMovementEnabled||this.keyboardEnabled)&&(e.ctrlKey&&e.keyCode===90&&this.events.dispatch("pointscene_undo_annotation",{},this.domEl),!this.keyboardMovementEnabled)))switch(e.shiftKey?this.state.step=this.state.stepFast:this.state.step=this.state.stepNormal,e.keyCode){case 65:e.stopPropagation(),this.state.moveRight=!1,this.state.moveLeft=!0;break;case 68:e.stopPropagation(),this.state.moveLeft=!1,this.state.moveRight=!0;break;case 70:e.stopPropagation(),this.state.moveUp=!1,this.state.moveDown=!0;break;case 82:e.stopPropagation(),this.state.moveDown=!1,this.state.moveUp=!0;break;case 83:e.stopPropagation(),this.state.moveForward=!1,this.state.moveBackward=!0;break;case 87:e.stopPropagation(),this.state.moveBackward=!1,this.state.moveForward=!0;break}}onKeyUp(e){if(!!this.controlsEnabled){switch(e.keyCode){case 65:this.state.moveLeft=!1;break;case 68:this.state.moveRight=!1;break;case 70:this.state.moveDown=!1;break;case 82:this.state.moveUp=!1;break;case 83:this.state.moveBackward=!1;break;case 87:this.state.moveForward=!1;break}this.events.dispatch("pointscene_camera_position_changed",{position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}},this.domEl)}}onDblClick(){let e;if(typeof this.getMousePointcloudIntersection<"u"&&(e=this.getMousePointcloudIntersection({pickClipped:!0,screenPos:this.mouse})),!!e)if(this.controlsEnabled)this.flyTo(e,!1,1e3);else return}}class v_{constructor(e={}){this._delay=e.delay||200,this._lastUpdate=Date.now()}debounce(e,t={}){this._debounceId&&clearTimeout(this._debounceId),this._debounceId=setTimeout(()=>{e(t),this._debounceId=void 0},this._delay)}throttle(e,t={}){Date.now()-this._lastUpdate>this._delay&&(this._lastUpdate=Date.now(),e(t))}}var y_=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});class Cd{constructor(e){this.throttle=new v_,this.scene=e.scene,this.flyTo=e.flyTo,this.getCameraView=e.getCameraView,this.camera=e.camera,this.renderer=e.renderer,this.domEl=e.domEl,this.screenWidth=this.domEl.clientWidth,this.screenHeight=this.domEl.clientHeight,this.sceneStatic=new _n,this.scenePointCloud=new _n,this.scenePickable=new _n,this.sceneLabels=new _n,this.referenceFrame=typeof e.referenceFrame<"u"?e.referenceFrame:new Na,this.mouse=new ee,this.scene.background=new D(2109510),this.events=new Kt,this.raycastActive=!0,this.raycaster=new Xi,this.dragActive=!1,this.mouseDownActive=!1,this.touchDownActive=!1,this.binds(),this.addListeners(),this.controls=new Ad({camera:this.camera,mouse:this.mouse,domEl:this.domEl,flyTo:this.flyTo}),this.mouseDownRightStarted=Date.now(),this.mouseDownLeftStarted=Date.now(),this.disposeCount={geometry:0,material:0,pcoGeometry:0,points:0,nodes:0}}render(){this.freezeRenderAndUpdate||(this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.pointclouds&&this.pointclouds.render(),this.renderer.render(this.sceneStatic,this.camera),this.renderer.render(this.scenePickable,this.camera),this.renderer.render(this.sceneLabels,this.camera))}raycast(){const e=new ee(this.mouse.x/this.domEl.clientWidth*2-1,-(this.mouse.y/this.domEl.clientHeight)*2+1);return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObjects(this.scenePickable.children,!0)}disposeMaterial(e){e.map&&e.map.dispose(),e.lightMap&&e.lightMap.dispose(),e.bumpMap&&e.bumpMap.dispose(),e.normalMap&&e.normalMap.dispose(),e.specularMap&&e.specularMap.dispose(),e.envMap&&e.envMap.dispose(),e.dispose()}recursiveRemove(e){if(Array.isArray(e))for(const t of e)for(;t.children.length>0;)t.children[0].children.length>0&&this.recursiveRemove(t.children[0].children),t.remove(t.children[0]),this.disposeCount.nodes++;else for(;e.children.length>0;)e.children[0].children.length>0&&this.recursiveRemove(e.children[0].children),e.remove(e.children[0]),this.disposeCount.nodes++}disposeScene(e){e.traverse(t=>{t.geometry&&(t.geometry.dispose(),t.geometry=void 0,this.disposeCount.geometry++),t.pcoGeometry&&this.disposeCount.pcoGeometry++,t.type==="Points"&&this.disposeCount.points++,t.material&&(this.disposeMaterial(t.material),t.material=void 0,this.disposeCount.material++),t.texture&&(t.texture.dispose(),t.texture=void 0)}),this.recursiveRemove(e)}dispose(){this.freezeRenderAndUpdate=!0,this.disposeCount={geometry:0,material:0,pcoGeometry:0,points:0,nodes:0},this.hoveredElement&&(this.hoveredElement.material.dispose(),this.hoveredElement.geometry.dispose(),this.hoveredElement=void 0),this.controls&&(this.controls.dispose(),this.controls=void 0),this.pointclouds&&(this.pointclouds.dispose(),this.pointclouds=void 0),this.sectionTool&&(this.sectionTool.dispose(),this.sectionTool=void 0),this.measurementTool&&(this.measurementTool.dispose(),this.measurementTool=void 0),this.elevationRangePicker&&(this.elevationRangePicker.dispose(),this.elevationRangePicker=void 0),this.photoSpheres&&(this.photoSpheres.dispose(),this.photoSpheres=void 0),this.disposeScene(this.scene),this.disposeScene(this.scenePointCloud),this.disposeScene(this.scenePickable),this.disposeScene(this.sceneLabels),this.disposeScene(this.sceneStatic),this.renderer.dispose(),this.renderer.forceContextLoss(),this.removeListeners()}update(e){if(!this.freezeRenderAndUpdate&&(this.controls&&this.controls.update(e),this.pointclouds&&this.pointclouds.update(),this.photoSpheres&&this.photoSpheres.update(),this.sectionTool&&this.sectionTool.updateClipBoxes(),this.raycastActive&&!this.disableRaycast&&!this.mouseDownActive&&!this.touchDownActive)){const t=this.raycast();if(t.length>0){const n=t[0].object;this.throttle.throttle(function(){n.dispatchEvent({type:"intersect",uv:t[0].uv,point:t[0].point,distance:t[0].distance})}),this.hoveredElement!==n&&this.hoveredElement!==void 0&&this.hoveredElement.dispatchEvent({type:"hover_out"}),n.userData.hoverActive||n.dispatchEvent({type:"hover_in"}),this.hoveredElement=n}else this.hoveredElement!==void 0&&(this.hoveredElement.dispatchEvent({type:"hover_out"}),this.hoveredElement=void 0)}}enableMeasurementTool(){if(typeof this.pointclouds>"u")throw new Error("Measurement tools require point cloud module to be loaded first");if(typeof this.measurementTool>"u"){const e=this.pointclouds.pick.bind(this.pointclouds);return this.measurementTool=new Ld({camera:this.camera,domEl:this.domEl,mouse:this.mouse,referenceFrame:this.referenceFrame,scene:this.scenePickable,sceneLabels:this.sceneLabels,controls:this.controls.controls,getMousePointcloudIntersection:e}),!0}return!1}loadPhotoSpheres(e){return typeof this.photoSpheres>"u"&&(this.photoSpheres=new id({scene:this.scenePickable,sceneLabels:this.sceneLabels,domEl:this.domEl,mouse:this.mouse,camera:this.camera,controls:this.controls.controls,referenceFrame:this.referenceFrame})),this.photoSpheres.load(e),!0}loadPointcloud(e){return y_(this,arguments,function*(t,n={}){if(typeof this.pointclouds>"u"){if(this.pointclouds=new hd({scene:this.scenePointCloud,camera:this.camera,renderer:this.renderer,domEl:this.domEl,referenceFrame:this.referenceFrame}),typeof this.controls>"u")throw new Error("Controls is undefined");const i=this.pointclouds.pick.bind(this.pointclouds);this.controls.getMousePointcloudIntersection=i}return yield this.pointclouds.loadInternal(t,{xhrInit:n.xhrInit,queryString:n.queryString})})}updateMouseFromTouch(e){const t=this.domEl.getBoundingClientRect();this.mouse.x=e.touches[0].clientX-t.left,this.mouse.y=e.touches[0].clientY-t.top}handleMouseMove(e){const t=this.domEl.getBoundingClientRect();this.mouse.x=e.clientX-t.left,this.mouse.y=e.clientY-t.top,this.mouseDownActive&&this.hoveredElement&&(this.dragActive?this.hoveredElement.dispatchEvent({type:"drag"}):(this.hoveredElement.dispatchEvent({type:"drag_start",intersects:this.raycast()}),this.dragActive=!0))}handleTouchMove(e){this.updateMouseFromTouch(e),e.preventDefault(),this.touchDownActive&&this.hoveredElement&&(this.dragActive?this.hoveredElement.dispatchEvent({type:"drag"}):(this.hoveredElement.dispatchEvent({type:"drag_start",intersects:this.raycast()}),this.dragActive=!0))}handleTouchStart(e){this.updateMouseFromTouch(e),e.touches.length===1&&(this.touchDownActive=!0)}handleTouchEnd(){this.touchDownActive=!1,this.dragActive&&this.hoveredElement&&(this.hoveredElement.dispatchEvent({type:"drag_end"}),this.dragActive=!1)}handleMouseDown(e){switch(e.button){case 0:this.mouseDownActive=!0,this.mouseDownLeftStarted=Date.now();break;case 2:this.mouseDownRightStarted=Date.now();break}}handleMouseUp(e){switch(this.events.dispatch("pointscene_camera_position_changed",{position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}},this.domEl),e.button){case 0:Date.now()-this.mouseDownLeftStarted<300&&(this.dragActive=!1),this.mouseDownActive=!1,this.dragActive&&this.hoveredElement?(this.hoveredElement.dispatchEvent({type:"drag_end"}),this.dragActive=!1):this.raycastActive&&this.events.dispatch("pointscene_on_leftclick",{},this.domEl);break;case 2:this.mouseDownActive||Date.now()-this.mouseDownRightStarted<300&&this.events.dispatch("pointscene_on_rightclick",{},this.domEl);break}}handleActivateRaycast(){this.disableRaycast=!1,this.events.dispatch("pointscene_raycast_status_changed",{value:!0},this.domEl)}handleDeactivateRaycast(){this.disableRaycast=!0,this.events.dispatch("pointscene_raycast_status_changed",{value:!1},this.domEl)}handleLoadComplete(){}handleDisableControls(){this.raycastActive=!1}handleEnableControls(){this.raycastActive=!0}binds(){this.handleActivateRaycast=this.handleActivateRaycast.bind(this),this.handleDeactivateRaycast=this.handleDeactivateRaycast.bind(this),this.handleDisableControls=this.handleDisableControls.bind(this),this.handleEnableControls=this.handleEnableControls.bind(this),this.handleLoadComplete=this.handleLoadComplete.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this)}addListeners(){this.domEl.addEventListener("mousemove",this.handleMouseMove,!1),this.domEl.addEventListener("touchmove",this.handleTouchMove,!1),this.domEl.addEventListener("touchstart",this.handleTouchStart,!1),this.domEl.addEventListener("touchend",this.handleTouchEnd,!1),this.domEl.addEventListener("mousedown",this.handleMouseDown,!1),this.domEl.addEventListener("mouseup",this.handleMouseUp,!1),this.domEl.addEventListener("pointscene_activate_raycast",this.handleActivateRaycast,!1),this.domEl.addEventListener("pointscene_deactivate_raycast",this.handleDeactivateRaycast,!1),this.domEl.addEventListener("pointcloud_load_complete",this.handleLoadComplete,!1),this.domEl.addEventListener("pointscene_disable_controls",this.handleDisableControls,!1),this.domEl.addEventListener("pointscene_enable_controls",this.handleEnableControls,!1)}removeListeners(){this.domEl.removeEventListener("mousemove",this.handleMouseMove,!1),this.domEl.removeEventListener("touchmove",this.handleTouchMove,!1),this.domEl.removeEventListener("touchstart",this.handleTouchStart,!1),this.domEl.removeEventListener("touchend",this.handleTouchEnd,!1),this.domEl.removeEventListener("mousedown",this.handleMouseDown,!1),this.domEl.removeEventListener("mouseup",this.handleMouseUp,!1),this.domEl.removeEventListener("pointscene_activate_raycast",this.handleActivateRaycast,!1),this.domEl.removeEventListener("pointscene_deactivate_raycast",this.handleDeactivateRaycast,!1),this.domEl.removeEventListener("pointcloud_load_complete",this.handleLoadComplete,!1),this.domEl.removeEventListener("pointscene_disable_controls",this.handleDisableControls,!1),this.domEl.removeEventListener("pointscene_enable_controls",this.handleEnableControls,!1)}}var __=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});wy(!0);class Pd{constructor(e){this.showStats=!1,this.preserveDrawingBuffer=!1,this.domEl=e.domEl,this.showStats=e.showStats||!1,this.preserveDrawingBuffer=e.preserveDrawingBuffer||!1,this.scene=new _n,this.rangeNear=.1,this.rangeFar=1e4,this.fov=60,this.aspectRatio=this.domEl.clientWidth/this.domEl.clientHeight,this.camera=new At(this.fov,this.aspectRatio,this.rangeNear,this.rangeFar),this.camera.up.set(0,0,1),this.screenWidth=this.domEl.clientWidth,this.screenHeight=this.domEl.clientHeight,this.aspectRatio=this.screenWidth/this.screenHeight,this.renderer=new Je({premultipliedAlpha:!1,preserveDrawingBuffer:this.preserveDrawingBuffer}),this.renderer.setSize(this.screenWidth,this.screenHeight),this.renderer.localClippingEnabled=!0,this.renderer.autoClear=!1,this.domEl.appendChild(this.renderer.domElement),this.clock=new q0,this.freezeAnimate=!1,this.binds(),this.addListeners(),this.events=new Kt,this.showStats&&(this.stats=new jy,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),this.modules=new Cd({domEl:this.domEl,scene:this.scene,camera:this.camera,renderer:this.renderer,flyTo:this.flyTo.bind(this),getCameraView:this.getCameraView.bind(this),referenceFrame:e.referenceFrame}),this.start()}loadPhotoSpheres(e){if(typeof this.modules>"u")throw new Error("Modules is undefined");return this.modules.loadPhotoSpheres(e)}loadPointcloud(e){return __(this,arguments,function*(t,n={}){if(typeof this.modules>"u")throw new Error("Modules is undefined");return yield this.modules.loadPointcloud(t,n)})}reset(){console.warn("reset is deprecated. Use dispose()."),this.dispose()}dispose(){this.freezeAnimate=!0,this.modules&&(this.modules.dispose(),this.modules=void 0),this.renderer.dispose(),this.removeListeners()}onWindowResize(){const e=this.domEl.clientWidth,t=this.domEl.clientHeight;this.screenWidth=e,this.screenHeight=t,this.renderer.setSize(e,t),this.aspectRatio=this.screenWidth/this.screenHeight,this.camera.aspect=this.aspectRatio,this.camera.updateProjectionMatrix()}handleStart(){this.start()}handleFitTopView(){this.fitTopView()}handleRendererFocus(){this.renderer.domElement.focus()}binds(){this.handleFitTopView=this.handleFitTopView.bind(this),this.handleRendererFocus=this.handleRendererFocus.bind(this),this.handleStart=this.handleStart.bind(this),this.onWindowResize=this.onWindowResize.bind(this)}addListeners(){window.addEventListener("resize",this.onWindowResize,!1),this.renderer.domElement.addEventListener("mousedown",this.handleRendererFocus,!1),this.domEl.addEventListener("pointscene_start",this.handleStart,!1),this.domEl.addEventListener("pointscene_fit_top_view",this.handleFitTopView,!1)}removeListeners(){window.removeEventListener("resize",this.onWindowResize,!1),this.renderer.domElement.removeEventListener("mousedown",this.handleRendererFocus,!1),this.domEl.removeEventListener("pointscene_start",this.handleStart,!1),this.domEl.removeEventListener("pointscene_fit_top_view",this.handleFitTopView,!1),this.modules&&this.modules.removeListeners()}fitTopView(){if(!this.modules){console.error("Modules is undefined");return}const e=[];if(typeof this.modules.pointclouds<"u"){const l=this.modules.pointclouds.getBoundingBox();e.push(new _(l.min.x,l.min.y,l.min.z),new _(l.max.x,l.max.y,l.max.z))}const t=new ot;this.modules.scenePickable.children.forEach(l=>{t.expandByObject(l)}),this.modules.sceneLabels.children.forEach(l=>{t.expandByObject(l)}),this.modules.sceneStatic.children.forEach(l=>{t.expandByObject(l)}),isFinite(t.min.x)&&isFinite(t.min.y)&&isFinite(t.min.z)&&isFinite(t.max.x)&&isFinite(t.max.y)&&isFinite(t.max.z)&&e.push(new _(t.min.x,t.min.y,t.min.z),new _(t.max.x,t.max.y,t.max.z));const n=new ze().setFromPoints(e);n.computeBoundingSphere();const i=n.boundingSphere.center,a=n.boundingSphere.radius/2/(2*Math.tan(this.fov/2*.0174532925));this.camera.position.x=i.x,this.camera.position.y=i.y,this.camera.position.z=i.z+a,this.camera.lookAt(i),this.camera.rotation.set(-Math.PI/2,0,0),this.modules&&this.modules.controls&&this.modules.controls.controls.target.copy(i)}getCameraView(e){let t=!1;e===void 0&&(t=!0);const n={cam:new _,look:new _};return n.cam=this.camera.position.clone(),t&&this.modules&&this.modules.controls?n.look=this.modules.controls.controls.target.clone():n.look=this.camera.clone().translateZ(-1*e).position,n}getScreenShot(e){let t=!0;e!==void 0&&(t=e);try{this.render();const n=this.renderer.domElement.toDataURL("image/png");if(t){const i=document.createElement("a");return i.href=n,i.download="pointscene_"+Date.now()+".png",i.style.display="none",document.body.appendChild(i),i.click(),setTimeout(function(){document.body.removeChild(i)},1e3),!0}else return n}catch(n){return console.warn("Error saving screenshot",n),!1}}tweenCamera(e,t,n=1e3,i,s={keepCameraLevel:!1,levelOffset:0}){const o=this;s.keepCameraLevel&&(e.z=t.z+s.levelOffset,t.z=e.z),o.modules&&o.modules.controls&&o.modules.controls.controls.target.set(t.x,t.y,t.z),this._cameraTween&&Ji(this._cameraTween),this._cameraTween=new Wn(this.camera.position).to({x:e.x,y:e.y,z:e.z},n).easing(Cs.Quadratic.Out).on("update",()=>{this.events.dispatch("pointscene_camera_position_changed",{position:{x:e.x,y:e.y,z:e.z}},this.domEl)}).start()}flyTo(e,t,n,i,s,o){if(e==null)return;const a=t||!1,l=n||1e3,c=i||0,h=s||.9;if(this.modules&&!this.modules.referenceFrame.isSet()&&a){console.warn("flyTo: referenceFrame not set");return}a&&this.modules&&(e=this.modules.referenceFrame.toScene(e));const d=this.camera.position.clone().lerp(e.clone(),h);this.tweenCamera(d,e,l,c,o)}flyToDefined(e,t,n,i,s,o={keepCameraLevel:!1,levelOffset:0}){if(e===void 0||t===void 0)return;const a=n||!1,l=i||1e3,c=s;if(this.modules&&!this.modules.referenceFrame.isSet()&&a===!1){console.warn("flyToDefined: referenceFrame not set");return}a&&this.modules&&(e=this.modules.referenceFrame.toScene(e),t=this.modules.referenceFrame.toScene(t)),this.tweenCamera(e,t,l,c,o)}setClipMode(e){!this.modules||(this.modules.sectionTool&&this.modules.sectionTool.setClipMode(e),this.modules.pointclouds&&this.modules.pointclouds.setClipMode(e))}setClippingPlanes(e){this.renderer.clippingPlanes=e}render(){this.freezeAnimate||this.modules&&this.modules.render()}update(){if(this.freezeAnimate)return;const e=this.clock.getDelta();this.modules&&this.modules.update(e),Ca(Date.now())}animate(){this.stats&&this.stats.begin(),requestAnimationFrame(this.animate.bind(this)),this.update(),this.render(),this.stats&&this.stats.end()}start(){console.log("Pointscene.js",Zy,"(c) 3point Ltd"),this.animate()}}const Rd=r=>new Pd({domEl:r.domEl,showStats:r.showStats||!1,preserveDrawingBuffer:r.preserveDrawingBuffer||!1,referenceFrame:r.referenceFrame}),x_=(r,e,t,n,i)=>{const s=new ot;r.traverse(u=>{let f;u instanceof Sa?f=i.computeUntranslatedBoundingBox(u.boundingBox):f=new ot().setFromObject(u),s.union(f)});const o=new sn;s.getBoundingSphere(o);const a=o.center;n&&n.target&&n.target.copy(a);const h=o.radius/2/(2*Math.tan(t.fov/2*.0174532925));h>t.far&&console.warn("fitView: calucalted camera distance > camera.far. Features might get culled.");const d=e.clone().normalize().negate().multiplyScalar(h);a.add(d),t.position.copy(a)};class b_ extends Wr{constructor(e){super(e);this.color=16777215,this.maxPoints=2,this.type="ElevationRangePicker"}dragActionCallback(){}dragEndCallback(){}handleRangePickerStart(){this.events.dispatch("pointscene_update_tooltip",{message:'ELEVATION RANGE<hr style="padding:5px;margin:0px;" />Pick first point'},this.domEl),this.start()}dispose(){this.disposePoint(),this.removePointToolListeners(),this.removeListeners()}binds(){this.handleRangePickerStart=this.handleRangePickerStart.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_elevationrangepicker_start",this.handleRangePickerStart,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_elevationrangepicker_start",this.handleRangePickerStart,!1),this.removePointToolListeners()}add(e){if(this.pointer===void 0)return;if(!this.pick)throw new Error("ElevationRangePicker: pick is not defined");const t=this.pick({screenPos:this.mouse});t&&(this.points.add(t,{geometry:this.geometry,material:this.getMaterial(),attributes:e,isNew:!1}),this.points.getCount()===this.maxPoints&&this.end())}finalize(){this.points.deleteAll()}updatePointer(){if(this.pointer===void 0)return;if(!this.pick)throw new Error("ElevationRangePicker.updatePointer: pick is not define");const e=this.pick({screenPos:this.mouse});if(e){this.pointer.position.copy(e),this.updatePointerScale();const t=this.referenceFrame.toGeo(e);if(this.points.getCount()===0)this.events.dispatch("pointscene_update_tooltip",{message:'ELEVATION RANGE<hr style="padding:5px;margin:0px;" />Pick first point<br/>Z: '+t.z.toFixed(3)},this.domEl);else{let i=this.points.getObjectByIndex(0).position;i=this.referenceFrame.toGeo(i);const s=i.z<t.z?i.z:t.z,o=i.z>t.z?i.z:t.z;this.events.dispatch("pointscene_update_tooltip",{message:'ELEVATION RANGE<hr style="padding:5px;margin:0px;" />Pick second point<br/>Z: '+t.z.toFixed(3)},this.domEl),this.events.dispatch("pointscene_set_pointclouds_height_range",{range:[s,o]},this.domEl)}}}}var w_=Object.defineProperty,Dd=Object.getOwnPropertySymbols,M_=Object.prototype.hasOwnProperty,S_=Object.prototype.propertyIsEnumerable,Id=(r,e,t)=>e in r?w_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E_=(r,e)=>{for(var t in e||(e={}))M_.call(e,t)&&Id(r,t,e[t]);if(Dd)for(var t of Dd(e))S_.call(e,t)&&Id(r,t,e[t]);return r};class T_ extends Xr{constructor(e){super(e);this.maxPoints=2,this.domEl=e.domEl,this.mouse=e.mouse,this.camera=e.camera,this.referenceFrame=e.referenceFrame,this.math=new Ki,this.events=new Kt,this.width=4,this.height=10,this.type="SectionTool",this.geometry=new $o(1,2,32),this.points.scale=1,this.color=4951343,this.hoverColor=15886354,this.activeColor=12320768,this.lines.hoverColor=15886354,this.lines.activeColor=12320768,this.points.dragOnPointCloud=!1,this.points.hoverColor=15886354,this.points.activeColor=12320768,this.extrudeOpposite=!1,this.distanceLimitSquared=.01*.01,this.group=new Pt,this.scene.add(this.group),this.clipBoxesNeedUpdate=!1,this.clipBoxes=[],this.intersectPlane=void 0,this.raycaster=new Xi,this.intersects=void 0,this.clipMode=0,this.anchorStartPositions=[],this.startHeight=0,this.startWidth=0}dispose(){this.startMesh&&(this.startMesh.material.dispose(),this.startMesh.geometry.dispose()),this.endMesh&&(this.endMesh.material.dispose(),this.endMesh.geometry.dispose()),this.leftMesh&&(this.leftMesh.material.dispose(),this.leftMesh.geometry.dispose()),this.rightMesh&&(this.rightMesh.material.dispose(),this.rightMesh.geometry.dispose()),this.topMesh&&(this.topMesh.material.dispose(),this.topMesh.geometry.dispose()),this.bottomMesh&&(this.bottomMesh.material.dispose(),this.bottomMesh.geometry.dispose()),this.pick=void 0,this.geometry.dispose(),this.clipBoxes=[],this.scene.remove(this.group),this.disposePoint(),this.disposeLine(),this.removeListeners()}dispatchEnd(){this.events.dispatch("pointscene_section_tool_ended",void 0,this.domEl)}deleteActionCallback(){}dragActionCallback(){this.updateVertexPosition()}dragEndCallback(){}onInteraction(){if(this.pointer!==void 0){const e=E_({},this.attributes);this.add(e)}}runFinalizeHooks(){const e=this.lines.getLast(),t=this.lines.getVerticesFromObject(e);this.buildPlanes(t),e.dispatchEvent({type:"delete"})}getSegmentCount(){return this.topMesh?this.topMesh.geometry.index.count/6:0}getVertexCount(){return this.topMesh?this.topMesh.geometry.attributes.position.count:0}updateVertexPosition(){this.updateSidesFromAnchorPositions()}updateAnchorPositions(){const e=this.getSegmentCount();this.updateAnchorPosition(0);for(let t=1;t<e;t++)this.updateAnchorPosition(t);this.updateAnchorPosition(e)}updateAnchorPosition(e){if(!this.topMesh)return;const t=this.points.getObjectByIndex(e),n=this.getVertexCount();let i=0,s=n/2;e*=3,i*=3,s*=3;const o=new _(this.topMesh.geometry.attributes.position.array[i+e+0],this.topMesh.geometry.attributes.position.array[i+e+1],this.topMesh.geometry.attributes.position.array[i+e+2]),a=new _(this.topMesh.geometry.attributes.position.array[s+e+0],this.topMesh.geometry.attributes.position.array[s+e+1],this.topMesh.geometry.attributes.position.array[s+e+2]),l=this.math.getMiddlePoint(o,a);t.position.copy(l),t.geometry.computeBoundingSphere()}updateClipBoxes(){this.clipBoxesNeedUpdate&&this.events.dispatch("pointscene_set_clipboxes",{clipBoxes:this.getClipBoxes()},this.domEl)}getPotreeProfile(){let e;e={points:[],width:this.width};for(let t=0;t<this.points.getCount();t++){const n=this.points.getObjectByIndex(t).position;e.points.push(n)}return e}getClipBoxes(){if(!this.clipBoxesNeedUpdate)return this.clipBoxes;const e=function(l,c){const h=new _(l.x,l.y,l.z);return new _(c.x,c.y,c.z).sub(h).normalize()};this.clipBoxes=[];const t=this.points.getCount();let n;const i=new _(1,0,0);let s,o;const a=new ct;for(let l=1;l<t;l++){const c=new ye;s=this.points.getObjectByIndex(l-1).position,o=this.points.getObjectByIndex(l).position,n=e(s,o),a.setFromUnitVectors(i,n);let h,d,u,f,v;h=s.distanceTo(o),d=h,u=this.width,f=this.height;const g=new _(d,u,f);v=s.clone().lerp(o,.5),v.z-=this.height/2,c.compose(v,a,g),this.clipBoxes.push({box:new ot().applyMatrix4(c),inverse:c.clone().invert(),matrix:c,position:v})}return this.clipBoxesNeedUpdate=!1,this.clipBoxes}getVerticesFromObject(e){const t=e.geometry.attributes.position,n=t.count,i=t.array,s=[];for(let o=0;o<n;o++){const a=o*3;s.push(new _(i[a+0],i[a+1],i[a+2]))}return s}extrudePositions(e,t,n){const i=this,s=function(v,g){const y=v.userData,m=new _(y.facePseudoNormals[g+0],y.facePseudoNormals[g+1],y.facePseudoNormals[g+2]),p=new _(y.facePseudoNormals[g+6],y.facePseudoNormals[g+7],y.facePseudoNormals[g+8]);return m.add(p),m.normalize()},o=function(v){const g=i.points.getCount();for(let y=0;y<g;y++){const m=i.points.getObjectByIndex(y).position,p=i.anchorStartPositions[y];m.set(p.x+v.x,p.y+v.y,p.z+v.z)}},a=function(v,g){const y=i.points.getObjectByIndex(v).position,m=i.anchorStartPositions[v];y.set(m.x+g.x,m.y+g.y,m.z+g.z)},l=function(v,g,y,m){const p=(y-1)*6;a(0,g);for(let x=1;x<y;x++){const w=x*3,C=s(v,w);C.multiplyScalar(m),a(x,C)}g=new _(e.userData.facePseudoNormals[p+0],e.userData.facePseudoNormals[p+1],e.userData.facePseudoNormals[p+2]).clone().multiplyScalar(t),a(y,g)};n=n||!1;const c=e.userData.side,h=e.userData,u=new _(h.facePseudoNormals[0],h.facePseudoNormals[1],h.facePseudoNormals[2]).clone().multiplyScalar(t),f=this.getSegmentCount();c==="start"?(a(0,u),this.extrudeOpposite&&!n&&this.endMesh&&this.extrudePositions(this.endMesh,t,!0)):c==="end"?(a(f,u),this.extrudeOpposite&&!n&&this.startMesh&&this.extrudePositions(this.startMesh,t,!0)):c==="top"?(o(u),u.z>0?this.height=this.startHeight+u.length():this.height=this.startHeight-u.length(),this.extrudeOpposite&&!n&&this.bottomMesh&&this.extrudePositions(this.bottomMesh,t,!0)):c==="bottom"?(u.z<0?this.height=this.startHeight+u.length():this.height=this.startHeight-u.length(),this.extrudeOpposite&&!n&&this.topMesh&&this.extrudePositions(this.topMesh,t,!0)):c==="left"?(l(e,u,f,t),t>0?this.width=this.startWidth+u.length()*2:this.width=this.startWidth-u.length()*2,this.extrudeOpposite&&!n&&this.rightMesh&&this.extrudePositions(this.rightMesh,t,!0)):c==="right"&&(l(e,u,f,t),t<0?this.width=this.startWidth-u.length()*2:this.width=this.startWidth+u.length()*2,this.extrudeOpposite&&!n&&this.leftMesh&&this.extrudePositions(this.leftMesh,t,!0)),this.updateSidesFromAnchorPositions()}extrude(e){if(this.intersects===void 0||this.intersects.length===0)return;const t=this.intersects[0].point;if(!this.intersects[0].face||this.intersects[0].face.normal===void 0)return;let n=this.intersects[0].face.normal;const i=new _,s=new _;this.intersectPlane===void 0&&(this.intersectPlane=new Yt,this.camera.getWorldDirection(i),n=this.math.flipNormal(i,t,this.camera.position),this.intersectPlane.setFromNormalAndCoplanarPoint(n,t));const o={x:this.mouse.x/this.domEl.clientWidth*2-1,y:-(this.mouse.y/this.domEl.clientHeight)*2+1};this.raycaster.setFromCamera(o,this.camera),this.raycaster.ray.intersectPlane(this.intersectPlane,s);const a=s.clone().sub(t),l=n.dot(a);this.extrudePositions(e,l)}reset(){this.events.dispatch("update_inside_active_section",{value:!0},this.domEl),!(this.clipBoxes.length<1)&&(this.startMesh&&this.endMesh&&this.topMesh&&this.bottomMesh&&this.leftMesh&&this.rightMesh&&(this.group.remove(this.startMesh),this.group.remove(this.endMesh),this.group.remove(this.leftMesh),this.group.remove(this.rightMesh),this.group.remove(this.topMesh),this.group.remove(this.bottomMesh)),this.clipBoxes=[],this.clipBoxesNeedUpdate=!0,this.events.dispatch("pointscene_set_clipboxes",{clipBoxes:[]},this.domEl),this.points.deleteAll())}handleSectionToolStart(){this.reset(),this.start()}handleSectionToolReset(){this.reset()}handleIsInsideSection(e){const t=e.detail.pos;this.insideSection(t)}handleSetClipMode(e){this.clipMode=e.detail.clipMode}setClipMode(e){this.clipMode=e}binds(){this.handleSectionToolStart=this.handleSectionToolStart.bind(this),this.handleSectionToolReset=this.handleSectionToolReset.bind(this),this.handleIsInsideSection=this.handleIsInsideSection.bind(this),this.handleSetClipMode=this.handleSetClipMode.bind(this)}addListeners(){this.domEl.addEventListener("pointscene_sectiontool_start",this.handleSectionToolStart,!1),this.domEl.addEventListener("pointscene_sectiontool_reset",this.handleSectionToolReset,!1),this.domEl.addEventListener("pointscene_is_inside_section",this.handleIsInsideSection,!1),this.domEl.addEventListener("pointscene_set_clip_mode",this.handleSetClipMode,!1)}removeListeners(){this.domEl.removeEventListener("pointscene_sectiontool_start",this.handleSectionToolStart,!1),this.domEl.removeEventListener("pointscene_sectiontool_reset",this.handleSectionToolReset,!1),this.domEl.removeEventListener("pointscene_is_inside_section",this.handleIsInsideSection,!1),this.domEl.removeEventListener("pointscene_set_clip_mode",this.handleSetClipMode,!1),this.removeLineToolListeners(),this.removePointToolListeners()}addPlaneListeners(e,t){const n=this;e.userData.side=t,e.addEventListener("drag_start",function(i){n.updateStartPositions(),n.events.dispatch("pointscene_disable_controls",void 0,n.domEl),n.domEl.style.cursor="move",n.intersects=i.intersects}),e.addEventListener("drag_end",function(){n.events.dispatch("pointscene_enable_controls",void 0,n.domEl),n.domEl.style.cursor="auto",n.intersectPlane=void 0}),e.addEventListener("drag",function(i){const s=n.extrude(i.target),o=i.target;o.userData.dragActionCallback!==void 0&&s!==void 0&&o.userData.dragActionCallback(o.userData.attributes,s)}),e.addEventListener("hover_in",function(i){const s=i.target;s.material.color.equals(new D(n.activeColor))||s.material.color.setHex(n.hoverColor),s.userData.hoverActive=!0,n.domEl.style.cursor="pointer"}),e.addEventListener("hover_out",function(i){const s=i.target;s.material.color.equals(new D(n.activeColor))||s.material.color.setHex(n.color),s.userData.hoverActive=!1,n.domEl.style.cursor="auto"}),e.addEventListener("set_active",function(i){i.target.material.color.setHex(n.activeColor)}),e.addEventListener("set_deactive",function(i){i.target.material.color.setHex(n.color)}),e.addEventListener("delete",function(i){n.delete(i.target)})}insideSection(e){if(!this.bottomMesh||!this.topMesh)return;const t=this.getClipBoxes();let n,i,s;if(t.length>0&&this.clipMode===1){const o=this.bottomMesh.geometry.attributes.position.array;this.bottomMesh.geometry.attributes.position.array.length>3&&(s=this.bottomMesh.geometry.attributes.position.array[2]),this.topMesh.geometry.attributes.position.array.length>3&&(i=this.topMesh.geometry.attributes.position.array[2]);const a=[];for(let c=0;c<o.length;c+=3)a.push({x:o[c],y:o[c+1]});this.insidePoly({x:e.x,y:e.y,z:e.z},a,s,i)?n=!0:n=!1,this.events.dispatch("update_inside_active_section",{value:n},this.domEl)}}sortPolyByAngle(e){const t=this.findCenter(e);return this.findAngles(t,e),e.sort(function(n,i){return n.angle&&i.angle?n.angle>=i.angle?1:-1:0}),e}findCenter(e){let t=0,n=0,i=0;const s=e.length;for(i=0;i<s;i++)t+=e[i].x,n+=e[i].y;return{x:t/s,y:n/s}}findAngles(e,t){let n;const i=t.length;let s,o,a;for(n=0;n<i;n++)s=t[n],o=s.x-e.x,a=s.y-e.y,s.angle=Math.atan2(a,o)}insidePoly(e,t,n,i){t=this.sortPolyByAngle(t);const s=e.x,o=e.y,a=e.z;let l=!1;for(let c=0,h=t.length-1;c<t.length;h=c++){const d=t[c].x,u=t[c].y,f=t[h].x,v=t[h].y;u>o!=v>o&&s<(f-d)*(o-u)/(v-u)+d&&(l=!l)}return n!==void 0&&i!==void 0&&(a<n||a>i)&&(l=!1),l}getFootprintXY(e,t,n,i){i=i||void 0,i!==void 0&&(e.z=i,t.z=i);const s=new _(t.x-e.x,t.y-e.y,t.z-e.z),o=new _(0,0,1),a=s.clone().cross(o).normalize(),l=a.clone().negate(),c=a.clone().multiplyScalar(n),h=l.clone().multiplyScalar(n),d=c.clone().add(e),u=c.clone().add(t),f=h.clone().add(e),v=h.clone().add(t);return{p1l:f,p1r:d,p2l:v,p2r:u}}computeFacePseudoNormals(e){const t=e.userData,n=e.geometry.attributes.position.array,i=e.geometry.index.array.length/3,s=e.geometry.index.array,o=e.userData.side;t.facePseudoNormals=new Float32Array(i*3);for(let a=0;a<i;a++){if(o==="top"){t.facePseudoNormals[a*3+0]=0,t.facePseudoNormals[a*3+1]=0,t.facePseudoNormals[a*3+2]=1;continue}else if(o==="bottom"){t.facePseudoNormals[a*3+0]=0,t.facePseudoNormals[a*3+1]=0,t.facePseudoNormals[a*3+2]=-1;continue}const l=new _,c=new _,h=s[a*3+0],d=s[a*3+1],u=s[a*3+2],f=new _(n[h*3+0],n[h*3+1],n[h*3+2]),v=new _(n[d*3+0],n[d*3+1],n[d*3+2]),g=new _(n[u*3+0],n[u*3+1],n[u*3+2]);c.subVectors(g,v),l.subVectors(f,v),c.cross(l),c.projectOnPlane(new _(0,0,1)),c.normalize(),t.facePseudoNormals[a*3+0]=c.x,t.facePseudoNormals[a*3+1]=c.y,t.facePseudoNormals[a*3+2]=c.z}}updateStartPositions(){this.anchorStartPositions=[];const e=this.points.getCount();for(let i=0;i<e;i++){const o=this.points.getObjectByIndex(i).position.clone();this.anchorStartPositions.push(o)}const t=this.height;this.startHeight=t;const n=this.width;this.startWidth=n}checkShortSegments(){const e=function(g){return new _(g.x,g.y,g.z)};if(!this.bottomMesh)return;let t=this.getVerticesFromObject(this.bottomMesh);const i=t.length/2;let s,o,a,l;for(let g=1;g<i;g++)if(s=e(t[g-1]),o=e(t[g]),s.distanceToSquared(o)<this.distanceLimitSquared||(a=e(t[g+i-1]),l=e(t[g+i]),a.distanceToSquared(l)<this.distanceLimitSquared))return!0;if(!this.startMesh)return;t=this.getVerticesFromObject(this.startMesh);const c=t[0].z;if(t[1].z-c<Math.sqrt(this.distanceLimitSquared))return!0;const d=this.points.getObjectByIndex(0).position.clone(),u=this.points.getObjectByIndex(1).position.clone(),f=e(t[0]);return(f.x-d.x)*(u.y-d.y)-(f.y-d.y)*(u.x-d.x)>=0}checkIntersections(){if(this.getSegmentCount()<2)return!1;const e=function(y){return{x:y.x,y:y.y,z:y.z}};if(!this.bottomMesh)return;const t=this.getVerticesFromObject(this.bottomMesh),i=t.length/2;let s,o,a,l,c,h,d,u;const f=new _,v=new _;let g;for(let y=1;y<i;y++){s=e(t[y-1]),o=e(t[y]),c=e(t[y+i-1]),h=e(t[y+i]);for(let m=y;m<i-1;m++)if(a=e(t[m]),l=e(t[m+1]),d=e(t[m+i]),u=e(t[m+i+1]),m===y){if(f.set(o.x-s.x,o.y-s.y,0),v.set(l.x-a.x,l.y-a.y,0),g=f.angleTo(v),g<0&&(g*=-1),g>Math.PI-.393)return!0}else if(this.math.lineLineIntersection2D(s,o,a,l)||this.math.lineLineIntersection2D(c,h,d,u))return!0}return!1}updateSidesFromAnchorPositions(){if(!this.bottomMesh||!this.topMesh||!this.leftMesh||!this.rightMesh||!this.startMesh||!this.endMesh)return;const e=this.width/2,t=this.height/2,n=function(I,N){return new _(I[N].x,I[N].y,I[N].z)},i=function(I,N,U,F){F=F||new _,I[N+0]=U.x+F.x,I[N+1]=U.y+F.y,I[N+2]=U.z+F.z},s=function(I,N,U,F,Y,ie,q,ne){const ve=new _(q.x,q.y,q.z-t),Ne=new _(ne.x,ne.y,ne.z-t),be=new _(q.x,q.y,q.z+t),J=new _(ne.x,ne.y,ne.z+t);i(I,ie,ve),i(I,Y,Ne),i(N,Y,be),i(N,ie,J),i(U,Y,ve),i(U,ie,be),i(F,ie,Ne),i(F,Y,J)},o=function(I,N,U,F){F=F||!1;const Y=new _(N.x,N.y,N.z-t),ie=new _(U.x,U.y,U.z-t),q=new _(N.x,N.y,N.z+t),ne=new _(U.x,U.y,U.z+t);F?(i(I,3,Y),i(I,0,q),i(I,9,ie),i(I,6,ne)):(i(I,0,Y),i(I,3,q),i(I,6,ie),i(I,9,ne))},a=this.points.getCount(),l=[];for(let I=0;I<a;I++){const U=this.points.getObjectByIndex(I).position.clone();U.z-=t,l.push(U)}const c=l.length;let h,d,u,f,v,g,y;const m=this.bottomMesh,p=this.topMesh,S=this.leftMesh,x=this.rightMesh,w=this.startMesh,C=this.endMesh,A=m.geometry.attributes.position.array,B=p.geometry.attributes.position.array,X=S.geometry.attributes.position.array,V=x.geometry.attributes.position.array,b=w.geometry.attributes.position.array,L=C.geometry.attributes.position.array;h=n(l,0),d=n(l,1),f=this.getFootprintXY(h,d,e,h.z);let R=0,O=c*3+R;if(s(A,B,X,V,R,O,f.p1l,f.p1r),o(b,f.p1l,f.p1r,!1),c>2)for(let I=1;I<c-1;I++)h=n(l,I-1),d=n(l,I),u=n(l,I+1),R=I*3,O=c*3+R,f=this.getFootprintXY(h,d,e,h.z),v=this.getFootprintXY(d,u,e,h.z),g=this.math.getLineIntersectionXY(f.p1l,f.p2l,v.p1l,v.p2l),y=this.math.getLineIntersectionXY(f.p1r,f.p2r,v.p1r,v.p2r),g=g||f.p1l,y=y||f.p1r,g.z=d.z,y.z=d.z,s(A,B,X,V,R,O,g,y);h=n(l,c-2),d=n(l,c-1),f=this.getFootprintXY(h,d,e,h.z),R=(c-1)*3,O=c*3+R,s(A,B,X,V,R,O,f.p2l,f.p2r),o(L,f.p2l,f.p2r,!0),m.geometry.attributes.position.needsUpdate=!0,p.geometry.attributes.position.needsUpdate=!0,S.geometry.attributes.position.needsUpdate=!0,x.geometry.attributes.position.needsUpdate=!0,w.geometry.attributes.position.needsUpdate=!0,C.geometry.attributes.position.needsUpdate=!0,this.computeFacePseudoNormals(m),this.computeFacePseudoNormals(p),this.computeFacePseudoNormals(S),this.computeFacePseudoNormals(x),this.computeFacePseudoNormals(w),this.computeFacePseudoNormals(C),this.clipBoxesNeedUpdate=!0,m.geometry.computeBoundingSphere(),p.geometry.computeBoundingSphere(),S.geometry.computeBoundingSphere(),x.geometry.computeBoundingSphere(),w.geometry.computeBoundingSphere(),C.geometry.computeBoundingSphere()}buildPlanes(e){const t=this,n=this.width/2,i=this.height/2,s=function(j){let Q=999999999e-2,oe=-999999999e-2;for(let se=0;se<j.length;se++)Q=j[se].z<Q?j[se].z:Q,oe=j[se].z>oe?j[se].z:oe;return{min:Q,max:oe}},o=function(j,Q){return new _(j[Q].x,j[Q].y,j[Q].z)},a=function(j,Q,oe,se){return Q=Q||!1,oe=oe||t.color,se=se||.8,new Zt({color:oe,visible:!0,transparent:!0,opacity:se,side:j,wireframe:Q})},l=function(j,Q,oe,se){se=se||new _,j[Q+0]=oe.x+se.x,j[Q+1]=oe.y+se.y,j[Q+2]=oe.z+se.z},c=function(j,Q,oe,se,_e,fe,Me,k){const E=new _(Me.x,Me.y,Me.z-i),M=new _(k.x,k.y,k.z-i),W=new _(Me.x,Me.y,Me.z+i),K=new _(k.x,k.y,k.z+i);l(j,fe,E),l(j,_e,M),l(Q,_e,W),l(Q,fe,K),l(oe,_e,E),l(oe,fe,W),l(se,fe,M),l(se,_e,K)},h=function(j,Q,oe,se){se=se||!1;const _e=new _(Q.x,Q.y,Q.z-i),fe=new _(oe.x,oe.y,oe.z-i),Me=new _(Q.x,Q.y,Q.z+i),k=new _(oe.x,oe.y,oe.z+i);se?(l(j,3,_e),l(j,0,Me),l(j,9,fe),l(j,6,k)):(l(j,0,_e),l(j,3,Me),l(j,6,fe),l(j,9,k))},d=e.length;if(d<2){console.error("SectionTool.buildPlanes: Not enough vertices");return}const u=s(e);this.height=u.max-u.min>this.height?u.max-u.min:this.height;const f=u.min+this.height/2,v=new rn(d-1,1,d-1,1),g=new rn(d-1,1,d-1,1),y=new rn(d-1,1,d-1,1),m=new rn(d-1,1,d-1,1),p=4951343,S=4951343,x=a(it,!1,S,.4),w=a(it,!1,S,.4),C=a(it,!1,p,.8),A=a(it,!1,p,.8),B=new rn(1,1,1,1),X=new rn(1,1,1,1),V=a(it,!1,p,.8),b=a(it,!1,p,.8),L=new $e(v,x),R=new $e(g,w),O=new $e(y,C),I=new $e(m,A),N=new $e(B,V),U=new $e(X,b);this.startMesh=N,this.endMesh=U,this.topMesh=R,this.bottomMesh=L,this.leftMesh=O,this.rightMesh=I,this.addPlaneListeners(L,"bottom"),this.addPlaneListeners(R,"top"),this.addPlaneListeners(O,"left"),this.addPlaneListeners(I,"right"),this.addPlaneListeners(N,"start"),this.addPlaneListeners(U,"end");let F,Y,ie,q,ne,ve,Ne;const be=L.geometry.attributes.position.array,J=R.geometry.attributes.position.array,He=O.geometry.attributes.position.array,Ce=I.geometry.attributes.position.array,me=N.geometry.attributes.position.array,ge=U.geometry.attributes.position.array;F=o(e,0),Y=o(e,1),q=this.getFootprintXY(F,Y,n,f);let Ae=0,H=d*3+Ae;if(c(be,J,He,Ce,Ae,H,q.p1l,q.p1r),h(me,q.p1l,q.p1r,!1),d>2)for(let j=1;j<d-1;j++)F=o(e,j-1),Y=o(e,j),ie=o(e,j+1),Ae=j*3,H=d*3+Ae,q=this.getFootprintXY(F,Y,n,f),ne=this.getFootprintXY(Y,ie,n,f),ve=this.math.getLineIntersectionXY(q.p1l,q.p2l,ne.p1l,ne.p2l),Ne=this.math.getLineIntersectionXY(q.p1r,q.p2r,ne.p1r,ne.p2r),ve=ve||q.p1l,Ne=Ne||q.p1r,ve.z=f,Ne.z=f,c(be,J,He,Ce,Ae,H,ve,Ne);F=o(e,d-2),Y=o(e,d-1),q=this.getFootprintXY(F,Y,n,f),Ae=(d-1)*3,H=d*3+Ae,c(be,J,He,Ce,Ae,H,q.p2l,q.p2r),h(ge,q.p2l,q.p2r,!0),L.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.position.needsUpdate=!0,I.geometry.attributes.position.needsUpdate=!0,N.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.position.needsUpdate=!0,this.computeFacePseudoNormals(L),this.computeFacePseudoNormals(R),this.computeFacePseudoNormals(O),this.computeFacePseudoNormals(I),this.computeFacePseudoNormals(N),this.computeFacePseudoNormals(U),this.group.add(L),this.group.add(R),this.group.add(O),this.group.add(I),this.group.add(N),this.group.add(U),this.updateAnchorPositions(),this.clipBoxesNeedUpdate=!0}}class L_{getPotreeProfileFromBBox(e){let t;if(e instanceof ot){let y;parseInt(Ht,10)<102?y=e.getSize():(y=new _,e.getSize(y));const m=new ei(y.x,y.y,y.z),p=new Zt;t=new $e(m,p);let S;parseInt(Ht,10)<102?S=e.getCenter():(S=new _,e.getCenter(S)),t.position.set(S.x,S.y,S.z)}else t=e;const n={};n.points=[],n.width=1;const i=t.quaternion.clone();t.rotation.set(0,0,0);const s=e instanceof Ge?new ot().setFromObject(t):e;let o;parseInt(Ht,10)<102?o=s.getSize():(o=new _,s.getSize(o));const a=o.x,l=o.z;let c;parseInt(Ht,10)<102?c=s.getCenter():(c=new _,s.getCenter(c));const h=new _(0,0,l/2),d=new _(0,0,-l/2),u=new _(0,o.y/2,0),f=new _(0,-o.y/2,0);h.applyQuaternion(i),d.applyQuaternion(i),h.add(c),d.add(c),u.add(c),f.add(c);const v=h,g=d;return n.points.push(v),n.points.push(g),n.start=v,n.end=g,n.width=a,n.top=u,n.bottom=f,n}}Xe.AreaMeasurement=Sd,Xe.Controls=Ad,Xe.CustomMath=Ki,Xe.DistanceMeasurement=Ed,Xe.DxfFile=dd,Xe.ElevationRangePicker=b_,Xe.Events=Kt,Xe.LineTool=Xr,Xe.Lines=fd,Xe.MeasurementTool=Ld,Xe.Modules=Cd,Xe.PhotoSpheres=id,Xe.Photos=$h,Xe.PointClouds=hd,Xe.PointMeasurement=Td,Xe.PointTool=Wr,Xe.Points=pd,Xe.PolygonTool=Md,Xe.Polygons=ud,Xe.Potree=yy,Xe.ReferenceFrame=Na,Xe.SectionTool=T_,Xe.TextSprite=Gr,Xe.Transformations=L_,Xe.World=Pd,Xe.default=Rd,Xe.fitView=x_,Xe.init=Rd,Object.defineProperty(Xe,"__esModule",{value:!0})});

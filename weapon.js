﻿function clr(){document.getElementById("result").innerHTML=""}function res(a){document.getElementById("result").innerHTML+=a}function calc(){const c=[150,300,500,900,1200,1500,1800,2700];const f=[42,48,58,72,90,112,140,168];const g=[10,13,16,18,21,24,27,30];var b=0;var h=document.getElementById("w_type").selectedIndex,e=document.getElementById("w_lvl").selectedIndex,a=parseInt(document.getElementById("i_rad").value);clr();switch(h){case 0:b=f[e];res("XMP Burster L");break;case 1:b=g[e];res("Ultra Strike L");break;default:res("??? L");break}res(e+1);res("\n 理论伤害: "+c[e]);if(b<a){res("\n 错误: 超出最大射程"+b+"m。伤害减为0。")}else{var d=Math.pow(2,5*a/b);res("\n 计算伤害: ");res(Math.floor(c[e]/d));res(" @ "+a+"m")}};
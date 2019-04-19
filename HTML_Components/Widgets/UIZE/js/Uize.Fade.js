/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Fade.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Fade',superclass:'Uize.Class',builder:function(b_a){'use strict';var b_b,b_c='object',b_d=Uize.constrain,b_e=Uize.now;var b_f={},b_g=[],b_h=false,b_i;function b_j(){if((b_h= !!b_g.length)!= !!b_i)b_i=b_h?setInterval(b_k,10):clearInterval(b_i);}function b_k(){for(var b_l= -1,b_m;++b_l<b_g.length;)(b_m=b_g[b_l]).b_n?b_m.b_k():b_g.splice(b_l--,1);b_j();}var b_o=b_a.subclass(),b_p=b_o.prototype,b_q=b_o.nonInheritableStatics;b_p.b_r=function(){var b_s=this,b_t=b_u(b_s.b_v,b_s.b_w,b_s.b_x,b_s.b_y,b_s.b_z,b_s.b_t);if(b_t!=b_f)b_t!=b_s.b_t?b_s.set({b_t:b_t}):b_s.fire('Changed.value');};b_p.b_k=function(){var b_A=Math.min((b_e()-this.b_B)/this.b_C,1);this.set({b_x:this.b_D?1-b_A:b_A});if(b_A==1){this.stop();this.fire('Done');}};b_p.stop=function(){this.set({b_n:false});};b_p.start=function(b_E){this.stop();this.set(Uize.copyInto({b_n:true},b_E));};var b_u=b_o.blendValues=function(b_F,b_G,b_H,b_y,b_z,b_I){if(b_F===b_G){return b_I!==b_b&&b_F===b_I?b_f:b_F;}else{if(Uize.isFunction(b_z)){
b_H=b_z(b_H);b_z=b_b;}if(typeof b_F==b_c&&b_F&& !(b_F instanceof RegExp)){var b_J=b_I&&typeof b_I==b_c,b_K=b_y&&typeof b_y==b_c,b_L=b_z&&typeof b_z==b_c,b_M=b_J?b_I:Uize.isArray(b_F)?[]:{},b_N;for(var b_O in b_F){var b_P=b_u(b_F[b_O],b_G[b_O],b_H,b_K?b_y[b_O]:b_y,b_L?b_z[b_O]:b_z,b_N=b_M[b_O]);if(b_J)b_J=b_P==b_f||(typeof b_P!=b_c&&b_P==b_N);if(b_P!=b_f)b_M[b_O]=b_P;}return b_J?b_f:b_M;}else{var b_M= !b_H?b_F:b_H==1?b_G: !b_y?b_F+(b_G-b_F)*b_H:b_H>0&&b_H<1?b_d(b_F+Math.round((b_G-b_F)*b_H/b_y)*b_y,b_F,b_G):b_F+Math.round((b_G-b_F)*b_H/b_y)*b_y;return b_I!==b_b&&b_M===b_I?b_f:b_M;}}};b_q.blendValues=1;b_o.celeration=function(b_Q,b_R){var b_S=1-(b_Q=b_Q||0)-(b_R=b_R||0),b_T=2/(1+b_S),b_U=b_Q?b_T/b_Q:0,b_V=b_U/2,b_W=b_R? -b_T/b_R:0,b_X=b_W/2,b_Y=b_Q*b_Q,b_Z;return(b_S>=1?Uize.returnX:function(b_t){return((b_t=(b_Q?b_d(b_t*b_t,0,b_Y)*b_V:0)+(b_S?b_T*b_d(b_t-b_Q,0,b_S):0)+(b_R?((b_T+(b_Z=b_d(b_t-b_Q-b_S,0,b_R))*b_X)*b_Z):0))>1?1:b_t);});};b_q.celeration=1;function b_0(){this.set({b_z:this.b_Q||this.b_R
?b_o.celeration(this.b_Q,this.b_R):null});}function b_1(){this.b_t=null;this.b_r();}b_o.stateProperties({b_Q:{name:'acceleration',onChange:b_0},b_z:{name:'curve',onChange:b_1},b_R:{name:'deceleration',onChange:b_0},b_C:{name:'duration',value:2000},b_w:{name:'endValue',onChange:b_1,value:100},b_n:{name:'inProgress',onChange:function(){var b_s=this;if(b_s.b_n){b_s.b_B=b_e();b_s.fire('Start');b_s.b_t=b_s.b_x=null;b_s.b_k();b_g.push(b_s);b_j();}},value:false},b_x:{name:'progress',onChange:b_p.b_r,value:0},b_D:'reverse',b_v:{name:'startValue',onChange:b_1,value:0},b_y:'quantization',b_t:{name:'value',value:0}});return b_o;}});
/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.FileSystemAdapter.Wsh.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.FileSystemAdapter.Wsh',superclass:'Uize.Services.FileSystemAdapter',builder:function(d_a){'use strict';var d_b=d_a.getParentFolderPath;return d_a.subclass({instanceMethods:{getItemsInFolder:function(d_c,d_d){var d_e=Uize.resolveMatcher(d_c.pathMatcher),d_f=Uize.resolveTransformer(d_c.pathTransformer),d_g=[],d_h=new Enumerator(this.d_i.getFolder(d_c.path)[d_d?'SubFolders':'Files']),d_j;while(!d_h.atEnd()){d_e(d_j=(d_j=d_h.item().Path).slice(Math.max(d_j.lastIndexOf('/'),d_j.lastIndexOf('\\'))+1))&&d_g.push(d_f(d_j));d_h.moveNext();}return d_g;},d_k:function(d_l){var d_i=this.d_i;if(!d_i.FolderExists(d_l)){var d_m=d_l,d_n=[];while(d_m&& !d_i.FolderExists(d_m)){d_n.push(d_m);d_m=d_b(d_m);}for(var d_o=d_n.length;--d_o>=0;)d_i.CreateFolder(d_n[d_o]);}},copyFile:function(d_c,d_p){var d_q=this,d_r=d_c.targetPath;d_q.d_k(d_b(d_r));d_q.d_i.CopyFile(d_c.path,d_r,true);d_p();},deleteFile:function(d_c,d_p){try{this.d_i.DeleteFile(d_c.path);}catch(d_s){}d_p();},
fileExists:function(d_c,d_p){d_p(this.d_i.FileExists(d_c.path));},folderExists:function(d_c,d_p){d_p(this.d_i.FolderExists(d_c.path));},getModifiedDate:function(d_c,d_p){var d_l=d_c.path,d_i=this.d_i;d_p(d_i.FileExists(d_l)?new Date(d_i.GetFile(d_l).DateLastModified):NaN);},pathExists:function(d_c,d_p){var d_l=d_c.path,d_i=this.d_i;d_p(d_i.FileExists(d_l)||d_i.FolderExists(d_l));},readFile:function(d_c,d_p){var d_i=this.d_i,d_l=d_c.path,d_t='';if(d_i.GetFile(d_l).Size){var d_u=d_i.OpenTextFile(d_l,1);d_t=d_u.ReadAll();d_u.Close();}d_p(d_t);},writeFile:function(d_c,d_p){var d_q=this,d_l=d_c.path;d_q.d_k(d_b(d_l));var d_u=d_q.d_i.CreateTextFile(d_l);d_u.Write(d_c.contents);d_u.Close();d_p();},init:function(d_c,d_p){this.d_i=new ActiveXObject('Scripting.FileSystemObject');d_p();}}});}});
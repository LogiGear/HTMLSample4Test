/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.DelvePageHtml.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.DelvePageHtml',required:['Uize.Url','Uize.Json'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=Uize.Url.from(input.pathToResources).fullDomain;
output.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n	<title>DELVE</title>\n	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n	<base href="',_b,'"/>\n	<link rel="stylesheet" href="css/page.css"/>\n	<link rel="stylesheet" href="css/widget.datatable.css"/>\n	<link rel="stylesheet" href="css/widget.tabs.css"/>\n	<link rel="stylesheet" href="css/page.delve.css"/>\n	<link rel="stylesheet" href="css/widget.hashtable.css"/>\n</head>\n\n<body>\n\n<script type="text/javascript" src="',input.pathToResources,'Uize.js"></script>\n\n<script type="text/javascript">\n\nUize.module ({\n	required:[\n		\'UizeSite.Delve.library\',\n		\'UizeSite.Templates.DelveUiHtml\',\n		\'Uize.Node\',\n		\'UizeSite.Delve\'\n	],\n	builder:function () {\n		/*** inject the guts of the page ***/\n			Uize.Node.injectHtml (document.body,UizeSite.Templates.DelveUiHtml.process ());\n\n		/*** create the example page widget ***/\n			var _page = window.page = UizeSite.Delve ({baseUrl:',Uize.Json.to(_b),',window:top.opener});\n\n		/*** wire up the page widget ***/\n			_page.wireUi ();\n	}\n});\n\n</script>\n\n</body>\n</html>\n\n');
return output.join('');};_a.input={pathToResources:'string'};return _a;}});
 <!DOCTYPE HTML>
<html>
<head>
<script language="javascript" type="text/javascript"> 
</script>
<script language="javascript" type="text/javascript"> 
function submitenter(event)
{
if(window.event)
      keycode = window.event.keyCode; // IE
else
      keycode = e.which;

if (keycode == 13)
   {
  	grabSearch();
   }
else
   {
   	return false;
   }
}
</script>
<script language="javascript" type="text/javascript"> 
 function grabSearch(){
    var search=document.getElementById('search_box').value;
    search=encodeSearch(search);
    document.getElementById('Form').submit();	
 }
 function encodeSearch(term){
    return term.replace(/[^A-Za-z]/g," ");
 }
 </script>
</head>
<body>
<?php
// define variables and set to empty values
$search_val = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $search_val = (test_input(isset($_POST["search"])) ? $_POST["search"] : null);
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" style="" method="post" name="Form" id="Form" onsubmit="return submitenter(event)">
	<input id="search_box" name="search" type="text" value="Search" onblur="if (this.value == '') {this.value = 'Search';}"  onfocus="if (this.value == 'Search') {this.value = '';}" onKeyDown="submitenter(event)" />
</form>
<?php
echo "<h2>Your Search text:</h2>";
echo $search_val;
?>
</body>
</html>

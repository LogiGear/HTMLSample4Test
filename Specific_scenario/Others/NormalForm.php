 <!DOCTYPE HTML>
<html>
<head>
<title> HTML4 form </title>
</head>
<body>
<?php
// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = (test_input(isset($_POST["name"])) ? $_POST["name"] : null);
   $email = (test_input(isset($_POST["email"])) ? $_POST["email"] : null);
   $website = (test_input(isset($_POST["website"])) ? $_POST["website"] : null);
   $comment = (test_input(isset($_POST["comment"])) ? $_POST["comment"] : null);
   $gender = (test_input(isset($_POST["gender"])) ? $_POST["gender"] : null);
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
   Name: <input type="text" name="name">
   <br><br>
   E-mail: <input type="text" name="email">
   <br><br>
   Website: <input type="text" name="website">
   <br><br>
   Comment: <textarea name="comment" rows="5" cols="40"></textarea>
   <br><br>
   Gender:
   <input type="radio" name="gender" value="female">Female
   <input type="radio" name="gender" value="male">Male
   <br><br>
   <input type="submit" name="submit" value="Submit">
</form>

<?php
echo "<h2>Your Input:</h2>";
echo "<label>";
echo $name;
echo "</label>";
echo "<br>";
echo "<label>";
echo $email;
echo "</label>";
echo "<br>";
echo "<label>";
echo $website;
echo "</label>";
echo "<br>";
echo "<label>";
echo $comment;
echo "</label>";
echo "<br>";
echo "<label>";
echo $gender;
echo "</label>";
?>

</body>
</html>

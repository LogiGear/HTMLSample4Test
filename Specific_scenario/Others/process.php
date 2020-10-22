<?php
$tea=isset($_POST['Tea']);
$coffee=isset($_POST['Coffee']);
$milk=isset($_POST['Milk']);
if($tea == "1")
{$teaVal = "Checked";}
else{$teaVal = "Unchecked";}
if($coffee == "1")
{$coffeeVal = "Checked";}
else{$coffeeVal = "Unchecked";} 
if($milk == "1")
{$milkVal = "Checked";}
else{$milkVal = "Unchecked";} 
echo '<html><label>Your choice is : </label></br><label> Tea : </label>'.$teaVal.'</br><label> Coffee : </label>'.$coffeeVal.'</br><label> Milk : </label>'.$milkVal.'<html>';
?>
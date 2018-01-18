<?php

$con=new mysqli('localhost','root','','qms') or die(mysqli_error());
if(!$con)
{
echo "not connected";
}
else
{	
echo "";
}

?>
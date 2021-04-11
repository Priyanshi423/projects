<?php
$to="priyanshiagarwal1816@gmail.com";
$subject="response from website";
$message="i am very good";
$headers="From:priyanshiagarwal8918@gmail.com"
if (mail($to,$subject,$message,$headers){
	echo "Mail sent";

}
else{
	echo "Not sent";
}



?>
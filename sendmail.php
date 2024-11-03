<?php

if($_POST['cform']=='Send')
{
	header("Content-type: application/json");
	 		$cleanedFrom = trim(strip_tags($_POST['email'])); 
			$message = '<html><body>';
			$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
			$message .= "<tr style='background: #eee;'><td><strong>Contact Person:</strong> </td><td>" . strip_tags($_POST['cname']) . "</td></tr>";   
			$message .= "<tr><td><strong>Contact Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
			$message .= "<tr><td><strong>Contact Phone:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
			$message .= "<tr><td><strong>City:</strong> </td><td>" . strip_tags($_POST['city']) . "</td></tr>";
			$message .= "<tr><td><strong>Location:</strong> </td><td>" . htmlentities($_POST['location'])  . "</td></tr>";
			$message .= "</table>";
			$message .= "</body></html>";
			
			$to = 'mohinder@ilanjiinfotech.com';
			
			$subject = 'Enquiry Form';
			
			$headers = "From: " . $cleanedFrom . "\r\n";
			$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

            mail($to, $subject, $message, $headers);
			$arr['res']='ok';
			
			 echo json_encode($arr);
}
?>
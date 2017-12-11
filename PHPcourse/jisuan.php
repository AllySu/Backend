<?php
  for ($i=0,$sum = 0; $i <=100 ; $i++) { 
  	$sum = $sum + $i;
  	# code...
  }
  echo "for语句的运行结果:".$sum."<br>";
  $i = 1;
  $sum =0;
  while ( $i <= 100) {
  	$sum = $sum+$i;
  	$i++;  	# code...
  }
  echo "while语句的运行结果:".$sum."<br>";
  ?>
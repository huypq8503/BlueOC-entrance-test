<?php

function sum_of_top_integer($array)
{
    if (count($array) < 2) {
        return null;
    }
    $max_number1 = $array[0];
    $max_number2 = $array[1];

    for ($i = 2; $i < count($array); $i++) {
        if ($array[$i] > $max_number1) {
            $max_number2 = $max_number1;
            $max_number1 = $array[$i];
        } elseif ($array[$i] > $max_number2) {
            $max_number2 = $array[$i];
        }
    }
    return $max_number1 + $max_number2;
}

$input1 = [1, 2, 2, -45, -67, 5];
$output1 = sum_of_top_integer($input1);
echo ($output1);

$input2 = [1, 4, 2, 3, 5];
$output2 = sum_of_top_integer($input2);
echo ($output2);
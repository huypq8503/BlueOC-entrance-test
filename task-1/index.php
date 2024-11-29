<?php


function string_length_frequency($array)
{
    $lengthFrequency = [];

    foreach ($array as $item) {
        $length = strlen($item);
        if (isset($lengthFrequency[$length])) {
            $lengthFrequency[$length]++;
        } else {
            $lengthFrequency[$length] = 1;
        }
    }

    $maxFrequency = max($lengthFrequency);
    $mostFrequentLengths = [];
    foreach ($lengthFrequency as $length => $frequency) {
        if ($frequency == $maxFrequency) {
            $mostFrequentLengths[] = $length;
        }
    }
    $result = [];
    foreach ($array as $item) {
        if (in_array(strlen($item), $mostFrequentLengths)) {
            $result[] = $item;
        }
    }
    return $result;
}


$input = ['a', 'ab', 'abc', 'cd', 'cde', 'gh', 'xy', 'lm'];
$output = string_length_frequency($input);
print_r($output);


$input1 =  ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
$output1 = string_length_frequency($input1);
print_r($output1);

$input2 = ['a', 'abd', 'abc', 'cd', 'cde', 'ghq', 'xyz', 'lm'];
$output2 = string_length_frequency($input2);
print_r($output2);
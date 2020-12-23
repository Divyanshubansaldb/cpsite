<?php


function make_contest_problem_api_request($config, $token)
{
    $problem_code = "SALARY";
    $contest_code = "PRACTICE";
    $path = $config['api_endpoint'] . "contests/" . $contest_code . "/problems/" . $problem_code;
    $response = make_api_request($token, $path);
    return $response;
}

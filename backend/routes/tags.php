<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/tags', function (Request $request, Response $response, array $args) {
    require __DIR__ . "./../config/variables.php";

    $token = (new get_token())->ispresent($config); // getting token
    // $problem_code = "SALARY";
    // $contest_code = "PRACTICE";
    $path = $config['api_endpoint'] . "tags/problems?fields=tags";
    $response = make_api_request($token, $path);
    echo $response;
    $response = json_decode($response);
    return $response;
});

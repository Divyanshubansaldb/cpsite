<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->post('/problems', function (Request $request, Response $response, array $args) {
    require __DIR__ . "./../config/variables.php";
    $token = (new get_token())->ispresent($config); // getting token
    $path = $config['api_endpoint'] . "tags/problems?limit=100&filter=";

    $body = $request->getParsedBody();

    // adding tags into curl url request;
    $taglist = $body['taglist'];
    for ($i = 0; $i < sizeof($taglist); $i++) {
        if ($i == sizeof($taglist) - 1)
            $path = $path . $taglist[$i];
        else {
            $path = $path . $taglist[$i] . "%2C";
        }
    }

    $problemlist = [];

    $codechefResponse = json_decode(make_api_request($token, $path));

    if ($codechefResponse->status === 'OK') {
        foreach ($codechefResponse->result->data->content as $key => $value) {
            array_push($problemlist, $value);
        }
    }

    $str = json_encode($problemlist);
    $response->getbody()->write($str);
    $response = $response->withHeader('Access-Control-Allow-Origin', '*');
    return $response;
});

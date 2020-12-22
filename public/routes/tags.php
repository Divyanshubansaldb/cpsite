<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class listsample
{
    public $Difficulty = array();
    public $Author = array();
    public $Concepts = array();

    public function adding_Author($item)
    {
        array_push($this->Author, $item);
    }

    public function adding_Difficulty($item)
    {
        array_push($this->Difficulty, $item);
    }
    public function adding_Concepts($item)
    {
        array_push($this->Concepts, $item);
    }
}

$app->get('/tags', function (Request $request, Response $response, array $args) {
    require __DIR__ . "./../config/variables.php";

    $tagslist = new listsample();
    $tagslist->adding_Difficulty('beginner');
    $tagslist->adding_Difficulty('easy');
    $tagslist->adding_Difficulty('medium');
    $tagslist->adding_Difficulty('hard');
    $tagslist->adding_Difficulty('challenge');

    $token = (new get_token())->ispresent($config); // getting token
    $path = $config['api_endpoint'] . "tags/problems?limit=100&offset=";

    for ($times = 0; $times < 2; $times++) {
        $codechefResponse = json_decode(make_api_request($token, $path . strval($times * 100)));
        foreach ($codechefResponse->result->data->content as $key => $value) {
            if ($value->type === "author") $tagslist->adding_Author($key);
            if ($value->type === "actual_tag") $tagslist->adding_Concepts($key);
        }
    }
    $str = json_encode($tagslist);
    $response->getbody()->write($str);
    $response = $response->withHeader('access-control-allow-origin', '*');
    return $response;
});

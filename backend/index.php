<?php
require_once __DIR__ . './middleware/curl_request.php';
require_once __DIR__ . './middleware/authentication.php';
require_once __DIR__ . './middleware/generate_first_token.php';
require_once __DIR__ . './middleware/generate_token_refresh.php';
require_once __DIR__ . './middleware/api_request.php';
require_once __DIR__ . './middleware/validating_and_requesting_access_token.php';
require_once __DIR__ . './routes/getting_problems.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
// use Slim\Factory\AppFactory;

require __DIR__ . './vendor/autoload.php';
// $app = AppFactory::create();
$app = new \Slim\app;

require_once __DIR__ . './routes/tags.php';
require_once __DIR__ . './routes/problems.php';

$app->get('/problem', function (Request $request, Response $response, array $args) {
    require __DIR__ . "./config/variables.php";

    $token = (new get_token())->ispresent($config); // getting token
    $response = make_contest_problem_api_request($config, $token);
    echo $response;
    $response = json_decode($response);
    return $response;
});


$app->get('/user', function (Request $request, Response $response, array $args) {
    require_once __DIR__ . "./config/variables.php";

    if (isset($_GET['code'])) {
        $oauth_details['authorization_code'] = $_GET['code'];
        // if (!isset($oauth_details['access_token']))
        $oauth_details = generate_access_token_first_time($config, $oauth_details);

        $response = make_contest_problem_api_request($config, $oauth_details);
        //$oauth_details = generate_access_token_from_refresh_token($config, $oauth_details);         //use this if you want to generate access_token from refresh_token
        // $response = json_encode($response);
        // $respone->getBody()->write('helo helo helo');
        return $response;
    } else {
        take_user_to_codechef_permissions_page($config);
    }

    // $oauth_details['authorization_code'] = $_GET['code'];
    // $oauth_details = generate_access_token_first_time($config, $oauth_details);
    // $response = make_contest_problem_api_request($config, $oauth_details);
    // return $response;
    // $response->getBody()->write("Hello, ");
    // return $response;
});

$app->get('/', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("Hello, divyanshu");
    return $response;
});
//customer routes

// require '../src/routes/customers.php';

$app->run();

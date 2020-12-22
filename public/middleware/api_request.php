<?php

function make_api_request($token, $path)
{
    $headers[] = 'Authorization: Bearer ' . $token;
    return make_curl_request($path, false, $headers);
}

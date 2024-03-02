<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    //update values for fiz cors issues
    'paths' => ['api/*', 'sanctum/csrf-cookie', '/register'],

    'allowed_methods' => ['GET, POST'],

    'allowed_origins' => ['http://localhost:3000', 'http://127.0.0.1:3000'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['origin, content-type, accept, x-requested-with'],

    'exposed_headers' => [],

    'max_age' => 0,

    //Access-Control-Allow-Credentials
    'supports_credentials' => true,

];

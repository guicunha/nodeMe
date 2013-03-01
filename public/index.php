<?php

require_once '../vendor/SplClassLoader.php';

$classLoader = new SplClassLoader('cromg', '../vendor');
$classLoader->register();

$classLoader = new SplClassLoader('app', '../');
$classLoader->register();

$bootstrap = new \app\Init;
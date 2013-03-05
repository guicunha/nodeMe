<?php

require_once '../vendor/SplClassLoader.php';

$classLoader = new SplClassLoader('conselhos', '../vendor');
$classLoader->register();

$classLoader = new SplClassLoader('app', '../');
$classLoader->register();
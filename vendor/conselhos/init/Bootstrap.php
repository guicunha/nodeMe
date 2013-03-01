<?php
/**
 * Description of Bootstrap
 *
 * @author cromg
 */

namespace conselhos\init;

class Bootstrap {
    
    protected $routes;
    
   public function __construct() {
       
       $ar['xpto'] = ['route' => '/xpto', 'controller' => 'xpto', 'action' => 'index'];
       $ar['home'] = ['route' => '/', 'controller' => 'index', 'action' => 'index'];
       
       $this->setRoutes($ar);
       $this->run($this->getUrl());
   }
   
   public function setRoutes(array $routes){
       $this->routes = $routes;
   }
   
   protected function run($url){
       
       array_walk($this->routes, function($route) use ($url){
       
           if($url==$route['route']){
                $class = "app\\controllers\\".ucfirst($route['controller']);
                $controller = new $class;
                $controller->$route['action']();
           }
       });
       
   }


   protected function getUrl(){
       return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
   }
    
}
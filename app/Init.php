<?php

namespace app;
use conselhos\init\Bootstrap;

/**
 * Description of Bootstrap
 *
 * @author guilherme cunha
 */
class Init extends Bootstrap{
    
    protected function _initRoutes(){
        
       $ar['xpto'] = ['route' => '/xpto', 'controller' => 'xpto', 'action' => 'index'];
       $ar['home'] = ['route' => '/', 'controller' => 'index', 'action' => 'index'];
       $ar['artigoadd'] = ['route' => '/artigo/adicionar', 'controller' => 'index', 'action' => 'adicionar'];
       $this->setRoutes($ar);
       
    }
    
    
}
<?php
/**
 * Description of Bootstrap
 *
 * @author guilherme cunha <guilherme.cunha@cromg.org.br>
 */

namespace app;
use conselhos\init\Bootstrap;

class Init extends Bootstrap{
    
    protected function _initRoutes(){
        
       $ar['xpto'] = ['route' => '/xpto', 'controller' => 'xpto', 'action' => 'index'];
       $ar['home'] = ['route' => '/', 'controller' => 'index', 'action' => 'index'];
       $ar['artigoadd'] = ['route' => '/artigo/adicionar', 'controller' => 'index', 'action' => 'adicionar'];
       $this->setRoutes($ar);
    }
}
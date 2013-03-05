<?php

/**
 * Description of Index
 *
 * @author cromg
 */

namespace app\controllers;
          

use conselhos\controller\Action,
    conselhos\di\Container;



class Index extends Action {

    protected $model = "article";
    
    public function index(){
        $model = Container::getClass($this->model);
        $this->view->objetos = $model->fetchAll();
        $this->render("index");
    }
    
    public function adicionar(){
        $this->render("adicionar");
    }
    
}
<?php
/**
 * Description of Crud
 *
 * @author cromg
 */

namespace conselhos\controller;
use conselhos\di\Container;

trait Crud {
    
    public function index(){
        $model = Container::getClass($this->model);
        $this->view->objetos = $model->fetchAll();
        $this->render("index");
    }
    
    public function adicionar(){
        $this->render("adicionar");
    }
}
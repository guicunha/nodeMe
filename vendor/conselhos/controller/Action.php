<?php
/**
 * Description of Action
 *
 * @author cromg
 */

namespace conselhos\controller;

abstract class Action {
    
    protected $action;
    protected $view;
    
    public function __construct() {
        $this->view = new \stdClass();
    }
    
    protected function reder($view, $layout=true){
        $this->action = $view;
        if($layout == true && file_exists("../app/views/layout.phtml"))
            include_once '../app/views/layout.phtml';
        else
        $this->content($view);
    }
    
    protected function content(){
        $atual = get_class($this);
        $singClassName = strtolower(str_replace("app\controllers\\", "", $atual));
        include_once '../app/views/'.$singClassName.'/'.$this->action.'.phtml';
    }
}
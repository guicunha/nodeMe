<?php

/**
 * Description of Index
 *
 * @author cromg
 */

namespace app\controllers;

use cromg\controller\Action,
    cromg\di\Container,
    app\models\Article;

class Index extends Action{
    
    public function index(){
        
        $article = Container::getClass("article");
        
        $this->view->nome = $article->getNome();
        $this->reder('index');
    }
}
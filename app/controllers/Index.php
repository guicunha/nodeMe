<?php

/**
 * Description of Index
 *
 * @author cromg
 */

namespace app\controllers;

use conselhos\controller\Action,
    conselhos\di\Container,
    app\models\Article;

class Index extends Action{
    
    public function index(){
        
        $article = Container::getClass("article");
        
        $this->view->nome = $article->getNome();
        $this->reder('index');
    }
}
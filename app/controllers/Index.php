<?php

/**
 * Description of Index
 *
 * @author cromg
 */

namespace app\controllers;

use conselhos\controller\Action,
    conselhos\controller\Crud;



class Index extends Action {
    use Crud;
    
    protected $model = "article";

}
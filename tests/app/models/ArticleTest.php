<?php
/**
 * Description of ArticleTest
 *
 * @author guilherme cunha
 */

use conselhos\di\Container;

class ArticleTest extends PHPUnit_Framework_TestCase{
    
    private $model;
    
    public function setUp(){
        $this->model = Container::getClass("Article");
        
        $db = new \PDO("mysql:host=localhost;dbname=conselhos", "root", "root");
        $db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        $db->exec("truncate table article");
        
    }
    
    public function testVerificaTipoDoObjeto(){
        $this->assertInstanceOf("app\models\Article", $this->model);
    }
    
    public function testVerificaSeConsegueInserirRegistro(){
        $data['nome'] = "Artigo teste";
        $data['descricao'] = "Artigo teste Descricao";
        
        $this->assertEquals(1, $this->model->save($data));
    }
    
    
    public function tearDown(){
        
    }
}
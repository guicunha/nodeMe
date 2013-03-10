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
        $this->assertEquals(2, $this->model->save($data));
        $this->assertEquals(3, $this->model->save($data));
    }
    
    public function testVerificaSeInsereRegistroContemDados(){
        $data = array();
        try{
            $this->model->save($data);
            $this->fail("Não pode inserir com dados em branco");
        }catch (Exception $e){
        }
    }
    
    /*
     * @depends testVerificaSeConsegueInserirRegistro
     */
    
    public function testVerificaSeConseguAlterarRegistro(){
        $data['nome'] = "Artigo teste";
        $data['descricao'] = "Artigo teste Descricao";
        $this->model->save($data);
        
        $data['id'] = 1;
        $data['nome'] = "Artigo alterado nome";
        $data['descricao'] = "Artigo alterado descricao";
        
        $this->assertEquals(1, $this->model->save($data));
    }
    
    public function testVerificaSeConsegueSelecionarRegistros(){
        $data['nome'] = "Artigo teste";
        $data['descricao'] = "Artigo teste Descricao";
        $this->model->save($data);
        
        $data['nome'] = "Artigo teste2";
        $data['descricao'] = "Artigo teste Descricao2";
        $this->model->save($data);
        
        $this->assertEquals("Artigo teste", $this->model->find(1)['nome']);
        $this->assertEquals("Artigo teste2", $this->model->find(2)['nome']);
    }
    
    public function testVerificaSeConsegueRemoverRegistro(){
        $data['nome'] = "Artigo teste2";
        $data['descricao'] = "Artigo teste Descricao2";
        $this->model->save($data);
        
        $this->assertTrue($this->model->delete(1));
    }
    
    public function testVerificaSeConsegueListarRegistros(){
        $data['nome'] = "Artigo teste";
        $data['descricao'] = "Artigo teste Descricao";
        $this->model->save($data);
        
        $data['nome'] = "Artigo teste2";
        $data['descricao'] = "Artigo teste Descricao2";
        $this->model->save($data);
        
        $this->assertEquals("Artigo teste", $this->model->fetchAll()[0]['nome']);
        $this->assertEquals("Artigo teste2", $this->model->fetchAll()[1]['nome']);
    }
    
    
    public function tearDown(){
        
    }
}
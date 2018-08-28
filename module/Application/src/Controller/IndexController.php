<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Application\Entity\reestrRmsp;

class IndexController extends AbstractActionController
{
    /**
     * Менеджер сущностей.
     * @var Doctrine\ORM\EntityManager
     */
    private $entityManager;

    // Метод конструктора, используемый для внедрения зависимостей в контроллер.
    public function __construct($entityManager)
    {
      $this->entityManager = $entityManager;
    }
    public function indexAction() {
        return new ViewModel();
    }
    public function apiAction() {
      $limit = $this->params()->fromQuery('limit', '5');
      $offset = $this->params()->fromQuery('start', '0');
      $page = $this->params()->fromQuery('page', '1');

      $qb = $this->entityManager->createQueryBuilder();
      $reestrRmsp = $qb->select('r.id, r.polnNaimUr, r.innUr, r.subRf')
        ->from(reestrRmsp::class, 'r')
        ->setMaxResults($limit)
        ->setFirstResult($offset)
        ->getQuery()->getResult();

//      $total = 6269429;

      $countResult =  count($reestrRmsp);
      $following = $limit == $countResult ? $countResult : 0;
      $total = $offset + $countResult + $following;

      $out = [
        'total'=> (string) $total,
        'success' => "true",
        'results' => $reestrRmsp
      ];
      $callback = $_REQUEST['callback'];
      if ($callback) {
        header('Content-Type: text/javascript');
        echo $callback . '(' . json_encode($out, JSON_UNESCAPED_UNICODE). ');';
      } else {
        header('Content-Type: application/x-json');
        echo json_encode($out, JSON_UNESCAPED_UNICODE);
      }
      return $this->getResponse();
    }
}

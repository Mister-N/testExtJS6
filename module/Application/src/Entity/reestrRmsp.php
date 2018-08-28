<?php
namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="dictionary.reestr_rmsp", uniqueConstraints={@ORM\UniqueConstraint(name="idx_reestr_rmsp_inn_ur", columns={"inn_ur"})}, indexes={@ORM\Index(name="idx_reestr_rmsp_arhiv_inn_ur", columns={"inn_ur"}), @ORM\Index(name="reestr_rmsp_insert_date_idx", columns={"insert_date"})})
 * @ORM\Entity
*/
class reestrRmsp
{
  /**
   * @var int
   *
   * @ORM\Column(name="id", type="integer", nullable=false, options={"comment"="Идентификатор"})
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="SEQUENCE")
   * @ORM\SequenceGenerator(sequenceName="dictionary.reestr_rmsp_id_seq", allocationSize=1, initialValue=1)
   */
  public $id;

  /**
   * @var string|null
   *
   * @ORM\Column(name="poln_naim_ur", type="text", nullable=true)
   */
  public $polnNaimUr;

  /**
   * @var string|null
   *
   * @ORM\Column(name="sokr_naim_ur", type="text", nullable=true)
   */
  public $sokrNaimUr;

  /**
   * @var string|null
   *
   * @ORM\Column(name="inn_ur", type="string", length=255, nullable=true)
   */
  public $innUr;

  /**
   * @var string|null
   *
   * @ORM\Column(name="sub_rf", type="string", length=255, nullable=true)
   */
  public $subRf;

  /**
   * @var string|null
   *
   * @ORM\Column(name="rayon", type="string", length=255, nullable=true)
   */
  public $rayon;

  /**
   * @var string|null
   *
   * @ORM\Column(name="gorod", type="string", length=255, nullable=true)
   */
  public $gorod;

  /**
   * @var string|null
   *
   * @ORM\Column(name="nasel_punkt", type="string", length=255, nullable=true)
   */
  public $naselPunkt;

  /**
   * @var string|null
   *
   * @ORM\Column(name="kod_regiona", type="string", length=255, nullable=true)
   */
  public $kodRegiona;

  /**
   * @var string|null
   *
   * @ORM\Column(name="kod_vida_okved", type="string", length=255, nullable=true)
   */
  public $kodVidaOkved;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_vid_deyat_okved", type="text", nullable=true)
   */
  public $naimVidDeyatOkved;

  /**
   * @var string|null
   *
   * @ORM\Column(name="priznak_version_okved", type="string", length=255, nullable=true)
   */
  public $priznakVersionOkved;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_lic_vid_deyat", type="string", length=255, nullable=true)
   */
  public $naimLicVidDeyat;

  /**
   * @var string|null
   *
   * @ORM\Column(name="sved_adr_osush_okved", type="text", nullable=true)
   */
  public $svedAdrOsushOkved;

  /**
   * @var string|null
   *
   * @ORM\Column(name="ser_licence", type="string", length=255, nullable=true)
   */
  public $serLicence;

  /**
   * @var string|null
   *
   * @ORM\Column(name="nomer_licence", type="string", length=255, nullable=true)
   */
  public $nomerLicence;

  /**
   * @var string|null
   *
   * @ORM\Column(name="vid_licence", type="string", length=255, nullable=true)
   */
  public $vidLicence;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_licenzii", type="string", length=255, nullable=true)
   */
  public $dataLicenzii;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_nach_lic", type="string", length=255, nullable=true)
   */
  public $dataNachLic;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_ok_lic", type="string", length=255, nullable=true)
   */
  public $dataOkLic;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_lic_org_vid", type="text", nullable=true)
   */
  public $naimLicOrgVid;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_paus_lic", type="string", length=255, nullable=true)
   */
  public $dataPausLic;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_lic_org_stopped", type="text", nullable=true)
   */
  public $naimLicOrgStopped;

  /**
   * @var string|null
   *
   * @ORM\Column(name="kod_vida_prod", type="string", length=255, nullable=true)
   */
  public $kodVidaProd;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_vida_prod", type="text", nullable=true)
   */
  public $naimVidaProd;

  /**
   * @var string|null
   *
   * @ORM\Column(name="priznak_innovac", type="string", length=255, nullable=true)
   */
  public $priznakInnovac;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_zak_real_pp", type="text", nullable=true)
   */
  public $naimZakRealPp;

  /**
   * @var string|null
   *
   * @ORM\Column(name="inn_partner", type="string", length=255, nullable=true)
   */
  public $innPartner;

  /**
   * @var string|null
   *
   * @ORM\Column(name="num_dog_partn", type="string", length=255, nullable=true)
   */
  public $numDogPartn;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_dogovora_o_pris", type="string", length=255, nullable=true)
   */
  public $dataDogovoraOPris;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_zakaz_po_kont", type="text", nullable=true)
   */
  public $naimZakazPoKont;

  /**
   * @var string|null
   *
   * @ORM\Column(name="inn_zakaz_kontr", type="string", length=255, nullable=true)
   */
  public $innZakazKontr;

  /**
   * @var string|null
   *
   * @ORM\Column(name="predm_kontr", type="text", nullable=true)
   */
  public $predmKontr;

  /**
   * @var string|null
   *
   * @ORM\Column(name="reestrov_nomer_kontacta", type="string", length=255, nullable=true)
   */
  public $reestrovNomerKontacta;

  /**
   * @var string|null
   *
   * @ORM\Column(name="date_zakl_kontracta", type="string", length=255, nullable=true)
   */
  public $dateZaklKontracta;

  /**
   * @var string|null
   *
   * @ORM\Column(name="naim_zakaz_223", type="text", nullable=true)
   */
  public $naimZakaz223;

  /**
   * @var string|null
   *
   * @ORM\Column(name="inn_zakaz_223", type="string", length=255, nullable=true)
   */
  public $innZakaz223;

  /**
   * @var string|null
   *
   * @ORM\Column(name="predmet_dogov_223", type="string", length=255, nullable=true)
   */
  public $predmetDogov223;

  /**
   * @var string|null
   *
   * @ORM\Column(name="reestr_dog_223", type="string", length=255, nullable=true)
   */
  public $reestrDog223;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_zak_223", type="string", length=255, nullable=true)
   */
  public $dataZak223;

  /**
   * @var string|null
   *
   * @ORM\Column(name="data_vkl_ur_ip", type="string", length=255, nullable=true)
   */
  public $dataVklUrIp;

  /**
   * @var string|null
   *
   * @ORM\Column(name="vid_subject_msp", type="string", length=255, nullable=true)
   */
  public $vidSubjectMsp;

  /**
   * @var string|null
   *
   * @ORM\Column(name="kategor_subject_msp", type="string", length=255, nullable=true)
   */
  public $kategorSubjectMsp;

  /**
   * @var string|null
   *
   * @ORM\Column(name="priznak_nov_sozd_msp", type="string", length=255, nullable=true)
   */
  public $priznakNovSozdMsp;

  /**
   * @var \DateTime|null
   *
   * @ORM\Column(name="insert_date", type="date", nullable=true, options={"default"="2018-07-10"})
   */
  public $insertDate = '2018-07-10';

  /**
   * @var json|null
   *
   * @ORM\Column(name="dop_okved", type="json", nullable=true)
   */
  public $dopOkved;

  /**
   * @var \DateTime|null
   *
   * @ORM\Column(name="update_date", type="date", nullable=true, options={"default"="2018-07-10"})
   */
  public $updateDate = '2018-07-10';
}

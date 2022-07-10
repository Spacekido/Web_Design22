<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
  import DialogCard from "../Components/DialogCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 15vw;">La situazione attuale del territorio</div>
<div class="content">
  <ContentCard
    contentId={"content-beigua1"}
    src={"img/beigua-parco.jpg"}
    title={"Parco Naturale Regionale del Beigua"}
    subtitle={"L'importanza del giacimento di titanio di Pianpaludo"}
    buttonLabel={"Scopri cosa c'è sotto"}
    direction={"left-card"}
  />

  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-beigua1">
    <div>
      Nel 1970 tra i comuni di Urbe e Sassello è stato scoperto un giacimento di biossido di <span class="highlight">titanio</span>, sepolto in corrispondenza
      dei Monti Antenna e Tariné. Sono stimate circa 9 milioni di tonnellate di biossido di Titanio, sottoforma di rutilo. Nel 1976 il ministero dell’Industria
      ha rilasciato alla Mineraria Italiana Srl una concessione ventennale sul territorio, ceduta poi alla Compagnia Europea per il Titanio.
      <br /><br />
      Secondo uno studio dell’Università di Genova degli anni '90, per sfruttare questo giacimento e ricavare solo il 6% di rutilo, si potrebbe arrivare a smuovere
      circa
      <span class="highlight">200 milioni</span> di metri cubi di terra, di cui le rocce amiantifere compongono tra il <span class="highlight">10%</span> e il
      <span class="highlight">15%</span>: una tale quantità equivale a una movimentazione pari a 30 aeroporti di Genova.
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Approfondisci l'articolo"}
      href={"https://www.ivg.it/2021/04/titanio-del-beigua-ecco-perche-il-giacimento-di-piampaludo-fa-gola/"}
    />
  </div>
</div>

<div class="content">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-beigua2">
    <div>
      È stata depositata il <span class="highlight">21 maggio 2022</span> la "sentenza del Tribunale Amministrativo Regionale della Liguria che di fatto
      conferma il <span class="highlight">divieto</span> di effettuare ricerche minerarie nell'area del Monte Tariné".
      <br /><br />
      L'associazione di <span class="highlight">Legambiente Liguria</span> esprime
      <span class="italic"
        >"soddisfazione in merito alla sentenza del TAR che rappresenta la pietra tombale su qualsiasi ipotesi di sfruttamento minerario del comprensorio del
        Beigua"</span
      >.
      <br /><br />
      L'assessore regionale all'Urbanistica e alle attività estrattive <span class="highlight">Marco Scajola</span> afferma che
      <span class="italic"
        >"La sentenza del Tar va nella direzione della <span class="highlight">tutela</span> del territorio voluta dalla Giunta regionale, da sempre contraria a
        qualsiasi attività estrattiva all'interno dell'area del Parco"</span
      >.
    </div>
    <CustomButton
      direction={"left-button"}
      label={"Leggi l'articolo"}
      href={"https://genova.repubblica.it/cronaca/2022/05/28/news/liguria_titanio_nel_beigua_tar_conferma_no_a_ricerche_minerarie-351535040/"}
    />
  </div>
  <ContentCard
    contentId={"content-beigua2"}
    src={"img/beigua-tar.jpg"}
    title={"Il no del TAR"}
    subtitle={"Confermato il divieto di effettuare ricerche minerarie nell'area del Monte Tarinè"}
    buttonLabel={"Scopri la sentenza"}
    direction={"right-card"}
  />
</div>

<!-- contenuti per mobile -->
<div class="flex-column-4" style="margin-top: 4vw;">
  <DialogCard
    src={"img/beigua-parco.jpg"}
    title={"Parco Naturale Regionale del Beigua"}
    subtitle={"L'importanza del giacimento di titanio di Pianpaludo"}
    buttonLabel={"Scopri cosa c'è sotto"}
    direction={"left-card"}
    dialogLabel={"Approfondisci l'articolo"}
    href={"https://www.ivg.it/2021/04/titanio-del-beigua-ecco-perche-il-giacimento-di-piampaludo-fa-gola/"}
  >
    <div>
      Nel 1970 tra i comuni di Urbe e Sassello è stato scoperto un giacimento di biossido di <span class="highlight">titanio</span>, sepolto in corrispondenza
      dei Monti Antenna e Tariné. Sono stimate circa 9 milioni di tonnellate di biossido di Titanio, sottoforma di rutilo. Nel 1976 il ministero dell’Industria
      ha rilasciato alla Mineraria Italiana Srl una concessione ventennale sul territorio, ceduta poi alla Compagnia Europea per il Titanio.
      <br /><br />
      Secondo uno studio dell’Università di Genova degli anni '90, per sfruttare questo giacimento e ricavare solo il 6% di rutilo, si potrebbe arrivare a smuovere
      circa
      <span class="highlight">200 milioni</span> di metri cubi di terra, di cui le rocce amiantifere compongono tra il <span class="highlight">10%</span> e il
      <span class="highlight">15%</span>: una tale quantità equivale a una movimentazione pari a 30 aeroporti di Genova.
    </div>
  </DialogCard>

  <DialogCard
    dialogLabel={"Leggi l'articolo"}
    href={"https://genova.repubblica.it/cronaca/2022/05/28/news/liguria_titanio_nel_beigua_tar_conferma_no_a_ricerche_minerarie-351535040/"}
    src={"img/beigua-tar.jpg"}
    title={"Il no del TAR"}
    subtitle={"Confermato il divieto di effettuare ricerche minerarie nell'area del Monte Tarinè"}
    buttonLabel={"Scopri la sentenza"}
    direction={"right-card"}
  >
    <div>
      È stata depositata il <span class="highlight">21 maggio 2022</span> la "sentenza del Tribunale Amministrativo Regionale della Liguria che di fatto
      conferma il <span class="highlight">divieto</span> di effettuare ricerche minerarie nell'area del Monte Tariné".
      <br /><br />
      L'associazione di <span class="highlight">Legambiente Liguria</span> esprime
      <span class="italic"
        >"soddisfazione in merito alla sentenza del TAR che rappresenta la pietra tombale su qualsiasi ipotesi di sfruttamento minerario del comprensorio del
        Beigua"</span
      >.
      <br /><br />
      L'assessore regionale all'Urbanistica e alle attività estrattive <span class="highlight">Marco Scajola</span> afferma che
      <span class="italic"
        >"La sentenza del Tar va nella direzione della <span class="highlight">tutela</span> del territorio voluta dalla Giunta regionale, da sempre contraria a
        qualsiasi attività estrattiva all'interno dell'area del Parco"</span
      >.
    </div>
  </DialogCard>
  <div class="logo">
    <div class="mdc-typography--headline3 uppercase">E noi, vogliamo dare vita a questo inferno?</div>
    <img src="img/logo.png" alt="Logo" />
  </div>
</div>

<style>
  img {
    margin-top: 4vw;
    width: 8vw;
  }
  .content {
    display: flex;
    flex-direction: row;
    gap: 4vw;
    margin-top: 4vw;
  }
  .logo {
    margin-top: 10vw;
  }
  @media screen and (max-width: 600px) {
    .content {
      display: none;
    }
    #content-beigua1,
    #content-beigua2 {
      display: none;
    }
    img {
      margin-top: 8vw;
      width: 40vw;
    }
    .logo {
      margin-top: 20vw;
    }
  }
</style>

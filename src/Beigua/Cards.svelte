<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 10vw;">La situazione attuale</div>
<div class="flex-row-4" style="margin-top: 4vw;">
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
      Nel 1970 tra Urbe e Sassello è stato soperto un giacimento di rutilo sepolto in corrispondenza dei Monti Antenna e Tariné (rispettivamente 670 e 930 m s.l.m).
      Sono stimate circa 9 milioni di tonnellate di biossido di Titanio, sottoforma di rutilo.
      Nel 1976 il ministero dell’Industria rilascia alla Mineraria Italiana Srl una concessione ventennale, poi trasferita alla Compagnia Europea per il Titanio (C.E.T. Srl).
      <br/><br/>
      Secondo uno studio dell’Università di Genova degli anni '90, per sfruttare questo giacimento si potrebbe arrivare a smuovere circa 200 milioni di metri cubi di terre,
      da cui ricavare il 6% di rutilio, ma anche una montagna di rocce amiantifere, stimate tra il 10 e il 15% (vale a dire 20 milioni di metri cubi circa, 
      una movimentazione pari a circa 30 aeroporti di Genova).
      <br/><br/>
      Il <span class="highlight">Prof. Pietro Marescotti</span> del dipartimento Scienze della Terra, della Vita e dell’Ambiente dell’Università degli Studi di Genova, spiega:
      <span class="italic">"Il titanio di per sé non è un elemento critico né per la salute umana né per l’ambiente. E’ un metallo abbastanza stabile e anche biologicamente non presenta grossi problemi.
      Nel caso specifico del giacimento del Beigua il problema in realtà è collegato sia alle rocce che contengono il rutilo sia alle altre rocce dell’area:
      le eclogiti, serpentiniti e anfiboliti. Queste possono contenere altri metalli come nichel, cromo, cobalto ma soprattutto minerali classificati come <span class="highlight">amianto</span>.
      Eclogiti e serpentiniti, nella deliberazione di Regione Liguria (Delibera di Consiglio Regionale 105/96), sono inserite nella classe A, ovvero a <span class="highlight">rischio più elevato</span>"</span>.
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Leggi l'aticolo"}
      href={"https://www.ivg.it/2021/04/titanio-del-beigua-ecco-perche-il-giacimento-di-piampaludo-fa-gola/"}
    />
  </div>
</div>

<div class="flex-row-4" style="margin-top: 6vw;">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-beigua2">
    <div>
      E&grave; stata depositata il 21 maggio 2022 la "la sentenza del TAR della Liguria che di fatto conferma il divieto di effettuare ricerche minerarie nell'area del Monte Tarinè".
      <br/><br/>
      <span class="highlight">Legambiente Liguria</span> esprime <span class="italic">"soddisfazione in merito alla sentenza del Tar che rappresenta la pietra tombale su qualsiasi ipotesi
      di sfruttamento minerario del comprensorio del Beigua"</span>.
      <br/><br/>
      L'assessore regionale all'Urbanistica e alle attività estrattive <span class="highlight">Marco Scajola</span> afferma che <span class="italic">"La sentenza del Tar va nella direzione della tutela del territorio,
      la stessa auspicata e voluta dalla Giunta regionale, da sempre contraria a qualsiasi attività estrattiva all'interno dell'area del Parco.
      Chiediamo al Governo di fornire strumenti adeguati agli Enti locali per decidere il proprio destino senza dover attendere i tribunali"</span>.
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

<div class="mdc-typography--headline4 uppercase" style="margin-top: 10vw;">Frase finale ad effetto?</div>

<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
  import DialogCard from "../Components/DialogCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 12vw;">Come si sono schierati i cittadini con ideologie differenti?</div>
<div class="content">
  <ContentCard
    contentId={"content-minacu1"}
    src={"img/minacu-court.png"}
    title={"Le infinite battaglie legali"}
    subtitle={"Come le vittime hanno cercato giustizia contro i danni della miniera"}
    buttonLabel={"Scopri di più"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-minacu1">
    <div>
      Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,
      scegliendo sindaci, consiglieri e sacerdoti schierati a <span class="highlight">difesa dell'amianto</span>. Denigrare pubblicamente SAMA può essere
      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato
      <span class="highlight">accordi</span>
      con la compagnia per ottenere un risarcimento sui danni sanitari.
      <br /><br />
      La causa in corso è portata avanti dalla <span class="highlight">ABREA</span>, associazione brasiliana a difesa delle vittime di amianto, fondata da
      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le
      <span class="highlight">spese mediche</span> per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute "associabili all'amianto".
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Approfondisci l'inchiesta"}
      href={"https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"}
    />
  </div>
</div>

<div class="content">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-minacu2">
    <div>
      Nel cosiddetto "letto di polvere", luogo in cui il minerale veniva separato, gli operai, tra i quali molte donne, erano coperti di polvere.<br />
      Ce ne dà una testimonianza chiara <span class="highlight">Evandra Vieira Brito</span>, che ha perso il marito (un ex dipendente di SAMA) a causa di un
      cancro nel 2009, ricordando:
      <span class="italic">"C'erano circa 20 ragazze coperte dalla polvere. Sono <span class="highlight">morte tutte</span> dopo aver vomitato sangue"</span>.
      <br /><br />
      Nonostante questo tipo di testimonianze, gruppi favorevoli alla miniera hanno dichiarato che
      <span class="italic">"il modo in cui viene estratto l'amianto a Minaçu non è dannoso per la salute"</span> e che
      <span class="italic">"l'azienda rispetta tutte le leggi relative alla <span class="highlight">salute sul lavoro</span>"</span>. Affermano inoltre che le
      persone che si ammalano in miniera in questo momento è perché si sono ammalate a causa del lavoro svolto precedentemente presso un'altra miniera e sono
      successivamente emigrate per lavoro a Cana Brava.
    </div>
    <CustomButton direction={"left-button"} label={"Leggi l'articolo"} href={"https://ejatlas.org/conflict/amianto-mining-in-minacu-goias"} />
  </div>
  <ContentCard
    contentId={"content-minacu2"}
    src={"img/minacu-evandra.jpg"}
    title={"Evandra Vieira Brito"}
    subtitle={"Vedova di un ex dipendente di SAMA"}
    buttonLabel={"Leggi la testimonianza"}
    direction={"right-card"}
  />
</div>

<!-- contenuti per mobile -->
<div class="flex-column-4" style="margin-top: 4vw;">
  <DialogCard
    src={"img/minacu-court.png"}
    title={"Le infinite battaglie legali"}
    subtitle={"Come le vittime hanno cercato giustizia contro i danni della miniera"}
    buttonLabel={"Scopri di più"}
    direction={"left-card"}
    dialogLabel={"Approfondisci l'inchiesta"}
    href={"https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"}
  >
    <div>
      Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,
      scegliendo sindaci, consiglieri e sacerdoti schierati a <span class="highlight">difesa dell'amianto</span>. Denigrare pubblicamente SAMA può essere
      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato
      <span class="highlight">accordi</span>
      con la compagnia per ottenere un risarcimento sui danni sanitari.
      <br /><br />
      La causa in corso è portata avanti dalla <span class="highlight">ABREA</span>, associazione brasiliana a difesa delle vittime di amianto, fondata da
      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le
      <span class="highlight">spese mediche</span> per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute "associabili all'amianto".
    </div>
  </DialogCard>

  <DialogCard
    src={"img/minacu-evandra.jpg"}
    title={"Evandra Vieira Brito"}
    subtitle={"Vedova di un ex dipendente di SAMA"}
    buttonLabel={"Leggi la testimonianza"}
    direction={"right-card"}
    dialogLabel={"Leggi l'articolo"}
    href={"https://ejatlas.org/conflict/amianto-mining-in-minacu-goias"}
  >
    <div>
      Nel cosiddetto "letto di polvere", luogo in cui il minerale veniva separato, gli operai, tra i quali molte donne, erano coperti di polvere.<br />
      Ce ne dà una testimonianza chiara <span class="highlight">Evandra Vieira Brito</span>, che ha perso il marito (un ex dipendente di SAMA) a causa di un
      cancro nel 2009, ricordando:
      <span class="italic">"C'erano circa 20 ragazze coperte dalla polvere. Sono <span class="highlight">morte tutte</span> dopo aver vomitato sangue"</span>.
      <br /><br />
      Nonostante questo tipo di testimonianze, gruppi favorevoli alla miniera hanno dichiarato che
      <span class="italic">"il modo in cui viene estratto l'amianto a Minaçu non è dannoso per la salute"</span> e che
      <span class="italic">"l'azienda rispetta tutte le leggi relative alla <span class="highlight">salute sul lavoro</span>"</span>. Affermano inoltre che le
      persone che si ammalano in miniera in questo momento è perché si sono ammalate a causa del lavoro svolto precedentemente presso un'altra miniera e sono
      successivamente emigrate per lavoro a Cana Brava.
    </div>
  </DialogCard>
</div>

<style>
  .content {
    display: flex;
    flex-direction: row;
    gap: 4vw;
    margin-top: 4vw;
  }
  @media screen and (max-width: 600px) {
    .content {
      display: none;
    }

    #content-minacu1,
    #content-minacu2 {
      display: none;
    }
  }
</style>

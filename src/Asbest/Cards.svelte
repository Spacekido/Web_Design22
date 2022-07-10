<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
  import DialogCard from "../Components/DialogCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 14vw;">Perché preoccuparsi così tanto dell'amianto?</div>
<div class="content">
  <ContentCard
    contentId={"content-asbest1"}
    src={"img/asbest-trump.jpeg"}
    title={"Donald Trump"}
    subtitle={"Come il 45° presidente degli Stati Uniti viene usato nella propaganda a favore dell'amianto"}
    buttonLabel={"Approfondisci la storia"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-asbest1">
    <div>
      Attaccato per decenni dai difensori della salute, l'ostinatamente
      <span class="highlight">provocatoria</span> azienda russa produttrice di amianto, trova nell'ex presidente statunitense Donald Trump, la figura perfetta
      per una campagna volta a
      <span class="highlight">riabilitare</span> l'immagine profondamente macchiata del proprio prodotto.
      <br /><br />
      Nel 2018 la società Russa ha messo in circolazione pallet adornati con un sigillo raffigurante la faccia di Trump e recitante la seguente frase
      <span class="italic">"Approvato da <span class="highlight">Donald Trump</span>, 45° presidente degli Stati Uniti"</span>
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Leggi l'articolo"}
      href={"https://www.washingtonpost.com/news/business/wp/2018/07/11/approved-by-donald-trump-asbestos-sold-by-russian-company-is-branded-with-the-presidents-face/"}
    />
  </div>
</div>

<div class="content">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-asbest2">
    <div>
      Il dottor <span class="highlight">Igor Bragin</span> ha liquidato come <span class="italic">"non corrispondente alla realtà"</span> uno studio scientifico
      del 2016 che mostrava tassi elevati di cancro ai polmoni nei pressi della miniera.
      <br /><br />
      Lo studio, una revisione comparativa dei <span class="highlight">tassi di mortalità</span> ad Asbest e nella regione circostante di Sverdlovsk, ha
      rilevato che "i tassi di mortalità per tumori del polmone, dello stomaco e del colon erano statisticamente e significativamente
      <span class="highlight">più alti</span>
      nella città di Asbest".
      <br /><br />
      L'incidenza del <span class="highlight">mesotelioma</span>, una malattia polmonare ampiamente attribuita all'amianto in Occidente,
      <span class="highlight">non è stata studiata</span> a sufficienza dalla Russia impedendone il corretto monitoraggio sanitario.
    </div>
  </div>
  <ContentCard
    contentId={"content-asbest2"}
    src={"img/asbest-city.jpg"}
    title={"Igor Bragin"}
    subtitle={"Medico capo del complesso ospedaliero Asbest City Hospital"}
    buttonLabel={"Scopri la sua opinione"}
    direction={"right-card"}
  />
</div>

<div class="content">
  <ContentCard
    contentId={"content-asbest3"}
    src={"img/asbest-stepanov.jpg"}
    title={"Viktor Stepanov"}
    subtitle={"Ex lavoratore della fabbrica di Uralasbest"}
    buttonLabel={"Leggi le sua parole"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2 italic" id="content-asbest3">
    <div>
      "Sono un pensionato di 88 anni che ha trascorso decenni a lavorare nella fabbrica di amianto. La mia stessa età avanzata e il mantenimento di una buona
      salute sono la prova che tutta l'<span class="highlight">isteria sull'amianto</span> non poteva essere vera.
      <br /><br />
      Mentre lavoravo bevevo una <span class="highlight">bottiglia di latte</span> al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi
      dalle malattie. Tutto è pericoloso in una certa misura. Il cento per cento di certezza che qualcosa non sia dannoso non puó esistere".
    </div>
    <CustomButton direction={"right-button"} label={"Leggi l'articolo"} href={"https://www.nytimes.com/2019/04/07/world/europe/asbestos-russia-mine.html"} />
  </div>
</div>

<div class="content">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-asbest4">
    <div>
      <span class="highlight">Valentin K. Zemskov</span>, 82 anni, ha lavorato nella miniera per 40 anni e ha sviluppato l'asbestosi, causata dall’inalazione
      delle fibre di amianto.
      <br /><br />
      <span class="italic">"C'era così tanta polvere che non potevi vedere un uomo in piedi accanto a te"</span>, dice ricordando gli anni di lavoro.<br />
      Per la disabilità, la fabbrica aggiunge <span class="highlight">4.500 rubli</span> al suo assegno mensile per la pensione, una cifra ridicola sufficiente
      a coprire solo pochi pasti.
      <br /><br />
      Tuttavia, è convinto che la città non abbia altra scelta.
      <span class="italic"
        >"Se non avessimo la fabbrica, <span class="highlight">come vivremmo?</span>
        Dobbiamo continuare a tenerla aperta in modo da avere <span class="highlight">posti di lavoro</span> per tutti"</span
      >, afferma senza fiato mentre parla nel cortile di una casa di riposo.
    </div>
    <CustomButton
      direction={"left-button"}
      label={"Leggi l'articolo"}
      href={"https://www.nytimes.com/2013/07/14/business/global/city-in-russia-unable-to-kick-asbestos-habit.html"}
    />
  </div>
  <ContentCard
    contentId={"content-asbest4"}
    src={"img/asbest-miner.png"}
    title={"Valentin K. Zemskov"}
    subtitle={"Ex lavoratore della miniera"}
    buttonLabel={"Scopri la testimonianza"}
    direction={"right-card"}
  />
</div>

<!-- contenuti per mobile -->
<div class="flex-column-4" style="margin-top: 4vw;">
  <DialogCard
    src={"img/asbest-trump.jpeg"}
    title={"Donald Trump"}
    subtitle={"Come il 45° presidente degli Stati Uniti viene usato nella propaganda a favore dell'amianto"}
    buttonLabel={"Approfondisci la storia"}
    direction={"left-card"}
    dialogLabel={"Leggi l'articolo"}
    href={"https://www.washingtonpost.com/news/business/wp/2018/07/11/approved-by-donald-trump-asbestos-sold-by-russian-company-is-branded-with-the-presidents-face/"}
  >
    <div>
      Attaccato per decenni dai difensori della salute, l'ostinatamente
      <span class="highlight">provocatoria</span> azienda russa produttrice di amianto, trova nell'ex presidente statunitense Donald Trump, la figura perfetta
      per una campagna volta a
      <span class="highlight">riabilitare</span> l'immagine profondamente macchiata del proprio prodotto.
      <br /><br />
      Nel 2018 la società Russa ha messo in circolazione pallet adornati con un sigillo raffigurante la faccia di Trump e recitante la seguente frase
      <span class="italic">"Approvato da <span class="highlight">Donald Trump</span>, 45° presidente degli Stati Uniti"</span>
    </div>
  </DialogCard>

  <DialogCard
    src={"img/asbest-city.jpg"}
    title={"Igor Bragin"}
    subtitle={"Medico capo del complesso ospedaliero Asbest City Hospital"}
    buttonLabel={"Scopri la sua opinione"}
    direction={"right-card"}
  >
    <div>
      Il dottor <span class="highlight">Igor Bragin</span> ha liquidato come <span class="italic">"non corrispondente alla realtà"</span> uno studio scientifico
      del 2016 che mostrava tassi elevati di cancro ai polmoni nei pressi della miniera.
      <br /><br />
      Lo studio, una revisione comparativa dei <span class="highlight">tassi di mortalità</span> ad Asbest e nella regione circostante di Sverdlovsk, ha
      rilevato che "i tassi di mortalità per tumori del polmone, dello stomaco e del colon erano statisticamente e significativamente
      <span class="highlight">più alti</span>
      nella città di Asbest".
      <br /><br />
      L'incidenza del <span class="highlight">mesotelioma</span>, una malattia polmonare ampiamente attribuita all'amianto in Occidente,
      <span class="highlight">non è stata studiata</span> a sufficienza dalla Russia impedendone il corretto monitoraggio sanitario.
    </div>
  </DialogCard>

  <DialogCard
    src={"img/asbest-stepanov.jpg"}
    title={"Viktor Stepanov"}
    subtitle={"Ex lavoratore della fabbrica di Uralasbest"}
    buttonLabel={"Leggi le sua parole"}
    direction={"left-card"}
    dialogLabel={"Leggi l'articolo"}
    href={"https://www.nytimes.com/2019/04/07/world/europe/asbestos-russia-mine.html"}
  >
    <div>
      "Sono un pensionato di 88 anni che ha trascorso decenni a lavorare nella fabbrica di amianto. La mia stessa età avanzata e il mantenimento di una buona
      salute sono la prova che tutta l'<span class="highlight">isteria sull'amianto</span> non poteva essere vera.
      <br /><br />
      Mentre lavoravo bevevo una <span class="highlight">bottiglia di latte</span> al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi
      dalle malattie. Tutto è pericoloso in una certa misura. Il cento per cento di certezza che qualcosa non sia dannoso non puó esistere".
    </div>
  </DialogCard>

  <DialogCard
    dialogLabel={"Leggi l'articolo"}
    href={"https://www.nytimes.com/2013/07/14/business/global/city-in-russia-unable-to-kick-asbestos-habit.html"}
    src={"img/asbest-miner.png"}
    title={"Valentin K. Zemskov"}
    subtitle={"Ex lavoratore della miniera"}
    buttonLabel={"Scopri la testimonianza"}
    direction={"right-card"}
  >
    <div>
      <span class="highlight">Valentin K. Zemskov</span>, 82 anni, ha lavorato nella miniera per 40 anni e ha sviluppato l'asbestosi, causata dall’inalazione
      delle fibre di amianto.
      <br /><br />
      <span class="italic">"C'era così tanta polvere che non potevi vedere un uomo in piedi accanto a te"</span>, dice ricordando gli anni di lavoro.<br />
      Per la disabilità, la fabbrica aggiunge <span class="highlight">4.500 rubli</span> al suo assegno mensile per la pensione, una cifra ridicola sufficiente
      a coprire solo pochi pasti.
      <br /><br />
      Tuttavia, è convinto che la città non abbia altra scelta.
      <span class="italic"
        >"Se non avessimo la fabbrica, <span class="highlight">come vivremmo?</span>
        Dobbiamo continuare a tenerla aperta in modo da avere <span class="highlight">posti di lavoro</span> per tutti"</span
      >, afferma senza fiato mentre parla nel cortile di una casa di riposo.
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

    #content-asbest1,
    #content-asbest2,
    #content-asbest3,
    #content-asbest4 {
      display: none;
    }
  }
</style>

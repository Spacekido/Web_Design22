<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
  import DialogCard from "../Components/DialogCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 23vw;">La miniera raccontata direttamente dai suoi testimoni</div>
<div class="content">
  <ContentCard
    contentId={"content-balangero1"}
    src={"img/balangero-berrino.jpg"}
    title={"Dott. Franco Berrino"}
    subtitle={"Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori."}
    buttonLabel={"Leggi la testimonianza"}
    direction={"left-card"}
  />

  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-balangero1">
    <div>
      Una testimonianza diretta della tragedia causata dall'amianto ci arriva dal medico epidemiologo ed esperto di tumori
      <span class="highlight">Franco Berrino</span>, cresciuto proprio a Balangero dove il padre, l'ingegnere Giovanni Berrino, era stato nominato direttore
      tecnico della miniera.
      <br /><br />
      <span class="italic">
        "Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle
        maniche di cotone. Alla fine è morto di amianto: <span class="highlight">tumore al polmone</span> a 72 anni senza mai aver fumato una sigaretta. Stesso destino
        per mio fratello: mesotelioma, a 67 anni."
      </span>
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Leggi l'intervista"}
      href={"https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"}
    />
  </div>
</div>

<div class="content">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-balangero2">
    <div>
      Nel novembre del 1941 <span class="highlight">Primo Levi</span>, neolaureato in chimica, lavorò presso la cava di Balangero per compiere ricerche
      sull’estrazione del prezioso nichel dalla roccia di serpentino. Levi descrive la cava paragonandola alla rappresentazione dantesca dei
      <span class="highlight">gironi infernali</span>, con fibre di amianto onnipresenti, raffigurate come un demone, asfissiante e ostile. Celebre è diventata
      la sua frase <span class="italic">"C’era amianto dappertutto, come una neve cenerina"</span>.
      <br /><br />
      Nel 1954 <span class="highlight">Italo Calvino</span> arriva nella miniera piemontese come redattore del quotidiano "l’Unità" occupandosi del rischio
      amianto e della sorte degli operai della cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo
      <span class="italic"
        >"Il grigio polverone d’asbesto della cava che dove arriva <span class="highlight">brucia</span>, <span class="highlight">foglie e polmoni</span>"</span
      >.
    </div>
    <CustomButton
      direction={"left-button"}
      label={"Leggi l'articolo"}
      href={"https://www.inail.it/cs/internet/comunicazione/news-ed-eventi/news/ucm_106891_amianto_a_balangero_la_minier.html"}
    />
  </div>
  <ContentCard
    contentId={"content-balangero2"}
    src={"img/balangero-levi-calvino.jpg"}
    title={"Primo Levi e Italo Calvino"}
    subtitle={"L'Amiantifera di Balangero viene denunciata anche dalla letteratura italiana del Novecento"}
    buttonLabel={"Scopri i loro racconti"}
    direction={"right-card"}
  />
</div>

<!-- contenuti per mobile -->
<div class="flex-column-4" style="margin-top: 4vw;">
  <DialogCard
    src={"img/balangero-berrino.jpg"}
    title={"Dott. Franco Berrino"}
    subtitle={"Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori."}
    buttonLabel={"Leggi la testimonianza"}
    direction={"left-card"}
    dialogLabel={"Leggi l'intervista"}
    href={"https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"}
  >
    <div>
      Una testimonianza diretta della tragedia causata dall'amianto ci arriva dal medico epidemiologo ed esperto di tumori
      <span class="highlight">Franco Berrino</span>, cresciuto proprio a Balangero dove il padre, l'ingegnere Giovanni Berrino, era stato nominato direttore
      tecnico della miniera.
      <br /><br />
      <span class="italic">
        "Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle
        maniche di cotone. Alla fine è morto di amianto: <span class="highlight">tumore al polmone</span> a 72 anni senza mai aver fumato una sigaretta. Stesso destino
        per mio fratello: mesotelioma, a 67 anni."
      </span>
    </div>
  </DialogCard>

  <DialogCard
    dialogLabel={"Leggi l'articolo"}
    href={"https://www.inail.it/cs/internet/comunicazione/news-ed-eventi/news/ucm_106891_amianto_a_balangero_la_minier.html"}
    src={"img/balangero-levi-calvino.jpg"}
    title={"Primo Levi e Italo Calvino"}
    subtitle={"L'Amiantifera di Balangero viene denunciata anche dalla letteratura italiana del Novecento"}
    buttonLabel={"Scopri i loro racconti"}
    direction={"right-card"}
  >
    <div>
      Nel novembre del 1941 <span class="highlight">Primo Levi</span>, neolaureato in chimica, lavorò presso la cava di Balangero per compiere ricerche
      sull’estrazione del prezioso nichel dalla roccia di serpentino. Levi descrive la cava paragonandola alla rappresentazione dantesca dei
      <span class="highlight">gironi infernali</span>, con fibre di amianto onnipresenti, raffigurate come un demone, asfissiante e ostile. Celebre è diventata
      la sua frase <span class="italic">"C’era amianto dappertutto, come una neve cenerina"</span>.
      <br /><br />
      Nel 1954 <span class="highlight">Italo Calvino</span> arriva nella miniera piemontese come redattore del quotidiano "l’Unità" occupandosi del rischio
      amianto e della sorte degli operai della cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo
      <span class="italic"
        >"Il grigio polverone d’asbesto della cava che dove arriva <span class="highlight">brucia</span>, <span class="highlight">foglie e polmoni</span>"</span
      >.
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

    #content-balangero1,
    #content-balangero2 {
      display: none;
    }
  }
</style>

<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase">La miniera raccontata direttamente dai testimoni</div>
<div class="flex-row-8">
  <ContentCard
    contentId={"content-balangero1"}
    src={"img/franco-berrino.jpg"}
    title={"Dott. Franco Berrino"}
    subtitle={"Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori."}
    buttonLabel={"Scopri la sua testimonianza"}
  />

  <div class="mdc-typography--body1 hidden right flex-column-4" id="content-balangero1">
    <div>
      Una testimonianza diretta della tragedia che l'amianto ha causato ci arriva dal medico epidemiologo ed esperto di tumori <span class="highlight"
        >Franco Berrino</span
      >
      , cresciuto proprio a Balangero dove il padre lavorava nella miniera.
      <br /><br />
      <span class="italic">
        "Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle
        maniche di cotone. Alla fine è morto di amianto: tumore al polmone a 72 anni senza mai aver fumato una sigaretta. Stesso destino per mio fratello:
        mesotelioma, a 67 anni."
      </span>
    </div>
    <CustomButton
      align={"right"}
      label={"Leggi l'intervista"}
      href={"https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"}
    />
  </div>
</div>

<div class="flex-row-8">
  <div class="mdc-typography--body1 hidden left flex-column-4" id="content-balangero2">
    Nel novembre del 1941 Primo Levi, neolaureato in chimica, lavorò presso la cava di Balangero per compiere ricerche sull’estrazione del prezioso nichel dalla
    roccia di serpentino. Levi descrive la cava paragonandola alla rappresentazione dantesca dei gironi infernali, con fibre di amianto onnipresenti,
    raffigurate come un demone, asfissiante e ostile. Celebre é diventata la sua frase “C’era amianto dappertutto, come una neve cenerina.”
    <br /><br />
    Nel 1954 Italo Calvino arriva nella miniera piemontese come redattore del quotidiano “L’Unità” occupandosi del rischio amianto e della sorte degli operai della
    cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo <br />“Il grigio polverone d’asbesto della cava che dove arriva
    brucia, foglie e polmoni”.
  </div>
  <ContentCard
    contentId={"content-balangero2"}
    src={"img/levi-calvino.jpg"}
    title={"Primo Levi e Italo Calvino"}
    subtitle={"L'Amiantifera di Balangero viene denunciata anche dalla letteratura italiana del Novecento"}
    buttonLabel={"Scopri i loro racconti"}
    direction={"mirrored"}
  />
</div>

<style>
  .left {
    text-align: left;
    align-items: start;
  }
  .right {
    text-align: right;
    align-items: end;
  }
</style>

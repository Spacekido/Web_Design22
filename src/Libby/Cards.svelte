<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<div class="mdc-typography--headline4 uppercase">Si puó tornare indietro da questo disastro?</div>
<div class="flex-row-8">
  <ContentCard
    contentId={"content-libby1"}
    src={"img/ralph-hutt.jpg"}
    title={"Ralph Hutt"}
    subtitle={"La testimonianza di un ex-operaio presso l'azienda mineraria W.R. Grace & Company."}
    buttonLabel={"Scopri la sua storia"}
  />

  <div class="mdc-typography--body1 hidden right flex-column-4" id="content-libby1">
    Il signor Ralph Hutt ha lavorato a contatto con l'amianto soltanto per 18 mesi e gli è stata diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le
    uniche precauzioni fornite ai lavoratori dall'azienda erano mascherine di carta. Quando ha chiesto al suo supervisore una maggiore protezione, gli fu detto
    di non preoccuparsi poiché ció che respiravano era solo polvere.
    <br /><br />
    Giá da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della capacità di respirare. I dirigenti dell'azienda
    erano al corrente della presenza di amianto nello stabilimento, ma decisero di tenere tutti i lavoratori, tra cui Ralph, all'oscuro.
    <div class="italic">
      "Questo non è il modo in cui me ne voglio andare," ha detto. "Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott'acqua o strangolato. È
      così che ci si sente."
    </div>
    <CustomButton align={"right"} label={"Guarda l'intervista"} href={"https://youtu.be/ILklSy6QLbI"} />
  </div>
</div>

<div class="flex-row-8">
  <div class="mdc-typography--body1 hidden left flex-column-4" id="content-libby2">
    Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono morti per malattie
    correlate all'amianto, e circa 1 su 10 tra tutti abitanti é attualmente malato.
    <br /><br />
    L’Agenzia per la Protezione Ambientale Americana ha effettuato sopralluoghi in circa 8200 proprietà, di cui piú di 2400 siti sono stati risanificati completamente.
    Tra questi rientravano attività commerciali, giardini, abitazioni private, parchi pubblici e altri spazi pubblici frequentati.
    <br /><br />
    Ad oggi, per la decontaminazione e il risanamento della città di Libby, sono stati rimossi e rimpiazzati complessivamente più di 750’000 metri cubi di rifiuti
    e materiali da costruzione, causando una spesa di oltre 600 milioni di dollari statali.
    <CustomButton align={"right"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
  </div>
  <ContentCard
    contentId={"content-libby2"}
    src={"img/libby2.jpg"}
    title={"La situazione a Libby oggi"}
    subtitle={"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera."}
    buttonLabel={"Esplora"}
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

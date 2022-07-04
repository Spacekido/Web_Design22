<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 16vw;">Si puó tornare indietro da questo disastro?</div>
<div class="flex-row-4" style="margin: 4vw 0 0 2vw;">
  <ContentCard
    contentId={"content-libby1"}
    src={"img/libby-hutt.jpg"}
    title={"Ralph Hutt"}
    subtitle={"La testimonianza di un ex-operaio presso l'azienda mineraria W.R. Grace & Company."}
    buttonLabel={"Ascolta la sua storia"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-libby1">
    <div>
      Il signor <span class="highlight">Ralph Hutt</span> ha lavorato a contatto con l'amianto soltanto per <span class="highlight">18 mesi</span> e gli è stata
      diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le uniche precauzioni fornite ai lavoratori dall'azienda erano
      <span class="highlight">mascherine di carta</span>. Quando ha chiesto al suo supervisore una maggiore protezione, gli fu detto di non preoccuparsi poiché
      ció che respiravano era solo polvere.
      <br /><br />
      Giá da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della
      <span class="highlight">capacità di respirare</span>. I dirigenti dell'azienda erano al corrente della presenza di amianto nello stabilimento, ma decisero
      di tenere tutti i lavoratori, tra cui Ralph, all'oscuro.
      <br /><br />
      <div class="italic">
        "Questo non è il modo in cui me ne voglio andare," ha detto. "Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott'acqua o <span
          class="highlight">strangolato</span
        >. È così che ci si sente."
      </div>
    </div>
    <CustomButton direction={"right-button"} label={"Guarda l'intervista"} href={"https://youtu.be/ILklSy6QLbI"} />
  </div>
</div>

<div class="flex-row-4" style="margin-top: 6vw;">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-libby2">
    <div>
      Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono
      <span class="highlight">morti</span> per malattie correlate all'amianto, e circa 1 su 10 tra tutti abitanti é
      <span class="highlight">attualmente malato</span>.
      <br /><br />
      L’Agenzia per la Protezione Ambientale Americana ha effettuato sopralluoghi in circa <span class="highlight">8200 proprietà</span>, di cui piú di 2400
      siti sono stati risanificati completamente. Tra questi rientravano attività commerciali, giardini, abitazioni private, parchi pubblici e altri
      <span class="highlight">spazi pubblici</span> frequentati.
      <br /><br />
      Ad oggi, per la decontaminazione e il <span class="highlight">risanamento</span> della città di Libby, sono stati rimossi e rimpiazzati complessivamente più
      di 750’000 metri cubi di rifiuti e materiali da costruzione, causando una spesa di oltre 600 milioni di dollari statali.
    </div>
    <CustomButton direction={"left-button"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
  </div>
  <ContentCard
    contentId={"content-libby2"}
    src={"img/libby-today.jpg"}
    title={"La situazione a Libby oggi"}
    subtitle={"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera."}
    buttonLabel={"Scopri di piú"}
    direction={"right-card"}
  />
</div>

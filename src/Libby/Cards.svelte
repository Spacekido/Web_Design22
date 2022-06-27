<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import CustomCard from "../Components/CustomCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="flex-column" style="gap: 50px">
  <div class="flex-row">
    <CustomCard
      contentId={"body-libby1"}
      src={"img/ralph-hutt.jpg"}
      title={"Ralph Hutt"}
      subtitle={"Ex-operaio presso l'azienda mineraria W.R. Grace & Company."}
      buttonLabel={"Scopri la sua storia"}
    />

    <div class="mdc-typography--body1 hidden right flex-column" id="body-libby1">
      Il signor Ralph Hutt ha lavorato a contatto con l'amianto soltanto per 18 mesi e gli è stata diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le
      uniche precauzioni fornite ai lavoratori dall'azienda erano mascherine di carta. Quando ha chiesto al suo supervisore una maggiore protezione, gli fu
      detto di non preoccuparsi poiché ció che respiravano era solo polvere.
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

  <div class="flex-row">
    <div class="mdc-typography--body1 hidden left flex-column" id="body-libby2">
      Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono morti per
      malattie correlate all'amianto, e circa 1 su 10 abitanti é attualmente malato.
      <br /><br />
      Libby è ancora un sito contaminato. Da quando la pulizia è iniziata nel 2000, più di 2.600 luoghi contaminati come cantieri, cumuli di avanzi minerari e parchi
      pubblici sono stati sanificati, inserendo terreno pulito e portando via quello contaminato.
      <CustomButton align={"right"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
    </div>
    <CustomCard
      contentId={"body-libby2"}
      src={"img/libby2.jpg"}
      title={"La situazione a Libby oggi"}
      subtitle={"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera."}
      buttonLabel={"Esplora"}
    />
  </div>
</div>

<style>
  [id^="body-"] {
    align-items: center;
    justify-content: center;
    gap: 5vh;
    transition: all 0.5s;
  }
  .left {
    text-align: left;
    align-items: start;
    margin-right: 50px;
  }
  .right {
    text-align: right;
    align-items: end;
    margin-left: 50px;
  }
</style>

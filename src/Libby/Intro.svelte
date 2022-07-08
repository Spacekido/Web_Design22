<script>
  import CustomButton from "../Components/CustomButton.svelte";
</script>

<div class="mdc-typography--headline1 uppercase">Libby, USA</div>

<div class="left">
  <div class="mdc-typography--headline4 uppercase">Storia del passato</div>
  <div class="mdc-typography--body1">
    La cittadina di Libby, in Montana, è il sito di uno dei peggiori <span class="highlight">disastri ambientali</span> causati dall'uomo. La polvere di amianto
    tossico proveniente dalle miniere di vermiculite ha ucciso centinaia di residenti, ammalandone altre migliaia.
    <br /><br />
    Nel 1963, la W.R. Grace & Company iniziò a scavare un deposito di <span class="highlight">vermiculite</span> su una cima boschiva vicino a Libby. Il
    minerale, relativamente innocuo, è stato utilizzato come isolamento delle soffitte fino agli anni '80. Ma nello stesso deposito è stato trovato un tipo
    naturale di <span class="highlight">amianto mortale</span>.
    <br /><br />
    Per decenni, la miniera ha prodotto <span class="highlight">tonnellate di polvere</span> al giorno, che non solo fluttuava ovunque negli stabilimenti, ma
    inondava l'aria respirabile di gran parte della città. L'azienda sapeva che la vermiculite era <span class="highlight">contaminata</span> dall'amianto, ma non
    avvertì nessuno e continuò ad operare fino al 1990.
  </div>
</div>

<div class="right">
  <div class="mdc-typography--headline4 uppercase primary">Conseguenze sul presente</div>
  <div class="mdc-typography--body1">
    Quando l'azienda venne chiusa, gli operai del governo chiamati per il risanamento hanno trovato l'amianto quasi <span class="highlight">dappertutto</span>:
    nei polmoni degli operai e delle loro famiglie, sul campo da baseball e sulle piste da corsa del liceo a cui l'azienda aveva donato il materiale per la
    copertura.
    <br /><br />
    Gli effetti dolorosi delle polveri continuano <span class="highlight">lenti ma inesorabili</span>: ci vogliono decenni perché i sintomi delle malattie da
    amianto si manifestino, infatti i bambini che hanno giocato a baseball o corso sulle piste a contatto con l'amianto stanno iniziando ad ammalarsi solo ora.
    <br /><br />
    <CustomButton label="documentario" href="https://youtu.be/cy3piCUPIkc?t=492" direction="right-button" />
  </div>
</div>

<style>
  .left {
    text-align: left;
    margin: 2vw 30vw 0 0;
  }
  .right {
    text-align: right;
    margin: 15vw 0 0 30vw;
  }
</style>

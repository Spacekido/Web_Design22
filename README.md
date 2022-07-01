# Sito per il corso di Web Design 2022 - Gruppo 10

### Panoramica dei file del progetto

`package.json` elenca le dipendenze e i comandi del progetto.

Nella cartella `src/` si trovano i file sorgente da modificare:
- I file `.svelte` sono i componenti, contengono JavaScript, HTML e CSS (nested) 
- `main.js` raccoglie i componenti usati e li esporta sulla pagina 
- `theme/_smui-theme.scss` contiene lo stile del tema di material (colori, CSS globale...) 

Nella cartella `docs/` si trovano gli elementi generati visualizzati dall'utente.

### Istruzioni per sviluppare in Svelte

I comandi da eseguire sono:
- `npm install` per installare le dipendenze (librerie di svelte, di material...), serve soltanto la prima volta
- `npm run prepare` per compilare il CSS del tema di material design, serve ogni volta che si modifica il file o una sua dipendenza
- `npm run dev` per hostare il sito in locale in modalitá debug, si consiglia di avviarlo in un terminale separato, aggiorna automaticamente i cambiamenti nel browser

### Istruzioni per deployare il sito su Github Pages

Basta eseguire il comando:
- `npm run deploy` che genera i file servibili nella cartella `docs/`, pubblica i cambiamenti sulla branch `gh-pages` e quindi sul sito hostato online

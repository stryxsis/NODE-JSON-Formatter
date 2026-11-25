# JSON Formatter

E' necessario creare uno strumento da riga di comando che legga un file JSON e stampi il JSON formattatto sul terminale

## ToDo:

- [X] Accettare un percorso per un file JSON dalla CLI.
- [X] Se no visualizzare un messaggio di errore.
- [x] Creare un file 'user.json'.

```txt
{"name":"Ava","role":"Developer","skills":["JavaScript","Node.js"]}
```

- [x] Creare un file 'broken.json'.

```txt
{"name":"Ava","role":"Developer","skills":["JavaScript","Node.js"]
```

- [X] Se il JSON è invalida visualizzare un errore
- [X] Se il file non puo essere letto visualizzare un errore
- [X] L'output deve essere come mostrato sotto nel file

## Esempio di comandi:

```bash
node json-formatter.js user.json
node json-formatter.js broken.json
node json-formatter.js missing.json
node json-formatter.js
```

## Esecuzione:

### Corretta:

```json
{
  "name": "Ava",
  "role": "Developer",
  "skills": ["JavaScript", "Node.js"]
}
```

### ERRORE:

Se il file contine un JSON invalido:

```txt
error: invalid JSON in file: broken.json
```

Se il file non puo essere letto:

```txt
error: could not read file: missing.json
```

Se l'utnete non specifica un percorso file:

```txt
error: please provide a JSON file path
```

## Materiale:

- _process.argv_: per leggere il percorso del file da CLI
- _node:fs/promise_: Per leggere il contenuto dei file
- _JSON.parse()_: per trassformare testo JSON in JSON javascript
- _JSON.stringify()_: per printare il formato JSON

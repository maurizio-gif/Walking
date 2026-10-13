# Walking Program · Revisione 3: riepilogo interno

**Solo per uso interno (Ready2Digital). Non inviare al cliente.**

File consegnati:

- `proposta/Walking-Program_Proposta_Rev3.pdf`: proposta per il cliente, 8 pagine A4 (7 di proposta + 1 di appendice).
- `proposta/Walking-Program_Proposta_Rev3.html`: sorgente modificabile (HTML autonomo, logo incorporato).
- `proposta/genera-pdf.mjs`: rigenera il PDF dal sorgente.
- `interno/stima-interna-giornate.md`: stima in giornate, tenuta fuori dal documento per il cliente.
- `interno/proposta-rev2-originale.html`: copia del sorgente della Revisione 2, come riferimento.

---

## 1. Modifiche applicate

| # | Richiesta | Cosa ho fatto |
|---|---|---|
| 1 | Passaggio a piattaforma LMS | La sintesi parte dal testo indicato. L'acronimo LMS è sciolto alla prima occorrenza, in un riquadro. Si usa sempre "piattaforma formativa con funzioni LMS". Il beneficio è collegato al sistema unico (acquisto, accesso e certificazione). Una frase dichiara cosa non comprende: quiz, esami online, tracciamento del completamento, SCORM. L'evoluzione spiega l'ampliamento del perimetro e la divisione in due fasi. |
| 2 | Eliminare le giornate | Tolti i "~96 giorni" in apertura, le colonne e i totali delle giornate e la tabella analitica. Ora c'è una matrice Area / Cosa viene consegnato / Fase, in appendice. La stima delle giornate è in un file interno separato. Calendario confermato: Fase 1 entro la settimana 14, completamento entro la 21, subordinato a materiali e approvazioni. |
| 3 | Riorganizzazione delle fasi | Diplomi standard e diplomi di certificazione con approvazione (bozza, decisione, storico, pubblicazione, notifica) spostati in Fase 1 ovunque: numeri chiave, sintesi, schemi dei flussi, aree, gantt, materiali e matrice. La Fase 2 contiene solo crediti/livelli/ranking, area palestra, elenco delle palestre, inglese e newsletter. Regole di emissione, modelli dei diplomi e formatori approvatori sono anticipati fra i materiali di Fase 1 (settimane 3 e 8). |
| 4 | Investimento | 22.000 € + IVA come corrispettivo complessivo per l'affidamento congiunto; IVA 4.840 €; totale 26.840 €; milestone 30/20/20/15/15. Eliminati listino, sconto da 6.000 € e importi delle singole fasi. Aggiunta la frase "l'affidamento di una sola fase sarà oggetto di una proposta dedicata". Rimosso anche l'interruttore interattivo "Includi la Fase 2". |
| 5 | Newsletter | Prima versione con le 8 voci incluse e le 6 escluse, presentate come "Come è definita questa versione". Corretto "senza strumenti esterni": ora dice che il modulo è integrato nel pannello e invia tramite SendGrid. Brevo non è più citato per nome: c'è una voce generica fra le esclusioni. |
| 6 | Regole da confermare | Riquadro "Regole da confermare in avvio" diviso in Già previsto / Da decidere insieme, con le 7 domande richieste. Il diploma standard all'acquisto è indicato come ipotesi da confermare; per la certificazione serve l'approvazione. Il QR del biglietto è identificativo; scansione e check-in sono esclusi. Nessun quiz e nessun tracciamento obbligatorio. Le decisioni vanno prese prima dello sviluppo; le richieste extra si valutano a parte. |
| 7 | Limiti delle consegne | Le pagine sono legate alla sitemap in appendice ("le pagine incluse sono quelle elencate"). Revisioni esplicite: 1 sul design, 1 sui testi IT, 1 sulle traduzioni EN. Tre colonne distinte: realizzazione dei template / inserimento iniziale / gestione autonoma. Precisato il limite del template landing page. La migrazione è riformulata come impegno verificabile; niente garanzie su SEO o motori AI; il codice su misura non elimina la manutenzione; resta il limite della protezione video rispetto alla registrazione dello schermo. |
| 8 | Canone ricorrente | Tre componenti: A. Infrastruttura e manutenzione tecnica, B. Assistenza operativa, C. Evoluzioni. Nessun prezzo, soglia o SLA inventato. Il costo ricorrente sarà formalizzato prima della firma. I 30 giorni di assistenza dopo ciascun go-live sono distinti dai servizi continuativi. Commissioni Stripe/PayPal a carico del cliente. |
| 9 | Struttura e impaginazione | 7 sezioni nell'ordine richiesto più l'appendice. Nessuna pagina vuota né titolo isolato; nessuna tabella spezzata, a parte la matrice che sta tutta in una pagina. Progetti di riferimento in un riquadro compatto in sezione 2. Restano "Revisione 3", 13 ottobre 2026 e validità 30 giorni (intestazione, piè di pagina, chiusura). Tolti dettagli tecnici poco utili alla decisione: stack nell'intestazione, flusso tecnico di caricamento dei video, elenco dei plugin. |

### Verifiche finali eseguite

- **LMS e funzionalità.** La definizione combacia con quanto incluso. Le esclusioni (quiz, esami, completamento, SCORM) compaiono in sintesi, nel riquadro regole e in "Non compreso".
- **Diplomi.** Diplomi e approvazioni risultano in Fase 1 in tutte e 7 le occorrenze: numeri chiave, sintesi, flusso, aree, gantt, materiali, matrice. Nessun diploma compare in Fase 2.
- **Importi.** 6.600 + 4.400 + 4.400 + 3.300 + 3.300 = 22.000 €; 30+20+20+15+15 = 100%; IVA 22% = 4.840 €; totale 26.840 €.
- **Calendario e milestone.** Le settimane di cronoprogramma, milestone e pagamenti coincidono: staging 7, go-live F1 14, avvio F2 15, go-live F2 21. Ogni materiale arriva prima dell'inizio dell'attività che lo usa nel gantt.
- **Ricerca nel testo del PDF.** Nessuna occorrenza di giornate, listino, "LMS completo", "senza strumenti esterni" o "nessun dato storico". Le uniche occorrenze di "scont" si riferiscono ai plugin attuali.
- **Impaginazione.** 8 pagine A4 controllate visivamente una per una. Font caricati correttamente; nessun contenuto tagliato. La versione web è controllata anche su mobile e in tema scuro.

---

## 2. Decisioni da chiudere prima dell'invio

### Bloccanti

1. **Costo ricorrente (componenti A e B).** Il PDF promette che costo e condizioni di servizio saranno formalizzati prima della firma. Vanno definiti: prezzo, volumi inclusi (ordini/mese, ore di video in archivio e in streaming, email/mese, spazio), livelli di servizio e tempi di intervento, perimetro dell'assistenza operativa. Da decidere se inviare la proposta insieme a un allegato sul canone o subito dopo.
2. **Fattibilità del calendario dopo lo spostamento dei diplomi in Fase 1.** Secondo la stima interna, la Fase 1 passa da circa 62 a circa 67 giornate e il go-live resta alla settimana 14. Nel gantt i diplomi sono stati messi nelle settimane 9–12, in parallelo a video/area istruttore e migrazione. Le settimane 9–13 sono le più cariche: va verificata la capacità reale prima di confermare la settimana 14.

### Quantità da concordare prima della firma (non le ho inventate)

3. **Landing page al lancio.** Il documento include il template e dice che landing e testi ulteriori non sono compresi. Va deciso se al go-live ne consegniamo alcune e quante.
4. **Video e manuali da caricare al lancio.** Il documento dice che le quantità "saranno concordate". Servono numero di corsi on demand, ore di video, numero di PDF, e chi li carica (noi o lo staff).
5. **Template.** Quanti template newsletter "prestabiliti", quanti modelli di diploma (standard e certificazione) e quanti modelli di biglietto.
6. **Segmenti newsletter.** Numero e definizione dei "segmenti concordati" (in tabella materiali entro la settimana 16).
7. **Pagine in inglese.** Il documento dice "sito in inglese" con catalogo ridotto. Va confermato se tutte le pagine della sitemap vanno tradotte o solo una parte.
8. **Sitemap.** Le pagine sono quelle della mappa Octopus riportate in appendice. Conviene far confermare al cliente che l'elenco è completo, ad esempio il numero di pagine "Case studies" e "Media".

### Ipotesi introdotte da me, da confermare

9. **Date dei materiali** non presenti nella Rev. 2: regole operative di Fase 1 (comprese quelle di emissione dei diplomi) entro la settimana 3; modelli dei diplomi ed elenco degli approvatori entro la 8 (in Rev. 2 erano alla 15); **backup aggiornato del sito attuale entro la 10** (riga nuova, serve all'impegno sulla migrazione); segmenti newsletter entro la 16.
10. **Assistenza di 30 giorni**, descritta come "correggere eventuali malfunzionamenti e accompagnare lo staff nelle prime settimane". Conferma che il perimetro è questo.
11. **Verifica della migrazione**, descritta come "verificata insieme prima del go-live". Conviene definire il metodo: conteggi per tabella e controlli a campione.
12. **Frase "Le approvazioni avvengono fuori dal sito"** nella tabella AS-IS. È ricavata dalla Rev. 2 ("tutto avviene fuori piattaforma"); conferma che è corretta.
13. **Riquadro "Chi realizza il progetto"**: cita lo "sviluppo assistito dall'AI" sotto la nostra responsabilità di progettazione, verifica e collaudo, senza riferimenti a efficienza o margini. Toglilo se preferisci non menzionarlo.

### Punti operativi aperti (già nel riquadro per il cliente)

14. Acquirente/partecipante, posti multipli e raccolta dei nominativi, durata degli accessi, annullamenti e rimborsi, momento dei crediti, regole di emissione dei diplomi, scadenze delle certificazioni. Attenzione: se le certificazioni scadono, rinnovi e promemoria sono funzioni nuove e vanno quotati a parte.
15. **PayPal "Paga in 3 rate"**: va verificata l'abilitazione sul conto di Walking Program e i limiti di importo.

### Note commerciali

16. Gli importi per fase della Rev. 2 (18.000 / 8.000 / 2.000, sconto 6.000) non sono più nel documento. Non vanno riutilizzati se il cliente chiede una sola fase: il perimetro di Fase 1 è cambiato con i diplomi, quindi serve una proposta dedicata.
17. La Revisione 2 pubblicata come artifact ("Piattaforma Walking Program") **non è stata toccata**. La Revisione 3 è un artifact privato separato, così il link che il cliente potrebbe avere non cambia finché non decidi tu.

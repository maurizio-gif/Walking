// Rigenera il PDF della proposta dal sorgente HTML.
// Uso: node genera-pdf.mjs [sorgente.html] [uscita.pdf]
// Richiede Playwright con Chromium; i font Ubuntu sono caricati da Google Fonts.
import { resolve } from 'path';
import { chromium } from 'playwright';

const src = resolve(process.argv[2] || 'Walking-Program_Proposta_Rev3.html');
const out = resolve(process.argv[3] || 'Walking-Program_Proposta_Rev3.pdf');

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();
await page.emulateMedia({ media: 'print', colorScheme: 'light' });
await page.goto('file://' + src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const footer = '<div style="width:100%;font-family:Ubuntu Mono,monospace;font-size:7.5px;color:#5B6270;padding:0 13mm;display:flex;justify-content:space-between;letter-spacing:.06em;text-transform:uppercase"><span>Walking Program · Piattaforma &amp; Sito · Revisione 3 · 13 ottobre 2026</span><span>Ready2Digital · pag. <span class="pageNumber"></span> di <span class="totalPages"></span></span></div>';
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<div></div>', footerTemplate: footer });
await browser.close();
console.log('PDF generato:', out);

"use client";

import { Shield, ArrowLeft, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-hidden font-sans">
      
      {/* Contenitore Principale in stile Bento/Glassmorphism */}
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 relative z-10">
        
        {/* Intestazione */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]">
              <Shield size={12} />
              <span>Informativa Privacy</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Ultimo aggiornamento: Maggio 2026
            </p>
          </div>

          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="rounded-full px-5 h-11 text-xs font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all self-start md:self-center"
          >
            <ArrowLeft size={14} className="mr-2" />
            Torna indietro
          </Button>
        </div>

        {/* Contenuto dell'Informativa */}
        <div className="space-y-10 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
          
          {/* Sezione 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>Lavasecco SCM</strong>, con sede legale in Via Volta 219, Senago (MI), P.IVA 1147860151. Per qualsiasi richiesta o chiarimento in merito alla protezione dei dati, è possibile scrivere all&apos;indirizzo email: <a href="mailto:info@lavanderiascm.it" className="text-blue-600 font-bold hover:underline">info@lavanderiascm.it</a>.
            </p>
          </section>

          {/* Sezione 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              2. Tipologia di Dati Raccolti e Modalità
            </h2>
            <p>
              Questo sito web è una <strong>piattaforma puramente informativa (sito vetrina)</strong>. 
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-500">
              <li><strong>Nessun modulo di contatto:</strong> Non sono presenti form di registrazione o di inserimento dati.</li>
              <li><strong>Canali esterni:</strong> Qualsiasi contatto da parte dell&apos;utente avviene tramite l&apos;attivazione volontaria dei link diretti presenti sul sito (chiamata telefonica, messaggio WhatsApp o invio di una email tradizionale).</li>
              <li><strong>Dati di navigazione:</strong> I server ospitanti (es. Vercel) possono registrare automaticamente alcuni dati tecnici anonimi (come l&apos;indirizzo IP o il tipo di browser) per esclusivi motivi di sicurezza e corretta manutenzione del sito.</li>
            </ul>
          </section>

          {/* Sezione 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              3. Finalità e Base Giuridica del Trattamento
            </h2>
            <p>
              I dati forniti spontaneamente dall&apos;utente tramite email, telefono o WhatsApp saranno trattati esclusivamente per rispondere alle richieste di informazioni, preventivi o prenotazioni di servizi ricevute. La base giuridica del trattamento è l&apos;esecuzione di misure precontrattuali o contrattuali su richiesta dell&apos;interessato.
            </p>
          </section>

          {/* Sezione 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              4. Cookie e Tracciamento
            </h2>
            <p>
              Questo sito <strong>non installa cookie di profilazione</strong>, non utilizza script di tracciamento di terze parti (come Google Analytics o Pixel di Meta) e non memorizza preferenze dell&apos;utente. Di conseguenza, non è richiesta l&apos;esposizione di alcun banner per il consenso ai cookie.
            </p>
          </section>

          {/* Sezione 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              5. Periodo di Conservazione e Sicurezza
            </h2>
            <p>
              I dati scambiati tramite i canali di comunicazione tradizionali saranno conservati solo per il tempo strettamente necessario a evadere la richiesta del cliente, e successivamente cancellati, a meno che non si instauri un rapporto commerciale che richieda la conservazione per obblighi fiscali o di legge. La navigazione sul sito è protetta da protocollo di crittografia sicuro HTTPS.
            </p>
          </section>

          {/* Sezione 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              6. Diritti dell&apos;Interessato
            </h2>
            <p>
              In conformità al Regolamento Europeo (GDPR), l&apos;utente ha il diritto in qualunque momento di richiedere l&apos;accesso ai propri dati, la rettifica, la cancellazione o la limitazione del trattamento scrivendo a <a href="mailto:info@lavanderiascm.it" className="text-blue-600 font-bold hover:underline">info@lavanderiascm.it</a>. Ha inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali italiana.
            </p>
          </section>

        </div>

        {/* Footer interno di rassicurazione */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Lock size={14} className="text-emerald-500" />
            <span>Sito protetto da crittografia SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText size={14} className="text-blue-500" />
            <span>Conforme alle normative GDPR</span>
          </div>
        </div>

      </div>

      {/* Sfondo con le bolle sfocate coordinate con il resto del layout */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-100/30 rounded-full blur-[100px]" />
      </div>

    </div>
  );
}

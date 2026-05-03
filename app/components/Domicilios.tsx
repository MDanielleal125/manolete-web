import { getGeneralWhatsAppLink } from "../data/menu";

export default function Domicilios() {
  return (
    <section id="domicilios" className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Domicilios a <span className="text-accent">toda Piedecuesta</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            No quieres salir de casa? ¡No hay problema! Te llevamos tu comida
            favorita directamente a tu puerta, caliente y rápido.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Horario de atención
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Lunes a Domingo — 11:00 a.m. a 10:00 p.m.
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Teléfono
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                316 466 9253
              </p>
            </div>
          </div>

          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:bg-green-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir Domicilio por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

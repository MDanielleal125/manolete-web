export default function Ubicacion() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
            Encuéntranos en <span className="text-primary">Piedecuesta</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Visítanos y disfruta de la mejor comida rápida en un ambiente familiar.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <div className="relative h-80 w-full sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.78018298323!2d-73.06083345!3d6.98694445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4218f9e3c3e5c7%3A0x6c3f0e3e3e3e3e3e!2sPiedecuesta%2C%20Santander!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Comidas Rápidas Manolete"
              className="absolute inset-0"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-muted p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">Dirección</p>
              <p className="text-sm text-gray-500">Piedecuesta, Santander, Colombia</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-muted p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">Teléfono</p>
              <p className="text-sm text-gray-500">316 466 9253</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-muted p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">Horario</p>
              <p className="text-sm text-gray-500">Lun - Dom: 11am - 10pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

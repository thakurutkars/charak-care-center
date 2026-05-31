export default function Location() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-10">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          Our Location
        </p>

        <h2 className="text-4xl font-bold text-green-900 mt-3">
          Visit Our Clinic
        </h2>

        <p className="text-gray-600 mt-4">
          Find us easily using Google Maps.
        </p>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-100">
        <iframe
          src="PASTE_GOOGLE_MAPS_EMBED_LINK_HERE"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
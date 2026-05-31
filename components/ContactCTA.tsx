export default function ContactCTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-16">
      <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-3xl p-10 text-white shadow-2xl">
        <div className="text-center">
          <p className="text-orange-300 uppercase tracking-widest font-semibold">
            Get Started
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Begin Your Wellness Journey Today
          </h2>

          <p className="mt-5 text-green-100 max-w-3xl mx-auto">
            Book an appointment, connect via WhatsApp, or contact our clinic for
            personalized Ayurvedic healthcare support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {/* Book Appointment */}
          <a
            href="#booking"
            className="bg-white text-green-900 rounded-2xl py-4 px-6 font-semibold hover:scale-105 transition text-center"
          >
            Book Appointment
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917302068240"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white rounded-2xl py-4 px-6 font-semibold hover:scale-105 transition text-center"
          >
            WhatsApp Consultation
          </a>

          {/* Call */}
          <a
            href="tel:+917302068240"
            className="bg-white/10 border border-white/20 text-white rounded-2xl py-4 px-6 font-semibold hover:scale-105 transition text-center"
          >
            Call Clinic
          </a>
        </div>
      </div>
    </section>
  );
}
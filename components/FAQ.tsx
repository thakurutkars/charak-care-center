export default function FAQ() {
  return (
    <section id="faq" className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          FAQ
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-3xl shadow-md border border-green-100 p-8">
          <h3 className="text-xl font-bold text-green-900">
            Do you offer online consultation?
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Yes, online consultation is available for convenient Ayurvedic care.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md border border-green-100 p-8">
          <h3 className="text-xl font-bold text-green-900">
            How can I book an appointment?
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Through website booking, WhatsApp, or direct clinic contact.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md border border-green-100 p-8">
          <h3 className="text-xl font-bold text-green-900">
            Is treatment personalized?
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Yes, every consultation is tailored to individual health needs.
          </p>
        </div>
      </div>
    </section>
  );
}
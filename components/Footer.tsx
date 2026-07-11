export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-3xl font-bold">
            JEEVANT AYURVED
          </h3>

          <p className="mt-4 text-orange-300 italic">
            सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
          </p>

          <p className="mt-5 text-green-100 leading-relaxed">
            Authentic Ayurvedic healing focused on wellness, prevention,
            and personalized healthcare support.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-5">Quick Links</h4>

          <div className="space-y-3 text-green-100">
            <a href="#home" className="block hover:text-orange-300 transition">
              Home
            </a>
            <a href="#services" className="block hover:text-orange-300 transition">
              Services
            </a>
            <a href="#about" className="block hover:text-orange-300 transition">
              About
            </a>
            <a href="#faq" className="block hover:text-orange-300 transition">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-5">Contact</h4>

          <div className="space-y-3 text-green-100">
            <p>Bareilly, Uttar Pradesh</p>
            <p>+91 7302068240</p>
            <p>WhatsApp Consultation Available</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-green-200 text-sm">
        © 2026 JEEVANT AYURVED. All rights reserved.
      </div>
    </footer>
  );
}
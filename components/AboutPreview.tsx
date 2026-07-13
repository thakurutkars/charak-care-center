import { Award, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-orange-600 font-semibold uppercase tracking-wider">
            About Our Care
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4 leading-tight">
            Trusted Ayurvedic Care Rooted in Tradition
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            JEEVANT AYURVED is dedicated to delivering authentic
            Ayurvedic healthcare focused on wellness, preventive care, and
            personalized treatment guidance.
          </p>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Traditional healing wisdom combined with compassionate modern care.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 flex gap-5">
            <Award className="text-orange-500" size={36} />
            <div>
              <h3 className="text-xl font-bold text-green-900">
                Experienced Guidance
              </h3>
              <p className="text-gray-600 mt-2">
                Trusted Ayurvedic healthcare support.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 flex gap-5">
            <ShieldCheck className="text-green-700" size={36} />
            <div>
              <h3 className="text-xl font-bold text-green-900">
                Safe Natural Care
              </h3>
              <p className="text-gray-600 mt-2">
                Personalized natural wellness solutions.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 flex gap-5">
            <HeartHandshake className="text-orange-500" size={36} />
            <div>
              <h3 className="text-xl font-bold text-green-900">
                Patient-Centered Support
              </h3>
              <p className="text-gray-600 mt-2">
                Compassionate long-term healthcare guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
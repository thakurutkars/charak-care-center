import { CheckCircle, Leaf, ShieldCheck, HeartPulse } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Leaf,
      title: "Authentic Ayurvedic Healing",
      desc: "Traditional natural healing methods focused on long-term wellness.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Personalized Care",
      desc: "Customized consultation based on individual health needs.",
    },
    {
      icon: HeartPulse,
      title: "Holistic Health Support",
      desc: "Comprehensive wellness care for balanced living.",
    },
    {
      icon: CheckCircle,
      title: "Trusted Patient Experience",
      desc: "Compassionate consultation with patient-first healthcare support.",
    },
  ];

  return (
    <section className="bg-green-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-orange-300 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trusted Ayurvedic Wellness Experience
          </h2>

          <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg">
            Experience authentic Ayurvedic healthcare focused on healing,
            prevention, and personalized wellness support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <Icon size={32} className="text-orange-300 mb-5" />

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-green-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Patient Review",
      text: "Very professional consultation experience with thoughtful Ayurvedic guidance and patient care.",
    },
    {
      name: "Online Consultation",
      text: "Convenient and smooth healthcare consultation from home with clear wellness recommendations.",
    },
    {
      name: "Wellness Experience",
      text: "A reassuring and patient-friendly experience focused on long-term natural health improvement.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4">
          What Our Patients Say
        </h2>

        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
          Trusted healthcare experiences shared by patients who value authentic
          Ayurvedic wellness support.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 border border-green-100"
          >
            <div className="flex gap-1 mb-5">
              <Star className="text-orange-500 fill-orange-500" size={20} />
              <Star className="text-orange-500 fill-orange-500" size={20} />
              <Star className="text-orange-500 fill-orange-500" size={20} />
              <Star className="text-orange-500 fill-orange-500" size={20} />
              <Star className="text-orange-500 fill-orange-500" size={20} />
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              "{item.text}"
            </p>

            <h3 className="mt-6 font-bold text-green-900 text-xl">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anurag Bharti",
    text: "Rajeev Saxena sir is super polite. I loved the way he handled my situation and I started seeing positive results from day one. The treatment boosted my confidence.",
  },
  {
    name: "Sahil Sharma",
    text: "Dr. Rajeev Saxena is one of the best Ayurvedic doctors I have ever met. His experience is exceptional and he understands the patient's condition thoroughly before treatment.",
  },
];

  const reviewImages = [
  "/reviews/review1.png",
  "/reviews/review2.png",
  "/reviews/review3.png",
  "/reviews/review4.png",
  "/reviews/review5.png",
  "/reviews/review6.png",
  "/reviews/review7.png",
  "/reviews/review8.png",
];

export default function Testimonials() {
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

      {/* Written Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 border border-green-100"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-orange-500 fill-orange-500"
                  size={20}
                />
              ))}
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

      {/* Google Review Screenshots */}
      <div>
  <h3 className="text-3xl font-bold text-center text-green-900 mb-10">
    Google Reviews
  </h3>

  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    {reviewImages.map((image, index) => (
      <div
        key={index}
        className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100"
      >
        <img
          src={image}
          alt={`Review ${index + 1}`}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
        ))}
       </div>
     </div>
    </section>
  );
}
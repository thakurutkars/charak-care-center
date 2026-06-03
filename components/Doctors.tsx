export default function Doctors() {
  return (
    <section id="doctors" className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          Our Expert
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4">
          Meet Our Doctor
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Dedicated Ayurvedic expertise for holistic healing.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          
          {/* Doctor Image */}
          
            <div className="bg-green-50">
  <img
    src="/doctor.jpeg"
    alt="Doctor"
    className="w-full h-[500px] object-cover"
  />

  <div className="p-5 text-center">
    <h4 className="text-2xl font-bold text-green-900">
      Dr. Rajeev Saxena
    </h4>

    <p className="text-orange-600 font-semibold mt-2">
      Ayurvedacharya (B.Sc., B.A.M.S., Kanpur University)
    </p>

    <p className="text-gray-600 mt-2 font-medium">
      35+ Years of Experience
    </p>
  </div>
</div>
         

          {/* Doctor Info */}
          <div className="p-10">
            <h3 className="text-4xl font-bold text-green-900">
              Dr. Rajeev Saxena
            </h3>

            

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              With 35+ years of experience in Ayurvedic medicine and holistic
              wellness, Dr. Rajeev Saxena specializes in personalized treatment
              plans, preventive healthcare, and natural healing therapies.
            </p>

            <div className="mt-8">
              <a
                href="#booking"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition"
              >
                Book Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
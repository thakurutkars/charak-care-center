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
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Doctor Image */}
          
           <div className="flex flex-col items-center">
  <img
    src="/doctor.jpeg"
    alt="Dr. Rajeev Saxena"
    className="w-[320px] md:w-[380px] h-auto rounded-2xl shadow-lg"
  />

  <div className="text-center mt-5">
    <h3 className="text-3xl font-bold text-green-900">
      Dr. Rajeev Saxena
    </h3>

    <p className="text-orange-600 text-xl font-semibold mt-2">
  <span className="block">
    Ayurvedacharya
  </span>

  <span className="block text-lg">
    (B.Sc., B.A.M.S., Kanpur University)
  </span>
</p>
    <p className="text-gray-600 text-lg mt-2">
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
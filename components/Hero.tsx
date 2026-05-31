import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  HeartPulse,
  Leaf,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-8 py-16">
      <div>
        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          प्राचीन आयुर्वेद, आधुनिक देखभाल
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-green-950">
          स्वास्थ्य और संतुलन की नई शुरुआत
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          प्राकृतिक आयुर्वेदिक उपचार के माध्यम से शरीर, मन और जीवन में
          संतुलन स्थापित करें। अनुभवी देखभाल के साथ समग्र स्वास्थ्य की ओर
          आपका पहला कदम।
        </p>

        <p className="mt-6 text-green-900 italic text-lg">
          सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-10">
  {/* Book Appointment */}
  <a
    href="#booking"
    className="bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 transition shadow-lg"
  >
     Book Appointment
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/917302068240"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 transition shadow-lg"
  >
     WhatsApp Consultation
  </a>
</div>
    
      </div>

      <div>
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-green-100">
          <div className="grid gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-green-700" size={32} />
              <div>
                <h3 className="font-bold text-xl text-green-900">
                  विश्वसनीय आयुर्वेदिक देखभाल
                </h3>
                <p className="text-gray-600">
                  अनुभव और परंपरा पर आधारित उपचार
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HeartPulse className="text-orange-500" size={32} />
              <div>
                <h3 className="font-bold text-xl text-green-900">
                  समग्र स्वास्थ्य समाधान
                </h3>
                <p className="text-gray-600">
                  बीमारी की जड़ तक पहुंचने वाला उपचार
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Leaf className="text-green-700" size={32} />
              <div>
                <h3 className="font-bold text-xl text-green-900">
                  प्राकृतिक उपचार पद्धति
                </h3>
                <p className="text-gray-600">
                  सुरक्षित और व्यक्तिगत आयुर्वेदिक समाधान
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
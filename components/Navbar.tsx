"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[99999] bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-lg md:text-4xl font-bold text-green-900">
            Charak Ayurveda Care Center
          </h1>
          <p className="text-orange-500 mt-1 text-[10px] md:text-lg">
            प्राकृतिक उपचार • सम्पूर्ण स्वास्थ्य
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-green-900 font-medium text-lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#booking">Consultation</a>
          <a href="#inquiry">Health Query</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer text-4xl text-green-900 select-none">
            ☰
          </summary>

          <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-green-100 p-5 z-[100000]">
            <nav className="flex flex-col gap-4 text-green-900 font-semibold text-lg">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#booking">Consultation</a>
              <a href="#inquiry">Health Query</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}//106.214.8.140
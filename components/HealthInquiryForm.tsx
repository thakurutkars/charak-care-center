"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HealthInquiryForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    symptoms: "",
    message: "",
    callback_time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Name and phone are required");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("inquiries").insert([
      {
        name: formData.name,
        phone: formData.phone,
        age: formData.age ? Number(formData.age) : null,
        gender: formData.gender,
        city: formData.city,
        symptoms: formData.symptoms,
        message: formData.message,
        callback_time: formData.callback_time,
        status: "new",
      },
    ]);

    if (error) {
      console.error(error);
      alert("Inquiry submission failed.");
      setLoading(false);
      return;
    }

    alert("Inquiry submitted successfully!");

    setFormData({
      name: "",
      phone: "",
      age: "",
      gender: "",
      city: "",
      symptoms: "",
      message: "",
      callback_time: "",
    });

    setLoading(false);
  };

  return (
    <section id="inquiry" className="max-w-6xl mx-auto px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          Health Inquiry
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4">
          Submit Your Health Query
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Share your symptoms or health concerns and our clinic will contact you.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-green-100 p-10">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="text"
            name="callback_time"
            placeholder="Preferred Callback Time"
            value={formData.callback_time}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />
        </div>

        <textarea
          name="symptoms"
          placeholder="Health Issue / Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="w-full mt-6 border border-gray-300 rounded-xl px-5 py-4 min-h-[120px]"
        />

        <textarea
          name="message"
          placeholder="Additional Message / Query"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-6 border border-gray-300 rounded-xl px-5 py-4 min-h-[120px]"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-semibold transition"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
    </section>
  );
}
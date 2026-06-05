"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const TIME_SLOTS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const MAX_PER_SLOT = 3;

export default function BookingForm() {
  const [bookedSlots, setBookedSlots] = useState<Record<string, number>>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    date: "",
    time: "",
    consultation: "clinic",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchBookedSlots = async (date: string) => {
    const { data } = await supabase
      .from("bookings")
      .select("preferred_time")
      .eq("preferred_date", date);

    const slotCount: Record<string, number> = {};

    data?.forEach((booking) => {
      slotCount[booking.preferred_time] =
        (slotCount[booking.preferred_time] || 0) + 1;
    });

    setBookedSlots(slotCount);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Name and phone are required");
      return;
    }

    if (!formData.date || !formData.time) {
      alert("Please select date and time");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("bookings").insert([
      {
        name: formData.name,
        phone: formData.phone,
        age: formData.age ? Number(formData.age) : null,
        gender: formData.gender,
        city: formData.city,
        preferred_date: formData.date,
        preferred_time: formData.time,
        consultation_type: formData.consultation,
        status: "pending",
      },
    ]);

    if (error) {
      console.error(error);
      alert("Booking failed. Please try again.");
      setLoading(false);
      return;
    }

    alert(
  "Appointment submitted successfully. You will now be redirected to the payment verification form."
);

setLoading(false);

window.location.href =
  "https://forms.gle/hmyctDoijjUPhyXA7";

    const whatsappMessage = `
New Appointment Booking

Name: ${formData.name}
Phone: ${formData.phone}
Age: ${formData.age}
Gender: ${formData.gender}
City: ${formData.city}
Date: ${formData.date}
Time: ${formData.time}
Consultation: ${formData.consultation}
    `;

    const whatsappUrl = `https://wa.me/917302068240?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    alert("Booking submitted successfully!");

    setFormData({
      name: "",
      phone: "",
      age: "",
      gender: "",
      city: "",
      date: "",
      time: "",
      consultation: "clinic",
    });

    setBookedSlots({});
    setLoading(false);
  };

  return (
    <section id="booking" className="max-w-5xl mx-auto px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-orange-600 uppercase tracking-widest font-semibold">
          Appointment Booking
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4">
          Book Your Consultation
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Schedule your Ayurvedic consultation in just a few steps.
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

          <select
            name="consultation"
            value={formData.consultation}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          >
            <option value="clinic">Clinic Visit</option>
            <option value="online">Online Consultation</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => {
              const selectedDate = e.target.value;

              setFormData({
                ...formData,
                date: selectedDate,
                time: "",
              });

              fetchBookedSlots(selectedDate);
            }}
            className="border border-gray-300 rounded-xl px-5 py-4"
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-4"
          >
            <option value="">Select Time Slot</option>

            {TIME_SLOTS.map((slot) => {
              const count = bookedSlots[slot] || 0;
              const isFull = count >= MAX_PER_SLOT;

              return (
                <option key={slot} value={slot} disabled={isFull}>
                  {slot} {isFull ? "(Full)" : `(${count}/${MAX_PER_SLOT})`}
                </option>
              );
            })}
          </select>
        </div>

        <p className="text-sm text-orange-600 mt-6 mb-4 text-center">
  Consultation Fee: ₹199.
  After submitting your appointment request, you will be redirected to the payment verification form.
</p>

<button
  onClick={handleSubmit}
  disabled={loading}
  className="mt-8 w-full bg-green-800 hover:bg-green-900 text-white py-4 rounded-2xl text-lg font-semibold transition"
>
          {loading ? "Submitting..." : "Submit Booking Request"}
        </button>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();

  const [bookings, setBookings] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("appointments");

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");

    if (auth !== "true") {
      router.push("/admin/login");
      return;
    }

    fetchBookings();
    fetchInquiries();
  }, []);

  const fetchBookings = async () => {
    const { data } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setBookings(data);
    }

    setLoading(false);
  };

  const fetchInquiries = async () => {
    const { data } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setInquiries(data);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("bookings").update({ status }).eq("id", id);
    fetchBookings();
  };

 const deleteBooking = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this booking?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  setBookings((prev) =>
    prev.filter((booking) => booking.id !== id)
  );
};
const exportBookings = () => {
  const worksheet = XLSX.utils.json_to_sheet(bookings);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Appointments"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const data = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(
    data,
    `appointments-${new Date().toISOString().split("T")[0]}.xlsx`
  );
};
  const logout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC] p-8 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
<div className="flex justify-between items-center mb-8">
  <div>
    <p className="text-green-700 font-semibold">
      Charak Ayurveda Care Center 
    </p>

    <h1 className="text-5xl font-bold text-green-950">
      Admin Dashboard
    </h1>

    <p className="text-gray-500 mt-2">
      Manage appointments and patient inquiries
    </p>
  </div>

  <div className="flex gap-3">
  <button
    onClick={exportBookings}
    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl shadow-lg"
  >
    📥 Export Excel
  </button>

  <button
    onClick={logout}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg"
  >
    Logout
  </button>
  </div>
</div>

{/* Welcome Banner */}
<div className="bg-gradient-to-r from-green-900 to-green-700 text-white rounded-3xl p-8 mb-10 shadow-xl">
  <p className="text-green-100">
    Charak Ayurveda Care Center
  </p>

  <h2 className="text-4xl font-bold mt-2">
    Welcome Admin 👋
  </h2>

  <p className="mt-3 text-green-100">
    Manage appointments, patient inquiries and clinic operations from one place.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <div>
      <p className="text-green-200 text-sm">Total</p>
      <p className="text-3xl font-bold">{bookings.length}</p>
    </div>

    <div>
      <p className="text-green-200 text-sm">Confirmed</p>
      <p className="text-3xl font-bold">
        {bookings.filter(b => b.status === "confirmed").length}
      </p>
    </div>

    <div>
      <p className="text-green-200 text-sm">Completed</p>
      <p className="text-3xl font-bold">
        {bookings.filter(b => b.status === "completed").length}
      </p>
    </div>

    <div>
      <p className="text-green-200 text-sm">Cancelled</p>
      <p className="text-3xl font-bold">
        {bookings.filter(b => b.status === "cancelled").length}
      </p>
    </div>
  </div>
</div>

        {/* Bookings Section */}
        <div className="flex gap-4 mb-8">
  <button
    onClick={() => setActiveTab("appointments")}
    className={`px-6 py-3 rounded-2xl font-semibold transition ${
      activeTab === "appointments"
        ? "bg-green-900 text-white"
        : "bg-white text-green-900 border"
    }`}
  >
    📅 Appointments
  </button>

  <button
    onClick={() => setActiveTab("inquiries")}
    className={`px-6 py-3 rounded-2xl font-semibold transition ${
      activeTab === "inquiries"
        ? "bg-green-900 text-white"
        : "bg-white text-green-900 border"
    }`}
  >
    🩺 Health Inquiries
  </button>
</div>
<input
  type="text"
  placeholder="🔍 Search patient name..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-4 rounded-2xl border border-gray-200 bg-white shadow-sm mb-8 text-black"
/>
        {activeTab === "appointments" && (
          <>
            {loading ? (
              <p className="text-xl">Loading bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="text-xl">No bookings found.</p>
            ) : (
          <div className="grid gap-6">
            {bookings
  .filter((booking) =>
    booking.name?.toLowerCase().includes(search.toLowerCase())
  )
  .map((booking) => (
              <div
                key={booking.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p><strong>Name:</strong> {booking.name}</p>
                    <p><strong>Phone:</strong> {booking.phone}</p>
                    <p><strong>Age:</strong> {booking.age}</p>
                    <p><strong>Gender:</strong> {booking.gender}</p>
                  </div>

                  <div>
                    <p><strong>City:</strong> {booking.city}</p>
                    <p><strong>Date:</strong> {booking.preferred_date}</p>
                    <p><strong>Time:</strong> {booking.preferred_time}</p>
                    <p><strong>Type:</strong> {booking.consultation_type}</p>
                  </div>

                  <div>
                    <div className="mb-4">
  <span
    className={`px-4 py-2 rounded-full text-sm font-semibold ${
      booking.status === "confirmed"
        ? "bg-green-100 text-green-800"
        : booking.status === "completed"
        ? "bg-blue-100 text-blue-800"
        : booking.status === "cancelled"
        ? "bg-red-100 text-red-800"
        : "bg-yellow-100 text-yellow-800"
    }`}
  >
    {booking.status || "pending"}
  </span>
</div>

                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      <button
                        onClick={() => updateStatus(booking.id, "confirmed")}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
                          booking.status === "confirmed"
                            ? "bg-green-900 ring-4 ring-green-300 scale-105"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        Confirm
                      </button>
{(booking.status === "completed" ||
  booking.status === "cancelled") && (
  <button
    onClick={() => deleteBooking(booking.id)}
    className="bg-red-900 hover:bg-red-950 text-white px-4 py-2 rounded-lg font-medium transition"
  >
    🗑 Delete
  </button>
)}
                      <button
                        onClick={() => updateStatus(booking.id, "completed")}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
                          booking.status === "completed"
                            ? "bg-blue-900 ring-4 ring-blue-300 scale-105"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        Complete
                      </button>

                      <button
                        onClick={() => updateStatus(booking.id, "cancelled")}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
                          booking.status === "cancelled"
                            ? "bg-red-900 ring-4 ring-red-300 scale-105"
                            : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        </>
)}

{activeTab === "inquiries" && (
  <div className="mt-6">
    <h2 className="text-3xl font-bold text-green-900 mb-8">
      Health Inquiries
    </h2>

    {inquiries.length === 0 ? (
      <p>No inquiries found.</p>
    ) : (
      <div className="grid gap-6">
        {inquiries
          .filter((inquiry) =>
            inquiry.name?.toLowerCase().includes(search.toLowerCase())
          )
          .map((inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p><strong>Name:</strong> {inquiry.name}</p>
                  <p><strong>Phone:</strong> {inquiry.phone}</p>
                  <p><strong>Age:</strong> {inquiry.age}</p>
                  <p><strong>Gender:</strong> {inquiry.gender}</p>
                  <p><strong>City:</strong> {inquiry.city}</p>
                </div>

                <div>
                  <p><strong>Symptoms:</strong> {inquiry.symptoms}</p>
                  <p><strong>Message:</strong> {inquiry.message}</p>
                  <p><strong>Callback Time:</strong> {inquiry.callback_time}</p>
                  <p><strong>Status:</strong> {inquiry.status}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    )}
  </div>
)}
            </div>
    </div>
  );
}        
"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard()
 {
  const router = useRouter();

  const [bookings, setBookings] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<string>("appointments");

  const updateInquiryStatus = async (
  id: string,
  status: string
) => {
  const { error } = await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  fetchInquiries();
};

const deleteInquiry = async (id: string) => {
  if (!confirm("Delete this inquiry?")) return;

  const { error } = await supabase
    .from("inquiries")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  fetchInquiries();
};
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
 const updateInquiryStatus = async (
  id: string,
  status: string
) => {
  await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  fetchInquiries();
};

const deleteInquiry = async (id: string) => {
  if (!confirm("Delete this inquiry?")) return;

  await supabase
    .from("inquiries")
    .delete()
    .eq("id", id);

  fetchInquiries();
};
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

  await fetchBookings();
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
const sendConfirmation = (booking: any) => {
  const message = `🙏 Namaste ${booking.name},

Your appointment with *JEEVANT AYURVED* has been *CONFIRMED*.

📅 Date: ${booking.preferred_date}
🕒 Time: ${booking.preferred_time}

📍 Please arrive 10 minutes before your appointment.

Thank you for choosing JEEVANT AYURVED.`;

  window.open(
    `https://wa.me/91${booking.phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const sendCompletion = (booking: any) => {
  const message = `🙏 Namaste ${booking.name},

Thank you for visiting *JEEVANT AYURVED*.

We hope you are feeling better.

If you are satisfied with our treatment, please consider sharing your valuable review on Google.

Wishing you good health! 🌿`;

  window.open(
    `https://wa.me/91${booking.phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const sendCancellation = (booking: any) => {
  const message = `🙏 Namaste ${booking.name},

Your appointment at *JEEVANT AYURVED* has been cancelled.

Please contact the clinic to schedule another appointment.

Sorry for the inconvenience.

Thank you.`;

  window.open(
    `https://wa.me/91${booking.phone}?text=${encodeURIComponent(message)}`,
    "_blank"
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
<div className="bg-white rounded-3xl shadow-lg border border-green-100 p-8 mb-8">

  <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

    <div className="flex items-center gap-5">

      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-700 to-green-900 text-white flex items-center justify-center text-4xl shadow-lg">
        🌿
      </div>

      <div>

        <p className="uppercase tracking-[4px] text-green-700 font-semibold">
          JEEVANT AYURVED
        </p>

        <h1 className="text-5xl font-bold text-green-950 mt-1">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage appointments, payments and patient inquiries
        </p>

      </div>

    </div>

    <div className="flex gap-3">

      <button
        onClick={exportBookings}
        className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-2xl text-white font-semibold transition"
      >
        📥 Export
      </button>

      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl text-white font-semibold transition"
      >
        Logout
      </button>

    </div>

  </div>

</div>

{/* Statistics */}

<div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-10">

  <div className="bg-white rounded-3xl p-6 shadow border border-green-100">
    <p className="text-gray-500">Appointments</p>
    <h2 className="text-4xl font-bold text-green-900 mt-2">
      {bookings.length}
    </h2>
  </div>

  <div className="bg-yellow-50 rounded-3xl p-6 shadow border border-yellow-200">
    <p className="text-yellow-700">Pending</p>
    <h2 className="text-4xl font-bold text-yellow-600 mt-2">
      {bookings.filter(b => !b.status || b.status==="pending").length}
    </h2>
  </div>

  <div className="bg-green-50 rounded-3xl p-6 shadow border border-green-200">
    <p className="text-green-700">Confirmed</p>
    <h2 className="text-4xl font-bold text-green-700 mt-2">
      {bookings.filter(b=>b.status==="confirmed").length}
    </h2>
  </div>

  <div className="bg-blue-50 rounded-3xl p-6 shadow border border-blue-200">
    <p className="text-blue-700">Completed</p>
    <h2 className="text-4xl font-bold text-blue-700 mt-2">
      {bookings.filter(b=>b.status==="completed").length}
    </h2>
  </div>

  <div className="bg-red-50 rounded-3xl p-6 shadow border border-red-200">
    <p className="text-red-700">Cancelled</p>
    <h2 className="text-4xl font-bold text-red-700 mt-2">
      {bookings.filter(b=>b.status==="cancelled").length}
    </h2>
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
<div className="flex flex-col lg:flex-row gap-4 mb-8">

  <input
    type="text"
    placeholder="🔍 Search patient..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 bg-white rounded-2xl px-6 py-4 border border-gray-200 shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
  />

  <div className="flex gap-3 flex-wrap">

  <button
    onClick={() => setStatusFilter("all")}
    className={`px-6 py-3 rounded-full transition ${
      statusFilter === "all"
        ? "bg-green-800 text-white"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setStatusFilter("pending")}
    className={`px-6 py-3 rounded-full transition ${
      statusFilter === "pending"
        ? "bg-yellow-200 text-yellow-900"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    Pending
  </button>

  <button
    onClick={() => setStatusFilter("confirmed")}
    className={`px-6 py-3 rounded-full transition ${
      statusFilter === "confirmed"
        ? "bg-green-200 text-green-900"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    Confirmed
  </button>

  <button
    onClick={() => setStatusFilter("completed")}
    className={`px-6 py-3 rounded-full transition ${
      statusFilter === "completed"
        ? "bg-blue-200 text-blue-900"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    Completed
  </button>

  <button
    onClick={() => setStatusFilter("cancelled")}
    className={`px-6 py-3 rounded-full transition ${
      statusFilter === "cancelled"
        ? "bg-red-200 text-red-900"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    Cancelled
  </button>

</div>

</div>  
        {activeTab === "appointments" && (
          <> 
            {loading ? (
              <p className="text-xl">Loading bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="text-xl">No bookings found.</p>
            ) : (
          <div className="grid gap-6">
            {bookings
  .filter((booking) => {
    const matchesSearch =
      booking.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (booking.status || "pending") === statusFilter;

    return matchesSearch && matchesStatus;
  })
  .map((booking) => (
  <div
  key={booking.id}
  className="bg-white rounded-3xl shadow-lg border border-green-100 p-8 hover:shadow-2xl transition-all"
>

  {/* Top */}

  <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">

    <div className="flex gap-5">

      <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold">
        {booking.name?.charAt(0).toUpperCase()}
      </div>

      <div>

        <h2 className="text-2xl font-bold text-green-900">
          {booking.name}
        </h2>

        <p className="text-gray-500 mt-1">
          📞 {booking.phone}
        </p>

      </div>

    </div>

    <div className="flex flex-col items-end gap-2">

  <label className="text-sm text-gray-500 font-medium">
    Status
  </label>

  <select
    value={booking.status || "pending"}
    onChange={(e) =>
      updateStatus(booking.id, e.target.value)
    }
    className="border border-gray-300 rounded-xl px-4 py-2 font-semibold bg-white shadow-sm focus:ring-2 focus:ring-green-600"
  >
    <option value="pending">🟡 Pending</option>
    <option value="confirmed">🟢 Confirmed</option>
    <option value="completed">🔵 Completed</option>
    <option value="cancelled">🔴 Cancelled</option>
  </select>

</div>

  </div>

  {/* Information */}

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    <div>
      <p className="text-gray-500 text-sm">Age</p>
      <p className="font-semibold">{booking.age}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Gender</p>
      <p className="font-semibold">{booking.gender}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">City</p>
      <p className="font-semibold">{booking.city}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Consultation</p>
      <p className="font-semibold">
        {booking.consultation_type}
      </p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Appointment Date</p>
      <p className="font-semibold">
        {booking.preferred_date}
      </p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Appointment Time</p>
      <p className="font-semibold">
        {booking.preferred_time}
      </p>
    </div>

  </div>

  <hr className="my-8"/>

  <h3 className="font-bold text-green-900 mb-5">
    Quick Actions
  </h3>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

  {/* Pending */}

  {(!booking.status || booking.status === "pending") && (
    <>
      <button
        onClick={() => updateStatus(booking.id, "confirmed")}
        className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold"
      >
        ✅ Confirm
      </button>

      <button
        onClick={() => updateStatus(booking.id, "cancelled")}
        className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-semibold"
      >
        ❌ Cancel
      </button>

      <a
        href={`tel:${booking.phone}`}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-center font-semibold"
      >
        📞 Call
      </a>
    </>
  )}

  {/* Confirmed */}

  {booking.status === "confirmed" && (
    <>
      <button
        onClick={() => updateStatus(booking.id, "completed")}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
      >
        ✔ Complete
      </button>

      <button
        onClick={() => sendConfirmation(booking)}
        className="bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 font-semibold"
      >
        💬 WhatsApp
      </button>

      <a
        href={`tel:${booking.phone}`}
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 text-center font-semibold"
      >
        📞 Call
      </a>
    </>
  )}

  {/* Completed */}

  {booking.status === "completed" && (
  <>
    <button
      onClick={() => updateStatus(booking.id, "confirmed")}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
    >
      ↩ Mark Confirmed
    </button>

    <button
      onClick={() => sendCompletion(booking)}
      className="bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 font-semibold"
    >
      💬 Thank Patient
    </button>

    <button
      onClick={() => deleteBooking(booking.id)}
      className="bg-red-700 hover:bg-red-800 text-white rounded-xl py-3 font-semibold"
    >
      🗑 Delete
    </button>
  </>
)}
    

  {/* Cancelled */}

    {booking.status === "cancelled" && (
  <>
    <button
      onClick={() => updateStatus(booking.id, "pending")}
      className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl py-3 font-semibold"
    >
      ↩ Restore Booking
    </button>

    <button
      onClick={() => sendCancellation(booking)}
      className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 font-semibold"
    >
      💬 Inform Patient
    </button>

    <button
      onClick={() => deleteBooking(booking.id)}
      className="bg-red-700 hover:bg-red-800 text-white rounded-xl py-3 font-semibold"
    >
      🗑 Delete
    </button>
    </>
  )}

</div>   {/* closes button grid */}

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
  .filter((inquiry) => {
    const matchesSearch =
      inquiry.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (inquiry.status || "pending") === statusFilter;

    return matchesSearch && matchesStatus;
  })
  .map((inquiry) => (
            <div
  key={inquiry.id}
  className="bg-white rounded-3xl shadow-lg border border-green-100 p-8 hover:shadow-2xl transition-all"
>
  {/* Header */}
  <div className="flex flex-col lg:flex-row justify-between gap-6">

    <div className="flex gap-5">
      <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold">
        {inquiry.name?.charAt(0).toUpperCase()}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-green-900">
          {inquiry.name}
        </h2>

        <p className="text-gray-500 mt-1">
          📞 {inquiry.phone}
        </p>
      </div>
    </div>

    <span
      className={`px-5 py-2 rounded-full font-semibold text-sm ${
        inquiry.status === "resolved"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {(inquiry.status || "Pending").toUpperCase()}
    </span>

  </div>

  {/* Details */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    <div>
      <p className="text-gray-500 text-sm">Age</p>
      <p className="font-semibold">{inquiry.age}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Gender</p>
      <p className="font-semibold">{inquiry.gender}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">City</p>
      <p className="font-semibold">{inquiry.city}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Preferred Callback</p>
      <p className="font-semibold">{inquiry.callback_time}</p>
    </div>

  </div>

  <hr className="my-8"/>

  <div className="grid md:grid-cols-2 gap-8">

    <div>
      <p className="text-sm text-gray-500 mb-2 font-semibold">
        Symptoms
      </p>

      <div className="bg-green-50 rounded-xl p-4 text-gray-700">
        {inquiry.symptoms || "Not provided"}
      </div>
    </div>

    <div>
      <p className="text-sm text-gray-500 mb-2 font-semibold">
        Message
      </p>

      <div className="bg-gray-50 rounded-xl p-4 text-gray-700 min-h-[110px]">
        {inquiry.message || "No additional message"}
      </div>
    </div>

  </div>

  <hr className="my-8"/>

  <h3 className="font-bold text-green-900 mb-5">
    Quick Actions
  </h3>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

    <a
      href={`tel:${inquiry.phone}`}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-center font-semibold"
    >
      📞 Call
    </a>

    <a
      href={`https://wa.me/91${inquiry.phone}`}
      target="_blank"
      className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-center font-semibold"
    >
      💬 WhatsApp
    </a>

    <div className="flex flex-col">
  <label className="text-sm text-gray-500 mb-1">
    Inquiry Status
  </label>

  <select
    value={inquiry.status || "pending"}
    onChange={(e) =>
      updateInquiryStatus(inquiry.id, e.target.value)
    }
    className="border border-gray-300 rounded-xl px-4 py-3 bg-white font-semibold"
  >
    <option value="pending">🟡 Pending</option>
    <option value="resolved">🟢 Resolved</option>
  </select>
</div>

    <button
      onClick={() => deleteInquiry(inquiry.id)}
      className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-semibold"
    >
      🗑 Delete
    </button>

  </div>
</div>
          ))}
      </div>
    )}
  </div>
)}

      </div>   {/* max-w-7xl */}
    </div>    
  );
}
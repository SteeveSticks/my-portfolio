"use client";

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="px-14 mt-30">
      <div className="border grid text-wrap">
        <h1 className="text-black font-bold text-3xl">Get in touch</h1>

        <p className="prose mt-2 text-gray-600">
          Whether it&apos;s a freelance gig, a collaboration, or a full-time
          opportunity, or want to say hi? I&apos;m always excited to connect
          with people who love building meaningful things. Drop a message, and
          I&apos;ll get back to you as soon as I can!
        </p>
      </div>

      <div className="grid">
        <form
          onSubmit={handleSubmit}
          className="border bg-gray-100 mt-20 py-20"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <div className="mt-4">
            <button type="submit" disabled={loading}>
              {loading ? "Sending.." : "Send Message"}
            </button>
          </div>

          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

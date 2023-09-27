"use client"

import React, { useState } from 'react';

export default function LoginForm() {
  const [error, setError] = useState(null);

  async function handleSubmit(formData) {
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (jsonResponse.error) {
        setError(jsonResponse.error);
      }
    } catch (error) {
      setError("An Error Occurred");
    }
  }

  return (
    <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded shadow-2xl p-4">
      <h1 className="text-lg font-bold mb-4">Login</h1>
      {error && (
        <div className="px-4 py-2 border rounded mb-3 text-red-900 bg-red-200">
          {error}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleSubmit(formData);
        }}
        className="flex flex-col gap-1"
      >
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter phone number here"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter password here"
        />

        <button
          type="submit"
          className="px-4 py-2 border rounded mb-3 bg-primary"
        >
          Login
        </button>
      </form>
    </section>
  );
}

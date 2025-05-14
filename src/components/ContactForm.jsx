// ✅ src/components/ContactForm.jsx
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-8 bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Send us a message</h2>

      {submitted && (
        <p className="text-green-600 text-center mb-4">Message submitted successfully!</p>
      )}

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
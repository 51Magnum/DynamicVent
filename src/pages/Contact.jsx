import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to send message.');
      }

      const data = await res.json();
      setStatus(data.message || 'Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Contact Us</h1>
        <p className="mb-6 text-gray-600">
          We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
}

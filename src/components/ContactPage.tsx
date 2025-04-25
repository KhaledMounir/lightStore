import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from './ui/Card';
import Button from './ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team for expert assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Phone className="h-6 w-6 text-blue-500" />,
              title: 'Phone',
              content: '(123) 456-7890',
              subContent: 'Mon-Fri from 8am to 5pm'
            },
            {
              icon: <Mail className="h-6 w-6 text-green-500" />,
              title: 'Email',
              content: 'support@lightstore.com',
              subContent: 'Online 24/7'
            },
            {
              icon: <MapPin className="h-6 w-6 text-purple-500" />,
              title: 'Address',
              content: '1234 Light Avenue',
              subContent: 'Bright City, BC 56789'
            }
          ].map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-white ml-2">{item.title}</h3>
              </div>
              <p className="text-white mb-1">{item.content}</p>
              <p className="text-gray-400 text-sm">{item.subContent}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Business Hours & FAQ */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-bold text-white">Business Hours</h2>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-700 last:border-0">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: 'What is your return policy?',
                    answer: 'We offer a 30-day return policy for all unopened items in their original packaging.'
                  },
                  {
                    question: 'Do you offer installation services?',
                    answer: 'Yes, we provide professional installation services for all our lighting products.'
                  },
                  {
                    question: 'What warranty do you offer?',
                    answer: 'Our products come with a standard 2-year warranty against manufacturing defects.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-0 pb-4">
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
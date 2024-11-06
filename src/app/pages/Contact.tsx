import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Container from '../../components/Container';
import { Calendly } from '../../components/icons/Calendly';
import FlexibleBadge from '../../components/TitleBadge';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitResult(null);

    if (validateForm()) {
      try {
        const result = await emailjs.send(
          'service_49knah8',
          'template_s2du2ur',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'zY4U1574ljQMp_KOU'
        );

        if (result.text === 'OK') {
          setSubmitResult('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setSubmitResult('Failed to send message. Please try again later.');
        console.error('Form submission error:', error);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[100vh] w-full bg-white font-medium">
      <Container className="flex-col lg:px-0 md:px-10 md:py-48 py-40 text-black md:items-start items-center">
        <div className="mb-5 md:px-0 px-4">
          <h1>
            <FlexibleBadge
              text="Contact us"
              iconClassName="hidden"
              textClassName="text-[#787878] text-sm"
              className="bg-[#f2f2f2]"
            />
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
            Talk to us
          </h2>
          <p className="mt-4">
            Do you have questions? Contact us and let us know.
            <br /> We will get back to you fast.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 w-full md:p-0 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm mt-4 text-[#787878]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="border-2 mt-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm mt-4 text-[#787878]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border-2 mt-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm mt-4 text-[#787878]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="border-2 mt-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none h-32"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black mt-5 text-white rounded-lg focus:outline-none flex h-10 items-center justify-center w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitResult && (
              <p
                className={`mt-2 text-center text-sm ${
                  submitResult.includes('success')
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {submitResult}
              </p>
            )}
            <Link
              to="https://cal.com/devscook/devscook-intro"
              className="flex p-4 border hover:bg-black hover:text-white transition-colors duration-300 items-center text-black justify-center mt-4 bg-white border-black rounded-lg space-x-2"
            >
              <div>
                <Calendly className="text-3xl" />
              </div>
              <div>
                <p className="text-base">Book a call with us</p>
              </div>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

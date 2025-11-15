import emailjs from '@emailjs/browser';

// EmailJS configuration
// These values should be set in your .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Initialize EmailJS with your public key
 * Call this once when your app loads (e.g., in main.tsx or App.tsx)
 */
export const initEmailJS = () => {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  }
};

/**
 * Send contact form email via EmailJS
 * @param data - Contact form data
 * @returns Promise that resolves when email is sent
 */
export const sendContactEmail = async (data: EmailData): Promise<void> => {
  // Check if EmailJS is configured
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
  }

  // Prepare template parameters
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    company: data.company || 'Not provided',
    phone: data.phone || 'Not provided',
    subject: data.subject,
    message: data.message,
    to_name: 'Visionary Team', // Your team name or recipient name
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};


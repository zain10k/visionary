# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (you get 200 emails/month for free)

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **EmailJS** for testing
4. Follow the setup instructions for your email provider
5. Once configured, note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Visionary contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add these variables with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Important**: Replace the placeholder values with your actual EmailJS credentials

## Step 6: Install Dependencies

Run this command to install EmailJS:

```bash
npm install
```

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email inbox - you should receive the form submission

## Troubleshooting

### Form submissions not working?

1. **Check your environment variables**: Make sure your `.env` file is in the root directory and contains the correct values
2. **Restart your dev server**: After adding/changing `.env` variables, restart Vite
3. **Check the browser console**: Look for any error messages
4. **Verify EmailJS settings**: Make sure your Service and Template IDs are correct in the EmailJS dashboard

### Free tier limits

- Free tier: 200 emails/month
- If you exceed this, you'll need to upgrade or wait until next month
- For production, consider upgrading to a paid plan

## Security Notes

⚠️ **Important**: The Public Key is safe to expose in client-side code. However:
- Never share your Private Key (not used in this setup)
- The email service credentials should be kept secure
- For production, consider adding rate limiting to prevent spam

## Alternative: Use Your Own Backend

If you prefer to handle emails through your own backend server instead of EmailJS, you can:
1. Create an API endpoint that sends emails
2. Update `src/lib/emailService.ts` to call your API instead
3. Set `VITE_API_URL` in your `.env` file


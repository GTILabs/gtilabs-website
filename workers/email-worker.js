/**
 * Cloudflare Worker for sending emails via Brevo API
 *
 * Environment Variables Required:
 * - BREVO_API_KEY: Your Brevo API key
 * - RECIPIENT_EMAIL: Email address to receive contact form submissions
 * - ALLOWED_ORIGIN: Your website domain (e.g., https://gtilabs.id)
 */

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const formData = await request.json();

      const { firstName, lastName, email, company, projectType, message } = formData;

      // Validate required fields
      if (!firstName || !lastName || !email || !projectType || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Prepare email content
      const emailContent = {
        sender: {
          name: 'GTI Labs Website',
          email: 'noreply@gtilabs.id',
        },
        to: [
          {
            email: env.RECIPIENT_EMAIL || 'hello@gtilabs.id',
            name: 'GTI Labs',
          },
        ],
        replyTo: {
          email: email,
          name: `${firstName} ${lastName}`,
        },
        subject: `New Contact from GTI Labs Website: ${projectType}`,
        htmlContent: `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #e91e63, #9c27b0); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #666; }
                .value { margin-top: 5px; }
                .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #e91e63; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${firstName} ${lastName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Company</div>
                    <div class="value">${company || 'Not provided'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Project Type</div>
                    <div class="value">${projectType}</div>
                  </div>
                  <div class="field">
                    <div class="label">Message</div>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      };

      // Send email via Brevo API
      const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': env.BREVO_API_KEY,
        },
        body: JSON.stringify(emailContent),
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json();
        console.error('Brevo API error:', errorData);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

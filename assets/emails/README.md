Email templates for Horse Racer AI beta workflows

Files:
- beta-confirmation.html — HTML email sent after a user registers for the beta. Uses these variables:
  - {{name}} — recipient name
  - {{email}} — recipient email
  - {{device}} — device selected by user
  - {{timestamp}} — ISO timestamp of submission
  - {{testflight_info_url}} — page with beta/TestFlight info
  - {{support_email}} — support email address
  - {{privacy_url}} — privacy policy link
  - {{year}} — current year

- beta-confirmation.txt — Plain-text fallback for the above.

- testflight-invite.html — HTML email with TestFlight invitation link/code. Variables:
  - {{name}} — recipient name
  - {{testflight_link}} — deep link to TestFlight invite
  - {{invite_code}} — code if link fails
  - {{feedback_email}} — where testers send feedback
  - {{timestamp}} — issued timestamp
  - {{expiry}} — invite expiry (human readable)
  - {{privacy_url}} — privacy policy link

- testflight-invite.txt — Plain-text fallback for the above.

Usage notes:
- These templates are intentionally self-contained with inline CSS to maximize compatibility across email clients. When sending via programmatic email services (SendGrid, Mailgun, SES, Postmark, etc.), replace the placeholders with your templating system values before sending.

- Example (Node + Nodemailer):
  const html = renderTemplate('beta-confirmation.html', vars);
  await transporter.sendMail({ from, to: vars.email, subject: 'Thanks for signing up — Horse Racer AI', html, text: renderTemplate('beta-confirmation.txt', vars) });

- Security: Never include sensitive tokens directly in emails. If you include links that require authentication, use short-lived tokens and one-click login endpoints.

- Personalization: Keep subject lines short (<=60 chars) and use plain-text fallbacks for deliverability.

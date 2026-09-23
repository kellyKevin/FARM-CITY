import type { Metadata } from "next";
import LegalLayout, { Section } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Farm City",
  description:
    "How Farm City collects, uses and protects your personal data when you order fresh produce and seedlings via WhatsApp, the website and M-Pesa.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="Farm City (“we”, “us”) respects your privacy. This policy explains what personal data we collect when you order from us, how we use it, who we share it with, and your rights under the Kenya Data Protection Act, 2019."
      updated="23 September 2026"
    >
      <Section heading="1. Who we are">
        <p>
          Farm City is a Kenyan business supplying fresh produce and seedlings, with hubs in Juja
          and Eldoret. You can reach us on WhatsApp at <strong>0701 645 029</strong> or by email at{" "}
          <a href="mailto:magewesley16@gmail.com">magewesley16@gmail.com</a>. For data-protection
          questions, contact us using those details.
        </p>
      </Section>

      <Section heading="2. What we collect">
        <ul>
          <li><strong>Contact details</strong> — your name, WhatsApp/phone number and (if given) email.</li>
          <li><strong>Order & delivery details</strong> — items ordered, delivery address or pick-up point, receiver name and phone, preferred dates.</li>
          <li><strong>Messages</strong> — the WhatsApp conversation you have with our ordering assistant, so we can process and support your order.</li>
          <li><strong>Payment references</strong> — the M-Pesa confirmation code/reference for your order. We do <strong>not</strong> store your M-Pesa PIN or full financial credentials.</li>
          <li><strong>Bulk / institutional enquiries</strong> — organisation name, contact person and requirements when you request a quote.</li>
        </ul>
      </Section>

      <Section heading="3. How we use your data">
        <ul>
          <li>To receive, price, confirm, pack and deliver your orders.</li>
          <li>To send you order updates and reminders on WhatsApp.</li>
          <li>To prepare quotes for bulk and institutional customers.</li>
          <li>To provide customer support and resolve issues.</li>
          <li>To keep records required for our business and tax obligations.</li>
        </ul>
        <p>
          We rely on your request/consent (placing an order or messaging us), the performance of our
          contract with you, and our legitimate business interests as the legal bases for processing.
        </p>
      </Section>

      <Section heading="4. WhatsApp messaging & opt-out">
        <p>
          We communicate order information through the WhatsApp Business Platform. By messaging us or
          placing an order you consent to receive order-related messages. You can opt out of
          non-order messages at any time by replying <strong>STOP</strong> (or <strong>ACHA</strong>).
          We will still send essential messages needed to complete an order you have placed.
        </p>
      </Section>

      <Section heading="5. Who we share it with">
        <p>We share data only as needed to run the service:</p>
        <ul>
          <li><strong>Meta Platforms (WhatsApp)</strong> — to deliver messages to and from you.</li>
          <li><strong>Safaricom (M-Pesa)</strong> — to confirm payments you make.</li>
          <li><strong>Our hosting and database providers</strong> — to securely store order data.</li>
          <li><strong>Delivery riders / couriers</strong> — the delivery details needed to reach you.</li>
        </ul>
        <p>We do not sell your personal data.</p>
      </Section>

      <Section heading="6. How long we keep it">
        <p>
          We keep order and customer records for as long as needed to serve you and to meet legal,
          accounting and tax requirements, after which they are deleted or anonymised.
        </p>
      </Section>

      <Section heading="7. Your rights">
        <p>Under the Data Protection Act, 2019 you may ask us to:</p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>correct data that is inaccurate or incomplete;</li>
          <li>delete your data where there is no legal reason to keep it;</li>
          <li>stop non-essential marketing/updates.</li>
        </ul>
        <p>To exercise any of these, contact us on the details in section 1.</p>
      </Section>

      <Section heading="8. Security">
        <p>
          We use reputable, access-controlled systems and signed, verified connections for our
          WhatsApp and payment integrations to protect your data. No system is perfectly secure, but
          we take reasonable steps to safeguard your information.
        </p>
      </Section>

      <Section heading="9. Changes">
        <p>
          We may update this policy from time to time. The latest version will always be on this page
          with the updated date shown above.
        </p>
      </Section>
    </LegalLayout>
  );
}

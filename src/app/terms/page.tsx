import type { Metadata } from "next";
import LegalLayout, { Section } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Farm City",
  description:
    "The terms that govern ordering fresh produce and seedlings from Farm City via WhatsApp, the website and M-Pesa.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms govern your use of the Farm City website and WhatsApp ordering service. By placing an order you agree to them."
      updated="23 September 2026"
    >
      <Section heading="1. Ordering">
        <p>
          You can order fresh produce and seedlings through our website cart, our WhatsApp ordering
          assistant, or by messaging us directly. An order is confirmed once we acknowledge it and,
          where applicable, payment is received. We may decline or cancel an order if an item is
          unavailable, the delivery area is not serviceable, or details cannot be verified.
        </p>
      </Section>

      <Section heading="2. Prices & availability">
        <p>
          Prices are shown in Kenya Shillings (KES) and may change as market prices and stock change.
          Fresh produce is seasonal, so availability and pricing can vary. The price that applies to
          your order is the one confirmed at the time we accept it. Bulk and institutional pricing is
          provided by separate quotation.
        </p>
      </Section>

      <Section heading="3. Payment">
        <p>
          Payment is by M-Pesa to the paybill/till we provide, or cash on delivery where offered.
          Please use the order reference we give you so we can match your payment. Orders that are
          not paid within the stated time may be placed on hold or cancelled and any reserved stock
          released.
        </p>
      </Section>

      <Section heading="4. Delivery & pick-up">
        <p>
          We deliver fresh produce within our local zones (dispatched from Juja) and send seedlings
          countrywide (dispatched from Eldoret) via courier or bus, or you may pick up at our
          nursery. Delivery fees, cut-off times and dates are confirmed during ordering. We aim to
          deliver on the agreed day but times are estimates and may be affected by matters outside
          our control.
        </p>
      </Section>

      <Section heading="5. Cancellations & changes">
        <p>
          You may change or cancel an order before it is packed or dispatched by contacting us
          promptly. Once produce is packed or seedlings are dispatched, cancellation may not be
          possible. See our{" "}
          <a href="/refund-policy">Refund &amp; Returns Policy</a> for damaged, wrong or missing
          items.
        </p>
      </Section>

      <Section heading="6. Bulk & contract customers">
        <p>
          Contract and institutional supply (including standing orders and agreed price lists) is
          subject to the specific quotation and any supply agreement we enter into with you, which
          takes precedence over these general terms for that supply.
        </p>
      </Section>

      <Section heading="7. Acceptable use">
        <p>
          Please use our service honestly and lawfully. Do not misuse the WhatsApp line, place
          fraudulent orders, or provide false delivery details. We may refuse service where these
          terms are abused.
        </p>
      </Section>

      <Section heading="8. Liability">
        <p>
          We take care to supply quality produce and seedlings. To the extent permitted by law, our
          liability for any order is limited to replacing the affected items or refunding what you
          paid for them. We are not liable for indirect or consequential losses.
        </p>
      </Section>

      <Section heading="9. Governing law">
        <p>
          These terms are governed by the laws of Kenya, and any dispute is subject to the
          jurisdiction of the Kenyan courts.
        </p>
      </Section>

      <Section heading="10. Contact">
        <p>
          Questions about these terms? WhatsApp <strong>0701 645 029</strong> or email{" "}
          <a href="mailto:magewesley16@gmail.com">magewesley16@gmail.com</a>.
        </p>
      </Section>
    </LegalLayout>
  );
}

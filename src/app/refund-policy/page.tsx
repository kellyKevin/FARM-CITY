import type { Metadata } from "next";
import LegalLayout, { Section } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund & Returns Policy — Farm City",
  description:
    "How Farm City handles damaged, wrong or missing items, cancellations and M-Pesa refunds for fresh produce and seedlings.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Returns Policy"
      intro="Fresh produce is perishable, so our returns work a little differently. Here is how we make things right if something is wrong with your order."
      updated="23 September 2026"
    >
      <Section heading="1. Check your order on delivery">
        <p>
          Please check your items when you receive them. If anything is <strong>damaged, spoiled,
          wrong or missing</strong>, tell us as soon as possible and <strong>within 24 hours</strong>{" "}
          of delivery, with a photo where you can, on WhatsApp <strong>0701 645 029</strong>.
        </p>
      </Section>

      <Section heading="2. Fresh produce">
        <p>
          For quality issues reported within the window above, we will, at our discretion,{" "}
          <strong>replace the item on your next delivery</strong> or <strong>refund</strong> the
          amount you paid for that item. Because produce is perishable, we generally cannot accept
          returns for change-of-mind once items have been delivered.
        </p>
      </Section>

      <Section heading="3. Seedlings">
        <p>
          Seedlings are inspected and packed carefully before dispatch. If they arrive damaged in
          transit, report it within <strong>24 hours</strong> of receipt with photos and we will
          arrange a replacement or refund. We cannot guarantee growth outcomes after planting, as
          these depend on care and conditions beyond our control.
        </p>
      </Section>

      <Section heading="4. Cancellations">
        <p>
          You may cancel before your order is packed (produce) or dispatched (seedlings) for a full
          refund of anything paid. After packing or dispatch, cancellation may not be possible.
        </p>
      </Section>

      <Section heading="5. How refunds are made">
        <p>
          Approved refunds are sent back to the <strong>M-Pesa number you paid from</strong> (or the
          original payment method) within a few business days. If you paid cash on delivery, a refund
          is arranged by M-Pesa or credited to your next order, as agreed.
        </p>
      </Section>

      <Section heading="6. Wrong or double payments">
        <p>
          If you pay the wrong amount or pay twice, contact us with the M-Pesa reference(s) and we
          will reconcile and refund any overpayment.
        </p>
      </Section>

      <Section heading="7. Contact">
        <p>
          To request a replacement or refund, WhatsApp <strong>0701 645 029</strong> or email{" "}
          <a href="mailto:magewesley16@gmail.com">magewesley16@gmail.com</a> with your order number.
        </p>
      </Section>
    </LegalLayout>
  );
}

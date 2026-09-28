// Single source of truth for deployment- and contact-level constants.
// TODO: replace the placeholder domain with the production domain.
export const SITE_URL = "https://meridian-georgia.example";

export const CONTACT = {
  operationsEmail: "operations@meridian-georgia.example",
  accountsEmail: "accounts@meridian-georgia.example",
  careersEmail: "careers@meridian-georgia.example",
  dutyPhoneDisplay: "+995 322 00 01 12",
  dutyPhoneHref: "tel:+995322000112",
  offices: {
    poti: "+995 322 00 01 12",
    batumi: "+995 422 00 01 18",
    tbilisi: "+995 322 00 01 40",
  },
} as const;

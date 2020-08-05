export interface Contact {
  UserID: string;
  IsFavorite: "0" | "1";
  BirthDate: string;
  Title: "MR" | "MRS";
  Name: string;
  ContactDetail: ContactDetail;
}

interface ContactDetail {
  ContactDetailType: "Phone" | "EAMIL";
  ContactDetailContent: string;
}

export type PartialContact = Partial<Contact>;

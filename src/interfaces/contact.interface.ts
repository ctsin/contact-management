export interface Contact {
  UserID: string;
  IsFavorite: "0" | "1";
  BirthDate: string;
  Title: "MR" | "MRS";
  Name: string;
  ContactDetail: ContactDetail;
}

interface ContactDetail {
  UserID: string;
  ContactDetailType: "Phone" | "EAMIL";
  ContactDetailContent: string;
}

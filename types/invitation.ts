export interface InvitationFields {
  zenich: string;
  nevesta: string;
  datum: string;
  cas: string;
  misto: string;
  vzkaz: string;
}

export interface InvitationStyle {
  font: string;
  palette: string;
}

export interface Invitation {
  id: string;
  templateId: string;
  fields: InvitationFields;
  style: InvitationStyle;
  photoUrl: string | null;
}

export const defaultInvitation: Invitation = {
  id: "",
  templateId: "classic-01",
  fields: {
    zenich: "Jan",
    nevesta: "Eva",
    datum: "2026-08-15",
    cas: "14:00",
    misto: "Zámek Lednice",
    vzkaz: "Budeme rádi, když oslavíte tento den s námi.",
  },
  style: {
    font: "playfair",
    palette: "blush",
  },
  photoUrl: null,
};

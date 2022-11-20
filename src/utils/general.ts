import i18next from "i18next";

const langObj: any = {
  uz: "Uz",
  lat: "Lat",
  ru: "Ru",
};

export const LangField = (field: string) =>
  `${field}${langObj[i18next.language]}`;

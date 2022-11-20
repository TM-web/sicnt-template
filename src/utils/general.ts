import i18next from "i18next";

const langObj: any = {
  uz: "Uz",
  lat: "Lat",
  ru: "Ru",
};

export const langField = (field: string) =>
  `${field}${langObj[i18next.language]}`;

// For formating summa like: mln | mlrd
export const summaFormater = (
  sum: number | undefined | null,
  format: string,
  prefix: boolean = true
) => {
  const mlrdSum = 1000000000;
  const mlnSum = 1000000;

  const mlrd: any = sum ? (sum / mlrdSum)?.toFixed(1) : 0;
  const mln: any = sum ? (sum / mlnSum)?.toFixed(1) : 0;
  const som: any = sum ? numberFormat(sum) : "0,0";

  const value: any = {
    mlrd: `${Number(mlrd)?.toLocaleString("ru-RU", {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    })} ${prefix ? "млрд сўм" : ""}`,
    mln: `${Number(mln)?.toLocaleString("ru-RU", {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    })} ${prefix ? "млн сўм" : ""}`,
    som: `${som} ${prefix ? "сўм" : ""}`,
  };
  return value[format];
};

// Formating summa
export const numberFormat = (
  num: number = 0,
  fixedCount = 1,
  maxDigit: number = 1
) =>
  Number((num || 0)?.toFixed(fixedCount))?.toLocaleString("ru-RU", {
    maximumFractionDigits: maxDigit,
    minimumFractionDigits: fixedCount,
  });

// For increment sums
export const sumIncrement = (arr: any[], key: any, formatter: any = true) => {
  const array = arr?.reduce((prev: any, next: any) => (prev += next[key]), 0);
  if (array) {
    return formatter ? numberFormat(array) : array;
  }
  return "0,0";
};

// Debounce Fn
export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

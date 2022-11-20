export type Nullable<Type = any> = {
    [Key in keyof Type]: Type[Key] | null;
};

export type Summary = Nullable<{
    cnt: number
    findAmount: number
    payedAmount: number
    performance: number
    validAmount: number
    allCount: number
    comCount: number
    performSum: number
}>




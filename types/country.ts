export type CountryCode =
    | "gb"
    | "us"
    | "ca"
    | "au"
    | "nz"
    | "ie"
    | "fr"
    | "de"
    | "es"
    | "it"
    | "nl"
    | "se";

export type Country = {
    id: CountryCode;
    label: string;
    emoji: string;
};

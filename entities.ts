// message type
export type Message = {
  id: number;
  title: string;
  description: string;
  image: object;
};

// icon name type
export type IconName =
  | "email"
  | "format-list-bulleted"
  | "logout"
  | "apps"
  | "lock"
  | "chevron-right"
  | "account";

// icon props
export type IconsProps = {
  name: IconName;
  size: number;
  backgroundColor: string;
  iconColor: string;
};

// text props
export type textProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  onBlur?: () => void;
  autoCorrect?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";
};

// category type
export type Category = {
  label: string;
  value: number;
};

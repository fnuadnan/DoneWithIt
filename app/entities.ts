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
  | "floor-lamp"
  | "car"
  | "camera"
  | "cards"
  | "shoe-heel"
  | "basketball"
  | "headphones"
  | "book"
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
  defaultValue?: string;
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
  backgroundColor?: string; // for the color of the icon
  icon: IconName; // for the name of the icon
};

export type Listing = {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string | Category;
  price: number;
  userId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  icon?: string;
};

export interface SbxResponse {
  value: Entity[];
}

export interface Entity {
  EntityId: string;
  OriginEntityId: string;
  Name: string;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Suffix: string;
  NameSource: string;
  GovDesignation: string;
  EntryType: string;
  EntryCategory: string;
  EntrySubCategory: string;
  Organization: string;
  Positions: string;
  Remarks: string;
  DateOfBirth: string;
  PlaceOfBirth: string;
  CountryLabel: string;
  Country: string;
  ExpirationDate: string;
  EffectiveDate: string;
  PictureFile: string;
  LinkedTo: string;
  RelatedID: string;
  TouchDate: string;
  PassportID: string;
  NationalID: string;
  OtherID: string;
  DateOfBirth2: string;
  EntityLevel: string;
  Watch: string;
  Relationships: string;
  PrimaryName: string;
}

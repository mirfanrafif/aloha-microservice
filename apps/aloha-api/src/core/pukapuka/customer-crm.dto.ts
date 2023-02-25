export type CustomerResponse = {
  data: CrmCustomer[];
  meta: CRMCustomerMeta;
  links: Links;
};

export type CrmCustomer = {
  status: Status;
  is_active: boolean;
  id: number;
  created_at: Date;
  updated_at: Date;
  code: null;
  title: Title | null;
  first_name: string;
  last_name: null | string;
  balance: string;
  email: null | string;
  address: null | string;
  shipping_address: null | string;
  notes: null | string;
  dob: null;
  telephones: string;
  users: CrmUser[];
  types: Type[];
  full_name: string;
  telephones_array: string[];
};

export enum Status {
  Kontak = 'Kontak',
}

export enum Title {
  Bapak = 'Bapak',
  Ibu = 'Ibu',
}

export type Type = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  system_id?: number;
};
export type CrmUser = {
  id: number;
  created_at: Date;
  updated_at: Date;
  employee_id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  is_active: boolean;
  role: Type;
  full_name: string;
};

export type CRMCustomerMeta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: Array<string[]>;
};

export type CustomerCategoriesResponse = {
  data: CustomerCategoriesData[];
  meta: Meta;
  links: Links;
};

export type CustomerCategoriesData = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  user: CrmUser;
};

export type Links = {
  current: string;
};

export type Meta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: Array<string[]>;
};

export type CustomerInterestsResponse = {
  data: CustomerInterestsData[];
  meta: Meta;
  links: Links;
};

export type CustomerInterestsData = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  user: CrmUser;
};

export class CustomerCrmSearchFilter {
  'filter.categories.name'?: string;
  'filter.interests.name'?: string;
  'filter.users.email'?: string;
  'filter.types.name'?: string;
}

export type LoginResponse = {
  access_token: string;
  user: CrmUser;
};

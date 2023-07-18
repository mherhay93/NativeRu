export enum ActionsNameUser {
  USER = 'USER',
}

export interface ITypeStateUser {
  user: IUser;
}

export interface IActionUser {
  type: string;
  payload: ITypeStateUser;
}

export interface IUser {
  avatar_cropped_big_url?: string;
  avatar_original_url?: string;
  avatar_url?: string;
  can_evacuation?: boolean;
  card_loyalty_barcode_data?: null | object;
  card_loyalty_exist?: boolean;
  cinemas?: [];
  email?: string;
  game_character_id?: null | number | string;
  grade_sheet_pdf_url?: string;
  id?: number;
  phone_city?: string;
  phone_city_ext?: string;
  phone_mobile?: string;
  points_total?: number;
  position?: string;
  registered?: false;
  roles?: string[];
  unit_head?: false;
  unit_name?: string;
  user_incoming_likes_count?: number;
  user_like_status?: {
    name?: string;
    number?: string;
    range?: string;
    range_human?: string;
    description?: string;
  };
  user_unit?: null;
  user_week_incoming_likes_count?: number;
  username?: string;
  vacation_days?: number;
}

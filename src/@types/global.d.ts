declare module "react-dom";
declare module "connected-react-router";
declare module "react-scripts start";
declare module "react-router";

declare global {
  interface IResponse<R = unknown> {
    data: {
      result?: R;
      error?: IErrorMessage;
    };
    status: number;
    success?: boolean;
  }

  interface IAction<P = unknown> {
    type: string;
    payload?: P;
  }

  interface IMessage {
    message: string;
  }

  interface IErrorMessage {
    error: string;
    code: string;
  }

  interface IAuth {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  }

  interface IFieldsPaginations {
    page: number;
    step: number;
    search?: string;
  }

  interface IFieldsPaginationsResponse extends IFieldsPaginations {
    pages: number;
    found: number;
    total: number;
  }

  interface IProfile {
    birthday: string;
    card_code: string | null;
    city: string;
    email: string;
    id: string;
    mobile: string | null;
    name: string;
    sex: string;
  }

  type TProduct = "my-storage" | "site";

  type TLabel = "Бестселлер" | "Новинка" | "Акция";

  type TOrientation = "horizontal" | "vertical";

  interface IImage {
    url: string;
    orientation: TOrientation;
  }

  interface ICategory {
    category: string;
    groups:
      | {
          groupId: string;
          group: string;
        }[]
      | null;
  }

  interface IProduct {
    barCode: string;
    category: string;
    code: string;
    created: string;
    description: string;
    discountPrice?: number;
    externalCode: string;
    group: string;
    groupId: string;
    hidden: boolean | null;
    id: string;
    images?: IImage[];
    label: TLabel;
    minPrice: number;
    name: string;
    qty: number;
    sellingPrice: number;
    updated: string;
  }
}

export {};

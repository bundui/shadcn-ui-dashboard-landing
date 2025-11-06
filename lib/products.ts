import { ProductTypeEnum } from "@/enums/product-type-enum";

export interface Product {
  id: string;
  paddle_id: {
    production: string;
    sandbox: string;
  };
  name?: string;
  full_name?: string;
  slug?: string;
  short_description?: string;
  long_description?: string;
  key: string;
  title?: string;
  images?: ProductImage[];
  price: string;
  preview_url?: string;
  type: string;
  activation_limit?: number;
}

interface ProductImage {
  url: string;
  title: string;
}

export const products: Product[] = [
  {
    id: "nextjs-starter",
    paddle_id: {
      production: "pri_01jerzshr3caxgwb6kgsd709vt",
      sandbox: "pri_01jerzshr3caxgwb6kgsd709vt"
    },
    key: ProductTypeEnum.Figma,
    price: "$79",
    name: "Shadcn UI Dashboard (Starter)",
    full_name: "Shadcn Dashboard (Single license)",
    title: "Shadcn Dashboard (Single license)",
    type: ProductTypeEnum.Figma,
    activation_limit: 1
  },
  {
    id: "nextjs-extended",
    paddle_id: {
      production: "pri_01je1k0bzp5f1wxfzed9t0p4pc",
      sandbox: "pri_01je1k0bzp5f1wxfzed9t0p4pc"
    },
    key: ProductTypeEnum.Nextjs,
    price: "$199",
    name: "Shadcn UI Dashboard (Extended)",
    full_name: "Shadcn Dashboard (Team license)",
    title: "Shadcn Dashboard (Team license)",
    type: ProductTypeEnum.Nextjs,
    activation_limit: 1
  }
];

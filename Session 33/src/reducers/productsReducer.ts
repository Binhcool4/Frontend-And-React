export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  stock: number;
}

export type ProductsState = Product[];

const initialState: ProductsState = [
  {
    id: 1,
    name: 'Pizza',
    price: 30,
    image: 'https://weur-cdn.lacarte.menu/storage/media/company_gallery/60983614/conversions/gallery_thumbnail.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    stock: 10
  },
  {
    id: 2,
    name: 'Hamburger',
    price: 15,
    image: 'https://as1.ftcdn.net/jpg/01/23/94/90/220_F_123949075_S0gsKnjWPAK9xixDye6lrDfTGzOeFZMX.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    stock: 8
  },
  {
    id: 3,
    name: 'Bread',
    price: 20,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWumAElomS6IVwQJLmzTc_r9A0aVDYbWlNV9sCmga1BvwGZ4dZ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    stock: 15
  },
  {
    id: 4,
    name: 'Cake',
    price: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jvPbH2RePb0P1oJ6w_bSWBQ_e9zXRr2E0T8nxlqjD0ur1qay',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    stock: 20
  }
];

export type ProductsAction = { type: 'SET_PRODUCTS', payload: Product[] };

export function productsReducer(state = initialState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
}

// these data are used for development purposes only. if you not using this data, you can delete this file

export const IngredientOptionsData = [
  {
    name: "Ingredients",
    options: [
      {
        name: "Option 1",
        price: 10, // sadece urun yonetimi icin kullanilacak
        likes: 10, // sadece urun yonetimi icin kullanilacak
        stars: 10, // sadece urun yonetimi icin kullanilacak
        status: 1,
        isChoose: false,
      },
      {
        name: "Option 2",
        price: 20,
        likes: 10,
        stars: 0,
        status: 3,
        isChoose: false,
      },
      {
        name: "Option 3",
        price: 30,
        likes: 0,
        stars: 10,
        status: 2,
        isChoose: false,
      },
    ],
  },
  {
    name: "Options",
    options: [
      {
        name: "Option 1",
        price: 10,
        likes: 0,
        stars: 0,
        status: 1,
        isChoose: false,
      },
      {
        name: "Option 2",
        price: 20,
        likes: 0,
        stars: 0,
        status: 3,
        isChoose: false,
      },
    ],
  },
];

export const dummyList = [
  {
    id: 1,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Ilyas SALMAN",
    paymentType: "Sodexo Yemek Ceki",
    time: "16:59",
    total: "500,50",
    status: 0,
  },
  {
    id: 2,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Asik Veysel",
    paymentType: "Multinet",
    time: "12:59",
    total: "1500,50",
    status: 0,
  },
  {
    id: 3,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Adile Nasit",
    paymentType: "Sodexo Yemek Ceki",
    time: "16:59",
    total: "500,50",
    status: 0,
  },
  {
    id: 11,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Ilyas SALMAN",
    paymentType: "Sodexo Yemek Ceki",
    time: "16:59",
    total: "500,50",
    status: 1,
  },
  {
    id: 12,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Asik Veysel",
    paymentType: "Multinet",
    time: "12:59",
    total: "1500,50",
    status: 1,
  },
  {
    id: 13,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Adile Nasit",
    paymentType: "Sodexo Yemek Ceki",
    time: "16:59",
    total: "500,50",
    status: 1,
  },
  {
    id: 14,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Asik Veysel",
    paymentType: "Multinet",
    time: "12:59",
    total: "1500,50",
    status: 1,
  },

  {
    id: 21,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Ilyas SALMAN",
    paymentType: "Sodexo Yemek Ceki",
    time: "16:59",
    total: "500,50",
    status: 2,
  },
  {
    id: 22,
    address: "iskele mah. 2109. sok. no:16 Urla/Izmir",
    name: "Asik Veysel",
    paymentType: "Multinet",
    time: "12:59",
    total: "1500,50",
    status: 2,
  },
];

export const dummyCompletedOrdersList = [
  {
    id: 1,
    name: "Ilyas SALMAN",
    address: "iskele mah 2109 sok no:16 Urla/Izmir",
    elapsedTime: "59 dk.",
    amount: "500,50",
    paymentMethod: "Sodexo Yemek Ceki",
    orderTime: "16:59",
    checkTime: "17:58",
    deliverTime: "18:58",
    orderId: "#123856789",
  },
  {
    id: 2,
    name: "Asik Veysel",
    address: "iskele mah 2109 sok no:16 Urla/Izmir",
    elapsedTime: "59 dk.",
    amount: "500,50",
    paymentMethod: "Sodexo Yemek Ceki",
    orderTime: "16:59",
    checkTime: "17:58",
    deliverTime: "18:58",
    orderId: "#123466789",
  },
  {
    id: 3,
    name: "Adile Nasit",
    address: "iskele mah 2109 sok no:16 Urla/Izmir",
    elapsedTime: "59 dk.",
    amount: "500,50",
    paymentMethod: "Multinet",
    orderTime: "16:59",
    checkTime: "17:58",
    deliverTime: "18:58",
    orderId: "#123456789",
  },
];

export const orderList = [
  {
    product: "Pesto Soslu Füme Kontrafile Sandwich ve ekmek kırıntıları",
    price: 10,
    quantity: 2,
    ingredients: [
      "Tomato",
      "Cheese",
      "Today’s beta release is just the first iteration of the Audit panel. In the coming months, we’ll be making",
    ],
    productNote: "Extra cheese",
  },
  {
    product: "Milkshake",
    price: 5,
    quantity: 1,
    ingredients: ["Milk", "Vanilla", "Chocolate"],
    productNote: "Extra chocolate",
  },
  {
    product: "Salad",
    price: 7,
    quantity: 1,
    ingredients: ["Lettuce", "Tomato", "Onion"],
  },
];

export const dummyOrderInfo = {
  orderList: orderList,
  detailHeaderInfo: {
    name: "Ilyas SALMAN",
    address: "iskele mah 2109 sok no:16 Urla/Izmir",
    phone1: "0532 123 45 67",
    phone2: "0532 123 45 67",
  },
  orderNotes:
    "Extra cheese, Extra chocolate, Extra onion, Extra tomato, Some extra notes for the order that will be shown in the order details page",
  paymentMethod: "With credit card payment ( bring POS machine )",
  moneyPoint: 10,
  discount: 0,
};

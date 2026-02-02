export const navLinks = [
  { name: "Loja", path: "/store" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  { name: "TV e Casa", path: "/tv-home" },
  { name: "Entretenimento", path: "/entertainment" },
  { name: "Acessórios", path: "/accessories" },
  { name: "Suporte", path: "/support" },
];

export const submenuData: Record<
  string,
  { groups: Array<{ title: string; items: string[]; small?: boolean }> }
> = {
  Loja: {
    groups: [
      {
        title: "Comprar",
        items: [
          "Comprar os lançamentos",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "AirPods",
          "Acessórios",
        ],
      },
      {
        title: "Links rápidos",
        items: ["Encontre uma loja", "Status do pedido", "Financiamento"],
        small: true,
      },
    ],
  },
  Mac: {
    groups: [
      {
        title: "Explorar Mac",
        items: [
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Mac Pro",
          "Monitores",
        ],
      },
      {
        title: "Mais para o Mac",
        items: ["Suporte para Mac", "AppleCare+ para Mac", "macOS Sequoia"],
        small: true,
      },
    ],
  },
  iPad: {
    groups: [
      {
        title: "Explorar iPad",
        items: ["iPad Pro", "iPad Air", "iPad", "iPad mini"],
      },
      {
        title: "Mais para o iPad",
        items: ["Suporte para iPad", "AppleCare+ para iPad"],
        small: true,
      },
    ],
  },
};

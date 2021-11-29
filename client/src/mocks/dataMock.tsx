import { Category, CategoryArticle, ChildCategory } from "types/types";


export const categoryArticlesMock:CategoryArticle = {
	articles: [
		{
			name: "Premium Komfortmatratze Smood",
			variantName: "180 x 200cm",
			prices: {
				currency: "EUR",
				regular: {
					value: 56999,
				},
			},
			images: [
				{
					path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp",
				},
			],
		},
		{
			name: "Boxspringbett Kinx",
			variantName: "Stoff KINX: Grau - 180 x 200cm - 130 cm",
			prices: {
				currency: "EUR",
				regular: {
					value: 164999,
				},
			},
			images: [
				{
					path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000062031-210726-10044100341-IMAGE-P000000001000062031.webp",
				},
			],
		},
	],
}

export const childrenCategoriesMock: ChildCategory[] = [
	{
		name: "Wohnzimmer",
		urlPath: "kategorie/wohnzimmermoebel/",
	},
	{
		name: "Schlafzimmer",
		urlPath: "kategorie/schlafzimmermoebel/",
	},
]

export const categoriesMock:Category[] = [
	{
		name: "Möbel",
		articleCount: 75673,
		childrenCategories: childrenCategoriesMock,
		categoryArticles: categoryArticlesMock
	},
];

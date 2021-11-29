import React, { useEffect, useState } from "react";

import { State } from "types/types";
import SideBar from "components/SideBar/index";
import { getProductList } from "services/productList.service";
import ArticleCard from "components/ArticleCard";
import Header from "components/Header";
import Footer from "components/Footer";


// Emotions styled component
import PageStyled from "./PageStyled";
import ArticlesStyled from "./ArticlesStyled";
import ContentStyled from "./ContentStyled";


/**
 * Article/Product List
 */
const ArticleList = (): JSX.Element => {
	const [productList, setProductList] = useState<State>({ categories: [] });

	// gettong article/product values from api
	useEffect(() => {
		// api call
		getProductList().then((categories:any) => {
			setProductList(categories);
		});
	}, []);

	return (
		<PageStyled>
			<Header />
			<SideBar categories={productList && productList.categories} />
			<ContentStyled >
				{productList && productList.categories.length ? (
					<h1>
						{productList.categories[0].name}
						<small> ({productList.categories[0].articleCount})</small>
					</h1>
				) : (
					"Loading..."
				)}
				<ArticlesStyled>
					{productList && productList.categories.map((category) =>
						category.categoryArticles.articles.map((article, index) => (
							<ArticleCard article={article} key={index} />
						))
					)}
				</ArticlesStyled>
			</ContentStyled>
			<Footer />
		</PageStyled>
	);
};

export default ArticleList;

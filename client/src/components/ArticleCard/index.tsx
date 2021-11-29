import React from "react";
import { Article } from "types/types";
import { formatter } from "utils";
import Button from "components/Button/index";

// Emotions styled components
import ArticleStyled from "./ArticleStyled";

/**
 * Article card component
 */
const ArticleCard = ({ article }: { article: Article }): JSX.Element => {
	return (
		<ArticleStyled>
			<img src={article.images[0].path} alt={article.name} data-testid="articleImage" />
			<div>{article.name}</div>
			<div>{formatter.format(article.prices.regular.value / 100)}</div>
			<Button label="Add to cart" /> 
		</ArticleStyled>
	);
};

export default ArticleCard;

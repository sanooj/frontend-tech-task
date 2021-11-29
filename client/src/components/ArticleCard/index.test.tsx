import React from 'react';
import { render } from '@testing-library/react';
import ArticleCard from './index';
import { categoryArticlesMock } from 'mocks/dataMock';

describe("Article card", () => {
    test('renders the Article card content', () => {
        const { getByText } = render(<ArticleCard article={categoryArticlesMock.articles[0]} />);
        const content = getByText('Premium Komfortmatratze Smood');
        expect(content).toBeInTheDocument();
    });

    test('renders the Article card value', () => {
        const { getByText } = render(<ArticleCard article={categoryArticlesMock.articles[0]} />);
        const content = getByText('569,99 €');
        expect(content).toBeInTheDocument();
    });

    test('renders the Article card image', () => {
        const { getByTestId } = render(<ArticleCard article={categoryArticlesMock.articles[0]} />);
        const image = getByTestId('articleImage');
        expect(image).toHaveAttribute('src', 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp');
    });

    test('renders the Add to cart button', () => {
        const { getByTestId } = render(<ArticleCard article={categoryArticlesMock.articles[0]} />);
        const button = getByTestId('addToCartButton');
        expect(button.textContent).toEqual('Add to cart');
    });
});

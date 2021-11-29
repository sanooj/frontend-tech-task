import React from "react";
import { act, cleanup, render, waitForElement } from "@testing-library/react";
import ArticleList from "./index";
import '@testing-library/jest-dom/extend-expect';
import { categoriesMock } from "mocks/dataMock";
import { getProductList, requestOptions } from "services/productList.service";


describe("Product List", () => {
	test("renders the aside header", () => {
		const { getByText } = render(<ArticleList />);
		const headerElement = getByText(/Kategorien/i);
		expect(headerElement).toBeInTheDocument();
	});

	test("renders the header", () => {
		const { getByText } = render(<ArticleList />);
		const linkElement = getByText(/home24/i);
		expect(linkElement).toBeInTheDocument();
	});

	describe('withFetch', () => {
		test('works', async () => {
		  // highlight-start
		  const fetchMock = jest
			.spyOn(global, 'fetch')
			.mockImplementation(() =>
			  Promise.resolve<any>({ json: () => Promise.resolve([]) })
			)
		  // highlight-end
	  
		  const json = await getProductList()
		  expect(fetchMock).toHaveBeenCalledWith('/graphql',requestOptions)
	  
		  expect(Array.isArray(json)).toEqual(false);
		})
	  })
});

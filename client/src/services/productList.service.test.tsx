import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { categoriesMock } from "mocks/dataMock";
import { getProductList, requestOptions } from "./productList.service";


describe("Product List", () => {
	

	describe('withFetch', () => {
		test('works', async () => {
		  // highlight-start
		  const fetchMock = jest
			.spyOn(global, 'fetch')
			.mockImplementation(() =>
			  Promise.resolve<any>({ json: () => Promise.resolve(categoriesMock) })
			)
		  // highlight-end
	  
		  const json = await getProductList()
		  expect(fetchMock).toHaveBeenCalledWith('/graphql',requestOptions);
		})
	  })
});

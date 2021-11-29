import React from "react";
import { cleanup, render } from "@testing-library/react";
import SideBar from "./index";
import { categoriesMock } from "mocks/dataMock";

describe("Side bar", () => {

	afterEach(cleanup);

	test('renders the heading', () => {
        const { getByText } = render(<SideBar categories={categoriesMock}/>);
        const headerElement = getByText(/Kategorien/i);
        expect(headerElement).toBeInTheDocument();
      });
      
    
	test("renders the link name", () => {
		const { getAllByText } = render(<SideBar categories={categoriesMock} />);
		expect(getAllByText("Wohnzimmer")).toBeDefined();
	});

    test("Should not render the link", () => {
		const { getAllByText } = render(<SideBar categories={[]} />);
		expect(getAllByText("Loading...")).toBeDefined();
	});

    test("renders the link url", () => {
		const { getByText } = render(<SideBar categories={categoriesMock} />);
		expect(getByText('Wohnzimmer').closest('a')).toHaveAttribute('href', '/kategorie/wohnzimmermoebel/')
	});

	test("renders the link available", () => {
		const { findByTestId } = render(<SideBar categories={categoriesMock} />);
		expect(findByTestId.length).toBeTruthy();
	});
});

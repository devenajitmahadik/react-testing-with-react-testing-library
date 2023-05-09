import React from "react";
import Hello from "./Hello";
import { render, fireEvent } from "@testing-library/react";

test("Component should display Hello text by using getByText", () => {
    const { getByText } = render(<Hello />);
    // comp.debug();
    let helloText = getByText("Hello");
    expect(helloText).toBeTruthy();

    // console.log(helloText.tagName);
    expect(helloText.tagName).toBe("H1");
    // console.log(helloText.textContent);
    expect(helloText.textContent).toBe("Hello");
});

test("Component should display Hello text using getByTestId", () => {
    const { getByTestId } = render(<Hello />);
    let helloText = getByTestId("my-heading");
    expect(helloText).toBeTruthy();
    expect(helloText.tagName).toBe("H1");
    expect(helloText.textContent).toBe("Hello");
});

test("Should trigger Button click", () => {
    const { getByRole } = render(<Hello />);
    let myBtn = getByRole("button");
    fireEvent.click(myBtn);

    let myName = "Deven";
    let myInput = getByRole("textbox");
    expect(myInput).toHaveValue("");

    fireEvent.change(myInput, { target: { value: myName}});
    expect(myInput).toHaveValue(myName);
});
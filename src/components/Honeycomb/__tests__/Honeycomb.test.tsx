import React from "react";
import { render } from "@testing-library/react";
import { mocksHoneycomb } from '../__mocks__/Honeycomb.mocks'
import Honeycomb from "../Honeycomb";

describe("Honeycoomb", () => {
  test("renders the Honeycoomb component", () => {
    render(<Honeycomb props={mocksHoneycomb} />);
  });
});
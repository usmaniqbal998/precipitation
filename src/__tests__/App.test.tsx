/* eslint-disable testing-library/no-render-in-setup */
import "regenerator-runtime/runtime";
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

afterEach(cleanup);

describe("Tests for Maps ", () => {
  //  maps test suits here
});

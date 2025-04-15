import { Request, Response } from "express";
import handleEndpointNotFound from "./handleEndPointNotFound";
import { MessageResponse } from "../types";

describe("Given the handleEndPointNotFound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis().mockClear(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      handleEndpointNotFound(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with a message 'error: Endpoint not found'", () => {
      const expectedErrorMessage: MessageResponse = {
        error: "Endpoint not found",
      };

      handleEndpointNotFound(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});

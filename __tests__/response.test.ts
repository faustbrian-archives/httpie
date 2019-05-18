import { Response } from "../src/got/response";
import { IResponseAttributes } from "../src/interfaces";

const responseData: IResponseAttributes = {
	body: "Hello World",
	headers: { "content-type": "application/json" },
	statusCode: 200,
	statusMessage: "OK",
};

test("getBody", () => {
	expect(new Response(responseData).getBody()).toBe(responseData.body);
});

test("getStatusCode", () => {
	expect(new Response(responseData).getStatusCode()).toBe(responseData.statusCode);
});

test("getStatusMessage", () => {
	expect(new Response(responseData).getStatusMessage()).toBe(responseData.statusMessage);
});

test("getHeaders", () => {
	expect(new Response(responseData).getHeaders()).toEqual(responseData.headers);
});

test("getHeader", () => {
	expect(new Response(responseData).getHeader("content-type")).toBe(responseData.headers["content-type"]);
});

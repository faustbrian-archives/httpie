import { URL } from "url";
import { Request } from "../src/got/request";
import { IRequest } from "../src/request";

test("getMethod", () => {
	const request: IRequest = new Request();

	expect(request.getMethod()).toBeUndefined();

	request.withMethod("get");

	expect(request.getMethod()).toBe("get");
});

test("getUrl (with string)", () => {
	const request: IRequest = new Request();

	expect(request.getUrl()).toBeUndefined();

	request.withUrl("https://httpbin.org/");

	expect(request.getUrl()).toEqual(new URL("https://httpbin.org/"));
});

test("getUrl (with URL)", () => {
	const request: IRequest = new Request();

	expect(request.getUrl()).toBeUndefined();

	request.withUrl(new URL("https://httpbin.org/"));

	expect(request.getUrl()).toEqual(new URL("https://httpbin.org/"));
});

test("getOptions", () => {
	const request: IRequest = new Request();

	expect(request.getOptions()).toBeUndefined();

	request.withOptions({ hello: "world" });

	expect(request.getOptions()).toEqual({ hello: "world" });
});

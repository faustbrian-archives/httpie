import "jest-extended";

import { IResponse } from "../src";
import { Gotcha } from "./client";

const client: Gotcha = new Gotcha();

test("should send a GET request", async () => {
	const response: IResponse = await client.get("https://httpbin.org/get");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

test("should send a POST request", async () => {
	const response: IResponse = await client.post("https://httpbin.org/post");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

test("should send a PUT request", async () => {
	const response: IResponse = await client.put("https://httpbin.org/put");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

test("should send a PATCH request", async () => {
	const response: IResponse = await client.patch("https://httpbin.org/patch");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

test("should send a HEAD request", async () => {
	const response: IResponse = await client.head("https://httpbin.org/get");

	expect(response.getStatusCode()).toBe(200);
});

test("should send a DELETE request", async () => {
	const response: IResponse = await client.delete("https://httpbin.org/delete");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

test("should send a OPTIONS request", async () => {
	const response: IResponse = await client.options("https://httpbin.org/options");

	expect(response.getStatusCode()).toBe(200);
	expect(response.getRawBody()).not.toBeEmpty();
	expect(response.getBody()).toBeObject();
});

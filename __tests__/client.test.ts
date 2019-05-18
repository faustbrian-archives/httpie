import { IClient } from "../src/client";
import { Client } from "../src/got/client";
import { IResponse } from "../src/response";

const client: IClient = new Client();

test("get", async () => {
	const response: IResponse = await client.get("https://httpbin.org/get");

	expect(response.getStatusCode()).toBe(200);
});

test("post", async () => {
	const response: IResponse = await client.post("https://httpbin.org/post");

	expect(response.getStatusCode()).toBe(200);
});

test("put", async () => {
	const response: IResponse = await client.put("https://httpbin.org/put");

	expect(response.getStatusCode()).toBe(200);
});

test("patch", async () => {
	const response: IResponse = await client.patch("https://httpbin.org/patch");

	expect(response.getStatusCode()).toBe(200);
});

test("head", async () => {
	const response: IResponse = await client.head("https://httpbin.org/get");

	expect(response.getStatusCode()).toBe(200);
});

test("delete", async () => {
	const response: IResponse = await client.delete("https://httpbin.org/delete");

	expect(response.getStatusCode()).toBe(200);
});

test("get (error)", async () => {
	const response: IResponse = await client.get("https://httpbin.org/status/400");

	expect(response.getStatusCode()).toBe(400);
	expect(response.getStatusMessage()).toBe("BAD REQUEST");
});

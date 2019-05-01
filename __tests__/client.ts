// tslint:disable: max-classes-per-file

import got from "got";
import { URL } from "url";
import { IClient, IRequest, IResponse } from "../src";
import { RequestOptions } from "../src/types";

class GotchaRequest implements IRequest {
	public static create(method: string, url: string, options: RequestOptions) {
		return new GotchaRequest()
			.withMethod(method)
			.withUrl(new URL(url))
			.withOptions(options);
	}

	private method: string | undefined = undefined;
	private url: URL | undefined = undefined;
	private options: RequestOptions | undefined = undefined;

	public getMethod(): string | undefined {
		return this.method;
	}

	public withMethod(method: string): IRequest {
		this.method = method;

		return this;
	}

	public getUrl(): URL | undefined {
		return this.url;
	}

	public withUrl(url: URL): IRequest {
		this.url = url;

		return this;
	}

	public getOptions(): RequestOptions | undefined {
		return this.options;
	}

	public withOptions(options: RequestOptions): IRequest {
		this.options = options;

		return this;
	}
}

class GotchaResponse implements IResponse {
	private body: string | undefined = undefined;
	private statusCode: number | undefined = undefined;
	private statusReason: string | undefined = undefined;
	private headers: Record<string, string | number> | undefined = undefined;

	public getHeaders(): Record<string, string | number> | undefined {
		return this.headers;
	}

	public withHeaders(headers: Record<string, string | number>): IResponse {
		this.headers = headers;

		return this;
	}

	public getHeader(name: string): string | number | undefined {
		return this.headers ? this.headers[name] : undefined;
	}

	public hasHeader(name: string): boolean {
		return this.getHeader(name) ? true : false;
	}

	public getRawBody(): string | undefined {
		return this.body;
	}

	public getBody<T = object>(): T | undefined {
		return this.body ? JSON.parse(this.body) : undefined;
	}

	public withBody(body: string): IResponse {
		this.body = body;

		return this;
	}

	public getStatusCode(): number | undefined {
		return this.statusCode;
	}

	public getReasonPhrase(): string | undefined {
		return this.statusReason;
	}

	public withStatus(code: number, reasonPhrase?: string): IResponse {
		this.statusCode = code;
		this.statusReason = reasonPhrase;

		return this;
	}
}

export class Gotcha implements IClient {
	public async get(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("get", url, options));
	}

	public async post(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("post", url, options));
	}

	public async put(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("put", url, options));
	}

	public async patch(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("patch", url, options));
	}

	public async head(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("head", url, options));
	}

	public async delete(url: string, options: RequestOptions = {}): Promise<IResponse> {
		return this.sendRequest(GotchaRequest.create("delete", url, options));
	}

	public async sendRequest(request: IRequest): Promise<IResponse> {
		// @ts-ignore
		const { body, headers, statusCode } = await got[request.getMethod()](request.getUrl(), request.getOptions());

		return new GotchaResponse()
			.withStatus(statusCode)
			.withHeaders(headers)
			.withBody(body);
	}
}

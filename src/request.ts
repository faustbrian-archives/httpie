import { URL } from "url";
import { RequestOptions } from "./types";

export interface IRequest {
	/**
	 * Retrieves the HTTP method of the request.
	 */
	getMethod(): string | undefined;

	/**
	 * Return an instance with the provided HTTP method.
	 */
	withMethod(method: string): IRequest;

	/**
	 * Retrieves the URL instance.
	 */
	getUrl(): URL | undefined;

	/**
	 * Returns an instance with the provided URL.
	 */
	withUrl(url: URL): IRequest;

	/**
	 * Retrieves the options of the request.
	 */
	getOptions(): RequestOptions | undefined;

	/**
	 * Returns an instance with the provided options.
	 */
	withOptions(options: RequestOptions): IRequest;
}

export interface IRequestError extends Error {
	/**
	 * Returns the request.
	 */
	getRequest(): IRequest;
}

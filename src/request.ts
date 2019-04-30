import { URL, URLSearchParams } from "url";

export interface IRequest {
	/**
	 * Retrieves the HTTP method of the request.
	 */
	getMethod(): string;

	/**
	 * Return an instance with the provided HTTP method.
	 */
	withMethod(method: string): IRequest;

	/**
	 * Retrieves the URL instance.
	 */
	getUri(): string;

	/**
	 * Returns an instance with the provided URL.
	 */
	withUri(uri: URL): IRequest;

	/**
	 * Retrieves the URL query.
	 */
	getQuery(): URLSearchParams;

	/**
	 * Returns an instance with the provided URL query.
	 */
	withQuery(query: URLSearchParams): IRequest;
}

export interface IRequestError extends Error {
	/**
	 * Returns the request.
	 */
	getRequest(): IRequest;
}

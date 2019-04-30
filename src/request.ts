import { URL } from "url";

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
	 * Retrieves the URI instance.
	 */
	getUri(): string;

	/**
	 * Returns an instance with the provided URI.
	 */
	withUri(uri: URL): IRequest;
}

export interface IRequestError extends Error {
	/**
	 * Returns the request.
	 */
	getRequest(): IRequest;
}

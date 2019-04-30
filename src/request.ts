import { URL } from "url";

export interface IRequest {
	/**
	 * Retrieves the HTTP method of the request.
	 */
	getMethod();

	/**
	 * Return an instance with the provided HTTP method.
	 */
	withMethod(method: string);

	/**
	 * Retrieves the URI instance.
	 */
	getUri();

	/**
	 * Returns an instance with the provided URI.
	 */
	withUri(uri: URL);
}

export interface IRequestError extends Error {
	/**
	 * Returns the request.
	 */
	getRequest(): IRequest;
}

export interface IResponse {
	/**
	 * Retrieves all message header values.
	 */
	getHeaders(): Record<string, string | number> | undefined;

	/**
	 * Return an instance with the provided value replacing the specified header.
	 */
	withHeaders(headers: Record<string, string | number>): IResponse;

	/**
	 * Retrieves a message header value by the given case-insensitive name.
	 */
	getHeader(name: string): string | number | undefined;

	/**
	 * Checks if a header exists by the given case-insensitive name.
	 */
	hasHeader(name: string): boolean;

	/**
	 * Gets the raw body of the message.
	 */
	getRawBody(): string | undefined;

	/**
	 * Gets the body of the message.
	 */
	getBody<T = object>(): T | undefined;

	/**
	 * Return an instance with the specified message body.
	 */
	withBody(body: string): IResponse;

	/**
	 * Gets the response status code.
	 */
	getStatusCode(): number | undefined;

	/**
	 * Gets the response reason phrase associated with the status code.
	 */
	getReasonPhrase(): string | undefined;

	/**
	 * Return an instance with the specified status code and, optionally, reason phrase.
	 */
	withStatus(code: number, reasonPhrase?: string): IResponse;
}

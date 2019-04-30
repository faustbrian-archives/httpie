export interface IResponse {
	/**
	 * Retrieves the HTTP protocol version as a string.
	 */
	getProtocolVersion(): string;

	/**
	 * Retrieves all message header values.
	 */
	getHeaders(): Record<string, any>;

	/**
	 * Checks if a header exists by the given case-insensitive name.
	 */
	hasHeader(name: string): boolean;

	/**
	 * Retrieves a message header value by the given case-insensitive name.
	 */
	getHeader<T>(name: string): T;

	/**
	 * Gets the body of the message.
	 */
	getBody(): string;

	/**
	 * Gets the response status code.
	 */
	getStatusCode(): number;

	/**
	 * Gets the response reason phrase associated with the status code.
	 */
	getReasonPhrase(): string;
}

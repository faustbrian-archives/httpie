export interface IResponse {
	/**
	 * Retrieves the HTTP protocol version as a string.
	 */
	getProtocolVersion();

	/**
	 * Retrieves all message header values.
	 */
	getHeaders();

	/**
	 * Checks if a header exists by the given case-insensitive name.
	 */
	hasHeader(name: string);

	/**
	 * Retrieves a message header value by the given case-insensitive name.
	 */
	getHeader(name: string);

	/**
	 * Retrieves a comma-separated string of the values for a single header.
	 */
	getHeaderLine(name: string);

	/**
	 * Gets the body of the message.
	 */
	getBody();

	/**
	 * Gets the response status code.
	 */
	getStatusCode();

	/**
	 * Gets the response reason phrase associated with the status code.
	 */
	getReasonPhrase();
}

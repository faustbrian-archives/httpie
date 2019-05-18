import { Primitive } from "type-fest";

export interface IResponse {
	/**
	 * Gets the body of the message.
	 */
	getBody(): string | undefined;

	/**
	 * Gets the response status code.
	 */
	getStatusCode(): number | undefined;

	/**
	 * Gets the response status message associated with the status code.
	 */
	getStatusMessage(): string | undefined;

	/**
	 * Retrieves all message header values.
	 */
	getHeaders(): Record<string, Primitive>;

	/**
	 * Retrieves a message header value by the given case-insensitive name.
	 */
	getHeader(name: string): Primitive | undefined;
}

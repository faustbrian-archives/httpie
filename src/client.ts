import { IRequest } from "./request";
import { IResponse } from "./response";
import { RequestOptions } from "./types";

export interface IClient {
	/**
	 * Sends a GET request and returns a response.
	 */
	get(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a POST request and returns a response.
	 */
	post(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a PUT request and returns a response.
	 */
	put(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a PATCH request and returns a response.
	 */
	patch(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a HEAD request and returns a response.
	 */
	head(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a DELETE request and returns a response.
	 */
	delete(url: string, options?: RequestOptions): Promise<IResponse>;

	/**
	 * Sends a request and returns a response.
	 */
	sendRequest(request: IRequest): Promise<IResponse>;
}

import { IRequest } from "./request";
import { IResponse } from "./response";

export interface IClient {
	/**
	 * Sends a request and returns a response.
	 */
	sendRequest(request: IRequest): IResponse;
}

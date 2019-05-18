import { IRequest } from "./request";

export interface IRequestError {
	/**
	 * Returns the request.
	 */
	getRequest(): IRequest;
}

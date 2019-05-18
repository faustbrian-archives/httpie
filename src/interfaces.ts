import { Primitive } from "type-fest";

export interface IResponseAttributes {
	body: string;
	statusCode: number;
	statusMessage?: string;
	headers: Record<string, Primitive>;
}

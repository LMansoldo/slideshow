export type JsonUnknown = unknown;

export type ApiSuccessResponse<T> = {
	success: true;
	data: T;
};

export type ApiErrorResponse = {
	success: false;
	error: string;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface State {
	data: any;
	error: string | null;
}


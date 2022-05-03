enum ErrorCodes {
	//* Error client code
	'client/error-register' = 'client/error-register',

	//* Error server code
	'server/internal-error' = 'server/internal-error',
	'server/error-not-registered' = 'server/error-not-registered',
}

type ErrorResponse = {
	[key in ErrorCodes]: {
		code: ErrorCodes;
		message: string;
	};
};

export const errorResponses: ErrorResponse = {
	//* Client error response
	['client/error-register']: {
		code: ErrorCodes['client/error-register'],
		message: 'error registering client',
	},

	//* Server error response
	['server/internal-error']: {
		code: ErrorCodes['server/internal-error'],
		message: 'Something was wrong - talk to the admin',
	},
	['server/error-not-registered']: {
		code: ErrorCodes['server/error-not-registered'],
		message: 'Something was wrong - unidentified error type',
	},
};

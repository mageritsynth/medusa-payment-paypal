export declare class PermanentStepFailureError extends Error {
    static isPermanentStepFailureError(error: Error): error is PermanentStepFailureError;
    constructor(message?: string);
}
export declare class TransactionStepTimeoutError extends Error {
    static isTransactionStepTimeoutError(error: Error): error is TransactionStepTimeoutError;
    constructor(message?: string);
}
export declare class TransactionTimeoutError extends Error {
    static isTransactionTimeoutError(error: Error): error is TransactionTimeoutError;
    constructor(message?: string);
}

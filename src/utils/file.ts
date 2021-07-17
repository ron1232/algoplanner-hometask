/**
 * 
 * File Interface
 */
export interface File {
    mime: string;
    size: number;
    created: string;
    name: string;
    length?: number;
    height?: number;
    width?: number;
    pages?: number;
}
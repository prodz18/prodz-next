/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: any[]) {
	return twMerge(clsx(inputs));
}
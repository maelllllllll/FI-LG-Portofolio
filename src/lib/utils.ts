import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Concatène des classes CSS en laissant la dernière l'emporter lorsqu'elles
 * se contredisent (`px-2 px-4` donne `px-4`). Les composants shadcn
 * l'attendent sous ce nom.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

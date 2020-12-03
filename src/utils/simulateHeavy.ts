/**
 * Performs inefficient fibbonacci calculation to simulate heavy load.
 * @param load 
 */
export const simulateHeavy = (load: number): number => {
	if (load <= 2) return load
	return simulateHeavy(load - 1) + simulateHeavy(load - 2)
}
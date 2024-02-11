export function toHashString(
    distance: number,
    fuelUsed: number,
    refuelingDate: string,
) {
    const string = `${distance}-${fuelUsed}-${refuelingDate}`;
    const binaryString = new TextEncoder().encode(string);
    return btoa(String.fromCodePoint(...binaryString));
}

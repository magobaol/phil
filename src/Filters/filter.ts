export interface Filter {
    (text: string): string;
    filterName: string;
}
export interface Person {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}
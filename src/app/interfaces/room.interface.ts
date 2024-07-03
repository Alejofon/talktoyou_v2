export interface Room {
    id: string;
    capacity: number;
    busy: number;
    id_participants: number[];
    language: string;
    level: string;
    start: Date;
}
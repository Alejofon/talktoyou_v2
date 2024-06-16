export interface room {
    id: number,
    capacity: number,
    busy: number,
    id_participants: number[],
    languague: string,
    level: string,
    start: Date,
    end?: Date
}
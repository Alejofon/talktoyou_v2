import { Time } from "@angular/common"

export interface room {
    id: number,
    capacity: number,
    id_participants: number[],
    languague: string,
    level: string,
    start: Date,
    end?: Date
}
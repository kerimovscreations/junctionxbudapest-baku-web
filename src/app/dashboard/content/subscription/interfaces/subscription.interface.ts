import { Event } from '../enums/event.enum';

export interface Subscription {
    id: String
    event: Event
    phone: String
}
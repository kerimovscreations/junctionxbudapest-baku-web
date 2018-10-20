import { Advertisement } from '../../ads/interfaces/advertisement.interface';
import { User } from './user.interface';

export interface Statistics {
    ads: Advertisement
    count: number
    users: [User]
}
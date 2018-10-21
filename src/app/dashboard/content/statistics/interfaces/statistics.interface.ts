import { Advertisement } from '../../ads/interfaces/advertisement.interface';
import { User } from './user.interface';

export interface Statistics {
    id: String
    ads: Advertisement
    users: [User]
}
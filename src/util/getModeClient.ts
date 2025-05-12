import { useLocation } from 'react-router-dom';

export const pathByClient = {
  people: '/portal-personas',
  business: '/portal-business',
}

export const getModeClient = (location: string) => {
  return location.includes('/portal-personas') ? 'people' : 'business';
}
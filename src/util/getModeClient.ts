import { useLocation } from 'react-router-dom';

export const pathByClient = {
  people: '/portal-personas',
  business: '/portal-empresas',
}

export const getModeClient = (location: string) => {
  return location.includes('/portal-personas') ? 'people' : 'business';
}
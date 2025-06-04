// Este helper está exclusivamente para manejar las rutas respectivas
// dependiendo el tipo de cliente.

export const pathByClient = {
  people: '/portal-personas',
  business: '/portal-empresas',
}

export const getModeClient = (location: string) => {
  return location.includes('/portal-personas') ? 'people' : 'business';
}

export const getPathByClient = (location: string) => {
  return location.includes('/portal-personas') ? pathByClient.people : pathByClient.business;
}
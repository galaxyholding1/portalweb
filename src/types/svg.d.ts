// Este modulo se crea con el objetivo de trabajar con los vectores facilmente
// Asi podemos manipular los iconos en tamaños, colores, estados, etc.
// Cuando se importa un svg tiene que agregarse el '?react' al final
declare module '*.svg?react' { 
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent; // Por ello se exporta como un componente de react
}
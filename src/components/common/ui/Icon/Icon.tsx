import React from 'react';
import { useTheme } from '../../../../store/theme-store';

// Importa todos los íconos SVG como módulos usando Vite
const icons = import.meta.glob('../../../../assets/icons/*.svg', { eager: true });

type IconName = 'money' | 'moving_desk' | 'cents';

interface IconProps {
  name: IconName;
  selected?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, selected = false }) => {
  const {theme} = useTheme();

  const iconName = name + (theme === 'dark' ? '_dark' : '') + (selected ? '-selected' : '');
  const iconPath = icons[`../../../../assets/icons/${iconName}.svg`] as { default: string } | undefined;

  if (!iconPath) {

    // Se busca el tema contrario y mismo select
    let newIconName = name + (theme === 'light' ? '_dark' : '') + (selected ? '-selected' : '');
    let newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as { default: string } | undefined;
    if( newIconPath ) return <img src={newIconPath.default} alt={name} />;
    
    // Se busca el tema contrario y diferente select
    newIconName = name + (theme === 'light' ? '_dark' : '') + (!selected ? '-selected' : '');
    newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as { default: string } | undefined;
    
    if( newIconPath ) return <img src={newIconPath.default} alt={name} />;
    
    // Se busca el mismo tema y diferente select
    newIconName = name + (theme === 'dark' ? '_dark' : '') + (!selected ? '-selected' : '');
    newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as { default: string } | undefined;

    if( newIconPath ) return <img src={newIconPath.default} alt={name} />;

    
    throw new Error(`Se está usando un icono que no existe: ${name}`);
  }

  return <img src={iconPath.default} alt={name} />;
};

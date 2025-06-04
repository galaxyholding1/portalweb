// Importa los estilos específicos de este componente
import './RemittanceFilters.css'

// Importa la lista de remesas, probablemente con filtros o resultados
import { RemittanceList } from '../../../components/common/home/Remittances/RemittanceList/RemittanceList'

// Importa el componente informativo sobre remesas, con tarjetas visuales de opciones
import { RemittanceInformation } from '../../../components/common/Remittance/RemittanceInformation/RemittanceInformation'

// Componente principal que representa la vista de filtros y opciones de envío de remesas
export const RemittanceFilters = () => {
  return (
    // Contenedor general de la página
    <div className='page-container'>
      {/* Contenedor con grid para mostrar filtros y opciones en paralelo */}
      <div className="remittance-filters-container">
        {/* Lista de remesas con opciones filtrables */}
        <RemittanceList/>

        {/* Información visual sobre métodos para enviar dinero */}
        <RemittanceInformation/>
      </div>
    </div>
  )
}

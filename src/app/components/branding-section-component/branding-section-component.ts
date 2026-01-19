import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TabName = 'logo' | 'completo' | 'fotografia';

interface Tab {
  id: TabName;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-branding-section',
  imports: [CommonModule],
  templateUrl: './branding-section-component.html',
  styleUrl: './branding-section-component.css',
})

export class BrandingSectionComponent {
  activeTab: TabName = 'logo';

  tabs: Tab[] = [
    { id: 'logo', label: 'Logotipo', icon: 'fas fa-pen-nib' },
    { id: 'completo', label: 'Plan Completo', icon: 'fas fa-star' },
    { id: 'fotografia', label: 'Fotografía', icon: 'fas fa-camera' }
  ];

  logoFeatures: string[] = [
    '1 propuesta base de logo + 2 ajustes',
    'Variantes del logo',
    'Paleta de color básica (2 colores principales + 2 secundarios)',
    'Tipografía principal y secundaria con jerarquía básica',
    'Mini manual de marca (4 a 7 páginas en PDF)',
    'Guía de uso'
  ];

  completoFeaturesCol1: string[] = [
    'Investigación visual y conceptual',
    '2 propuestas iniciales de logo + revisiones',
    'Paleta de color extendida',
    'Sistema tipográfico completo',
    'Patrones o texturas complementarias'
  ];

  completoFeaturesCol2: string[] = [
    'Aplicaciones gráficas completas',
    'Firma de correo personalizada',
    'Membretes y tarjeta de presentación',
    'Manual de marca completo (8 a 12 páginas)',
    'Guía de uso detallada'
  ];

  fotografiaFeatures: string[] = [
    'Dirección de arte y concepto visual',
    'Fotografías editadas en alta calidad',
    'Retoque de color y ajustes de imagen',
    'Entrega digital optimizada para redes sociales y web',
    'Uso en catálogos, e-commerce y piezas publicitarias'
  ];

  showTab(tabName: TabName): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: TabName): boolean {
    return this.activeTab === tabName;
  }

  onSolicitarCotizacion(): void {
    // Aquí puedes implementar la lógica para solicitar cotización
    console.log('Solicitar cotización para:', this.activeTab);
    // Ejemplo: abrir modal, navegar a formulario, etc.
  }
}

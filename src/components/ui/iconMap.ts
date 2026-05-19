import {
  Shield,
  TrendingUp,
  DollarSign,
  Users,
  Wallet,
  LineChart,
  CreditCard,
  LucideIcon,
} from 'lucide-react';

/**
 * Mapeamento de nomes de ícones para componentes Lucide
 */
export const iconMap: Record<string, LucideIcon> = {
  Shield,
  TrendingUp,
  DollarSign,
  Users,
  Wallet,
  LineChart,
  CreditCard,
};

/**
 * Função para obter um ícone pelo nome
 * @param name - Nome do ícone (deve corresponder ao nome no theme.json)
 * @returns Componente LucideIcon ou Shield como fallback
 */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Shield;
}


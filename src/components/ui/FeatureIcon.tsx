import {
  Battery,
  ShieldCheck,
  TrendingUp,
  Activity,
  Wrench,
  Sun,
  Bell,
  Clock,
  CheckCircle,
  BarChart2,
  AlertTriangle,
  Zap,
} from 'lucide-react';

const MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'battery-charging': Battery,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
  'activity': Activity,
  'wrench': Wrench,
  'sun': Sun,
  'bell': Bell,
  'clock': Clock,
  'check': CheckCircle,
  'chart': BarChart2,
  'alert': AlertTriangle,
  'zap': Zap,
};

export default function FeatureIcon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = MAP[name] ?? Zap;
  return <Icon size={size} className={className} />;
}

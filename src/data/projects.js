import {
  Bitcoin,
  Settings,
  Beaker,
  GraduationCap,
  Users,
  PieChart,
  CheckSquare,
  Globe
} from 'lucide-react';

export const projects = [
  {
    id: 'lucid-wealth',
    name: 'Lucid Wealth',
    description: 'Dashboard Financier Premium',
    url: 'https://financedash-ochre.vercel.app/login',
    icon: Bitcoin,
    theme: {
      primary: '#f59e0b', // Bitcoin Orange/Amber
      secondary: '#b45309',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', // Gold/Orange gradient
      shadow: 'rgba(245, 158, 11, 0.5)'
    }
  },
  {
    id: 'linxea',
    name: 'Linxea',
    description: 'Suivi des Investissements',
    url: 'https://espaceclient.linxea.com/authentification',
    icon: PieChart,
    theme: {
      primary: '#10b981', // Moved Emerald to Linxea
      secondary: '#047857',
      gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      shadow: 'rgba(16, 185, 129, 0.4)'
    }
  },
  {
    id: 'lucid-admin',
    name: 'Lucid Admin',
    description: 'Panel d\'Administration Central',
    url: 'https://dashboard-lucid3.vercel.app',
    icon: Settings,
    theme: {
      primary: '#3b82f6', // Blue
      secondary: '#1d4ed8',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      shadow: 'rgba(59, 130, 246, 0.4)'
    }
  },
  {
    id: 'lucid-labs',
    name: 'Lucid Labs',
    description: 'Laboratoire & Innovations',
    url: '#',
    icon: Beaker,
    theme: {
      primary: '#0ea5e9', // Sky
      secondary: '#0369a1',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
      shadow: 'rgba(14, 165, 233, 0.4)'
    }
  },
  {
    id: 'lucid-prof',
    name: 'Lucid Prof',
    description: 'Espace Professionnel',
    url: 'https://lucid-prof.vercel.app',
    icon: GraduationCap,
    theme: {
      primary: '#8b5cf6', // Changed Amber to Violet to avoid clash with Finora
      secondary: '#6d28d9',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      shadow: 'rgba(139, 92, 246, 0.4)'
    }
  },
  {
    id: 'lucarnepro',
    name: 'Lucarnepro',
    description: 'Site de l\'Association',
    url: 'https://lucarnepro.fr',
    icon: Users,
    theme: {
      primary: '#ec4899', // Pink
      secondary: '#be185d',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      shadow: 'rgba(236, 72, 153, 0.4)'
    }
  },
  {
    id: 'lucid-checklist',
    name: 'Lucid Checklist',
    description: 'Outil de Checklists',
    url: 'https://checklist.lucarnepro.fr',
    icon: CheckSquare,
    theme: {
      primary: '#ef4444', // Red
      secondary: '#b91c1c',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
      shadow: 'rgba(239, 68, 68, 0.4)'
    }
  },
  {
    id: 'lucid-official',
    name: 'Lucid Official',
    description: 'Site Officiel Lucid',
    url: 'https://lucid-nu-seven.vercel.app',
    icon: Globe,
    theme: {
      primary: '#ffffff', // White/Silver for a clean "Official" look
      secondary: '#94a3b8',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)',
      shadow: 'rgba(255, 255, 255, 0.2)'
    }
  }
];

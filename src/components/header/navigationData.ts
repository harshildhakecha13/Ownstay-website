export const navigationConfig = {
  product: {
    featured: [
      {
        title: 'Ownstay Hotel Platform',
        description: 'One intelligent platform to manage your hotel\'s daily operations.',
        visual: 'platform',
        href: '/product/ownstay-platform'
      },
      {
        title: 'Ownstay AI',
        description: 'Intelligent guest communication and automation for modern hotels.',
        visual: 'ai',
        href: '/product/ownstay-ai-receptionist'
      }
    ],
    categories: {
      hotops: {
        title: 'HOTEL OPERATIONS',
        items: [
          { label: 'Reservations', href: '/product/booking-assistance', description: 'Manage hotel reservations and booking activity.' },
          { label: 'Guests', href: '/product/guest-messaging', description: 'Manage guest profiles, stays and guest information.' },
          { label: 'Rooms', href: '/product/in-stay-support', description: 'Manage rooms, room types, rates and room status.' },
          { label: 'Housekeeping', href: '/product/guest-request-management', description: 'Manage room cleaning, housekeeping status and operations.' },
          { label: 'Maintenance', href: '/product/ai-operations', description: 'Track maintenance issues and operational tasks.' }
        ]
      },
      teams: {
        title: 'HOTEL TEAMS',
        items: [
          { label: 'Staff', href: '/product/ai-operations', description: 'Manage staff, departments, roles and permissions.' },
          { label: 'Guest Services', href: '/product/guest-request-management', description: 'Manage guest requests, messages and service communication.' },
          { label: 'Kitchen & Supplies', href: '/product/in-stay-support', description: 'Manage kitchen orders, KDS, stations, menu and stock.' },
          { label: 'Inventory', href: '/product/hotel-knowledge-ai', description: 'Manage hotel and operational inventory.' }
        ]
      },
      intelligence: {
        title: 'INTELLIGENCE & CONTROL',
        items: [
          { label: 'Analytics & Reports', href: '/product/conversation-management', description: 'Monitor hotel performance and operational reports.' },
          { label: 'AI Insights', href: '/product/hotel-knowledge-ai', description: 'Get intelligent insights into hotel operations.' },
          { label: 'Security & Access', href: '/product/ownstay-platform', description: 'Manage security, audit logs and system settings.' }
        ]
      }
    }
  },
  solutions: [
    {
      title: 'FOR HOTEL LEADERS',
      items: [
        { label: 'Hotel Owners', href: '/product/ownstay-platform', description: 'Get visibility and control across your property.' },
        { label: 'General Managers', href: '/product/ai-operations', description: 'Manage hotel operations, teams and performance from one place.' },
      ]
    },
    {
      title: 'FOR HOTEL TEAMS',
      items: [
        { label: 'Managers', href: '/product/ai-operations', description: 'Coordinate daily hotel operations and team performance.' },
        { label: 'Receptionists', href: '/product/ai-receptionist', description: 'Simplify check-ins, check-outs, reservations and guest service.' },
        { label: 'Housekeeping Teams', href: '/product/guest-request-management', description: 'Keep rooms clean, updated and ready for guests.' },
        { label: 'Kitchen Teams', href: '/product/in-stay-support', description: 'Manage orders, stations, menu availability and kitchen operations.' },
      ]
    },
    {
      title: 'HOTEL TYPES',
      items: [
        { label: 'Boutique Hotels', href: '/product/ownstay-ai-receptionist', description: 'Perfect for personalized boutique experiences.' },
        { label: 'Independent Hotels', href: '/product/ownstay-platform', description: 'Comprehensive solution for independent properties.' },
        { label: 'Hotel Groups', href: '/product/ai-operations', description: 'Scale across multiple properties efficiently.' },
        { label: 'Resorts', href: '/product/multilingual-ai', description: 'Handle international guests seamlessly.' },
      ]
    }
  ],
  resources: [
    {
      title: 'LEARN',
      items: [
        { label: 'Blog', href: '/blog', description: 'Hotel technology, AI and hospitality insights.' },
        { label: 'Guides', href: '/docs', description: 'Practical resources for modern hotel operations.' },
        { label: 'Case Studies', href: '/case-studies', description: 'See how hotels use Ownstay.' }
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        { label: 'Help Center', href: '/docs', description: 'Find answers and product guidance.' },
        { label: 'Documentation', href: '/docs', description: 'Technical and product documentation.' },
        { label: 'FAQs', href: '/docs', description: 'Frequently asked questions.' }
      ]
    },
    {
      title: 'COMPANY',
      items: [
        { label: 'About Ownstay', href: '/about', description: 'Learn about Ownstay and Ownthum AI.' },
        { label: 'Contact', href: '/contact', description: 'Talk to the Ownstay team.' },
        { label: 'Careers', href: '/careers', description: 'Join the team.' }
      ]
    }
  ]
};

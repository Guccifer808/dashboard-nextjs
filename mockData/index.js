// Customers data
export const mockData = [
  {
    id: 1,
    name: {
      first: "David",
      last: "Broski",
    },
    email: "david.broski@example.com",
    total: 955.0,
    status: "Completed",
    method: "Payoneer",
    date: "3 Minutes ago",
  },
  {
    id: 2,
    name: {
      first: "Maggie",
      last: "Nguyen",
    },
    email: "maggie.nguyen@example.com",
    total: 2450.5,
    status: "Pending",
    method: "Credit Card",
    date: "1 Hour ago",
  },

  {
    id: 3,
    name: {
      first: "Gabriel",
      last: "Gonzalez",
    },
    email: "gabriel.gonzalez@example.com",
    total: 1075.95,
    status: "Completed",
    method: "PayPal",
    date: "5 Minutes ago",
  },

  {
    id: 4,
    name: {
      first: "Samantha",
      last: "Lee",
    },
    email: "samantha.lee@example.com",
    total: 640.0,
    status: "Refunded",
    method: "Bank Transfer",
    date: "1 Day ago",
  },

  {
    id: 5,
    name: {
      first: "Daniel",
      last: "Chen",
    },
    email: "daniel.chen@example.com",
    total: 455.25,
    status: "Completed",
    method: "Stripe",
    date: "10 Minutes ago",
  },

  {
    id: 6,
    name: {
      first: "Avery",
      last: "Williams",
    },
    email: "avery.williams@example.com",
    total: 435.99,
    status: "Pending",
    method: "PayPal",
    date: "1 Hour ago",
  },

  {
    id: 7,
    name: {
      first: "Oliver",
      last: "Martinez",
    },
    email: "oliver.martinez@example.com",
    total: 1220.0,
    status: "Completed",
    method: "Credit Card",
    date: "15 Minutes ago",
  },

  {
    id: 8,
    name: {
      first: "Sophia",
      last: "Garcia",
    },
    email: "sophia.garcia@example.com",
    total: 575.0,
    status: "Failed",
    method: "Payoneer",
    date: "2 Hours ago",
  },

  {
    id: 9,
    name: {
      first: "Jacob",
      last: "Liu",
    },
    email: "jacob.liu@example.com",
    total: 880.75,
    status: "Completed",
    method: "Bank Transfer",
    date: "30 Minutes ago",
  },

  {
    id: 10,
    name: {
      first: "Isabella",
      last: "Wong",
    },
    email: "isabella.wong@example.com",
    total: 135.5,
    status: "Refunded",
    method: "Stripe",
    date: "2 Days ago",
  },
];
// Kanban board
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Backend design",
          description: "MongoDB patterns",
        },
        {
          id: 2,
          title: "Frontend design",
          description: "Clean design configuration",
        },
      ],
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        },
      ],
    },
    {
      id: 3,
      title: "In Progress",
      cards: [
        {
          id: 10,
          title: "Zustand",
          description: "Make Zustand store",
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban",
        },
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters",
        },
        {
          id: 13,
          title: "Dashboard page",
          description: "Complete a dashboard page",
        },
      ],
    },
  ],
};

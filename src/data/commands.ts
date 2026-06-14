export interface CommandSection {
  heading: string
  body: string
}

export interface CommandDoc {
  slug: string
  label: string
  title: string
  icon: `tabler--${string}`
  summary: string
  syntax: string
  permissions: string
  sections: CommandSection[]
}

export const commands: CommandDoc[] = [
  {
    slug: 'near-me',
    label: '/near-me',
    title: 'Near Me',
    icon: 'tabler--radar',
    summary: 'Find the saved coordinates closest to a position.',
    syntax: '/near-me',
    permissions: 'Fill in who can use this command.',
    sections: [
      {
        heading: 'What It Does',
        body: 'Fill in how Nauta calculates and returns nearby saved coordinates.'
      },
      {
        heading: 'When To Use It',
        body: 'Fill in the common server situations where this command is useful.'
      },
      {
        heading: 'Example',
        body: 'Fill in an example command and the kind of response users should expect.'
      }
    ]
  },
  {
    slug: 'register',
    label: '/register',
    title: 'Register',
    icon: 'tabler--map-pin-plus',
    summary: 'Save a new coordinate so the server can find it later.',
    syntax: '/register',
    permissions: 'Fill in who can register new coordinates.',
    sections: [
      {
        heading: 'What It Does',
        body: 'Fill in the coordinate fields Nauta stores, such as name, alias, dimension, and location.'
      },
      {
        heading: 'When To Use It',
        body: 'Fill in examples like bases, farms, portals, meeting points, or other Minecraft locations.'
      },
      {
        heading: 'Example',
        body: 'Fill in an example registration and the confirmation message users should see.'
      }
    ]
  },
  {
    slug: 'delete',
    label: '/delete',
    title: 'Delete',
    icon: 'tabler--trash',
    summary: 'Remove saved coordinate data when it is no longer needed.',
    syntax: '/delete',
    permissions: 'Fill in who can delete coordinates.',
    sections: [
      {
        heading: 'What It Does',
        body: 'Fill in how users select a coordinate for deletion and whether the action needs confirmation.'
      },
      {
        heading: 'When To Use It',
        body: 'Fill in examples like outdated locations, duplicated entries, or server cleanup.'
      },
      {
        heading: 'Example',
        body: 'Fill in an example delete command and the response users should expect.'
      }
    ]
  },
  {
    slug: 'list',
    label: '/list',
    title: 'List',
    icon: 'tabler--list-search',
    summary: 'Browse the coordinates saved for a Discord server.',
    syntax: '/list',
    permissions: 'Fill in who can list saved coordinates.',
    sections: [
      {
        heading: 'What It Does',
        body: 'Fill in how Nauta displays saved coordinates and whether users can filter or paginate them.'
      },
      {
        heading: 'When To Use It',
        body: 'Fill in the common use cases for quickly reviewing stored server locations.'
      },
      {
        heading: 'Example',
        body: 'Fill in an example list command and the output format users should expect.'
      }
    ]
  }
]

export const getCommandBySlug = (slug: string) =>
  commands.find((command) => command.slug === slug)

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  applicationsExample: [
    {
      name: 'App 1',
      url: 'https://app1.example.com',
      icon: 'dashboard', // Opcional: para mostrar un ícono
      description: 'Descripción de la App 1'
    },
    {
      name: 'App 2',
      url: 'https://app2.example.com',
      icon: 'settings',
      description: 'Descripción de la App 2'
    },
    {
      name: 'App 3',
      url: 'https://app1.example.com',
      icon: 'dashboard', // Opcional: para mostrar un ícono
      description: 'Descripción de la App 1'
    },
    {
      name: 'App 4',
      url: 'https://app1.example.com',
      icon: 'dashboard', // Opcional: para mostrar un ícono
      description: 'Descripción de la App 1'
    },
    {
      name: 'App 5',
      url: 'https://app1.example.com',
      icon: 'dashboard', // Opcional: para mostrar un ícono
      description: 'Descripción de la App 1'
    },
    {
      name: 'App 6',
      url: 'https://app1.example.com',
      icon: 'dashboard', // Opcional: para mostrar un ícono
      description: 'Descripción de la App 1'
    },
  ],

  applications: "[{\"name\":\"App 1\",\"url\":\"https://app1.example.com\",\"icon\":\"dashboard\",\"description\":\"Descripción de la App 1\"},{\"name\":\"App 2\",\"url\":\"https://app2.example.com\",\"icon\":\"settings\",\"description\":\"Descripción de la App 2\"}]"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import { Request, Response } from 'express';

export const listRoutes = (app: { _router: { stack: any[]; }; }) => (req: Request, res: Response) => {
  const routes: { path: any; methods: string; }[] = [];
  app._router.stack.forEach((middleware: { route: { path: any; methods: {}; }; name: string; handle: { stack: any[]; }; }) => {
    if (middleware.route) { // Routes registered directly on the app
      routes.push({
        path: middleware.route.path,
        methods: Object.keys(middleware.route.methods).join(', ').toUpperCase()
      });
    } else if (middleware.name === 'router') { // Router middleware 
      middleware.handle.stack.forEach((handler: { route: any; }) => {
        const route = handler.route;
        if (route) {
          routes.push({
            path: route.path,
            methods: Object.keys(route.methods).join(', ').toUpperCase()
          });
        }
      });
    }
  });
  res.json(routes);
};

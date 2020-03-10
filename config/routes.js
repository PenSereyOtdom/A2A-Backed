import ServiceContentController from '../src/controllers/ServiceContentController';
import SolutionContentController from '../src/controllers/SolutionContentController';
export default (app) => {

  // Services ROUTES
  app.get(`/api/service`, ServiceContentController.getAll);
  app.get(`/api/service/:id`, ServiceContentController.findById)
  app.post(`/api/service`, ServiceContentController.insert);
  // Solution ROUTES
  app.get(`/api/solution`, SolutionContentController.getAll);
  app.post(`/api/solution`, SolutionContentController.insert);
}
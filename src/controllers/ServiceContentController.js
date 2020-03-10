import Controller from  './Controller';
import Service from  "../models/Service";
import ServiceContentService from  "../services/ServiceContentService";

const serviceContentService = new ServiceContentService(
    new Service().getInstance()
  );

console.log(serviceContentService.model);
  
class ServiceContentController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new ServiceContentController(serviceContentService);
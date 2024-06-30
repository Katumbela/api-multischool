import { Router } from 'express';
import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from '../controllers/companyController';

const companyRoutes = Router();

companyRoutes.get('/companies', getAllCompanies);
companyRoutes.get('/companies/:id', getCompanyById);
companyRoutes.post('/companies', createCompany);
companyRoutes.put('/companies/:id', updateCompany);
companyRoutes.delete('/companies/:id', deleteCompany);

export default companyRoutes;

import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from '../controllers/copmpany.controller'; 
import { Router } from 'express';

const companyRoutes = Router();

companyRoutes.get('/companies', getAllCompanies);
companyRoutes.get('/companies/:id', getCompanyById);
companyRoutes.post('/companies', createCompany);
companyRoutes.put('/companies/:id', updateCompany);
companyRoutes.delete('/companies/:id', deleteCompany);

export default companyRoutes;

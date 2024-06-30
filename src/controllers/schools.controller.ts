import { Request, Response } from 'express';
import { Schools } from '../models/school';

export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const schools = await Schools.findAll();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
};

export const getSchoolById = async (req: Request, res: Response) => {
  try {
    const school = await Schools.findByPk(req.params.id);
    if (school) {
      res.status(200).json(school);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch school' });
  }
};

export const createSchool = async (req: Request, res: Response) => {
  try {
    const school = await Schools.create(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create school' });
  }
};

export const updateSchool = async (req: Request, res: Response) => {
  try {
    const [updated] = await Schools.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSchool = await Schools.findByPk(req.params.id);
      res.status(200).json(updatedSchool);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update school' });
  }
};

export const deleteSchool = async (req: Request, res: Response) => {
  try {
    const deleted = await Schools.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete school' });
  }
};

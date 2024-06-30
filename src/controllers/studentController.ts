import { Request, Response } from 'express';
import { Student } from '../models/student';

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json({ data: students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      attributes: { exclude: ['password'] } // Exclui o campo 'password' da consulta
    });
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};


export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ data: student });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create student' + error.message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const [updated] = await Student.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedStudent = await Student.findByPk(req.params.id);
      res.status(200).json({ data: updatedStudent });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update student' });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const deleted = await Student.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
};

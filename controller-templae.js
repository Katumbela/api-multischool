module.exports = (name) => {
    return `
    import { Request, Response } from 'express';
    import ${name} from '../models/${name}';
  
    export const getAll${name}s = async (req: Request, res: Response) => {
      try {
        const ${name.toLowerCase()}s = await ${name}.findAll();
        res.json(${name.toLowerCase()}s);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };
  
    export const get${name}ById = async (req: Request, res: Response) => {
      const id = req.params.id;
      try {
        const ${name.toLowerCase()} = await ${name}.findByPk(id);
        if (!${name.toLowerCase()}) {
          return res.status(404).json({ message: '${name} not found' });
        }
        res.json(${name.toLowerCase()});
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };
  
    export const create${name} = async (req: Request, res: Response) => {
      const { /* insert attributes here */ } = req.body;
      try {
        const created${name} = await ${name}.create({ /* insert attributes here */ });
        res.status(201).json(created${name});
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };
  
    export const update${name} = async (req: Request, res: Response) => {
      const id = req.params.id;
      const { /* insert attributes here */ } = req.body;
      try {
        const ${name.toLowerCase()} = await ${name}.findByPk(id);
        if (!${name.toLowerCase()}) {
          return res.status(404).json({ message: '${name} not found' });
        }
        await ${name}.update({ /* insert attributes here */ }, { where: { id } });
        res.json({ message: '${name} updated successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };
  
    export const delete${name} = async (req: Request, res: Response) => {
      const id = req.params.id;
      try {
        const ${name.toLowerCase()} = await ${name}.findByPk(id);
        if (!${name.toLowerCase()}) {
          return res.status(404).json({ message: '${name} not found' });
        }
        await ${name}.destroy({ where: { id } });
        res.json({ message: '${name} deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };
    `;
  };
  
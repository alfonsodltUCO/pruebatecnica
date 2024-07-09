import { Request, Response } from "express"
import Nota from '../modelos/nota'


export const getNotas =  async(req: Request,res: Response)=>{
    let listNotas = await Nota.findAll();
    if(listNotas.length>0){
        listNotas = listNotas as typeof Nota.prototype[];
        res.status(200).json({
            listNotas,
        })
    }else{
        res.status(404).json({
            msg: "Ocurrio un error añadiendo la  nota"
        })
    }
}

export const createNota = async (req: Request, res: Response) => {
    const { calificacion } = req.body;

    try {
        const nota = await Nota.create({ calificacion });
        res.json({
            msg: "Nota guardada correctamente",
            nota, // Devuelve la nota creada para confirmación
        });
    } catch (err) {
        console.error(err); // Log del error para depuración
        res.status(500).json({
            msg: "Error al guardar la nota",
        });
    }
};

export const deleteNotas = async(req: Request,res: Response)=>{
    try{
        const val:any = Nota.destroy({
            where: {}, 
            truncate: true
            
        }).then(()=>{
            res.status(200).json({
                msg: "Notas borradas correctamente",
            })
        })
    }catch(err){
        res.status(500).json({
            msg: "Ocurrio un error durante el borrado"
        })
    }       
   
}
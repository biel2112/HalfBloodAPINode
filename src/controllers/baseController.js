import { base } from "../models/Base.js"

class BaseController{
    static async listarBases(req, res){
        try{
            const listaBases = await base.find({});
            res.status(200).json(listaBases);
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na requisição!` })
        }
        
    };

    static async buscarBase(req, res){
        try{
            const id  = req.params.id
            const baseEncontrado = await base.findById(id);
            res.status(200).json(baseEncontrado);
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na requisição!` })
        } 
    };

    static async cadastrarBase(req, res){
        try{
            const novoBase = await base.create(req.body);
            res.status(201).json({ msg: "Criado com sucesso!", base: novoBase });
        } catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha no cadastro de base!` })
        }
    };

    static async atualizarBase(req, res){
        try{
            const id  = req.params.id
            await base.findByIdAndUpdate(id, req.body);
            res.status(200).json({msg: "Base atualizado!"});
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na atualização!` })
        } 
    };

    static async excluirBase(req, res){
        try{
            const id  = req.params.id
            await base.findByIdAndDelete(id);
            res.status(200).json({msg: "Base excluído!"});
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na exclusão!` })
        } 
    };

};

export default BaseController;
import semideus from '../models/Semideus.js';
import { base } from '../models/Base.js';

class SemideusController{
    static async listarSemideuses(req, res){
        try{
            const listaSemideuses = await semideus.find({});
            res.status(200).json(listaSemideuses);
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na requisição!` })
        }
        
    };

    static async buscarSemideus(req, res){
        try{
            const id  = req.params.id
            const semideusEncontrado = await semideus.findById(id);
            res.status(200).json(semideusEncontrado);
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na requisição!` })
        } 
    };

    static async cadastrarSemideus(req, res){
        const novoSemideus = req.body;
        try{
            const baseEncontrado = await base.findById(novoSemideus.base);
            const semideusCompleto = { ...novoSemideus, base: { ...baseEncontrado._doc }};
            const semideusCriado = await semideus.create(semideusCompleto);
            res.status(201).json({ msg: "Criado com sucesso!", semideus: novoSemideus });
        } catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha no cadastro de semideus!` })
        }
    };

    static async atualizarSemideus(req, res){
        try{
            const id  = req.params.id
            await semideus.findByIdAndUpdate(id, req.body);
            res.status(200).json({msg: "Semideus atualizado!"});
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na atualização!` })
        } 
    };

    static async excluirSemideus(req, res){
        try{
            const id  = req.params.id
            await semideus.findByIdAndDelete(id);
            res.status(200).json({msg: "Semideus excluído!"});
        }catch (erro){
            res.status(500).json({ msg: `${erro.msg} - Falha na exclusão!` })
        } 
    };
};

export default SemideusController;
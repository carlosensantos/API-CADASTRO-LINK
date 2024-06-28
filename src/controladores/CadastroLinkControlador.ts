import { Request, Response } from "express";
import { lerDados, adicionarDados } from "../utilitarios/arquivos";
import Link from "../modelos/Link";

export default class CadastroLink {
    async controlador(req: Request, res: Response) {
        const { url, identificador} = req.body

        if (!url || !identificador) {
            return res.status(400).json({
                mensagem: 'a url e o identificador são obrigatorios'
            })
        }

        const bancodedados = await lerDados()

        const existeLink = bancodedados.find(link => {
            return link.identificador === identificador
        })

        if (existeLink){
            return res.status(400).json({
                mensagem: 'o link já existe'
            })
        }

        const novolink = new Link(identificador, url)

        await adicionarDados(novolink)

        return res.status(201).json(novolink)
    }
}
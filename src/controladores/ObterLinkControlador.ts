import { Response, Request } from "express"
import { contarVisitas, lerDados } from "../utilitarios/arquivos"

export default class ObterLink {
    async controlador( req: Request, res: Response ) {
        const { identificador } = req.params

        const bancodedados = await lerDados()

        const existeLink = bancodedados.find(link => {
            return link.identificador === identificador
        })

        if (!existeLink){
            return res.status(400).json({
                mensagem: 'o link não existe'
            })
        }

        await contarVisitas(existeLink.identificador)

        return res.json({
            url: existeLink.url
        })
    }
}
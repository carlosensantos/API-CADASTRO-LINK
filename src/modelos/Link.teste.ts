import Link from "./Link"

describe('Criação de Links', () => {
    test('deve criar um Link', () => {
        const link = new Link('cubosacademy', 'https://cubos.acadademy')

        expect(link).toHaveProperty('identificador', 'cubosacademy')
        expect(link).toHaveProperty('url', 'https://cubos.acadademy')
        expect(link).toHaveProperty('visitas', 0)
    })
})
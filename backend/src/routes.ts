import { 
  FastifyInstance, 
  FastifyPluginOptions, 
  FastifyRequest, 
  FastifyReply } from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";
  
export async function routes(fastity: FastifyInstance, options: FastifyPluginOptions) {

  fastity.get("/teste", (request: FastifyRequest, reply: FastifyReply ) => {

    let responseText = "```json\n{\n  \"nome\": \"Cristiano\",\n  \"sexo\": \"masculino\",\n  \"idade\": 37,\n  \"altura\": 1.82,\n  \"peso\": 105,\n  \"objetivo\": \"perder peso\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"1 fatia de pao integral\",\n        \"1 ovo cozido\",\n        \"1/2 papaia\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n          \"1 iogurte grego natural desnatado\",\n          \"1/2 banana\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de arroz integral\",\n        \"100g de brócolis cozido\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n        \"alimentos\": [\n          \"1 maça\",\n          \"1 colher de sopa de pasta de amendoim\"\n        ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de batata doce cozida\",\n        \"100g de salada verde\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da Noite\",\n        \"alimentos\": [\n          \"1 pote de iogurte grego natural desnatado\"\n        ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteina do soro do leite\",\n    \"Creatina\",\n    \"Glutamina\"\n  ]\n}\n```"

    try {
      // Extrair o JSON
      let jsonString = responseText.replace(/```\w*/g, '')
      .replace(/\n```/g, '').trim()

      let jsonObject = JSON.parse(jsonString)

      return reply.send({ data: jsonObject })

    }catch(err){
      console.log(err)
    }
    reply.send({ ok: true })
  })

  fastity.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handleCreate(request, reply);
  })
}
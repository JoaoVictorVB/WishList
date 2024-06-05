import fastify, { FastifyReply } from "fastify"
import cors from "@fastify/cors"
import { create } from "./controller/create"
import { fetch } from "./controller/fetch"
import { get } from "./controller/get"
import { remove } from "./controller/delete"
import { update } from "./controller/update"

export const app = fastify()

app.register(cors, { origin: "*" })

app.post("/note", create)
app.get("/note", fetch)
app.get("/note/:id", get)
app.delete("/note/:id", remove)
app.patch("/note/:id", update)

app.setErrorHandler((error: any, _:any, reply: FastifyReply) => {
	return reply.status(400).send({error})
})
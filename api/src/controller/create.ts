import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"

interface Request {
	title: string
	content?: string
}

export async function create(request: FastifyRequest, reply: FastifyReply) {

	const {title, content} = request.body as Request 

	const note = await prisma.note.create({
		data: {
			title,
			content,
		}
	})


	return reply.status(201).send(note)

}
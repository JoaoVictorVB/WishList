import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"

interface BodyRequest {
	title: string
	content?: string
}
interface ParamsRequest {
	id: number
}

export async function update(request: FastifyRequest, reply: FastifyReply) {
	const { id } = request.params as ParamsRequest
	const {title, content} = request.body as BodyRequest 

	const note = await prisma.note.update({
		where: {
			id: Number(id)
		},
		data: {
			title,
			content,
		}
	})


	return reply.status(200).send(note)

}
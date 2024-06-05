import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"

interface Request {
	id: number
}

export async function get(request: FastifyRequest, reply: FastifyReply) {
	const { id } = request.params as Request
	const note = await prisma.note.findUnique({
		where: {
			id: Number(id)
		}
	})


	return reply.status(200).send(note)

}
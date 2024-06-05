import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"

interface Request {
	id: number
}

export async function remove(request: FastifyRequest, reply: FastifyReply) {
	const { id } = request.params as Request
	await prisma.note.delete({
		where: {
			id: Number(id)
		}
	})


	return reply.status(204).send()

}
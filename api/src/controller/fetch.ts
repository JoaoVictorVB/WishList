import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"



export async function fetch(__: FastifyRequest, reply: FastifyReply) {
	const note = await prisma.note.findMany()


	return reply.status(200).send(note)

}
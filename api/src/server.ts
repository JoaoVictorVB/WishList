import { app } from "./app";

app.listen({
	host: "0.0.0.0",
	port: 3000

},
function (error: Error | null, address: string) {
	if (error) {
			app.log.error(error)
			process.exit(1)
	}
	console.log(`HTTP server running on: ${address}`)
})

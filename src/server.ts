import { ExpressAdapter } from "infra/http/express.adapter"

const main = () => {
  const app = new ExpressAdapter()
  app.listen(3333)
}
main()

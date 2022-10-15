import { Container } from './infra/container'
import { ExpressAdapter } from './infra/http/express.adapter'

const main = async (): Promise<void> => {
  const container = await Container.init()
  const app = new ExpressAdapter(container.dependencies)
  app.listen(3333)
}

main()

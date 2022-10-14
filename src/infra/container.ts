import { Dependencies } from "domain/protocols";

export class Container {
  private constructor(readonly dependencies: Dependencies.Container) { }

  static async init(): Promise<Container> {
    return new Container({
      repository: {
        users: {}
      }
    })
  }
}

import { parseJagexPlayerToJSON } from "../adapters/Jagex"

export class Player {
  activities: any
  skills: any
  name: string

  constructor(name: string, jagexPlayer: string) {
    const { activities, skills } = parseJagexPlayerToJSON(jagexPlayer)

    this.activities = activities
    this.name = name
    this.skills = skills
  }
}
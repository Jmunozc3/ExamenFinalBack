import { Characterfromapi} from "../types.ts"
import { character} from "./query/character.ts"
import { characters } from "./query/characters.ts"

export const Query = {
    
    character:async(_:unknown,args:{id:string}):Promise<Characterfromapi>=>{
      return await character(args.id);
    },

    charactersByIds:async(_:unknown,args:{ids:string[]}):Promise<Characterfromapi[]>=>{
        return await characters(args.ids);
    }

}
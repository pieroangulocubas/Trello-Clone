"use server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteBoard= async (id:string)=>{
    await db.board.delete({
        where:{
            id
        }
    })

    revalidatePath("organization/org_2ZOjuciI4Whe6A2OTWEVYmZCha5")
}